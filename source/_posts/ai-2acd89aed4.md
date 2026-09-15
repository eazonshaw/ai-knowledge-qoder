---
title: "Grab's Agent Framework LLM-Kit Accelerates AI Agent Production Deployment"
date: 2026-09-16 07:50:33
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Grab(https://www.grab.com/sg/) has standardized more than 500 internal agent services on LLM-Kit, an"
source_url: "https://www.infoq.com/news/2026/09/grab-agent-platform/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-15T09:00:00.000Z　|　采集：2026-09-16 07:50:33

## 正文

[Grab](https://www.grab.com/sg/) has standardized more than 500 internal agent services on LLM-Kit, an internal framework of scaffolding and integrations that hands a new service a basic agent loop plus evaluation, tracing, secret handling, and tool-server connections already wired in. Agents discover their tools at runtime from over 50 MCP servers and reach models through a single gateway, so new capabilities and new providers arrive as registration or configuration rather than redeployment.

Wiring a new AI agent service into production at Grab now takes about an hour, down from two weeks or more. The saving is not in the agent's reasoning loop but in everything around it: secrets, tracing, service discovery and evaluation. Grab set out the change in an [engineering post](https://engineering.grab.com/how-grab-builds-and-runs-ai-agents-at-scale) on LLM-Kit, the internal framework now backing more than 500 services at the Southeast Asian ride-hailing and delivery company, among them agents used every day by millions of merchants, drivers and consumers. As the post puts it: "The reasoning loop took a whole afternoon. The production wrapper took two weeks."

What LLM-Kit takes away is the per-service decision. It is intentionally not a new agent abstraction or a domain-specific language, but scaffolding around infrastructure Grab already had, assembled once the company "stopped solving these problems service by service and started solving them once, centrally." An engineer fills in a form and gets back a GitLab repository holding a working [FastAPI](https://fastapi.tiangolo.com/) service, with [LangGraph](https://www.langchain.com/langgraph) agent modules, [OpenTelemetry](https://opentelemetry.io/) tracing, [Vault](https://developer.hashicorp.com/vault) secrets, and service discovery already wired, plus an evaluation endpoint from the first commit, scoring answers with ROUGE, BLEU, and a second model as grader.

![](https://www.infoq.com/news/2026/09/grab-agent-platform/news/2026/09/grab-agent-platform/en/resources/1grab-agent-project-2-1789358480070.png)

Figure 1: FastAPI Service Project Directory Structure (source: [Grab team’s blog](https://engineering.grab.com/how-grab-builds-and-runs-ai-agents-at-scale))

Tools are not pre-wired: agents fetch them at runtime from over 50 registered servers speaking the [Model Context Protocol](https://modelcontextprotocol.io/), so a capability registered once reaches every agent. Neither are model providers. Every model call goes through the OpenAI-compatible [GrabGPT Gateway](https://engineering.grab.com/grab-ai-gateway), which fronts five providers and injects credentials so that application code never hard-codes a provider.

Choosing a framework over a platform was deliberate, and the post explains why:

> A platform would have locked teams into rigid assumptions that would soon become outdated. A framework let us meet developers where they already were.

Analyst Kai Waehner [argued in April](https://www.kai-waehner.de/blog/2026/04/06/enterprise-agentic-ai-landscape-2026-trust-flexibility-and-vendor-lock-in/) that "agentic AI lock-in is more durable than API lock-in because it accumulates at multiple layers simultaneously," naming the model, the framework, the runtime and the patterns teams build around them. He was not writing about Grab, but the frame applies: the gateway covers the model layer, while the framework, runtime and patterns are harder to put behind one interface and are shared by every service on LLM-Kit.

Separately, [Palana](https://engineering.grab.com/palana-part-1-secure-platform-for-ai-agents), described in June by Grab's CyberSecurity team, lets teams "experiment with autonomous agents without giving up control over identity, secrets, network access, and operational visibility." The analytics group has [built a multi-agent engineering support system](https://www.infoq.com/news/2026/05/grab-multi-agent-support-system/) of its own.

LLM-Kit solved building and shipping one agent; at 500, Grab found the problems had moved from the framework to the platform. The gateway governs which model everyone calls, the remote MCP framework lets teams reuse each other's tools, and an evals platform tells whether a prompt change made an agent better or merely different. Much of that platform layer can now be bought rather than built: [Amazon Bedrock AgentCore](https://aws.amazon.com/bedrock/agentcore/) and Google's [Agent Runtime](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/overview) host agents written in an existing framework and supply identity, gateway and observability. For teams weighing the same decision, the useful finding is where the cost actually sits: if the distinctive work takes an afternoon and the shared plumbing takes a fortnight, the choice is not about which agent library to pick, but about who owns secrets, tracing and evaluation.

## About the Author

#### **Hien Luu**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/grab-agent-platform/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。