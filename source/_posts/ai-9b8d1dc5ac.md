---
title: "Android Bench 2 Adds Support for Long-Horizon Tasks, Agentic Evaluation, and Continuous Scoring"
date: 2026-10-10 09:24:28
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google has released Android Bench 2.0(https://android-developers.googleblog.com/2026/09/android-benc"
source_url: "https://www.infoq.com/news/2026/10/android-bench-2/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-09T17:00:00.000Z　|　采集：2026-10-10 09:24:28

## 正文

[Google has released Android Bench 2.0](https://android-developers.googleblog.com/2026/09/android-bench-2-long-horizon-tasks.html), a major update to its benchmark framework for evaluating AI models and agents on Android development tasks. The update introduces long-horizon tasks (LHTs), agent-based evaluation, and continuous scoring to better assess performance on complex, multi-step development tasks.

[Launched a few months ago](https://www.infoq.com/news/2026/07/android-studio-quail-2/), Android Bench evaluates AI models against a set of common development tasks, incorporating Android best practices in areas such as permissions, navigation, and connectivity. With the latest release, Google has expanded the benchmark to cover a broader range of development tasks.

> Today we're releasing the first set of long-horizon tasks (LHT), which are tasks of great complexity that take an engineer multiple days or even a week to complete. We are also introducing agentic evaluation, starting with agents from corresponding model providers.

While the original version focused on incremental changes to existing repositories, Android Bench 2.0 introduces long-horizon tasks (LHTs) that Google describes as work an engineer might take "multiple days or even a week to complete". These tasks include upgrading dependencies, adding new features, building apps from scratch, or converting a cross-platform app to Android.

One major change in version 2.0 is the shift from binary pass/fail evaluation to a more nuanced scoring system. Previously, a complex task could be marked as failed because of a single failing edge-case assertion, even if the agent had successfully met dozens of other requirements.

> We calculate this completion rate through a combination of factors like functionality, visual fidelity, and avoiding regressions. We also apply objective scoring penalties for deviations from evaluation instructions or structural constraints.

The results provided by Android Bench 2.0 also help identify which tasks are more likely to succeed with AI assistance. For example, Google reports that "AI does a better job at writing new code rather than refactoring existing code", which can reflect the fact that refactoring and migrations require an understanding of the architectural complexity of the codebase.

Similarly, AI performs well on several "well-established, deterministic transformations", even in larger codebases. Examples include converting Java to Kotlin, swapping Retrofit for Ktor, or introducing a ViewModel layer.

On the contrary, in a number of cases model still struggle, including with tasks requiring runtime validation (like missing dependency injection graphs), involving breaking framework changes, or running into knowledge gaps with unreleased libraries. In particular, the best-in-class model achieves only 80% completion rate in porting cross-platform app to Android, which remains overall an "open challenge".

The updated [Android Bench 2.0 dashboard](https://developer.android.com/bench) includes recent models, such as Gemini 3.8 Flash, Gemini 3.7 Flash, OpenAI GPT-6, Anthropic Fable 5.1, Kimi K3, and Qwen 3.8 Max. At the time of the article, Claude Opus 5.5 was at the top of the leaderboard with a 32% LHT pass rate, followed by GPT 6 Astra at 28%.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/android-bench-2/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。