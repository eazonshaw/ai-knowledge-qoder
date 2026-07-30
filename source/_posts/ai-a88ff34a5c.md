---
title: "AWS Lambda's Self-Managed Code Storage Lifts the Account Quota, Not the Function Size Limit"
date: 2026-07-31 06:56:50
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "AWS recently announced self-managed code storage(https://aws.amazon.com/about-aws/whats-new/2026/07/"
source_url: "https://www.infoq.com/news/2026/07/lambda-self-managed-storage/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-30T07:57:00.000Z　|　采集：2026-07-31 06:56:50

## 正文

AWS recently [announced self-managed code storage](https://aws.amazon.com/about-aws/whats-new/2026/07/lambda-self-managed-code-storage/) for Lambda, letting functions and layers reference deployment packages directly in a customer-owned S3 bucket rather than in Lambda-managed storage. The change removes the per-Region code storage quota that teams running large function fleets have historically raised through support tickets, and raises the default for Lambda-managed storage from 75 GB to 300 GB. The framing in AWS's announcement, and in the community reaction that followed, has proven easy to misread.

Julian Wood, principal developer advocate for serverless at AWS, [summarized the change on LinkedIn](https://www.linkedin.com/posts/julianrwood_aws-lambda-announces-self-managed-code-storage-activity-7483139347534401537-ECbn/) as "no storage limits: store as much function and layer code as your bucket allows," alongside a single source of truth in the customer's own account and full visibility through existing S3 metrics and lifecycle rules.

That phrasing prompted the question serverless teams will actually care about. One commenter asked whether the change meant larger models could now ship inside a function package. The answer from another developer was blunt:

> No, the same limits still apply. Now AWS can bill you for the storage and retrieval costs too.

The distinction matters as self-managed storage changes where the deployment package lives and removes the aggregate account ceiling. Yet it does not change the [per-function package limits](https://docs.aws.amazon.com/lambda/latest/dg/configuration-self-managed-storage.html), which remain 50 MB zipped and 250 MB unzipped for zip-based functions and 10 GB for container images. Teams hitting a size wall on an individual function are in exactly the same position as before.

What does change operationally is the copy step. Darryl Ruggles, an AWS Serverless Hero, [noted on X](https://x.com/RDarrylR/status/2077449200887861250) that Lambda no longer creates an intermediate copy of the package:

> With this change you can reference source code directly from your own buckets and Lambda no longer creates an intermediate copy. This can speed up function activation after creates and updates.

Ruggles added that there are no extra Lambda charges beyond standard S3 storage and any cross-Region transfer, which shifts the storage cost from an invisible Lambda-side quota to a visible line on the customer's own S3 bill.

The deployment workflow itself is unchanged. On [Reddit](https://www.reddit.com/r/aws/comments/1ux6sie/lambda_now_supports_selfmanaged_s3_buckets_for/), a practitioner asked what the benefit was given that UpdateFunctionCode still has to be called after replacing the object in S3. The reference is resolved at update time rather than continuously, so pointing Lambda at a bucket does not turn that bucket into a live code feed. Another commenter framed the value plainly:

> It is a native option that overcomes the managed storage limit, and most teams will never reach it.

Infrastructure-as-code support is still catching up: a [Terraform provider enhancement request](https://github.com/hashicorp/terraform-provider-aws/issues/48957) filed on July 15 asks for an s3\_object\_storage\_mode attribute on aws\_lambda\_function, and remains open with no implementation. Teams standardized on Terraform will need to wait or reach for the CLI and SDKs, where the parameter is available today.

Self-managed code storage is available in all commercial AWS Regions at no additional Lambda charge.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/lambda-self-managed-storage/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。