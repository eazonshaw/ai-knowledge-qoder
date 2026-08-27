---
title: "WhatsApp 测试 AI 反诈：消息无需上传云端"
date: 2026-08-27 10:26:02
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "WhatsApp 正在测试 Scam Alert(https://engineering.fb.com/2026/08/12/security/how-were-building-scam-alert"
source_url: "https://www.infoq.cn/article/wAVlMqVg7fqPjXAyFDjC?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-08-26　|　采集：2026-08-27 10:26:02

## 正文

WhatsApp 正在[测试 Scam Alert](https://engineering.fb.com/2026/08/12/security/how-were-building-scam-alert-whatsapp/)，这是一项可选择启用的端侧机器学习功能，当非联系人发来的消息符合与诈骗相关的模式时，它会向用户发出警告。此次小范围测试还公布了一项技术设计：在分类期间将消息内容保留在设备上，同时利用机密计算、差分隐私和透明度机制衡量模型性能，并防止向特定目标投放模型。

启用后，Scam Alert 会将一个小型机器学习模型下载到设备上，并利用对话结构和语言信号评估非联系人发来的消息。Meta 表示，该模型基于用户此前向 WhatsApp 举报的诈骗对话中观察到的模式进行训练。如果模型识别出疑似诈骗，用户会看到一条发送者不可见的警告，并可以选择屏蔽、举报或继续对话。用户还可以将聊天标记为可信，此后 Scam Alert 将不再标记该对话。用户还可以选择将可信聊天中最近收到的 5 条消息分享给 WhatsApp，以帮助改进该功能。

![](/ai-knowledge-qoder/_imgs/704223902d26c89b.png)

机密联邦分析的工作原理（来源：[Meta 博客文章](https://engineering.fb.com/2026/08/12/security/how-were-building-scam-alert-whatsapp/)）

该架构将消息分类与性能衡量分离开来。设备在本地将警告事件和用户操作汇总为计数。这些指标使用匿名凭据通过 Oblivious HTTP 中继传输，并在机密虚拟机内处理，机密虚拟机是可信执行环境的一种形式。客户端在传输数据前会验证机密环境中运行的代码，并检查隐私参数。聚合过程会应用最小群组阈值和差分隐私，之后只有近似的总体层面统计数据会提供给 WhatsApp。

Meta 还将模型分发视为一道安全边界。每个生产或实验模型版本及其 SHA-256 哈希值都会在部署前发布到第三方仅追加透明度账本中。客户端在加载模型前会验证账本条目、模型签名、时效性和哈希值。模型下载使用匿名凭据和 [OHTTP](https://en.wikipedia.org/wiki/Oblivious_HTTP)，而实验分组则在本地完成，从而防止服务器为单个用户选择特定的模型变体。

该方法以 [Meta 的 PAPAYA 联邦分析系统](https://www.usenix.org/conference/nsdi25/presentation/srinivas)为基础，该系统在 [USENIX](https://www.usenix.org/) NSDI 2025 上发布。PAPAYA 使用可信执行环境和端侧处理实现隐私保护联邦分析，并将分析工作负载与联邦学习区分开来。Scam Alert 将这一基础应用于消费者消息系统，在该系统中，遥测数据本身也被视为敏感信息。

Google Messages 采用了类似的方法，它为诈骗和网络钓鱼提供[实时垃圾消息防护](https://support.google.com/messages/answer/9327903?hl=en-GB)，并使用隐私保护机制进行检测。Google 还记录了部分消息安全功能所采用的端侧检测机制。这些实现的架构边界，以及在本地或通过 Google 服务执行的处理类型各不相同。

WhatsApp AI 产品营销负责人 [Stephanie Lio](https://www.linkedin.com/in/stephanielio/) [在 LinkedIn 上介绍](https://www.linkedin.com/posts/stephanielio_how-were-building-scam-alert-on-whatsapp-activity-7493435609315700738-MpIJ) Scam Alert 的设计时表示，该功能仅在设备上运行，并强调不会自动举报，用户始终掌握控制权。

![](/ai-knowledge-qoder/_imgs/b91280afb8da501f.png)

模型下载和验证工作流（来源：[Meta 博客文章](https://engineering.fb.com/2026/08/12/security/how-were-building-scam-alert-whatsapp/)）

Meta 表示，此次小范围测试将让该公司及其 [Bug Bounty 社区](https://bugbounty.meta.com/)在更广泛推出之前对实现进行压力测试。该公司正在扩大 Bug Bounty 计划的覆盖范围，将机密联邦分析管线纳入其中，并将发布机密虚拟机二进制文件以及与隐私相关的源代码组件，以供独立安全审查。

原文链接：[https://www.infoq.com/news/2026/08/whatsapp-scam-alert-beta/](https://www.infoq.com/news/2026/08/whatsapp-scam-alert-beta/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/wAVlMqVg7fqPjXAyFDjC?utm_source=rss&utm_medium=article）。