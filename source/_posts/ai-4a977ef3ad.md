---
title: "Version Controlled SQL Database Dolt Releases 2.0 with Automatic Storage Cleanup and Compression"
date: 2026-07-19 06:39:44
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "DoltHub has recently released Dolt 2.0(https://www.dolthub.com/blog/2026-05-11-dolt-2-dot-0/), a maj"
source_url: "https://www.infoq.com/news/2026/07/dolt-version-control/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-18T07:28:00.000Z　|　采集：2026-07-19 06:39:44

## 正文

DoltHub has recently [released Dolt 2.0](https://www.dolthub.com/blog/2026-05-11-dolt-2-dot-0/), a major update to the open source version-controlled SQL database. The latest major version adds automatic storage optimization, including garbage collection and compression, along with improved support for large and vector data types.

Dolt is a MySQL-compatible SQL database with built-in Git-style version control, supporting operations such as branching, merging, cloning, and diffing. It stores data in content-addressed Prolly Trees, enabling row-level versioning, efficient structural sharing across versions, and fast diffs and merges.

Following the first major version released three years ago, Version 2.0 adds automated garbage collection and archive compression enabled by default, adaptive storage, vector support in beta, and improved performance, with the team claiming the database is now faster than MySQL on sysbench. [Tim Sehn](https://www.linkedin.com/in/timothysehn/), founder and CEO of DoltHub, explains why garbage collection matters:

> Dolt makes a lot of disk garbage, especially during import. Dolt is copy-on-write so all intermediate committed transaction state is preserved to disk. Any intermediate state that is not in a Dolt commit is garbage and can be collected (...) Dolt already must preserve all history in the commit graph on disk. Adding extra garbage can eat through your disk very quickly.

![](https://www.infoq.com/news/2026/07/dolt-version-control/news/2026/07/dolt-version-control/en/resources/1c719463f830464444cce6a285c5a4125cc88710480ad62d28a3108f60a25739b-1783069316047.jpg)

*Source: Dolt blog*

The database adds a new on-disk format called "archives" that is designed to reduce the storage footprint by 30-50% through dictionary compression to deduplicate storage. Discussing how the team used sysbench to measure and benchmark the latency of SQL queries across versions, Sehn claims:

> We started at about 10X slower on reads and 20X slower on writes than MySQL. We’ve worked tirelessly to improve Dolt’s performance and we are now 13% faster than MySQL on writes and 5% faster on reads.

Dolt 2.0 also introduces beta support for [version-controlled vector indexes](https://www.dolthub.com/blog/2025-06-23-vector-index-deep-dive/), using [MariaDB's Vector type](https://www.dolthub.com/blog/2025-09-03-improving-vector-performance/). According to the announcement, Dolt is the only database that version-controls vectors, and beta status will be removed once the remaining read-path gaps are fixed.

Dolt is not the only Git-like tool for data versioning, with different projects taking different approaches to versioning data without duplicating large datasets; popular alternatives include [LakeFS](https://lakefs.io/), a data version control solution for data lakes, and [Nessie](https://github.com/projectnessie/nessie), a transactional catalog for data lakes with Git-like semantics. While Dolt is generally available and provides a MySQL query interface, [DoltgreSQL](https://www.doltgres.com/), the Postgres-compatible version of Dolt, shares the same storage engine and implements the same version control interfaces, but is currently in beta.

[Simon Späti](https://www.linkedin.com/in/sspaeti/) wrote a series of articles explaining what a [Git-inspired approach to data is](https://motherduck.com/blog/git-for-data-part-1/) and [comparing the different available options](https://motherduck.com/blog/git-for-data-part-2/). Späti writes:

> Git-like workflows are becoming table stakes. Maybe not today or tomorrow, but with the right tools and changes in workflow we can achieve significantly better change management, testing on production data, fast rollbacks, isolated experiments, and most importantly, peace of mind when deploying changes.

Dolt is [available on GitHub](https://github.com/dolthub/dolt) under an Apache 2.0 license.

## About the Author

#### **Renato Losio**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/dolt-version-control/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。