---
title: "Article: When Should You Use Liquid Clustering? Benchmarking Lakehouse Layout Strategies"
date: 2026-10-13 10:46:35
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Key Takeaways - No single storage layout is universally optimal for lakehouse analytics: The right c"
source_url: "https://www.infoq.com/articles/liquid-clustering-lakehouse-layout/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-12T11:00:00.000Z　|　采集：2026-10-13 10:46:35

## 正文

### Key Takeaways

-   No single storage layout is universally optimal for lakehouse analytics: The right choice is workload-dependent, because using Liquid Clustering, ZOrder, or Partitioning incorrectly can materially impact cost and latency.
-   ZOrder has a hidden failure mode. When a date column appears as a secondary or tertiary clustering key, time range queries perform significantly worse than on a simple date-partitioned table.
-   Bytes scanned is a misleading performance proxy. Liquid Clustering delivers the lowest latency on point lookups despite scanning more raw data than ZOrder.
-   Liquid Clustering should be the default for any team whose query patterns are diverse or evolving and outperforms ZOrder on most workloads while eliminating the operational burden of manual OPTIMIZE jobs and periodic full table rewrites.
-   Before finalizing any layout strategy, ask yourself: ”Do my top queries consistently filter on the same two or three columns? If the answer is yes, ZOrder those columns. Otherwise, choose Liquid Clustering.

## Introduction

No single storage layout is universally optimal for lakehouse analytical systems. Across four workload types benchmarked on Delta Lake, Liquid Clustering delivers the lowest latency for point lookups, time-range aggregations, and large aggregations. Liquid Clustering should be the default for teams whose query patterns are diverse or evolving. ZOrdering performed better only for stable, highly selective multicolumn predicate workloads where the filter columns precisely match the clustering key.

