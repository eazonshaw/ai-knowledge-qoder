---
title: "How Anthropic Redesigned Source Control for AI-Driven Development"
date: 2026-10-28 08:49:53
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Anthropic recently detailed how it migrated its monorepo from Git to Scion(https://www.anthropic.com"
source_url: "https://www.infoq.com/news/2026/10/anthropic-source-control/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-27T11:25:00.000Z　|　采集：2026-10-28 08:49:53

## 正文

Anthropic recently [detailed how it migrated its monorepo from Git to Scion](https://www.anthropic.com/research/redesigning-source-control). Scion is a source control system that moves repository operations to the server side and uses content-addressed storage and tiered caches for agent and CI workloads. The design sacrifices offline independence for less local data and shared infrastructure.

In its 13 October engineering post, Anthropic reported that daily merged changes rose from around 2,500 in May to more than 30,000 in September. Its CI systems perform approximately 25 million checkouts daily, against a monorepo with nearly 100 GB of main-branch history and a compressed working copy exceeding 25 GB. The company had used shallow clones, sparse checkouts, promisor remotes, repository snapshots and several hundred Git mirrors, but said these became harder to operate as merge rates increased.

![](https://www.infoq.com/news/2026/10/anthropic-source-control/news/2026/10/anthropic-source-control/en/resources/1scion-changes-merged-per-day-1792669828881.png)  
*Daily merged changes in Anthropic’s monorepo from January to September 2026. ([Source](https://www.anthropic.com/research/redesigning-source-control))*

Scion puts commits, merges, rebases, history and blame queries on the server. Clients maintain bounded object caches and virtualised checkouts materialise files on demand. Tools can query diffs and perform some writes through APIs without checking out code.

A Scion changeset records the files that have changed relative to its first parent, with content-addressed pointers to the compressed file contents in blob storage. Creating changesets is separate from updating references, so accepting changesets requires no cross-server coordination. For history and blame queries, Scion builds additional structures called "derived data", computed recursively from the parent changesets, either eagerly or on demand. This server-side implementation lets derived data evolve without changing clients.

![](https://www.infoq.com/news/2026/10/anthropic-source-control/news/2026/10/anthropic-source-control/en/resources/1scion-changeset-structure-1792669828881.png)  
*Scion changesets record changed files and references to their contents; tree structures are derived separately by the server. ([Source](https://www.anthropic.com/research/redesigning-source-control))*

For checkouts, clients ask for the missing immutable trees and blobs rather than negotiating a custom packfile. A node-local daemon shares cached objects across jobs, and fetches from regional caches, which in turn fetch from the authoritative servers (backed by Spanner and cloud storage). The regional caches stream the objects in the daemon's storage format so there's no per-request delta compression.

The tiers expose the same checkout-protocol RPCs, but Anthropic enforces their ordering to isolate failures and prevent a regional cache failure from overwhelming authoritative servers. Sparse and virtualised checkouts only request the objects that they need.

Anthropic reports cache-hit rates above 99% at each tier, a CPU and memory infrastructure footprint 200 times smaller than its previous Git mirrors, and checkout speedups of two orders of magnitude for CI and research jobs. These are company-reported results for its internal workload, not general benchmarks against Git.

[InfoQ previously covered Uber’s GitFarm](https://www.infoq.com/news/2026/08/uber-gitfarm-git-as-a-service/), which centralises standard Git operations without replacing the source-control system. Scion goes further by changing the underlying data model. Its design also builds on established work: in a 15 October update, Anthropic explicitly credited [Mononoke and its Bonsai data model](https://sunshowers.io/posts/anthropic-mononoke-2/) with pioneering many of the techniques used.

Anthropic cautions that Scion is not a general-purpose Git replacement. It requires its own code-review, code-search and CI systems, and the company’s implementations are highly bespoke. Instead, it recommends bringing selected ideas, including comprehensive server-side APIs and improved fetch protocols, into existing Git platforms.

For architects, the key takeaway is to reconsider where work happens as workloads change. Repository queries don't necessarily need local checkouts, and immutable objects can be shared via caches. This can reduce redundant work, but Scion depends on server availability, and the required integration is substantial.

## About the Author

#### **Eran Stiller**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/anthropic-source-control/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。