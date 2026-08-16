---
title: "Cloudflare Adds Agent Tracing, with Truncation Limits and Uneven Payload Defaults"
date: 2026-08-17 06:11:44
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare has launched agent tracing(https://blog.cloudflare.com/agents-on-cloudflare/), the first "
source_url: "https://www.infoq.com/news/2026/08/cloudflare-agent-tracing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-15T10:46:00.000Z　|　采集：2026-08-17 06:11:44

## 正文

Cloudflare has launched [agent tracing](https://blog.cloudflare.com/agents-on-cloudflare/), the first component of Cloudflare Agents, a dashboard surface that gathers deployed agent sessions in one place. The release adds agent-level spans to the Workers tracing already in place, and it arrives with a pricing date attached: tracing is free during beta, and from October 1, 2026 it falls under Workers Observability pricing.

The problem statement is the useful part. An agent can return HTTP 200 and still fail. It may pick the wrong tool, hand stale context to a subagent, or burn tokens in a retry loop, and application telemetry will show the API request or the database query without showing the agent behavior that caused it.

[Workers tracing](https://developers.cloudflare.com/workers/observability/traces/) already instrumented the infrastructure layer, covering fetch calls, KV reads, and D1 queries. Until now, traces for agents running on Workers carried those infrastructure spans with nothing around them. Agent tracing adds spans for agent invocations, model calls, tool execution, and approvals, with model and token usage attached as metadata. Each turn produces one trace:

invoke\_agent {agent class}

├── chat {model}

└── execute\_tool {tool}

    └── tool\_approval {tool}

Subagent work nests under the operation that invoked it, so a parent agent delegating to a subagent that calls a model, runs a tool, queries D1, and writes to KV appears as a single waterfall across both layers. Three fields tie spans to the dashboard: an agent name for the logical implementation, an agent ID for the instance, and a conversation ID. Cloudflare warns against deriving the agent name from a request or user identifier, which would multiply distinct agents in the view.

That adjacency is what developers responded to. Replying to Cloudflare's [announcement on X](https://x.com/CloudflareDev/status/2084701142576238715), Mykyta Pavlenko wrote:

"I'd try this on hermes just for the trace waterfall - seeing the model call directly above a bad tool argument is the debugging view I want"

One caveat sits inside the approval span. The [documentation](https://developers.cloudflare.com/agents/runtime/operations/observability/tracing/) notes these represent lifecycle events within a Worker invocation and do not measure the time a person waits before responding across invocations. Human-in-the-loop latency, arguably the most interesting number in an approval workflow, is not what the span records.

Alongside the trace view, session replay reassembles the recorded conversation across turns: messages, reasoning, tool calls with arguments and results, and subagent activity. Cloudflare is explicit that this replays recorded data rather than re-executing the agent.

Payload recording is where teams need to pay attention, because the defaults are not consistent. Think does not store message or tool payloads unless storeMessages and storeTools are set on the agent class, and wrapAISDK() behaves the same way. Flue stores messages, system instructions, tool definitions, arguments, and results by default, requiring content: false to stop. The same platform feature therefore ships with opposite privacy defaults depending on which harness a team already chose, and message payloads routinely carry personal data or secrets.

The documented limitations deserve equal attention. Cloudflare states that traces are not a complete or lossless record of a conversation, that payload data is subject to span size limits so long messages, reasoning, tool arguments, and results may be truncated, and that session replay does not display images. Teams treating replay as an audit trail rather than a debugging aid will find it does not carry that weight.

Setup varies by stack. Think and Flue v2 or later instrument turns automatically. Direct AI SDK calls need a wrapAISDK() wrapper, which supports v6 and v7 and requires identity fields on each call since there is no Agent instance to infer them from. Custom harnesses use the Workers custom spans API, following OpenTelemetry's GenAI reference implementations, because Workers does not yet support the OpenTelemetry API directly. Cloudflare says it is working to add that, which would let frameworks emitting standard spans integrate without manual instrumentation. Span attributes follow the [OpenTelemetry Generative AI semantic conventions](https://github.com/open-telemetry/semantic-conventions-genai), and traces export to any OTLP endpoint.

The pricing detail rewards a close read, because the metered unit is not what the Agents view displays. Every span counts as one observability event, including spans from SDK internals and other Worker-level operations the view does not surface. From October 1, Workers Free covers 200,000 events per day with three-day retention, and Workers Paid includes 20 million per month with seven-day retention at $0.60 per additional million. A verbose harness costs more than the dashboard suggests, and three to seven days is short for anyone chasing a pattern rather than an incident.

The release fits a pattern visible across vendors this quarter. Microsoft's [Agent Framework harness](https://www.infoq.com/news/2026/08/agent-framework-harness-ga/) shipped with OpenTelemetry enabled by default, and the AI Gateway tier of Azure API Management exports token metrics to Application Insights, Datadog, and Grafana. Each reaches the same conclusion from a different direction: the agent runtime needs its own telemetry layer, and infrastructure spans alone cannot explain what an agent did.

Cloudflare frames tracing as a step toward agents that improve themselves, feeding structured trace data into evaluations and an agent development lifecycle. That remains a stated direction. What exists today is visibility into which model a turn called, how many tokens it used, which tool it selected, and where the time went.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/cloudflare-agent-tracing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。