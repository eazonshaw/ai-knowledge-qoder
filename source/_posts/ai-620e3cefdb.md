---
title: "DigitalOcean Managed Agents Brings Managed Cloud Infrastructure to AI Agents"
date: 2026-10-03 08:49:39
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "DigitalOcean recently launched DigitalOcean Managed Agents in public preview(https://www.digitalocea"
source_url: "https://www.infoq.com/news/2026/10/digitalocean-managed-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-02T09:00:00.000Z　|　采集：2026-10-03 08:49:39

## 正文

[DigitalOcean recently launched DigitalOcean Managed Agents in public preview](https://www.digitalocean.com/blog/managed-agents-public-preview), offering a managed cloud infrastructure layer for AI agents with isolated microVM runtimes, governed tool access, and serverless AI inference.

According to DigitalOcean, agentic workflows differ substantially from traditional cloud-based applications, requiring developers who run agents on conventional VMs to build and manage the supporting runtime environment themselves:

> Developers are forced to invest in plumbing work to preserve the agent's context, persist artifacts and keep them accessible beyond the agent that created them, coordinate parallel work, and security-hardened access to tools.

Further challenges include maintaining spare VM capacity to ensure agents can start quickly, as well as provisioning and configuring compute resources on demand. DigitalOcean Managed Agents aim to address these challenges by combining two integrated services: a Harness Runtime and an Action Gateway.

> Together, they let developers scale the work their agents can do while DigitalOcean manages the execution, persistence, tool access, and infrastructure underneath. Let’s dive a bit deeper into each of these new services, their capabilities and how they enable you to scale agentic work in the cloud.

Built on a lightweight microVM, the Harness Runtime provides persistent, isolated compute environments for agents across a range of supported harnesses, including coding agents like Claude Code, Codex CLI, and OpenCode; general-purpose agents such as Hermes; and custom agents built with LangGraph.

The harness runtime can persist conversational history and working state across sessions, which can be pauses, resumed, or forked. Sessions can also automatically pause agents when they are idle, i.e., when there are no ongoing LLM or tool calls.

Each session runs on security-hardened compute and storage resources, while allowing developers to connect to internal services without exposing them publicly. Sessions can be launched in parallel across repositories and tasks, supporting workflows like divide and conquer, collaboration and map/reduce.

The Action Gateway is the agent's interface to external tools and services though a unified MCP endpoint, with more than 16,000 tools currently available. These include Web Search, Web Fetch, Browser Automation, as well as the DigitalOcean infrastructure management APIs, as well as connectors for popular platforms like GitHub, HubSpot, Stripe, and others.

The gateway implements several security measures, including centralized permission management to define which tools and actions are available to each agent and requiring human approval for sensitive operations. To efficiently support multiple agents accessing external systems, the gateway provides rate limiting, retries, backoff, and timeouts.

Commenting on the announcement on X.com, former Meta AI engineer now building Dair.ai [Elvis Saravia, wrote](https://x.com/omarsar0/status/2102430538367901855?s=20):

> Very exciting. I like the focus on performance and cost reduction, since many other agent management platforms are cost-prohibitive and make it hard to scale agents in production.

Finally, Seaotter platform architect and founder [Ryan Martin noted](https://x.com/RyanRayMartin/status/2102434612203188580?s=20) that "Pause-when-idle + governed tools is the ops pattern that scales".

DigitalOcean Managed Agents arrive around the same time as [Docker's Cloud Sandboxes](https://www.infoq.com/news/2026/09/docker-cloud-sandboxes), with significant overlap at the sandbox and runtime level. Both solutions offer indeed MicroVM-isolation and persistency, however they have different centers of gravity. Docker Cloud Sandboxes are more focused on developer workflows, particularly the ability to move a sandbox between local and cloud compute, while DigitalOcean Managed Agents are more focused on production infrastructure, and provide more orchestration and tool support.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/digitalocean-managed-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。