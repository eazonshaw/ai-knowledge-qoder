---
title: "做了个免费、无水印、只有 2.3MB 的 Mac vlog 剪辑软件，专为 M 芯片优化"
date: 2026-10-28 08:49:53
categories:
  - AI 新闻
  - OSChina 资讯
tags:
  - AI
  - OSChina 资讯
excerpt: "平时拍 vlog 用剪映，很多功能要会员，所以自己写了一个，先给自己用，顺手开源了。 FrameCut 只支持 Apple 芯片，把芯片里的专用硬件都用上了： 编解码走媒体引擎，调色和转场走 Meta"
source_url: "https://www.oschina.net/news/503234"
---
> 来源：OSChina 资讯　|　原发布：2026-10-27T03:36:51.000Z　|　采集：2026-10-28 08:49:53

## 正文

平时拍 vlog 用剪映，很多功能要会员，所以自己写了一个，先给自己用，顺手开源了。 FrameCut 只支持 Apple 芯片，把芯片里的专用硬件都用上了： 编解码走媒体引擎，调色和转场走 Metal GPU ，语音转字幕走神经网络引擎，CPU 基本闲着 M2 上实测，3 分钟 vlog 导出 1080p 约 26 秒，4K 约 95 秒，已经顶到硬件编码器的上...


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：OSChina 资讯（https://www.oschina.net/news/503234）。