---
title: "OpenAI DevDay 2026 Recap for Developers"
date: 2026-10-03 08:49:39
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "OpenAI announced a series of product and developer updates at DevDay 2026(https://openai.com/index/d"
source_url: "https://www.infoq.com/news/2026/10/openai-devday-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-02T10:39:00.000Z　|　采集：2026-10-03 08:49:39

## 正文

OpenAI announced a series of product and developer updates at [DevDay 2026](https://openai.com/index/devday-2026-recap/), including [GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/), [computer use for the Agents](https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use) API, [cloud-based Codex](https://learn.chatgpt.com/docs/cloud) environments, a Decisions API, and [new plugin capabilities](https://developers.openai.com/plugins/build/extensions) for ChatGPT.

For developers building agents, the [Agents API](https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use) now supports computer use, allowing applications to operate software through graphical interfaces. The API also incorporates multi-agent capabilities from Codex, tool search, tool calling, and context compaction, with OpenAI managing the underlying execution infrastructure. The functionality is available through the API and in Codex and ChatGPT Work for selected plans.

OpenAI also released [GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/), an update to GPT-6 Sol aimed at coding, computer use, and professional tasks. OpenAI says the model approaches GPT-6 Astra on several evaluations while charging one-fifth of Astra's standard input and output token prices. Cached input costs $0.10 per million tokens. GPT-6.1 Sol is available through the API, ChatGPT Work, and Codex.

Codex can now run in [cloud environments](https://learn.chatgpt.com/docs/cloud) in addition to local computers, allowing developers to start remote tasks from other devices. OpenAI also updated the Codex CLI with voice input and an /agents interface for delegating and monitoring multiple tasks. A new code-review workflow can analyze diffs and potential issues in GitHub pull requests and GitLab merge requests, while Codex Security Cloud can scan repositories and new commits, investigate findings, remove duplicates, and prepare fixes.

Another developer release is the [Decisions API](https://x.com/OpenAIDevs/status/2105003318917697873), currently in limited preview. It uses the smaller Luna model to select from a predefined set of answers based on text or image context. OpenAI positions the API for tasks such as classification, request routing, and choosing an agent's next action.

OpenAI also expanded [ChatGPT's plugin](https://developers.openai.com/plugins/build/extensions) system. Developers can now build sidebar experiences, interactive conversation panels, and custom file viewers. Plugins can also respond to events through the proposed MCP Events specification, allowing automations to start when an event occurs in a connected application.

DevDay also introduced [Dots](https://openai.com/index/introducing-dots/), persistent agents that can work on ongoing tasks, and ChatGPT Space, a shared workspace where teams and agents can work with common context. Together with the developer releases, these changes extend OpenAI's platform from individual model calls toward persistent agents that can use tools, operate software, collaborate, and execute tasks remotely.

Community discussion focused on the growing emphasis on agents and developer infrastructure. Developers highlighted computer use, cloud-based Codex, and lower-cost models as practical additions, while others questioned whether the releases represented significant advances over capabilities already available across existing agent platforms.

OpenAI Developer [Victor Nunez](https://x.com/victornunez/status/2105651127371141197) shared:

> You would not believe just how much better dots got in a single week pre DevDay. I expect this to become the favorite way of interacting with AI for most people.

Meanwhile developer [@TokenGremlin](https://x.com/TokenGremlin/status/2105322752261423435) posted:

> Thinking about it more, I actually think GPT-6.1 Sol might be THE BEST release in OpenAI’s history. It gave me a really unusual feeling that I almost never get from a model: Luna pricing, Astra-level quality.

[DevDay 2026](https://openai.com/index/devday-2026-recap/) showed OpenAI moving beyond individual model interactions toward persistent agent workflows. With autonomous agents, lower-cost models, cloud-based coding, and expanded ChatGPT integrations, the company is building infrastructure for agents that can work continuously across applications and tasks.

## About the Author

#### **Daniel Dominguez**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/openai-devday-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。