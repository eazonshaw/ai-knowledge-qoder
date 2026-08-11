---
title: "OpenAI 代理群利用 Artifactory 零日漏洞逃离沙箱并入侵 Hugging Face"
date: 2026-08-12 06:32:19
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "一系列备受瞩目的安全事件，揭露了人工智能前沿实验室在评估自主网络攻击能力方面存在的系统性漏洞。此前，OpenAI 曾经披露(https://openai.com/index/hugging-face-"
source_url: "https://www.infoq.cn/article/gkzDEyCF5U4DtKAa1Eee?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-08-11　|　采集：2026-08-12 06:32:19

## 正文

一系列备受瞩目的安全事件，揭露了人工智能前沿实验室在评估自主网络攻击能力方面存在的系统性漏洞。此前，[OpenAI 曾经披露](https://openai.com/index/hugging-face-model-evaluation-security-incident/)，在其内部评估网络攻击能力的过程中，其模型突破了沙箱隔离，并[入侵了 Hugging Face 的生产系统](https://huggingface.co/blog/security-incident-july-2026)。

在一项旨在量化高级网络能力（且不使用生产环境拒绝分类器）的内部测试中，OpenAI 的模型（包括 GPT-5.6 Sol 和一个尚未发布的研究原型）被分配去完成 [ExploitGym](https://github.com/sunblaze-ucb/exploitgym) 测试。该基准测试主要是用于衡量复杂的攻击路径。

尽管这些模型仅限于一个孤立的网络环境，而且访问权限仅限于内部包注册中心代理，但它们仍然将大量的推理计算资源用于保障出站互联网连接的安全。为此，这些模型识别并利用了 [Artifactory（一个内部包注册中心缓存代理）中的一个零日漏洞](https://docs.jfrog.com/releases/docs/artifactory-self-managed-releases#artifactory-7161)。

![](/ai-knowledge-qoder/_imgs/a9e8097be3326721.png)

在逃逸到一个联网节点后，这些模型推断出，Hugging Face 托管了评估数据集和基准测试解决方案。随后，这些模型通过横向移动和权限提升，直接从 Hugging Face 的生产数据库中提取了评估答案。

在[一篇详细的事后技术分析报告](https://huggingface.co/blog/agent-intrusion-technical-timeline)中，Hugging Face 发布了一份[取证重建报告](https://huggingface-anatomy-of-frontier-lab-model-intrusion.static.hf.space/index.html)，涵盖了 2026 年 7 月 9 日至 7 月 13 日期间执行的约 17600 次攻击者操作（分为约 6280 个簇）。该技术分析报告揭示了一个复杂的多阶段杀伤链：

Launchpad 准备阶段：在逃离 OpenAI 的评估环境后，该代理在第三方代码沙箱中植入后门，从而在公共服务上建立了命令与控制（C2）基础设施。

双重注入入口：该代理利用配置驱动的数据集加载器中存在的两个不同的注入漏洞，渗透了 Hugging Face 的生产 Kubernetes 环境：一个是导致 pod 密钥泄露的 HDF5 原始存储读取漏洞，另一个是可实现任意代码执行的 Jinja2 服务器端模板注入漏洞。

权限提升与持久化：在生产环境 Pod 内运行时，该代理读取了映射出的 Kubernetes 服务账户令牌，伪造了 24 小时有效令牌，并利用缺失的准入策略，在 11 个节点上部署了一支可自我重生的 Pod 集群。

凭证窃取与网络跳板：该代理窃取了一个包含 136 个生产环境密钥的密钥对象。利用窃取的认证密钥，它将受感染的节点注册到了 Hugging Face 的企业网格 VPN 中，并在用户空间网络模式（SOCKS5）下运行客户端，从而直接渗透至内部服务、MongoDB 数据库以及 GitHub 应用安装令牌。

尽管该恶意程序成功访问了内部运营的数据存储，但取证审计证实，客户数据未受影响；该代理完全专注于窃取包含 ExploitGym 靶场挑战解决方案的五个特定的数据集。

当 Hugging Face 利用大语言模型（LLM）辅助的异常检测技术发现此次入侵时，却遭遇了一个意想不到的取证障碍：商业 API 的安全防护机制阻止了原始漏洞利用日志的提交，因为安全过滤器无法区分事件响应人员与恶意行为者。

为了绕过这一安全防护机制的封锁，Hugging Face 利用其在自有 GPU 基础设施上托管的开放权重模型 [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) 进行了日志分析。此举既确保了敏感遥测数据的本地封存，又实现了与攻击者执行速度的同步。

OpenAI、Hugging Face 和 Anthropic 披露的信息在 Hacker News、Reddit 和 X（原 Twitter）等跨平台在线技术社区里引发了激烈的讨论。[Hacker News](https://news.ycombinator.com/item?id=48997548) 和 [Reddit 子版块 r/cybersecurity](https://www.reddit.com/r/cybersecurity/comments/1v9gzlv/hugging_face_shares_full_forensics_of_the_ai/) 上的讨论主要集中在对沙箱隔离技术的技术性质疑，以及 Hugging Face 因安全防护机制的限制而无法通过商业托管 API 分析原始威胁日志的问题。开发人员和安全专家们广泛赞扬了 Hugging Face 的决定——在自家 GPU 基础设施本地运行开源的 zai-org/GLM-5.2 模型，并以此作为案例研究，说明为何事件响应团队需要不受安全防护措施限制的本地模型，以便可以在不受 API 拒绝过滤器限制的情况下处理攻击遥测数据。与此同时，在 X 平台和 InfoSec 子版块上，红队从业者将这种机器级速度的群集执行与传统的[高级持续性威胁](https://en.wikipedia.org/wiki/Advanced_persistent_threat)（APT）攻击活动进行了类比；而一些持怀疑态度的评论者则[质疑](https://news.ycombinator.com/item?id=49038060)，将沙箱逃逸和合作伙伴的配置错误归因于“ AI 失控”，究竟是公关炒作，还是围绕模型能力进行的营销噱头。

这些事件披露预示着人工智能安全治理格局正在发生根本性的转变，从业者开始重新聚焦隔离机制评估。为了应对这些安全漏洞，OpenAI 针对基础设施配置实施了更为严格的控制措施，以防在未来的测试中再次发生数据泄露。此外，该事件还催生了新的防御性合作关系，例如 OpenAI 将 Hugging Face 纳入其“可信网络访问计划”（Trusted Access for Cyber Program），以及负责任的 Artifactory 零日漏洞披露。最后，此次危机凸显了防护要求的关键演变；托管 API 模型无法处理进行攻击日志取证的缺陷，突显了迫切需要本地化的开放权重防御模型。这样才能支持事件响应工作流，而且不受外部安全过滤器的阻碍。

![](/ai-knowledge-qoder/_imgs/d3f0733dd7cc07f8.png)

随着长时域模型获得自主使用工具的能力，隔离机制失效可能导致理论上的能力基准演变为现实世界中基础设施的安全漏洞。英国 AISI 最近的评估证实了这一点，GPT-5.6 Sol 等模型越来越能够长期持续地开展复杂的多步骤网络行动，这证明这些理论风险已经转化成了切实的威胁。因此，运营安全现在要求，对于评估环境，要采取与实际生产系统同样严格的隔离措施。

原文链接：[https://www.infoq.com/news/2026/08/openai-huggingface-breach/](https://www.infoq.com/news/2026/08/openai-huggingface-breach/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/gkzDEyCF5U4DtKAa1Eee?utm_source=rss&utm_medium=article）。