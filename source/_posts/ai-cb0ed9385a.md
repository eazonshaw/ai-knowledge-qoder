---
title: "GitHub 让 AI 接管工作流，单次默认预算 10 美元：是不是太大方了？"
date: 2026-11-18 11:14:20
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "GitHub 已宣布 GitHub Agentic Workflows 正式可用。这个开源项目可以在 GitHub Actions 中运行编码智能体，处理 Issue 分类和持续集成（CI）故障分析等"
source_url: "https://www.infoq.cn/article/lMs1bM1muspglUjMr1l3?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-11-18　|　采集：2026-11-18 11:14:20

## 正文

GitHub 已宣布 GitHub Agentic Workflows 正式可用。这个开源项目可以在 GitHub Actions 中运行编码智能体，处理 Issue 分类和持续集成（CI）故障分析等代码仓库任务。智能体启动时仅拥有只读权限，其提出的任何更改都由独立作业应用，而这些作业持有各自的写入令牌。

这种隔离也有局限。项目的[常见问题](https://github.github.com/gh-aw/reference/faq/)指出，这些保护措施不会自动覆盖直接授予的写入权限，也不适用于工作流作者自行添加的自定义作业，因此工作流是否安全取决于具体配置。作者还可以添加 GitHub Environment 保护规则，要求写入作业在运行前必须经过审核人员批准。

开发者使用自然语言 Markdown 描述任务，并通过 YAML Front Matter 进行配置。项目会将这一定义编译成标准的 Actions 工作流，从而复用现有的 Runner 组和策略限制；团队既可以使用 Copilot，也可以接入其他编码智能体。根据[正式可用公告](https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available)，智能体运行在由 Agent Workflow Firewall 保护的沙箱容器中，威胁检测作业会在应用修改前扫描智能体提出的变更。该项目于 2026 年 6 月进入公开预览阶段。

公开预览以来，GitHub 新增了对 [Actions Runner Controller](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller)（ARC）的支持。ARC 是 GitHub 面向自托管 Runner 推出的 Kubernetes Operator，可以配合 [Docker-in-Docker](https://github.github.com/gh-aw/guides/arc-dind-copilot-agent/)（DinD）使用。DinD 会在 Runner Pod 内运行一个 Docker 守护进程，使智能体能够启动自己的沙箱容器。项目指南指出，ARC 默认以特权容器的方式运行 DinD Sidecar，这意味着一个拥有特权的组件与采用最小权限设计的智能体运行在同一环境中。

支出默认设有上限。GitHub 的[文档](https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows)将 AI Credit（AIC）的价格定为每个 0.01 美元，并将每次运行的上限设为 1000 AIC，即 10 美元。项目的[企业控制参考文档](https://github.github.com/gh-aw/reference/compiler-enterprise-environment-controls/)还规定了多项默认限制：每天 5000 AIC、每次威胁检测运行 400 AIC，以及智能体步骤最多运行 20 分钟，组织可以覆盖这些设置。已经结束实验阶段的 `gh aw forecast` 命令可以估算每月的 AI Credit 支出，其中包括威胁检测的费用。

埃森哲战略、架构与创新团队高级经理 Ben Alton 在公告中表示：“我们的一位负责人估计，仅在开发工作上每周就节省了 29 个小时。”公告并未解释这一数据的测量方式。

参与项目测试的工程师则表现得更加谨慎。在一篇介绍 [Issue 分类工作流的实操文章](https://dev.to/sascha-ms/github-agentic-workflows-issue-triage-step-by-step-48p7)中，freenet 中间件团队负责人 Sascha Mirow-Stanitzok 认为，默认预算对于 Issue 分类而言过于宽松，因此将每次运行限制为 100 AIC、15 轮交互和 10 分钟。他还指出，仅仅要求智能体忽略 Issue 文本中的指令，并不能真正保护工作流；对于会修改代码或创建 Pull Request 的工作流，他不会采用同样的模式。

GitLab 的 [Duo Agent Platform Flow](https://docs.gitlab.com/user/duo_agent_platform/flows/) 采用了不同的方案。它们以一种[复合身份](https://docs.gitlab.com/user/duo_agent_platform/security/)在 Runner 上运行，将实际执行操作的服务账户与发起请求的人类用户绑定在一起。其[触发操作](https://docs.gitlab.com/user/duo_agent_platform/triggers/)必须由人类用户发起，例如提及智能体或为其分配任务，因此一个 Flow 无法启动另一个 Flow。这项规则可以阻止智能体在没有人类发起操作的情况下，跨多个 Flow 串联执行任务。

GitHub 的常见问题指出，对于可复现的构建和测试，传统 Actions 仍然是更合适的选择；智能体工作流则适用于需要理解或生成内容的任务。该项目面向 [github.com](http://github.com/) 上的 GitHub Free、Team 和 Enterprise 用户开放，默认使用的 Copilot CLI 引擎需要 Copilot 许可证。

原文链接：

[https://www.infoq.com/news/2026/11/github-agentic-workflows-ga/](https://www.infoq.com/news/2026/11/github-agentic-workflows-ga/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/lMs1bM1muspglUjMr1l3?utm_source=rss&utm_medium=article）。