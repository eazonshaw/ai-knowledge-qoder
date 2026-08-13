---
title: "微软 AI Gateway 新层级引热议：统一治理背后的权限隐忧"
date: 2026-08-14 06:32:03
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "微软已发布 Azure API Management 专用 AI Gateway 层(https://learn.microsoft.com/en-us/azure/api-management/ai"
source_url: "https://www.infoq.cn/article/zYYwyGD3opKVwhTKYqaM?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-08-13　|　采集：2026-08-14 06:32:03

## 正文

微软已发布 Azure API Management 专用 [AI Gateway 层](https://learn.microsoft.com/en-us/azure/api-management/ai-gateway-overview)的公开预览版。这是一种网关资源，其控制平面围绕模型、MCP 服务器和工具而非 API 进行组织。它被构建为一种独立体验，而不是现有网关上的另一层策略，不过经典层和 v2 层仍保留它们已有的 [AI 网关功能](https://learn.microsoft.com/en-us/azure/api-management/genai-gateway-capabilities)。

其核心理念是，如今团队需要接入多个提供商，而非单一提供商，工具也应反映这一点。该预览版可发布托管在 Foundry 上的模型，包括 OpenAI、Anthropic 和 Mistral，以及 AWS Bedrock、Google Vertex AI 和 OpenAI 直接提供的模型。所有兼容 OpenAI 的提供商共用一个端点路径，网关根据 model 字段的精确匹配进行路由，因此每个已发布模型都需要一个唯一名称。Anthropic 则通过自定义提供商处理，透传 Messages API。

策略通过门户中的卡片进行配置，而不是使用 XML 和表达式，涵盖令牌和请求限制、配额、内容安全以及模型故障转移。网关的预配大约需要一分钟，无需规划缩放单元。遥测数据以 OpenTelemetry 令牌指标的形式导出到 Application Insights、Datadog、Grafana 以及客户控制的其他目标位置，该资源运行在客户自己的订阅和 Entra 租户中。

对于工具，网关可联合来自三种来源的后端：通过 URL 连接的远程 MCP 服务器、OpenAPI 规范，或涵盖一千多个 SaaS 应用且无需托管服务器的内置连接器。每个后端的操作都会成为工具，团队可以针对每个后端选择由网关采用以下哪种方式进行身份验证：不进行身份验证、API 密钥、OAuth 2.0 或托管身份。

![](/ai-knowledge-qoder/_imgs/1aef66bfa8ed7435.png)

预期的运作模式将集中控制与团队自助服务分开。平台团队连接并发布经过批准的模型和工具；应用团队在测试控制台中使用这些资产，并基于它们进行构建，无需让每项变更都经过中央团队，而平台团队则继续负责防护措施和整体使用情况。

架构师和平台工程师对这种整合的反应总体积极，同时也对治理边界位于何处提出了疑问。

撰写有关生产 AI 系统的 AI Engineer 新闻简报的 Paolo Perrone 在[发布评论](https://www.linkedin.com/posts/rorypreddy_msft-microsoft-ai-share-7488150427901874176-b7Wc/)中指出，被低估的部分是将成本治理置于网关之中：

> 大多数团队只有在事故发生后才会补上速率限制和支出跟踪，而将其集中管理，可以获得“一个控制平面，而不是每个应用各自打补丁”。

企业 AI 系统架构师 Adolph White Jr. [提出了最尖锐的悬而未决的问题](https://www.linkedin.com/posts/vieira_aigateway-aigateway-azureapimanagement-share-7488240275010637824-0iJa/)：当智能体运行未能正常结束时会发生什么：

> 如果智能体产出了有用的工作成果，但运行在没有正常完成的情况下结束，这些输出会被保留下来以供审计审查，还是网关会进行故障转移并重试？他将这一区别描述为“治理 AI 流量与治理完整生命周期”之间的区别。

对于智能体输出可以更改哪些内容的控制权究竟应该属于网关，还是属于其上层的编排层，公告中并未说明。

并非所有反馈都是正面的。在爱尔兰航空从事数据和 AI 工作的 Sreenivasulu Kandakuru [表示，该层是迫切需要的](https://www.linkedin.com/posts/vieira_aigateway-aigateway-azureapimanagement-share-7488240275010637824-0iJa/)，但认为 Azure 落后于 AWS 和 Databricks。[Unity AI Gateway](https://www.databricks.com/blog/ai-governance-data-ai-summit-2026-whats-new-unity-ai-gateway) 于 6 月的 Data + AI Summit 上发布，它扩展了 Unity Catalog，可在运行时治理模型、智能体、MCP 服务和技能，并提供硬性支出上限、智能路由和内容防护措施；它还通过模型服务对 Claude Code 和 Codex 等外部编码智能体进行路由和治理。其中许多功能也仍处于测试阶段，而且微软推出 AI 网关功能已有大约两年，因此实际差距并不像这一比较所暗示的那么大。

在团队围绕这一层规划接入模式之前，有一项设计决策值得仔细审视。运行时访问密钥的作用域是整个网关，可以访问该网关上发布的每一个模型和每一个工具。微软的指导建议是每个应用使用一个密钥，但密钥泄露的影响范围是整个网关，而不是单个产品；目前使用 APIM 订阅将使用者限制在一组 API 范围内的团队，将无法在这里找到这种边界。

该预览版的定位也值得仔细了解。可用性采用尽力而为的方式，不提供 SLA，而且 API、遥测、限制、区域和定价都可能在正式发布前发生变化。预览版配额对模型、工具、运行时密钥和吞吐量设有限制，但具体限制尚未公布。定价将在预览后期公布，这使成本治理的论点成为此次发布中最不确定的部分。

公告没有回答的一个悬而未决的问题是如何共存，而相关困惑已经显现出来。AI 工程师兼架构师 Rajib Mahapatro 在[回应此次发布](https://www.linkedin.com/posts/vieira_aigateway-aigateway-azureapimanagement-share-7488240275010637824-0iJa/)时称，他们已经在生产环境中使用了四个月，并提到了缓存、内容安全、日志记录和令牌限制。这些属于现有功能，而不是几天前才进入预览阶段的新层，这恰恰体现了问题中的模糊之处。微软的文档将 AI 网关描述为现有 API Management 网关的扩展，而不是一项独立产品。已经在 Premium 或 Standard v2 上构建了 AI 网关的组织，目前没有任何公开指导说明这些投入会被继承、并行运行，还是迁移到新层中。

AI Gateway 层[现已](https://techcommunity.microsoft.com/blog/integrationsonazureblog/ai-gateway-tier-of-api-management-now-in-public-preview/4540170)在美国东部 2 和瑞典中部区域提供，预览期间免费，并提供实验教程，介绍如何发布受治理的 Foundry 模型，以及如何观察令牌速率限制的实际运行情况。

原文链接：[https://www.infoq.com/news/2026/08/azure-apim-ai-gateway-tier/](https://www.infoq.com/news/2026/08/azure-apim-ai-gateway-tier/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/zYYwyGD3opKVwhTKYqaM?utm_source=rss&utm_medium=article）。