---
title: "Akka Tests Spec-Driven AI Delivery Across 65 Open Source Projects"
date: 2026-10-07 09:08:59
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Akka used 65 open source projects to test a spec driven workflow(https://akka.io/blog/we-ported-65-o"
source_url: "https://www.infoq.com/news/2026/10/ai-spec-driven-delivery/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-05T13:58:00.000Z　|　采集：2026-10-07 09:08:59

## 正文

Akka used [65 open source projects to test a spec driven workflow](https://akka.io/blog/we-ported-65-oss-projects) for AI assisted software porting, measuring specification structure, context, model and effort selection, automated validation, token consumption, and runtime performance. The initial tranche took 99.3 hours and consumed 9.41 billion tokens, with Akka reporting a lines of code or performance improvement in 57 of the 65 ports.[](https://akka.io/blog/we-ported-65-oss-projects)

The experiment used two tranches. [Akka](https://akka.io/) analyzed all 65 projects, generating specifications and implementing up to 10% of each project's surface area, then selected 10 for complete implementation based on system characteristics and measurable results. The delivery harness cycled through discovery, specification, porting, benchmarking, and improvement. Discovery analyzed code, models, schemas, and runtime behavior, while Claude with [Akka Specify](https://doc.akka.io/reference/specify/index.html) handled implementation, testing, and review. A common benchmark runner compared tests, code size, and latency.

![](https://www.infoq.com/news/2026/10/ai-spec-driven-delivery/news/2026/10/ai-spec-driven-delivery/en/resources/1akka-1789859204112.jpeg)

*Akka delivery harness workflow(Source: [Akka Blog Post](https://akka.io/blog/we-ported-65-oss-projects))*

Akka found that structured specifications with claims, evidence, and typed behavior improved first-pass implementations, while gaps in context files remained around cross-component decisions. Follow-up areas include interface enumeration, test ingestion, provenance tracking, differential testing, and adversarial testing.[GitHub Spec Kit](https://github.com/github/spec-kit) similarly structures coding agent workflows around specification, planning, tasks, implementation, and convergence. In Akka's experiment, Sonnet averaged 61 minutes per port versus 120 minutes for Opus, while Opus used about 40% fewer tokens. Higher effort settings increased consumption without consistently improving efficiency.

The finding prompted discussion among engineers following the research. Aaditya, [commenting](https://www.linkedin.com/feed/update/urn:li:ugcPost:7501247531322912768/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287505128144941531136%2Curn%3Ali%3AugcPost%3A7501247531322912768%29) on a LinkedIn post by [Tyler Jewell](https://www.linkedin.com/in/tylerjewell/), CEO of Akka, wrote

> Smaller model's behavior matched modernization work he had observed, where the small model follows the spec while a larger model may improvise.

[Aaditya](https://www.linkedin.com/in/aaditya-%E2%80%8E-7431222a7/) also [questioned](https://www.linkedin.com/feed/update/urn:li:ugcPost:7501247531322912768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7501247531322912768%2C7505128144941531136%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287505128144941531136%2Curn%3Ali%3AugcPost%3A7501247531322912768%29)

> Whether reductions in lines of code resulted primarily from dead code removal or from differences in the target language.

[Rick Bryce](https://www.linkedin.com/in/rick-bryce-001b7aa5/), Head of Marketing at Avahi, [raised](https://www.linkedin.com/feed/update/urn:li:ugcPost:7501247531322912768/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287503110168000401409%2Curn%3Ali%3AugcPost%3A7501247531322912768%29) a related point in the same discussion and suggested that constraints could influence the result. The comments add questions around whether model capability, specification constraints, or both account for differences in porting efficiency.

> Cheaper model giving the tighter port is the finding worth chasing

![](https://www.infoq.com/news/2026/10/ai-spec-driven-delivery/news/2026/10/ai-spec-driven-delivery/en/resources/1Screenshot%202026-09-19%20at%203.48.15%E2%80%AFPM-1789859204112.png)

*Akka model and effort efficiency chart (Source: [Akka Blog Post](https://akka.io/blog/we-ported-65-oss-projects))*

Validation used the original unit and integration tests alongside auditors checking serialization, security, error handling, PII, idempotency, and architectural boundaries. Akka added guardrails as failures exposed new issues, while reporting that additional exit conditions increased porting costs. Performance varied by project: applications, frameworks, and libraries generally improved, while infrastructure and tooling showed median degradation. Akka reported a 143,333 times improvement for [Dify](https://github.com/langgenius/dify), but noted that the compared workloads differed, while [Netflix Metaflow](https://github.com/TylerJewell/metaflow-akka) was approximately 100 times slower.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/ai-spec-driven-delivery/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。