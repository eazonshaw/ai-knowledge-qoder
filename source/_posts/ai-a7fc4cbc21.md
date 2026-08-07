---
title: "Instacart Builds Blueberry, an AI-Powered Assistant to Help On-Call Engineers Investigate Incidents"
date: 2026-08-08 06:25:47
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Instacart has introduced Blueberry, an AI-assisted incident response system(https://tech.instacart.c"
source_url: "https://www.infoq.com/news/2026/08/instacart-blueberry-sre-ai/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-07T14:34:00.000Z　|　采集：2026-08-08 06:25:47

## 正文

Instacart has introduced [Blueberry, an AI-assisted incident response system](https://tech.instacart.com/blueberry-force-multiplier-for-the-on-call-engineer-98c446dfcc12) designed to help on-call engineers investigate and troubleshoot production issues faster. The system uses multiple AI agents, operational data, and historical incident knowledge to provide engineers with additional context and root cause hypotheses during production incidents.

The system was built to address a common challenge in large-scale operations: engineers often spend the early stages of an incident collecting context before they can begin diagnosis. This includes identifying service ownership, reviewing deployments, analyzing logs and metrics, searching documentation, and comparing symptoms against previous incidents.

Instacart reported that Blueberry executed approximately 25,000 diagnostic passes in April across more than 270 Slack channels. The company attributed improvements in diagnostic accuracy to grounding the system with more than 14 years of incident history, which helped improve results from the mid-60% range to the high 90% range.

Blueberry integrates with Slack-based incident workflows, allowing engineers to investigate issues without leaving existing collaboration channels. The system assists engineers by gathering information, generating hypotheses, and supporting debugging rather than automatically making production changes.

Instacart CTO [Anirban Kundu](https://www.linkedin.com/in/ankundu/) described Blueberry as part of the company’s broader exploration of agentic AI systems. [According](https://www.linkedin.com/posts/ankundu_blueberry-force-multiplier-for-the-on-call-activity-7485344932899995648-Yv1N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAArnikgBqzTxA9Y838-O55QUcB2McACIq94) to Kundu, when an alert is triggered, Blueberry launches approximately 10 subagents in parallel and generates a grounded root cause hypothesis directly in the Slack thread where engineers are working. The system typically provides this initial investigation output within about three minutes.

![](https://www.infoq.com/news/2026/08/instacart-blueberry-sre-ai/news/2026/08/instacart-blueberry-sre-ai/en/resources/1instacartslack-1785721385389.jpeg)

*Slack thread screenshot showing Blueberry’s auto-triage (Source: [Instacart Blog Post](https://tech.instacart.com/blueberry-force-multiplier-for-the-on-call-engineer-98c446dfcc12))*

The architecture combines AI reasoning with organization-specific operational knowledge. Instead of relying only on general-purpose language models, Blueberry connects agents with internal sources such as incident history, service ownership data, logs, deployments, and other debugging signals.

![](https://www.infoq.com/news/2026/08/instacart-blueberry-sre-ai/news/2026/08/instacart-blueberry-sre-ai/en/resources/1Screenshot%202026-08-02%20at%204.06.45%E2%80%AFPM-1785721385389.png)

*Durable, tool-aware harness: production path plus side-mounted MCP catalog, persisted state, and reviewed-improvement loop (Source: [Instacart Blog Post](https://tech.instacart.com/blueberry-force-multiplier-for-the-on-call-engineer-98c446dfcc12))*

A key design challenge for AI systems used in production operations is ensuring recommendations are grounded in reliable context. Blueberry uses a tool-aware approach where agents retrieve information from connected systems while maintaining investigation state. Engineers remain responsible for diagnosis, mitigation decisions, and remediation.

[Siby Alappatt](https://www.linkedin.com/in/sibyalappatt/), Vice President of Engineering at Instacart, [said](https://www.linkedin.com/posts/sibyalappatt_blueberry-force-multiplier-for-the-on-call-activity-7485694707533217792-T5sg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAArnikgBqzTxA9Y838-O55QUcB2McACIq94) the system has improved on-call troubleshooting and mitigation

> Blueberry has proven to be a force multiplier in harnessing AI to help transform on-call and help us quickly troubleshoot and mitigate complex issues in production. 

The system also focuses on preserving operational knowledge created during incident response. By incorporating historical incidents and team-specific context, Blueberry helps make previous operational experience available during future investigations.

[Alan Wong](https://www.linkedin.com/in/alankcwong/), Director of Software Engineering at Instacart, [highlighted](https://www.linkedin.com/posts/alankcwong_super-proud-of-the-team-in-launching-blueberry-share-7482870046621343744-dHzg/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAArnikgBqzTxA9Y838-O55QUcB2McACIq94) that Blueberry changes the starting point for on-call engineers by providing relevant information before deeper analysis begins. Instead of starting from an empty investigation path, engineers can begin with collected context such as logs, deployments, and related system information.

Instacart’s experience with Blueberry highlights that effective AI systems for operations depend not only on model capability but also on the surrounding engineering framework, including operational context, specialized workflows, tool integrations, and feedback loops. The system processed approximately 25,000 diagnostic passes in one month, with a reported 99.9% workflow success rate, more than 58,000 MCP tool dispatches, and support for around 60 team profiles.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/instacart-blueberry-sre-ai/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。