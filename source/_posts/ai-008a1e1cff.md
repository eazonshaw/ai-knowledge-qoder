---
title: "容器隔离还不够：Edera 从虚拟机监控器层限制 AI 智能体"
date: 2026-11-14 09:54:45
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "Edera 推出了对象能力受限权限模型(https://edera.dev/stories/ocap-bounded-authority)，承诺保护自主 AI 智能体工作负载的安全，使自主 AI 工作"
source_url: "https://www.infoq.cn/article/MU0txcPXXuGdGKBNa6a2?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-11-13　|　采集：2026-11-14 09:54:45

## 正文

Edera [推出了对象能力受限权限模型](https://edera.dev/stories/ocap-bounded-authority)，承诺保护自主 AI 智能体工作负载的安全，使自主 AI 工作负载和模型上下文协议（MCP）服务器与敏感凭证隔离。该技术由 Edera 联合创始人、杰出工程师 [Ariadne Conill](https://www.linkedin.com/in/ariadneconill/) 牵头。她因对底层开源安全技术的贡献而知名。该技术通过直接在虚拟机监控器层实施细粒度的对象能力控制，应对现代企业架构面临的一项紧迫挑战：在不向 AI 智能体提供常规访问凭证的情况下，严格限制其活动范围。对象能力受限权限是一种安全模型，在实施细粒度访问控制的同时，使自主 AI 工作负载和 MCP 服务器与敏感凭证隔离。

随着越来越多的组织将自主编码智能体和外部工具集成部署到生产环境，它们经常把敏感的 API 令牌、云密钥和管理员访问凭证直接暴露给执行环境，而这些环境仍可能受到提示注入和供应链操纵的影响。

受限权限架构的核心，是将完成任务所需的操作权限与执行任务所依赖的底层凭证分离。传统容器安全很大程度上依赖边界隔离，以及注入环境变量或配置文件的静态密钥。如果由大语言模型驱动的智能体遭到入侵，攻击者通常可以提取这些令牌，并在内部系统间横向移动。Edera 提议通过虚拟机监控器强制执行对象能力控制，将智能体限制在明确界定的操作范围内，同时不把密钥放进工作负载本身。例如，AI 编码助手可以在不持有个人访问令牌的情况下，获得修改单个 GitHub 仓库的权限，从而确保遭入侵后的影响严格局限于这一范围。

为实现这种细粒度隔离，其 Agent Runtime 框架集成了多个运行时组件。[capcurl](https://github.com/edera-dev/capcurl) 负责无凭证 API 访问，将获准的请求经由隔离的代理转发，同时不向智能体暴露底层认证材料。类似地，[capsudo](https://github.com/kaniini/capsudo) 管理限定作用域的命令执行，使工作负载无需获得长期有效的管理员权限或 root 权限，就能运行特定的特权命令。通过集成 [SPIFFE](https://spiffe.io/) 和 [SPIRE](https://github.com/spiffe/spire)，工作负载身份可得到密码学验证，并在不依赖长期有效的静态密钥的情况下建立双向 TLS 连接和服务身份。

这些架构机制也直接延伸到模型上下文协议服务器。MCP 服务器连接大语言模型与企业工具和数据库，因此经常成为高价值攻击目标。通过在基础设施层定义明确的对象能力，安全团队可以将 MCP 服务器限制在特定的外部资源和命令范围内。即使宿主模型行为异常或遭遇提示注入漏洞，也能防止其不受控制地访问资源。这种方法通过将潜在入侵的影响范围从整个环境缩小到离散的、针对特定任务的操作，补充了由硬件强制执行的运行时隔离。

评估自主智能体的工程团队通常需要投入大量开发工作，构建自定义的凭证处理中间件和临时拼凑的权限代理。受限权限模型承诺将这种控制机制下沉到虚拟机监控器和运行时层，统一企业系统向行为不确定的软件授予权限的方式。聚焦于限定作用域的命令执行和工作负载身份的初步功能已经发布；基于凭证代理的 API 访问和与编排器的深度集成，将作为更广泛的 [Project Lunchbox 计划](https://edera.dev/stories/what-comes-after-containers-building-the-compute-substrate-for-the-ai-era)的一部分在后续推出。

原文链接：[https://www.infoq.com/news/2026/11/ai-credentials-isolation/](https://www.infoq.com/news/2026/11/ai-credentials-isolation/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/MU0txcPXXuGdGKBNa6a2?utm_source=rss&utm_medium=article）。