[Partitioning](https://learn.microsoft.com/en-us/azure/well-architected/design-guides/partition-data), [ZOrdering](https://delta.io/blog/2023-06-03-delta-lake-z-order/), and [Liquid Clustering](https://delta.io/blog/liquid-clustering/) each take a fundamentally different approach to organizing data on disk; understanding the tradeoffs is key to choosing the right one for your workload. Two of my findings stand out because they run counter to how these layouts are usually described and because they are the kind of thing that could be silently degrading a production system right now,

### ZOrder’s Hidden Failure Mode on Date Ranges

When a date column sits as a secondary or tertiary key in a ZOrder clustering expression, time-range queries perform significantly worse than a simple date-partitioned table, seventy-eight percent slower in this benchmark. Sequential date values are dispersed across files, destroying the range-scan efficiency that partitioning provides for free. If your team ZOrdered on multiple columns and date is not the first key, this is almost certainly affecting your time-range query performance.

### Liquid Clustering’s Precision Gap on Multicolumn Filters

When a query predicate precisely matches a stable set of filter columns, ZOrder’s file pruning is close to optimal and Liquid Clustering can be nearly five times slower while scanning ten times more data. Liquid Clustering’s broader locality optimization trades deterministic pruning for workload flexibility. That trade-off becomes a liability exactly when queries are narrow and predictable.

#### Related Sponsors

-   ##### [AI's Physical Constraints: How AI Rewired the Data Center](https://www.infoq.com/url/f/b8f3710f-b433-4def-86d9-6687c10210f6/)
    

These results matter because physical data layout is one of the most consequential and least discussed decisions in lakehouse engineering while the trade-offs between partitioning, ZOrdering, and Liquid Clustering are usually described conceptually rather than measured.

Most published comparisons either come from Databricks itself or reason about the trade-offs from first principles without measuring actual query behavior. The questions behind this benchmark were shaped directly by production challenges I encountered while architecting Delta Lake platforms at TCS UK (civil aerospace) and IBM (Shell Maritime), where layout decisions have direct implications for pipeline SLA compliance and cloud compute cost.

My practical recommendation, before you commit to a layout strategy, is to run your top three query patterns against all three configurations, partitioned, ZOrdered, and Liquid Clustered, on a representative sample of your own data. The results below, from a controlled benchmark comparing all three layout strategies across four analytical workload types on a fifty-million-record dataset using real Databricks query profiles, may surprise you as much as they surprised me.

#### What This Means in Practice

Taken together, the results map out a clear decision framework based on workload type:

**Workload Type**

**Best Layout**

**Why**

**Point Lookup**

Liquid Clustering

Superior intra-file locality reduces seek overhead

**TimeRange Aggregation**

Liquid Clustering

Sequential locality outperforms ZOrder's dispersed date values

**MultiColumn Selective Filter**

ZOrder

Precise file pruning 10x less data scanned

**Large Aggregation**

Liquid Clustering

Hilbert curve locality wins for full scan workloads

Perhaps the single most actionable insight in this article is a deceptively simple diagnostic question that practitioners should ask before committing to any layout strategy: do my top queries consistently filter on the same two to three columns? The answer to this question alone can determine whether composite partitioning will yield meaningful gains or introduce unnecessary complexity.

If the answer is yes and those columns are known and stable, use ZOrder on exactly those columns to ensure the most selective column is listed first. If the answer is no, or if query patterns are likely to evolve, use Liquid Clustering as the default. Liquid Clustering wins on three out of four workload types and removes the operational overhead of manual OPTIMIZE scheduling. A decision helper written in Python is available on [GitHub](https://github.com/kushalvishwak/Article-infoQ-/blob/main/decision_helper.py).

The sections below lay out the methodology, results, and analysis behind these recommendations, the how and why, for readers who want to verify the findings before applying them.

## Experiment Setup

Below are the dataset, layout configuration, workloads, and results from the analysis.

### Dataset

A synthetic transactional dataset of fifty million records was generated to simulate a retail purchase environment, with the following schema:

```
customer_id   INT         uniform distribution, range 12,000,000
txn_date      DATE        spanning 20192023
region        STRING      categorical: EU, US, APAC, LATAM (skewed toward EU/US)
amount        FLOAT       rightskewed, simulating highvalue outliers
product_cat   STRING      categorical, 12 categories
```

The mix of uniform and skewed distributions was deliberate, with parameters calibrated against empirically observed access-frequency patterns in production traces. Specifically, skew parameters such as Zipf α = 1.2 for customer segments and an 80/20 partition hot-spot split were chosen to match the distribution of query volume seen in real workloads. These values were not selected arbitrarily but derived from production telemetry, where the top twenty percent of customer segments consistently account for approximately eighty percent of query traffic, ensuring the synthetic dataset reflects real-world hot partitions and demand skew.

### Layout Configuration

```
Partitioned table
df.write.format('delta').partitionBy('txn_date').saveAsTable('lc_partitioned')
 ZOrdered table
spark.sql('OPTIMIZE lc_zorder ZORDER BY (customer_id, region, txn_date)')
 Liquid Clustered table
spark.sql('''
  CREATE TABLE lc_liquid
  CLUSTER BY (customer_id, region, txn_date)
  AS SELECT * FROM source_data
''')
```

### Workloads

All the queries can be found on [GitHub](https://github.com/kushalvishwak/Article-infoQ-/blob/main/LC_workloads.py).

### Results

#### W1: Point Lookup

Liquid Clustering achieved the lowest latency at 1.003 seconds, forty-nine percent faster than the partitioned baseline, despite scanning more raw data than ZOrder. This is the first counterintuitive result, which produced better performance from reading more bytes. The explanation is intra-file sequential locality. Liquid Clustering's Hilbert curve organization colocates related customer\_id values within files more effectively, reducing disk seek overhead and increasing scan throughput. ZOrder reduces bytes read through file pruning, but the overhead of accessing more files offsets this advantage.

**Layout**

**Runtime (median)**

**Data Read**

**Notes**

**Partitioned**

1.972s

737.47 MB

Baseline

**ZOrder**

1.437s

369.09 MB

50% less data, slower

**Liquid Clustering**

1.003s ✓

784.86 MB

Best latency

#### W2: TimeRange Aggregation

Liquid Clustering again achieved the lowest latency at 659 milliseconds. ZOrder's underperformed relative to the partitioned baseline: ZOrder took 1.845 seconds versus partitioning's 1.038 seconds, seventy-eight percent slower. The ZOrder clustering key was (`customer_id`, `region`, `txn_date`), making `txn_date` a tertiary key. This disperses sequential date values across files, destroying the daterange scan efficiency that simple partitioning provides for free. If your team ZOrders on multiple columns and the date is not the first key, this is almost certainly affecting your timerange query performance.

**Layout**

**Runtime (median)**

**Data Read**

**Notes**

**Partitioned**

1s 038ms

449.69 MB

Date partition helps

**ZOrder**

1s 845ms

306.80 MB

78% slower than partition

**Liquid Clustering**

659ms ✓

449.19 MB

Best latency

![](https://www.infoq.com/articles/liquid-clustering-lakehouse-layout/articles/liquid-clustering-lakehouse-layout/en/resources/1figure-1a-1791465983043.jpg)

**Figure 1a. Range aggregation, partitioned table. [Source here](https://github.com/kushalvishwak/Article-infoQ-).**

![](https://www.infoq.com/articles/liquid-clustering-lakehouse-layout/articles/liquid-clustering-lakehouse-layout/en/resources/2figure-1b-1791465983043.jpg)

**Figure 1b. Range aggregation, ZOrdered table. [Source here](https://github.com/kushalvishwak/Article-infoQ-).**

![](https://www.infoq.com/articles/liquid-clustering-lakehouse-layout/articles/liquid-clustering-lakehouse-layout/en/resources/1figure-1c-1791465983043.jpg)

**Figure 1c. Range aggregation, Liquid Clustered table. [Source here](https://github.com/kushalvishwak/Article-infoQ-).**

#### W3: MultiColumn Selective Filter

This workload produced the sharpest reversal. ZOrder achieved 615 milliseconds and read only 59.03 megabytes. Liquid Clustering took 2.967 seconds and read 639.95 megabytes, nearly five times slower and scanning ten times more data. When the query predicate precisely matches the ZOrder clustering key combination, ZOrder's file pruning is near optimal. Liquid Clustering's broader locality optimization, designed for workload diversity, becomes a liability here, because it cannot achieve the same level of precise file elimination unlike ZOrder, which locks onto a fixed column order to eliminate files precisely, Liquid Clustering trades that precision for flexibility and on this workload, that tradeoff costs it. If your workload is dominated by stable, highly selective multicolumn filters on known columns, ZOrder is still the right choice.

**Layout**

**Runtime (median)**

**Data Read**

**Notes**

Partitioned

622ms

128.09 MB

Moderate pruning

ZOrder

615ms ✓

59.03 MB ✓

Optimal pruning

Liquid Clustering

2.967s

639.95 MB

5x slower worst case

![](https://www.infoq.com/articles/liquid-clustering-lakehouse-layout/articles/liquid-clustering-lakehouse-layout/en/resources/2figure-2a-1791465983043.jpg)

**Figure 2a. Multicolumn filter partitioned table. [Source here](https://github.com/kushalvishwak/Article-infoQ-).**

![](https://www.infoq.com/articles/liquid-clustering-lakehouse-layout/articles/liquid-clustering-lakehouse-layout/en/resources/1figure-2b-1791465983043.jpg)

**Figure 2b. Multicolumn filter ordered table. [Source here](https://github.com/kushalvishwak/Article-infoQ-).**

![](https://www.infoq.com/articles/liquid-clustering-lakehouse-layout/articles/liquid-clustering-lakehouse-layout/en/resources/1figure-2c-1791465983043.jpg)

**Figure 2c. Multicolumn filter Liquid Clustered table. [Source here](https://github.com/kushalvishwak/Article-infoQ-).**

#### W4: Large Aggregation

For a full dataset SUM aggregation grouped by region (using the same query as W2 but run without predicate filtering across the entire dataset to clarify the benchmark numbers), Liquid Clustering again achieved the lowest latency (659 milliseconds) with ZOrder the slowest (1.845 seconds). For full scan workloads file pruning provides no benefit; the determinant of performance shifts to intra-file read efficiency and task scheduling, both of which favor Liquid Clustering's Hilbert curve locality.

**Layout**

**Runtime (median)**

**Data Read**

**Notes**

Partitioned

1s 038ms

449.69 MB

Acceptable

ZOrder

1s 845ms

306.80 MB

Slowest no pruning benefit

Liquid Clustering

659ms ✓

449.19 MB

Best latency

## Discussion

The same two mechanisms explain the results across all four workloads: file-pruning efficiency, how much data a layout avoids reading, and intra-file locality, how efficiently the read data is scanned. ZOrder and partitioning compete primarily on pruning. Liquid Clustering wins primarily on locality, via its Hilbert curve organization, even when it reads more bytes than ZOrder. Where a query precisely matches a stable clustering key, pruning dominates and ZOrder wins (W3). Where it doesn’t, or a full scan is unavoidable, locality dominates and Liquid Clustering wins (W1, W2, W4). The ZOrder date-range failure mode (W2) is the same pruning-versus-locality trade-off viewed from the other side. Making date a tertiary key sacrifices the sequential locality that a date partition gives away for free, without buying back enough pruning benefit to compensate.

## Caveats

These benchmarks use a synthetic dataset to ensure reproducibility and avoid client data exposure. Real production datasets carry additional complexity, schema drift, access pattern seasonality, and domain-specific skew that may shift the relative performance of each layout. The findings presented here should be treated as a directional guide and validated against your own workload profile before making irreversible schema decisions.

Additionally, I did not measure the write amplification cost of the I/O and the compute overhead of maintaining each layout as new data arrives. Liquid Clustering's incremental approach has a lower write time cost than ZOrder's periodic full table rewrites, but this was not experimentally measured and warrants separate investigation.

## Conclusion

No single storage layout is universally optimal for lakehouse analytical systems. Liquid Clustering outperforms on latency for point lookups, range scans, and large aggregations, and should be the default for teams with diverse or evolving workloads. ZOrdering performs better for stable, highly selective multicolumn predicate workloads where the filter columns precisely match the clustering key.

The two most practically significant findings, ZOrder's degradation on range scans when date is a secondary key, and Liquid Clustering's five times latency penalty on precise multicolumn filters, are failure modes that are not documented and are likely affecting production systems today.

Run your top three query patterns against all three layout configurations on a representative data sample. The results may surprise you.

## About the Author

#### **Kushal Kumar Vishwakarma**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/articles/liquid-clustering-lakehouse-layout/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。