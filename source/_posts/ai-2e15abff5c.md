---
title: "基于 AgentKit 重塑研发协作：从编码提效到组织效能跃迁｜AICon北京"
date: 2026-11-12 10:36:32
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "当 Agent 真正进入企业流程，哪些工作可以交给 AI ？50 + 实战案例揭晓答案！ AI 正在从回答问题的辅助工具，走向理解目标、调用系统、完成任务的工作承担者。当 Agent 真正进入企业流程"
source_url: "https://www.infoq.cn/article/I49cXCJFBpOW3PcgPTW3?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-11-11　|　采集：2026-11-12 10:36:32

## 正文

当 Agent 真正进入企业流程，哪些工作可以交给 AI ？50 + 实战案例揭晓答案！

AI 正在从回答问题的辅助工具，走向理解目标、调用系统、完成任务的工作承担者。当 Agent 真正进入企业流程，问题不再是 “如何把 AI 做出来”，而是哪些工作可以交给 AI、结果如何验收、权限、成本与风险如何收住。随着大模型向推理、工具调用、多模态和长任务延伸，开发重心正从单次调用转向上下文、工具、执行环境与反馈回路的设计，Coding Agent 也从代码补全演进为能理解代码库、运行测试、完成复杂任务的工程协作者。OpenAI、Google Cloud、Anthropic 的最新实践共同指向一个结论：模型决定 Agent 能做什么，工程决定它能否真正进入生产、创造价值。

在这一背景下，[2026 年 AICon 人工智能开发与应用大会 · 北京站](https://aicon.infoq.cn/2026/beijing/schedule)正式启动。本次大会将于 **12 月 18–19 日**，在北京新云南皇冠假日酒店举办。本届大会以**探索 A 应用边界**为主题，设置 13 大技术专题，覆盖**大模型后训练、推理优化、Agent 工程、知识工程、智能体评测与安全、自进化系统、AI 软件交付、原生架构及组织变革**等核心方向，汇聚一线技术专家，深入分享 AI 技术突破与企业规模化落地的真实实践。

火山引擎技术专家朱杰已确认出席 “[Agentic Software Engineering｜从代码生成到软件交付](https://aicon.infoq.cn/2026/beijing/track/1989)” 专题，并发表题为**《**[基于 AgentKit 重塑研发协作：从编码提效到组织效能跃迁](https://aicon.infoq.cn/2026/beijing/presentation/7416)**》**的主题分享。AI Coding 提升了个人编码效率，但需求澄清、方案评审、环境准备、测试与发布仍依赖多人串联，组织交付效率未必同步提升。朱杰的本次分享基于字节内部研发实践，以 AgentKit 为案例，介绍如何以 Spec 明确目标、边界与验收标准，将人工决策与多 Agent 执行编排到同一交付流程。重点剖析 AgentKit 支撑的身份权限、沙箱运行、Skills/MCP、质量门禁及观测评测机制，并通过需求澄清到验收回写的全链路演示，说明任务如何委托、结果如何验收、异常如何转交人工。最后给出以交付周期、一次通过率、人工介入率和缺陷为依据，逐步提升自治等级的落地方法。

![飞书文档 - 图片](/ai-knowledge-qoder/_imgs/5ec971de68686074.png)

朱杰，火山引擎计算产品技术专家，火山引擎 AgentKit 产品核心研发成员。长期聚焦 AI Agent 在研发效能领域的创新与落地，深入探索智能体在需求分析、代码开发、测试验证、问题诊断及交付运维等研发全流程中的应用。致力于以 Agent 技术重塑研发协作与交付模式，推动研发流程从“工具辅助”向“智能自治”演进，持续提升端到端研发效率、交付质量与工程体验。

他在本次会议的详细演讲内容如下：

**演讲提纲**

1\. 效率鸿沟：为什么个人提效没有自然转化为组织提效

-   分析 AI Coding 提升编码效率后，需求澄清、方案评审、环境准备、测试与发布中的协作瓶颈，明确从代码生成走向端到端交付需要解决的问题
    

2\. Spec 驱动：建立人和 Agent 的共同任务合约

-   通过 Spec 明确目标、边界、依赖与验收标准，结合项目上下文统一理解
    
-   定义流程节点的输入、输出、证据与责任，减少执行偏差
    

3\. 多 Agent 协作：基于 AgentKit 构建可控的研发流程

-   人工决策与 Agent 执行编排到同一流程
    
-   介绍 AgentKit 的身份权限、沙箱运行、Skills/MCP、观测与评测能力
    
-   介绍质量门禁和人工接管机制
    

4\. 全链路实践：从需求澄清到验收回写

-   演示需求澄清、Spec 确认、Agent 编码与测试、环境部署、验收及结果回写的完整链路，说明关键决策点与异常处理方式
    

5\. 渐进式落地：从场景试点到团队推广

-   选择边界清晰、验收明确的高频场景，以交付周期、一次通过率、人工介入率和缺陷衡量效果，逐步沉淀流程模板、知识与失败经验
    

**听众收益**

-   获得一套 Spec 与流程节点设计方法，能够把模糊需求拆解为有明确输入、输出、责任与验收证据的 Agent 任务
    
-   理解多 Agent 交付所需的关键工程能力，以及权限、沙箱、质量门禁、观测评测和人工接管的设计要点
    
-   获得从小场景试点到团队推广的实施框架，能够通过交付周期、一次通过率、人工介入率与缺陷等指标评估实际收益
    

除此之外，本次大会还策划了[Post-Training Engineering｜数据、奖励与模型能力塑造](https://aicon.infoq.cn/2026/beijing/track/1999)、[大模型推理与算力调度实践](https://aicon.infoq.cn/2026/beijing/track/1993)、[Knowledge Engineering｜让 Agent 理解企业](https://aicon.infoq.cn/2026/beijing/track/1988)、[Multi-Agent Systems](https://aicon.infoq.cn/2026/beijing/track/1987)、[智能体评测与生产可靠性探索](https://aicon.infoq.cn/2026/beijing/track/1990)、[Agent Security｜身份、权限与行动安全](https://aicon.infoq.cn/2026/beijing/track/1991)、[AgentOps｜企业 Agent 全生命周期管理](https://aicon.infoq.cn/2026/beijing/track/1992)、[Self-Evolving Agents｜从经验学习到可控进化](https://aicon.infoq.cn/2026/beijing/track/1997)、[Agentic Software Engineering｜从代码生成到软件交付](https://aicon.infoq.cn/2026/beijing/track/1989)、[Personal Agent](https://aicon.infoq.cn/2026/beijing/track/1994)、[AI 原生架构的演进与治理](https://aicon.infoq.cn/2026/beijing/track/2006)、[AI 时代的组织重构](https://aicon.infoq.cn/2026/beijing/track/2007)、[AI × Industries ｜产业智能化](https://aicon.infoq.cn/2026/beijing/track/2008)等 13 个专题论坛，届时将有来自不同行业、不同领域、不同企业的资深专家在现场带来前沿技术洞察和一线实践经验。

8 折优惠倒计时最后一周，现在报名立减 1160，查看更多详情可扫码或联系票务经理 13269078023 进行咨询。

![](/ai-knowledge-qoder/_imgs/76843bf4174c3fcb.png)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/I49cXCJFBpOW3PcgPTW3?utm_source=rss&utm_medium=article）。