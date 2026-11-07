---
title: "DigitalOcean 推出学习与数据服务，帮助 AI 智能体进行自我迭代"
date: 2026-11-07 09:27:48
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "DigitalOcean 发布 Learning Services 和 Agent Data Services 公开预览版(https://investors.digitalocean.com/new"
source_url: "https://www.infoq.cn/article/upfROwtEl8R75H24D13J?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-11-06　|　采集：2026-11-07 09:27:48

## 正文

DigitalOcean 发布 [Learning Services 和 Agent Data Services 公开预览版](https://investors.digitalocean.com/news/news-details/2026/DigitalOcean-Launches-Agent-Learning-and-Data-Services-for-Recursively-Self-Improving-AI-Agents/default.aspx)，让开发者可以在统一的 AI 原生云平台上构建、评估和持续改进 AI 智能体。

新服务基于 DigitalOcean 的 Inference Engine 和 [Managed Agents](https://www.infoq.com/news/2026/10/digitalocean-managed-agents/) 构建，智能体能够从真实世界的交互中学习、识别弱点、测试改进并使用企业自有数据：

> 我们构建 Inference Engine 是为了让智能体能够思考，构建 Managed Agents 是为了让它们能够执行动作，而现在推出 Agent Learning Services 和 Agent Data Services，是为了让它们能够持续改进——所有这一切全部运行在一个开放的云平台上，基于客户自己的数据完成。

Learning Services 包含了三种能力：Insights，用于记录智能体活动；[Signals](https://www.digitalocean.com/blog/introducing-signals-and-simulations)，用于识别失败和性能短板；以及 Simulations，用于在部署前通过模拟真实对话来测试潜在的改进。

[增强版 Inference Router](https://www.digitalocean.com/blog/inference-router-enhancements) 与 Learning Services 相互独立，但在 DigitalOcean 持续改进智能体的方案中扮演着关键角色。它根据任务需求优化模型选择，平衡成本与输出质量，并可针对新版模型重复执行同一套评估用例。

[Agent Data Services](https://www.digitalocean.com/blog/introducing-agent-data-services) 为 AI 智能体提供了一个安全的托管数据底座。它处理并索引文档、视频、音频、日志和智能体会话，使这些信息可通过具有内置治理和访问控制的统一目录进行搜索和访问。它还与 Learning Services 集成，支持智能体的持续改进：

> Agent Learning Services 基于 Data Services 构建，Signals 将会话写入 Data Services，Optimizer 仅在客户明确授权的前提下，从中提取训练、测试数据。

LakeOps 联合创始人 Jonathan Saring 在 LinkedIn 上[指出](https://lnkd.in/p/eKEJpn3j)：

> 回写循环是我觉得最有趣的部分。一旦追踪、工具调用和结果反馈到评估或学习中，它们就不再是“普通日志”，而是生产数据。

同样地，[高级工程师 Deepanshu Udhwani 认为](https://lnkd.in/p/er6q66MN)：

> 与人们都在谈论的智能体数据层的读取端相比，“回写执行结果”这件事的价值被低估了。大多数团队构建了出色的检索系统，却没有妥善记录结果，所以 6 个月后，没有人能分辨哪些工具调用真正奏效了，哪些只是当时看起来没问题。

TinyFish 联合创始人 Keith Zhai 在总结 DigitalOcean 的发布视频时[强调](https://lnkd.in/p/efFteW9S)，Signals 和 Simulations 可以在大量用户踩坑之前基于异常会话完成修复：

> Signals 和 Simulations 会在第 400 个用户遇到同样问题之前将该会话拉入修复流程。工具调用返回成功，但用户最终放弃了任务，这仍是大多数智能体技术栈的痛点。瓶颈在于是否有人能够读懂用户实际经历的那个会话。

DigitalOcean Insights、Signals 和 Evaluations（包括 Simulations）现已提供公开预览。Inference Router 优化和 Agent Data Services 则提供私有预览。

查看英文原文：[https://www.infoq.com/news/2026/10/digitalocean-self-improving-ai/](https://www.infoq.com/news/2026/10/digitalocean-self-improving-ai/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/upfROwtEl8R75H24D13J?utm_source=rss&utm_medium=article）。