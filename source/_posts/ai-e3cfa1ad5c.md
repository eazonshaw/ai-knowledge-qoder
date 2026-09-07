---
title: "微软将人工智能治理从政策层面转向运行时执行"
date: 2026-09-08 07:52:07
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "微软概要介绍(https://techcommunity.microsoft.com/blog/azurearchitectureblog/from-policy-to-proof-governing"
source_url: "https://www.infoq.cn/article/STpCLL13xCQsoYrfWSLb?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-09-07　|　采集：2026-09-08 07:52:07

## 正文

微软[概要介绍](https://techcommunity.microsoft.com/blog/azurearchitectureblog/from-policy-to-proof-governing-ai-to-scale-human-ambition-and-machine-intelligen/4535137)了一套人工智能治理架构，将治理重点从文档里的政策转向运行时执行、持续评估、可观测性和审计证据，以适应组织在生产环境中部署人工智能应用程序和智能代理的需求。该框架涵盖九个治理领域和四项功能：政策、控制、可视化和证明，目的是保证在人工智能系统运行过程中可以验证治理要求是否得到执行且可被观测。

![](/ai-knowledge-qoder/_imgs/8e5d96bb1cae1149.png)

微软 AI 治理架构（图片来源：[微软博客](https://techcommunity.microsoft.com/blog/azurearchitectureblog/from-policy-to-proof-governing-ai-to-scale-human-ambition-and-machine-intelligen/4535137)）

该架构将治理视为一个持续不断的运营循环。政策确立要求和风险分类，控制措施将其转化为访问和运行时规则，可观测性捕捉系统行为，而评估则检验质量和安全性。随后，审计流程将运营遥测数据转化为合规性和事件调查的证据。

在随该架构发布的一篇 LinkedIn 博文中，微软云解决方案架构师 [Manasa T. Ramalinga](https://www.linkedin.com/in/trmanasa/) [阐述](https://www.linkedin.com/posts/trmanasa_from-policy-to-proof-governing-ai-to-scale-activity-7485038327943942144-KBfX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAArnikgBqzTxA9Y838-O55QUcB2McACIq94)了这一设计动机。她补充道，将 AI 工作负载投入生产环境的组织正在重构其基础架构，目的是构建更安全的系统，而不是将治理视为事后考虑的事项。

> 组织无法扩展自己无法控制的事物。

微软确定了九个治理领域：政策、数据治理、模型治理、可观测性、评估、安全、身份与访问、审计与合规，以及智能体治理。运行时控制涵盖用户、智能体、模型、工具、API、MCP 服务器和企业系统之间的交互。

该架构将 Microsoft Foundry 与包括 Microsoft Purview、Microsoft Entra ID、Defender 和 Azure API Management 在内的服务相结合。Foundry 的 AI 网关为身份验证、令牌限制、配额和策略执行提供了运行时边界。微软还记录了如何使用该网关来管理 MCP 工具，不需要修改 MCP 服务器或智能体代码，即可提供集中式身份验证、速率限制、IP 限制和审计日志记录。感兴趣的读者可以查阅：[Microsoft Foundry AI Gateway 文档](https://learn.microsoft.com/en-us/azure/foundry/configuration/enable-ai-api-management-gateway-portal?utm_source=chatgpt.com)、[微软 MCP 工具管理指南](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/governance?preserve-view=true&view=foundry&utm_source=chatgpt.com)。

评估既可以在部署前进行，也可在生产环境中进行。Microsoft Foundry 支持使用内置和自定义的评估器，利用数据集对 AI 应用程序和智能体进行评估，从而使团队能够在发布前评估质量和安全性，并在发布后监控它们在生产环境中的行为。

在 LinkedIn 的一篇博文中，微软首席云推广大使 [Anthony Bartolo](https://www.linkedin.com/in/wirelesslife/) [描述](https://www.linkedin.com/posts/wirelesslife_aigovernance-responsibleai-aiagents-activity-7483501964157214721-OJtP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAArnikgBqzTxA9Y838-O55QUcB2McACIq94)了这种运营方面的区别：

> 只有当生产环境能够验证时，你的人工智能策略才算真正落实。他概述了这一闭环流程：政策定义规则，运行时控制执行规则，可观测性捕获行为，评估测试质量和安全性，审计将遥测数据转化为证据。

![](/ai-knowledge-qoder/_imgs/b70f8c1a605b2575.png)

基于政策和风险分类的 AI 治理生命周期（图片来源：[微软博客](https://techcommunity.microsoft.com/blog/azurearchitectureblog/from-policy-to-proof-governing-ai-to-scale-human-ambition-and-machine-intelligen/4535137)）

该方法涉及的范围比微软专有的控制平面更为广泛。[NIST 人工智能风险管理框架和生成式人工智能配置文件](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)提供了一个供应商中立的框架，用于管理人工智能全生命周期的风险，包括治理、度量、评估和风险缓解。微软的架构将这些治理问题映射成了具体的平台控制措施和运营遥测数据。

智能体治理针对智能体身份、访问、活动和工作流检查点增加了控制措施。微软的开源[智能体治理工具包](https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/)为自主代理提供了运行时安全功能，包括策略执行和拦截点。该架构还将智能体控制规范描述为一种机制，用于对智能体输入、模型调用、工具执行和输出进行检查点监控，其中影响较大的操作可以要求人工审批。

原文链接：[https://www.infoq.com/news/2026/08/microsoft-ai-governance/](https://www.infoq.com/news/2026/08/microsoft-ai-governance/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/STpCLL13xCQsoYrfWSLb?utm_source=rss&utm_medium=article）。