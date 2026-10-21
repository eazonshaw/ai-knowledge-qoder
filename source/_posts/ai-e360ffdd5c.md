---
title: "失败一次，受益多次：测试 Agent 从记忆到持续学习的工程实践｜QCon上海"
date: 2026-10-21 08:14:43
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "从「构建 AI」到「驾驭 AI」，100+ 实战案例拆解 AI Native 时代的工程新实践！ 2026 年 QCon 全球软件开发大会大会 · 上海站(https://qcon.infoq.cn/"
source_url: "https://www.infoq.cn/article/ZyjObqGawfurPFLBQONd?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-20　|　采集：2026-10-21 08:14:43

## 正文

从「构建 AI」到「驾驭 AI」，100+ 实战案例拆解 AI Native 时代的工程新实践！

[2026 年 QCon 全球软件开发大会大会 · 上海站](https://qcon.infoq.cn/2026/shanghai/schedule)将于 **10 月 22 日—24 日**举办，聚焦 Harness AI 时代的工程实践，围绕 AI Native 架构、Agent Runtime、AI Infra、Data Systems、Agent 安全与可观测、Loop Engineering、Vibe Coding、具身智能与世界模型、端云协同等前沿技术方向，邀请全球技术社区与产业一线的实践者，系统性分享前沿洞察与实战经验，共同探索 AI 从能力到系统、从实验到生产的真实路径。

腾讯 Agent 端到端落地负责人赵旭峰已确认出席 “[Agent 自主进化：从记忆到持续学习](https://qcon.infoq.cn/2026/shanghai/track/1962)” 专题，并发表题为**《**[失败一次，受益多次：测试 Agent 从记忆到持续学习的工程实践](https://qcon.infoq.cn/2026/shanghai/presentation/7341)**》**的主题分享。测试脚本的迭代开发和维护是自动化测试长期痛点：版本一改、地图一换，测试脚本就要人工重写，前置、重试、异常恢复各写一套，用例之间难复用；测试失败往往只留一行 fail，没有前后帧、埋点等证据留存，定位全靠人反复复现，同一问题反复出现却说不清是环境、工具还是业务缺陷；踩过的坑也留在个人脑子里，换人换模块就要从零再来，投入的时间买到的是一次性交付，而非可沉淀的能力。对此，赵旭峰团队思考方向是：先设计稳定的数据结构（知识库、脚本、执行产物），再设计 Agent 行为，让 AI 自主探索界面把模糊需求结构化，自动生成脚本与执行计划，失败时基于截图、报告、埋点等证据自动归因、升版重试，跨机协同实现测试能力从"一次性交付"沉淀为"持续复用、越测越准"的智能闭环。

![飞书文档 - 图片](/ai-knowledge-qoder/_imgs/47ab266a377fafa1.png)

赵旭峰，IEG 品质管理部，Agent 端到端自动化落地负责人。先后在自动驾驶、地图导航与游戏三个高复杂度业务领域从事质量保障与测试开发工作，测试对象覆盖从物理世界感知系统到大规模在线竞技系统，对强实时、高并发场景下的质量风险有系统性认知。现负责腾讯某大型竞技类游戏的测试开发，主导 Agent 驱动的端到端自动化测试体系建设，推动测试用例生成、自动化执行与结果研判的智能化改造。擅长 AI 端到端自动化测试与智能测试工具链设计，长期关注大模型在测试工程领域的落地路径。他在本次会议的详细演讲内容如下：

> **演讲提纲：**
> 
> 1\. 问题：如何从完成任务到积累能力
> 
> -   端到端测试 Agent 的痛点与不确定性来源
>     
> -   单次自愈与持续学习的本质区别
>     
> -   从“每次重新探索”走向“能力持续积累”
>     
> 
> 2\. 选型：经验记忆的关键设计
> 
> -   长上下文与外置记忆的职责边界
>     
> -   成功路径、失败经验与负向知识的不同价值
>     
> -   模型反思、运行证据与人工审核的可信度取舍
>     
> 
> 3\. 方案：分层记忆与持续学习闭环
> 
> -   不同生命周期下的记忆分层
>     
> -   经验的检索、调度与动态上下文构建
>     
> -   经验在调用反馈中持续修订与演化
>     
> 
> 4\. 案例：滚动查找能力的跨任务演化
> 
> -   动态界面中的非首屏目标定位问题
>     
> -   局部提示优化的有效性与迁移局限
>     
> 
> 5\. 总结与展望
> 
> -   从个体 Agent 记忆走向团队共享能力
>     
> -   从被动经验复用走向主动预测与规避
>     
> 
> **实践痛点：**
> 
> -   Agent 目前无法 100%自闭环，复杂问题和阻塞需要 human-in-loop 处理
>     
> 
> **前沿亮点：**
> 
> -   Agent 探索需求、设计测试方案能力
>     
> -   Agent 基于证据自愈闭环
>     
> 
> **听众收益：**
> 
> -   一套可复用的 Agent 工程化方法论：如何用结构化数据（知识库/脚本/执行三层产物）替代提示词堆砌来设计 Agent 工作流，可直接迁移到测试之外的其他 Agent 开发场景。
>     
> -   失败驱动升版的自愈闭环实践经验：了解如何通过截图、报告、埋点等多维证据对失败进行归因分型（区分环境问题、工具故障与业务缺陷），获得一套可落地的证据驱动迭代范式。
>     

除此之外，本次大会还策划了[Loop Engineering](https://qcon.infoq.cn/2026/shanghai/track/1964)、[千行百业 Agent 创新实践](https://qcon.infoq.cn/2026/shanghai/track/1974)、[Agent 自主进化：从记忆到持续学习](https://qcon.infoq.cn/2026/shanghai/track/1962)、[Agent as a Service](https://qcon.infoq.cn/2026/shanghai/track/1967)、[Vibe Coding 时代的新质量债](https://qcon.infoq.cn/2026/shanghai/track/1966)、[理性驾驭 AI 的 SRE 可靠性工程](https://qcon.infoq.cn/2026/shanghai/track/1968)、[金融 AI Native工程实践：从研发提效到业务破局](https://qcon.infoq.cn/2026/shanghai/track/1985)、[AI Infra：算力效率决定规模化落地](https://qcon.infoq.cn/2026/shanghai/track/1969)、[AI Native 架构](https://qcon.infoq.cn/2026/shanghai/track/1961)等 20 个专题论坛，届时将有来自不同行业、不同领域、不同企业的 100+资深专家在现场带来前沿技术洞察和一线实践经验。

查看更多详情可扫码或联系票务经理 18514549229 进行咨询。

![](/ai-knowledge-qoder/_imgs/6254bdfcbe617d2f.jpg)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/ZyjObqGawfurPFLBQONd?utm_source=rss&utm_medium=article）。