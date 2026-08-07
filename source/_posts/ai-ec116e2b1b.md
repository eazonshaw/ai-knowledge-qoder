---
title: "Vercel Labs Ships Zero: A Graph-First Language Built So Agents Write the Code"
date: 2026-08-07 09:27:50
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Vercel Labs has released Zero(https://zerolang.ai/), an experimental systems programming language bu"
source_url: "https://www.infoq.com/news/2026/08/vercel-ships-zero-ai/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-06T05:51:00.000Z　|　采集：2026-08-07 09:27:50

## 正文

Vercel Labs has released [Zero](https://zerolang.ai/), an experimental systems programming language built on the premise that the primary reader of compiler output is no longer a human but an AI agent. It was [introduced by Vercel's Chris Tate on May 15, 2026](https://x.com/ctatedev/status/2055434061322039377), pitched as a systems language that is "faster, smaller, and easier for agents to use and repair", and the project has since moved quickly, reaching v0.3.4 and gathering more than 5,200 stars on [GitHub](https://github.com/vercel-labs/zerolang).

Zero uses the .0 file extension, is Apache 2.0 licensed, and compiles to native binaries for Linux, macOS and Windows. Early coverage focused on size and speed, with a hello world [reported at 16.2 KiB built in a millisecond](https://www.reddit.com/r/WebAfterAI/comments/1tex8t8/zero_vercel_labs_new_experimental_systems/). The more distinctive part is the toolchain contract. Every subcommand of the single zero binary shares a `--json` flag and one diagnostic schema, so errors arrive with stable codes such as NAM003 and typed repair metadata such as declare-missing-symbol, while zero fix `--plan` `--json` returns a machine readable repair plan an agent can accept, edit or reject rather than a fix applied blind.

Effects are explicit too. Any function that touches the outside world must accept a World capability, and the compiler enforces it, so a signature alone reveals whether code can reach the network, the filesystem or standard output.

The bigger shift landed in [v0.3.0](https://github.com/vercel-labs/zerolang/releases), which made graph-first authoring the normal workflow. A binary zero.graph store is now the compiler input, .0 files are human readable projections, and agents work through zero query and zero patch, with patches guarded by graph hashes so stale or invalid edits fail before the store is written.

That churn is real for anyone already on an earlier build. v0.1.4 adopted row syntax, v0.2.0 promoted canonical .0 text to the native source surface, and v0.3.0 rejects source projection inputs at the compiler boundary altogether. Existing text-first packages therefore need zero import to pull source into the graph, with zero export and zero verify-projection covering human review and CI drift gates, a loop documented in the [getting started guide](https://zerolang.ai/getting-started) and the [language reference](https://zerolang.ai/reference). v0.3.2 made zero import roughly 12x faster on large programs, which softens the cost of that conversion.

On [Hacker News](https://news.ycombinator.com/item?id=48157330), killerstorm wrote:

> Meh. The only new thing about it is capabilities, which they don't explain.

Another [commenter](https://news.ycombinator.com/item?id=48172903) called structured errors old news, arguing "error messages like these have existed for decades", while a reply countered that the point is agents rather than developers:

> As a developer I understand these error messages existed for decades and I agree with you that its not much of a problem for devs like you and me and many others but that doesnt justify not developing something an ai agent can also work with and its not about devs but more about agents.

Others questioned adoption, with one user noting "the languages the agents will be best at are the ones that show up the most in the pretrain", and kandros replying that major API changes in projects like Svelte suggest training data matters less than expected.

Against incumbents, Zero sits closer to Zig than Rust on binary size and explicit allocation, lacks Rust's borrow checker maturity and ecosystem, and trades Go's green threads and larger runtime for tiny dependency-free artifacts.

Zero is open source and developed by Vercel Labs. The project warns that it is experimental, expects breaking changes, and should be run in isolated workspaces rather than against production systems or sensitive data.

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/vercel-ships-zero-ai/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。