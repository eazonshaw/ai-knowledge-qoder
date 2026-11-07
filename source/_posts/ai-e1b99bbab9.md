---
title: "Google Cloud API Gateway Introduces Streaming Support for Real-Time and AI-Powered Applications"
date: 2026-11-07 09:27:48
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google has announced the public preview of streaming support for API Gateway(https://developers.goog"
source_url: "https://www.infoq.com/news/2026/11/gcp-api-gateway-streaming/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-05T16:00:00.000Z　|　采集：2026-11-07 09:27:48

## 正文

[Google has announced the public preview of streaming support for API Gateway](https://developers.googleblog.com/streaming-comes-to-api-gateway-real-time-and-ai-ready-apis-without-changing-your-spec/), extending its traditional request-response model to support applications requiring real-time communication. According to Google, this is particularly relevant for AI applications that provide streaming model responses, multi-step agent workflows, and interactive sessions.

The new functionality enables streaming endpoints to operate behind API Gateway while retaining existing gateway policies and security controls, thereby addressing a previous limitation:

> Until now, developers building those experiences in API Gateway had to make an uncomfortable choice: put API Gateway in front of their APIs and give up streaming, or route streaming endpoints around the gateway and give up the authentication, API key enforcement, and observability that made the gateway essential in the first place.

API Gateway supports several streaming patterns, including Server-Sent Events (SSE), chunked transfer encoding and HTTP response streaming, WebSockets, and gRPC. Streaming connections can remain open for up to one hour, after which clients must establish a new connection if continued communication is required.

The new release introduces streaming support without requiring changes to existing API specifications or the use of specific APIs, extensions, or annotations. Google emphasizes that all existing API configurations and capabilities continue to work as before, including API key enforcement, JWT validation, service account authentication to backends, Cloud Logging and Cloud Monitoring integration, and path templating and request routing.

Another benefit of the new release is the introduction of predictable gateway hostnames. Previously, gateway hostnames included a generated hash and could only be determined after the gateway had been created. Now, they follow a deterministic format: `GATEWAY_ID-PROJECT_NUMBER.REGION.gateway.dev`, allowing developers to reference and configure them before creating the resource.

Google highlights the importance of streaming support for AI applications, where model responses are generated progressively rather than delivered as a single, complete response. Using the new functionality, developers will be able to stream model responses in real time, update agent progress during multi-step tasks, support tool-calling protocols and connections to remote MCP servers, and handle interactive AI applications.

API Gateway also supports [model routing](https://cloud.google.com/api-gateway/docs/model-routing-overview), providing a single OpenAI-compatible endpoint to route requests to Gemini, Claude, or OpenAI gpt-oss models based on the `model` field in the request payload.

> Model routing plus streaming means clients get a familiar, standards-based streaming interface, while you retain centralized control over which models are reachable, by whom, and under what policy.

Commenting on Google's announcement, [X user emildrops highlights two important limitations](https://x.com/emildrops/status/2113676229253460262?a=UP4h81P3TysYWfYI5Kk&s=20). First, "existing gateways can't be switched in place" and, second, "latency measures the whole stream, not time to first byte... so latency graphs will look broken for reasons that aren't bugs". Similarly, [LinkedIn user Ehsan Elahi Zaheer points out](https://lnkd.in/p/exgwecyH) that:

> Monitoring also needs care: gateway request-latency metrics measure stream duration, not time to first byte. A single latency chart can hide very different user experiences.

During the preview period, developers must explicitly enable the new functionality by specifying the `--enable-streaming` command-line flag when creating a gateway.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/gcp-api-gateway-streaming/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。