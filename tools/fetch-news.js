#!/usr/bin/env node
/**
 * 每日 AI 新闻抓取 + 正文抽取 + LLM 摘要 + 生成 Hexo 文章
 *
 * 流程：
 *   1. 读取 config/sources.js 中的 RSS 源
 *   2. 逐源抓取、按关键词过滤、按时间窗口筛选、去重、按时间排序取前 N 条
 *   3. 逐条抓取原文网页并抽取正文，转成 Markdown（失败则回退到 RSS 全文）
 *   4. 可选：调用大模型为每篇生成摘要 + 生成「今日要点」
 *   5. 每篇文章生成独立的 md（含全文，无需外跳），并生成一个每日索引页
 *
 * 环境变量：
 *   LLM_API_KEY      大模型 API Key（缺省则不生成摘要，只保留正文）
 *   LLM_BASE_URL     OpenAI 兼容接口地址，默认 https://api.deepseek.com
 *   LLM_MODEL        模型名，默认 deepseek-chat
 *   RSSHUB_BASE      自建 RSSHub 地址（可选，见 config/sources.js）
 *   NEWS_HOURS       时间窗口（小时），默认 48
 *   MAX_ARTICLES     单次最多处理的文章数，默认 20
 *   FETCH_CONCURRENCY 正文抓取并发数，默认 4
 *   DOWNLOAD_IMAGES  是否下载文章图片到本地（0 关闭），默认开启
 *   IMG_CONCURRENCY  图片下载并发数，默认 4
 *   MAX_IMG_BYTES    单张图片体积上限（字节），默认 5MB，超出则保留原始链接
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const Parser = require('rss-parser');
const { extract } = require('@extractus/article-extractor');
const TurndownService = require('turndown');
const { sources, keywords } = require('../config/sources');

const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'source', '_posts');
const IMGS_DIR = path.join(ROOT, 'source', '_imgs');

const LLM_API_KEY = process.env.LLM_API_KEY || '';
const LLM_BASE_URL = (process.env.LLM_BASE_URL || 'https://api.deepseek.com').replace(/\/$/, '');
const LLM_MODEL = process.env.LLM_MODEL || 'deepseek-chat';
const NEWS_HOURS = parseInt(process.env.NEWS_HOURS || '48', 10);
const MAX_ARTICLES = parseInt(process.env.MAX_ARTICLES || '20', 10);
const FETCH_CONCURRENCY = parseInt(process.env.FETCH_CONCURRENCY || '4', 10);
const DOWNLOAD_IMAGES = process.env.DOWNLOAD_IMAGES !== '0';
const IMG_CONCURRENCY = parseInt(process.env.IMG_CONCURRENCY || '4', 10);
const MAX_IMG_BYTES = parseInt(process.env.MAX_IMG_BYTES || '5242880', 10); // 5MB

// 站点根路径（从 _config.yml 读取，用于拼装本地图片的站内绝对路径）
const SITE_ROOT = readSiteRoot();
const IMG_PUBLIC_BASE = SITE_ROOT.replace(/\/$/, '') + '/_imgs';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const parser = new Parser({
  timeout: 20000,
  headers: {
    'User-Agent': UA,
    Accept: 'application/rss+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.8, */*;q=0.7'
  }
});

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*'
});
// 保留图片与图注
turndown.keep(['figure', 'figcaption']);

/* ----------------------------- 工具函数 ----------------------------- */

function stripHtml(html = '') {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

// 去掉各站点 RSS 常见的无信息占位文案
function cleanContent(text = '') {
  const cleaned = text.replace(/[>》]+$/g, '').trim();
  if (/^点击查看原文$/.test(cleaned) || /^阅读全文$/.test(cleaned) || cleaned.length < 4) {
    return '';
  }
  return cleaned;
}

function hitKeyword(text = '') {
  const lower = text.toLowerCase();
  return keywords.some((k) => lower.includes(k.toLowerCase()));
}

function normalizeTitle(t = '') {
  return t.toLowerCase().replace(/[\s\p{P}]/gu, '');
}

// 由链接生成稳定、URL 友好的 slug（作为文件名与永久链接）
function slugFromLink(link = '') {
  return 'ai-' + crypto.createHash('md5').update(link).digest('hex').slice(0, 10);
}

function shanghaiParts(d = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).formatToParts(d);
  const m = {};
  parts.forEach((p) => (m[p.type] = p.value));
  return m;
}

