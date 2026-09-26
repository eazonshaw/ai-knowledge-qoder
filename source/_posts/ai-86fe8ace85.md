---
title: "Home Made CobbleDB Replaces DynamoDB at Perplexity to Cut Query Latency 5x and Reduce Cloud Storage"
date: 2026-09-26 08:16:24
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Perplexity has transitioned its core search serving tier away from Amazon DynamoDB to CobbleDB, an i"
source_url: "https://www.infoq.com/news/2026/09/cobbledb-perplexity/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-25T14:14:00.000Z　|　采集：2026-09-26 08:16:24

## 正文

Perplexity has transitioned its core search serving tier away from Amazon DynamoDB to CobbleDB, [an internally developed distributed key-value store written in Rust](https://www.perplexity.ai/hub/blog/cobbledb?utm_source=gemini). The migration addresses severe latency and cost bottlenecks that arose from serving multi-kilobyte document batches to large language models under heavy query volumes. By decoupling durable document storage from hot-tier retrieval, the engineering team achieved a fivefold reduction in batch-read latencies while lowering overall storage expenses by at least twenty percent.

Artificial intelligence answer engines impose read patterns distinct from conventional document search. Each query dispatched to Perplexity generates between 100 and 120 target page keys, which the retrieval service splits into parallel batches of 10 to 20 keys. Unlike traditional search engines that return brief metadata snippets, retrieval for language models requires extracting full chunked passages and dense vector embeddings, yielding average record payloads of roughly 50 kilobytes.

At production traffic scales exceeding 200,000 requests per second, DynamoDB usage-based pricing became financially unsustainable because AWS meters every byte transferred. Additionally, DynamoDB operates as a black box that conceals internal partition placement, memory caching policies, and replica routing. Engineers could not prevent tail-latency spikes caused by uncached reads, cross-zone networking hops, or lagging replicas. Reprocessing jobs triggered by updated chunking algorithms or newer embedding models also pushed high-volume writes directly into DynamoDB, creating noisy neighbor contention against live user requests.

To resolve these constraints, Perplexity split its storage architecture into three specialized systems: Pillar for durable state management, Lorry for batch aggregation, and CobbleDB for low-latency serving.

![](https://www.infoq.com/news/2026/09/cobbledb-perplexity/news/2026/09/cobbledb-perplexity/en/resources/1Gemini_Generated_Image_7d2odt7d2odt7d2o-1790250791855.jpeg)

*Image Source: Generated with Gemini based on details from the article.*

Pillar runs on YTsaurus over high-capacity mechanical drives, maintaining versioned table families for web page metadata, passages, and vector representations. Atomic YTsaurus transactions guarantee that crawl updates, state mutations, and export queues commit together. Lorry acts as a stateless queue consumer that groups Pillar exports into partition-aligned batch files, storing the payloads in Amazon S3 while posting metadata notices to CobbleDB. CobbleDB worker nodes pull and ingest these S3 batches independently, entirely isolating hot serving nodes from the write-heavy crawl pipeline.

CobbleDB operates as a distributed key-value store optimized exclusively for batched lookups. Each partition maintains three replicas distributed across independent compute nodes. The core daemon uses RocksDB as its embedded storage engine, pairing memory-mapped caching with local NVMe solid-state disks.

A stateless query router maps hashed page identifiers to partitions and coordinates read execution. To minimize network overhead, the router routes requests to node replicas located within the same availability zone. If a target replica exhibits elevated response times, the router speculatively hedges the request by issuing a concurrent read to an alternate replica on a different node. Within each node, CobbleDB retrieves keys simultaneously through the RocksDB batched MultiGet interface, eliminating round-trip overhead.

```
pub struct BatchedPageRequest {
    pub keys: Vec<PageKey>,
    pub zone_affinity: AvailabilityZone,
}
impl StorageEngine {
   pub fn multi_get_pages(&self, keys: &[PageKey]) -> Result<Vec<Option<PageRecord>>, Error> {
      let rocksdb_keys: Vec<&[u8]> = keys.iter().map(|k| k.as_bytes()).collect();
      self.rocksdb.batched_multi_get(&rocksdb_keys)
   }
}
```

The database discards standard distributed transaction protocols and synchronous consensus algorithms. Because search serving tolerates slight replication lag, replicas apply updates asynchronously at their own rate, substantially reducing operational overhead.

In live production measurements, CobbleDB reduced median batch-read latency from 31.4 milliseconds to 5.60 milliseconds, p90 latency dropped from 56.7 milliseconds to 9.77 milliseconds, and p99 tail latency decreased from 123 milliseconds to 24.2 milliseconds. Synthetic benchmarks handling payloads up to 100 kilobytes confirmed consistent throughput up to 500,000 requests per second.

![](https://www.infoq.com/news/2026/09/cobbledb-perplexity/news/2026/09/cobbledb-perplexity/en/resources/1Benchmarks-1790250857063.avif)

*Image Source: Perplexity Blog*

The architecture incurs non-trivial trade-offs. Replacing a fully managed cloud database transfers node lifecycle management, backup verification, and partition rebalancing entirely onto internal site reliability engineers. Applications must also withstand eventual consistency, as replicas ingest batched files at different intervals.

[Aravind Srinivas](https://linkedin.com/in/aravind-srinivas-16051987), the CEO of the company, noted that the 40,000 lines of Rust comprising CobbleDB were built in two months by two systems engineers paired with an autonomous swarm of AI coding agents that handled integration testing, build monitoring, and operational runbooks. Perplexity has indicated plans to open-source the CobbleDB codebase in an upcoming release.

## About the Author

#### **Olimpiu Pop**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/cobbledb-perplexity/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。