---
title: "Session Traces and Cost Controls Help Diagnose AI Agent Failures"
date: 2026-09-12 07:42:06
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "An agent can repeatedly call the wrong tool without triggering an availability alert. In a CNCF memb"
source_url: "https://www.infoq.com/news/2026/09/observability-ai-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-11T08:14:00.000Z　|　采集：2026-09-12 07:42:06

## 正文

An agent can repeatedly call the wrong tool without triggering an availability alert.

In a [CNCF member post](https://www.cncf.io/blog/2026/08/04/you-cant-debug-what-you-cant-see-observability-for-ai-agents/) published on 4 August, [StackGen](https://stackgen.com/) principal engineer [Sabith K Soopy](https://www.linkedin.com/in/sabithks/) described how session traces and cost controls help teams investigate repeated tool calls and unexpected spending.

Drawing on months of operating agents in production, the post notes: "The hardest part isn’t building them; it’s understanding what they’re doing when they go wrong." Standard application monitoring indicates whether a service responds, but fails to explain why an autonomous workflow loops, calls invalid endpoints or claims to complete work it skipped.

StackGen uses [Langfuse](https://langfuse.com/) to capture nested session traces. Each large language model (LLM) call, tool execution and sub-agent delegation is recorded as an individual span with execution latency and token costs attached. Nesting child spans beneath parent traces preserves the full delegation chain across complex multi-agent workflows. The post recommends an asynchronous batch exporter that queues spans in memory and flushes them periodically, ensuring a temporary telemetry backend outage drops trace data rather than blocking running agents.

Cost controls operate as the primary operational safeguard against runaway execution. The post recommends enforcing hard iteration caps and per-tool call limits before execution begins, paired with pre-execution checks that block identical consecutive tool requests.

While consecutive-call blocking addresses simple repetitions, teams combine it with statistical monitoring. Comparing session costs against each agent’s rolling average flags slower anomalies, including model-routing errors, tool hallucinations and unbounded context expansion across multi-turn interactions. The post argues that reactive alerts alone arrive too late for fast-running parallel agents.

For post-incident review, the post recommends writing tool calls, governance decisions and memory operations to an append-only, searchable log with credentials and personally identifiable information redacted before storage. StackGen complements this with a command-line diagnostic tool that validates model API access, vector database reachability, pending approvals, memory counts, trace backend connections and integration health in a single execution.

Completed traces pass through automated analysers that flag execution duration, tool failures, retry counts and token efficiency issues for human review. The post recommends exporting bounded operational metrics, such as tool error rates and approval latency histograms, to Prometheus. It warns that putting dynamic session IDs into metric labels creates high-cardinality time series that can crash metric servers, noting that granular session context belongs strictly in traces or structured logs. As the post puts it: "Traces are for debugging, metrics are for alerting."

Complementary tooling provides structured paths for evaluating trace data across production environments. [OpenTelemetry’s generative AI semantic conventions](https://github.com/open-telemetry/semantic-conventions-genai) define standardised attributes for model operations, token consumption and tool invocations, establishing a consistent schema across telemetry backends. A trace records execution history, while evaluation tools verify output quality. [LangSmith](https://docs.langchain.com/langsmith/observability) converts anomalous production traces into test datasets for regression benchmarking and quality monitoring. Open-source [Arize Phoenix](https://arize.com/docs/phoenix) pairs OpenTelemetry-native tracing with self-hosted LLM-as-a-judge evaluation and prompt experimentation. The OpenTelemetry project maintains these specifications in a dedicated repository covering client, server, and Model Context Protocol spans to support consistent multi-vendor observability.

## About the Author

#### **Mark Silvester**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/observability-ai-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。