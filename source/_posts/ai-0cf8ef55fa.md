---
title: "RSPack 2.0: Performance Gains, Leaner Dependencies and ESM Core"
date: 2026-07-22 06:45:57
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Rspack(https://rspack.rs/), ByteDance's Rust-based JavaScript bundler, has released Rspack 2.0(https"
source_url: "https://www.infoq.com/news/2026/07/rspack-2-release/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-21T15:23:00.000Z　|　采集：2026-07-22 06:45:57

## 正文

[Rspack](https://rspack.rs/), ByteDance's Rust-based JavaScript bundler, has [released Rspack 2.0](https://rspack.rs/blog/announcing-2-0), shipping with a mix of performance gains, leaner dependencies, and a shift toward modern ECMAScript module output.

Rspack 2.0 introduces several changes, including a pure ESM core, experimental React Server Components support, improved static analysis for smaller bundles, and simplified configuration. It also marks a period of rapid growth for the project, with [weekly npm downloads climbing](https://x.com/rspack_dev/status/2046852575992177080) from 100,000 around the 1.0 release to more than 5 million.

One of the headline themes in Rspack 2.0 is performance. According to the team's benchmarks, overall build performance is around 10% faster than Rspack 1.7 and as much as 100% faster than 1.0. On a [10,000 component React project](https://github.com/LingyuCoder/rspack-react-10k-benchmark), production builds with persistent cache dropped from 5.6 seconds on 1.0 to 1.4 seconds on 2.0, while hot module replacement fell to 118 milliseconds. Cache reuse for the SWC minimizer improves build performance by around 50% on cache hits, and memory usage drops by more than 20% when cache is enabled.

Equally notable is a sharp reduction in dependencies. The `@rspack/dev-server` package went from 192 dependencies down to 1, and its install size shrank from 15 MB to 1.4 MB. This detail drew attention on [Hacker News](https://news.ycombinator.com/item?id=47860203), where one commenter wrote that "the dependency-reduction numbers are the part that stood out to me more than the perf figures," calling it "a shift in philosophy, not just a benchmark" and a "stronger supply-chain stance than most bundlers take at this stage."

On the module front, `@rspack/core` is now published as a pure ESM package, with its CommonJS build removed. Because Node.js v20.19 and later can load ESM via `require()`, the team says most projects using the JavaScript API need no code changes. Rspack 2.0 also adds support for `import.meta` and the stage-3 import defer proposal, alongside improved ESM library builds. Tree shaking improves too, with side-effect-free function analysis now enabled by default in production, detectable through annotations.

Developers upgrading from 1.x should note that Rspack 2.0 requires Node.js 20.19+ or 22.12+, dropping Node.js 18, and that `module.unsafeCache` has been removed. The team recommends bumping `@rspack/core`, `@rspack/cli`, `@rspack/dev-server` and `@rspack/plugin-react-refresh` together to ^2.0.0. Full details are in the [migration guide](https://rspack.rs/guide/migration/rspack_1.x) and the [breaking changes discussion](https://github.com/web-infra-dev/rspack/discussions/9270). The 1.x line will continue to receive critical fixes for a period, though new work is focused on 2.x.

On [Reddit](https://www.reddit.com/r/rust/comments/1sxyuzt/announcing_rspack_20/), one r/rust user noted the benchmarks only compare against older Rspack versions, adding that as someone "in full rolldown stack" they would consider switching only if it offered more performance and ecosystem. Another on [r/javascript](https://www.reddit.com/r/javascript/comments/1sxsn3m/announcing_rspack_20/) considers it as a strong webpack alternative:

> Rspack is becoming a really solid alternative to Webpack. Great to see 2.0 coming out with all these improvements.

  
Rspack still competes with webpack, Vite's Rolldown, and Turbopack, and leans on its roughly [95% webpack config compatibility](https://www.kunalganglani.com/blog/vite-turbopack-rspack-benchmark) as a migration advantage that config-incompatible rivals cannot match.

Rspack is an open-source, Rust-based bundler maintained by ByteDance and released under the MIT license, positioned as a drop-in replacement for webpack with support for TypeScript, JSX, CSS, and the wider webpack plugin ecosystem.

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/rspack-2-release/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。