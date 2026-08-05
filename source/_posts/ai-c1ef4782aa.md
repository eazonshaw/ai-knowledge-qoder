---
title: "JioHotstar Explains the Distributed Engineering Behind Personalized Ad Requests at Streaming Scale"
date: 2026-08-06 06:49:49
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "JioHotstar has published an engineering overview of its ad request workflow(https://blog.hotstar.com"
source_url: "https://www.infoq.com/news/2026/08/jiohotstar-ad-decisioning-flow/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-05T14:09:00.000Z　|　采集：2026-08-06 06:49:49

## 正文

JioHotstar has published an engineering overview of its [ad request workflow](https://blog.hotstar.com/journey-of-an-ad-request-the-hidden-engineering-e7b7f9921e46), explaining how the streaming platform coordinates distributed services to select, deliver, and measure personalized advertisements during video playback. The architecture is designed to make real-time ad decisions within strict latency requirements while supporting large-scale streaming traffic and maintaining playback reliability.

An ad request begins when a viewer reaches an advertisement opportunity during content playback. The request contains contextual information required for ad selection, including content metadata, user context, device information, and available inventory details. The platform then processes the request through multiple backend components responsible for evaluating eligible advertisements, applying targeting rules, and generating the final response returned to the video player.

![](https://www.infoq.com/news/2026/08/jiohotstar-ad-decisioning-flow/news/2026/08/jiohotstar-ad-decisioning-flow/en/resources/1Screenshot%202026-08-02%20at%203.54.09%E2%80%AFPM-1785711446360.png)

*Flowchart indicating the steps taken in the ad server for decisioning (Source: [JioHotstar Blog Post)](https://blog.hotstar.com/journey-of-an-ad-request-the-hidden-engineering-e7b7f9921e46)*

The ad decision workflow involves multiple stages rather than a single lookup operation. JioHotstar describes using a waterfall tiering approach combined with pacing algorithms such as [PID](https://arxiv.org/pdf/1905.10928) and [SHALE](https://research.google/pubs/shale-an-efficient-algorithm-for-allocation-of-guaranteed-display-advertising-2/) to select a small number of advertisements for a 30-second ad pod from thousands of eligible candidates. These calculations help balance campaign delivery requirements, inventory allocation, and advertiser constraints while completing ad selection and response generation within 100 milliseconds, including during high concurrency events such as major live sports moments.

Commenting on the engineering post, [Pawan Nagar](https://www.linkedin.com/in/pawan-nagar-5176182a/), Engineering Leader, [noted](https://www.linkedin.com/feed/update/urn:li:activity:7484916237358182400?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7484916237358182400%2C7489633744228896768%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287489633744228896768%2Curn%3Ali%3Aactivity%3A7484916237358182400%29) that ad serving involves backend challenges beyond API communication:

> Serving an ad is much more than just calling an API. Managing low latency, handling huge traffic, using caching, and keeping services reliable are the real backend challenges.

The platform supports multiple advertising formats, including [pre-roll](https://en.wikipedia.org/wiki/Video_advertising) and mid-roll video advertisements, along with display-based formats integrated into the streaming experience. After an advertisement is delivered, additional systems collect delivery signals such as impressions and engagement events to support campaign reporting and measurement.

[Ayush Kumar](https://www.linkedin.com/in/ayushk23/) describes engineering challenge involves coordinating services responsible for advertisement inventory, decisioning, content metadata, tracking, and analytics while maintaining low latency. Distributed ad platforms also need mechanisms for handling failures, retries, and partial service availability so that temporary issues in individual components do not disrupt playback. Operating these systems requires collaboration between advertising, platform engineering, and reliability teams to validate campaign behavior, monitor service health, and troubleshoot issues across the request path.

The architecture described by JioHotstar follows patterns used across digital advertising platforms. OpenRTB, an industry standard maintained by the Interactive Advertising Bureau (IAB), defines communication protocols between advertising buyers and sellers in programmatic advertising ecosystems. [IAB Tech Lab OpenRTB Specification](https://iabtechlab.com/standards/openrtb/?utm_source=chatgpt.com), while OpenRTB focuses on interoperability between advertising participants, streaming platforms typically build additional internal services for personalization, content-aware targeting, and business-specific decision logic.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/jiohotstar-ad-decisioning-flow/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。