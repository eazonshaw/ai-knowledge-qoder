---
title: "AI 自动写 PR，模型反而最简单：Inkitt 如何应对 Webhook 重复、CI 失败与合并冲突"
date: 2026-11-15 09:26:21
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "Inkitt 构建了一个一次性拉取请求（PR）创建器(https://medium.com/inkitt-tech/how-we-built-a-one-shot-pr-creator-at-inki"
source_url: "https://www.infoq.cn/article/YRXscVHsTh0g6CVCJJ0D?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-11-14　|　采集：2026-11-15 09:26:21

## 正文

Inkitt 构建了一个[一次性拉取请求（PR）创建器](https://medium.com/inkitt-tech/how-we-built-a-one-shot-pr-creator-at-inkitt-e1b8dbc52cda)，可以自动完成小型、低风险的软件变更，从接收任务一直执行到生成可供测试和审查的草稿 PR。该工作流可以通过 Slack、Linear，或者另一个智能体发起的 API 调用触发，并在远程基础设施上运行，从而减少开发者在本地配置和监督编码智能体的需要。Inkitt Tech 在一篇技术文章中表示，该系统已经每天用于交付代码。

Inkitt 首席工程师 [Agi Letkiewicz Tanner](https://medium.com/inkitt-tech/how-we-built-a-one-shot-pr-creator-at-inkitt-e1b8dbc52cda) 将其描述为：

> 一种事件驱动的编排器，它负责协调短生命周期的智能体容器，而不是依赖固定流水线。

各个阶段分别负责需求说明、实现、验证、CI 失败修复和合并冲突解决。编排器会将每次运行的状态持久化到数据库中，因此执行过程可以从已经记录的状态继续恢复。

[图片](https://imgopt.infoq.com/fit-in/3000x4000/filters:quality\(85\)/filters:no_upscale\(\)/news/2026/11/inkitt-one-shot-pr-creator-agent/en/resources/1inkitt-1792280772685.jpeg)

Inkitt 一次性 PR 创建器架构（来源：[Inkitt 博客文章](https://medium.com/inkitt-tech/how-we-built-a-one-shot-pr-creator-at-inkitt-e1b8dbc52cda)）

该编排器将决策逻辑与副作用分离。其核心状态转换函数会根据当前运行状态和传入事件确定下一步操作，但不会直接访问数据库、网络或语言模型。编排器负责保管外部系统的凭证，智能体容器则只会获得短期有效的代码仓库 Token 和模型凭证。智能体无法直接访问 Slack 或 [Linear](https://linear.app/) 凭证、云身份，也不能随意建立网络连接。另有一项独立检查会查看实际的 Git Diff，确保变更没有触及受限制的路径。

Inkitt 将自动化限制在预先定义的边界内。涉及数据库迁移、Schema 或共享契约变更、CI 和容器构建配置、身份验证、支付代码，以及软件包添加或更新的任务都会被拒绝。验证、CI 修复和合并冲突解决最多分别尝试两次。对于重复投递的 Webhook，系统会通过去重和条件数据库写入进行处理，将[幂等操作](https://docs.aws.amazon.com/durable-execution/patterns/best-practices/idempotency/)原则应用到可能重试或接收重复事件的工作流中。在判断 CI 是否完成时，编排器会查询 GitHub，确认所有相关任务都已经结束，而不会把每一个任务事件都当作整个工作流完成的信号。

Tanner 在介绍幂等性、锁、重试预算和权限等实现难题时写道：

> 模型反而是最简单的部分。

该设计与其他编码智能体采用了一些相同的防护措施，但使用了不同的编排模型。[GitHub Copilot 的云端智能体](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/risks-and-mitigations)同样会限制智能体权限，并要求在合并前进行人工审查；[SWE-agent](https://github.com/SWE-agent/SWE-agent)则专注于通过模型驱动的界面浏览、编辑和执行代码，从而解决代码仓库中的问题。Inkitt 的方案更强调持久化工作流状态、有限重试，以及对外部操作的集中控制。

人工审批仍然是 Inkitt 流程的一部分。系统会创建草稿 PR，无法绕过分支保护，也不能自行合并变更。当 CI 通过并且变更进入预发布环境时，系统会通知任务发起者。之后必须由人工将 PR 标记为可供审查，并管理审查者请求和审批。对于规模更大的任务，Inkitt 还维护了一个本地版本，让人工持续参与开发过程。

原文链接：[https://www.infoq.com/news/2026/11/inkitt-one-shot-pr-creator-agent/](https://www.infoq.com/news/2026/11/inkitt-one-shot-pr-creator-agent/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/YRXscVHsTh0g6CVCJJ0D?utm_source=rss&utm_medium=article）。