---
title: "TypeSafe AI发布Jev：一种只返回类型化概率而非文本的决策模型"
date: 2026-10-28 08:49:53
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "前 OpenAI 研究员 Diogo Almeida 创立的旧金山 AI 实验室TypeSafe AI(https://typesafe.ai/)发布了Jev(https://typesafe.ai/"
source_url: "https://www.infoq.cn/article/3o7gwgKJt2SbH8AhdpkU?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-27　|　采集：2026-10-28 08:49:53

## 正文

前 OpenAI 研究员 Diogo Almeida 创立的旧金山 AI 实验室[TypeSafe AI](https://typesafe.ai/)发布了[Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)，这是其所谓的 System One Models 中的首款产品。Jev 不生成文本，而是返回带有类型的概率化决策，软件可以直接据此采取行动。

调用方会发送一段状态信息（可以是字符串或结构化数据）以及一组带有类型定义的问题。Jev 会在单次并行处理中对它们进行全部评估，并返回[Choice（选择）](https://docs.typesafe.ai/primitives/choice)、[Score（评分）](https://docs.typesafe.ai/primitives/score)和[Noul（布尔概率）](https://docs.typesafe.ai/primitives/noul)答案，同时附带概率分布和置信度值。这样，调用代码就可以在置信度高于阈值时直接执行操作，并在低于阈值时进行升级处理。其输入成本为每百万 Token 0.042 美元，输出免费，上下文窗口为 32000 个 Token，TypeSafe 给出的端到端延迟为 70 毫秒至 500 毫秒。该模型的训练采用了一种名为“校准决策强化学习”（Reinforcement Learning for Calibrated Decisions）的方法。

Vercel 在 Jev 发布的第二天就将其加入了[AI Gateway](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway)，并表示在 24 小时内，它已覆盖了[近13%的付费团队](https://vercel.com/blog/ai-gateway-jev-model-launch)，这一比例是 GPT-5.6 系列模型的两倍。Netlify 随后也进行了[跟进](https://www.netlify.com/changelog/typesafe-jev-ai-gateway/)，LangChain 发布了[TypeSafeClassifier集成](https://www.langchain.com/blog/building-a-harness-with-jev)，支持模型路由以及一种 AutoMode 中间件，该中间件可在工具调用执行前对其进行筛查。此外，几天内还[涌现出五个独立的Elixir语言客户端](https://elixirforum.com/t/typesafe-sdk-jev-the-first-system-one-model-from-typesafe/76700)。

![](/ai-knowledge-qoder/_imgs/0077e6a1801f88a6.png)

Vercel 的工程师 Pranit Sharma 发现，安全分类器的运行速度比它所替代的大语言模型（LLM）[快了5到18倍](https://x.com/fazxes/status/2100300097695232164/photo/1)。Bryo AI 的 CTO Nikhil Mudholkar 认为，[Gemini在邮件分类上的准确率略高](https://x.com/nikhilmudholkar/status/2100604560335139083)，但成本却高出了 10 到 20 倍，他看重 Jev 是因为它是唯一能返回真实概率的模型。Earendil 的 CTO Armin Ronacher 在接受[TechCrunch](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)采访时表示，这种设计“在一定程度上将幻觉问题交给了用户”，因为用户必须自行决定 50%的概率是否值得采取行动，他还指出模型路由是另一个非常适合的应用场景。[OpenChamber](https://openchamber.dev/blog/jev-typesafe-ai/)对 12759 条发布推文进行的分析显示，用户报告的速度提升中位数为 7 倍（远低于官方宣称的 193.6 倍），成本节省的中位数为 30 倍，延迟中位数为 76 毫秒，上四分位数为 270 毫秒。

[Reddit](https://www.reddit.com/r/singularity/comments/1whop6b/comment/pab39fn/)上的一位开发者称该模型在 200 毫秒到 300 毫秒延迟下处理智能体任务的表现“绝对疯狂”，而 Hacker News 上的一位早期体验用户称其“非常巧妙”，同时提醒其分布外行为（out of distribution）的表现会与大语言模型有所不同。

在[Hacker News](https://news.ycombinator.com/item?id=49717558)上，一位开发者指出，Jev 虽然不会输出无效的类型，但仍然可能输出完全错误的合法值：

> 首先，祝贺团队发布了真正有趣且新颖的东西。不过，似乎更准确的标题应该是“Jev：用通用生成能力换取快速的类型化推理”。
> 
> 这确实很有意思，但速度对比似乎有些误导性？能够输出图灵完备语言代码的生成式模型，理论上可以完成计算机能做的任何事情。
> 
> Jev 只能生成结构化输出，对吧？这对于分类、路由、评分可能非常有用，但它与我们今天用于代码和自动化的代码生成模型完全不同。
> 
> 另外，“不会产生幻觉”的说法似乎不准确？确实，它不会输出无效的类型，但仍然可能输出完全错误的合法值。你完全可以通过适当的约束机制等，强制大语言模型输出结构化内容。

准备替换 LLM 分类器的团队应从[jev-1.13版本的“已知不稳定特性（jaggedness）”页面](https://docs.typesafe.ai/model-jaggedness/jev-1.13)入手，该页面记录了其在计数、算术和日期比较方面的不可靠性，以及在处理包含大量噪声的长状态信息时准确率的下降问题，并建议将数学计算保留在代码中完成。在版本管理上，请固定使用如 jev-1.13.0 这样的具体版本，而不是使用不断更新的`jev-latest`和`jev-preview`[别名](https://docs.typesafe.ai/models)，在进行基准测试时，请使用[System One adapter](https://github.com/typesafe-ai/system-one-adapter-python)适配器让现有模型针对相同的 Schema 运行。[快速入门指南](https://docs.typesafe.ai/introduction/quickstart)涵盖了 API 密钥、SDK 和 Playground 的使用说明。

TypeSafe AI 是一家位于旧金山的 AI 实验室，由 Diogo Almeida、Erik Gafni 和 Sasha Sheng 共同创立。Almeida 是 RLHF 的联合发明人，并参与了 ChatGPT 背后的研究工作。

查看英文原文：[TypeSafe AI Releases Jev: A Decision-Only Model That Returns Typed Probabilities Instead of Text](https://www.infoq.com/news/2026/10/typesafe-ai-jev-released/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/3o7gwgKJt2SbH8AhdpkU?utm_source=rss&utm_medium=article）。