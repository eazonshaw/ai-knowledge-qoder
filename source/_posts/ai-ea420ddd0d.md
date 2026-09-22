---
title: "GitLab Duo Expands Self-Hosted AI Options Through Microsoft Foundry"
date: 2026-09-23 07:55:35
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "GitLab(https://about.gitlab.com/) has expanded(https://about.gitlab.com/blog/gitlab-duo-self-hosted-"
source_url: "https://www.infoq.com/news/2026/09/gitlab-microsoft-foundry/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-22T12:00:00.000Z　|　采集：2026-09-23 07:55:35

## 正文

[GitLab](https://about.gitlab.com/) has [expanded](https://about.gitlab.com/blog/gitlab-duo-self-hosted-models-on-microsoft-foundry/) GitLab Duo Self-Hosted to support models deployed through [Microsoft Foundry](https://azure.microsoft.com/en-us/products/ai-foundry), allowing organizations to run GitLab's AI development capabilities against models hosted within their own chosen Azure environment. The integration supports model families including [OpenAI GPT,](https://openai.com/) [Anthropic Claude](https://claude.ai/login), [Meta Llama](https://www.meta.ai/), and [Mistral](https://mistral.ai/), giving enterprises more choice over model provider, deployment location, and data path.

The move is particularly relevant for organizations with data residency, sovereignty, regulatory, or network isolation requirements. Rather than sending AI requests to GitLab-managed model infrastructure, GitLab Duo Self-Hosted can use an organization's own AI Gateway and model deployments. This allows administrators to retain greater control over where requests and responses are processed and how the underlying models are deployed.

The architecture consists of three main components: a self-managed GitLab instance, a self-hosted [GitLab AI Gateway](https://docs.gitlab.com/administration/gitlab_duo/gateway/), and one or more model endpoints hosted through Microsoft Foundry. The gateway acts as the intermediary between GitLab Duo and the selected models, rather than tying individual Duo features directly to a particular model provider.

An important aspect of the integration is feature-level model selection. Organizations can use different models for different GitLab Duo capabilities - for example, a code-focused model for Code Suggestions, another model for agentic workloads, and a smaller model for higher-volume tasks. Model deployments can also be changed without fundamentally changing the GitLab development workflow.

The approach also highlights an important trade-off with self-hosted AI. Giving organizations control over models and infrastructure provides greater flexibility, but it shifts more responsibility onto engineering and platform teams. They must manage model deployments, capacity, networking, credentials, availability, and model lifecycle in addition to the GitLab environment itself.

It also means that model availability does not automatically equal GitLab Duo compatibility. Microsoft Foundry's catalogue can change faster than GitLab's supported-model matrix, so organizations need to verify compatibility across both platforms before selecting a model.

GitLab's approach follows a broader movement away from treating AI development tools and foundation models as a single bundled service. Microsoft Foundry itself provides access to models from multiple vendors, while GitLab provides the development and DevSecOps layer around them.

There are similarities with other enterprise development platforms. [GitHub Copilot](https://github.com/copilot), for example, increasingly supports multiple underlying models, but its standard experience remains closely integrated with GitHub's managed service. GitLab's self-hosted model approach instead puts greater emphasis on controlling the AI infrastructure and network path. Meanwhile, platforms such as [Amazon Bedrock](https://aws.amazon.com/bedrock/) and Microsoft Foundry itself provide multi-model infrastructure but are not themselves substitutes for an integrated DevSecOps platform such as GitLab.

This makes the development environment increasingly resemble a model-agnostic control layer: GitLab manages the developer workflow and AI features, while the organization can determine which models sit underneath them.

The significance of the announcement therefore extends beyond another model integration. As AI becomes embedded deeper into software engineering, enterprises increasingly need to make decisions not just about which AI capabilities developers use, but where the models run, where source code and prompts travel, who controls the credentials, and which jurisdictions process the data.

GitLab's Microsoft Foundry integration addresses part of that problem by allowing the AI model layer to sit within an organization's chosen Azure environment. Enterprise AI tooling is increasingly moving toward model choice, deployment control, and data sovereignty, rather than assuming that the best development experience requires a single centrally managed AI provider.

## About the Author

#### **Craig Risi**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/gitlab-microsoft-foundry/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。