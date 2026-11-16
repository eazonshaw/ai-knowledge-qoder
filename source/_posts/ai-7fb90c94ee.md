---
title: "Cloudflare Introduces Private Origins for Application Services"
date: 2026-11-16 09:28:46
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare recently made Application Services for Private Origins generally available(https://blog.c"
source_url: "https://www.infoq.com/news/2026/11/cloudflare-private-origins/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-15T06:18:00.000Z　|　采集：2026-11-16 09:28:46

## 正文

Cloudflare recently made [Application Services for Private Origins generally available](https://blog.cloudflare.com/private-origins-public-to-private/), allowing public traffic to reach applications hosted on private networks without exposing their IP addresses or opening inbound firewall ports. Private-to-private connectivity is not yet supported.

[Announced in closed beta in June](https://blog.cloudflare.com/private-origins-dns-routing/), the service is now generally available with a simplified configuration: private IP addresses are automatically detected in proxied DNS records, and private routing can be configured through the DNS API. [Enrique Somoza](https://www.linkedin.com/in/enriquesomoza/), product development manager at Cloudflare, writes:

> We launched this capability (...) to address a problem we kept hearing from customers: Their internal APIs, AI agent backends, MCP servers, and operational tools weren’t built to face the Internet, but those services still need to accept requests from partners, customers, or agents over the Internet.

Existing Cloudflare connectivity can be used to apply WAF, bot management, rate limiting, caching, and Workers to private origins, just as with public-facing applications. The service also supports private TCP/UDP origins through Spectrum and private connectivity for Workers. Somoza adds:

> Those requirements often left private applications without the same protections and controls they used for public applications, including WAF, bot management, rate limiting, caching, traffic acceleration, rewrites, and Workers.

Using [Private Origins](https://developers.cloudflare.com/dns/private-origins/) requires a Private Origins entitlement, Cloudflare One connectivity, and Unified Routing (not required when using Cloudflare Tunnel). Cloudflare WAN and Mesh connections also require return routes for Cloudflare's IPv4 (100.64.0.0/12) and IPv6 (2606:4700:cf1:5000::/64) source ranges, as well as a proxied DNS record pointing to the private IP with private network routing enabled. Existing WAF, caching, and bot management policies apply automatically. [Simon Painter](https://www.linkedin.com/in/sipainter/), cloud network consultant, [notes](https://www.simonpainter.com/field-notes/private-origins-and-an-australian-bgp-wobble/):

> No extra connector software. WAF, bot management, rate limiting, caching and Workers all sit in front of stuff that was never meant to be on the open internet. The interesting bit isn't the marketing wrapper — it's the DNS implication. For years the rule was: "if it answers a public DNS name, it's reachable from the public internet." That stops being true here.

Cloudflare is not the only cloud provider offering ways to connect public-facing services to private application backends. AWS, for example, offers [CloudFront VPC Origins](https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-cloudfront-virtual-private-cloud-vpc-origins-shield-your-web-applications-from-public-internet/), while Microsoft provides similar capabilities through [Azure Front Door Premium](https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview) and Private Link. Giacomo Masseroni [writes](https://x.com/Cloudflare/status/2116179364614189067):

> Finally. been punching holes in security groups just to let the edge in.

With general availability, Cloudflare has updated the Private Origins [developer documentation](https://developers.cloudflare.com/dns/private-origins/?cf_page=private-origins-public-to-private%2F). The announcement does not clarify whether the feature carries an additional charge or is included in existing Enterprise contracts.

Cloudflare plans to extend the service to support private-to-private traffic, allowing users, services, and AI agents on one private network to access applications on another. A closed beta is targeted for early 2027.

## About the Author

#### **Renato Losio**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/cloudflare-private-origins/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。