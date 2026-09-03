---
title: "Shopify Introduces Gisting: Compressing LLM System Prompts into Learned Tokens"
date: 2026-09-04 07:43:33
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Shopify's engineering introduced Gisting, a novel technique for compressing long LLM prompts(https:/"
source_url: "https://www.infoq.com/news/2026/09/spotify-gisting-llm-performance/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-03T20:00:00.000Z　|　采集：2026-09-04 07:43:33

## 正文

Shopify's engineering introduced [Gisting, a novel technique for compressing long LLM prompts](https://shopify.engineering/gisting) into a smaller set of learned "gist" tokens, improving throughput and reducing inference cost.

Spotify emphasizes that replacing lengthy text for concise gist tokens at inference time reduces end-to-end latency, drops infrastructure costs, and boosts token throughput without modifying the model's core weights.

The company says that gisting reduced the Sidekick GraphQL agent’s system prompt from about 6000 tokens to 1500 gist tokens without sacrificing prediction quality. This implies a 4:1 reduction in context size:

> At 350 requests per minute (RPM), the median time to first token (TTFT) dropped from 438ms to 354ms, the median end-to-end request latency dropped from 6.8s to 4.2s, and throughput rose from 20.2 to 23.4 queries per second (QPS).

These improved metrics allowed Spotify to reduce the number of allocated GPUs.

Gisting is based on a technique pioneered in a 2022 paper, ["*Prompt Compression and Contrastive Conditioning for Controllability and Toxicity Reduction in Language Models*"](https://arxiv.org/abs/2210.03162), and consists of a two-step process to learn the embeddings of the new compressed gist token. In a first pass, the *teacher pass*, the model is run with the real prompt to derive the *teacher logits* of the response. In the *student pass*, the model is run with the gist tokens to derive the student logits. Finally, the gist are trained to minimize the KL divergence between the teacher logits and the student logits, that is until the student's predictions closely match the teacher's.

> When training finishes, we write the gist embeddings straight into the model's embedding matrix, and register the new gist tokens as special tokens in the model’s tokenizer. The model loads and runs like any other at inference time: no custom attention mask, extra encoder, or special serving path.

The key advantage of gisting is that the model does not process a conventional summary of the original prompt, but rather a learned representation designed to make the LLM to behave as close as possible to how it would if it had seen the original prompt.

Gisting can reduce latency and increase throughput. In Shopify's case, Time to First Token (TTFT) dropped from 438ms to 354ms, and end-to-end latency fell from 6.8s to 4.2s. At the same time, queries per second (QPS) increased from 20.2 to 23.4, allowing engineering teams to scale down overall GPU allocation.

As a final note, Shopify also emphasizes that gisting is complementary to other optimization techniques, such as [prefix caching](https://handbook.modular.com/inference-optimization/prefix-caching/). Prefix caching avoids recomputing the KV tensors for cached prompt sequences, but the model must still process those cached tensors during the decoding phase. Gisting further reduces this overhead by replacing a long prompt with a shorter sequence of learned gist tokens. The two optimizations therefore compound, and Shopify uses them together.

There is much more to gisting than can be covered here. Make sure to read the original article if you are interested in the full details, which covers topics such as the role of autosearch in tuning the Gisting process and other implementation details that significantly affect performance.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/spotify-gisting-llm-performance/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。