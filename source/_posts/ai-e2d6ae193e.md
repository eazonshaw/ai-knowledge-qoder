---
title: "Google Announces Agent Compute Engine for Secure AI Agent Execution"
date: 2026-11-23 10:04:40
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google recently announced Agent Compute Engine(https://cloud.google.com/blog/topics/ai-infrastructur"
source_url: "https://www.infoq.com/news/2026/11/google-agent-compute-engine/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-22T06:30:00.000Z　|　采集：2026-11-23 10:04:40

## 正文

[Google recently announced Agent Compute Engine](https://cloud.google.com/blog/topics/ai-infrastructure/introducing-agent-compute-engine-and-expanded-agent-governance/), a managed service that runs AI agents in isolated microVMs, with checkpointing capabilities to suspend and resume execution environments. The design keeps credentials, API keys, and OAuth refresh tokens outside the agent sandbox, using an external Agent Gateway to authenticate requests and inject the required secrets.

Google designed Agent Compute Engine to address three requirements at global scale: keeping sandboxes free of exploitable credentials, even when agents make mistakes; minimizing the cost and latency of resuming idle agents; and preserving persistent workspaces across sessions and operating system updates. The infrastructure team writes:

> Agent Compute Engine achieves this by using copy-on-write memory sharing to run multiple agents on a single operating system template, and pausing idle microVMs via fast checkpoint and restore.

In the deep dive "[Inside Agent Compute Engine](https://cloud.google.com/blog/topics/ai-infrastructure/agent-compute-engine-deep-dive)," [Ramanathan Venkatapathy](https://www.linkedin.com/in/ramanathan-venkatapathy-67170875/) and [Rohit Jnagal](https://www.linkedin.com/in/rohit-jnagal-7936b8/), distinguished engineers at Google, describe the service’s architecture, covering microVM isolation, credential management, agent identity, storage, and scheduling at scale. They explain the strict separation between the agent harness and sandbox:

> The orchestration harness (the brain) runs completely outside the execution sandbox (the hands), helping ensure that untrusted guest environments only execute explicit commands dispatched by the harness and stream output back. This boundary establishes a deterministic audit trail correlating every harness-initiated tool call with expected compute activity inside the sandbox.

![Google Agent Compute Engine](https://www.infoq.com/news/2026/11/google-agent-compute-engine/news/2026/11/google-agent-compute-engine/en/resources/1image2_sXzRF5b.max-1500x1500-1793561739190.png)

*Source: Google blog*

The architecture supports four main workload categories: interactive consumer and enterprise agents that execute code, browse the web, and perform actions; persistent Linux workspaces for autonomous software engineering; large-scale parallel environments for model evaluation and reinforcement learning; and lightweight, sandboxed execution environments for dynamic logic in Google services.

Venkatapathy and Jnagal also describe how the cloud provider uses the platform internally for Gemini, Gemini for Business, the agentic development platform [Antigravity](https://antigravity.google/), and model evaluation workloads.

Separately, Google offers [Agent Substrate](https://github.com/agent-substrate/substrate), an open-source, Kubernetes-native runtime for running AI agents in isolated environments. Agent Substrate manages sandbox lifecycles independently of the underlying compute infrastructure, allowing idle agents to be suspended while preserving their state and resuming execution on available workers when needed.

In the article "[Google's Agent Compute Engine: A MicroVM Sandbox With No Credentials Inside, and What Google Has Not Shipped Yet](https://www.harelasaf.com/articles/google-agent-compute-engine-microvm-sandbox-no-credentials-agent-substrate)," [Harel Asaf](https://www.linkedin.com/in/harel-asaf/), AI specialist at Elementor, examines the security architecture, the separation of credentials from agent execution environments, and the gaps between Google's announcement and what is currently available. Asaf warns:

> The deep dive gives no boot time, price or density figure for Agent Compute Engine itself. It says developers will control each environment's image, identity, network access and lifecycle, while Google manages the fleet, and that the service is targeted for preview in the coming months. The numbers in the announcement belong to Agent Substrate.

Google is not the only provider offering managed, isolated execution environments for AI agents, with AWS and Azure providing similar capabilities through [Bedrock AgentCore](https://aws.amazon.com/bedrock/agentcore/) and [Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/overview). However, Google’s approach keeps credentials outside agent sandboxes and injects them through an external gateway.

Google also expanded its agent governance capabilities with centralized identity and policy enforcement: the governance stack includes [Agent Gateway](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/gateways/agent-gateway-overview) for traffic control and policy enforcement, [Agent Registry](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/agent-registry) for tracking approved agents and tools, [SPIFFE-based Agent Identity](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/agent-identity-overview) for authentication and auditing, and [OpenTelemetry-compatible observability](https://docs.cloud.google.com/stackdriver/docs/observability/agent-observability) for monitoring model calls and tool invocations.

Agent Compute Engine is not yet available, and pricing has not been announced. The cloud provider is targeting a preview in the coming months. While Agent Substrate is portable across Kubernetes environments, Agent Compute Engine itself is limited to Google Cloud.

## About the Author

#### **Renato Losio**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/google-agent-compute-engine/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。