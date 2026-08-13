---
title: "Tailscale 花费六个月追踪一个 16 年的 SQLite 漏洞"
date: 2026-08-14 06:32:03
categories:
  - AI 新闻
  - OSChina 资讯
tags:
  - AI
  - OSChina 资讯
excerpt: "去年年底，Tailscale 的 uptime开始变得不稳定。19 次独立的数据库损坏事件，横跨六个月——每次都是同一个 SQLite bug 在作祟。 Tailscale 控制平面内部用 SQLit"
source_url: "https://www.oschina.net/news/501911/tailscale-sqlite-wal-reset-bug"
---
> 来源：OSChina 资讯　|　原发布：2026-08-13T02:31:05.000Z　|　采集：2026-08-14 06:32:03

## 正文

去年年底，Tailscale 的 uptime开始变得不稳定。19 次独立的数据库损坏事件，横跨六个月——每次都是同一个 SQLite bug 在作祟。 Tailscale 控制平面内部用 SQLite 存储每个 tailnet 的配置元数据。每个 shard 由一个 Go 进程独占访问数据库，这是 SQLite 推荐的单写入者架构。他们从 2022 年就开始用这套方案，一直相安...


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：OSChina 资讯（https://www.oschina.net/news/501911/tailscale-sqlite-wal-reset-bug）。