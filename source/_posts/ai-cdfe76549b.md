---
title: "Amazon CloudWatch Omni Extends CloudWatch into the Agent Era"
date: 2026-09-30 08:54:49
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Recently launched, Amazon CloudWatch Omni is an AI-first observability platform(https://aws.amazon.c"
source_url: "https://www.infoq.com/news/2026/09/aws-cloudwatchomni-observability/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-29T19:00:00.000Z　|　采集：2026-09-30 08:54:49

## 正文

Recently launched, [Amazon CloudWatch Omni is an AI-first observability platform](https://aws.amazon.com/cloudwatch/omni/) designed to monitor, evaluate, and troubleshoot applications and autonomous AI agents in a unified environment.

For traditional applications, metrics such as latency, errors, CPU and availability are often sufficient to identify operational problems, says AWS senior specialist solutions architect Daniel Abib. [For AI agents, an execution can succeed technically while still producing the wrong result](https://aws.amazon.com/blogs/aws/introducing-amazon-cloudwatch-omni-ai-powered-observability-for-generative-ai-and-agentic-workloads/), using the wrong tool, retrieving poor information, or taking an unnecessarily expensive path:

> Agent behavior is non-deterministic: a prompt change can degrade response quality even when standard metrics show no errors. Teams spend hours manually reviewing logs across multiple systems, unable to pinpoint what changed or why.

To address this challenge, Omni captures end-to-end traces, evaluates correctness, coherence, retrieval, and tool selection, and lets you compare prompts, build test datasets from production traffic, run experiments, and detect regressions.

It supports several agent frameworks, including LangChain, LangGraph, CrewAI, OpenAI SDK, Strands, and Vercel AI SDK. It also uses open standards such as [OpenInference](https://arize.com/glossary/openinference/) and [AWS Distro for OpenTelemetry (ADOT)](https://docs.aws.amazon.com/xray/latest/devguide/xray-services-adot.html) and integrates with Amazon Bedrock AgentCore. For evaluations, CloudWatch Omni also supports third-party evaluators such as Braintrust, DeepEval, and Ragas.

Amazon CloudWatch Omni provide *unified observability*, bringing traditional microservices, cloud infrastructure, and generative AI/agentic workloads under the same umbrella for a unified view. It offers native OpenTelemetry support, allowing existing telemetry to feed into Omni without complex reconfigurations, as well as dual workspaces, which provide a standalone web experience for operators via single sign-on (SSO) outside the traditional AWS Management Console, alongside a free, local, developer-friendly IDE extension supporting both VS Code and Kiro.

CloudWatch Omni also support AI-powered investigations, allowing users to query logs, metrics, and traces using natural language to identify topology issues and pinpoint root causes.

AWS vice president [Chet Kapoor summarizes the new tool](https://www.linkedin.com/posts/chetkapoor_introducing-amazon-cloudwatch-omni-ai-first-activity-7508543442835271680-flgT) on LinkedIn saying that it "helps you catch issues proactively, trace them to their root cause, and identify improvements across your agents, applications and infrastructure in one place". Former AWS principal security consultant Jorg Huser, similarly notes that "A unified view that explains why an agent acted the way it did is the only way to keep confidence intact at scale".

As a final note, Deutsche Bank lead devops engineer Florin Lungu [emphasizes](https://www.linkedin.com/posts/lunguflorin_introducing-amazon-cloudwatch-omni-ai-powered-activity-7508291671915409408-pL1N) that CloudWatch Omni "supports open standards and built-in evaluators for quality assurance".

While CloudWatch Omni may be the natural fit for applications running on AWS, several other observability tools and platforms combine tracing, evaluation, prompt experimentation, and datasets, with a focus on agentic applications. These include [LangChain LangSmith](https://smith.langchain.com/), [LangFuse](https://langfuse.com/), [Arize AI Phoenix](https://arize.com/phoenix/), and others.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/aws-cloudwatchomni-observability/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。