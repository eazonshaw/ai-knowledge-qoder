---
title: "Cloudflare Workers Accept Inbound TCP, with gRPC the First Protocol on Top"
date: 2026-08-30 07:43:58
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare Workers(https://developers.cloudflare.com/workers/) can now accept inbound TCP connection"
source_url: "https://www.infoq.com/news/2026/08/workers-inbound-tcp-grpc/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-28　|　采集：2026-08-30 07:43:58

## 正文

[Cloudflare Workers](https://developers.cloudflare.com/workers/) can now [accept inbound TCP connections](https://blog.cloudflare.com/grpc-workers/). Since the platform launched in 2017, a Worker could open outbound sockets to a database or a service, but it could only be a server for HTTP. A new connect(socket) handler removes that restriction, and [gRPC](https://grpc.io/) support is the first thing built on top of it.

The announcement landed during Agents Week, framed around voice AI, where low latency and a persistent bidirectional connection between client and model matter. The capability underneath is broader than that framing suggests.

Three things shipped together, and they have different ceilings.

The connect(socket) handler accepts a raw inbound socket, routed to a Worker through [Spectrum](https://developers.cloudflare.com/spectrum/), Cloudflare's existing ingress proxy for non-HTTP traffic. A Worker can read and write the socket directly, hand it to another Worker, or pass it to a [Durable Object](https://developers.cloudflare.com/durable-objects/):

```
export default {
              async connect(socket): Promise<void> {
                             const writer = socket.writable.getWriter();
                             await writer.write(new TextEncoder().encode("Hello, world!\n"));
                             await writer.close();
              },
} satisfies ExportedHandler;
```

From a Durable Object, the socket can go on to a [Container](https://developers.cloudflare.com/containers/) through getTcpPort(), which is where the full-duplex path ends. Cloudflare's examples include a Go gRPC echo server and a Python socketserver, both running unmodified. In the company's words, this opens the door to full-duplex communication between client and server running any program, in any language, for any TCP-based protocol.

Workers themselves get less. They can serve unary and server-streaming gRPC and call external gRPC servers, without a container, but not bidirectional streaming. The mechanism is translation rather than native support: developer code uses [gRPC-web](https://github.com/grpc/grpc-web), and Cloudflare converts incoming gRPC to gRPC-web and outgoing gRPC-web back to gRPC.

The reason is a platform constraint the post explains directly. [HTTP/2](https://developers.cloudflare.com/speed/optimization/protocol/http2/) splits requests into frames carrying stream IDs, and gRPC depends on that stream-level control for streaming, cancellation, flow control, and trailers. Web platform APIs like fetch() do not expose it. Browsers have the same problem, which is why gRPC-web exists, and Cloudflare has been converting gRPC to HTTP/1.1 inside its reverse proxy [since 2020](https://blog.cloudflare.com/road-to-grpc/) so that [WAF rules](https://developers.cloudflare.com/waf/) and Bot Management can inspect messages.

Sebastian Buzdugan raised the practical version of that constraint in [reply to Cloudflare's announcement](https://x.com/sebuzdugan/status/2084543600558264461), asking whether Workers expose enough backpressure control for gRPC streams, and noting that streaming edge cases are what decide whether an implementation holds. The post does not address it.

The practical effect is that existing clients need no changes. A Worker can serve mobile apps using [grpc-swift-2](https://github.com/grpc/grpc-swift) or [grpc-kotlin](https://github.com/grpc/grpc-kotlin), or sit in front of an existing gRPC backend the way Workers already sit in front of REST APIs. The server side takes a few lines with the open-source [@connectrpc/connect](https://connectrpc.com/) package.

The most candid part of the announcement is Cloudflare explaining why this is private beta rather than generally available. The company does not use gRPC internally:

At Cloudflare, we use [Cap'n Proto](https://capnproto.org/) and Cap'n Web and the JavaScript-native RPC system that is built into Cloudflare Workers instead of gRPC. And when we ship things, we always aim to be using them ourselves.

That is an unusual thing for a vendor to publish alongside a launch, and it sets an honest expectation. Cloudflare says it wants to work with a smaller set of gRPC developers first and make sure it has the implementation right before turning it on for everyone. Teams evaluating this should read it as a signal about maturity rather than as modesty.

For platform teams, the question is what the primitive enables beyond the announced use case. Workers have been constrained to HTTP for eight years, which ruled out entire categories of workload: message brokers, database proxies, custom binary protocols, anything expecting a socket. Passing a socket from Worker to Durable Object to Container makes the edge a termination point for arbitrary TCP, with routing logic in JavaScript ahead of it.

That routing position is worth noting. A Worker sees the connection before deciding where it goes, which is the same shape as an API gateway making decisions before forwarding a request, applied to raw sockets rather than HTTP. What a Worker can do with a socket in that position, in terms of inspection or policy, is not covered in the announcement.

The gRPC angle also lands at a specific moment. The [MCP 2026-07-28 specification](https://www.infoq.com/news/2026/08/mcp-stateless-gateway/) added gRPC as an optional transport alongside its HTTP one, and developers responding to that release noted how much of agent infrastructure amounts to rediscovering remote procedure call conventions that predate it. A protocol Google released nearly ten years ago keeps arriving as the answer for machine-to-machine traffic, including in systems designed around HTTP.

Everything in the post is private beta behind a signup form, though Cloudflare's own [social copy](https://x.com/Cloudflare/status/2084293403328516571) announced that gRPC support "is now available" and described serving gRPC natively at the edge without translation layers. Readers arriving from that will find a narrower release than advertised. Cloudflare says UDP-based protocols are next.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/workers-inbound-tcp-grpc/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。