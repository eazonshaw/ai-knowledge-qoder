---
title: "From Memory-Hungry HNSW to Quantized SPANN: The Technical Evolution of Pinterest's Manas Platform"
date: 2026-09-17 07:58:33
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Pinterest Engineering evolved its distributed search platform, Manas(https://www.infoq.com/news/2021"
source_url: "https://www.infoq.com/news/2026/09/pinterest-search/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-16T06:06:00.000Z　|　采集：2026-09-17 07:58:33

## 正文

Pinterest Engineering evolved its distributed search platform, [Manas](https://www.infoq.com/news/2021/02/pinterest-efficient-retrieval/), to handle tens of billions of embeddings using quantization, SSD-based serving via SPANN, and late interaction retrieval. Deployed across 80 clusters, Manas powers core discovery experiences including Home Feed, Search, Related Pins, Ads, and Notifications. As the underlying corpus scales rapidly into billions of items, traditional memory-hungry vector search algorithms like standard HNSW face mounting cost, hardware allocation, and infrastructure flexibility challenges.

![](https://www.infoq.com/news/2026/09/pinterest-search/news/2026/09/pinterest-search/en/resources/1Image1-1789487679230.webp)

To tackle these scaling hurdles and significantly reduce memory footprints, the Pinterest team implemented [Scalar Quantization (SQ)](https://www.elastic.co/search-labs/blog/vector-db-optimized-scalar-quantization) and [Product Quantization (PQ)](https://www.pinecone.io/learn/series/faiss/product-quantization/) on a 100-million-embedding GraphSage dataset. PQ compresses original floating-point vector representations into compact byte codes, reducing HNSW indices by 74% and Inverted File (IVF) indices by 93%, while achieving a 70–80% recall range. In comparison, SQ compresses vector components into lower-bit integers, reducing HNSW indices by 59% and IVF indices by 75%, maintaining over 90% recall consistently across workloads.

Offline benchmarks reveal distinct trade-offs across configurations and index sizes. The baseline HNSW index is 121 GB with a Recall@100 of 93.72% at 302.5 QPS. HNSW plus PQ drops the index size to 32 GB with a Recall@100 of 77.25% at 276.4 QPS.

![](https://www.infoq.com/news/2026/09/pinterest-search/news/2026/09/pinterest-search/en/resources/1Image2-1789487679230.webp)

HNSW plus SQ results in a 50 GB index size while achieving a Recall@100 of 92.92% at 305.2 QPS. The baseline IVF index stands at 97 GB with a Recall@100 of 91.69% at 1659.8 QPS. Applying IVF plus PQ compresses the index down to 6.8 GB with a Recall@100 of 76.00% at 1747.9 QPS.

Using IVF plus SQ yields a 25 GB index size and achieves a superior Recall@100 of 95.71% at 1588.8 QPS. Shifting to lower-bit representations normally requires a decoding step before distance computation. To solve this CPU bottleneck, the team implemented Linear Scaling SQ using SIMD intrinsics, reducing query compute resources by 10–15%.

Online experiments successfully launched SQ and PQ, realizing 20–30% serving cost savings across production workloads. For SSD serving, Pinterest evaluated [DiskANN](https://www.microsoft.com/en-us/research/project/project-akupara-approximate-nearest-neighbor-search-for-large-scale-semantic-search/) and [SPANN](https://www.microsoft.com/en-us/research/publication/spann-highly-efficient-billion-scale-approximate-nearest-neighbor-search/), discovering that SPANN with PQ achieved 3x the QPS of DiskANN with 1/3 the latency and a minor 5% recall drop.

To further cut RAM costs by moving index storage to high-throughput SSDs, Pinterest evaluated DiskANN and SPANN. Their evaluation revealed that SPANN combined with PQ achieved 3x the QPS of DiskANN with 1/3 the latency and only a minor 5% recall drop. The custom SPANN architecture keeps a small, fast centroid index in memory to locate relevant partitions while storing large posting lists on SSDs, optimizing IOPS and ensuring search efficiency. In a Pin recommendation evaluation indexing over 5 billion embeddings, SPANN saved over 40% of CPU time for production queries compared to full in-memory HNSW.

![](https://www.infoq.com/news/2026/09/pinterest-search/news/2026/09/pinterest-search/en/resources/1Image3-1789487679230.webp)

To move past the expressiveness limits of single-vector two-tower models, Pinterest is shifting toward multi-vector Late Interaction models like [ColBERT](https://github.com/stanford-futuredata/ColBERT) using Sum of MaxSim scoring to fine-tune fine-grained relevance match across tokens. Implementing this in Manas required updating the query parser to break multi-token queries into multiple vector embeddings and executing simultaneous ANN searches across indices. A successful pilot launch is currently underway with an internal client team to test advanced multi-embedding query support in live production environments.

## About the Author

#### **Olimpiu Pop**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/pinterest-search/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。