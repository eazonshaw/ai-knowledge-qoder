---
title: "谷歌 SynthID Detector 简化了水印检测流程，并将支持范围扩展至其他 AI 提供商"
date: 2026-11-03 11:11:34
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "谷歌 DeepMind 宣布，SynthID Detector 现已面向全球发布(https://blog.google/innovation-and-ai/models-and-research/g"
source_url: "https://www.infoq.cn/article/JoVxAdq1OjtIDkRBjWOW?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-11-02　|　采集：2026-11-03 11:11:34

## 正文

谷歌 DeepMind 宣布，[SynthID Detector 现已面向全球发布](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/)。该工具旨在帮助识别由 AI 生成的内容，包括使用 SynthID 合作伙伴（如 OpenAI、NVIDIA 和 Kakao）的 AI 工具创建的媒体内容，预计苹果公司也将很快提供支持。

在 [SynthID Detector](https://synthid.com/) 推出之前，[用户只能通过询问 Gemini 来识别 AI 生成的内容](https://deepmind.google/models/synthid/)，但该功能仅限于谷歌 AI 生成的内容。如果要识别其他 AI 提供商的内容，则需要使用各自的检测工具。

SynthID.com 网站简化了这一流程，用户只要上传图片、音频或视频文件，便可以在所有 SynthID 合作伙伴（包括 OpenAI、NVIDIA、Kakao 以及即将加入的苹果）的系统中进行检测。该工具会给出“是”或“否”的结果。不过，谷歌也指出，当检测结果显示“无明确信号”时，阴性结果并不一定意味着该内容不是由 AI 生成的：

> 这并非一款通用的 AI 检测工具。我们仅能检测来自上述已采用 SynthID 技术的公司的媒体内容。我们正在不断地拓展合作伙伴关系，以实现对更多生成式媒体内容的检测。

具体来说，SynthID 无法检测使用 Meta 或微软 AI 生成的内容，因为它们采用了不同的水印技术。此外，大规模修改也会削弱 SynthID 的水印信号，从而导致误判。在这种情况下，用户需要采用[更全面的方法](https://www.reddit.com/r/isitAI/comments/1x6iurc/psa_a_full_guide_for_ai_generated_content/)，结合其他工具进行检测。尽管存在这些局限性，SynthID 仍然入选了[《时代》杂志“2026 年最佳发明”榜单](https://time.com/collection/best-inventions/2026/google-deepmind-synthid/)，该榜单认可了其相较于其他 AI 检测器在 AI 内容检测方面的创新方法。

针对这一公告，[Reddit 用户 Chicano\_Ducky 对该方法的有效性表达了负面看法](https://www.reddit.com/r/technology/comments/1x06m4a/comment/peiei58/)：

> \[这\]从一开始就没起过作用。文中提到，即使在他们自己模型生成的视频上，误报率也高得令人无法接受\[……\] 他们正试图将‘魔鬼’重新装回瓶子里，但根本做不到。

[用户 Bulky-Employer 为这场讨论增添了新的视角](https://www.reddit.com/r/StableDiffusion/comments/1x04xfr/comment/pejy0fh/)，他强调：

> 创建水印移除节点非常简单。只需对图像进行一次低强度的降噪处理即可。你已经可以在 OpenAI 和 Gemini 生成的图像上测试这一点了。
> 
> 对于那些想利用 AI 生成的图像进行欺诈的人来说，SynthID 只是个很小的障碍。它的存在对他们来说反而成了一件好事。

相较于对 AI 生成的内容进行水印标记，还有一种互补的方法是 [C2PA 元数据](https://c2pa.org/)。它记录文件的来源和编辑等历史信息，可以帮助验证其真实性。[Harry G 在 LinkedIn 上指出](https://lnkd.in/p/eZUm9PW2)，这是唯一“真正可扩展的方法”，因为“事后检测合成内容会演变成一场军备竞赛”。然而，C2PA 元数据在内容上传时可能会丢失，而且在截图中不会保留。

SynthID 由谷歌 DeepMind 于 2023 年推出，是一个针对 AI 生成的图像、音频、视频和文本进行水印加密以及检测的解决方案。它使用密钥改变音频频率概率分布或像素/token 模式，将不可见的水印直接嵌入到内容当中。

原文链接：[https://www.infoq.com/news/2026/10/synthid-watermarking-detector/](https://www.infoq.com/news/2026/10/synthid-watermarking-detector/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/JoVxAdq1OjtIDkRBjWOW?utm_source=rss&utm_medium=article）。