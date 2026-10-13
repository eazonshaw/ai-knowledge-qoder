---
title: "Context Language Models: Self-Managing Context to Improve Performance and Reduce Compute Costs"
date: 2026-10-13 10:46:35
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Researchers from Meta, MIT, and the University of Washington introduce Context Language Models (CLMs"
source_url: "https://www.infoq.com/news/2026/10/context-language-models/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-11T14:00:00.000Z　|　采集：2026-10-13 10:46:35

## 正文

Researchers from Meta, MIT, and the University of Washington introduce [Context Language Models (CLMs), a new approach that enables language models to manage and edit their own context](https://arxiv.org/html/2609.37725v1) rather than relying on predefined mechanisms for summarization, compression, and information retrieval, reporting substantial gains in both performance and computational efficiency.

The researchers implemented a mechanism that lets LLMs manage their own context by treating it as a file they can update without restrictions. This approach offers an alternative to conventional context-management strategies used to prevent context from growing indefinitely, such as compaction, offloading, and retrieval. Each technique has its own limitations. Summarization can discard critical details or introduce inaccuracies, compaction often uses a predefined set of rules, and external memory requires agents to decide what to bring back into the context.

A CLM can instead rewrite old messages, preserve important facts, remove irrelevant information, maintain progress notes, and learn its own context-management strategies. The researchers emphasize that LLMs can learn strategies that go beyond existing human-designed approaches, potentially surpassing "existing human priors".

> By shifting context management from external harness control to intrinsic model behavior, CLMs naturally enable in-context learning and parametric learning for context management. We first show that users can steer context management simply by telling the agent their desired strategy. In addition, CLMs can evolve an in-context skill document that captures useful context-management procedures for future reuse.

New behaviors that CLM can learn include creating internal notes, removing irrelevant intermediate results while preserving useful ones, tracking unsuccessful experiments alongside ideas to explore further, and more.

The researchers explored three different approaches to context management. First, **zero-shot** context management, where the CLM received no specific training. Second, **in-context learning**, where the CLM was instructed using natural language on how to manage its context and refined its strategy through an iterative skill-optimization loop. Third, **reinforcement learning**, where the CLM learned context-management strategies using task success as the primary objective and computational efficiency as an additional optimization criterion.

The researchers evaluated CLMs across several benchmarks and reported substantial gains in both performance and computational efficiency. Zero-shot CLMs achieved:

> 11.4% higher accuracy with 21.5% fewer FLOPs on BrowseComp-Plus, 5% higher scores with 59% fewer FLOPs on 12-hour EdgeBench, and 65% greater improvement with the same compute on a 24-hour multi-repository agent-swarm task

CLMs using in-context learning improved accuracy on ContextBench tasks by up to 35.9 percentage points at lower compute. Finally, reinforcement learning improved Qwen3.5-9B performance on BrowseComp-Plus from 28.8% to 42.5%, a 47.6% relative improvement, while using 12% fewer FLOPs.

The researchers acknowledge several unresolved challenges. First, a CLM may discard important information that it cannot later retrieve. Second, allowing CLMs to edit their own context introduces new safety risks, as the editable context "can become another channel through which prompt injections or self-generated instructions persist across turns". Most importantly, greater control over context does not necessarily translate into better behavior, as models may still make poor decisions about what to retain, modify, or discard.

[Commenting on the announcement on X.com](https://x.com/omarsar0/status/2105690460429996366/photo/1), @Rennix7t warns that "the accuracy and computational power results in the paper come from specified tasks", while @omarsar0 describes the approach as an interesting research direction but expresses reservations about trusting a model to manage its context end-to-end, arguing that better solutions are still needed.

On Reddit, [Combinatorilliance argues that CLMs are not yet production-ready](https://www.reddit.com/r/LocalLLaMA/comments/1wyf63m/comment/pe664yf/), noting that rewriting the context invalidates the model cache and that the "caching trick \[used by the researchers, EN\] isn't ideal either and has some drawbacks that need to be taken into consideration".

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/context-language-models/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。