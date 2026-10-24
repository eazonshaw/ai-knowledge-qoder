---
title: "Cloudflare Brings On-Demand CPU and Memory Profiling to Production Workers"
date: 2026-10-24 08:08:53
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare(https://www.cloudflare.com/) has introduced on-demand CPU and memory profiling for Worker"
source_url: "https://www.infoq.com/news/2026/10/cloudflare-cpu-memory-profiling/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-23T12:00:00.000Z　|　采集：2026-10-24 08:08:53

## 正文

[Cloudflare](https://www.cloudflare.com/) has introduced [on-demand CPU and memory profiling for Workers and Durable Objects](https://blog.cloudflare.com/workers-on-demand-profiling/), allowing developers to investigate performance bottlenecks in production using interactive flamegraphs. Announced on October 9, 2026, the feature generates interactive flamegraphs through the [Workers Observability](https://www.cloudflare.com/products/workers-observability/) dashboard or the [cf CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html), helping teams identify expensive functions and memory allocations without relying solely on logs and aggregate metrics.

Developers can capture CPU or heap-allocation profiles for a deployed Worker version and inspect the results as a flamegraph, where wider sections indicate functions responsible for a larger share of CPU time or sampled memory allocations. Profiles can also be downloaded for offline analysis.

The key distinction is that profiling targets an already-running isolate rather than starting a fresh one. This allows developers to examine code executing under real production traffic. Durable Objects receive additional support for profiling a specific named instance, which is useful when investigating problems tied to stateful workloads. However, the target must receive sufficient traffic during the capture window, and TypeScript developers should enable source maps to make function names easier to interpret.

The implementation must account for Workers running across Cloudflare’s distributed edge infrastructure, where a script may have multiple isolates across data centres and physical machines. A profiling request therefore needs to identify the requested Worker version and locate a suitable active isolate. Durable Objects add another challenge because they are stateful and can move between locations; Cloudflare routes profiling requests to the machine hosting the specific object.

The runtime does not hold an isolate lock for the entire capture. For CPU profiling, it starts a V8 profiler that samples at one-millisecond intervals, releases the lock while requests continue executing, and reacquires it to stop profiling and collect results. This lets the platform observe live execution without suspending normal request processing during the capture.

CPU and memory profiles also answer different questions. CPU profiling samples call stacks to reveal where execution time is being spent, helping identify expensive functions, redundant computation, and potential optimisation opportunities. Memory profiling, by contrast, highlights allocations associated with functions, helping developers find code that creates excessive objects or contributes to memory pressure.

This is important when diagnosing performance issues: a function may consume significant CPU without allocating much memory, while another may generate substantial allocations without dominating execution time. Examining the appropriate profile helps narrow the investigation to the relevant resource bottleneck.

Cloudflare used the feature internally to identify unnecessary computation and memory consumption. Profiling an R2 binding Worker revealed a recursive JSON replacer that repeatedly traversed nested data, making the function perform redundant work. Correcting the implementation made it a claimed 2.7 times faster. Another profile exposed an unnecessary duplicate metrics call that accounted for approximately 1% of CPU time.

Memory profiling identified a separate problem in which partially disabled [Prometheus](https://prometheus.io/) instrumentation was reportedly still consuming substantial memory. Cloudflare claims that removing the remaining code reduced the Worker's 99.9th-percentile memory usage from 133 MB to 118 MB, bringing it below the 128 MB limit.

Cloudflare’s offering complements established tools rather than replacing them. [Chrome DevTools](https://developer.chrome.com/docs/devtools) supports local CPU profiling, making it useful during development, but reproducing production traffic and data can be difficult. pprof, widely used in [Go](https://go.dev/) and other supported profiling workflows, provides powerful offline profile analysis; Cloudflare also allows downloaded profiles to be examined with pprof. Its main differentiator is the ability to initiate profiling against live Workers and Durable Objects through the platform's existing operational interface.

The feature also complements logs, metrics and distributed tracing. These tools help identify when a service is slow or consuming excessive resources, while a profile can help pinpoint the functions responsible. Together, they provide a more complete picture of application behaviour.

On-demand capture is not continuous monitoring. Short profiling windows can miss intermittent problems, while heap profiles record allocations during capture rather than providing a complete picture of retained memory. Cloudflare says it is working towards continuous profiling, which could make it easier to investigate rare performance problems without having to anticipate when they occur.

For teams running production workloads on Cloudflare Workers, the release adds a practical debugging capability: moving from detecting resource pressure to identifying the code responsible, without first having to reproduce the issue locally.

## About the Author

#### **Craig Risi**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/cloudflare-cpu-memory-profiling/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。