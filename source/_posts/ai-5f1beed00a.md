---
title: "Yelp Unifies ML Model Training with Training Orchestrator"
date: 2026-07-22 06:45:57
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Yelp has launched(https://engineeringblog.yelp.com/2026/07/training-orchestrator-unifying-model-trai"
source_url: "https://www.infoq.com/news/2026/07/yelp-ai-model-training/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-21T10:00:00.000Z　|　采集：2026-07-22 06:45:57

## 正文

Yelp has [launched](https://engineeringblog.yelp.com/2026/07/training-orchestrator-unifying-model-training-at-yelp.html) Training Orchestrator. This new internal framework replaces individual team Spark training scripts. Now, it uses a configuration-driven, DAG-based execution model. The move tackles a common problem in large ML platforms. Each applied ML team created its own orchestration. This led to duplicated code, inconsistent configurations, and fragile custom monitoring.

Training at Yelp previously ran as monolithic scripts tightly coupled to Spark cluster and job-launcher execution. That coupling caused no local runs, poor testability, and slow iteration. A small code change needed submitting a Spark job. Then, you had to wait for containers and clusters to start up before finding out if there was a failure. Validation logic was spread out in scripts. This made it difficult to reproduce past runs in different environments. There were issues with inconsistent settings and missing provenance.

Training Orchestrator separates what to run from how it runs. Pipelines use [Pydantic](https://pydantic.dev/docs/validation/latest/get-started/)\-based configuration objects. These include an orchestrator config, an [MLflow](https://mlflow.org/) run config, and various step configs. All are validated when created, so no compute is wasted. The orchestrator uses declared step dependencies to create a [Directed Acyclic Graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph). It then runs the steps in topological order. A shared Spark/MLflow context is added, allowing the same step definitions to run unchanged, whether locally, in [Jupyter](https://jupyter.org/), or in production. Each step links a settings class to a user-defined function. It uses an input/output schema to show what it takes and gives back. For example, a PrepareDataStep takes in a dataset and outputs a prepared dataset. This setup lets teams easily change preprocessing logic. They can run different model versions simultaneously. Moreover, they can reuse functions across pipelines without changing orchestration code.

![](https://www.infoq.com/news/2026/07/yelp-ai-model-training/news/2026/07/yelp-ai-model-training/en/resources/1figure2-architecture-1784553494588.jpg) *Training Orchestrator Architecture*

Schema validation quickly catches configuration mismatches. It flags issues like incorrect step input/output pairings and out-of-range parameters in seconds. This is much faster than finding them hours into a running Spark job. Developers can run full pipelines locally with sample data since steps are separate from infrastructure. They can also write unit tests for each step. Plus, caching input for data-loading steps reduces integration test time on smaller data sets. Every run's complete configuration is logged automatically as an MLflow artifact, making reruns replayable from that single record. Slack notifications and MLflow run tracking, previously hand-rolled per team, now require only a few configuration parameters.

The Training Orchestrator works with Yelp's ML platform. It connects feature stores, a shared neural network, a gradient-boosted-tree library, and MLflow for tracking and deployment. The Core Machine Learning Team sees it as the vital orchestration layer they needed. It is an internal framework, not an open-source release. Yelp plans to add clear steps for model evaluation, comparison, and explanation. It will also implement lineage tracking at the orchestration layer. This way, it will spread to current pipelines without needing migration.

The main pattern involves Pydantic-validated, declarative step configs that drive a DAG execution engine. This pattern separates training logic from cluster runtime. It also enables local runs and unit testing. This approach can be used beyond Yelp's Spark-specific stack. The tradeoff involves an initial investment in schema and step-type design. It also requires migrating existing scripts into the settings-and-function contract. Yelp views this as a way to centralise the cost, so teams don’t have to pay it repeatedly.

Yelp's effort reflects a wider trend in the industry. Many companies with several ML teams are moving towards a centralised, clear training infrastructure. Netflix has also moved forward with [Metaflow](https://www.infoq.com/news/2025/01/netflix-metaflow-configuration/). They recently added a configuration object. This lets teams manage flow behaviour clearly across the many ML pipelines they maintain. Uber's [Michelangelo](https://www.infoq.com/presentations/uber-ml-michelangelo/) platform was created to tackle the fragmentation issue that Yelp mentions. It helps teams using different tools by providing a clear path from prototyping to production.

These efforts show a shared conclusion from various engineering groups: as more models and training teams emerge, ad hoc orchestration becomes a bottleneck. Centralising this process, despite upfront costs, improves reproducibility, testability, and developer speed.

## About the Author

#### **Claudio Masolo**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/yelp-ai-model-training/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。