function dateStr(d = new Date()) {
  const m = shanghaiParts(d);
  return `${m.year}-${m.month}-${m.day}`;
}

function dateTimeStr(d = new Date()) {
  const m = shanghaiParts(d);
  return `${m.year}-${m.month}-${m.day} ${m.hour}:${m.minute}:${m.second}`;
}

function yfmEscape(s = '') {
  return String(s).replace(/"/g, '\\"');
}

// 并发受限的 map
async function mapLimit(arr, limit, fn) {
  const ret = new Array(arr.length);
  let idx = 0;
  const workers = Array.from({ length: Math.min(limit, arr.length) || 1 }, async () => {
    while (idx < arr.length) {
      const cur = idx++;
      ret[cur] = await fn(arr[cur], cur);
    }
  });
  await Promise.all(workers);
  return ret;
}

/* ----------------------------- 图片本地化 ----------------------------- */

// 从 _config.yml 读取 root（项目页部署时如 /ai-knowledge-qoder/）
function readSiteRoot() {
  try {
    const cfg = fs.readFileSync(path.join(ROOT, '_config.yml'), 'utf8');
    const m = cfg.match(/^root:\s*(.+?)\s*$/m);
    if (m) {
      let r = m[1].trim().replace(/^["']|["']$/g, '');
      if (r) {
        if (!r.startsWith('/')) r = '/' + r;
        if (!r.endsWith('/')) r += '/';
        return r;
      }
    }
  } catch (_) {
    /* ignore */
  }
  return '/';
}

const EXT_BY_MIME = {
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
  'image/bmp': 'bmp',
  'image/x-icon': 'ico',
  'image/avif': 'avif'
};

function extFromUrl(u = '') {
  try {
    const p = new URL(u).pathname;
    const m = p.match(/\.([a-zA-Z0-9]{2,5})(?:$|\?)/);
    if (m) return m[1].toLowerCase();
  } catch (_) {
    /* ignore */
  }
  return '';
}

// 下载单张图片到 source/_imgs，返回站内绝对路径（含 root）；失败返回 null
async function downloadImage(rawUrl, baseLink) {
  let abs;
  try {
    abs = new URL(rawUrl, baseLink || undefined).href;
  } catch (_) {
    return null;
  }
  if (!/^https?:\/\//i.test(abs)) return null;

  const hash = crypto.createHash('md5').update(abs).digest('hex').slice(0, 16);

  // 已下载过（同一 hash 前缀）则直接复用，避免重复下载
  try {
    if (fs.existsSync(IMGS_DIR)) {
      const existing = fs.readdirSync(IMGS_DIR).find((f) => f.startsWith(hash + '.'));
      if (existing) return `${IMG_PUBLIC_BASE}/${existing}`;
    }
  } catch (_) {
    /* ignore */
  }

  try {
    const resp = await fetch(abs, {
      headers: { 'user-agent': UA, referer: baseLink || abs, accept: 'image/*,*/*;q=0.8' },
      signal: AbortSignal.timeout(20000)
    });
    if (!resp.ok) return null;
    const ct = (resp.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
    if (ct && !ct.startsWith('image/')) return null;
    const buf = Buffer.from(await resp.arrayBuffer());
    if (!buf.length || buf.length > MAX_IMG_BYTES) return null;
    const ext = EXT_BY_MIME[ct] || extFromUrl(abs) || 'img';
    if (!fs.existsSync(IMGS_DIR)) fs.mkdirSync(IMGS_DIR, { recursive: true });
    const fname = `${hash}.${ext}`;
    fs.writeFileSync(path.join(IMGS_DIR, fname), buf);
    return `${IMG_PUBLIC_BASE}/${fname}`;
  } catch (_) {
    return null;
  }
}

// 将正文 Markdown/HTML 中的远程图片下载到本地，并把引用改为本地路径
async function localizeImages(md, baseLink) {
  if (!DOWNLOAD_IMAGES || !md) return md;

  const urls = new Set();
  // Markdown 图片：![alt](url "title")
  const mdImg = /!\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+["'][^"']*["'])?\s*\)/g;
  // HTML 图片：<img ... src="url">（被 turndown 保留的 figure 内）
  const htmlImg = /<img\b[^>]*?\ssrc\s*=\s*["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = mdImg.exec(md))) urls.add(m[1]);
  while ((m = htmlImg.exec(md))) urls.add(m[1]);

  const list = [...urls].filter((u) => u && !/^data:/i.test(u));
  if (!list.length) return md;

  const mapping = {};
  await mapLimit(list, IMG_CONCURRENCY, async (u) => {
    const local = await downloadImage(u, baseLink);
    if (local) mapping[u] = local;
  });

  let out = md;
  // 长链接优先替换，避免短链接为长链接子串时误伤
  for (const orig of Object.keys(mapping).sort((a, b) => b.length - a.length)) {
    out = out.split(orig).join(mapping[orig]);
  }
  return out;
}

/* ----------------------------- 抓取 RSS 列表 ----------------------------- */

async function fetchSource(src) {
  try {
    // 对含中文等非 ASCII 字符的地址做转义，避免 "unescaped characters" 错误
    const feed = await parser.parseURL(encodeURI(src.url));
    const now = Date.now();
    const windowMs = NEWS_HOURS * 3600 * 1000;

    let items = (feed.items || []).map((it) => {
      const rssHtml = it['content:encoded'] || it.content || it.summary || '';
      const snippet = cleanContent(stripHtml(it.contentSnippet || rssHtml));
      return {
        source: src.name,
        title: (it.title || '').trim(),
        link: it.link || it.guid || '',
        pubDate: it.isoDate || it.pubDate || '',
        ts: it.isoDate || it.pubDate ? new Date(it.isoDate || it.pubDate).getTime() : 0,
        snippet: snippet.slice(0, 300),
        rssHtml // 保留 RSS 原始 HTML，作为正文抓取失败时的回退
      };
    });

    const withinWindow = items.filter((it) => !it.ts || now - it.ts <= windowMs);
    items = withinWindow.length ? withinWindow : items;

    if (src.filter) {
      items = items.filter((it) => hitKeyword(`${it.title} ${it.snippet}`));
    }

    items.sort((a, b) => b.ts - a.ts);
    items = items.slice(0, src.limit || 15);

    console.log(`  ✓ ${src.name}: 采用 ${items.length} 条`);
    return items;
  } catch (err) {
    console.warn(`  ✗ ${src.name} 抓取失败: ${err.message}`);
    return [];
  }
}

async function fetchList() {
  console.log(`开始抓取 ${sources.length} 个 RSS 源...`);
  const results = await Promise.all(sources.map(fetchSource));
  const all = results.flat();

  const seen = new Set();
  const deduped = [];
  for (const it of all) {
    const key = (it.link || '') + '|' + normalizeTitle(it.title);
    if (it.title && it.link && !seen.has(key)) {
      seen.add(key);
      deduped.push(it);
    }
  }
  deduped.sort((a, b) => b.ts - a.ts);
  const picked = deduped.slice(0, MAX_ARTICLES);
  console.log(`共 ${all.length} 条，去重后 ${deduped.length} 条，本次处理前 ${picked.length} 条`);
  return picked;
}

/* ----------------------------- 抓取正文 ----------------------------- */

function htmlToMarkdown(html) {
  let md = turndown.turndown(html || '').trim();
  md = md
    .replace(/\n{3,}/g, '\n\n') // 收敛空行
    .replace(/^点击查看原文\s*$/gm, '')
    .trim();
  return md;
}

// 返回正文 Markdown（尽量抓原文网页；失败回退 RSS 全文）
async function fetchArticleBody(item) {
  // 1) 优先抽取原文网页正文
  try {
    const article = await extract(
      item.link,
      {},
      { headers: { 'user-agent': UA, 'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8' } }
    );
    if (article && article.content) {
      const md = htmlToMarkdown(article.content);
      if (md.length >= 80) {
        const localized = await localizeImages(md, item.link);
        return { md: localized, author: article.author || '', published: article.published || item.pubDate };
      }
    }
  } catch (err) {
    console.warn(`    · 正文抽取失败(${item.source}) ${err.message}`);
  }

  // 2) 回退：RSS 自带的全文 HTML（如机器之心等）
  if (item.rssHtml && stripHtml(item.rssHtml).length >= 80) {
    const md = htmlToMarkdown(item.rssHtml);
    if (md.length >= 80) {
      const localized = await localizeImages(md, item.link);
      return { md: localized, author: '', published: item.pubDate };
    }
  }

  // 3) 再回退：RSS 摘要
  if (item.snippet && item.snippet.length >= 40) {
    return { md: item.snippet, author: '', published: item.pubDate };
  }

  return null;
}

/* ----------------------------- LLM 摘要 ----------------------------- */

async function callLLM(messages, temperature = 0.3) {
  const resp = await fetch(`${LLM_BASE_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${LLM_API_KEY}` },
    body: JSON.stringify({ model: LLM_MODEL, temperature, messages })
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`HTTP ${resp.status}: ${text.slice(0, 160)}`);
  }
  const data = await resp.json();
  const content = data.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error('返回内容为空');
  return content;
}

async function summarizeArticle(item) {
  if (!LLM_API_KEY) return '';
  try {
    const body = item.bodyMd.slice(0, 3500);
    const prompt = `请用简体中文为下面这篇 AI 相关文章写一段 2-4 句话的摘要，客观精炼，直接给出摘要正文，不要任何前缀或客套。\n\n标题：${item.title}\n\n正文：\n${body}`;
    return await callLLM([
      { role: 'system', content: '你是严谨的中文科技编辑，只依据给定内容总结，不编造。' },
      { role: 'user', content: prompt }
    ]);
  } catch (err) {
    console.warn(`    · 摘要生成失败(${item.title.slice(0, 20)}) ${err.message}`);
    return '';
  }
}

async function buildOverview(items) {
  if (!LLM_API_KEY) return '';
  try {
    const list = items.map((it, i) => `${i + 1}. [${it.source}] ${it.title}`).join('\n');
    const prompt = `以下是今天采集到的 ${items.length} 条 AI 资讯标题。请用简体中文写 3-5 句话的「今日要点」总览，概括今天 AI 领域的主要动向，客观精炼，直接给出内容。\n\n${list}`;
    return await callLLM([
      { role: 'system', content: '你是资深 AI 科技编辑。' },
      { role: 'user', content: prompt }
    ]);
  } catch (err) {
    console.warn(`  · 今日要点生成失败: ${err.message}`);
    return '';
  }
}

/* ----------------------------- 生成文章 ----------------------------- */

function excerptFrom(item) {
  const base = item.summary || item.bodyMd;
  return stripHtml(base)
    .replace(/[#*`>_~[\]]/g, '') // 去掉 Markdown 符号
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 100);
}

function writeArticlePost(item, dtStr) {
  const fm = [
    '---',
    `title: "${yfmEscape(item.title)}"`,
    `date: ${dtStr}`,
    'categories:',
    '  - AI 新闻',
    `  - ${item.source}`,
    'tags:',
    '  - AI',
    `  - ${item.source}`,
    `excerpt: "${yfmEscape(excerptFrom(item))}"`,
    `source_url: "${yfmEscape(item.link)}"`,
    '---',
    ''
  ].join('\n');

  const meta = `> 来源：${item.source}　|　原发布：${item.published || '未知'}　|　采集：${dtStr}\n`;
  const summaryBlock = item.summary ? `\n## 摘要\n\n${item.summary}\n` : '';
  const bodyBlock = `\n## 正文\n\n${item.bodyMd}\n`;
  const footer = `\n\n---\n\n> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：${item.source}（${item.link}）。`;

  const file = path.join(POSTS_DIR, `${item.slug}.md`);
  fs.writeFileSync(file, fm + meta + summaryBlock + bodyBlock + footer, 'utf8');
  return file;
}

function writeDailyIndex(items, dStr, dtStr, overview) {
  const fm = [
    '---',
    `title: "AI 每日速递 · ${dStr}"`,
    `date: ${dtStr}`,
    'categories:',
    '  - AI 新闻',
    'tags:',
    '  - 每日速递',
    `excerpt: "汇总 ${items.length} 篇当日 AI 资讯全文，点击标题即可在站内阅读原文。"`,
    '---',
    ''
  ].join('\n');

  let body = '';
  if (overview) body += `## 今日要点\n\n${overview}\n\n`;

  body += `## 全部资讯（${items.length} 篇）\n\n`;
  const bySource = {};
  for (const it of items) (bySource[it.source] = bySource[it.source] || []).push(it);
  for (const [name, list] of Object.entries(bySource)) {
    body += `### ${name}\n\n`;
    for (const it of list) {
      // 站内相对链接：与本索引页同处 /年/月/日/ 目录下，不外跳原始链接
      const line = it.summary ? ` — ${it.summary.replace(/\s+/g, ' ').slice(0, 60)}` : '';
      body += `- [${it.title}](../${it.slug}/)${line}\n`;
    }
    body += '\n';
  }

  const file = path.join(POSTS_DIR, `daily-${dStr}.md`);
  fs.writeFileSync(file, fm + body, 'utf8');
  return file;
}

/* ----------------------------- 主流程 ----------------------------- */

async function main() {
  const dStr = dateStr();
  const dtStr = dateTimeStr();
  console.log(`=== 生成 ${dStr} 的 AI 每日速递（抓取全文模式）===`);

  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });

  const list = await fetchList();
  if (!list.length) {
    console.error('没有抓取到任何条目，终止。');
    process.exitCode = 1;
    return;
  }

  console.log(`开始抓取正文（并发 ${FETCH_CONCURRENCY}）...`);
  await mapLimit(list, FETCH_CONCURRENCY, async (item) => {
    const body = await fetchArticleBody(item);
    if (body) {
      item.bodyMd = body.md;
      item.published = body.published || item.pubDate;
      item.slug = slugFromLink(item.link);
      console.log(`  ✓ 正文 ${item.source} · ${item.title.slice(0, 24)}（${item.bodyMd.length} 字）`);
    } else {
      console.warn(`  ✗ 放弃（无正文）: ${item.title.slice(0, 30)}`);
    }
  });

  const usable = list.filter((it) => it.bodyMd);
  if (!usable.length) {
    console.error('所有条目均未取到正文，终止（不生成空文章）。');
    process.exitCode = 1;
    return;
  }

  if (LLM_API_KEY) {
    console.log('调用大模型生成摘要...');
    await mapLimit(usable, Math.min(FETCH_CONCURRENCY, 3), async (item) => {
      item.summary = await summarizeArticle(item);
    });
  } else {
    console.log('未设置 LLM_API_KEY，跳过摘要，仅保留正文。');
  }

  const overview = await buildOverview(usable);

  let count = 0;
  for (const item of usable) {
    writeArticlePost(item, dtStr);
    count++;
  }
  const indexFile = writeDailyIndex(usable, dStr, dtStr, overview);

  console.log(`已生成 ${count} 篇文章 + 索引页 ${path.relative(ROOT, indexFile)}`);
  console.log('=== 完成 ===');
}

main().catch((err) => {
  console.error('脚本异常:', err);
  process.exitCode = 1;
});
