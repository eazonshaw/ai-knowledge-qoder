---
title: "DoorDash’s Flux Runs 130,000 Engineering Tasks Through Cloud-Based Agents"
date: 2026-09-01 08:54:36
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "DoorDash has moved engineering agent workloads from developers’ laptops to its Flux cloud platform(h"
source_url: "https://www.infoq.com/news/2026/08/doordash-flux-cloud-agent/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-31T14:28:00.000Z　|　采集：2026-09-01 08:54:36

## 正文

DoorDash has moved engineering agent workloads from developers’ laptops to its [Flux cloud platform](https://careersatdoordash.com/blog/delegating-engineering-work-to-cloud-based-agents/), which automated 130,000 engineering tasks in a single month in 2026. The platform supports more than 25,000 automated code reviews each week, with more than 300 playbooks and more than 10,000 weekly invocations, allowing workflows to run unattended and in parallel.

![](https://www.infoq.com/news/2026/08/doordash-flux-cloud-agent/news/2026/08/doordash-flux-cloud-agent/en/resources/1fluxusecases-1787409544900.jpeg)

*Flux background workflow use cases and usage metrics (Source: [DoorDash Blog Post](https://careersatdoordash.com/blog/delegating-engineering-work-to-cloud-based-agents/))*

DoorDash developed Flux after encountering limitations with agent workloads running on individual laptops. Local execution limits available CPU and memory, depends on the developer’s device remaining connected, and can give autonomous agents access to credentials and internal systems already available to the developer. DoorDash also said local execution makes it harder to monitor where agents are running, which systems they access, and on whose behalf they operate.

[Radoslav Krehlik](https://www.linkedin.com/in/krehlik/), security architect, wrote in a LinkedIn [post](https://www.linkedin.com/posts/krehlik_doordash-has-launched-flux-its-own-cloud-activity-7493327727484370944-A_fH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAArnikgBqzTxA9Y838-O55QUcB2McACIq94) about Flux,

> Built after laptop-based agents ran into limits on power, uptime, and security. Engineers can trigger the agents from Slack, GitHub, or scheduled jobs while DoorDash keeps full enterprise security guardrails

Flux is built around four platform primitives: cloud [sandboxes](https://en.wikipedia.org/wiki/Sandbox_\(computer_security\)), an MCP gateway, reusable playbooks, and invocation surfaces. Playbooks define the work, sandboxes provide isolated execution environments, the gateway controls access to internal systems, and invocation surfaces allow workflows to be started through Slack, GitHub, cron, the command line, or conversational interfaces.

![](https://www.infoq.com/news/2026/08/doordash-flux-cloud-agent/news/2026/08/doordash-flux-cloud-agent/en/resources/1Screenshot%202026-08-21%20at%207.55.32%E2%80%AFPM-1787409544900.png)

*Flux architecture (Source: [DoorDash Blog Post](https://careersatdoordash.com/blog/delegating-engineering-work-to-cloud-based-agents/))*

The sandboxes use [Firecracker micro virtual machines](https://github.com/firecracker-microvm/firecracker) to isolate agent workloads. Each environment is provisioned with the repositories, development tools, secrets, and runtime dependencies required for a task. DoorDash reports a 95th percentile service level objective of less than five seconds for end-to-end sandbox setup, including starting the microVM, cloning repositories, installing build tools, and configuring the coding agent harness.

Agents access DoorDash’s internal systems through Agent Gateway, an in-house MCP gateway that provides scoped permissions and logs agent activity for auditing and policy enforcement. Playbooks, defined in YAML, specify the task, required tools, permissions, validation, and safety boundaries. They can combine agent-driven steps with deterministic code where predictable execution or validation is required.

[Duy Nguyễn](https://www.linkedin.com/in/duy-nguy%E1%BB%85n-39aba530/), Co-founder of TOP GROUP Vietnam, wrote in a [LinkedIn](https://www.linkedin.com/posts/duy-nguy%E1%BB%85n-39aba530_doordashs-flux-is-a-useful-signal-for-teams-activity-7494216693116862464-nWqZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAArnikgBqzTxA9Y838-O55QUcB2McACIq94) post about Flux,

> Once agents handle background work, code review, internal tools, and concurrent execution, the hard problem shifts from model choice to control: identity, permissions, sandboxing, audit logs, quotas, and a real kill switch.

The approach is part of a broader move toward cloud-based execution for coding agents. GitHub supports both local and cloud sandbox environments for Copilot, with controls over filesystem, network, and system access. Its cloud sandboxes provide isolated environments for agents to execute coding tasks without consuming local developer resources. [GitHub’s documentation](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent) provides additional details on its cloud-based execution model.

DoorDash initially used Flux for automated code review, which the company described as a frequent and measurable workflow. It subsequently expanded the platform to CI triage, on-call tasks, maintenance workflows, and ticket-driven development. DoorDash also changed its Slack integration from private channels to public threads so engineers could observe agent executions, review results, and see how other teams delegated work.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/doordash-flux-cloud-agent/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。