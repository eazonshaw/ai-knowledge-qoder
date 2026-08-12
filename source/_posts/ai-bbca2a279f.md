---
title: "Spotify Builds External Index to Enable Low Latency Point Queries on Its Data Lake"
date: 2026-08-13 06:30:44
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Spotify has introduced Random Access Parquet (RAP)(https://engineering.atspotify.com/2026/7/indexing"
source_url: "https://www.infoq.com/news/2026/08/spotify-data-lake-point-queries/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-12T14:26:00.000Z　|　采集：2026-08-13 06:30:44

## 正文

Spotify has introduced [Random Access Parquet (RAP)](https://engineering.atspotify.com/2026/7/indexing-the-data-lake-for-online-point-queries/?utm_source=chatgpt.com), a storage architecture that enables low-latency point queries directly against data stored in its data lake, allowing online services and AI applications to retrieve individual records without replicating datasets into operational databases. RAP adds an external indexing layer over Apache Parquet files, enabling interactive lookups while continuing to use the same datasets for analytics, machine learning, and online serving.

Spotify explained that modern data lakes have become the central repository for analytical and AI workloads, but retrieving individual records remains inefficient because distributed query engines such as [Trino](https://trino.io/) and [BigQuery](https://cloud.google.com/bigquery) are optimized for analytical scans rather than key-based lookups. Although cloud object stores such as [Google Cloud Storage](https://cloud.google.com/storage) now provide millisecond access latency, query planning, metadata traversal, and file discovery can add significant overhead for point queries. Spotify noted that it stores petabytes of online data in Bigtable while exabytes reside in its Google Cloud Storage-based data lake, making large-scale replication into serving databases increasingly costly.

RAP addresses this challenge by introducing an external index that maps lookup keys, such as user IDs, directly to Parquet files and row locations. Instead of scanning thousands of files, a query resolves the key through the index before issuing a targeted ranged read against object storage. As new data is written into [Apache Iceberg](https://iceberg.apache.org/) tables, an index builder generates append-only index fragments without modifying immutable Parquet files. Spotify said the approach allows the same datasets to support analytical processing, machine learning pipelines, notebooks, AI agents, and latency-sensitive online applications without maintaining duplicate storage systems.

Spotify's announcement follows broader efforts to extend open data lake technologies beyond analytical processing. Google Cloud recently described an [Apache Iceberg based lakehouse architecture](https://cloud.google.com/blog/products/data-analytics/the-future-of-data-lakehouse-for-the-agentic-era?utm_source=chatgpt.com) for AI applications that similarly seeks to reduce data duplication while enabling operational access to data. Unlike that approach, RAP introduces a dedicated external indexing layer optimized for point lookups while remaining compatible with existing Parquet files and Iceberg tables.

The architecture also generated discussion within the data engineering community. [Andrew Lamb](https://publish.x.com/?url=https://twitter.com/andrewlamb1111/status/2083460112555888799) highlighted RAP as an example of extending open data formats for interactive workloads. In a separate [LinkedIn discussion](https://www.linkedin.com/posts/vikas-singh-bril_everyones-data-lake-is-already-fast-enough-activity-7490989209868980224-R5gJ), Vikas Singh argued that improvements in cloud object storage performance have shifted more of the latency associated with point queries toward query planning and metadata access, an area that RAP is designed to reduce through precomputed indexes.

Spotify also described several storage layout optimizations that reduce point query latency. These include sorting data by lookup key to reduce the number of files accessed, grouping related records together, interleaving value columns so multiple attributes can be retrieved through a single contiguous read, and using covering indexes that can satisfy some queries without reading Parquet files. According to Spotify, these techniques trade modest increases in file or index size for fewer storage operations, allowing some point queries to be served through a single ranged read of only a few kilobytes.

![](https://www.infoq.com/news/2026/08/spotify-data-lake-point-queries/news/2026/08/spotify-data-lake-point-queries/en/resources/1spotifyimage-1786314838135.jpeg)

*Interleaved value column layout enables related values from multiple columns (Source: [Spotify Blog Post](https://engineering.atspotify.com/2026/7/indexing-the-data-lake-for-online-point-queries))*

Spotify also supports secondary indexes, enabling efficient querying across multiple lookup dimensions, such as buyer ID or seller ID, without rewriting [Parquet files](https://parquet.apache.org/). Hash-based indexes support exact lookups, while sorted indexes enable range queries. Spotify said secondary indexes are managed at the serving layer, allowing new access paths without changing data pipelines while continuing to use the same Parquet datasets for both analytical scans and interactive point lookups. Storage layout techniques such as [Z ordering](https://en.wikipedia.org/wiki/Z-order_curve) and [Hilbert curves](https://en.wikipedia.org/wiki/Hilbert_curve) can further improve data locality for secondary lookup dimensions.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/spotify-data-lake-point-queries/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。