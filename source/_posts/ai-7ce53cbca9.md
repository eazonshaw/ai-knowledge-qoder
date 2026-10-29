---
title: "Meta 利用私有处理技术将机密计算扩展至 AI 眼镜"
date: 2026-10-29 09:25:01
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "Meta 已将“私有处理”（Private Processing）功能扩展至 AI 眼镜(https://engineering.fb.com/2026/09/23/security/private-"
source_url: "https://www.infoq.cn/article/r1ibrq9kmZ1qFAWAtzJf?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-28　|　采集：2026-10-29 09:25:01

## 正文

[Meta 已将“私有处理”（Private Processing）功能扩展至 AI 眼镜](https://engineering.fb.com/2026/09/23/security/private-processing-meta-ai-glasses/)，利用机密虚拟机（CVM）处理敏感 AI 工作负载，并在云端持久化保存用户的上下文信息。该设计融合了可信执行环境（TEE）、远程认证、匿名凭证、OHTTP 以及加密存储技术。Meta 表示，该功能支持流式转录、上下文搜索以及需要更多计算能力和持久状态的长期记忆召回功能。

通话和消息等基础交互可以在 AI 眼镜上运行，但更复杂的工作负载则需要更大的模型，并且需要访问随时间积累的个人上下文信息。Meta 于 2025 年针对 WhatsApp 和 Meta AI 推出了“私有处理（Private Processing）”功能，现在将其扩展到了可穿戴 AI 工作负载。

在 LinkedIn 上，Meta 公司 XR 技术副总裁 [Oskar Linde](https://www.linkedin.com/in/oskarlinde/) 将这一方法[描述](https://lnkd.in/p/gXiPyqga)为：在确保 Meta 无法访问相关数据的同时，让 AI 能在全天使用中发挥更大的作用，而且满足 AI 眼镜所需的有状态、个性化场景需求。

该架构将机密计算边界从设备端转移至 Meta 的云基础设施中。AI 模型在由硬件 [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment) 支持的[机密虚拟机](https://www.redhat.com/en/blog/introduction-confidential-virtual-machines)（CVM）内运行，其中配备了处理器加密的内存。Meta 表示，其边界覆盖 CPU 和 GPU，可以确保混合工作负载始终受到保护。

在传输个人上下文之前，AI 眼镜会执行远程认证，并与 TEE 建立经过认证的 TLS 会话。设备会验证经硬件签名的证书，并将工作负载测量值与仅可追加的透明账本进行比对。如果验证失败，则将阻止数据传输。匿名凭证以及由 Fastly 或 Cloudflare 运营的第三方 OHTTP 中继则进一步将用户身份与请求处理分离。

![](/ai-knowledge-qoder/_imgs/13a248601c7c200c.jpg)

持久化状态始终保留在机密计算边界之内。Meta 将存储引擎置于 TEE 内，并在数据离开受保护环境之前使用用户提供的密钥对其进行加密。查询也是在同一边界内执行，限制了数据库访问模式的暴露。

私有处理基于硬件隔离、故障关闭保证、公开可验证性、不可被针对性识别以及加密存储构建。生产环境 CVM 镜像会在透明账本中进行注册。由于工程师无法检查受保护的内存，也无法捕获模型的输入和输出，所以 Meta 使用了 CPU 利用率、内存分配、网络延迟和硬件故障率等聚合运营信号。

始终在线的可穿戴 AI 所涉及的隐私问题也引发了社区讨论。在 Reddit 上一个关于 Meta 眼镜的[讨论](https://www.reddit.com/r/technology/comments/1wpu23e/comment/pbyqoh0/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)中，有评论者提出，要让智能助手提供上下文相关信息，就必须持续监听、观测周边环境，这也凸显了持续感知模式下的隐私风险问题。

部署方面仍然存在局限。[WIRED](https://www.digitaltrends.com/home-theater/meta-knows-its-smart-glasses-have-a-privacy-problem-so-its-locking-itself-out/) 杂志报道称，Meta AI 眼镜目前尚未支持“私有处理”功能，Meta 也未明确说明哪些功能将率先采用该系统，也未提供具体的上线时间表。Meta 工程总监 Pritam Shah 表示，该平台已经准备就绪而且运行正常，但 Meta 在广泛部署前进行公告，是为了与安全和隐私研究人员以及第三方审计机构展开合作。

Meta 表示，正与包括 NCC Group 在内的独立安全公司及安全研究人员合作，共同审查该系统的架构和认证机制。随着该系统为支持具备状态感知能力、多模态及自主性的 AI 体验而不断扩展，该公司还计划向研究人员提供 CVM 二进制文件、工具及文档。

原文链接：[https://www.infoq.com/news/2026/10/meta-private-process-ai-glasses/](https://www.infoq.com/news/2026/10/meta-private-process-ai-glasses/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/r1ibrq9kmZ1qFAWAtzJf?utm_source=rss&utm_medium=article）。