---
title: "Google EnvHarness Enables Self-Evolving Agents to Learn in Dynamics Environments"
date: 2026-10-18 07:38:58
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google researchers open-sourced EnvHarness(https://envharness.com/), a framework that dynamically ad"
source_url: "https://www.infoq.com/news/2026/10/envharness-self-evolving-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-16T19:00:00.000Z　|　采集：2026-10-18 07:38:58

## 正文

[Google researchers open-sourced EnvHarness](https://envharness.com/), a framework that dynamically adapts agent-training environments to an agent's weaknesses without modifying the agent, environment, or evaluation system. The researchers say this approach can improve both learning effectiveness and efficiency while helping agents overcome their weaknesses.

According to the research authors, self-evolving agents typically improve by rewriting their prompts and acquiring new skills, but rarely adapt the environments in which they operate. This has important consequences:

> An agent that keeps improving against a frozen benchmark eventually stops learning from it. The start states, the rules and the feedback are the same for every learner at every stage, so once the agent can solve the tasks, the environment has nothing further to teach.

Environment generation, the researchers explain, is expensive, requiring domain-specific pipelines and often relying on expensive or unreliable verifiers. Despite these efforts, the resulting environments remain static. To make it easier for engineers to train agents in adaptive environments, they created [EnvHarness](https://github.com/google-research/envharness).

EnvHarness acts as a programmable layer of plug-in components that wraps a static environment, changing only the interface the agent interacts through. By dynamically introducing mutations, it can reshape the environment's behavior without altering its underlying structure or evaluation system.

EnvHarness wraps an existing environment using its standard `reset()` and `step()` interface and provides three kinds of composable components: **setup**, which customizes the environment's initial state; **rule**, which constrains state transitions in response to the agent's actions; and **link**, which customizes the observation presented to the agent.

The framework also introduces EnvRigger, which automatically determines how to adapt an environment to a particular agent by analyzing agent behavior, identifying recurring weaknesses, generating targeted modifications, and validating them through fresh interactions.

> Repeatedly executing the EnvRigger loop enables continuous co-evolution between the agent and its environment, unlocking compounding performance gains that scale effectively with the number of customized tasks.

![](https://www.infoq.com/news/2026/10/envharness-self-evolving-agents/news/2026/10/envharness-self-evolving-agents/en/resources/1envrigger-1792176345502.jpg)

According to [Google's paper](https://arxiv.org/abs/2608.19880), adding the EnvHarness layer improved agent performance across benchmarks including WebArena, SWE-bench Verified, and ALFWorld, without modifying their core logic. The researchers tested several models, including Gemini 3.1 Flash-Lite, Qwen3.6 27B, Gemini 3.5 Flash, and Claude Sonnet 4.6, all of which showed performance gains of between 2.9 and 3.7 percentage points.

The researchers conclude that EnvHarness delivers consistent gains where static environments cannot, generalizes across domains through a domain-agnostic interface, and improves efficiency by repairing wasteful behaviors.

Commenting on the announcement, Asif Razzaq, founder and CEO at Marketechpost, noted on LinkedIn that EnvHarness

> wraps an existing environment through the standard reset/step interface, so the original tasks and human-built verifiers stay in place. An LLM designer writes the wrappers against flaws it finds in the agent's own rollouts.

Similarly, DevOps engineer [Aniket Kumar emphasized](https://www.linkedin.com/posts/asifrazzaq_ive-read-a-lot-of-environment-scaling-papers-share-7499927980878639104-fXYf/) that the Stage (setup), Contract (rule), and Chain provide a clean abstraction that preserves benchmark verifiers, avoiding a common pitfall of other environment-scaling approaches.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/envharness-self-evolving-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。