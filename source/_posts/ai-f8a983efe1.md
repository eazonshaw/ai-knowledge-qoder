---
title: "修复漏洞的 PR 刚提交，攻击几分钟后就来了：AI 正在击穿开源安全流程"
date: 2026-10-15 08:11:45
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "Anil Madhavapeddy 最近发表文章指出，AI 智能体可以利用公开渠道中有关软件漏洞的蛛丝马迹，生成可实际运行的漏洞利用程序(https://anil.recoil.org/notes/r"
source_url: "https://www.infoq.cn/article/R7OkT6DCUifdCQqAvwtJ?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-13　|　采集：2026-10-15 08:11:45

## 正文

Anil Madhavapeddy 最近发表文章指出，[AI 智能体可以利用公开渠道中有关软件漏洞的蛛丝马迹，生成可实际运行的漏洞利用程序](https://anil.recoil.org/notes/rumour-is-the-exploit)，从而削弱开源项目传统漏洞披露禁令的有效性。随着漏洞披露到遭到利用之间的时间窗口不断缩短，他强调，补丁开发和版本发布流程必须进一步提速。

剑桥大学计算机科学教授、OCaml 编译器核心维护者 [Madhavapeddy](https://www.linkedin.com/in/anilmadhavapeddy/) 在介绍自己修复一个路径遍历漏洞的经历时写道：

> 补丁本身并不复杂。按照以往的安全流程，我们通常会私下修复漏洞、通知受影响的用户，随后再发布公开安全公告。但这一次，我注意到，在提交修复该问题的 PR 后仅仅几分钟，线上 Web 服务器日志中就出现了与这个漏洞模式完全一致的探测请求。

传统安全流程依赖对漏洞实施保密，假设隐藏技术细节便能保护用户。然而，AI 智能体可以根据有限线索自行研究漏洞。在[最近的一项研究](https://arxiv.org/abs/2404.08144)中，当获得 CVE 描述后，一个 GPT-4 智能体成功利用了包含 15 个漏洞的基准测试中 87% 的漏洞；没有 CVE 描述时，这一比例只有 7%。Madhavapeddy 认为，如今的“[漏洞经济学](https://arxiv.org/abs/2605.24632)”已经对开源软件维护者不利。他补充：

> 在我看来，我们的安全流程需要在某种程度上反过来。只要有一个人在搜索某类漏洞，这可能表现为邮件列表中的一个问题、孤立分支上的一次异常提交，或者某种上下文泄露，就足以提醒其他人的智能体，并让它们生成漏洞利用代码。这太疯狂了。

Chainguard 开发者关系负责人 Adrian Mouat 表示，这让[开源维护者陷入了两难境地](https://www.linkedin.com/posts/adrianmouat_this-week-i-read-a-blog-post-by-anil-madhavapeddy-activity-7501654340584071169-5MbX/)：

> 仅仅创建一个用于修复问题的 PR，就会让项目和用户陷入危险，因为攻击者甚至可以在更新版本发布前就生成并开始使用漏洞利用程序。用户已经面临风险，却对此无能为力。这可能迫使项目在发布相关源代码之前先发布软件版本，但这破坏了开源软件的基本原则。

Madhavapeddy 提出了三种可以在完整补丁发布前减轻影响的方法：私下讨论漏洞、加快持续发布，以及迅速实施协议层面的缓解措施。在一个[热门 Hacker News 讨论帖](https://news.ycombinator.com/item?id=49480466)中，开源项目 rclone 的创建者和维护者 [Nick Craig-Wood](https://github.com/ncw/) 强调，CVE 的数量正在迅速增长：

> rclone 项目的前十年里，我们通过 GitHub 收到了大约 20 份安全漏洞报告。仅仅上个月，我们就不得不处理 40 多份！即使使用 AI 工具进行初步分类并生成修复方案供审核，这仍然占用了我大量时间。

私下协调漏洞和加快发布周期可以在现有工作流内实现，但要构建具备撤销机制和能力控制的协议，就必须进行架构层面的调整，以便远程禁用或限制存在漏洞的操作。Madhavapeddy 建议采用短期凭证、可撤销能力和协议层控制等机制，使防护措施无需等待所有客户端立即升级即可启用。

Madhavapeddy 和 Craig-Wood 并不是仅有的、对安全形势变化表达担忧的开源维护者。面对速度越来越快、自动化程度越来越高的漏洞发现，[QEMU 已经缩短了漏洞保密期](https://www.qemu.org/contribute/security-process/)。

原文链接：[https://www.infoq.com/news/2026/10/open-source-ai-security/](https://www.infoq.com/news/2026/10/open-source-ai-security/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/R7OkT6DCUifdCQqAvwtJ?utm_source=rss&utm_medium=article）。