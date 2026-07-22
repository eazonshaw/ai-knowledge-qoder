---
title: "Anthropic Details How It Contains Claude Across Web, Code, and Cowork"
date: 2026-07-23 06:54:22
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Anthropic recently detailed the containment architectures it uses for Claude(https://www.anthropic.c"
source_url: "https://www.infoq.com/news/2026/07/anthropic-claude-containment/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-22T12:25:00.000Z　|　采集：2026-07-23 06:54:22

## 正文

Anthropic recently detailed the [containment architectures it uses for Claude](https://www.anthropic.com/engineering/how-we-contain-claude) across its web, developer, and desktop products. It argues that agent safety depends on placing deterministic limits on an agent’s filesystem, network, and execution environment rather than depending solely on permission prompts or model-level safeguards. Most notably, it examines failures at trust boundaries and along permitted egress paths that led Anthropic to revise those designs.

The company frames agent risk as a combination of user misuse, model misbehaviour, and attacks delivered through files, tools, or network-accessible content. Anthropic’s central argument is that model controls such as classifiers, system prompts, and training can influence behaviour but cannot guarantee it. Instead, environmental controls set the hard boundary on what an agent can access or transmit.

![](https://www.infoq.com/news/2026/07/anthropic-claude-containment/news/2026/07/anthropic-claude-containment/en/resources/1Anthropic-Image-1-1784707512259.png)  
*Anthropic distinguishes between the probabilistic model, its execution environment, and external content that can influence it. ([source](https://www.anthropic.com/engineering/how-we-contain-claude))*

For example, code execution in "claude.ai" runs in an ephemeral [gVisor](https://gvisor.dev/) container on isolated infrastructure, with no access to the user’s local filesystem. Claude Code, by contrast, operates on developers’ machines and initially relied on per-action approval for writes, shell commands, and network access. Anthropic says users approved roughly 93% of those prompts, reducing the practical value of continuous human review. It subsequently added an OS-level sandbox, using Seatbelt on macOS and [bubblewrap](https://github.com/containers/bubblewrap) on Linux, that permits writes within the workspace while denying network access by default. The company reports an 84% reduction in permission prompts.

In one of the incidents mentioned, Anthropic received reports of Claude Code vulnerabilities where project-local content was parsed before a user accepted the folder-trust prompt. In one case, a repository’s `.claude/settings.json` file defined a hook that could run at startup. The remediation was to defer parsing and execution of project-local configuration until after the trust decision.

A controlled red-team test illustrated the limits of relying on approvals or classifiers to infer intent. In the exercise, a phishing attack led an employee to give Claude Code a plausible-looking instruction to retrieve AWS credentials and send them to an external destination. Anthropic says Claude carried out the exfiltration in 24 of 25 attempts. The exercise showed that controls such as filesystem isolation and outbound-network restrictions must block credential theft even when a request appears authorised, whether it comes from a user, a model mistake, or malicious tool output.

Claude Cowork uses a stronger boundary because its target users are less likely to assess shell commands safely. Anthropic’s original design ran the agent in a full virtual machine with only a selected workspace mounted from the host and credentials retained in the host keychain. Anthropic later moved the agent loop to the host to improve reliability, while code execution remained isolated in the VM.

![](https://www.infoq.com/news/2026/07/anthropic-claude-containment/news/2026/07/anthropic-claude-containment/en/resources/1Anthropic-Image-2-1784707512259.png)  
*Claude Cowork’s initial full-VM design and its later host-loop architecture. ([source](https://www.anthropic.com/engineering/how-we-contain-claude))*

The Cowork design nevertheless exposed an important limitation of domain allowlists. Anthropic describes a third-party disclosure in which a malicious file caused Claude to upload workspace files to an attacker-controlled account through Anthropic’s own Files API. Because api.anthropic.com was allowlisted, the destination check passed.

Anthropic changed the design to use a proxy inside the VM that accepts only the VM’s provisioned session token and blocks relevant server-side-fetch headers. The lesson is that an allowlisted domain is not simply a trusted destination. It grants access to every function reachable through it.

![](https://www.infoq.com/news/2026/07/anthropic-claude-containment/news/2026/07/anthropic-claude-containment/en/resources/1Anthropic-Image-3-1784707512259.png)  
*A domain allowlist permitted exfiltration through Anthropic’s Files API; the revised proxy restricts requests to the VM’s provisioned token. ([source](https://www.anthropic.com/engineering/how-we-contain-claude))*

The authors argue that containment should reflect how much meaningful oversight a user can provide, and caution that agent security cannot depend solely on recognising harmful intent. Instead, the surrounding environment must limit the damage an unsafe action can cause.

## About the Author

#### **Eran Stiller**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/anthropic-claude-containment/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。