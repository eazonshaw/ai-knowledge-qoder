---
title: "Cloudflare and VoidZero Introduce tsrs: An AI-Generated Rust Port of TypeScript"
date: 2026-10-28 08:49:53
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "tsrs(https://github.com/oxc-project/tsrs), a Rust port of the TypeScript compiler, has been announce"
source_url: "https://www.infoq.com/news/2026/10/cloudflare-tsrs-ai-typescript/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-27T07:34:00.000Z　|　采集：2026-10-28 08:49:53

## 正文

[tsrs](https://github.com/oxc-project/tsrs), a Rust port of the TypeScript compiler, has been [announced by Cloudflare](https://blog.cloudflare.com/typescript-rust-port/), which is developing it with VoidZero and Max Schwenk of [Owner.com](http://owner.com/), incubating the project inside the [Oxc toolchain](https://github.com/oxc-project) and working in close collaboration with the TypeScript team. Cloudflare is emphatic that this is not a fork, with the TypeScript team retaining full control over the language's design.

![Cloudflare's benchmark comparing tsrs against TypeScript 7.0 at the same number of checker workers](/ai-knowledge-qoder/_imgs/cc596aa05ffa458d.png)

[Cloudflare's benchmark](https://blog.cloudflare.com/typescript-rust-port/) comparing tsrs against TypeScript 7.0 at the same number of checker workers

The headline numbers are a claimed [up to 8x faster type checking and around 70% less memory](https://blog.cloudflare.com/typescript-rust-port/) than TypeScript 7.0 at the same number of checker workers. Rust also unlocks the use case of compiling to WebAssembly through [@tsrs/wasm](https://www.npmjs.com/package/@tsrs/wasm) so checks can run in a browser or on Workers, without dragging a garbage collector into the bundle the way a Go binary does.

To try, developers simply point it at an existing tsconfig and run:

```
npm install -D tsrs
npx tsrs -p . --noEmit
```

In a [detailed write-up](https://building.owner.com/tsrs), Schwenk explains he wrote "zero" code, instead directing agents led by Claude Opus 5.5 to produce a faithful port, using TypeScript's own 15,197 conformance cases as the spec. On Owner's 37,000-file monolith, a check that needed 19 GiB and 80 seconds on TypeScript 7.0 dropped to 7 seconds.

One developer [benchmarked both npm packages](https://dev.to/frankchu/cloudflare-says-its-rust-typescript-port-is-8x-faster-i-measured-53x-and-72-less-memory-1fdm) and measured 5.3x faster checking and 72% less memory, with identical diagnostics and byte-identical emit, but spotted that tsrs exits with code 2 on type errors where tsc exits 1, enough to quietly break a CI script. Measuring against the newer [TypeScript 7.1 beta](https://devblogs.microsoft.com/typescript/announcing-typescript-7-1-beta/) rather than 7.0, [ImportStatic found](https://importstatic.com/rust/tsrs-vs-tsgo-typescript-7-1) a smaller 2.7x gain, a reminder that the 8x headline is measured against the older baseline.

TypeScript's [Daniel Rosenwasser responded](https://news.ycombinator.com/item?id=50167925) that much of the speed "does not just come down to language choice," and that some optimisations discovered in tsrs are feeding into a leaner TypeScript 7.1. Peter Steinberger [reported](https://x.com/steipete/status/2112571535731106013) on X:

> Moved to tsrs over the weekend. Drop-in replacement. Around 5x faster for OC.
> 
> Kind of amazing that it took Microsoft a team and two years to rewrite the TS compiler in go, and now you can just let an agent rip and get sth significantly better within weeks.

Others were wary, [questioning](https://news.ycombinator.com/item?id=50168234) whether the arena-based, never-freed memory model is sound.

tsrs sits alongside Microsoft's own Go-based compiler, known as tsgo, and Theo Browne's rival Rust port, `tsc-rs`. Rather than compete, [Cloudflare is merging](https://daily.dev/posts/tsrs-ships-and-theo-s-rival-port-just-got-absorbed-wxzirxmz4) tsc-rs and tsrs into a single package, adding language server and content mapper support.

The release remains experimental. There is no watch mode or language server yet, `--init` and `--showConfig` are unsupported, and diagnostic order can differ, the [compatibility notes](https://github.com/oxc-project/tsrs/blob/main/docs/COMPATIBILITY.md) provide more details. Because tsrs tracks TypeScript 7, teams still on TypeScript 5 or 6 should first adopt [Microsoft's native Go port](https://devblogs.microsoft.com/typescript/typescript-native-port/) before swapping in tsrs, after which migrating is as simple as reusing the existing tsconfig.

tsrs is open source under Apache-2.0 and available [on GitHub](https://github.com/oxc-project/tsrs).

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/cloudflare-tsrs-ai-typescript/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。