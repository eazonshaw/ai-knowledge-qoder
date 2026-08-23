---
title: "AWS Releases Aws-Bench to Evaluate Agents on Cloud Tasks"
date: 2026-08-24 06:12:07
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "AWS has recently released aws-bench(https://aws.amazon.com/about-aws/whats-new/2026/07/aws-bench/), "
source_url: "https://www.infoq.com/news/2026/08/aws-bench-agent-evaluation/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-22T08:00:00.000Z　|　采集：2026-08-24 06:12:07

## 正文

[AWS has recently released aws-bench](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-bench/), an open-source benchmark to evaluate how accurately AI agents complete real AWS tasks, such as diagnosing misconfigurations, infrastructure provisioning, and operating live cloud environments.

The project claims to take a different approach compared to more traditional static fixtures benchmarks. The company states that using actual resources created in disposable, real AWS accounts can provide a more accurate score of the agent’s performance on the work developers and teams usually perform on AWS.

Each benchmark deploys a scenario in isolated AWS accounts, which comprises of a set of AWS resources defined in CDK stacks. When the scenario is available, the agent under evaluation runs a task in a sandboxed container using scoped credentials. Once completed, the result is scored using an automated verifier, either an LLM judge or a programmatic check against live AWS state.

The benchmark comes with predefined datasets, comprising both basic and advanced tasks. These tasks cover use cases in observability, compute and data, databases and storage, EC2 multi-region, serverless, streaming and IoT, reference architectures, and multi-service troubleshooting.

Even though the release targets AI researchers and model providers, engineering teams can experiment with the benchmark, extending the available scenarios and tasks to cover their own use cases.

The project is built on [Harbor](https://www.harborframework.com/), an open-source framework for evaluating AI agents, extending it to provide additional capabilities like AWS resource provisioning, scenarios and verifiers. Built-in adapters cover several generally available agents and models, including Claude Code, Codex, Kiro CLI, and Mini-SWE-Agent. It also supports any agent that Harbor already includes, such as Gemini CLI and OpenCode.

Running the benchmark demands more than a local install. It requires credentials with access to the organisation's management account and the permission to manage member accounts and organisational units. The setup is currently pinned to the us-east-1 region and creates persistent resources that might incur costs even if not used.

Notably absent from the launch are metrics. AWS has not published any baseline results, or a standardised leaderboard yet, placing both on the future roadmap. 

The [benchmark](https://github.com/aws-bench/aws-bench) and the [datasets](https://github.com/aws-bench/aws-bench-datasets) are available on GitHub under Apache-2.0 license.

The release of aws-bench comes at a time of growing skepticism about how trustworthy agent evaluation benchmarks are. [A group of researchers from the Center for Responsible, Decentralized Intelligence at UC Berkeley has published an article](https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/) on how they created an agent scoring near-perfect scores on some of the most prominent benchmarks, including [Terminal-Bench](https://www.tbench.ai/) and [SWE-Bench](https://www.swebench.com/), without solving a single task.

In the report, the researchers state:

> These are not isolated incidents. They are symptoms of a systemic problem: the benchmarks we rely on to measure AI capability are themselves vulnerable to the very capabilities they claim to measure.

As adoption grows, the benchmark’s resistance to exploitation will be under scrutiny: most of the tasks in aws-bench are evaluated using an LLM judge, and AWS itself documents how leftover state can produce unwanted passes or random failures.

## About the Author

#### **Gianmarco Nalin**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/aws-bench-agent-evaluation/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。