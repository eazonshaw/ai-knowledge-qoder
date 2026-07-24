---
title: "GKE 安全蓝图加入云厂商 AI 安全框架阵营"
date: 2026-07-25 06:54:02
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "谷歌云发布了一份新的安全蓝图，介绍企业应如何保护运行在 Google Kubernetes Engine（GKE） 上的人工智能工作负载。谷歌认为，AI 应用从原型阶段走向生产环境的速度，已经超过了传"
source_url: "https://www.infoq.cn/article/DXKamMhJKJeV7CkeExzo?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-07-24　|　采集：2026-07-25 06:54:02

## 正文

谷歌云发布了一份新的安全蓝图，介绍企业应如何保护运行在 Google Kubernetes Engine（GKE） 上的人工智能工作负载。谷歌认为，AI 应用从原型阶段走向生产环境的速度，已经超过了传统安全模型的适应能力。这份[文档由 Glen Messenger 和 Shannon Kularathna 撰写](https://cloud.google.com/blog/topics/developers-practitioners/securing-ai-at-enterprise-scale-the-google-kubernetes-engine-blueprint/)，提出了一套覆盖基础设施安全、模型完整性以及应用安全的三层安全方案，目标读者主要是首席信息安全官（CISO）以及平台工程团队。

![](/ai-knowledge-qoder/_imgs/3a0e4092d7bb4664.png)

GKE 安全团队的群产品经理 Messenger 表示，团队需要“保护专有模型权重，防御 Prompt Injection 等新型应用层威胁，同时满足严格的监管合规要求，而且不能拖慢 AI 开发团队的速度。”该蓝图认为，实现这些目标不能仅依赖一个运行容器的平台，而需要一个能够“开箱即用地叠加多层安全能力”的平台。

在基础设施层面，蓝图建议使用 Confidential GKE Nodes。该能力可以将硬件级内存加密扩展到包括英伟达 H100 GPU 和 TPU 在内的计算加速器。

此外，结合 Workload Identity Federation（允许推理 Pod 从 Cloud Storage 获取模型权重，而无需长期保存密钥）以及 VPC Service Controls，管理员可以围绕受监管数据建立安全边界。

> 你不能在一个不安全的集群上运行安全的 AI 工作负载。
> 
> ——Google Cloud GKE 团队，《[Securing AI at Enterprise Scale: The Google Kubernetes Engine Blueprint](https://cloud.google.com/blog/topics/developers-practitioners/securing-ai-at-enterprise-scale-the-google-kubernetes-engine-blueprint/)（大规模企业 AI 安全实践：Google Kubernetes Engine 安全蓝图）》

在模型安全方面，谷歌指出，传统的软件物料清单（SBOM）无法覆盖 AI 特有的资产，例如数据集和机器学习框架。因此，该蓝图引入了 [k8s-aibom](https://github.com/GoogleCloudPlatform/k8s-aibom/)，这是一个开源 Kubernetes 控制器，可以自动生成 AI 物料清单。在应用层面，Model Armor 会检查 Prompt 和模型响应，识别 Prompt Injection 攻击、敏感数据泄露以及有害内容；而基于 gVisor 隔离技术构建的 GKE Sandbox，则被推荐用于隔离那些能够执行生成代码或调用不可信工具的 AI Agent。

谷歌建议企业采用分阶段方式部署这些安全能力，蓝图将其划分为三个阶段：Deploy（部署）、Operate（运营）和 Govern（治理）。第一阶段主要覆盖基础安全控制，例如启用 Workload Identity，以及让敏感工作负载运行在 Confidential Nodes 上。第二阶段侧重生产环境加固，包括启用镜像签名策略以及日志聚合。第三阶段则进一步引入组织级安全护栏（Guardrails）和自动化事件响应能力。

[SecurityBrief 对此次发布的报道](https://securitybrief.com.au/story/google-cloud-unveils-ai-security-blueprint-for-gke)指出，这份蓝图体现了云厂商正在将已有的基础设施、身份认证和监控能力重新组合，形成面向 AI 应用的新型运行模型，帮助客户在托管平台上构建 AI 系统。

谷歌并不是唯一发布此类指导方案的云厂商。亚马逊云科技（AWS）也采用了类似的分层安全思路，推出了 AWS AI Security Framework，同时通过开源项目 [AI on EKS](https://awslabs.github.io/ai-on-eks/) 提供基于 Terraform 的 AI 工作负载部署蓝图，帮助用户在 Amazon 自有 Kubernetes 托管服务上运行 AI 应用。AWS 还扩展了 Amazon GuardDuty 的威胁检测能力，使其能够覆盖 EKS 集群。该能力通过托管式 eBPF Agent，在 Kubernetes 数据平面直接检测凭证泄露和反向 Shell 等攻击行为。InfoQ 曾在 2025 年 6 月对此进行[报道](https://www.infoq.com/news/2025/06/guardduty-eks/)。

安全厂商 ARMO 则针对 [AWS 原生工具在 AI 特定威胁场景下的不足进行了详细分析](http://www.armosec.io/blog/ai-agent-security-framework-aws-eks/)。

在一篇关于如何保护 EKS 上 AI Agent 的实施指南中，ARMO 产品管理副总裁 Yossi Ben Naim 表示：“AWS 原生工具在身份认证、加密和控制平面日志方面表现良好，但它们的能力边界止于工作负载之外。而 Agent 化 AI 的威胁恰恰发生在容器内部、运行时环境中——Agent 会自主决定调用哪些工具以及访问哪些数据。”

Ben Naim 的核心观点是，IAM Roles for Service Accounts 和 CloudTrail 等身份与审计工具，可以回答“一个 Agent 被允许执行什么操作”，但无法判断“某个被允许的操作对于这个 Agent 来说是否正常”。他提出了一套四阶段循环：首先观察 Agent 行为；然后评估已授予权限与实际使用权限之间的差距；接着检测偏离既定行为基线的异常；最后再实施更严格的策略限制。

微软则从另一个方向解决这一问题，更关注 AI Agent 自身的身份和行为，而不是底层容器平台。微软 Azure 博客中的 [Agent Factory](https://azure.microsoft.com/en-us/blog/tag/agent-factory/) 系列介绍了如何利用 [Microsoft Entra Agent ID](https://www.microsoft.com/en-gb/security/business/identity-access/microsoft-entra-agent-id) 为每个 Agent 分配独立、范围受限且生命周期较短的凭证，以及如何通过名为 PyRIT 的自动化红队工具，在 Agent 上线前主动测试其潜在风险。

此外，云原生计算基金会（CNCF）的一篇独立博客也提出了一个贯穿所有云厂商的问题。InfoQ 曾在 2026 年 4 月对此进行[报道](https://www.infoq.com/news/2026/04/kubernetes-secure-workloads/)。文章指出，Kubernetes 本身擅长编排和隔离，但并不了解一个 Prompt 是否应该被执行，也无法判断某个响应是否泄露了敏感信息。因此，传统安全机制，例如基于角色的访问控制（RBAC）和网络策略，虽然仍然不可或缺，但单独依靠这些机制已经无法满足 AI 工作负载的安全需求。

原文链接：[GKE Security Blueprint Joins Growing List of Cloud AI Frameworks](https://www.infoq.com/news/2026/07/google-gke-ai-security-blueprint/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/DXKamMhJKJeV7CkeExzo?utm_source=rss&utm_medium=article）。