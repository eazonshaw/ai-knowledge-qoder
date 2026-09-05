---
title: "Blume: Zero-Config Docs Framework That Turns a Markdown Folder into an AI-Ready Website"
date: 2026-09-06 07:27:42
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Blume, a zero-config documentation framework that renders a folder of Markdown into a complete docs "
source_url: "https://www.infoq.com/news/2026/09/blume-docs-ai/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-05T06:27:00.000Z　|　采集：2026-09-06 07:27:42

## 正文

Blume, a zero-config documentation framework that renders a folder of Markdown into a complete docs site, has been [released as open source](https://x.com/haydenbleasel/status/2076714329404268576) by Hayden Bleasel, pitched as "a world-class docs framework for everything you ship" with zero-config setup, automatic SEO and AEO, 30+ components and no app boilerplate to write. Built on [Astro](https://astro.build/) and [Vite](https://vite.dev/) and licensed MIT on [GitHub](https://github.com/haydenbleasel/blume), it has passed 1,300 stars and reached [number seven on GitHub's TypeScript trending list](https://trendshift.io/repositories/81612).

The central claim is that the framework is the template, so there is nothing to clone. The CLI loads `blume.config.ts`, scans content into a graph and generates a hidden Astro project under `.blume/` that it drives for dev and build. Node.js 22.12 or newer and one Markdown file are the only prerequisites, per the [quickstart](https://useblume.dev/docs/quickstart).

```
npx blume init
blume dev
blume build
```

Configuration is opt-in and type-safe, validated by a schema through `defineConfig`:

```
import { defineConfig } from "blume";
export default defineConfig({
 title: "Acme Docs",
 deployment: { site: "<https://docs.example.com>" },
});
```

Sites emit `llms.txt` and `llms-full.txt`, serve raw Markdown at any `.md` URL and can [expose a hosted MCP server](https://useblume.dev/docs/configuration/ai), while `blume eval` turns [docs into a test suite](https://useblume.dev/docs/reference/eval): an agent answers user questions using only the documentation, a judge grades the answers and CI fails when the docs cannot answer.

On GitHub, TimonVS [asked for route-based page tabs](https://github.com/haydenbleasel/blume/issues/79) for design system docs, noting that using Starlight had forced "an ugly component override of the `PageTitle` component". Bleasel shipped query-parameter tabs within a day:

> So the query-param version covers "shareable tab URL" and "multiple groups per page," but not "a separate indexed URL per tab."

Other issues reported [dark mode elements flickering during client-side navigation](https://github.com/haydenbleasel/blume/issues/213) and incorrect font fallback for Vietnamese text. Blume's own [FAQ](https://useblume.dev/docs/faq) documents highlighted a formatting issue in Markdown with oxfmt collapses `:::note` directives onto a single line so they render as literal text, an [upstream bug](https://github.com/oxc-project/oxc/issues/24096) inherited from Prettier's Markdown printer, with a pinned patch as the workaround.

The [changelog](https://useblume.dev/changelog) describes a bundled `blume-migrate` skill for Mintlify, Docusaurus, Fumadocs, Nextra and Starlight that translates source config into `blume.config.ts`, restructures content into filesystem-derived navigation with redirects for every moved route, rewrites callouts to `:::` directives, converts icons to Lucide and points generated API references at `openapi.sources`. A third-party account exists too: PunGrumpy has written up [moving Logixlysia from Fumadocs to Blume](https://www.pungrumpy.com/blog/moving-logixlysia-from-fumadocs-to-blume).

Against rivals, Blume's [comparison table](https://useblume.dev/docs/faq) frames [Mintlify](https://www.mintlify.com/) as a hosted platform with a closed core, and [Fumadocs](https://www.fumadocs.dev/), Nextra and Docusaurus as a library plus an app you scaffold and then maintain on a React runtime. Blume claims the middle ground: open source, hostable anywhere, with only Markdown to own and a core theme that ships zero client framework JavaScript. Escape hatches include component overrides and `blume eject`, which promotes the generated runtime into a standalone Astro app.

Blume [ranked second of the day on Product Hunt](https://www.producthunt.com/products/blume-3) with 304 upvotes shortly after launch, and [MarkTechPost](https://www.marktechpost.com/2026/07/14/meet-blume-an-open-source-zero-config-documentation-framework-that-ships-ai-ready-docs-from-a-markdown-folder/) covered it in July. On the Product Hunt launch, someone asked:

> curious what "AI-ready" means concretely here - is it generating something like an llms.txt under the hood, or is it more about the markdown being cleanly chunked/structured for retrieval.

To which Bleasel replied:

> Means lots of things - llms.txt, raw markdown via negotiation headers, mcp servers, agent readability, skills. All in the pursuit of making your docs easier to read by agents. Check it out here: [https://useblume.dev/docs/configuration/ai](https://useblume.dev/docs/configuration/ai)

Blume is an open-source documentation framework distributed under the MIT license and maintained by Hayden Bleasel, an Australian design engineer whose other projects include Ultracite and Files SDK. It renders static HTML from a folder of Markdown on Astro and Vite, ships a core theme with no client framework JavaScript, and is available on [npm](https://www.npmjs.com/package/blume), with documentation at [useblume.dev](https://useblume.dev/).

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/blume-docs-ai/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。