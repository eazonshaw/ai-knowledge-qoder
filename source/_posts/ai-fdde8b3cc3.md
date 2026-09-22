---
title: "Uber Redesigns M3DB Sharding with Subclusters to Limit Failure Impact"
date: 2026-09-22 08:24:55
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Uber has redesigned shard placement in M3DB(https://www.uber.com/us/en/blog/from-chaos-to-control/) "
source_url: "https://www.infoq.com/news/2026/09/uber-m3db-subcluster-sharding/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-21T14:37:00.000Z　|　采集：2026-09-22 08:24:55

## 正文

Uber has [redesigned shard placement in M3DB](https://www.uber.com/us/en/blog/from-chaos-to-control/) by introducing fixed-size subclusters to limit the impact of node failures, maintenance, and cluster scaling. The change addresses a limitation in the previous placement model, where a node failure could affect up to (n-1)/n of the cluster as shard dependencies grew.

[M3DB](https://github.com/m3db/m3) is Uber's distributed time series database, where data is divided into shards and replicated across multiple nodes. Its [placement algorithm](https://m3db.io/docs/operational_guide/placement/) determines shard ownership while enforcing isolation between replicas, such as keeping replicas in different racks or availability zones. Uber engineers emphasized that the original sharded placement model worked well for small-to-medium clusters but became more difficult to operate as clusters grew.

With the original model, any node could own a shard as long as replicas were not placed in the same isolation group. In a permissive configuration, this can create a dependency graph in which a topology change affects O(N) nodes. Even when isolation groups correspond to three zones for a replication factor of three, a node can share data with as much as 66.67% of the cluster. Uber says this can increase recovery activity and force maintenance operations to be serialized.

The new model partitions nodes into fixed-size subclusters, with each subcluster owning a distinct, nonoverlapping portion of the shard space. In Uber's example, a 12-node cluster with a replication factor of three and six nodes per subcluster contains two subclusters, each owning half of the shards. Within a subcluster, M3DB continues to distribute replicas across isolation groups.

![](https://www.infoq.com/news/2026/09/uber-m3db-subcluster-sharding/news/2026/09/uber-m3db-subcluster-sharding/en/resources/1uberm3dbcluster-1788717447686.jpeg)

*Uber's comparison of conventional sharded placement and subclustered placement (Source: [Uber Blog Post](https://www.uber.com/us/en/blog/from-chaos-to-control/))*

Scaling requires moving shards from existing subclusters to a new one. Uber uses a [greedy algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) that evaluates the effect of removing each candidate shard from the donor subcluster and selects shards that leave the remaining nodes as evenly loaded as possible. This avoids a separate rebalancing pass and the additional network transfer and bootstrap work that would result from moving shards twice. The algorithm uses O(S log S) sorting and O(S × N) simulation work, where S represents candidate shards, and N represents nodes in the subcluster.

M3DB's existing placement documentation similarly describes shard movement as a process in which destination nodes stream data from existing peers before taking ownership, making unnecessary shard movement an operational cost. Its placement model also uses isolation groups to prevent replicas from sharing a rack or availability zone.

The subcluster approach has constraints. It requires equal instance weights, scaling in multiples of the subcluster size, and a subcluster size that is a multiple of the replication factor. It also does not support changing the replica factor through AddReplica. During scaling, cross-subcluster shard sharing can occur temporarily, while only one partial subcluster is permitted at a time.

![](https://www.infoq.com/news/2026/09/uber-m3db-subcluster-sharding/news/2026/09/uber-m3db-subcluster-sharding/en/resources/1Screenshot%202026-09-06%20at%2010.39.10%E2%80%AFAM-1788717447686.png)

*Shard distribution with greedy algorithm (Source: [Uber Blog Post](https://www.uber.com/us/en/blog/from-chaos-to-control/))*

Uber retained M3DB's existing instance-level placement operations rather than introducing atomic subcluster operations. Uber team emphasized that this preserves compatibility with existing tooling and avoids triggering a large bootstrap operation in which many shards migrate simultaneously. M3DB's placement implementation now includes fields for subclustered placement and the number of instances per subcluster.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/uber-m3db-subcluster-sharding/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。