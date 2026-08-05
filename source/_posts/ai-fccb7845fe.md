---
title: "亚马逊云科技发布 GuardDuty Investigation Agent：让 AI 帮安全团队追查攻击线索"
date: 2026-08-06 06:49:49
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "亚马逊云科技最近发布了 Amazon GuardDuty Investigation Agent(https://docs.aws.amazon.com/guardduty/latest/ug/gua"
source_url: "https://www.infoq.cn/article/YZEahCZsDt3lZhHYvLPX?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-08-05　|　采集：2026-08-06 06:49:49

## 正文

亚马逊云科技最近发布了 [Amazon GuardDuty Investigation Agent](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-investigation.html)公共预览版，这是一款由 AI 驱动的安全工具，可以评估安全发现结果（findings）、关联历史活动，并在 亚马逊云科技 账户和组织范围内映射威胁遥测数据。

亚马逊云科技设计该工具的目标，是通过将安全发现元数据、90 天活动日志以及受影响资源拓扑整合为结构化分析报告，将安全调查流程从数小时缩短至数分钟。亚马逊云科技 于 6 月以“AI 驱动调查”（AI-powered investigations）的形式[宣布了这一能力](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-guardduty/)，并于 7 月以 Investigation Agent 的名称发布了详细介绍。

像 [Amazon GuardDuty](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html) 这样的威胁检测服务，会持续流式传输有关可疑网络行为或运行时行为的告警。然而，安全团队经常面临告警疲劳问题，以及需要手动关联分散账户和日志所带来的额外工作负担。亚马逊云科技 CISO 办公室成员 Clarke Rodgers 在 [LinkedIn](https://www.linkedin.com/posts/clarkerodgers_introducing-the-amazon-guardduty-investigation-activity-7485118406665437184-x7r7/) 上直接阐述了该产品背后的理念：

> 安全团队并不缺少检测能力，他们缺少的是调查能力。

GuardDuty Investigation Agent 通过按需评估三种不同范围内的遥测数据，解决这一瓶颈：

-   发现分析（Finding Analysis）： 评估特定的 32 字符 GuardDuty finding ID。在预览期间，它支持所有扩展威胁检测（XTD）发现结果，以及部分基础检测、S3 和 Runtime 发现结果。
    
-   账户分析（Account Analysis）： 评估单个 12 位 亚马逊云科技 账户当前的威胁状态。
    
-   组织分析（Organization Analysis）： 评估 AWS Organization 中最多 100 个成员账户的威胁发现结果。
    

每次完成分析后，都会生成一个结构化结果集，其中包含整体风险等级（从 Info 到 Critical）、置信度评分、基于 [MITRE ATT&CK](https://attack.mitre.org/) 矩阵的分类结果，以及可执行的 CLI 修复步骤。

云安全架构师、AWS Security Hero Sena Yakut 区分了该 Agent 与 GuardDuty 现有相关能力之间的差异：扩展威胁检测（Extended Threat Detection）会将相关发现结果连接成攻击链，而 Investigation 则会分析受影响资源、IAM 活动以及周围上下文，生成包含后续建议的摘要报告。

她认为，该工具最适合那些没有大型安全团队的组织，因为这些组织中，初始证据收集工作通常会消耗分析人员大量时间。她使用测试发现结果进行了验证，测试资源返回了符合预期的低风险评级。不过，她也强调了一个对于将该工具接入响应流程的团队来说非常重要的注意事项：

> 当然，AI 应该辅助调查，而不是取代调查。在采取任何修复措施之前，人类验证和决策仍然至关重要。

从程序化角度来看，开发人员和 SecOps 团队可以通过标准 AWS SDK、AWS CLI 中的 `aws guardduty create-investigation` 命令，或者通过 EventBridge 规则触发调查，从而自动化后续响应流程。

```
# 获取指定区域的 Detector ID
```

复制代码

对于已经运行 Agentic 工具链的团队来说，MCP 集成是其中的关键细节。通过 AWS MCP Server，工程师可以利用现有的 AWS Identity and Access Management（IAM）凭证，从 Claude Desktop 或自定义 CLI Agent 运行器中触发威胁调查，使安全调查进入与代码和基础设施工作相同的 Agent 操作界面。

与此同时，这也带来了 Agent 系统固有的治理问题：究竟是哪一个主体执行了调查？Agent 上下文窗口是否保存了 90 天关联后的安全遥测数据？这些调查记录又会如何保留？亚马逊云科技 自己在同月发布的 [Loom 参考平台](https://www.infoq.com/news/2026/07/loom-aws-agent-platform/?_gl=1*1nrh14*_up*MQ..*_ga*MzMzNTUzNzMzLjE3ODU0NjYxNzc.*_ga_VMVPD4D2JY*czE3ODU0NjYxNzUkbzEkZzAkdDE3ODU0NjYxNzUkajYwJGwwJGgw)，正是为了应对这类 Agent 部署治理问题而存在。

为了应对大型语言模型带来的数据驻留和合规问题， 亚马逊云科技使用了由底层 Bedrock 模型驱动的跨区域推理服务（Cross-Region Inference Service，[CRIS](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html)）。虽然推理计算可能会为了优化资源可用性，在同一地理边界内路由到其他区域，但亚马逊云科技表示，调查数据和生成的报告仍会存储在原始所属区域。

此次发布让 GuardDuty 进入了其他超大规模云厂商已经率先进入的领域。微软自 2024 年起已经推出 [Security Copilot](https://learn.microsoft.com/en-us/copilot/security/microsoft-security-copilot)，用于 Defender 和 Sentinel 中的事件摘要与引导式响应；Google 也在 Security Operations 中提供 [Gemini 辅助调查](https://docs.cloud.google.com/cloud-assist/create-investigation)能力。

GuardDuty Agent 的差异化之处并不在于创新性，而在于作用范围：它限定在 GuardDuty 自身的发现结果库以及周围亚马逊云科技遥测数据范围内，而不是定位为一个通用安全助手。这种限制缩小了它能够推理的问题范围，但也让其输出更容易基于已知数据集进行验证。

GuardDuty Investigation Agent 目前已在 10 个亚马逊云科技商业区域提供公共预览，包括：美国东部（弗吉尼亚北部、俄亥俄）、美国西部（俄勒冈）、加拿大（中部）、欧洲（法兰克福、爱尔兰、伦敦、巴黎、斯德哥尔摩）以及亚太地区（东京）。

在预览期间，该服务免费使用，但受到以下限制：每个账户每天最多执行 10 次调查，预览阶段每个账户累计最多执行 100 次调查。失败的调查不会计入任何配额限制。

这些限制与 EventBridge 集成能力之间存在一定矛盾。每个账户每天 10 次调查、整个预览阶段累计 100 次的限制，更像是面向人工安全分析的预算，而不是自动化响应流水线的运行规模。因此，团队可以利用它进行流程原型验证，但目前还无法在真实告警规模下运行。

这一限制也与 Yakut 的提醒保持一致：该预览版本主要面向分析人员评估输出结果，而不是用于让系统自主执行响应操作。

原文链接：

[https://www.infoq.com/news/2026/07/guardduty-investigation-agent/](https://www.infoq.com/news/2026/07/guardduty-investigation-agent/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/YZEahCZsDt3lZhHYvLPX?utm_source=rss&utm_medium=article）。