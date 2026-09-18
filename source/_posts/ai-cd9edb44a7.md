---
title: "智谱旗下 AI 编程工具 ZCode 被扒静默上传完整 Git 历史"
date: 2026-09-19 07:45:40
categories:
  - AI 新闻
  - OSChina 资讯
tags:
  - AI
  - OSChina 资讯
excerpt: "智谱的 AI 编程桌面端 ZCode，今天被扒出一个大问题。开发者 ferstar 发了一篇取证博客，说只要登录了账号，ZCode 会在后台静默把整个工作区——包括完整的 .git 历史、LFS 大文"
source_url: "https://www.oschina.net/news/502589"
---
> 来源：OSChina 资讯　|　原发布：2026-09-18T10:23:29.000Z　|　采集：2026-09-19 07:45:40

## 正文

智谱的 AI 编程桌面端 ZCode，今天被扒出一个大问题。开发者 ferstar 发了一篇取证博客，说只要登录了账号，ZCode 会在后台静默把整个工作区——包括完整的 .git 历史、LFS 大文件缓存、reflog 和全局配置——打包加密上传到阿里云 OSS。该消息马上在国内技术圈传开，有人用自己的 Mac 顺着取证路径重跑了一遍，结论是"...


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：OSChina 资讯（https://www.oschina.net/news/502589）。