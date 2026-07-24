---
title: "Jotai v2.20: Rework Store Building Blocks for High-Throughput Performance and Sets the Stage for v3"
date: 2026-07-25 06:54:02
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Jotai(https://jotai.org/), the atomic state management library for React created by Daishi Kato, has"
source_url: "https://www.infoq.com/news/2026/07/jotai-rework-performance/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-24T06:26:00.000Z　|　采集：2026-07-25 06:54:02

## 正文

[Jotai](https://jotai.org/), the atomic state management library for React created by Daishi Kato, has [released Jotai v2.20.0](https://github.com/pmndrs/jotai/releases/tag/v2.20.0), a performance-focused update that reworks the library's internal store building blocks and clears the runway for a future Jotai v3.

Jotai v2.20.0 centres on a single theme: improving performance in high-throughput scenarios. The release credits core contributor [David Maskasky](https://github.com/dmaskasky) and lands a small set of internal changes, including avoiding the `getInternalBuildingBlock` function ([#3293](https://github.com/pmndrs/jotai/pull/3293)), Rev3 type narrowing for `onMount` hooks ([#3311](https://github.com/pmndrs/jotai/pull/3311)), and lazy hooks in `ensureAtomState` for new atom state ([#3313](https://github.com/pmndrs/jotai/pull/3313)).

The change has a long history. As Kato explained in his [Read the Code newsletter](https://newsletter.daishikato.com/p/jotai-v2-20-0-and-the-store-building-blocks), the building blocks idea first arrived in [v2.12.0](https://github.com/pmndrs/jotai/releases/tag/v2.12.0) more than a year ago, exposing some internals so that ecosystem libraries such as `jotai-effect` and `jotai-scope` could extend Jotai's core. Rather than letting the store be extended after creation, which he worried could cause mismatched capabilities over time, Kato chose to accept customisation at the moment a store is built. He wrote that the API became both flexible and safe, or hard to misuse, around v2.15.0.

That flexibility came at a cost. Someone reported a performance regression, and the major reason was the use of `WeakMap`, which had been introduced to make the building blocks more flexible ([#3280](https://github.com/pmndrs/jotai/pull/3280)). The fix swaps the WeakMap approach for passing everything as parameters instead. Kato described the solution as "not super clean, but fits with my mental model," and framed the release as the last step before he starts thinking seriously about Jotai v3.

For most developers the everyday API is untouched. Creating and using a store looks exactly as it did before.

The breaking label applies to the internal building blocks used by library authors, not to typical application code. The impact is visible downstream, where [jotai-devtools v0.14.0](https://github.com/jotaijs/jotai-devtools/blob/main/CHANGELOG.md) added support for `INTERNAL_buildStoreRev3` and dropped older versions to stay compatible. Teams still on Jotai v1 should consult the official [v2 migration guide](https://jotai.org/docs/guides/migrating-to-v2-api), and those relying on `atomFamily` should note it is [deprecated ahead of v3](https://jotai.org/docs/utilities/family) in favour of the `jotai-family` package. Two follow-up patches have already shipped, [v2.20.1](https://github.com/pmndrs/jotai/releases/tag/v2.20.1) and [v2.20.2](https://github.com/pmndrs/jotai/releases/tag/v2.20.2), addressing further edge cases.

Direct community reaction to the point release has been muted, in keeping with its under the hood nature, though the longer running [ideas for v3](https://github.com/pmndrs/jotai/discussions/2889) discussion continues to draw contributors. In that thread Kato has outlined a v3 plan that explicitly includes a redesign of the building blocks array structure, the very internals this release touches, alongside dropping CommonJS builds, dropping support for React below 18, and removing the `setSelf` option.

Those proposals have drawn comments, with one contributor focusing on the dropping of CJS:

> Regarding dropping CJS - I don't think this should even be a question. 99,9999% of Jotai users are using some kind of bundler, all of which support ESM just fine. The remaining 0,0001% would be users using pure ESM modules, in which case... Well... They're using ESM modules :D

Kato's reply highlights that server-side rendering users still need to be considered. Suggestions to loosen Jotai's coupling with React and court other frameworks were met with a firmly React-first stance.

In the wider landscape, Jotai remains the leading atomic option while sitting behind Kato's own [Zustand](https://github.com/pmndrs/zustand) in raw downloads. The project's own [comparison](https://jotai.org/docs/basics/comparison) frames Jotai as bottom-up atoms akin to Recoil, whereas Zustand offers a single top-down store closer to Redux, and Kato's proxy-based Valtio targets a different mental model again.

Jotai is open source under the MIT license and can be installed from [npm](https://www.npmjs.com/package/jotai).

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/jotai-rework-performance/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。