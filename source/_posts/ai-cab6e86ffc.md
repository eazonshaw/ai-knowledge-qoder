---
title: "Agentic-Native 增长：Zilliz 如何用 AI Agent 支撑超线性业务扩张｜AICon深圳"
date: 2026-07-27 06:51:45
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "Agent 时代，哪些方向正在成为行业关键变量？50 + 实战案例揭晓答案！ 模型参数规模不断突破，推理成本持续下降，开源生态日益繁荣。当模型能力逐渐成为行业共识，一个新的问题开始浮现：当人人都能获得"
source_url: "https://www.infoq.cn/article/w9Xu1REwNa9kLUkjdBJA?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-07-26　|　采集：2026-07-27 06:51:45

## 正文

Agent 时代，哪些方向正在成为行业关键变量？50 + 实战案例揭晓答案！

模型参数规模不断突破，推理成本持续下降，开源生态日益繁荣。当模型能力逐渐成为行业共识，一个新的问题开始浮现：**当人人都能获得强大的模型能力之后，真正的竞争力还剩下什么？** 答案正在从模型能力本身，转向围绕模型构建可规模化的智能系统；从单点能力提升，转向系统工程与组织级落地能力。

在这一背景下，[2026 年 AICon 人工智能开发与应用大会 · 深圳站](https://aicon.infoq.cn/2026/shenzhen/track)正式启动。本次大会将于 **8 月 21 日—22 日**举办，聚焦 AI 基础设施、大模型系统、智能体工程、数据智能、多模态技术与行业落地等关键方向，邀请来自腾讯、阿里、华为、百度、蚂蚁集团等 50 + 头部科技企业技术负责人、科研机构一线专家，系统性分享前沿洞察与实战干货，共同探讨 AI 技术从能力到系统、从实验到生产的真实路径。

Zilliz 联合创始人兼产品副总裁郭人通已确认出席 “[超级个体与蜂群智能的共生进化](https://aicon.infoq.cn/2026/shenzhen/track/1950)” 专题，并发表题为**《**[Agentic-Native 增长：Zilliz 如何用 AI Agent 支撑超线性业务扩张](https://aicon.infoq.cn/2026/shenzhen/presentation/7184)**》**的主题分享。本次分享将结合 Zilliz Agent 的真实落地案例，重点介绍 Agent 如何在企业环境中实现跨系统协作，以及背后的关键工程实践，包括上下文预算管理、长期 Memory 设计、Skills 工程化、Human-in-the-Loop 机制和异步工作流构建。并且还将进一步讨论，当 Agent 从简单问答演进为业务执行主体后，对数据基础设施提出了哪些新的要求，以及 Agent-Native Data Infrastructure 将如何成为下一代企业智能系统的重要底座。

![](/ai-knowledge-qoder/_imgs/56cb1801bb60c352.png)

郭人通，Zilliz 联合创始人兼产品副总裁，Milvus 核心架构师之一。Milvus 是面向 AI 应用的领先开源向量数据库。他长期专注于大规模 AI 数据基础设施与 lake-native 系统设计，研究与实践方向覆盖 AI 检索、数据分析以及持续 AI 迭代等核心场景。郭人通拥有华中科技大学计算机软件与理论博士学位，相关研究成果发表于 SIGMOD、VLDB、USENIX ATC、ICS 等国际重要系统与数据库会议。目前，他的工作重点聚焦于分布式系统、AI 基础设施与产品架构的交叉领域，持续推动面向下一代 Agent 与 AI 应用的数据基础设施演进。他在本次会议的详细演讲内容如下：

> **演讲提纲：**
> 
> **1\. 为什么业务超线性增长需要 Agentic-Native 组织**
> 
> -   软件公司的增长瓶颈正在从开发效率转向核心人才吸引、组织效率围绕关键员工进行建设的新挑战
>     
> -   客户、工单、知识与流程复杂度增长带来的挑战
>     
> -   Agentic-Native 的核心理念：让 Agent 承担组织中的重复认知与跨系统协调工作，并让 Agent 能力随企业扩张持续成长
>     
> -   从“人处理任务”到“人调度 Agent，Agent 调度系统”
>     
> 
> **2\. Zilliz Agent 的演进之路：从办公助手到企业超级员工**
> 
> -   第一阶段：知识问答与统一信息入口
>     
> -   第二阶段：连接企业核心业务系统
>     
> -   第三阶段：参与客户支持与内部工作流
>     
> -   第四阶段：成为用户与企业之间的智能对接层
>     
> 
> **3\. 企业 Agent 落地的关键工程实践**
> 
> -   **长期 Memory 与超大 Context 构建**：如何服务好客户需要一个企业级 Context，而非独立 Session
>     
> -   **Human-in-the-Loop/Graph**：构建人与 Agent 流程迭代闭环
>     
> -   **大量幕后的同学需要适应走到台前**：组织架构调整与团队角色重定位
>     
> -   **实时与离线任务**：Agent 如何从即时响应走向持续协作
>     
> 
> **4\. Deep Agent Workflow 对数据基础设施的新要求**
> 
> -   企业级 Context 与独立 Session 间的双向迭代支撑
>     
> -   离在线一体统一检索与混合搜索
>     
> -   权限感知与安全访问控制
>     
> 
> **5\. 实践效果与未来展望**
> 
> -   Zilliz Agent 在客户支持、知识复用和内部协作中的实际价值
>     
> -   Agentic-Native 组织带来的效率提升与边际成本下降
>     
> -   从 Copilot 到 Operator：企业 Agent 的下一阶段演进
>     
> -   Agent 如何成为未来企业增长的新基础设施
>     
> 
> **实践痛点**
> 
> -   业务增长后，工单、客户问题、内部知识和协作成本都在增长，如何避免支持团队线性扩张？
>     
> -   Agent 的上下文窗口是有限预算，不是无限空间，如何做上下文分层和预算管理？
>     
> -   组织级 memory 怎么做？
>     
> -   工具越多模型越容易乱选，如何通过 Skills 把工具封装成业务能力？
>     
> -   哪些事情可以自动做，哪些事情必须 human-in-the-loop？
>     
> -   Deep Agent Workflow 对数据基础设施提出了哪些新要求？
>     
> 
> **听众收益**
> 
> -   理解 Agentic-native 增长的核心逻辑：不是用 AI 替代人，而是用 Agent 降低组织增长的边际协调成本
>     
> -   理解为什么 Agent 系统最终会反过来推动数据基础设施升级：统一检索、lake-native、权限感知、混合搜索、按需计算和持续迭代会成为企业 Agent 的底座
>     
> -   获得一个来自 Zilliz 内部的真实案例：如何在业务持续多倍增长的同时，用 Zilliz Agent 这种 Agentic-native 系统支撑客户支持、内部协作、问题分析和用户教育
>     

除此之外，本次大会还策划了[AI Infra、推理工程与异构计算](https://aicon.infoq.cn/2026/shenzhen/track/1949)、[超级个体与蜂群智能的共生进化](https://aicon.infoq.cn/2026/shenzhen/track/1950)、[迈向机器人 AGI 的关键技术与产业实践](https://aicon.infoq.cn/2026/shenzhen/track/1952)、[Agent 安全：从风险到可控](https://aicon.infoq.cn/2026/shenzhen/track/1953)、[端侧智能与 AI 原生终端](https://aicon.infoq.cn/2026/shenzhen/track/1955)、[AI Agent 高价值商业场景实战](https://aicon.infoq.cn/2026/shenzhen/track/1958)等 10 个专题论坛，届时将有来自不同行业、不同领域、不同企业的 50+资深专家在现场带来前沿技术洞察和一线实践经验。

大会限时早鸟票享 9 折专属优惠，现在报名立减 580，更多详情可扫码或联系票务经理 13269078023 进行咨询。

![](/ai-knowledge-qoder/_imgs/8e52c865e044f46d.jpg)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/w9Xu1REwNa9kLUkjdBJA?utm_source=rss&utm_medium=article）。