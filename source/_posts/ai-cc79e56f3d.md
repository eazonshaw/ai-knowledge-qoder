---
title: "Shopify Drops React Native for Swift and Kotlin as AI Changes Cross-Platform Development Tradeoffs"
date: 2026-09-17 07:58:33
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Shopify recently announced it is abandoning React Native(https://shopify.engineering/back-to-native)"
source_url: "https://www.infoq.com/news/2026/09/shopify-drops-react-native/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-16T12:45:00.000Z　|　采集：2026-09-17 07:58:33

## 正文

Shopify recently [announced it is abandoning React Native](https://shopify.engineering/back-to-native) to rewrite its flagship apps in Swift and Kotlin. With the significant jump in the quality of AI models, Head of Mobile Mustafa Ali reassessed Shopify’s commitment to React Native, estimating that the benefit/cost ratio of maintaining native codebases across mobile platforms was now above that of using an abstraction layer.

The about-face shift comes after Shopify [declared in 2020 that React Native was the future](https://shopify.engineering/react-native-future-mobile-shopify) of its mobile architecture, [reaffirming again in 2025](https://shopify.engineering/five-years-of-react-native-at-shopify) its commitment after a successful 5-year migration of all its apps to React Native.

The rationale then was three-fold: stop building the same features twice, talent portability, and spending more time delivering value to users vs. chasing feature parity. Shopify at the time reported increased development productivity with apps that were both blazing-fast (<500ms screen loads) and stable (>99.9% crash-free sessions). Reactive Native features such as hot reloading and TypeScript were also mentioned as notable productivity enablers.

Yet, even then, Shopify did not discard native platform development entirely:

> Native is still the best way for building cutting-edge features that leverage device hardware like 2D / 3D scanning and running AI models on-device. It is also better suited for building features that have memory limitations like home and lock screen widgets, Apple Watch apps and complications, App Intents, and Siri Shortcuts.
> 
> Native is also the better choice for long-running background jobs.
> 
> Instead of thinking native ***or*** React Native, think native ***and*** React Native.

A little over a year later, Shopify has now reassessed its technological choices, driven in particular by two key factors. The first was a looming significant refactor to adopt React Native’s New Architecture:

> That work would have required us to revisit native module integrations, rendering, and the boundaries between shared and platform-specific code

Shopify was thus faced with a major engineering effort that made a deeper analysis of engineering options worthwhile.

The second factor was the fast-paced improvement in quality of AI coding models, agents, and harnesses. After a successful proof of concept led by a single engineer in just one week, six engineers rebuilt the flagship [Shop app](https://shopify.engineering/shop-app-migration) from the ground up to production deployment in 12 weeks, further reinforcing the clean-slate greenfield rewrite option over a migration.

By standardizing on modern declarative UI frameworks—[Apple’s SwiftUI](https://developer.apple.com/xcode/swiftui/) and [Google’s Jetpack Compose](https://developer.android.com/compose)—the team leveraged structural and mental model symmetries between platforms to guide autonomous agents while matching platform-native idioms.

Shopify reports improvement in cold startup latency (dropping 23% on iOS and 50% on Android), session stability (from 99.5% to 99.95%, i,e, a 10x reduction in sessions that crash), 75% faster release build times on Android. Also on Android, native feed scrolling maintained sustained 120 FPS throughput without requiring extensive manual optimization.

![Native vs. React Native comparison on Android](/ai-knowledge-qoder/_imgs/8aaf1ea13713e159.gif)

(Native vs. React Native comparison on Android. Source: [Migrating Shop app from React Native to native](https://shopify.engineering/shop-app-migration))

In spite of the progress in AI coding models, the rewrite did still require considerable engineering involvement in architecture, planning agent work, validating task completion and remediating errors. Developers are encouraged to [read both](https://shopify.engineering/back-to-native) published [in-depth articles](https://shopify.engineering/shop-app-migration).

An interesting detail however is that Shopify isolated the factors of change (the mobile platform, the UI) from the core, stable business logic and application state management to mitigate the slow feedback loops inherent to mobile simulators. AI models would thus dispatch actions, manipulate navigation state, and assert outcomes in milliseconds, on the desktop, without rendering UI or using a simulator. Simulators are reserved primarily for automated end-to-end integration passes.

The announcement unsurprisingly led to extensive debate in the mobile development community. [One argument](https://www.reddit.com/r/reactnative/comments/1wclvv0/comment/p9gz141/) is that Shopify’s reported performance and productivity results are measured vs. the old React Native architecture instead of the new one, leaving open the possibility that migrating to the new architecture may have achieved similar or better results. Another significant tradeoff [reported by developers](https://news.ycombinator.com/item?id=49647401) is the difficulty of over-the-air updates when going full Native. Shipping a new version of the app may require going through the app review process gate, thus slowing down release frequency. [One developer wondered](https://news.ycombinator.com/item?id=49648457) if this being perceived as a strong argument in favor of React Native is not influenced by a web culture that contrasts significantly with the native development ethos:

> I’ve worked with both native and cross-platform. I think the mentality of being able to make changes quickly without much review often comes from cross-platform, especially when the developers come from a web background.
> 
> Changes are cheap and fast, so teams often feel less pressure to test everything thoroughly before a release. \[…\]
> 
> With native, you know each release is harder to roll back, so you tend to build more tooling around releases, think through changes more carefully, and test more thoroughly before they’re ready to ship. You opt for one bigger, more stable release every few weeks instead.
> 
> At the end of the day, both approaches work.

Shopify plans to complete its Point of Sale, and Inbox apps over the coming year, with the Shopify app (with 300+ screens, home & lockscreen widgets, Apple Watch app, Siri Shortcuts) due to completion this year.

## About the Author

#### **Bruno Couriol**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/shopify-drops-react-native/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。