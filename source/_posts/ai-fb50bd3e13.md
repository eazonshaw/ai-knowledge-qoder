---
title: "How Figma Uses AI Agents for Security"
date: 2026-09-07 07:21:42
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "The engineering team at software company Figma recently documented how they built AI agents(https://"
source_url: "https://www.infoq.com/news/2026/09/figma-security-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-06T06:59:00.000Z　|　采集：2026-09-07 07:21:42

## 正文

The engineering team at software company Figma recently documented [how they built AI agents](https://www.figma.com/blog/how-we-secure-figmas-internal-systems-with-agents/) to help their security team investigate alerts, search past incidents, check company systems, and even prepare code fixes. The agents learn from previous investigations, reducing repetitive work and helping engineers resolve complex alerts about 70% faster, while human review and strict controls remain in place.

![](https://www.infoq.com/news/2026/09/figma-security-agents/news/2026/09/figma-security-agents/en/resources/1figma-1787900967673.jpg)

*Source: Figma blog*

The team describes a security system built on [Panther SIEM](https://github.com/TachTech-Engineering/panther-siem) that investigates alerts and checks audit logs across AWS, Okta, GitHub, GCP, and [osquery](https://www.osquery.io/), an open-source tool that lets you query computers for security and system information using SQL. It queries more than 100 other sources and can open PRs.

The authors report that this reduced resolution time by about 70% for complex alerts and reduced on-call pages by 20% by lowering the severity of some alerts. [Matthew Sullivan](https://www.linkedin.com/in/securitysully/), formerly a security engineer at Figma and now at Nition, and [Brad Girardeau](https://www.linkedin.com/in/bradgirardeau/), security engineering manager at Figma, write:

> The alert triage agent (using a model like Claude Opus) is where most of the investigation happens. It receives the full Slack thread history as context, its own steering memory (more on this later), and a set of tools scoped to what a security on-call engineer typically needs during triage.

According to the article, the agentic system uses [AWS Bedrock Knowledge Bases](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html), [Amazon Kendra](https://aws.amazon.com/kendra/), [Tines](https://www.tines.com/), and a Snowflake-based tool to search historical alerts and investigate Panther data. Sullivan and Girardeau add:

> Memory ended up being the thing that had the most impact on how useful the system became over time. We have several kinds, and keeping them separate turned out to be important.

Three types of memory help the system improve investigations over time: past alerts, behavioral guidance, and learned database structures. Safety controls are built into the tools themselves, with agent-created PRs set to draft by default and prompts designed to prevent sensitive data from being shared in public Slack channels.

In the separate article "[How Figma stays ahead of vulnerabilities with agents](https://www.figma.com/blog/how-figma-stays-ahead-of-vulnerabilities-with-agents/)," the engineering team reported that its agents found more than 100 previously unknown vulnerabilities, including two critical flaws missed by traditional tools, and that its code reviewer reached 80% precision within a month. The system also improved detection of known bugs by about 30% through a second review step and the team reported about a 50% reduction in some coding errors after adding automated guidance. While the authors describe the steps they performed to achieve those improvements, they warn:

> We can't tell you exactly what to do: The specifics depend on your company size, the risks you face, and the feedback loops you already run. But one main lesson is to improve precision before recall. The order is counterintuitive, because the historical bugs you already have can only measure recall; they barely help with the precision you must fix first.

As security teams give AI agents more responsibility, the role of human approval remains an open question. Cloud security company Wiz recently reporte in "[GhostApproval: A Trust Boundary Gap in AI Coding Assistants](https://www.wiz.io/blog/ghostapproval-a-trust-boundary-gap-in-ai-coding-assistants)" that six AI coding assistants could be tricked by malicious repositories while showing users a harmless-looking approval prompt. InfoQ recently covered [OpenAI's disclosure](https://www.infoq.com/news/2026/08/claude-sandox-breach/) regarding sandbox escapes.

Figma acknowledges that the existing AI agents are not perfect, but neither are humans, and concludes that the choice is not between the two, with the right balance between automation and human oversight still evolving.

## About the Author

#### **Renato Losio**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/figma-security-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。