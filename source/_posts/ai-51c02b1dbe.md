---
title: "DoorDash Uses Envoy and Valkey for a 1.5M RPS Proxy Cache with 99.99999% Availability"
date: 2026-07-21 06:48:07
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "DoorDash has developed Entity Cache, a transparent proxy caching platform(https://careersatdoordash."
source_url: "https://www.infoq.com/news/2026/07/doordash-entity-cache-proxy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-20T13:53:00.000Z　|　采集：2026-07-21 06:48:07

## 正文

DoorDash has developed [Entity Cache, a transparent proxy caching platform](https://careersatdoordash.com/blog/high-performance-proxy-cache-for-doordash-services/) to reduce redundant service-to-service requests across its microservices architecture. The company built the platform to address repeated requests for frequently accessed but infrequently changing data, which increased backend load, consumed additional compute resources, and contributed to higher tail latency as its microservices ecosystem expanded. According to DoorDash, the platform supports more than 100 endpoints across 50 services, serving over 1.5 million requests per second with 99.99999% availability.

Built on [Envoy](https://www.envoyproxy.io/) and [Valkey](https://valkey.io/), Entity Cache operates within DoorDash’s Envoy-based [service mesh](https://careersatdoordash.com/blog/inside-doordashs-service-mesh-journey-part-1-migration-at-scale/) and intercepts HTTP and gRPC requests before they reach upstream services. The platform moves caching into the infrastructure layer by placing a transparent proxy between client services and upstream applications. Services continue making existing requests without requiring application code changes, while cache behavior is managed centrally through the service mesh.

![](https://www.infoq.com/news/2026/07/doordash-entity-cache-proxy/news/2026/07/doordash-entity-cache-proxy/en/resources/1doordashcacheproxyarch-1783393251628.jpeg)

Entity Cache architecture (Source: [DoorDash Blog Post](https://careersatdoordash.com/blog/high-performance-proxy-cache-for-doordash-services/))

DoorDash described this approach as more than a traditional caching layer.

> Entity Cache is not a single optimization, but a collection of reliability and performance-focused features designed to work together at DoorDash scale.

The platform combines caching, invalidation, failure handling, request coordination, and performance optimizations to support high-volume internal service communication. When a request reaches Entity Cache, the proxy checks Valkey for a valid cached response. Cache hits are returned directly, while cache misses are forwarded to upstream services. The resulting response is stored according to configured policies and returned to the requesting service. This approach allows teams to adopt centralized caching without implementing separate solutions within individual applications.

Maintaining cache freshness and reliability at scale requires careful tradeoffs. Entity Cache uses Kafka-based event-driven invalidation, comparing update timestamps against cached responses to refresh stale entries without requiring distributed cache deletions. Dual TTL thresholds allow slightly stale responses to be served during outages, while Envoy removes unhealthy cache instances and routes requests directly to upstream services when needed.

DoorDash also described how this design helped during production failures.

> This design proved critical during a multi-hour upstream outage, when Entity Cache continued serving stale but valid cached data instead of failing.

![](https://www.infoq.com/news/2026/07/doordash-entity-cache-proxy/news/2026/07/doordash-entity-cache-proxy/en/resources/1datastaleworkflow-1783393251628.jpeg)

*Entity Cache resilience workflow (Source: [DoorDash Blog Post](https://careersatdoordash.com/blog/high-performance-proxy-cache-for-doordash-services/))*

To support high request volumes, DoorDash optimized several components of Entity Cache. The platform uses custom buffer pools to reduce memory allocation overhead, a lock-free single-flight mechanism to prevent duplicate work during cache misses, and probabilistic early refresh based on the [XFetch algorithm](https://cseweb.ucsd.edu/~avattani/papers/cache_stampede.pdf) to reduce cache stampedes. XFetch allows frequently accessed entries to be refreshed before they expire, reducing the likelihood that many requests simultaneously encounter expired cache entries.

According to DoorDash, these optimizations reduced allocation rates by 50% to 60%, increased per-pod throughput by approximately five times, and reduced P99 latency spikes by up to 80%. The company also reports cache hit rates above 90%, upstream request reductions of 60% to 95% during normal operation, latency improvements of up to 90% for newly onboarded endpoints, and approximately 2.1 milliseconds of P99 proxy overhead.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/doordash-entity-cache-proxy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。