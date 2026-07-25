---
title: "AI Root Cause Analysis Shifts from Model Reasoning to Context Engineering"
date: 2026-07-26 06:44:28
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "A growing view among observability engineers holds that the reasoning ability of large language mode"
source_url: "https://www.infoq.com/news/2026/07/ai-rca-context-engineering/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-25T09:00:00.000Z　|　采集：2026-07-26 06:44:28

## 正文

A growing view among observability engineers holds that the reasoning ability of large language models is no longer the bottleneck in AI-assisted root cause analysis, and that the harder problem now sits in the pipeline that decides what data reaches the model.

For teams adding LLMs to incident response, the practical takeaway is that effort spent preparing context may pay off more than reaching for a larger model.

Most AI RCA efforts fall into two camps. Agent-based designs hand the model tools and let it investigate, choosing what telemetry to fetch as it reasons. Deterministic designs correlate signals up front and hand the model a single prepared context. Coroot's work reflects a broader industry shift towards that second camp: [Dynatrace's Davis AI](https://www.dynatrace.com/news/blog/what-is-causal-ai-deterministic-ai/) likewise leans on deterministic, topology-based causal analysis, traversing a real-time dependency map to pinpoint a root cause rather than turning an LLM loose in an open-ended agent loop. The two approaches break in different ways, which makes it hard to tell whether a failed diagnosis came from weak reasoning or from a harness that fed the model the wrong evidence.

Recent research from observability vendor Coroot tries to separate those two variables. In its [original research](https://coroot.com/blog/hard-part-of-ai-root-cause-analysis-is-no-longer-the-model/), engineer Nikolay Sivko split RCA with an LLM into two jobs: reasoning over the data in front of it, and the harness that decides what data reaches the model and in what shape. He argued that "can AI do RCA?" is the wrong question, because the two jobs need to be measured apart.

Coroot's pipeline correlates signals into findings and passes them to the model in one focused context with no agent loop, which lets a wrong answer be blamed on the model rather than on missing evidence. To test it, Sivko built one scenario: a [Chaos Mesh](https://chaos-mesh.org/) NetworkChaos experiment injecting delay between a catalogue service and its Postgres database, slowing queries and pushing the front-end into 502 errors. The context deliberately included misleading signals, including query timings inflated by network round-trip time. He then ran the same prompt, around 9,800 tokens, against eleven models, asking each for the root cause, the cause-and-effect chain, and the immediate fix.

Closed frontier models Claude Opus 4.8, GPT-5.5 and Gemini 3.1 Pro all passed, naming the experiment and flagging the need to delete both it and its schedule. Larger open-weight models mostly kept pace. Lower down, Gemma 4 31B was the only self-hostable model to identify the root cause, while the larger Qwen3.6 35B and Qwen3 Coder Next both missed it.

The findings do not settle the debate. Agent-based approaches keep a genuine advantage, since a model that fetches its own data can pull signals a fixed pipeline never anticipated, which matters for novel incidents outside a predefined correlation set. They pay for that flexibility in operability, though. Accounts from [ZenML and Incident.io](https://www.zenml.io/llmops-database/ai-powered-incident-response-system-with-multi-agent-investigation) describe multi-agent LLM investigations as notoriously hard to debug in production, because a failed run leaves no clean stack trace, only unpredictable prompt interactions and emergent coordination between agents. That fragility pushes many practitioners the other way: engineers [discussing the trade-off on Reddit](https://www.reddit.com/r/ExperiencedDevs/comments/1nqlm09/agentic_ai_vs_deterministic_workflows_with_llm/) report scrapping fully agentic designs in favour of mostly deterministic workflows with a narrow LLM step, citing better reliability and lower token cost. Deterministic pipelines trade some of that flexibility for repeatability and cleaner evaluation, which is much of why the industry increasingly treats the harness, not the model, as the hardest part of AI RCA.

On cost, Sivko noted that a single short call runs a few cents even on frontier models, because the correlation work happens before the model is called. He judged that the reasoning part of AI RCA "is basically solved" and that the real work is now "preparing the right, compact context for the model before you call it", a conclusion that points the next round of engineering effort at the harness rather than the model. That framing echoes a wider push around context engineering. Guidance from [Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) and [LangChain](https://www.langchain.com/blog/context-engineering-for-agents), along with observability vendor [Mezmo](https://www.mezmo.com/learn/context-engineering-for-observability-how-to-deliver-the-right-data-to-llms), converges on the same idea: that curating the smallest set of high-signal, compact context is now a core discipline for making LLM-based reasoning and observability reliable.

## About the Author

#### **Mark Silvester**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/ai-rca-context-engineering/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。