---
title: "From Agent Authorization to AI Production Evaluation: QCon AI New York 2026"
date: 2026-09-26 08:16:24
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "QCon AI New York has confirmed 23 of more than 30 sessions(https://newyork.qcon.ai/sessions/newyork2"
source_url: "https://www.infoq.com/news/2026/09/qcon-ai-newyork-2026-sessions/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-25T11:00:00.000Z　|　采集：2026-09-26 08:16:24

## 正文

QCon AI New York has confirmed [23 of more than 30 sessions](https://newyork.qcon.ai/sessions/newyork2026?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_sep25_qainy26), with newly published talks examining identity and authorization for autonomous agents, guardrails for an operations agent running against large-scale Kubernetes infrastructure, shared model-serving platforms, and the evaluation of AI decision systems after deployment.

The conference will take place on December 15–16, 2026, at The Westin Jersey City Newport. Its program is intended for senior engineers, architects, and technical leaders working on AI systems in production.

According to QCon AI New York Conference Chair Hien Luu, the program reflects a broader change in the engineering work surrounding AI systems:

> "Across this year’s program, one shift is unmistakable: AI engineering has become systems engineering.
> 
> As AI systems become more capable and autonomous, the engineering challenge is shifting from model behavior to system behavior. That means giving agents bounded execution authority, managing context and state, and wrapping probabilistic models in deterministic control planes.
> 
> Harness engineering, continuous evaluation, observability, and policy enforcement are becoming core infrastructure. At the same time, inference economics such as latency, token usage, model routing, and cost are now first-class architectural constraints, not implementation details."

Hien added that the emerging discipline increasingly draws on distributed systems, security, platform engineering, and site reliability engineering, with the goal of making AI systems reliable, observable, controllable, and economical to operate.

## Identity and Delegated Authority for Agents

In the keynote [When Software Becomes a User: Identity and Authorization for Agents in Production](https://newyork.qcon.ai/keynote/newyork2026/when-software-becomes-user-identity-and-authorization-agents-production?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_sep25_qainy26), Nancy Wang, CTO at 1Password, will examine how established identity and authorization models change when software agents become active users of production systems.

Traditional identity systems generally assume one human principal, a stable role, a bounded session, and a person who can be held accountable afterward. Agents may instead act for multiple users, invoke tools that were not enumerated in advance, create subagents, and continue operating without direct supervision.

The keynote will cover delegated authority across chains of agents, auditability across multi-hop tool calls, and techniques for giving an agent enough access to complete a task without placing the underlying credentials or secrets into its context. Nancy will also examine the limitations of using either broadly privileged, long-lived service accounts or permissions so narrow that the agent cannot complete its intended work.

## Guardrails for Operations Agents

Ronak Nathani, Principal Staff Software Engineer at LinkedIn, will present [Inside LinkedIn’s Kubernetes Ops Agent: Skills, Tools, and Guardrails](https://newyork.qcon.ai/index.php/presentation/newyork2026/inside-linkedins-kubernetes-ops-agent-skills-tools-and-guardrails?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_sep25_qainy26).

LinkedIn’s Kubernetes-based compute platform spans more than 500,000 nodes and five million pods. Ronak’s team built an operations agent that can be used through Slack, coding-agent plugins, and automated workflows for investigating deployment failures.

The session focuses on the engineering controls required when an agent moves from explaining an operational problem to taking action against production infrastructure. These include server-side rate limits, protection around delete and scale-down operations, access controls, bounded actions, and peer approval for production changes.

Nathani will also describe how the team turns recurring operational work into reusable skills and how they use JIRA history and previous support conversations to identify problems those skills can handle.

## A Shared Inference Platform for ML and Generative AI

In [One Infrastructure, Every Model: How Netflix Scales ML & GenAI](https://newyork.qcon.ai/presentation/newyork2026/one-infrastructure-every-model-how-netflix-scales-ml-genai?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_sep25_qainy26), Netflix Staff Software Engineer Rajat Shah will discuss the company’s five-year effort to consolidate its model-serving infrastructure.

The resulting platform handles approximately one million inference requests per second across more than 300 models. It supports use cases ranging from recommendations and commerce to newer applications built with large language models.

Rajat will examine the architectural and organizational trade-offs behind using one multi-tenant platform for models with different operational requirements. These include supporting latency regimes from tens of milliseconds to more than 300 milliseconds, defining a common deployment contract, and deciding where business logic ends and model logic begins.

The session will also cover what consolidation changed for ML practitioners. Rather than rebuilding deployment and serving infrastructure for individual models, teams can work against a shared platform and spend more time on the modeling problem. Shah will also discuss the operational costs and continuing challenges introduced by this approach.

## Evaluating AI Decisions After Deployment

Bruna Pereira, Software Engineer at DoorDash, will present [After It Works: Trusting and Teaching Alchemy, DoorDash’s AI Moderation Platform](https://newyork.qcon.ai/index.php/presentation/newyork2026/after-it-works-trusting-and-teaching-alchemy-doordashs-ai-moderation?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_sep25_qainy26).

Alchemy is a content-agnostic moderation platform that can evaluate different forms of user-generated content. Its architecture uses a lower-cost in-house classifier to gate access to a more expensive large language model. Approximately 90% of content classified as clearly acceptable never reaches the more expensive layers.

The session concentrates on the work that follows the initial production release: determining whether a decision is correct when there is no clean ground truth, evaluating nondeterministic judgments, and changing prompts or models without losing visibility into their effects.

Bruna will discuss an evaluation harness that supports shadow-mode testing, backtesting against historical production data, labeling, and metrics tied to incident reduction rather than model accuracy alone. She will also explain how judgments from the LLM can become training data for the lower-cost classifier, reducing latency and inference costs over time.

Together, these sessions show AI engineering expanding into questions that have traditionally belonged to security, distributed systems, platform engineering, and SRE: who or what is authorized to act, how those actions are constrained, where shared infrastructure should be introduced, and how teams determine whether a deployed system continues to behave acceptably.

QCon AI New York takes place on December 15–16, 2026. Current early bird pricing ends October 13. The [complete program published so far](https://newyork.qcon.ai/sessions/newyork2026?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_sep25_qainy26) and [registration details](https://newyork.qcon.ai/registration/event/newyork2026?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_sep25_qainy26) are available on the conference website.

## About the Author

#### **Artenisa Chatziou**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/qcon-ai-newyork-2026-sessions/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。