---
title: "美团企业级 Agent 的平台化应用实践｜QCon上海"
date: 2026-10-22 08:19:44
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "从「构建 AI」到「驾驭 AI」，100+ 实战案例拆解 AI Native 时代的工程新实践！ 2026 年 QCon 全球软件开发大会大会 · 上海站(https://qcon.infoq.cn/"
source_url: "https://www.infoq.cn/article/BQJltkL1FJ9AG3cMeUmB?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-21　|　采集：2026-10-22 08:19:44

## 正文

从「构建 AI」到「驾驭 AI」，100+ 实战案例拆解 AI Native 时代的工程新实践！

[2026 年 QCon 全球软件开发大会大会 · 上海站](https://qcon.infoq.cn/2026/shanghai/schedule)将于 **10 月 22 日—24 日**举办，聚焦 Harness AI 时代的工程实践，围绕 AI Native 架构、Agent Runtime、AI Infra、Data Systems、Agent 安全与可观测、Loop Engineering、Vibe Coding、具身智能与世界模型、端云协同等前沿技术方向，邀请全球技术社区与产业一线的实践者，系统性分享前沿洞察与实战经验，共同探索 AI 从能力到系统、从实验到生产的真实路径。

美团研发总监李凯已确认出席 “[Agent as a Service](https://qcon.infoq.cn/2026/shanghai/track/1967)” 专题，并发表题为**《**[美团企业级 Agent 的平台化应用实践](https://qcon.infoq.cn/2026/shanghai/presentation/7335)**》**的主题分享。本次演讲将分享美团企业级 Agent 从“能跑”走向“可托付”的平台化实践。模型负责理解与判断，AgentOS 通过 Runtime、Harness、Skill、MCP、CLI、知识库、沙箱、身份注册、权限治理、可观测与评测，让 Agent 能够安全、稳定、持续地执行任务。进一步通过 Multica 将人、Agent、Runtime 和业务流程组织成可追踪、可介入、可恢复、可验收的任务协作体系，并结合 AI SDLC、业务运营、工单托管、袋鼠管家和数字员工等案例，展示企业级 Agent 的落地方法与规模化路径。

![](/ai-knowledge-qoder/_imgs/2eb6a103f8f91944.png)

李凯现任美团 Agent 应用技术团队负责人，技术委员会委员，平台服务数十万 Agent 用户。工作经历包括：OceanBase 团队创始成员、核心数据库引擎负责人；历任美团数据库与中间件研发中心负责人、美团云对象存储负责人、华为 Taurus 数据库架构师。他在本次会议的详细演讲内容如下：

> **演讲提纲**
> 
> **1\. 企业级 Agent 的“手脑分离”架构**
> 
> -   模型擅长理解、判断和规划，但结果具有不确定性
>     
> -   Agent Loop 通过上下文、工具调用和结果回注持续推进任务
>     
> -   Harness 提供知识、工具、状态、沙箱、权限和验证
>     
> -   确定性逻辑交给代码，不确定性判断交给模型
>     
> 
> **2\. Catpaw Studio：企业级 AgentOS**
> 
> -   无状态 Agent Loop、分布式 Session、短周期沙箱和云端存储
>     
> -   Skill、MCP、CLI、知识库和记忆构成能力底座
>     
> -   注册中心统一管理 Agent 身份、权限和责任边界
>     
> -   Trace、评测、告警、成本、版本和回滚构成治理闭环
>     
> -   核心目标：让 Agent 可扩展、可隔离、可观测、可接管
>     
> 
> **3\. 从能力复用到任务协作**
> 
> -   Skill 沉淀任务方法，MCP、CLI 和 Tool 负责真实执行
>     
> -   广场负责能力发现、复用、版本和安全治理
>     
> -   Multica 用 Issue、Task、Runtime 和人工审批组织复杂任务
>     
> -   AgentOS 解决“可靠执行”，Multica 解决“协作完成”
>     
> 
> **4\. 应用案例**
> 
> -   **案例一：AI SDLC**
>     
>     产品、架构、开发、测试 Agent 分工接力
>     
>     独立环境、代码分支、自动测试和 PR 保障交付安全
>     
>     人在需求、方案和验收节点进行确认
>     
>     体现 Harness 与 Multica 如何支撑复杂研发任务
>     
> -   **案例二：袋鼠管家**
>     
>     面向大规模商家，采用商户级沙箱、工作空间和权限隔离
>     
>     评测覆盖用例生产、多轮执行、完整 Trace、断言和综合评分
>     
>     从线上 Bad Case 定位根因，修改 Skill、Prompt 或工具
>     
>     通过基线与候选版本对照、回归评测和人工审核控制发布
>     
>     核心认识：评测不是事后打分，而是 Agent 上线的质量门禁
>     
> 
> **5\. 总结**
> 
> -   企业级 Agent 的建设重点，不只是提升模型能力，而是建立一套包含执行、状态、权限、协作和评测的完整工程体系，推动 Agent 从“能够运行”走向“值得托付”
>     
> 
> **实践痛点**
> 
> -   模型结果不确定、长链路状态和上下文难管理、多 Agent 协作与权限隔离复杂，且平台割裂使部署、观测、评测和成本治理难以规模化
>     
> 
> **前沿亮点**
> 
> -   以“手脑分离”为核心，系统呈现 AgentOS、无状态 Loop、短周期沙箱、云端状态、Skill/MCP/CLI 生态与 Multica 任务协作的融合实践
>     
> 
> **听众收益**
> 
> -   听众将获得一套从任务选型、平台架构、能力建设到人机协同和质量闭环的可复用方法，理解如何把 Agent 从 Demo 推向安全、可控、可衡量的生产应用
>     

除此之外，本次大会还策划了[Loop Engineering](https://qcon.infoq.cn/2026/shanghai/track/1964)、[千行百业 Agent 创新实践](https://qcon.infoq.cn/2026/shanghai/track/1974)、[Agent 自主进化：从记忆到持续学习](https://qcon.infoq.cn/2026/shanghai/track/1962)、[Agent as a Service](https://qcon.infoq.cn/2026/shanghai/track/1967)、[Vibe Coding 时代的新质量债](https://qcon.infoq.cn/2026/shanghai/track/1966)、[理性驾驭 AI 的 SRE 可靠性工程](https://qcon.infoq.cn/2026/shanghai/track/1968)、[金融 AI Native工程实践：从研发提效到业务破局](https://qcon.infoq.cn/2026/shanghai/track/1985)、[AI Infra：算力效率决定规模化落地](https://qcon.infoq.cn/2026/shanghai/track/1969)、[AI Native 架构](https://qcon.infoq.cn/2026/shanghai/track/1961)等 20 个专题论坛，届时将有来自不同行业、不同领域、不同企业的 100+资深专家在现场带来前沿技术洞察和一线实践经验。

查看更多详情可扫码或联系票务经理 18514549229 进行咨询。

![](/ai-knowledge-qoder/_imgs/6254bdfcbe617d2f.jpg)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/BQJltkL1FJ9AG3cMeUmB?utm_source=rss&utm_medium=article）。