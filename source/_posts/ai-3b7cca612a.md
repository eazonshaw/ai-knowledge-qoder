---
title: "QCon San Francisco 2026: Securing AI Agents in Production"
date: 2026-11-24 13:41:09
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Securing AI agents is a variation of the insider-risk problem, requiring distinct identities, narrow"
source_url: "https://www.infoq.com/news/2026/11/qcon-ai-agent-security/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-23T20:00:00.000Z　|　采集：2026-11-24 13:41:09

## 正文

Securing AI agents is a variation of the insider-risk problem, requiring distinct identities, narrowly scoped credentials and fine-grained policy controls, according to [Amanda Walker](https://linkedin.com/in/amandawalker2), senior director of engineering for privacy, safety and security at Google. In a [QCon San Francisco session](https://qconsf.com/presentation/nov2026/agentic-trust-securing-ai-agents-production), she outlined patterns for teams whose agents have been adopted organically and are running ahead of their security and observability frameworks.

With agents now executing multi-step plans in live production environments, Walker argued that "a rogue AI agent is the same problem as a rogue human insider," one that acts with superhuman speed and persistence. Controls therefore need to work at machine speed, rather than relying on someone reviewing logs the next morning. She covered identity and credentials, boundary defence, subagent orchestration and policy-based containment.

Walker described giving an agent raw human credentials as the fastest path to production failure. The agent inherits the user's authority, so a prompt injection in a document can turn that access to an attacker's purposes. She recommended explicit principals for agents, the AI equivalent of service accounts, so each agent can be provisioned and logged separately without impersonating anyone.

Scoped OAuth tokens limit an agent's access in time and scope, but are immutable once issued. With credential attenuation, an orchestrator instead mints narrower tokens for its subagents, such as read-only access to logs, or read-only access to a repository between two commits when bisecting a broken build.

She pointed to [Eclipse Biscuit](https://doc.biscuitsec.org/reference/specifications.html), a token format whose holders can append restrictions, but cannot remove existing ones without invalidating its signature. It takes more work than reusing human authentication infrastructure, but suits services where teams control both ends.

For API keys, a proxy can give the agent a short-lived synthetic key and substitute the real one as traffic leaves, protecting it from prompt injection and exfiltration.

![](https://www.infoq.com/news/2026/11/qcon-ai-agent-security/news/2026/11/qcon-ai-agent-security/en/resources/1Screenshot%202026-11-20%20at%2022.25.21-1795213845789.png)

Walker cautioned that a virtual machine protects the host, not the resources an agent can reach: an agent with network access can still delete a database. Container sandboxes, ephemeral runtimes and sidecar proxies such as Envoy give finer control over file system and network access. But "a perfectly isolated compute sandbox is not useful," she said, so teams need policies that constrain what agents do with the services they call.

She also highlighted poisoned skills on public marketplaces that steal API keys and cryptocurrency wallets, citing [Snyk research](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/) that found more than a third of publicly available skills had at least one security flaw.

Agents also cause harm by being wrong rather than malicious. Walker described an agent that read internal SRE documentation and invoked a break-glass process intended for emergencies, having decided it was the most expedient route. Monitoring caught it, but the lesson was that organisations must distinguish agents from the people they work for, because some processes depend on a human accepting risk. For the same reason, she described computer-use agents, which drive a mouse and keyboard, as in essence impersonation, while acknowledging they solve problems that machine protocols such as MCP cannot.

![](https://www.infoq.com/news/2026/11/qcon-ai-agent-security/news/2026/11/qcon-ai-agent-security/en/resources/1Screenshot%202026-11-20%20at%2022.26.08-1795213845789.png)

Asked in the question-and-answer session about tagging identities as agents, Walker said: "The biggest thing it gave us was auditability about some of these risk decisions." The distinction supports human-only rules, such as emergency access, and can help with agent-only rules, such as signed releases in regulated environments, although she noted that an agent flag alone is not enough for those.

In the Q&A, she also advised security teams not to simply say no, which pushes colleagues to work around controls, but to allow experimentation where mistakes are reversible and keep human review for irreversible actions such as wire transfers.

## About the Author

#### **Mark Silvester**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/qcon-ai-agent-security/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。