---
title: "Beyond Zero: Google Publishes Successor to BeyondCorp"
date: 2026-09-06 07:27:42
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "In a recent research paper(https://spawn-queue.acm.org/doi/10.1145/3819083), Google introduced Beyon"
source_url: "https://www.infoq.com/news/2026/09/google-beyond-zero/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-05T10:40:00.000Z　|　采集：2026-09-06 07:27:42

## 正文

In a [recent research paper](https://spawn-queue.acm.org/doi/10.1145/3819083), Google introduced Beyond Zero, a "security model for the AI era" that extends Zero Trust to autonomous AI agents. The new approach moves access decisions from the application level to individual resources and actions, combining static authorization controls with dynamic AI-driven decisions to enable machine-speed enforcement for humans and agents.

Beyond Zero uses contextual and risk-based, resource-level controls to continuously authorize individual actions by both humans and AI agents. The new model is based on five principles: authorization at the level of individual actions and resources across interfaces and APIs; a combination of static policies and dynamic controls for higher-risk scenarios; automatically enriched context about users, actions, data, and risks; automated investigation triggered by risk signals; and challenges or containment measures that can require additional verification or telemetry from users and AI agents.

[Joseph Valente](https://www.linkedin.com/in/josephvalente/), formerly director of product management at Google, and [Michal Zalewski](https://www.linkedin.com/in/lcamtuf/), distinguished security researcher and formerly at Google, write in the paper:

> The assumptions underpinning BeyondCorp — that accessors are human, that actions occur at human speed, and that applications are the correct boundary for trust—are no longer sufficient.

In 2014, Google published the [BeyondCorp whitepaper](https://cloud.google.com/beyondcorp), outlining its approach to replacing network-perimeter security with a zero-trust model for enterprise access. To adopt the latest model, SaaS vendors will need to expose action-level authorization, standards need to mature, and smaller security teams face difficult issues around false positives, intent, auditing, and cost. On [LinkedIn](https://www.linkedin.com/posts/josephvalente_it-took-an-incredible-team-of-people-to-build-share-7487644980589764608-2Tmd/), Valente explains:

> Beyond Zero is one of those areas where Google had built something internally that was well ahead of anyone else for a long time. Doing continuous authorization of every action at scale seemed like overkill at first. But then thousands of workers became hundreds of thousands of workers. Hundreds of thousands of workers were joined by millions of agents. And so on...

*![BeyondCorp vs. Beyond Zero](https://www.infoq.com/news/2026/09/google-beyond-zero/news/2026/09/google-beyond-zero/en/resources/1Screenshot%202026-08-24%20at%2021-14-35%20Beyond%20Zero%20Enterprise%20security%20for%20the%20AI%20era%20Queue-1787655401036.png)*

*BeyondCorp vs. Beyond Zero. Source: ACM digital library.*

Describing the "[new paradigm for enterprise security](https://blog.google/security/going-beyond-zero-a-new-paradigm-for-enterprise-security/)," [Heather Adkins](https://www.linkedin.com/in/argvee/), VP of security engineering at Google, and [Archana Ramamoorthy](https://www.linkedin.com/in/archanaramamoorthy/), senior director at Google, explain:

> The enterprise landscape is now entering a new era shaped by artificial intelligence, where AI is changing the assumptions around how enterprise security works. AI agents are being deployed globally to increase operational velocity and boost productivity.

In the article "[Beyond Zero: For The Rest Of Us](https://kanenarraway.com/posts/beyond-zero-for-the-rest-of-us/)," [Kane Narraway](https://www.linkedin.com/in/kane-n/), security manager at Canva, is positive about Beyond Zero's goals, but skeptical about how quickly ordinary enterprises can implement them. Narraway warns:

> It’s worth being clear about what this paper is and isn’t though. It’s aspirational. Google says deployments are internal-only, the components aren’t all built, and more papers are coming. This is the same playbook as 2014: publish the vision, describe the architecture at a high level, and encourage the industry to build towards it collaboratively (...) You aren’t Google and don’t try to be.

The [community reaction on Hacker News](https://news.ycombinator.com/item?id=49081644) has been so far largely skeptical, with commenters questioning the reliability and complexity of AI-driven authorization. User *stogot* comments:

> Zero trust is deterministic. AI is non-deterministic. Non-deterministic access controls are a terrible idea.

Some practitioners argue that access control is traditionally a hard security boundary, whereas probabilistic decisions are inherently harder to predict, test, and audit. Firas Durri writes:

> Preparing for AI agents means expanding auditability and reversibility in software.

Google presents Beyond Zero as an ongoing effort and says it plans to publish further details on its implementation and operational considerations, but no specific deadlines have been published.

## About the Author

#### **Renato Losio**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/google-beyond-zero/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。