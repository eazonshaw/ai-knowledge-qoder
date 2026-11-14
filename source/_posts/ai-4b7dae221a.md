---
title: "Google Open Sources Ambient Quality Agent (AQuA) to Diagnose Production AI Agent Failures"
date: 2026-11-14 09:54:45
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google has open-sourced AQuA (Ambient Quality Agent),(https://developers.googleblog.com/the-outer-lo"
source_url: "https://www.infoq.com/news/2026/11/google-ambient-agent-prod/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-13T13:53:00.000Z　|　采集：2026-11-14 09:54:45

## 正文

Google has [open-sourced AQuA (Ambient Quality Agent),](https://developers.googleblog.com/the-outer-loop-insights-first-an-ambient-quality-agent-that-diagnoses-your-production-agent/) a reference implementation that analyzes production AI agent sessions, verifies recurring failure patterns, and investigates root causes against deployed source revisions. The tool targets silent quality regressions that conventional infrastructure monitoring can miss, such as agents ignoring user preferences or skipping required tool calls while returning successful responses.

AQuA runs alongside an agent in Google Cloud, outside its request path, reading telemetry from Cloud Trace, Cloud Logging, or BigQuery. It samples up to 1,000 recent sessions per run and processes them through five stages: sampling, reviewing, clustering findings, verifying candidate clusters, and tracking issues. Developers can configure domain-specific quality criteria through a `goal.md` file and add deterministic custom metrics. AQuA can run on a schedule, after a deployment, or on demand.

For root cause analysis, AQuA compares failing sessions with an immutable source snapshot captured at deployment. Its diagnosis agent identifies relevant code or instructions, cites file and line ranges, and proposes changes when the cause lies in the repository. It can also attribute failures to external dependencies, tool handoffs, or retrieved data. AQuA does not apply fixes or open pull requests automatically.

![](https://www.infoq.com/news/2026/11/google-ambient-agent-prod/news/2026/11/google-ambient-agent-prod/en/resources/1Screenshot%202026-10-24%20at%207.49.44%E2%80%AFPM-1792897592075.png)

*AQuA sidecar architecture (Source: [Google Developer Blog Post](https://developers.googleblog.com/the-outer-loop-insights-first-an-ambient-quality-agent-that-diagnoses-your-production-agent/))*

Google evaluated 32 sessions from a multi-agent travel application, identifying 42 findings grouped into nine candidate clusters. The verifier rejected three unsupported clusters after checking up to three full transcripts per candidate cluster, leaving six verified issues. Two involved bypassing seat availability checks and losing a traveler's vegan preference during delegation.

After developers modified prompts and replayed the sessions, seat-selection bypasses fell from 15 sessions to two, dietary-preference omissions dropped from seven to zero, and sessions passing all checks increased from five to 13. These results came from controlled replay, not production traffic.

The Google blog post states,

> An insight is its citations, not a self-reported confidence score.

Findings link to supporting traces, and proposed root causes must reference valid lines in the deployed snapshot. AQuA tracks findings as `NEW`, `RECURRING`, or automatically `RESOLVED` after 14 days without being observed. Sampling can miss rare failures, and replay may not reproduce external state.

Reacting to the announcement on [LinkedIn](https://lnkd.in/p/gEKfSeK9), [Dmytro Aprelenko](https://www.linkedin.com/in/dmytroaprelenko/), engineering manager at Redcore, [wrote](https://lnkd.in/p/gsFr4Hyg),

> Agent orchestration definitely needs better continuous diagnosis to catch these loops early.

AQuA validates source references and links findings to supporting traces. Cluster verification filters false positives, though it cannot confirm every session exhibits the same failure. Google's [Agent Platform evaluation service](https://docs.cloud.google.com/gemini-enterprise-agent-platform/optimize/evaluation/evaluate-agents?utm_source=chatgpt.com) supports regression testing and production quality monitoring, while [Arize Phoenix](https://arize.com/phoenix/?utm_source=chatgpt.com) provides open-source tracing and evaluation. AQuA focuses on grouping production failures and linking verified findings to deployed source code.

Google identifies sampling limits and incomplete reproduction of external state as constraints. Its [open-source implementation](https://github.com/google/adk-recipes/tree/main/core/python/ambient-quality-agent?utm_source=chatgpt.com) helps teams integrate production agent diagnosis into development and evaluation workflows.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/google-ambient-agent-prod/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。