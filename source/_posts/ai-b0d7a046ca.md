---
title: "AWS Open-Sources Dogwood, Extending Cedar to Govern Sequences of Agent Tool Calls"
date: 2026-08-17 06:11:44
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "AWS recently open-sourced Dogwood(https://aws.amazon.com/blogs/opensource/introducing-dogwood-runtim"
source_url: "https://www.infoq.com/news/2026/08/aws-dogwood-agent-policy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-28　|　采集：2026-08-17 06:11:44

## 正文

AWS recently [open-sourced Dogwood](https://aws.amazon.com/blogs/opensource/introducing-dogwood-runtime-verification-for-ai-agents/), a policy language for agent tool calls. What makes it different from [Cedar](https://www.cedarpolicy.com/) is that its rules can look backward at what the agent already did. It ships under Apache 2.0, and AgentCore Policy supports it today.

AgentCore Policy launched at re:Invent last year. It sits outside the model as a deterministic control layer. The model proposes a tool call, the policy engine accepts or rejects it, and the model never touches enforcement. Cedar is the language those decisions are written in. AWS contributed it to the CNCF as a sandbox project in late 2025.

Cedar looks at one request at a time. Feed it the same request twice, and you get the same answer, regardless of what happened before or the order the policies ran in. Audit and automated reasoning both lean on that. The cost is that Cedar can fence off a single action and nothing more. A sequence of actions is outside what it can describe.

Agents compose actions into workflows, and the constraints teams want tend to live in the sequence: get approval before acting, stay under a running total, stop contacting external parties after touching confidential data.

Dogwood adds a second clause type. Where a Cedar condition sits in when, a temporal condition sits in when temporal and can read the agent's event history. Events correspond to tool call requests and their outcomes, carrying input arguments and requesting principal. The action schema comes from the agent's MCP tool manifest, one action per tool, which Dogwood generates directly. Under the hood, a temporal condition is translated into a Cedar context field that the interpreter fills from event history before Cedar makes the decision.

Four operators cover the common shapes, all defined as standard-library macros over a core [Metric First-Order Temporal Logic](https://dl.acm.org/doi/10.1145/2699444) subset rather than as language primitives: formerly for whether something happened in a window, count\_within for how many times, count\_distinct\_within for how many different values, and sum\_within for a running total. A bind operator names an aggregate so the current request can be compared against it.

The most instructive part of the announcement is a correctness trap platform teams will recognize. A rate limit written against response events rather than request events can be defeated by concurrency. AWS walks the trace: three concurrent $2,000 transfers arrive before any settles, so a policy summing responses sees nothing in flight and allows all three past a $5,000 cap, while the same policy summing requests denies the third. One word separates the two policies.

That asynchrony is not incidental. Agents issue parallel tool calls, and in multi-agent settings the interleaving compounds. A policy that reads correctly in sequence can fail under concurrency, which is a familiar distributed systems problem arriving somewhere new.

AWS is direct about the costs. Temporal evaluation requires stateful tracking of events, and evaluation time can depend on the length of the event log. More significantly, temporal conditions do not support the automated reasoning analysis tools Cedar provides, so a policy set using them loses the ability to be formally analyzed. The team states this is why they built a separate language rather than extending Cedar.

Existing Cedar policies keep working. Any valid Cedar policy is also a valid Dogwood policy, so nothing needs rewriting. Deny-by-default stays, and forbid still overrides permit.

The Apache 2.0 license is not an invitation to deploy. AWS says the [reference interpreter](https://github.com/dogwood-policy/dogwood) is for exploring and testing the language, not for running authorization in production. The repository is blunt about the rest. Timestamps have to be trusted and events authenticated. Field and action names have to stay consistent. Traces need durable storage, decisions need logging, and one tenant's history must never reach another. A retention policy matters too, since tool-call histories hold sensitive data. It amounts to building an event log you can trust. Without that, the policies mean nothing.

The release lands in the same week the [MCP 2026-07-28 specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) made agent traffic legible to HTTP infrastructure through required method and tool-name headers. The two solve adjacent halves of one problem. Headers let a gateway see which tool an agent is calling; Dogwood expresses what a sequence of those calls is allowed to add up to.

Roadmap items include absolute-time windows for rules anchored to wall-clock boundaries, liveness properties asserting what must eventually happen rather than what must not, and orchestration policies for multi-agent systems covering handoffs and locks.

Marc Brooker, a VP and distinguished engineer at AWS who led the Aurora DSQL launch, co-authored the release with Joseph Tassarotti of the Automated Reasoning Group and Jean-Baptiste Tristan of AWS Agentic AI. AWS is not accepting contributions yet, describing a plan to gather feedback first and open contributions as the language stabilizes.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/aws-dogwood-agent-policy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。