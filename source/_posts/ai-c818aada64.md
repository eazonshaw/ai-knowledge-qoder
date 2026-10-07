---
title: "DataAgent - 快手大数据生产与分析的智能化探索之路｜QCon上海"
date: 2026-10-07 09:08:59
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "从「构建 AI」到「驾驭 AI」，100+ 实战案例拆解 AI Native 时代的工程新实践！ 2026 年 QCon 全球软件开发大会大会 · 上海站(https://qcon.infoq.cn/"
source_url: "https://www.infoq.cn/article/yVWAQGCZCzI838JESA1b?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-05　|　采集：2026-10-07 09:08:59

## 正文

从「构建 AI」到「驾驭 AI」，100+ 实战案例拆解 AI Native 时代的工程新实践！

[2026 年 QCon 全球软件开发大会大会 · 上海站](https://qcon.infoq.cn/2026/shanghai/schedule)

将于 **10 月 22 日—24 日**举办，聚焦 Harness AI 时代的工程实践，围绕 AI Native 架构、Agent Runtime、AI Infra、Data Systems、Agent 安全与可观测、Loop Engineering、Vibe Coding、具身智能与世界模型、端云协同等前沿技术方向，邀请全球技术社区与产业一线的实践者，系统性分享前沿洞察与实战经验，共同探索 AI 从能力到系统、从实验到生产的真实路径。

在这一背景下，[2026 年 QCon 全球软件开发大会大会 · 上海站](https://qcon.infoq.cn/2026/shanghai/schedule)正式启动。本次大会将于 **10 月 22 日—24 日**举办，聚焦 Harness AI 时代的工程实践，围绕 AI Native 架构、Agent Runtime、AI Infra、Data Systems、Agent 安全与可观测、Loop Engineering、Vibe Coding、具身智能与世界模型、端云协同等前沿技术方向，邀请全球技术社区与产业一线的实践者，系统性分享前沿洞察与实战经验，共同探索 AI 从能力到系统、从实验到生产的真实路径。

快手 & 生产平台研发中心研发负责人韩江已确认出席 “[Agentic 时代的数据系统重构](https://qcon.infoq.cn/2026/shanghai/track/1976)” 专题，并发表题为**《**[DataAgent - 快手大数据生产与分析的智能化探索之路](https://qcon.infoq.cn/2026/shanghai/presentation/7230)**》**的主题分享。AI 时代，通过结合 AI 技术重构大数据生产、分析等场景的工作模式，使得数据生产、分析更高效、更智能，实现从“数据驱动”到“智能驱动”的转变。为此快手进行了众多的数据智能化（AI for Data）的建设探索，构建了专注于数据领域 &兼顾通用场景的企业级 Agent —— Data Agent，具备数据全链路智能化能力，包括找数取数、数据开发、归因报告、人群洞察、AB 分析、埋点分析等能力。建设过程中除面临 Mutil-Agent 协同、上下文管理、执行可靠性等通用问题，还面临知识规模大奇异多准确性难保障、数据安全要求高等数据领域特色问题。

![](/ai-knowledge-qoder/_imgs/e4c7394906ea922e.png)

韩江现任快手生产平台研发中心研发负责人，主导快手大数据生产平台-天工从 0～1 建设。24 年开始深耕 AI for Data 提效，深度参与构建了快手统一的大数据智能体 DataAgent，支撑数据生产、分析、 AB 分析等场景的智能化提效。主动会话周活跃用户数近万。10+ 年的大数据平台建设经验，目前深耕知识工程、Harness 工程、Mutil-Agent 架构等技术在大数据场景的落地实践。他在本次会议的详细演讲内容如下：

> **演讲提纲**
> 
> **1\. 背景：快手大数据智能化发展历程**
> 
> -   传统生产、分析工作模式痛点
>     
> -   快手大数据智能化发展历程、业界发展思路对比
>     
> -   DataAgent 整体架构 和 面料的核心挑战
>     
> 
> **2\. 实践：基于 Mutil-Agent + Skill 的整体框架**
> 
> -   父子 Agent + Skill 模式，如何协调通用能力和领域能力，并保障执行可靠性
>     
> -   上下文管理能力，通过 Skill & Tool 的动态加载、智能上下文卸载 & 压缩、智能长短记忆等，让 Agent 越用越智能越用
>     
> -   空间 + 研发包能力，满足不同业务隔离场景
>     
> 
> **3\. 实践：知识工程**
> 
> -   高质量/高精度准入数据集：冷启动种子 + 精度标尺 + 自生长土壤
>     
> -   LLM-wiki 新型知识库：知识不再是散落的文档，而是“人机共建、结构统一、可版本化、可被 LLM 直接消费”的 wiki 化知识资产
>     
> -   知识飞轮：提问 → 召回 → 反馈 → 归因 → 迭代建议 → 知识更新 → 回归验证，形成闭环，保证知识“保鲜 + 保活”
>     
> 
> **4\. 实践：效果评测**
> 
> -   Trace & 评测平台建设实践
>     
> -   评测集构建 & 自动化评测实践
>     
> 
> **5\. 实践：生产 & 分析场景落地应用**
> 
> -   端到端数据生产应用案例和效果
>     
> -   智能化数据分析应用案例和效果
>     
> 
> **6\. 总结与展望**
> 
> -   知识飞轮，通过线上真实问题的智能化洞察、诊断，构建知识飞轮。驱动 DataAgent 越来越准确
>     
> -   Harnrss 工程，从性能、成本等方面持续优化，驱动 DataAgent 越来越高效易用
>     
> 
> **实践痛点**
> 
> -   面临真实业务场景，百万级的数据资产规模，如何实现进行知识增强、消歧、准确召回是影响准确性的核心原因
>     
> -   数据场景提问返回，如果通过知识飞轮进行真实问题的分析诊断，发现问题（知识、工具等）推进 Agent 效果的持续进化
>     
> -   数据场景，如何进行不同业务领域能力的协同和隔离，如何处置爆炸式的上下文等
>     
> 
> **前沿亮点**
> 
> -   具有特色的 DataAgent 建设思路：父子 Agent 模式、知识飞轮等具有特色的技术实践
>     
> -   真实业务场景下实践案例分享：结合快手真实场景，分享 DataAgent 的演进过程与实践效果
>     
> 
> **听众收益**
> 
> -   了解 Agent 技术在数据领域落地面临的核心挑战
>     
> -   掌握 DataAgent 在 Mutil-Agent 协同、上下文管理等通用问题。和知识工程、效果评测等领域特色问题的实践解决方案
>     
> -   了解端到端数据生产、智能化数据分析的真实应用案例和效果
>     

除此之外，本次大会还策划了[Loop Engineering](https://qcon.infoq.cn/2026/shanghai/track/1964)、[千行百业 Agent 创新实践](https://qcon.infoq.cn/2026/shanghai/track/1974)、[Agent 自主进化：从记忆到持续学习](https://qcon.infoq.cn/2026/shanghai/track/1962)、[Agent as a Service](https://qcon.infoq.cn/2026/shanghai/track/1967)、[Vibe Coding 时代的新质量债](https://qcon.infoq.cn/2026/shanghai/track/1966)、[理性驾驭 AI 的 SRE 可靠性工程](https://qcon.infoq.cn/2026/shanghai/track/1968)、[金融 AI Native工程实践：从研发提效到业务破局](https://qcon.infoq.cn/2026/shanghai/track/1985)、[AI Infra：算力效率决定规模化落地](https://qcon.infoq.cn/2026/shanghai/track/1969)、[AI Native 架构](https://qcon.infoq.cn/2026/shanghai/track/1961)等 20 个专题论坛，届时将有来自不同行业、不同领域、不同企业的 100+资深专家在现场带来前沿技术洞察和一线实践经验。

查看更多详情可扫码或联系票务经理 18514549229 进行咨询。

![飞书文档 - 图片](/ai-knowledge-qoder/_imgs/e200e08399500909.png)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/yVWAQGCZCzI838JESA1b?utm_source=rss&utm_medium=article）。