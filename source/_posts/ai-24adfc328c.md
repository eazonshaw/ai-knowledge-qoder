---
title: "亚马逊云科技推出 Claude 应用网关：面向 Claude Code 与 Claude Desktop 的自托管控制平面"
date: 2026-07-19 12:21:57
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "亚马逊云科技近日发布适用于 AWS 的 Claude 应用网关(https://aws.amazon.com/blogs/machine-learning/introducing-claude-app"
source_url: "https://www.infoq.cn/article/j59f7KU3djH4Ex4YhqxF?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-07-17　|　采集：2026-07-19 12:21:57

## 正文

亚马逊云科技近日发布适用于 AWS 的 [Claude 应用网关](https://aws.amazon.com/blogs/machine-learning/introducing-claude-apps-gateway-for-aws/)，这是一个自托管的控制平面，企业可通过它对 Claude Code 和 Claude Desktop 的访问权限、成本和策略进行统一管控。

该网关会将推理请求转发至亚马逊 Bedrock 或 AWS 上的 Claude 平台，可替代按开发者分配的云端凭证、手动分发配置以及独立的成本追踪工具。一周前 [Anthropic 已面向亚马逊 Bedrock 和谷歌云推出这款网关](https://claude.com/blog/introducing-the-claude-apps-gateway)，此后 AWS 才发布相关公告。谷歌云还发布了在 Cloud Run 上部署该网关的[教程](https://cloud.google.com/blog/topics/developers-practitioners/announcing-claude-apps-gateway-for-google-cloud)，这意味着三大云厂商如今都已推出这套统一控制平面的官方部署指导文档。

该网关内置在开发者已安装的 Claude Code CLI 二进制文件中。此外，部署仅需一个无状态容器即可完成。企业可将其部署在 Amazon ECS、Amazon EKS 或 Amazon EC2 上，并通过内部应用负载均衡器对外提供服务，使用 Amazon RDS for PostgreSQL 存储短期登录状态和速率限制计数器。Anthropic 同步开发了网关与客户端，这一点在登录流程中有所体现：仅需登录一次，客户端便会自动拉取托管配置，而网关会对每一条流经的请求执行策略校验。

网关承担五项核心职能：

-   身份认证：作为 OpenID Connect 依赖方对接所有符合标准的身份提供商；开发者通过浏览器单点登录获取短期令牌，若用户在身份提供商中被移除，会话将在配置的有效期到期后自动失效。
    
-   策略管控：管理员在服务器端一次性定义托管设置，并按身份提供商用户组划分权限范围，包含可用模型、工具权限与默认配置，开发者无法在本地私自修改覆盖。
    
-   遥测监控：客户端为每一次请求打上使用指标标记，网关通过 OpenTelemetry 协议将其转发给组织配置的收集器，例如 Amazon CloudWatch 或 Amazon Managed Service for Prometheus。
    
-   请求路由：网关统一保管上游服务凭证，代开发者转发模型请求，支持跨 AWS 区域、跨账号故障转移可选配置。
    
-   成本限额：按组织、组或用户设置每日、每周和每月的限额，一旦超出即阻止后续请求。
    

![](/ai-knowledge-qoder/_imgs/a7969a167fdea634.png)

（来源：AWS 新闻[博客文章](https://aws.amazon.com/blogs/machine-learning/introducing-claude-apps-gateway-for-aws/)）

配置仅靠一份 YAML 文件，在服务启动时加载读取。对接 Bedrock 上游服务时，网关会直接使用容器的 IAM 任务角色，无需配置静态密钥凭证；模型标识沿用 Anthropic API 原生格式，无需填写 Bedrock ARN 或推理配置文件。Anthropic 官方文档指出，网关会为上游平台做 Anthropic Messages API 协议转换，支持亚马逊 Bedrock、AWS 上的 Claude 平台、谷歌云智能体平台、微软 Foundry 以及原生 Anthropic API，并且支持多平台之间的故障自动切换。

部署方案决定了数据路径。若对接亚马逊 Bedrock，推理请求始终在 AWS 安全边界内传输，并沿用 Bedrock 其他工作负载的数据处理规则。亚马逊云科技将 Bedrock 定位为满足数据驻留合规要求的方案，而 AWS 上的 Claude 平台则面向希望在 AWS 认证和计费体系内获得 Anthropic 原生平台体验的团队。

在发布后的第一天，技术从业者便开始测试各类网关暂未覆盖的身份鉴权边界场景。Christoph Klingspor 在 [LinkedIn](https://www.linkedin.com/posts/aidanimitchell_introducing-claude-apps-gateway-for-aws-share-7480762730552164352-1aUw) 上发文，提出企业若采用网关预设部署架构之外的工作负载身份体系该如何处理的问题：

> 有没有办法通过角色机制为 Claude Code 分配身份权限？我目前想到的最优方案是使用 AWS 私有证书中心（AWS Private CA）。场景是企业尚未在 AWS 上使用 Anthropic，仅有普通订阅套餐。

亚马逊云科技安全负责人 Shweta S. 给出了一套可解决该问题的方案：

> 你的 Private CA 这个思路很不错，但真正能同时提供身份与角色权限的核心组件是 IAM Roles Anywhere。由 Private CA（或企业自己现有的 CA）颁发 X.509 证书，再通过 Roles Anywhere 将证书兑换为绑定 IAM 角色的临时 AWS 凭证，全程无需长期密钥。只需配置凭证助手，Claude Code 的 AWS 工具就能自动读取带权限范围的临时凭证。

企业销售负责人 Christopher Dorsey 在另一篇 [LinkedIn 帖子](https://www.linkedin.com/posts/arsan_the-claude-apps-gateway-is-here-excited-ugcPost-7477532341142208512-O_WK/)中阐述了成本归属功能在商业层面的重要意义：

> 我参与过的每一场企业 AI 落地项目都会卡在同一个环节：主推负责人十分看好，但 IT 和财务部门看不到谁在花什么钱，于是整个项目就被限制在试点阶段。而服务端的消费限额和使用可见性基本能彻底解决这个难题。向企业推销 AI 产品时，否决意见几乎从来不是源于产品本身，而是安全与采购部门无法对其进行治理。

本次发布也标志着 AI 代码工具控制层所在的位置发生了变化。企业身份认证、权限策略、成本归属核算以及消费限额如今都由模型厂商以原生基础设施的形式提供，而这类能力此前一直由第三方网关和企业自研工具提供。平台团队现在面临的问题是：采用各厂商专属网关还是使用中立控制节点来统一管理多模型集群。Anthropic 在[其公告](https://claude.com/blog/introducing-the-claude-apps-gateway)中表示，它将会开放该网关所使用的通信协议，便于其他网关开发方实现同样的功能。

适用于 AWS 的 Claude 应用网关现已正式可用。开发者可以下载 Claude Code CLI，并查阅 Anthropic 开发者网站上的 [Claude 应用网关文档](https://docs.claude.com/en/docs/claude-code/gateway)，其中包含了配置、身份提供商适配部署以及各类容器平台部署教程。亚马逊云科技还发布了一个[示例代码库](https://github.com/aws-samples/anthropic-on-aws/tree/main/claude-apps-gateway)，其中包含容器平台的部署示例。

查看英文原文：[https://www.infoq.com/news/2026/07/claude-apps-gateway-aws/](https://www.infoq.com/news/2026/07/claude-apps-gateway-aws/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/j59f7KU3djH4Ex4YhqxF?utm_source=rss&utm_medium=article）。