---
title: "企业级 Agent Infra 架构实践：从安全沙箱到网络管控与身份治理｜QCon上海"
date: 2026-10-05 08:19:37
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "从「构建 AI」到「驾驭 AI」，100+ 实战案例拆解 AI Native 时代的工程新实践！ 2026 年 QCon 全球软件开发大会大会 · 上海站(https://qcon.infoq.cn/"
source_url: "https://www.infoq.cn/article/bLB8RQ6sd3ZGQts0D4tP?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-03　|　采集：2026-10-05 08:19:37

## 正文

从「构建 AI」到「驾驭 AI」，100+ 实战案例拆解 AI Native 时代的工程新实践！

[2026 年 QCon 全球软件开发大会大会 · 上海站](https://qcon.infoq.cn/2026/shanghai/schedule)

将于 **10 月 22 日—24 日**举办，聚焦 Harness AI 时代的工程实践，围绕 AI Native 架构、Agent Runtime、AI Infra、Data Systems、Agent 安全与可观测、Loop Engineering、Vibe Coding、具身智能与世界模型、端云协同等前沿技术方向，邀请全球技术社区与产业一线的实践者，系统性分享前沿洞察与实战经验，共同探索 AI 从能力到系统、从实验到生产的真实路径。

在这一背景下，[2026 年 QCon 全球软件开发大会大会 · 上海站](https://qcon.infoq.cn/2026/shanghai/schedule)正式启动。本次大会将于 **10 月 22 日—24 日**举办，聚焦 Harness AI 时代的工程实践，围绕 AI Native 架构、Agent Runtime、AI Infra、Data Systems、Agent 安全与可观测、Loop Engineering、Vibe Coding、具身智能与世界模型、端云协同等前沿技术方向，邀请全球技术社区与产业一线的实践者，系统性分享前沿洞察与实战经验，共同探索 AI 从能力到系统、从实验到生产的真实路径。

上汽集团 & 云计算中心架构师方宇晨已确认出席 “[Agent as a Service](https://qcon.infoq.cn/2026/shanghai/track/1967)” 专题，并发表题为**《**[企业级 Agent Infra 架构实践：从安全沙箱到网络管控与身份治理](https://qcon.infoq.cn/2026/shanghai/presentation/7289)**》**的主题分享。Agent 时代，AI 应用正在从“生成内容”快速走向“自主执行”，可运行模型生成代码，操作浏览器，调用 MCP Tool 和内部业务系统。

**企业级 Agent Infra 面临的核心矛盾：**

-   运行时隔离要求高。Agent 会运行模型生成的未知代码，需要同时保证文件系统和内核的隔离，传统容器隔离无法单独承担完整安全边界。
    
-   网络环境复杂。Agent 既需要访问 Internet、模型 API 还有企业内部系统，需要同时提供独立的 L3/L4 网络隔离。
    
-   权限控制严格。一个 Agent 可以调用的 API 权限必须经过严格授权和控制。
    
-   凭证风险高。各类凭证一旦直接进入 Agent，理论上就可能被读取甚至泄漏。
    

**实践思路**

以 Kubernetes Agent Sandbox 作为可信执行环境，以 OVN-Kubernetes 构建多租户网络边界，以 Istio Sidecar 配合租户级别 Egress Gateway 构建 L7 服务访问平面，以 Keycloak 建立统一的 Agent 身份体系，并进一步实现 Agent 凭证代理和动态凭证交换。

![](/ai-knowledge-qoder/_imgs/a36acef180c5c362.png)

方宇晨拥有云技术领域 10 年以上的工作经验。在 Kubernetes、软件定义网络、数据中心网络和虚拟化方面拥有丰富经验。近年来，他主要致力于领导 AIK（All in Kubernetes）项目，该项目目标在 Kubernetes 中构建下一代多租户数据中心基础设施。他在本次会议的详细演讲内容如下：

> **演讲提纲**
> 
> **1\. Agent 时代为什么需要新的企业基础设施**
> 
> 企业 Agent Infra 的核心问题已经不只是“如何运行 Agent”，而是如何建立 Agent 的执行边界、身份边界和网络边界。
> 
> **企业级 Agent 至少需要四层**
> 
> -   Compute Isolation：Kubernetes Agent Sandbox
>     
> -   L3/L4 Network Isolation：OVN-Kubernetes 多租户网络
>     
> -   L7 Service/API Isolation： Istio Service Mesh
>     
> -   Identity Isolation： Keycloak
>     
> 
> **2\. Sandboxed Agent：Sandbox 成为 Agent 的可信执行空间**
> 
> -   Sandbox 作为承载 Agent 的运行时，提供可行的执行空间 gvisor/Kata
>     
> -   支持 Warm Pool, Template，Idle Reclaim, Snapshot 等能力
>     
> 
> **3\. OVN-Kubernetes：构建企业 Agent 的多租户网络**
> 
> Agent 网络隔离不能只依赖 Kubernetes NetworkPolicy，应当给不同租户建立真正独立的网络域。构建独立的 L3/L4 网络边界
> 
> **OVN-Kubernetes 支持**
> 
> -   每租户独立逻辑网络
>     
> -   独立地址空间
>     
> -   独立路由域
>     
> -   租户间默认隔离
>     
> -   NetworkPolicy 和 Service 的能力
>     
> -   租户级 Egress IP
>     
> -   vxlan+evpn 的多集群互通
>     
> 
> **4\. Istio： 构建 Agent 的 L7 访问控制平面**
> 
> Agent 不应该直接访问企业 API 和互联网，应尽可能将 Agent 之间的访问和外部访问收敛到可控制、可观测的方式
> 
> **Envoy Sidecar 负责：**
> 
> -   mTLS
>     
> -   强制路由代理
>     
> -   Telemetry
>     
> 
> **Istio 控制面负责：**
> 
> -   Agent 之间访问的 7 层路径
>     
> -   AuthorizationPolicy 的权限
>     
> -   Agent 访问外部网络的 Egress 路径
>     
> 
> **独立的 Egress Gateway 负责：**
> 
> -   租户的所有出口流量
>     
> -   租户级出口策略审计
>     
> 
> **5\. Keycloak：统一的 Agent 身份体系**
> 
> 使用 Keycloak 统一管理权限，调用服务需要更换 Token，使用短生命周期 Token 来提高安全性
> 
> -   每个 Agent 有独立的 K8s Service Accoun
>     
> -   Keycloak 配置身份，Role，Scope，Audience
>     
> -   Agent 通过 Keycloak 换取短时间 JWT token
>     
> -   使用 Istio 的 AuthorizationPolicy 决定访问是 Allow 还是 Deny
>     
> 
> **6\. 目前的需要改进的点**
> 
> -   简化 OVN-Kubernetes 的网络构建
>     
> -   管理 Token 的逻辑对 Agent 透明
>     
> -   外部 API Key 从 Agent 中移除，进行统一管理，在 Egress Gateway 出进行替换
>     
> 
> **实践痛点**
> 
> -   OVN-Kubernetes 的网络构建流程有待简化
>     
> -   Token 的管理逻辑需要对 Agent 透明
>     
> -   需将外部 API Key 从 Agent 中移除，改为统一管理，在 Egress Gateway 处完成替换
>     
> 
> **演讲亮点**
> 
> -   技术架构基于 Kubernetes 和成熟开源技术构建，不存在技术绑定问题
>     
> -   企业级解决方案通过运行时隔离，4 层网络隔离，7 层权限控制和用户管理能力构建完成的解决方案
>     
> 
> **听众收益**
> 
> -   了解 Agent 的 Runtime 隔离方案
>     
> -   了解 Agent 的 4 层网络隔离方案
>     
> -   了解 Agent 的 7 层权限控制和用户管理方案
>     

除此之外，本次大会还策划了[Loop Engineering](https://qcon.infoq.cn/2026/shanghai/track/1964)、[千行百业 Agent 创新实践](https://qcon.infoq.cn/2026/shanghai/track/1974)、[Agent 自主进化：从记忆到持续学习](https://qcon.infoq.cn/2026/shanghai/track/1962)、[Agent as a Service](https://qcon.infoq.cn/2026/shanghai/track/1967)、[Vibe Coding 时代的新质量债](https://qcon.infoq.cn/2026/shanghai/track/1966)、[理性驾驭 AI 的 SRE 可靠性工程](https://qcon.infoq.cn/2026/shanghai/track/1968)、[金融 AI Native工程实践：从研发提效到业务破局](https://qcon.infoq.cn/2026/shanghai/track/1985)、[AI Infra：算力效率决定规模化落地](https://qcon.infoq.cn/2026/shanghai/track/1969)、[AI Native 架构](https://qcon.infoq.cn/2026/shanghai/track/1961)等 20 个专题论坛，届时将有来自不同行业、不同领域、不同企业的 100+资深专家在现场带来前沿技术洞察和一线实践经验。

查看更多详情可扫码或联系票务经理 18514549229 进行咨询。

![](/ai-knowledge-qoder/_imgs/58c6621acb87948b.png)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/bLB8RQ6sd3ZGQts0D4tP?utm_source=rss&utm_medium=article）。