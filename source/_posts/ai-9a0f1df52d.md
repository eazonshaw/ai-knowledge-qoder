---
title: "Inkitt Builds a One-Shot PR Creator with Resumable Agent Orchestration"
date: 2026-11-05 09:54:04
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Inkitt has built a one-shot pull request (PR) creator(https://medium.com/inkitt-tech/how-we-built-a-"
source_url: "https://www.infoq.com/news/2026/11/inkitt-one-shot-pr-creator-agent/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-04T14:36:00.000Z　|　采集：2026-11-05 09:54:04

## 正文

Inkitt has built a o[ne-shot pull request (PR) creator](https://medium.com/inkitt-tech/how-we-built-a-one-shot-pr-creator-at-inkitt-e1b8dbc52cda) that automates small, low-risk software changes, from task intake to a draft PR ready for testing and review. Triggered through Slack, Linear, or an API call from another agent, the workflow runs on remote infrastructure, reducing the need for developers to set up and supervise coding agents locally. Inkitt reported that the system was shipping code daily in a technical article published by Inkitt Tech.

The [Agi Letkiewicz Tanner](https://medium.com/inkitt-tech/how-we-built-a-one-shot-pr-creator-at-inkitt-e1b8dbc52cda) Lead Engineer at Inkitt, described it as

> Event-driven orchestrator that coordinates short-lived agent containers rather than relying on a fixed pipeline.

Individual stages handle specification, implementation, verification, CI failure repair, and merge conflict resolution. The orchestrator persists each run in a database, allowing execution to resume from its recorded state.

![](https://www.infoq.com/news/2026/11/inkitt-one-shot-pr-creator-agent/news/2026/11/inkitt-one-shot-pr-creator-agent/en/resources/1inkitt-1792280772685.jpeg)

*Inkitt’s one-shot PR creator architecture (Source: [Inkitt Blog Post](https://medium.com/inkitt-tech/how-we-built-a-one-shot-pr-creator-at-inkitt-e1b8dbc52cda))*

The orchestrator separates decision-making from side effects. Its core transition function maps the current run state and incoming event to the next action without directly accessing a database, network, or language model. The orchestrator retains credentials for external systems, while agent containers receive short-lived repository tokens and model credentials. They cannot directly access Slack or [Linear](https://linear.app/) credentials, cloud identities, or arbitrary network connections. A separate check inspects the actual Git diff to ensure changes do not touch restricted paths.

Inkitt limits automation to changes within predefined boundaries. The workflow rejects tasks involving database migrations, schema or shared contract changes, CI and container build configuration, authentication, payment code, or package additions and updates. Verification, CI repair, and merge conflict resolution each have a maximum of two attempts. Duplicate webhook deliveries are handled through deduplication and conditional database writes, applying the principle of [idempotent operations](https://docs.aws.amazon.com/durable-execution/patterns/best-practices/idempotency/) to workflows that may retry or receive repeated events. For CI completion, the orchestrator queries GitHub to determine whether all relevant jobs have finished instead of treating every job event as completion of the entire workflow.

Tanner wrote, describing the implementation challenges around idempotency, locking, retry budgets, and permissions.

> The model was the easy part.

The design shares some safeguards with other coding agents but uses a different orchestration model. [GitHub Copilot’s cloud agent](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/risks-and-mitigations) also restricts agent permissions and requires human review before merging, while [SWE-agent](https://github.com/SWE-agent/SWE-agent) focuses on solving repository issues through a model-driven interface for browsing, editing, and executing code. Inkitt’s account emphasizes persistent workflow state, bounded retries, and centralized control of external actions.

Human approval remains part of Inkitt’s process. The system opens draft PRs, cannot bypass branch protection or merge its own changes, and notifies requesters when CI passes and the changes reach staging. A person must mark a PR ready for review and manage reviewer requests and approval. For larger tasks, Inkitt also maintains a local version that keeps a human involved in the development process.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/inkitt-one-shot-pr-creator-agent/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。