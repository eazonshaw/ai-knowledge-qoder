---
title: "Cloudflare 披露 KV cache 暴露事故，全部发生在超长上下文的 prompt 上"
date: 2026-10-28 08:49:53
categories:
  - AI 新闻
  - OSChina 资讯
tags:
  - AI
  - OSChina 资讯
excerpt: "Cloudflare 昨天公开了一起租户隔离事故：8 月 27 日到 9 月 9 日期间，Workers AI 平台上的 GLM-5.3 模型（@cf/zai-org/glm-5.3）会把其他客户的请"
source_url: "https://www.oschina.net/news/503242/cloudflare-glm-kv-cache-exposure-remediation"
---
> 来源：OSChina 资讯　|　原发布：2026-10-27T07:51:31.000Z　|　采集：2026-10-28 08:49:53

## 正文

Cloudflare 昨天公开了一起租户隔离事故：8 月 27 日到 9 月 9 日期间，Workers AI 平台上的 GLM-5.3 模型（@cf/zai-org/glm-5.3）会把其他客户的请求数据混进响应里，总共 155 次，全部发生在超长上下文的 prompt 上。9 月 8 日安全研究员 Gadi Evron（Knostic 公司）通过 HackerOne 报告了这个跨请求 KV cache 暴露问题...


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：OSChina 资讯（https://www.oschina.net/news/503242/cloudflare-glm-kv-cache-exposure-remediation）。