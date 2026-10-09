---
title: "Cloudflare Open Sources Decision Models for AI Agents"
date: 2026-10-09 09:34:27
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "During its recent \"Birthday Week\", Cloudflare announced Clef(https://blog.cloudflare.com/clef-decisi"
source_url: "https://www.infoq.com/news/2026/10/clef-decision-models/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-08T06:54:00.000Z　|　采集：2026-10-09 09:34:27

## 正文

During its recent "Birthday Week", [Cloudflare announced Clef](https://blog.cloudflare.com/clef-decision-models/), a set of open-weight AI models designed to choose between predefined options rather than generate text. Cloudflare released 9B- and 27B-parameter models, along with a platform for adapting them to specific decision-making tasks.

Clef is a 27B multimodal model that takes a state and a schema of typed questions as input and returns decisions. It can process text, JSON, images, or video, and returns a probability for each allowed option for every question in a single forward pass, without generating free-form text or requiring output parsing.

![Cloudflare - Clef benchmarking](https://www.infoq.com/news/2026/10/clef-decision-models/news/2026/10/clef-decision-models/en/resources/1clef0-1791184076532.jpg)

*Source: Cloudflare blog*

A decision model classifies inputs and returns typed outcomes with probabilities, allowing AI agents to use these results to determine how to act, such as routing a support request, escalating it, or deferring the decision to a human. Cloudflare’s API is compatible with the popular [Typesafe AI’s Jev System One](https://typesafe.ai/blog/introducing-system-one-models-and-jev) model.

![Cloudflare - Decision Models](https://www.infoq.com/news/2026/10/clef-decision-models/news/2026/10/clef-decision-models/en/resources/1clef1-1791184076532.jpg)

*Source: Cloudflare blog*

[Michelle Chen](https://www.linkedin.com/in/mchenco/), group product manager at Cloudflare, [Alex Reneau](https://www.linkedin.com/in/alex-reneau-4b3086160/), principal machine learning engineer at Cloudflare, and [Kevin Flansburg](https://www.linkedin.com/in/kflansburg/), senior engineering manager at Cloudflare, write:

> Because they are hosted on Cloudflare’s infrastructure, we’re able to take advantage of our GPUs at the edge, leading to low network latency and faster decisions. This means that you could put Clef into the hot path for agents to make decisions and combine that with one of our LLMs on Workers AI to take action.

The hyperscaler also released Clef-Flash, a smaller 9B multimodal model designed for latency-sensitive decisions. It has a median latency of 38.8 ms in Cloudflare’s benchmarks, compared with 209.3 ms for the 27B Clef model. Chen, Reneau, and Flansburg explain how Clef differs from other decision models:

> First, it has a vision encoder so it’s able to take in images and classify visual content. This is different from Jev, which only does text classification today. Secondly, our model has a 64k context window (compared to Jev’s 32k), which allows users to squeeze more input state for the model to classify against.

On a [popular Hacker News thread](https://news.ycombinator.com/item?id=49923692), the community discusses decision models, latency, open weights, and whether this is really a new model category. Jacek Złydach writes:

> It's not a ‘new paradigm’, it's a low-hanging fruit that's been lying around for years; Typesafe were the first to bother to stop and pick it up, and market the shit out of it.

The benchmark results raised further questions, with user *SebastianSosa* warning:

> Public benchmarks are easy to cheat, if I am Typesafe, I would also release a public benchmark to distract otherwise competent people from overfitting to a benchmark instead of making something actually useful.

Cloudflare plans to fine-tune Clef for specific use cases, such as support triage and bot classification, using its historical labelled data to improve accuracy and speed. On [Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1wv4zzi/clef_open_weights_decision_model_by_cloudflare/), user *bugra\_sa* [writes](https://www.reddit.com/r/LocalLLaMA/comments/1wv4zzi/comment/pddevzd/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button):

> I'd care more about whether Clef knows when to punt than its raw accuracy score. Test it on cases where a false positive is much more expensive than a miss, then change the data enough to see when its confidence falls apart. If it stays confident through that, the benchmark number doesn't mean much.

Cloudflare also announced a fine-tuning service that lets customers adapt Clef to their own workloads using their data, initially with support from Cloudflare engineers, with a self-service platform planned for a later release. No firm date has been announced.

The company has made the Clef models available through Workers AI and as downloadable weights on [Hugging Face](https://huggingface.co/Cloudflare/clef), inviting developers to experiment with them and provide feedback.

## About the Author

#### **Renato Losio**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/clef-decision-models/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。