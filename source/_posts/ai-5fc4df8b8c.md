---
title: "Linus 使用 Claude 辅助对内核进行迟到已久的历史清理"
date: 2026-10-26 07:41:08
categories:
  - AI 新闻
  - OSChina 资讯
tags:
  - AI
  - OSChina 资讯
excerpt: "Linus Torvalds 对 Linux Kernel 进行了一个「迟到已久的清理」：把 \\get\user() 和 \\put\user() 这两个历史悠久的函数从内核里删掉了。他在 comm"
source_url: "https://www.oschina.net/news/503166"
---
> 来源：OSChina 资讯　|　原发布：2026-10-23T02:43:07.000Z　|　采集：2026-10-26 07:41:08

## 正文

Linus Torvalds 对 Linux Kernel 进行了一个「迟到已久的清理」：把 \_\_get\_user() 和 \_\_put\_user() 这两个历史悠久的函数从内核里删掉了。他在 commit message 里写得很直白——「这早就该做了：\_\_get\_user() 和 \_\_put\_user() 完全是历史遗留，永远不是正确选择，而且还被误用」。 \_\_get\_user() 和 \_\_put\_user() 是内核里...


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：OSChina 资讯（https://www.oschina.net/news/503166）。