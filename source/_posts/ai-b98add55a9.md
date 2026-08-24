---
title: "Codex CLI 的 Bedrock 接入绕过了 GPT-5.6 缓存，4 天花掉 1386 美元，85% 是白写的"
date: 2026-08-25 06:16:19
categories:
  - AI 新闻
  - OSChina 资讯
tags:
  - AI
  - OSChina 资讯
excerpt: "GitHub 上有个 Issue 值得关注。 一位开发者在使用 Codex CLI 的 Amazon Bedrock 原生 provider 接入 GPT-5.6 Sol 时，发现 4 天花掉了约 1"
source_url: "https://www.oschina.net/news/502085"
---
> 来源：OSChina 资讯　|　原发布：2026-08-24T03:08:49.000Z　|　采集：2026-08-25 06:16:19

## 正文

GitHub 上有个 Issue 值得关注。 一位开发者在使用 Codex CLI 的 Amazon Bedrock 原生 provider 接入 GPT-5.6 Sol 时，发现 4 天花掉了约 1386 美元，其中85% 花在了 prompt cache write 上，而不是真正的推理使用。 事情是这样的：Codex 在工作时会维护一个 prompt\_cache\_key，这个 key 用来标记可以复用的缓存前缀。但...


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：OSChina 资讯（https://www.oschina.net/news/502085）。