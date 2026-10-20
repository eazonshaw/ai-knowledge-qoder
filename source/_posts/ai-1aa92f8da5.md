---
title: "Cloudflare 推出面向 AI 代理的 CLI，并逐步停用 Wrangler"
date: 2026-10-20 08:49:33
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "最近，Cloudflare 推出了 cf 的公开测试版(https://blog.cloudflare.com/cloudflare-cf-cli-launch/)。这是一个全新的、以智能代理为中心的"
source_url: "https://www.infoq.cn/article/Ddda0DF68laqfoqa4Lju?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-19　|　采集：2026-10-20 08:49:33

## 正文

最近，[Cloudflare 推出了 cf 的公开测试版](https://blog.cloudflare.com/cloudflare-cf-cli-launch/)。这是一个全新的、以智能代理为中心的开源命令行界面，让 AI 代理可以通过统一的 CLI 与 Cloudflare 服务进行交互。该工具采用 TypeScript 编写，提供结构化输出和命令发现功能，使开发人员和 AI 代理都能更轻松地使用 Cloudflare 的 API。

这家超大规模云服务提供商认为，引入新的 CLI 可以避免与 LLM 在 Wrangler 方面已习得的行为产生冲突，从而使 cf 能够采用以智能代理为中心的设计变更，而不必受既有工具的兼容性限制。Cloudflare 高级产品经理 [Matt Taylor](https://www.linkedin.com/in/mattietk) 和高级系统工程师 [Samuel Macleod](https://www.linkedin.com/in/penalosa/) 解释了为何需要一个新的 CLI：

> Wrangler 是通过手工构建的，每个产品团队都贡献了自己的力量，并根据各自的命令行开发体验采用了不同的方法。在各团队之间强制推行统一的模式几乎是不可能的，即使是在我们的大约 280 条命令路径中也是如此。由于各团队在不同时期形成了各自的实践，d1 info、hyperdrive get 和 workflows describe 等术语在各团队之间并不统一。

[cf CLI](https://github.com/cloudflare/cf) 遵循 Apache 2.0 许可或 MIT 许可发布，专为智能代理驱动的开发而设计，具备命令发现功能，其 JSON 输出既适合人类阅读也适合代理处理，并且还采用了基于 TypeScript 的新型 cloudflare.config.ts 配置格式。它还将 [Vite](https://vite.dev/) 设为默认开发环境，从而可以提供一致的本地开发体验和插件支持。

以 [Cloudflare 的 OpenAPI schema](https://github.com/cloudflare/api-schemas) 为源，cf 可以覆盖 3000 多个 API 操作，而 Wrangler 内置的功能仅约 280 个。Taylor 和 Macleod 补充道：

> 我们希望既能统一现有的系统，又能进行大规模扩展，并且要两者同时实现。Forge——Cloudflare 全新的统一 API 生成管道——使我们能够实现这一目标。它基于这样一个理念：直接从支撑 API 文档和 SDK 生成的 API 模式中生成 CLI 命令。

在 [Hacker News 上的一则热门帖子](https://news.ycombinator.com/item?id=49879577)中，社区的讨论主要集中在选择使用 TypeScript 编写 CLI 这一决策上，围绕启动时间、可移植性和依赖项管理展开了讨论。用户 slowin 评论道：

> 我不明白为什么用 TypeScript 编写这个。这很好地说明了智能代理可以编写代码（我敢肯定他们写了 cf），但具备基础的计算机科学知识仍然至关重要。不要强迫用户管理 CLI 的依赖项。请使用编译型语言编写 CLI。

Cloudflare 则认为，TypeScript 提供类型安全性和 LSP 支持，不管是人类还是智能代理配置起来都更加容易，有利于代理更准确地理解和修改配置。作者将此与 TOML 和 JSONC 进行了对比——在后两者中，代理更难获取模式信息——并指出程序化配置还可以消除配置冗余。Ashish Ganda [在 LinkedIn 上指出](https://lnkd.in/p/duwxkRc5)：

> Cloudflare 的新 cf CLI 默认输出 JSON，而非表格。你必须主动要求它输出表格……表格是为人类设计的，而 JSON 则是为解析器准备的。

Cloudflare 将 JSON 设为默认输出格式，这使得智能代理能够过滤并转换输出内容，以提供人类用户所需的格式，同时避免了 Wrangler 中默认使用的表格输出。该公司计划在 cf 公开测试结束后弃用 Wrangler，并发布最后一个 Wrangler 大版本，借此引导用户转向 cf，并提供 18 个月的维护支持以方便用户迁移。

原文链接：[https://www.infoq.com/news/2026/10/cloudflare-cf-cli/](https://www.infoq.com/news/2026/10/cloudflare-cf-cli/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/Ddda0DF68laqfoqa4Lju?utm_source=rss&utm_medium=article）。