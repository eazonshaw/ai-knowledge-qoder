---
title: "Microsoft Agent Framework Harness and Hosted Agents Reach General Availability"
date: 2026-08-04 06:53:08
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Microsoft has moved Agent Framework past the SDK stage and into a supported production runtime. The "
source_url: "https://www.infoq.com/news/2026/08/agent-framework-harness-ga/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-03T10:30:00.000Z　|　采集：2026-08-04 06:53:08

## 正文

Microsoft has moved Agent Framework past the SDK stage and into a supported production runtime. The framework [reached 1.0 general availability](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) on April 2, 2026; [Build 2026](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce/), held June 2 to 3, brought the Agent Harness, the GitHub Copilot SDK and Claude Agent SDK connectors, and the multi-agent orchestration patterns to stable release. The harness and Foundry Hosted Agents have since reached general availability, giving platform teams a way to run and govern agents, not only a library to build them with. It runs as one binary across local development, containers, and hosted deployment.

Earlier, InfoQ [covered the framework's launch](https://www.infoq.com/news/2025/10/microsoft-agent-framework/) as the open-source consolidation of Semantic Kernel and AutoGen. The 1.0 release settled the build-time question of which framework to use and moved both predecessors to maintenance mode. The Build announcements address the run-time questions that follow: where agents execute, what they are allowed to touch, and how their behavior surfaces in existing observability and policy systems.

The harness is the center of that story. As Microsoft principal software engineer Wes Steyn [put it](https://devblogs.microsoft.com/agent-framework/the-microsoft-agent-framework-harness-is-now-released/):

> A model on its own can only generate text.

To make it call tools, work through multi-step tasks, and keep going until a job is finished, you wrap it in a runtime; that runtime is the harness. Agent Framework now ships that runtime so teams do not rebuild it. The release includes function invocation, per-call history persistence, context compaction, a todo list with plan and execute modes, file memory, skills, web search, tool approval, and built-in OpenTelemetry, each enabled by default and individually removable. Shell tooling, file access, background sub-agents, and automatic looping remain opt-in and still emit a warning when enabled. Foundry Hosted Agents, the managed deployment target, bills on consumption.

Developers supply a chat client, instructions, and tools; the harness supplies the rest through a single call:

```
client = FoundryChatClient(credential=AzureCliCredential())
# One call wires in planning, history persistence,
# compaction, approvals, web search, and telemetry.
agent = create_harness_agent(
    client=client,
    agent_instructions="You are a research assistant. Plan your work, then execute it.",
    tools=[],  # add your own callable tools here
)
response = await agent.run("Research the outlook for renewable energy stocks.")
```

Why a supported harness matters more than it looks: the harness is most of the system. An April 2026 paper from MBZUAI's VILA-Lab, ["Dive into Claude Code,"](https://arxiv.org/abs/2604.14228) put a number on it. The researchers analyzed Claude Code v2.1.88, whose full TypeScript source was briefly exposed on March 31 when Anthropic shipped an npm release with a sourcemap bundle, and classified roughly 512,000 lines across 1,884 files. Their estimate: about 98.4% of the codebase is harness infrastructure, permissions, context management, sandboxing, tool routing, and recovery, and about 1.6% is AI decision logic. The figure carries an asterisk the authors state plainly: it is a line-count classification of a leak-derived bundle that includes generated and minified code, not a universal audit. Even discounted, the direction holds: several independently built agents, among them Codex CLI and Aider, converged on the same harness shape, suggesting a constraint of the problem rather than a design choice.

An early [benchmark](https://www.linkedin.com/pulse/benchmarking-two-agentic-harnesses-microsoft-agent-github-sherwani-bz72e/) points the same way, with a caveat worth stating plainly: Microsoft AI principal architect Aqib Sherwani ran it, and it compares two Microsoft-owned runtimes, Agent Framework against the GitHub Copilot SDK. The method is more disciplined than most vendor benchmarks, holding the model fixed and running a deterministic mock first so variance traces to the harness. His summary was "same reasoning, different engineering": both reached identical answers in the same number of steps, and the differences lived in the runtime. The most relevant was runaway safety. Agent Framework halted its own loop after 40 round-trips and returned a limit-reached message; the Copilot SDK, with host-side stopping controls off, ran to 300 without stopping on its own. One harness keeps the brake inside the loop; the other expects the host to supply it.

The coding-agent connectors make the governance story concrete. An Agent Framework orchestration can delegate to the GitHub Copilot SDK or the Claude Agent SDK without custom adapters; each runs its own autonomous loop, wrapped so a coding agent composes alongside Azure OpenAI, Anthropic, or custom agents in one workflow. The operative detail is that the connectors honor the identity, content safety, and observability policies already set for the fleet. Coding-agent traffic lands in the same OpenTelemetry traces and Foundry dashboards as everything else, rather than becoming a separate integration with its own access model. It is the control-layer concern also visible in [AWS's Loom](https://www.infoq.com/news/2026/07/loom-aws-agent-platform/) reference platform: the governing question shifts from what an agent can do to who ran it, under which policy, and where the trace lands.

The orchestration patterns reached stable release alongside the harness, covering sequential pipelines, parallel collaboration, and the Magentic pattern derived from Microsoft Research's [Magentic-One](https://www.microsoft.com/en-us/research/articles/magentic-one-a-generalist-multi-agent-system-for-solving-complex-tasks/) ([InfoQ coverage](https://www.infoq.com/news/2024/11/microsoft-magentic-one/)). Its 2024 evaluation reported 38% on GAIA, 27.7% on AssistantBench, and 32.8% on WebArena, statistically comparable to the state of the art on the first two and competitive on WebArena, which Microsoft reported itself because the benchmark has no hidden test set. The patterns share one API, so teams change coordination styles without rewriting agent code.

For platform teams weighing the release, the Cloud-relevant takeaway is the runtime, not the SDK: a supported harness, a consumption-billed hosted target, and a policy and observability model that treats third-party coding agents as governed members of the fleet. The framework, harness, and connectors are available now in .NET and Python on GitHub.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/agent-framework-harness-ga/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。