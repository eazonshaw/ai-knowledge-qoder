---
title: "Production Patterns for Agents, Evals, and LLM Costs: QCon AI New York 2026"
date: 2026-10-14 08:45:07
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Once AI is in production, code arrives faster than it can be reviewed, token costs rise, evals have "
source_url: "https://www.infoq.com/news/2026/10/qcon-ai-newyork-2026-sessionsv2/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-13T12:00:00.000Z　|　采集：2026-10-14 08:45:07

## 正文

Once AI is in production, code arrives faster than it can be reviewed, token costs rise, evals have to be good enough to act on, and agents need permissions and guardrails. [QCon AI New York 2026](https://newyork.qcon.ai/?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26) has confirmed sessions from senior engineers who have worked through these problems in systems they run. The conference takes place December 15-16 at The Westin Jersey City Newport, about five minutes by PATH train from the World Trade Center. It is for senior engineers and technical leaders making decisions on production AI.

What the sessions offer is hindsight. The senior engineers presenting have already made these decisions and run the results in production. They describe the system and the numbers behind it, letting another team compare an approach against its own constraints before committing.

## Identity and authorization for agents in production

The QCon AI opening keynote describes two bad options for giving an agent production access. Teams hand it a long-lived service account and hope, or scope access too narrowly until it cannot finish its task. Nancy Wang, who founded and scaled AWS Data Protection, provides alternative solutions in [When Software Becomes a User: Identity and Authorization for Agents in Production](https://newyork.qcon.ai/keynote/newyork2026/when-software-becomes-user-identity-and-authorization-agents-production?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26).

See what those controls look like on a live platform. Implement guardrails that sit on the server, including rate limits and peer approval for production changes, from Ronak Nathani, who led the move to Kubernetes at LinkedIn. He presents [Inside LinkedIn's Kubernetes Ops Agent: Skills, Tools, and Guardrails](https://newyork.qcon.ai/presentation/newyork2026/inside-linkedins-kubernetes-ops-agent-skills-tools-and-guardrails?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26), detailing an operations agent working across 500,000+ nodes and 5M+ pods. Together, the two talks give a team an authorization model and a working set of guardrails to compare with its own.

## Whether a change is safe to ship, and what it costs to run

An eval is useful when engineers trust the score enough to ship or hold on it. Fabio Flores, who leads foundation development for Agentic Ordering at DoorDash, will argue that engineers should apply one judge to both simulated and production sessions so improvements measured before launch carry into production. He presents [From Signal To Impact: The Eval Loop Behind DoorDash's Agentic Ordering System](https://newyork.qcon.ai/presentation/newyork2026/signal-impact-eval-loop-behind-doordashs-agentic-ordering-system?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26).

Agent workloads that worked as prototypes can become too expensive in production as context grows. Tejas Chopra, who previously worked on distributed caching infrastructure at Netflix, will explore how to implement prompt compression and ordering that increases provider cache hits. In [Make Each Token Count: Compression, Caching, and Retrieval for Production LLM Context](https://newyork.qcon.ai/presentation/newyork2026/make-each-token-count-compression-caching-and-retrieval-production-llm?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26), he covers tiered storage for conversation history and the failure modes his team hit.

## When AI writes code faster than teams can review it

Human review becomes the bottleneck as AI tools generate more code.  Min Chen, who leads the move to AI-native software engineering at LinkedIn, suggests engineers should filter low-confidence findings before developers see them. She presents [High-Signal AI Code Review That Adapts to Your Codebase at Scale](https://newyork.qcon.ai/presentation/newyork2026/high-signal-ai-code-review-adapts-your-codebase-scale?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26). The system reviews tens of thousands of pull requests a week across roughly 10,000 repositories, and she explains how the team measures whether suggestions make it into merged code.

Faster output does not help every organization equally. Nathen Harvey, who leads DORA at Google Cloud, will explore how to assess AI maturity beyond adoption metrics and identify which existing problems AI is likely to make worse. He argues in [Building in the AI-First World: Scale Brilliance, Not Bottlenecks](https://newyork.qcon.ai/presentation/newyork2026/building-ai-first-world-scale-brilliance-not-bottlenecks?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26) that AI amplifies what an organization already does well and what it does badly.

## What teams take back

The [QCon AI Program Committee](https://newyork.qcon.ai/?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26#section-ny-conference-pcs) invites senior practitioners who are doing something other teams can learn from. The talks are vendor-neutral with no hidden product pitches, so each one is an account of what a team built and why. With one speaker for every eleven attendees, there is also time for a follow-up question for the person who built the system. The aim is for [teams to return with patterns](https://newyork.qcon.ai/?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26#section-who-attends) ready to adopt and costly mistakes they can avoid.

All confirmed talks are on the [QCon AI New York 2026 sessions page](https://newyork.qcon.ai/sessions/newyork2026?utm_source=infoq&utm_medium=referral&utm_campaign=newspost_oct13_qainy26).

## About the Author

#### **Artenisa Chatziou**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/qcon-ai-newyork-2026-sessionsv2/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。