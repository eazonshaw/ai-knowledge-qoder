---
title: "How LinkedIn Trains AI Job Search 8x Faster with Multi-Teacher Distillation"
date: 2026-09-12 07:42:06
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "LinkedIn has published(https://www.linkedin.com/blog/engineering/infrastructure/the-training-infrast"
source_url: "https://www.infoq.com/news/2026/09/linkedin-ai-multi-teacher/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-11T10:00:00.000Z　|　采集：2026-09-12 07:42:06

## 正文

LinkedIn has [published](https://www.linkedin.com/blog/engineering/infrastructure/the-training-infrastructure-behind-ai-powered-job-search-eight-x-faster-multi-teacher-distillation) details of the training infrastructure behind its AI-powered job search, describing a multi-teacher distillation pipeline that compresses knowledge from large teacher models into a compact 0.6B-parameter ranking model. The main contribution isn’t just the distillation technique. It’s the systems work that makes it fast enough for iteration. This includes a custom framework built on [SGLang](https://github.com/sgl-project/sglang), which serves teacher models directly in the training loop.

Training a [small language model](https://en.wikipedia.org/wiki/Small_language_model) (SLM) to improve relevance and engagement goals, like clicks and applications, requires querying one or more large teacher models for each training example. Serving those teachers can slow down the process. This becomes a bottleneck for a ranking system that must handle hundreds of thousands of queries per second at LinkedIn's scale. Many search and recommendation teams face a common challenge. They struggle to shift from keyword-based systems to unified rankers that are supervised by LLMs.

LinkedIn created a multi-teacher distillation framework using SGLang. This system loads and serves teacher models of different sizes. It also manages tensor-parallel and data-parallel setups. An asynchronous client asks teachers during training. It processes their outputs and adds them to the distillation losses. The team calls this method Online Multi-teacher Distillation. Scaling this across several nodes with local teacher replicas accelerated the distillation process by 3x. It also kept latency low, allowing for quick iterations. To reduce serving overhead and prevent repeated calculations, LinkedIn introduced Offline Multi-teacher Distillation. In this mode, the system precomputes teacher outputs and stores them on HDFS or NFS. Then, they are used directly in training instead of being queried in real time.

![](https://www.infoq.com/news/2026/09/linkedin-ai-multi-teacher/news/2026/09/linkedin-ai-multi-teacher/en/resources/11785962824387-1789047328988.jpg) Full pipeline for teachers/student training

That online/offline split sits alongside a broader stack of training-level optimizations: adopting [LiGer](https://github.com/linkedin/Liger-Kernel/) to reduce memory usage and enable 2x larger batch sizes, multi-node training for up to 3.5x additional speedup, FSDP2 for a further 20% gain, and H200 multi-node clusters for up to 30% more on top of that. The team notes it evaluated FP8 mixed precision but found no benefit for models under 8B parameters, due to casting overhead outweighing any compute savings. Stacked together, these optimizations are what account for the roughly eightfold training speedup referenced in the post's title.

On the modeling side, LinkedIn's research [shows](https://www.linkedin.com/blog/engineering/search/reimagining-linkedins-search-stack) that the 0.6B student model improved job search results. This model comes from an 8B relevance oracle and a 1.7B engagement teacher. It raised NDCG@10 for job searches by 24.48%, going from 0.7583 to 0.9432. Inference-side work in the same research included structured pruning and context compression. These methods increased ranking throughput from about 290 to over 2,000 items per second per GPU.

The system is live in production, powering natural-language job search for LinkedIn's US users. It's built on SGLang, the open-source LLM serving engine LinkedIn has invested in for prior ranking workloads, rather than a proprietary serving stack. LinkedIn presents this work as a guide for teams. It helps them achieve cross-encoder-quality ranking while meeting real-time latency needs. Plus, it avoids high costs from using frontier-LLM inference for every request.

Teams creating similar LLM-supervised ranking systems can use the online/offline teacher-serving split. They can query online in early stages when teacher choices change. Then, they can switch to offline caching once teachers stabilize and query volume increases. The gains are compounding, not just one trick. LiGer, multi-node data parallelism, FSDP2, and newer GPU generations each add a moderate boost. Also, none of this needed FP8 for sub-8B model sizes. This detail is important for teams considering lower precision by default.

In June 2026, Pinterest released a related account called [Achieving Near-Linear Training Scalability for Pinterest's Foundation Models](https://medium.com/pinterest-engineering/achieving-near-linear-training-scalability-for-pinterests-foundation-models-14d4f59fe6f6). This article explained how multi-node training helped create larger teacher models. These models' knowledge was then distilled into more efficient student models for the Homefeed and Related Pins ranking. This process reduced experimentation cycles from weeks to just a fraction of that time. LinkedIn's role is to create a custom SGLang framework, allowing teachers to be queried live during training.

Pinterest focuses on scaling the training framework and is migrating to Distributed Checkpoint, making multi-node teacher training possible. A recent survey, [Distillation in 2026 (so far): which frontier models use it and how](https://huggingface.co/blog/sergiopaniego/distillation-2026), highlights advancements in multi-teacher distillation. It features [NVIDIA's Nemotron 3 Ultra](https://research.nvidia.com/labs/nemotron/Nemotron-3-Ultra/), [MiMo-V2-Flash](https://github.com/xiaomimimo/MiMo-V2-Flash), and [DeepSeek-V4,](https://arxiv.org/abs/2606.19348) which utilize ten or more specialized teachers for dense, token-level supervision. This teacher-pool complexity exceeds the needs of industrial ranking systems like LinkedIn’s and Pinterest’s, which use fewer, task-specific teachers.

## About the Author

#### **Claudio Masolo**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/linkedin-ai-multi-teacher/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。