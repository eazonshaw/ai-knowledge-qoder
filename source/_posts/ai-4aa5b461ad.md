---
title: "Cloudflare Announces Kitesurf, a Browser Engine for Agents"
date: 2026-08-23 06:12:29
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare recently introduced Kitesurf,(https://blog.cloudflare.com/kitesurf/) a lightweight browse"
source_url: "https://www.infoq.com/news/2026/08/cloudflare-kitesurf-browser/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-22T15:01:00.000Z　|　采集：2026-08-23 06:12:29

## 正文

[Cloudflare recently introduced Kitesurf,](https://blog.cloudflare.com/kitesurf/) a lightweight browser built for automated workloads. Kitesurf runs browser components in isolated WebAssembly/Rust environments on Cloudflare Workers and supports the Chrome DevTools Protocol, allowing tools such as Playwright and Puppeteer to drive it with lower resource overhead than a full Chromium browser.

Designed for tasks such as screenshots and HTML extraction, Kitesurf runs each page or out-of-process iframe (OOPIF) in a long-lived Dynamic Worker, isolated with its own JavaScript environment and DOM. Kitesurf builds the DOM by parsing HTML and CSS and executing JavaScript, using components from the Rust-based [Blitz](https://github.com/DioxusLabs/blitz) rendering engine and Firefox’s [Stylo](https://github.com/servo/stylo) CSS parser.

Kitesurf is not yet a replacement for Chromium, as it lacks support for video, WebGL, realistic TLS-based bot challenges, and long-lived authenticated sessions. While agents need browsers to perform many tasks, [Celso Martinho](https://www.linkedin.com/in/celsomartinho/), [Ruskin Constant](https://www.linkedin.com/in/ruskinconstant/), [Rui Figueira](https://www.linkedin.com/in/rui-figueira-73ba84/), and [Luís Duarte](https://www.linkedin.com/in/lu%C3%ADs-mota-duarte/) argue:

> Browser engines like Chromium were built for humans, not agents, and they come with overhead that AI models simply do not need. They consume so much memory and compute that providing every agent with its own instance is prohibitively expensive, restricting large parts of the Web to only the most sophisticated and costly AI models with higher parametric knowledge, while locking out many other agentic applications.

According to Cloudflare, AI agents should prioritize low token usage, scalability, performance, cost, structured content, and tool safety over visual fidelity and features such as tabs, extensions, and synchronization.

*![Kitesurf](https://www.infoq.com/news/2026/08/cloudflare-kitesurf-browser/news/2026/08/cloudflare-kitesurf-browser/en/resources/1imageb-1786288066773.jpg)*

*Source: Cloudflare blog*

PageRenderer is the Kitesurf component that renders a page’s DOM and styles into an image or PDF. It fetches fonts and images, rasterizes the scene using Blitz Paint and Parley, and returns the resulting buffer to the Engine over Workers RPC. Martinho, Constant, Figueira, and Duarte add:

> Kitesurf is great for AI agents that need to render pages but can accept the trade-offs of not using a full-featured, pixel-perfect Chromium browser (...) Think of Kitesurf as an ephemeral, fully-isolated, stateless engine designed to exist only for the duration of a task, that scales well for bursty, AI-driven workloads.

*![Kitesurf](https://www.infoq.com/news/2026/08/cloudflare-kitesurf-browser/news/2026/08/cloudflare-kitesurf-browser/en/resources/1image2b-1786288066773.jpg)*

*Source: Cloudflare blog*

On [Hacker News](https://news.ycombinator.com/item?id=49208393), many question the potential conflict of interest between a company running the largest CDN network and offering DDoS and cybersecurity products, with user *QuantumNomad\_* asking:

> Does Cloudflare the CDN allow these browser instances to bypass their own anti-bot mechanisms? Or will Cloudflare the CDN block them the same as if someone was running scraping bots from a different provider?

On [Reddit](https://www.reddit.com/r/rust/comments/1vhetlq/introducing_kitesurf_cloudflares_new_headless_web/), practitioners are cautiously optimistic about Kitesurf’s approach while questioning why the code is not yet open source and why its changes have not been upstreamed to Blitz. User *seventeencups* [comments](https://www.reddit.com/r/rust/comments/1vhetlq/comment/p2905wb/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button):

> Cloudflare building tools to help AI scrape people's websites while also selling "please stop AI from scraping my website" as a SaaS product is the most blatant "playing both sides" I've seen in a while.

[Nico Burns](https://github.com/nicoburns), the creator of Blitz, confirms:

> This is built on top of Blitz: a new modular (open source) browser engine that I've been building for the last 2.5 years. I wasn't involved in building Kitesurf, but I am informed that they intend to open source and upstream their patches.

The project is still experimental, with important compatibility work and CDP/WPT support ahead. Cloudflare says it plans to open source the project soon, but there is no code available yet.

## About the Author

#### **Renato Losio**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/cloudflare-kitesurf-browser/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。