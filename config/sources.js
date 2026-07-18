/**
 * RSS 新闻源配置
 *
 * 说明：
 * - InfoQ / 机器之心 提供官方 RSS，最稳定。
 * - 知乎 / Bilibili 官方无通用 RSS，这里通过 RSSHub 获取。
 *   RSSHub 公共实例可能不稳定或被限流，建议自建实例后把 RSSHUB_BASE 环境变量指向它，
 *   例如 RSSHUB_BASE=https://rsshub.example.com
 * - 每个源都可单独失败而不影响整体（脚本内做了容错）。
 *
 * 字段：
 *   name     源名称（用于分组展示）
 *   url      RSS 地址
 *   filter   是否只保留含 AI 关键词的条目（综合站点建议 true，垂直 AI 源可 false）
 *   limit    单源最多取用的条目数
 */

const RSSHUB = process.env.RSSHUB_BASE || 'https://rsshub.app';

module.exports = {
  // 命中任一关键词即视为 AI 相关
  keywords: [
    'AI', '人工智能', '大模型', '大語言', '大语言', 'LLM', 'GPT', 'Claude',
    'Gemini', 'DeepSeek', '通义', '文心', '豆包', 'Kimi', '机器学习', '深度学习',
    '神经网络', 'AIGC', '生成式', 'Transformer', 'Agent', '智能体', 'RAG',
    '多模态', 'OpenAI', 'Anthropic', '英伟达', 'NVIDIA', '算力', 'AGI',
    'Copilot', 'Stable Diffusion', 'Sora', 'MoE', '扩散模型', 'Diffusion'
  ],

  sources: [
    {
      name: 'InfoQ 中文',
      url: 'https://www.infoq.cn/feed.xml',
      filter: true,
      limit: 15
    },
    {
      name: 'InfoQ (EN)',
      url: 'https://feed.infoq.com/',
      filter: true,
      limit: 15
    },
    {
      name: '机器之心',
      url: 'https://www.jiqizhixin.com/rss',
      filter: false,
      limit: 12
    },
    {
      name: '量子位',
      url: `${RSSHUB}/qbitai/category/资讯`,
      filter: false,
      limit: 12
    },
    {
      name: '知乎热榜',
      url: `${RSSHUB}/zhihu/hotlist`,
      filter: true,
      limit: 20
    },
    {
      name: 'Bilibili 综合热门',
      url: `${RSSHUB}/bilibili/popular/all`,
      filter: true,
      limit: 20
    }
  ]
};
