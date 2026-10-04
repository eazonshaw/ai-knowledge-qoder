---
title: "Andrew Kelley 专访：他为何创建 Zig、禁止 AI 贡献以及将 Zig 从 GitHub 移出"
date: 2026-10-04 08:14:44
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "在接受 JetBrains 采访时，Zig 项目创建者 Andrew Kelley 详细阐述(https://www.youtube.com/watch?v=iqddnwKF8HQ)了该项目正式禁止 "
source_url: "https://www.infoq.cn/article/eRbEA3dMd58RNPqp5D8S?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-02　|　采集：2026-10-04 08:14:44

## 正文

在接受 JetBrains 采访时，Zig 项目创建者 Andrew Kelley [详细阐述](https://www.youtube.com/watch?v=iqddnwKF8HQ)了该项目正式禁止 AI 贡献的决定，以及从 GitHub 迁移至 Codeberg 的动机。Kelley 指出，自动提交代码最终会降低代码库的质量，并且会削弱开源参与者之间的社交纽带。GitHub 持续出现的故障以及彼此之间的激励机制存在错位，导致该项目将代码库迁移至 Codeberg。

Kelley 提到了 Zig 项目决定[彻底拒绝 AI 贡献](https://ziglang.org/code-of-conduct/#strict-no-llm-no-ai-policy)的两个因素：固定的人力资源无法随代码量的增长而扩展，以及对软件质量的负面影响：

> 第一个原因很简单，那就是这类贡献无一例外都是垃圾。\[…\] 不仅如此，它们甚至带来了负价值 \[…\] 当我们收到这些垃圾贡献时，它们会占用我们的审查时间。经过几次审查后，我们才意识到，贡献者根本不知道自己在做什么。他们只是把我们说的话复制粘贴到聊天窗口，然后把聊天记录“洗白”后发回来，假装自己没有跟 AI 聊天，但我们依然能看穿。后来我们终于意识到，这样做永远不可能产出高质量的代码，因为他们根本不知道自己在做什么。到头来，所有人的时间都被白白浪费了。

同样重要的是，Kelley 强调了 Zig 的核心教育使命。他将代码审查视为一种带教投入，只针对那些日后能成长为核心贡献者的真正的工程师：

> “贡献者扑克”这一概念\[编者注：将有限的审阅时间押注在那些有望成长并长期参与的贡献者身上，而非“过客式贡献者”身上\]的初衷在于，我们的时间是有限的。因此，我们需要辨别：我们该把时间投入到谁身上，以帮助他们成为更好的程序员、更好的项目贡献者？而谁又可能是“过客式贡献者”？那些使用 AI 的人，总是属于第二类。不值得在他们身上投入时间。他们什么也没学到，以后也不会加入核心团队。

Zig 的这种基于原则的做法与 Bun 的做法形成了鲜明的对比。最近，Bun 在众多 AI 代理的协助下，[将整个代码库从 Zig 重写为 Rust](https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months)。移植代码、验证代码并提出修复方案全是由 AI 完成的。在一篇题为“[我对 Bun 用 Rust 重写的一些思考](https://andrewkelley.me/post/my-thoughts-bun-rust-rewrite.html)”的颇具批判性的文章中，Kelley 断言：

> 这里的主要问题与 Zig 和 Rust 的语言特性毫无关系，而完全在于这两个项目截然不同的价值观体系。

Kelley 进一步解释说，由于 GitHub Actions 不断出现持续集成（CI）失败的问题，该项目将 GitHub 存储库迁移到了德国的非营利组织 [Codeberg](https://codeberg.org/ziglang/zig)。他还强调，与非营利组织合作能更好地协调激励机制，因为这类组织往往更重视稳定性，而非飞速增长和盈利：

> 对于我们来说，GitHub 已经完全无法使用了。我们的持续集成无法正常运行了。它就这么突然停止工作了。于是我们转而采用了 Codeberg。现在，我们的持续集成服务器又恢复正常了……Codeberg 是德国的一个非营利组织。就我个人而言，我觉得非营利组织比初创公司或企业更稳定，因为企业总是追逐下一个热点，试图让下个季度的利润更高。而非营利组织只是致力于坚持做他们正在做的事，而这种稳定性正是我所追求的。

部分开发者也认同这一观点，即 [GitHub 性能的下降恰好与 AI 工作负载的指数级增长同时发生](https://blog.pragmaticengineer.com/the-pulse-ai-load-breaks-github/)。

Kelley 在采访中[回忆道](https://www.youtube.com/watch?v=iqddnwKF8HQ)，他是在尝试构建一个原生数字音频工作站时构思出了 Zig 语言。JavaScript 缺乏底层硬件控制能力；Go 引入了“停止世界”式的垃圾回收暂停机制，这损害了实时音频播放的要求；当时的 Rust（1.0 版本发布前）因借用检查器带来的阻力，导致 UI 字体渲染问题持续数周无法解决；而 C++ 则不断地产生内存损坏错误，耗费了大量调试时间。

[Zig 语言](https://ziglang.org/)摒弃了自动内存管理，转而采用显式内存分配器。Kelley 于 2018 年辞去工作，专心开发 Zig。Zig 成为 [Ghostty](https://ghostty.org/)、[低延迟金融数据库 TigerBeetle](https://tigerbeetle.com/) 以及 [Uber 交叉编译基础设施](https://www.uber.com/lt/en/blog/bootstrapping-ubers-infrastructure-on-arm64-with-zig/)的基础。

要了解文中所述观点的更多细节，以及本文未涉及的其他话题，建议开发者观看[完整的 JetBrains 访谈视频](https://www.youtube.com/watch?v=iqddnwKF8HQ)。

原文链接：[https://www.infoq.com/news/2026/09/andrew-kelley-zig-no-ai/](https://www.infoq.com/news/2026/09/andrew-kelley-zig-no-ai/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/eRbEA3dMd58RNPqp5D8S?utm_source=rss&utm_medium=article）。