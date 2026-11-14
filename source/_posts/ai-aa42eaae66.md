---
title: "Netflix Turns Operational Data Into a Knowledge Graph for AI-Driven Observability"
date: 2026-11-14 09:54:45
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Netflix is developing an ontology-driven knowledge graph(https://netflixtechblog.com/ontology-driven"
source_url: "https://www.infoq.com/news/2026/11/netflix-ai-driven-observability/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-13T12:00:00.000Z　|　采集：2026-11-14 09:54:45

## 正文

Netflix is developing an [ontology-driven knowledge graph](https://netflixtechblog.com/ontology-driven-observability-building-an-end-to-end-knowledge-graph-at-netflix-scale-421392cf5adf) to accelerate production investigations and provide AI agents with a shared understanding of its operational environment. The platform connects information about applications, incidents, deployments, alerts, and infrastructure dependencies, addressing a problem that can leave engineers spending hours piecing together information scattered across different systems.

The company claims it handles more than 2 billion requests daily and upwards of 38 million real-time logging events every second. During the November 2024 Jake Paul-Mike Tyson fight, its infrastructure supported approximately 65 million concurrent streams. Yet investigating a typical application regression can take around four hours, with much of that time spent reconstructing relationships between systems rather than analysing the underlying data.

Netflix's solution is to make those relationships explicit through an operational ontology and knowledge graph, creating a foundation for automated root-cause analysis and, eventually, self-healing infrastructure.

Netflix already collects metrics, events, logs, and traces (MELT) across its applications and infrastructure. However, these signals are spread across systems such as alerting, incident management, deployment tooling, and engineering communication platforms.

![](https://www.infoq.com/news/2026/11/netflix-ai-driven-observability/news/2026/11/netflix-ai-driven-observability/en/resources/1Melt%20Layer-1793693698432.webp)

An application regression might originate from a client release, an experiment, infrastructure load shedding, or a service several dependencies downstream. Although each system contains useful information, engineers must often connect the evidence manually.

Netflix identified the missing capability as a consistent way to describe not just individual components, but how they relate to one another.

Its [Observability Ontology](https://www.infoq.com/presentations/netflix-observability-aiops-ontology-scale/) provides that common model, defining operational entities, their properties, and the relationships between them. It uses established standards including [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework), OWL, [SHACL](https://en.wikipedia.org/wiki/SHACL), and [SPARQ](https://en.wikipedia.org/wiki/SPARQL)L, while the resulting knowledge graph is stored in [QuipuDB](https://github.com/intigraph/quipu/blob/main/docs/book/src/reference/cli.md), Netflix's distributed RDF database built on Rust's redb storage engine.

The graph is populated through a pipeline of components Netflix calls enrichers. These consume information from operational systems and transform it into structured relationships, represented as subject-predicate-object triples.

Some enrichment is deterministic, while other stages use LLMs and probabilistic techniques to interpret less structured information. Netflix constrains these outputs through strict validation rules, including consistent entity types, URI naming conventions, and checks against its software catalogue.

Netflix also captures information from incident discussions, including hypotheses, rejected explanations, and mitigation decisions. This allows human reasoning to become part of the operational knowledge base rather than disappearing when an incident conversation ends.

Its correlation engine examines 13 types of signals, including log errors, metric anomalies, traces, alerts, incidents, deployments, configuration changes, experiments, and code changes. It searches for potential causal relationships, evaluating evidence such as temporal proximity and severity to produce ranked hypotheses.

![](https://www.infoq.com/news/2026/11/netflix-ai-driven-observability/news/2026/11/netflix-ai-driven-observability/en/resources/1knowledge%20flywheel-1793693698432.webp)

Netflix describes the process as a knowledge flywheel: Observe, Enrich, Infer, and Adapt. As investigations produce new insights, those relationships can inform future detection and analysis. The knowledge graph also underpins AutoRCA, Netflix's internal agentic AI system for root-cause analysis.

Rather than having specialist agents exchange loosely structured findings, they use the ontology as a common interface. Agents analysing traces, logs or deployments can contribute information about the same operational entities without needing to understand each other's internal implementations.

Netflix intends to use this foundation to produce ranked, evidence-backed explanations for incidents, with humans retaining approval authority over proposed changes and remediation.

Platforms such as [Datadog](https://www.datadoghq.com/), [Dynatrace](https://www.dynatrace.com/), and [Splunk](https://www.splunk.com/) already correlate observability signals and increasingly incorporate AI into incident investigation. Netflix's approach emphasizes the semantic model behind those signals, making operational relationships persistent and directly accessible to both engineers and machines.

The company ultimately wants to extend this capability from automated root-cause analysis into automated remediation and self-healing infrastructure. It also plans to explore integration with its Unified Data Architecture, connecting operational information to broader business and technology domains

## About the Author

#### **Craig Risi**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/netflix-ai-driven-observability/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。