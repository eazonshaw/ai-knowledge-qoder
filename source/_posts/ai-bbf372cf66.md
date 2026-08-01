---
title: "GitHub AI Agent 翻车：攻击者不用黑客技术，只写一句话就能窃取数据"
date: 2026-08-02 06:44:51
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "GitLost(https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repo"
source_url: "https://www.infoq.cn/article/u4rDqep8zVWUJsqVoQ23?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-07-31　|　采集：2026-08-02 06:44:51

## 正文

[GitLost](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/) 是由 Noma Security 发现的一种提示注入漏洞利用方式，它能够诱骗 GitHub 新推出的 [Agentic Workflows](https://www.infoq.com/news/2026/02/github-agentic-workflows/?_gl=1*1n9krm0*_up*MQ..*_ga*NzA4ODgxNTczLjE3ODUyODkzMjk.*_ga_VMVPD4D2JY*czE3ODUyODkzMjgkbzEkZzAkdDE3ODUyODkzMjgkajYwJGwwJGgw) 泄露私有数据。攻击者只需在公开 GitHub Issue 中嵌入隐藏指令，就可以绕过安全防护措施，诱导 AI Agent 在公开评论中泄露机密信息。

Noma Labs 发现的这一存在漏洞的 GitHub Agentic Workflow，被配置为在 `issues.assigned` 事件触发时运行，读取 Issue 标题和正文，通过 `add-comment` 工具发布回复评论，并且拥有读取组织内其他仓库（包括公开仓库和私有仓库）的权限。

> 为了利用这一漏洞，攻击者不需要任何编程技能、访问权限或凭据。攻击者只需要在一个使用 GitHub Agentic Workflow 配置的组织所属公开仓库中创建一个 Issue，然后等待即可。

Noma 表示，尽管 GitHub 已经部署了严格的防护机制来避免这种情况发生，但仅仅使用关键词 “Additionally” 就触发了模型的非预期行为。这导致模型访问了一个原本受限制文件的内容，并将其发布在公开评论中。

> 传统安全模型通常假设，信任边界由代码负责维护。而在 Agentic 系统中，信任边界部分依赖于模型的行为，而模型天然具备遵循指令的特性。对于 Agentic AI 来说，提示注入攻击正在变成类似 Web 应用中的 SQL 注入问题：一种系统性的、覆盖整个类别的漏洞类型，需要同样系统化的策略和防御措施。

为了降低这些风险，Noma 研究人员建议，用户控制的内容永远不应该被视为 AI Agent 的可信指令输入。Agent 的权限应该限制在严格必要的范围内，因为拥有跨仓库访问权限的 Agent 会成为极具价值的攻击目标。组织还应该限制 Agent 可以公开披露的信息范围，尤其是在响应 Issue 内容时，并确保用户输入在提供给模型之前，已经经过适当清理，或者与指令上下文隔离。

Fractional CTO [Vijendra Malhotra](https://www.linkedin.com/posts/vijendramalhotra_gitlost-githubs-ai-agent-leaks-private-activity-7480638846184013824-MaPe/) 在 LinkedIn 上评论称，Noma 的发现证明了：

> 私有仓库从来都不是安全边界。它实际上是组织边界，只有当读取你代码的人都是你雇佣的人类时，这个边界才成立。Agent 打破了这一假设。\[……\] 如果一个 Agent 能访问你的私有仓库，请把其中所有内容都视为距离公开泄露只差一个精心构造的 Issue。

Reddit 用户 [Significant\_Sea\_4230](https://www.reddit.com/r/netsec/comments/1upy3gm/comment/owgb8b8/) 指出：

> 危险之处并不在于 Agent “很聪明”。而在于它可能连接了过多上下文、过多仓库，或者拥有权限过于宽泛的 Token。

另一方面，用户 [cH3332xr](https://www.reddit.com/r/netsec/comments/1upy3gm/comment/oyunbnv/) 强调：

> 这里最有意思的细节是 “Additionally” 绕过机制，有效载荷本身并没有改变，只是这个衔接词在防护机制看来，把它从“新的指令”重新归类成了“当前任务的延续”。这是一个决策边界问题，而不是内容问题。

作为社区的最后一条评论，mcv 在 [Hacker News](https://news.ycombinator.com/item?id=48829266) 上表示：

> SQL 注入之所以产生，是因为系统把用户输入当成了指令的一部分，而不是原本应该被视为纯数据的内容。将两者分离之后，这个问题就解决了。而提示注入无法避免，因为用户输入本身就是指令。

如需深入了解技术细节和概念验证过程，请阅读 Noma 网站上的完整报告。

原文连接：

[https://www.infoq.com/news/2026/07/gitlost-github-prompt-injection/](https://www.infoq.com/news/2026/07/gitlost-github-prompt-injection/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/u4rDqep8zVWUJsqVoQ23?utm_source=rss&utm_medium=article）。