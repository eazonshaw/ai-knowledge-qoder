---
title: "Uber Eats Rebuilds Search Pipeline to Cut End-to-End Latency by 50%"
date: 2026-10-04 08:14:44
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Uber has rebuilt major parts of the Uber Eats search pipeline(https://www.uber.com/us/en/blog/uber-e"
source_url: "https://www.infoq.com/news/2026/10/uber-eats-search-latency/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-02T14:22:00.000Z　|　采集：2026-10-04 08:14:44

## 正文

Uber has rebuilt major parts of the [Uber Eats search pipeline](https://www.uber.com/us/en/blog/uber-eats-search-pipeline/) and reports a 50% reduction in end-to-end search latency. The changes span retrieval, feature hydration, ranking, advertising, presentation, and infrastructure, while an agentic coding workflow was also used to identify, benchmark, and validate additional optimizations.

The work began with a change in the primary latency metric. Instead of focusing on backend API response time, Uber began measuring [Above-the-Fold completion](https://en.wikipedia.org/wiki/Above_the_fold), defined as the time until the first screen of results is rendered with images. Pagination with server-side caching reduced the initial response, while asynchronous rendering allowed result items to be processed concurrently. Uber reports that these changes improved Above-the-Fold latency by more than 200 milliseconds.

![](https://www.infoq.com/news/2026/10/uber-eats-search-latency/news/2026/10/uber-eats-search-latency/en/resources/1ubereatssearch-1789857085350.jpeg)

*Uber Eats search pipeline architecture (Source: [Uber Blog Post](https://www.uber.com/us/en/blog/uber-eats-search-pipeline/))*

Uber reduced retrieval work after finding that tens of thousands of candidates were hydrated before ranking, and discarded many of them. Removing low-value retrieval strategies cut about 120 milliseconds, while product-level embeddings reduced data lookups by more than 100 times and saved another 50 milliseconds. Separating ranking hydration from presentation data reduced latency by more than 100 milliseconds, with dependency removal and request hedging contributing another 35 and 40 milliseconds, respectively. The advertising path was redesigned with column-oriented bid data, in-memory access, and less serialization, reducing latency by about 130 milliseconds. Additional infrastructure changes included parallel encoding, smaller embeddings, connection management improvements, and Go data structure changes to reduce garbage collection overhead.

The approach has drawn attention from engineers discussing the work publicly. [Anubhooti Nagar](https://www.linkedin.com/in/anubhooti-nagar20/) described the [performance challenge](https://lnkd.in/p/gyRWzD3S) as,

> It’s less about doing things faster and more about doing less work and avoiding unnecessary waiting.

Nagar also highlighted Uber’s

> Measure, Identify, Fix, Validate loop as a model for continuous performance optimization.

[Pratik Dhanave](https://www.linkedin.com/in/pratikdhanave/) emphasized that the result came from incremental optimization rather than a single architectural change, [describing](https://lnkd.in/p/g629Vqm8) it as no single big idea behind it, but a long list of careful decisions across the full stack. He pointed to changes across latency measurement, hydration, advertising, and infrastructure as examples.

[Vidya Pandey](https://www.linkedin.com/in/vidyapatipandey/) distilled those changes into three principles: Do less work. Start work earlier. Remove unnecessary dependencies. Pandey also connected Uber’s planned [microbatching](https://en.wikipedia.org/wiki/Data_transformation_\(computing\)) approach with techniques used in AI systems to reduce synchronization between processing stages.

The changes build on Uber’s existing search platform, which has previously been described as using Apache Lucene, Spark-based indexing, Kafka-based streaming updates, and a distributed serving layer. [InfoQ’s previous coverage of Uber’s search architecture](https://www.infoq.com/presentations/optimization-search-uber/) provides additional context on the platform’s earlier indexing and query execution work.

Uber is now exploring end-to-end microbatching, product-based retrieval, Zero Pass Ranking, and HTTP multipart streaming. The company reports that early product-based search testing has produced more than a 50% reduction in p99 latency. The planned changes allow processing stages to overlap rather than waiting for entire preceding stages to complete.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/uber-eats-search-latency/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。