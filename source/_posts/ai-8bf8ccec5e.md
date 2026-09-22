---
title: "Cloudflare Introduces the Agent Development Stack Lifecycle to Replace Traditional SDLC"
date: 2026-09-22 08:24:55
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare has introduced the Agent Development Lifecycle(https://blog.cloudflare.com/agent-developm"
source_url: "https://www.infoq.com/news/2026/09/cloudflare-adlc-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-21T14:14:00.000Z　|　采集：2026-09-22 08:24:55

## 正文

[Cloudflare has introduced the Agent Development Lifecycle](https://blog.cloudflare.com/agent-development-lifecycle/), a foundational shift aimed at replacing the traditional Software Development Lifecycle for artificial intelligence-driven engineering. The company argues that while artificial intelligence models accelerate code generation, downstream phases such as testing, deployment, and maintenance remain bottlenecked by human-in-the-loop continuous integration pipelines. To resolve this, Cloudflare proposes transitioning from software teams to automated software factories where agents manage entire lifecycles autonomously.

![](https://www.infoq.com/news/2026/09/cloudflare-adlc-agents/news/2026/09/cloudflare-adlc-agents/en/resources/28image1-1789999616539.png)

*Image Source: Cloudflare Blog*

The traditional [Software Development Lifecycle](https://en.wikipedia.org/wiki/SDLC) relies on human-paced reviews and linear pipelines. According to Cloudflare, these structures break down at agent scale. A platform purpose-built for the Agent Development Lifecycle must be programmatic, horizontally scalable, and event-driven. It requires preview deployments for every agent to test against production environments simultaneously, eliminating staging bottlenecks. Furthermore, systems must ensure atomic changes and implement self-improving feedback loops driven by production data rather than manual human overrides.

> A CI/CD pipeline is just a Workflow. But a Workflow can be so much more than a CI/CD pipeline.

To actualise this architecture, Cloudflare positions its Workflows product as the core orchestration layer. Unlike static pipelines, Workflows can dynamically spawn containers, execute headless browsers, and dispatch subagents. Building on this primitive, Cloudflare introduced @cloudflare/ci, a continuous integration and delivery system that runs directly on Workflows. This tool allows developers to chain execution steps with dependency caching and credential support, enabling agents to handle failures, remediate bugs, and triage issues autonomously.

```
import { WorkflowEntrypoint, type WorkflowEvent, type WorkflowStep } from 'cloudflare:workers';
import { init } from '@flue/runtime';
import { Reviewer } from './agents/reviewer.ts';
import { collectFindings } from './shared/nightly.ts';
type Params = { date: string };
export class NightlyReview extends WorkflowEntrypoint {
  async run(event: WorkflowEvent<Params>, step: WorkflowStep) {
    const findings = await step.do('collect findings', () => collectFindings(event.payload.date));
    const agent = init(Reviewer, { id: `nightly-${event.payload.date}` });
    const receipt = await step.do('dispatch review', () =>
      agent.dispatch(`Review these findings:\n${findings}`),
    );
    const review = await step.do('read review', async () => {
      const reply = await agent.read(receipt);
      return { text: reply.text, data: reply.data };
    });
    // ...
  }
}
```

Observability serves as another critical component of the platform. Traditional application telemetry captures infrastructure metrics but misses the reasoning behind agent actions. To address this, Cloudflare launched a dedicated observability dashboard featuring OpenTelemetry-compatible tracing. This provides visibility into exact model calls, tool executions, and token consumption. Integrating natively with frameworks like [Think](https://www.infoq.com/news/2026/04/cloudflare-project-think/), [Flue](https://www.infoq.com/news/2026/08/cloudflare-agent-tracing/), and the AI SDK, the platform enables engineers to replay sessions, inspect subagent handoffs, and debug malformed arguments without manually parsing execution logs.

Crucially, the Agent Development Lifecycle introduces the [Agent Access Model](https://blog.cloudflare.com/the-agent-access-model/) to secure autonomous operations. Recognising that agents operate at machine speed and cannot be managed via prompt-based boundaries, Cloudflare enforces policies at the network and harness layers. Agents receive short-lived, task-bound credentials with a capability ceiling. A Trust Ratchet mechanism dynamically reduces these capabilities once an agent touches protected resources, ensuring least-privilege execution and preventing lateral movement if an agent processes malicious input.

By standardising on open-source observability, robust orchestration primitives, and strict credential bounding, Cloudflare aims to build the infrastructure agents need to operate securely across the entire software factory ecosystem. While these tools represent early iterations, they signal a decisive industry movement toward dynamic, autonomous systems where artificial intelligence securely handles the application lifecycle end-to-end.

## About the Author

#### **Olimpiu Pop**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/cloudflare-adlc-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。