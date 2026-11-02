---
title: "AWS Capacity Largely Sold Out Through 2027, With On Demand Headroom Reserved"
date: 2026-11-02 09:08:03
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Amazon CEO Andy Jassy recently said that AWS’s large committed cloud capacity is largely sold out th"
source_url: "https://www.infoq.com/news/2026/11/aws-capacity-sold-out/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-01T08:03:00.000Z　|　采集：2026-11-02 09:08:03

## 正文

Amazon CEO Andy Jassy recently said that AWS’s large committed cloud capacity is largely sold out through 2027, with a good chunk of 2028 already allocated, while the company continues to reserve headroom for On Demand, EC2 and Bedrock.

Jassy made the remarks in a video podcast with Andreessen Horowitz co-founder Ben Horowitz and general partner Erik Torenberg, [reported by Reuters](https://www.reuters.com/business/retail-consumer/amazon-cloud-capacity-sold-out-through-2027-ceo-jassy-says-2026-10-23/) on October 23. AWS sells capacity assurance through [On-Demand Capacity Reservations and Capacity Blocks for ML](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-blocks-using.html), where a customer reserves instances in a named Availability Zone, and in the Capacity Blocks case, for a fixed window beginning on a future date. As [previously reported on InfoQ](https://www.infoq.com/news/2026/01/ec2-ml-capacity-price-hike/), AWS raised Capacity Blocks for ML rates by about 15% uniformly across every region in January, covering P5en, P5e, P5 and P4d GPU instances along with Trn2 and Trn1.

Capacity for 2026 is already gone, Jassy said, and the company could invest well beyond the roughly $220 billion in capital expenditure planned for this year without it being a poor use of capital. On the allocation itself:

> 2027 is largely sold out. We always leave a certain amount for on demand and our inference service bedrock, or EC2, but largely sold out all the big chunks. A good chunk of 2028 is sold out.

Cloud analyst David Linthicum [argued that the reporting overstated the position](https://www.linkedin.com/posts/davidlinthicum_amazons-aws-cloud-capacity-largely-sold-share-7519788009391816704-D5yd/), drawing a distinction between the pre-reserved blocks Jassy described and what an enterprise can allocate day to day:

> Of course, I suspect I can still go into the AWS console today and allocate GPU capacity for AI workloads. Maybe not the exact massive, pre-reserved, hyperscale capacity block some large model provider wants for the next three years, but that’s not exactly the same thing as "AWS is sold out."

Linthicum added that the market already carries enough confusion around reserved instances, on-demand services and committed capacity, and that headlines of this kind lead to bad assumptions and bad strategy.

[Discussion on Reddit](https://www.reddit.com/r/technology/comments/1xe33v6/amazon_cloud_capacity_sold_out_through_2027_ceo/) turned to current availability rather than the 2027 commitments. The highest-rated comment, from a developer posting as cbigsby, describes constraints on ordinary instance types:

> We’ve been seen a big rise in compute capacity issues the past month or so at work, just for regular ec2 instances. Forget spot instances we have trouble getting enough on demand. Luckily mostly tied to CI but there have been a few days where the production k8s clusters have been concerningly constrained.

Similar reports appeared elsewhere. Richard T., a technical operations manager, commented on Linthicum’s post that Microsoft has released only limited information about Azure East US capacity constraints, and that his team adopted reserved instances to secure capacity against projected growth. A commenter in [a parallel thread](https://www.reddit.com/r/investing/comments/1xedq4d/amazon_is_spending_220_billion_on_ai_and_still/) reported trouble obtaining sufficient compute from any of the three major providers, and said the constraint was not limited to GPUs.

Ian Rae, replying to Linthicum, pointed to the architectural consequence of that response:

> next thing you know, folks reserve cloud resources they are worried they might need, which is an anti-cloud pattern

AWS already ships tooling for the problem Rae describes. As [reported on InfoQ](https://www.infoq.com/news/2025/10/aws-ec2-capacity-manager/) last October, EC2 Capacity Manager aggregates capacity data into a cross-account, cross-region dashboard and reports the ratio of used to unused reserved capacity as a measure of reservation efficiency.

The $220 billion figure covers total capital expenditure rather than AI spending alone, a distinction raised by commenters in both threads. Amazon [reports third-quarter results on October 29](https://www.aboutamazon.com/md/news/company-news/amazon-earnings-q3-2026-report), where its remaining performance obligations disclosure will show how much of the committed capacity is contracted revenue.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/aws-capacity-sold-out/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。