---
title: "MCP Goes Stateless, and Developers Ask Whether That Just Makes It an API Again"
date: 2026-08-13 06:30:44
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "The MCP 2026-07-28 specification(https://blog.modelcontextprotocol.io/posts/2026-07-28/) drops proto"
source_url: "https://www.infoq.com/news/2026/08/mcp-stateless-gateway/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-28　|　采集：2026-08-13 06:30:44

## 正文

The [MCP 2026-07-28 specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) drops protocol sessions. Coverage so far has framed that as a scaling win, and it is one. But the same release adds two required HTTP headers, and those headers let a gateway route, throttle and meter agent traffic without ever opening the request body.

Earlier transports opened with an initialize and initialized exchange that established a session, tracked through an Mcp-Session-Id header. Every subsequent request had to locate the state tied to that session. Autoscaling infrastructure had to preserve sessions, deployments had to drain or migrate them, and load balancing was impractical, because a client was pinned to whichever instance held its session.

The new protocol removes the handshake, the session header, and protocol sessions from the core request path. Each request carries the protocol version, client identity, and capabilities it needs. Any request can land on any instance.

The part drawing less attention is what happens to the request itself. MCP messages are [JSON-RPC over HTTP](https://www.jsonrpc.org/historical/json-rpc-over-http.html), and information about a request previously lived only inside the JSON body. A gateway had to parse that body to learn whether a request listed tools, invoked one, or read a resource.

Two headers are now mandatory on Streamable HTTP requests: Mcp-Method and Mcp-Name. A tool call arrives as Mcp-Method: tools/call and Mcp-Name: search, with the JSON-RPC payload behind it. [Cloudflare's Matt Carey](https://blog.cloudflare.com/mcp-v2/) spells out what that buys you. A gateway, rate limiter or WAF can read those headers and act on them, per method or per tool, using the same primitives it already applies to every other API. Commenter evalstate noted the spec goes further still: tool arguments can be copied into headers for custom routing.

*MCP request routing through gateway controls using the new headers (Source: [Cloudflare](https://blog.cloudflare.com/mcp-v2/))*

Agent governance has been arriving from the other direction until now. Cloudflare's [agent tracing](https://blog.cloudflare.com/agents-on-cloudflare/) and the [AI Gateway tier of Azure API Management](https://www.infoq.com/news/2026/08/azure-apim-ai-gateway-tier/) both sit above the protocol as a separate control layer. This release puts the metadata in the transport, where infrastructure teams already run can read it.

Elicitation breaks. Server-initiated requests used to need an open stream. They now use Multi Round-Trip Requests: the server returns input\_required, the client collects the answer, and the call is retried. Approval becomes two requests instead of one held connection, which is simpler to deploy but means the wait for a human no longer sits inside a single invocation.

Authorization tightened alongside, with Dynamic Client Registration deprecated and slated for removal after summer 2027, RFC 9207 issuer identification adopted, and clients sending the canonical server URI as the RFC 8707 resource so tokens are accepted only by that audience.

Community reactions on [Hacker News](https://news.ycombinator.com/item?id=49131438) have been sharply divided, and the division is not about whether statelessness is an improvement. It is about what the improvement reveals.

For one camp, the release confirms the protocol should never have been stateful. As commenter drdexebtjl put it:

> In retrospect, stateful MCP was clearly wrong. This essentially makes MCP just another REST API endpoint, and lets you use the same infrastructure you already have set up for REST APIs (like load balancers, API gateways, progressive rollouts, etc).

Commenter pjmlp framed it as a lesson the industry keeps relearning, recalling the same conclusion from Sun RPC: stateless servers are always better, stateful only when unavoidable. Commenter luciana1u was blunter:

> we invented a stateful protocol, discovered state is hard to scale, stripped it out, and arrived at "just send a POST request." the REST crowd has been smugly waiting for this moment for 20 years.

Commenter bloppe made the structural version, describing MCP as a REST-like API, plus a spec of the kind OpenAPI already provides, plus harness-level authorization, and arguing only the third is genuinely new.

The defense did not dispute the resemblance so much as the conclusion. Commenter lexicality noted MCP is literally JSON-RPC, and that what was invented was a convention models were already trained to use. Commenter vidarh put the case most economically:

> The core advantage MCP gave you was a standard that by virtue of being blessed by AI providers people had strong incentives to actually implement.

Implementers reached a similar verdict from the other direction. David Cramer, co-founder and chief product officer at Sentry, who had previously written publicly that MCP was not yet good, told Cloudflare the release cleans up the handling of auth and tools:

> Agents only get useful once the plumbing stops being the whole story.

A parallel thread questioned whether agents need a protocol at all rather than shell access to ordinary CLI tools. Commenter firasd pushed back that the CLI position assumes a developer, on a laptop, with a shell open inside a coding harness, which describes a small fraction of usage against a majority reached through phone apps, web chat, and embedded widgets.

Adoption is not in dispute: Anthropic reports MCP passed 400 million monthly SDK downloads, a fourfold increase this year. Whether that adoption reaches individual servers is another question. A consultancy post on [r/AI\_Agents](https://www.reddit.com/r/AI_Agents/comments/1vg8k07/mcp_is_the_new_build_it_and_they_will_come/) described auditing a client's server that recorded 61 tool calls in three months, 58 of them from the client's own engineers, and argued teams treat being reachable by an agent as though it meant being wanted by one. The author, who disclosed that MCP work is a significant share of their consulting revenue, drew a conclusion that lands on this release:

> The money is flowing to the gateways and registries and auth layers rather than to the servers themselves.

For teams already running MCP in production, the migration is real work. Servers depending on protocol sessions, server-to-client requests, or standalone streams can run a stateless route beside the existing sessionful one, move features across, drain active sessions, and remove the legacy path during the deprecation window. The specification and updated TypeScript, Python, Go, and C# SDKs are available now.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/mcp-stateless-gateway/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。