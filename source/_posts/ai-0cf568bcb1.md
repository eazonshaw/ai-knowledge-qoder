---
title: "Expedia Uses AI Driven Service Telemetry Analyzer to Accelerate Incident Investigation"
date: 2026-07-24 06:49:55
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Expedia Group has introduced Service Telemetry Analyzer (STAR)(https://medium.com/expedia-group-tech"
source_url: "https://www.infoq.com/news/2026/07/expedia-ai-observability-star/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-23T14:15:00.000Z　|　采集：2026-07-24 06:49:55

## 正文

Expedia Group has introduced [Service Telemetry Analyzer (STAR)](https://medium.com/expedia-group-tech/expedias-service-telemetry-analyzer-60f2f96c5351), an internal AI-assisted observability platform that helps engineers investigate production incidents by analyzing service telemetry and generating structured root cause assessments. The system combines operational metrics with large language models (LLMs) through predefined diagnostic workflows, aiming to reduce the time engineers spend identifying the source of service degradation while keeping humans responsible for validation and decision-making.

Rather than adopting autonomous AI agents, the platform follows a deterministic workflow in which telemetry is collected, analyzed using domain-specific prompts, consolidated into intermediate findings, and summarized into a final report containing potential root causes and recommended next steps.

Describing the project's goal, the team wrote,

> *Our objective with this service was to minimize the time to know (TTK) and time to recover (TTR).*

![](https://www.infoq.com/news/2026/07/expedia-ai-observability-star/news/2026/07/expedia-ai-observability-star/en/resources/1expediastararch-1783819440211.jpeg)

*STAR Architecture (Source: [Expedia Blog Post](https://medium.com/expedia-group-tech/expedias-service-telemetry-analyzer-60f2f96c5351))*

The platform is implemented as a FastAPI application that integrates with Datadog to retrieve service metrics and an internal generative AI gateway that manages authentication and access to LLM providers. The workflow uses prompt chaining, allowing multiple specialized analyses to be performed before producing a consolidated diagnosis. Expedia said the current implementation does not use capabilities such as function calling, retrieval-augmented generation (RAG), memory, or autonomous tool use, instead relying on predefined workflows to generate consistent analyses.

STAR focuses on standardized infrastructure telemetry collected from Kubernetes-based services and JVM applications. The system analyzes metrics including request throughput, latency, HTTP, gRPC, and GraphQL error rates, CPU and memory utilization, container restart events, Kubernetes readiness and liveness probe failures, Java heap utilization, and garbage collection activity. Expedia explains that infrastructure metrics provide a consistent view across services developed using different programming languages and frameworks.

As the platform evolved, Expedia replaced FastAPI [background tasks](https://fastapi.tiangolo.com/tutorial/background-tasks/) with a [Celery-](https://docs.celeryq.dev/en/latest/getting-started/introduction.html)based [asynchronous architecture](https://fastapi.tiangolo.com/async/) using Redis as both the message broker and result backend. The engineering team states that most processing consists of I/O bound operations involving telemetry retrieval and LLM requests. The asynchronous execution model allows STAR to process multiple analysis tasks concurrently while accommodating rate limits imposed by Datadog and the company's internal AI gateway.

The company reports that STAR has been used to support production incident investigations, post-incident analysis, Kubernetes troubleshooting, and JVM memory diagnostics. Engineers review the [generated findings](https://gist.github.com/nikos912000/1e489021b406f682d70c14f3ebbad917) before acting on recommendations, making the platform an assistive tool rather than an autonomous operational system.

The blog also describes ongoing work to expand the platform. Planned enhancements include incorporating service dependency information, additional operational metadata, Model Context Protocol (MCP) based tool integrations, and conversational interfaces. Expedia is also evaluating STAR as part of its chaos engineering practices to help analyze the results of controlled failure experiments. Prompt management, tracing, and evaluation are currently supported through [Langfuse](https://langfuse.com/docs), while system performance is assessed using subject matter expert reviews and user feedback.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/expedia-ai-observability-star/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。