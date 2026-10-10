---
title: "Github Migrates Copilot Runtime to Rust with AI-Assisted Rewrite"
date: 2026-10-10 09:24:28
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "GitHub has migrated the runtime behind GitHub Copilot CLI, the Copilot app, and Copilot SDK(https://"
source_url: "https://www.infoq.com/news/2026/10/github-copilot-rust-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-09T14:29:00.000Z　|　采集：2026-10-10 09:24:28

## 正文

GitHub has migrated the [runtime behind GitHub Copilot CLI, the Copilot app, and Copilot SDK](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) from TypeScript and Node.js to Rust, replacing more than 800,000 lines of production code through an AI-assisted rewrite. The migration took approximately 14.5 weeks and was delivered through 128 pull requests while GitHub continued releasing the runtime. GitHub reports that a measured client startup, session creation, and single-turn scenario fell from 5.25 seconds with the previous runtime to 292 milliseconds when the Rust runtime was embedded in process.

The migration also changed how applications integrate with the runtime. The previous implementation required Node.js and V8 and communicated with host applications across a process boundary. GitHub says this added approximately 100 MB of working set per client. The Rust implementation can instead be embedded directly into host applications through a C ABI, while an out-of-process mode remains available. The [Copilot SDK](https://github.com/github/copilot-sdk) currently supports TypeScript, Python, Go, .NET, Java, and Rust.

![](https://www.infoq.com/news/2026/10/github-copilot-rust-migration/news/2026/10/github-copilot-rust-migration/en/resources/1githubrust-1790473005883.jpeg)

*GitHub’s before and after Copilot runtime architecture (Source: [GitHub Blog Post](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/))*

GitHub used an incremental replacement strategy rather than a parallel rewrite followed by a single cutover. Individual TypeScript components were replaced with Rust implementations, with temporary [N API](https://nodejs.org/api/n-api.html) interoperability connecting the two. This allowed existing end-to-end tests to exercise the new code while other components remained in TypeScript. GitHub shipped 135 releases during the migration, including 35 stable and 100 prerelease versions.

The compatibility layer reached 2,019 internal N API exports and 3,356 TypeScript call sites before being removed. By August 21, the runtime contained 832,378 lines of production Rust and 468,689 lines of Rust unit tests. AI agents generated most of the implementation, while compilation, testing, and human review helped identify regressions involving behavior, state and lifetime handling, library semantics, and lost optimizations. GitHub recorded 4,478 direct cargo check runs, with 87.1% completing cleanly.

Community responses also focused on the verification challenges of [AI-assisted](https://en.wikipedia.org/wiki/AI-assisted_software_development) migrations and pointed to cancellation, retries, and backpressure as examples requiring validation beyond compilation. [PLBjt](https://www.reddit.com/r/webdev/comments/1wm9ib8/comment/pbebzbo/) wrote that

> The interesting part here is less that Copilot wrote Rust and more whether the migration kept the runtime’s behavior stable at the boundaries.

[Francesco Pira](https://www.linkedin.com/in/pirafrank/), XR Tech Lead at Leonardo, [highlighted](https://lnkd.in/p/gv3U_SGU)

> Tests small reviewable changes, compatibility layers, and human engineering judgment as important elements of the approach. 

[Côme Redon](https://www.linkedin.com/in/come-redon-03a06b22/), Senior Solution Engineer at Microsoft, [pointed out](https://lnkd.in/p/gg5ycN6Q)

> The challenge of identifying undocumented behavioral contracts in legacy systems.

![](https://www.infoq.com/news/2026/10/github-copilot-rust-migration/news/2026/10/github-copilot-rust-migration/en/resources/1Screenshot%202026-09-26%20at%206.15.16%E2%80%AFPM-1790473005883.png)

*GitHub’s migration timeline showing the incremental pull requests and releases. (Source: [GitHub Blog Post](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/))*

The resulting architecture provides a native Rust runtime that can be embedded directly into host applications or operated separately, while the Copilot SDK maintains language-specific interfaces across its supported languages. The migration combined AI-generated implementation with incremental integration, temporary compatibility boundaries, automated validation, and human review while the production runtime continued to evolve.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/github-copilot-rust-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。