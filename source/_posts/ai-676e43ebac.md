---
title: "Jotai 3.0 Ships as a Modernized, ESM-Only Package That Drops Legacy Builds and Deprecated APIs"
date: 2026-09-15 08:05:02
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Jotai, the atomic state management library for React maintained under the Poimandres(https://github."
source_url: "https://www.infoq.com/news/2026/09/jotai-3-released/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-14T06:46:00.000Z　|　采集：2026-09-15 08:05:02

## 正文

Jotai, the atomic state management library for React maintained under the [Poimandres](https://github.com/pmndrs) collective, has published its [v3.0.0](https://github.com/pmndrs/jotai/releases) stable release, which the team [introduced](https://x.com/jotaijs) as "a modernized ESM-only package with no breaking changes and no new APIs." The [releases page](https://github.com/pmndrs/jotai/releases) echoes that framing, calling it "a mostly backward-compatible update, dropping some legacy support and deprecated APIs."

v3 drops the CommonJS build entirely and ships as ES modules only, alongside removed UMD and SystemJS bundles, older Node, React and TypeScript support, and the `jotai/babel` plugin. The package moves to a module-first structure, targets ES2020, reads NODE\_ENV directly instead of using build-time replacement, and swaps Rollup for other build tooling. Maintainer Daishi Kato has long documented the [dual package hazard](https://blog.axlight.com/) of shipping both CJS and ESM, so the ESM-only stance reads as the conclusion of that work, and the payoff is a leaner core with less to maintain.

The "no breaking changes" claim comes with an asterisk as several public APIs are gone, including `atomFamily`, `loadable` and the `setSelf` argument to atom read functions, but each had already been deprecated across the late v2 line, so teams that heeded those warnings should upgrade cleanly. The internal building blocks API has also been redesigned. Projects still importing through CommonJS or relying on the removed builds are the ones most likely to feel the shift.

Migration is meant to be mechanical for most teams. `atomFamily` now lives in the dedicated [jotai-family](https://jotai.org/docs/utilities/family) package with an identical API plus a new atomTree helper, so the change is a single import swap:

```
// Before (v2)
import { atomFamily } from 'jotai/utils'
// After (v3)
import { atomFamily } from 'jotai-family'
```

loadable users are pointed toward jotai-eager, and the full path is documented in the [v3 migration guide](https://github.com/pmndrs/jotai/blob/v3/docs/guides/migrating-to-v3.mdx).

In the [Ideas for v3](https://github.com/pmndrs/jotai/discussions/2889) thread, one user pushed back on removing `setSelf`, describing an optimistic `atomWithStorageWhileRevalidate` pattern that hydrates from localStorage while fetching fresh server data and has no clean replacement without it. The same thread carries a detailed request for a first-class default store lifecycle so tests can reset state without reaching into internal APIs, a real pain point for large apps that lean on `getDefaultStore()`. In a [separate discussion](https://github.com/pmndrs/jotai/discussions/3352), Kato confirmed that new features and deeper breaking changes were deliberately out of scope for 3.0, steering concurrent-safe atoms and external-store syncing toward a later v3.x or a future v4.

Facebook's Recoil, the project that popularised atoms, is now widely treated as [deprecated](https://nextfuture.io.vn/blog/jotai-vs-recoil-2026-the-atomic-state-migration-recoil-is-deprecated), leaving Jotai as the de facto successor for the atomic model, while its Poimandres sibling [Zustand](https://jotai.org/docs/basics/comparison) holds the store-centric camp for teams that prefer a single external store. By making 3.0 a cleanup rather than a reinvention, the team is betting that a smaller, modern, ESM-native core is the more valuable upgrade for the ecosystem it now anchors.

Jotai takes an atomic approach to React state, building state from small units called atoms and combining them into a dependency graph so renders update only where values actually change. It is unopinionated and can run outside React through a standalone store, and 3.0 is now the stable line, available on npm for teams ready to move off the v2 releases.

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/jotai-3-released/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。