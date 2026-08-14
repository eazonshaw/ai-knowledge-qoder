---
title: "Cloudflare Migrates JavaScript CDN Serving 9B Requests a Day to Its Developer Platform"
date: 2026-08-15 06:13:16
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare has migrated cdnjs(https://blog.cloudflare.com/cdnjs-dev-platform-migration/), its open s"
source_url: "https://www.infoq.com/news/2026/08/cloudflare-cdnjs-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-14T14:42:00.000Z　|　采集：2026-08-15 06:13:16

## 正文

Cloudflare has migrated [cdnjs](https://blog.cloudflare.com/cdnjs-dev-platform-migration/), its open source CDN for JavaScript and CSS libraries, entirely to its Developer Platform, replacing publishing infrastructure spread across Cloudflare and Google Cloud Platform with Workers, R2, Workflows, Queues, Durable Objects, KV, and Containers. The migration also moved R2 into the role of source of truth for published package files while preserving existing URLs, package contents, and Subresource Integrity (SRI) hashes.

Cloudflare [said](https://www.linkedin.com/posts/cloudflare_dogfooding-at-scale-migrating-cdnjs-to-cloudflare-activity-7488580422432534529-efad?utm_source=share&utm_medium=member_desktop&rcm=ACoAAArnikgBqzTxA9Y838-O55QUcB2McACIq94) cdnjs now serves approximately 9 billion requests per day, averaging 108,000 requests per second across more than 330 Cloudflare data centers. The service reports a 98.6% cache hit rate and is used by approximately 12% of websites. Cloudflare described the migration as an example of [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) its Developer Platform at the scale of a widely used public service.

The migration builds on a [2020 architectural change](https://blog.cloudflare.com/migrating-cdnjs-to-serverless-with-workers-kv/) in which Cloudflare moved cdnjs file serving to [Workers](https://developers.cloudflare.com/workers/) and [Workers KV](https://developers.cloudflare.com/kv/), replacing dedicated origin machines for normal traffic while retaining an external origin as a fallback. Cloudflare also introduced precompressed Brotli and gzip assets to improve delivery efficiency.

The publishing path, however, remained distributed. Google Cloud Functions periodically checked npm for package releases, Google Cloud Storage held packages, Pub/Sub handled messaging, and a virtual machine running git-sync synchronized repository content. The system used 26 Cloud Functions divided into alphabetic shards to monitor package updates. At the same time, the GitHub repository had grown beyond 1.1 TB of packed storage, while published files were represented in both GitHub and KV.

![](https://www.infoq.com/news/2026/08/cloudflare-cdnjs-migration/news/2026/08/cloudflare-cdnjs-migration/en/resources/1cdjnprevious-1786326571811.jpeg)

*Previous cdnjs publishing and serving architecture (Source: [Cloudflare Blog Post](https://blog.cloudflare.com/cdnjs-dev-platform-migration/))*

The new architecture makes [Cloudflare R2](https://developers.cloudflare.com/r2/) the source of truth for published files. KV stores package metadata, versions, and SRI hashes, while a Worker handles requests and [Workers Cache](https://developers.cloudflare.com/workers/runtime-apis/cache/) provides the caching layer. Published content is additionally mirrored to DigitalOcean Spaces as a fallback if R2 cannot serve a file.

Package ingestion is now orchestrated through [Cloudflare Workflows](https://developers.cloudflare.com/workflows/). A scheduled workflow checks npm and GitHub for releases, downloads packages into R2, and launches processing workflows for individual files. The processing pipeline extracts package contents, minifies and compresses assets, stores the resulting files in R2, updates metadata in KV, and refreshes the Algolia search index. Workflow state allows processing to resume from the last completed step after a failure.

![](https://www.infoq.com/news/2026/08/cloudflare-cdnjs-migration/news/2026/08/cloudflare-cdnjs-migration/en/resources/1cdjn-new-1786326571811.jpeg)

New cdnjs architecture using R2, Workers, KV, and Workflows. *(Source: [Cloudflare Blog Post](https://blog.cloudflare.com/cdnjs-dev-platform-migration/))*

Compression presented a constraint because the existing processing algorithms require an entire library to be buffered in memory. Cloudflare therefore uses [Containers](https://developers.cloudflare.com/containers/) for compression rather than running the processing directly in Workers. Cloudflare said it is exploring streaming support that could eventually allow this processing to move to Workers.

Preserving package bytes was critical because changes to minification or compression could alter SRI hashes. The migration also exposed platform limits, prompting Cloudflare to raise Worker subrequests from 1,000 to 10 million and Workflow steps from 1,024 to 10,000, with up to 25,000 configurable. The resulting architecture uses R2 for artifacts, KV for metadata, Workers for delivery, and Workflows for publishing.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/cloudflare-cdnjs-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。