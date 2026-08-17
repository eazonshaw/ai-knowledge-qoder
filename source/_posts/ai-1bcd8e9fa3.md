---
title: "Pi 的上下文压缩如何工作？"
date: 2026-08-18 06:14:51
categories:
  - AI 新闻
  - OSChina 资讯
tags:
  - AI
  - OSChina 资讯
excerpt: "你和 AI 编程助手聊了 30 轮。突然，它报错了。不是你的代码有问题，是对话历史太长，token 超过了上下文窗口限制。 这是所有 LLM 编程助手都必须面对的问题。Earendil 官方博客最近发"
source_url: "https://www.oschina.net/news/501967/compaction-in-pi"
---
> 来源：OSChina 资讯　|　原发布：2026-08-17T11:39:23.000Z　|　采集：2026-08-18 06:14:51

## 正文

你和 AI 编程助手聊了 30 轮。突然，它报错了。不是你的代码有问题，是对话历史太长，token 超过了上下文窗口限制。 这是所有 LLM 编程助手都必须面对的问题。Earendil 官方博客最近发表了一篇技术文章，详细解释他们的编码助手 Pi 是如何处理这个问题的——通过一个叫「compaction」的机制。 两个选择，都不完美 当上下...


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：OSChina 资讯（https://www.oschina.net/news/501967/compaction-in-pi）。