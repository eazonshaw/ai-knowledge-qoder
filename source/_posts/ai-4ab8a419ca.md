---
title: "Cloudflare K2 Builds Event Streams on R2 Object Storage, at a Second of Produce Latency"
date: 2026-10-10 09:24:28
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare recently launched K2 in public beta(https://blog.cloudflare.com/cloudflare-k2-streams/). "
source_url: "https://www.infoq.com/news/2026/10/cloudflare-k2-serverless-streams/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-09T05:06:00.000Z　|　采集：2026-10-10 09:24:28

## 正文

Cloudflare recently launched [K2 in public beta](https://blog.cloudflare.com/cloudflare-k2-streams/). It is a serverless event streaming service, and underneath it is a partitioned durable log that lives in R2 object storage. The trade-off is latency for cost and elasticity, and Cloudflare names the number: about one second of produce latency at p99. Testing in public suggests end-to-end delivery runs slower than that.

The service started as plumbing. [Basin Pipelines](https://developers.cloudflare.com/pipelines/) needed somewhere durable to park events before its pull-based [processing engine](https://www.arroyo.dev/) read and transformed them. Most companies reach for Apache Kafka at that point. Cloudflare couldn't. Pipelines run across an edge of more than 335 cities, on small slices of ephemeral machines, networked over the public internet, and Kafka assumes none of that.

So they built on the thing that already handles durability. R2 gives [eleven nines](https://developers.cloudflare.com/r2/reference/durability/) with strongly consistent APIs. Push replication and consensus down into the storage layer and the application layer above it gets simpler, with compute and storage scaling apart.

Object stores cannot append, which is awkward when the whole abstraction is a log. K2 gets around it by holding writes in memory on an edge service, pausing for a moment to let more arrive, then writing the batch out as a segment file. R2's atomic operations supply the ordering and the incrementing offsets, so there is no coordination service at all. That pause is the latency.

Reaction on [Hacker News](https://news.ycombinator.com/item?id=49921923) has been largely positive about the pattern and pointed about the numbers.

Commenter psanford set out the broader shift:

> Object store is quickly becoming the new core data substrate. Lets build kafka, but on s3. Lets build github, but on s3.

Commenter necubi, who identified himself in the thread as the post's author and K2's tech lead, agreed that every data system not requiring sub-100ms latency is moving to object storage, and noted that his team sits next to the R2 team and can co-evolve the products. The post is credited to [Micah Wylde](https://blog.cloudflare.com/author/micah-wylde/) and [Marc Selwan](https://blog.cloudflare.com/author/marc-selwan/).

The sharpest exchange came from someone running the beta. Commenter e1g reported writes under a second but end-to-end delivery latency of p95 2.5 seconds and p99 7.5 seconds, and asked whether that was expected. A commenter answering for the team replied that the tail latency was higher than they would expect, that the Consume API has work to do on performance, and that read latency improvements should be visible within about a week.

A competitor offered the counterpoint. Commenter sensodine, who disclosed working on [s2.dev](https://s2.dev/) in the same space, argued the opportunity extends below 100ms, pointing to faster object storage tiers such as S3 Express and GCS rapid buckets, both single-zone and therefore still needing quorum writes for regional durability. He described the underlying tension:

> One of the tensions of course is how long to linger before flushing to object storage - you have to trade off directly between latency and cost of your API ops for PUTs.

His own service, he said, uses stateful backend processes constantly flushing multi-tenant objects containing records from many streams, reaching roughly 50ms p99 acknowledgment latency from the same region without ruining the unit economics.

Pricing drew the other substantive objection. Commenter nnx found the $0.04 per GB produced reasonable against other cloud event streams, but the identical charge to consume steep:

> This means actual usage is $0.08/GB in the simplest case (one consumer) but fan-out consumer strategies get very expensive very fast.

That matters because fan-out is one of the use cases Cloudflare positions K2 for. Retention is charged separately at $0.02 per GB per month, and nothing is billed during the beta.

The same commenter defended the cost case against the obvious alternatives, saying K2's advantage over Google Pub/Sub is cost, particularly for longer retention, and that object storage makes it much cheaper than self-hosted or cloud-hosted Kafka such as Amazon MSK or Confluent, with no clusters to manage and consistent performance as data volume grows. He restated the trade in the same comment, putting produce and end-to-end latency at around 1s p99 against systems that rely on local disk replication.

Several commenters asked how K2 differs from AutoMQ and WarpStream, which apply the same object-storage pattern, and noted that Kafka itself now has diskless topic support. One answer came from another commenter rather than Cloudflare: it is built for the Cloudflare ecosystem, and using it standalone does not make much sense.

Kafka compatibility is on the roadmap, and the K2 tech lead was candid about why:

> I'm not personally a huge fan of the kafka API, I think it's simultaneously too low level for normal users and too high level to deeply integrate into other systems (like stream processing engines), and requires a complex client library to use effectively.

K2 instead uses a lease-based consume API, where a consumer polls a subscription, receives a batch leased for five minutes, then acknowledges it, negatively acknowledges it for redelivery, or extends the lease. He said that design allows higher read parallelism, which matters when consumers are Workers that parallelize well but are individually not very powerful.

On the producing side, a [Worker binding](https://developers.cloudflare.com/k2/features/produce/) sends batches and surfaces whether a failure is worth retrying:

```
const result = await env.EVENTS.send([
  {
    content: new TextEncoder().encode(
      JSON.stringify({
        event: "page_view",
        path: new URL(request.url).pathname,
        timestamp: Date.now(),
      }),
    ),
    headers: { "content-type": "application/json" },
  },
]);
if (!result.success) {
  console.error(`Produce failed: ${result.error.message}`);
  return new Response("Failed to record event", {
    status: result.error.retryable ? 503 : 500,
  });
}
```

K2 represents data as bytes, leaving encoding to the application.

If these reactions are representative, the questions are about where the latency floor sits rather than whether the architecture makes sense. Cloudflare publishes a one-second produce figure, a user measured end-to-end tail latency several times that, and a competitor claims 50ms in a same-region configuration using stateful flushing rather than pure object storage.

Beta limits are 10GB of storage and 30 MB/s produce per stream, with a form for increases. Message keys and key-based ordering, multi-gigabyte-per-second write parallelism, push-based Worker consumers, a lower-latency express tier and Kafka client support are all listed as future work. Streams are created through the dashboard, the [API](https://developers.cloudflare.com/k2/), Wrangler, or [cf](https://blog.cloudflare.com/cloudflare-cf-cli-launch/), the command-line interface Cloudflare introduced the same week.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/cloudflare-k2-serverless-streams/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。