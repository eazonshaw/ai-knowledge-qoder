---
title: "Cloudflare Details Its Migration from WordPress to EmDash"
date: 2026-09-27 08:03:56
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare recently documented the migration of its main blog from WordPress to EmDash(https://blog."
source_url: "https://www.infoq.com/news/2026/09/cloudflare-emdash-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-26T09:38:00.000Z　|　采集：2026-09-27 08:03:56

## 正文

Cloudflare recently documented the [migration of its main blog from WordPress to EmDash](https://blog.cloudflare.com/cloudflare-blog-uses-emdash/), the open source content management system developed internally. The new platform is designed to improve performance and caching, and it was tested to handle traffic of up to 7000 requests per second.

As [previously reported on InfoQ](https://www.infoq.com/news/2026/04/cloudflare-emdash-wordpress/), Cloudflare introduced the v0.1.0 developer preview of EmDash last April, a new CMS built in TypeScript and designed as a successor to WordPress. Cloudflare’s production setup runs EmDash on a Worker with multiple caching layers, including [Workers Cache](https://developers.cloudflare.com/workers/runtime-apis/cache/) and an EmDash object cache built on [Workers KV](https://developers.cloudflare.com/kv/). It also uses [Cloudflare Hyperdrive](https://developers.cloudflare.com/hyperdrive/) to connect EmDash to a [PlanetScale database](https://planetscale.com/).

*![](https://www.infoq.com/news/2026/09/cloudflare-emdash-migration/news/2026/09/cloudflare-emdash-migration/en/resources/1image0-1788551179579.jpg)*

*Source: Cloudflare blog*

The company describes itself as "Customer Zero" for the new CMS, migrating their own blog to EmDash, after identifying limitations with the existing platform. The team says the blog typically handles about 75 requests per second, with spikes above 5000 RPS, making page load performance an important consideration.

According to [Kody Jackson](https://www.linkedin.com/in/kody-with-a-k/), senior manager of content engineering at Cloudflare, [Diogo Carneiro](https://www.linkedin.com/in/fdiogocarneiro/), systems engineer at Cloudflare, and [Amy Dutton](https://www.linkedin.com/in/amy-dutton/), senior design engineer, the migration delivered a faster and more reliable site:

> Comparing p95 response latencies between the old architecture (green line) and the new EmDash setup (yellow line) revealed a stark difference. Where the previous platform experienced periodic latency spikes under load, the new system maintains a remarkably flat, consistent response profile. By running EmDash on Cloudflare Workers alongside our new caching layers, we’ve delivered a significantly faster and more performant reading experience across the board.

Cloudflare used a proxy Worker to gradually route traffic from WordPress to EmDash, with automatic fallback to the legacy site if errors occurred. The rollout started at 1% of traffic and increased progressively as the team validated the new platform, reaching 100% in a single day. Jackson, Carneiro, and Dutton add:

> We deployed a proxy Worker to intelligently route traffic between the legacy blog and the new EmDash-powered site. This Worker set a version cookie on requests, which then let us route incoming traffic to the new or legacy experience accordingly. Additionally, this strategy allowed us to fall back to the legacy blog if the new site experienced any 500 errors.

*![](https://www.infoq.com/news/2026/09/cloudflare-emdash-migration/news/2026/09/cloudflare-emdash-migration/en/resources/1image2\(1\)-1788551179579.jpg)*

*Source: Cloudflare blog*

[Discussion on Reddit](https://www.reddit.com/r/emdash_cms/comments/1vxvt8p/comment/p5s4oso/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) focuses on the migration strategy, with one commenter highlighting the proxy Worker, cookie-based routing, and fallback mechanism:

> The zero-downtime proxy Worker plus cookie routing is the part most teams underestimate. A good rollout plan usually needs a kill switch, per-request fallback, and metrics split by cohort so you can catch cache regressions before the 1% becomes 100%.

The migration also improved access for AI agents, with a new MCP server for the Cloudflare Blog and another for EmDash that lets authors browse, create, edit, publish, and schedule content.

On Reddit, user *u/themistermeister* compares EmDash to Ghost and [writes](https://www.reddit.com/r/CloudFlare/comments/1vxclzn/comment/p5p3aqd/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button):

> EmDash's cost is much less and the AI interactivity is much greater. And it has near infinite extendibility with a brilliant roadmap.

According to the article, editors encountered some early adoption issues, mostly with the editing experience and scheduled posts. These were reported to the EmDash team, which Cloudflare says is working toward a v1 release soon, although no official date has been announced.

## About the Author

#### **Renato Losio**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/cloudflare-emdash-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。