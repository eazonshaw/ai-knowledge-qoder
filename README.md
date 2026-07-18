# AI 每日新闻速递（Hexo + GitHub Pages）

每天自动从 **InfoQ / 知乎 / Bilibili / 机器之心 / 量子位**等站点的公开 RSS 抓取最新内容，
按关键词筛选出 AI / 大模型相关资讯，**逐条抓取原文正文并转成 Markdown 嵌入文章**（读者在站内即可读全文，无需外跳），
可选由**大模型**生成摘要与「今日要点」，再由 **Hexo** 构建为静态站点并部署到 **GitHub Pages**，支持全文搜索、分类、标签、归档浏览。

## 目录结构

```
ai-news-hexo/
├── _config.yml              # Hexo 主配置（部署前需改 url / deploy）
├── _config.fluid.yml        # Fluid 主题配置（含本地搜索）
├── package.json
├── config/
│   └── sources.js           # RSS 源与 AI 关键词配置
├── tools/
│   └── fetch-news.js        # 抓取 RSS + 抽取正文 + LLM 摘要 + 生成文章
├── source/
│   ├── _posts/              # 每篇资讯全文(ai-*.md) + 每日索引(daily-*.md) + welcome
│   └── about/index.md       # 关于页
└── .github/workflows/
    └── daily.yml            # 每日定时抓取 + 构建 + 部署
```

## 本地运行

```bash
cd ai-news-hexo
npm install

# 抓取原文正文并生成当天的文章（无 API Key 时仅保留正文，不生成摘要）
npm run fetch

# 本地预览
npm run clean && npm run build
npm run server        # 打开 http://localhost:4000
```

## 配置大模型摘要（可选）

正文始终会被抓取嵌入文章；配置大模型后会**额外**为每篇生成摘要，并生成「今日要点」总览。
脚本使用 **OpenAI 兼容接口**，通过环境变量配置。以 DeepSeek 为例：

| 变量 | 说明 | 默认值 |
| --- | --- | --- |
| `LLM_API_KEY` | 大模型 API Key（未设置则跳过摘要，仅保留正文） | 无 |
| `LLM_BASE_URL` | 兼容接口地址 | `https://api.deepseek.com` |
| `LLM_MODEL` | 模型名 | `deepseek-chat` |
| `RSSHUB_BASE` | 自建 RSSHub 地址（知乎/B 站源用） | `https://rsshub.app` |
| `NEWS_HOURS` | 抓取时间窗口（小时） | `48` |
| `MAX_ARTICLES` | 单次最多处理文章数 | `20` |
| `FETCH_CONCURRENCY` | 正文抓取并发数 | `4` |

本地临时设置（PowerShell）：

```powershell
$env:LLM_API_KEY="sk-xxxx"; npm run fetch
```

> 换成 OpenAI：`LLM_BASE_URL=https://api.openai.com`、`LLM_MODEL=gpt-4o-mini`。
> 只要是兼容 `/v1/chat/completions` 的服务即可（通义、Kimi、智谱等大多支持）。

## 新闻源说明

- **InfoQ 中文 / 机器之心**：官方 RSS，最稳定。
- **知乎热榜 / Bilibili 热门**：官方无通用 RSS，经 **RSSHub** 获取。公共实例
  （`rsshub.app`）可能限流或不稳定，**强烈建议自建 RSSHub** 后设置 `RSSHUB_BASE`
  指向你的实例，抓取会更稳定。
- 增删源、调整关键词与数量：编辑 `config/sources.js`。

## 部署到 GitHub Pages

### 1. 推送代码

把 `ai-news-hexo` 作为仓库根目录推送到 GitHub（也可整仓推送，工作流已用
`working-directory: ai-news-hexo` 适配子目录）。

### 2. 修改站点地址

编辑 `_config.yml`：

- 用户主页仓库 `<user>.github.io`：`url: https://<user>.github.io`，`root: /`
- 普通仓库 `<repo>`：`url: https://<user>.github.io/<repo>`，`root: /<repo>/`

### 3. 开启 Pages

仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

### 4. 配置密钥（可选）

**Settings → Secrets and variables → Actions → New repository secret** 添加：

- `LLM_API_KEY`（必填才有智能总结）
- `LLM_BASE_URL`、`LLM_MODEL`、`RSSHUB_BASE`（按需）

### 5. 触发

- 每天 **北京时间 06:00**（`cron: '0 22 * * *'` UTC）自动运行；
- 也可在 **Actions** 页面点 **Run workflow** 手动触发；
- 每次抓取生成的新文章会自动提交回仓库并部署。

## 工作原理

```
定时触发 → tools/fetch-news.js
  ├─ 逐源抓取 RSS（容错，单源失败不影响整体）
  ├─ 关键词过滤 + 时间窗口 + 去重 + 取前 MAX_ARTICLES 条
  ├─ 逐条抓取原文网页并抽取正文 → 转 Markdown（失败回退 RSS 全文/摘要）
  ├─ 可选：大模型为每篇生成摘要 + 生成「今日要点」
  └─ 每篇写入 source/_posts/ai-<hash>.md（含全文），并生成 daily-<日期>.md 索引
→ hexo generate → 上传 Pages 产物 → 部署
```

> 每日索引页用**站内相对链接**指向各篇全文，不外跳原始网址。
> 正文抽取基于 `@extractus/article-extractor` + `turndown`；少数强反爬/纯 JS 渲染的源可能
> 只能取到 RSS 摘要，属正常回退。

## 说明

本站内容由程序自动抓取公开 RSS / 网页正文（可选大模型摘要）生成，仅用于个人资讯聚合与学习，
版权归原文作者与来源站点所有；每篇文末保留原文出处，如有侵权请联系删除。
