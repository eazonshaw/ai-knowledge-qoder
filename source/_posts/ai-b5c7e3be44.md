---
title: "Google Agent Development Kit for Kotlin Reaches Feature Parity with Python, Supports On-Device AI"
date: 2026-09-21 07:43:13
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google has released the Agent Development Kit (ADK) for Kotlin 1.0(https://developers.googleblog.com"
source_url: "https://www.infoq.com/news/2026/09/google-adk-1-0-released/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-20T10:00:00.000Z　|　采集：2026-09-21 07:43:13

## 正文

[Google has released the Agent Development Kit (ADK) for Kotlin 1.0](https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/), a production-ready framework for building AI agents across Kotlin, Android, and JVM/server applications. It brings Kotlin to feature parity with Google's ADK for Python and Java, while adding Android-specific capabilities for on-device and hybrid AI.

Using ADK for Kotlin 1.0, developers no longer need to rely on Python for their agentic logic. Instead they can use idiomatic Kotlin APIs for orchestration, tool support, persistence, memory, and human-in-the-loop workflows. Built on Kotlin Multiplatform, the ADK runs on all supported platforms, from server-side applications to mobile devices. According to Google, its architecture makes it "completely agnostic to specific model backends, session providers, or memory systems".

ADK for Kotlin 1.0 adds support for hierarchical multi-agent systems where a parent agent can delegate tasks to a child; context compaction and multi-turn conversation, which provide automatic context management and history summarization to reduce token usage; session management, which allows agents state to be paused, serialized, and restored; and first-class Java interoperability.

One key design choice in ADK for Kotlin 1.0 concerns support for tools and human-in-the-loop workflows.

Tools can be declared using specific annotations such as `@Tool` and `@Param`, which KSP uses to generate Kotlin function schemas at compile time. This choice avoids relying on runtime reflection for strengthened type-safety and performance.

[Commenting the announcement on LinkedIn](https://www.linkedin.com/posts/glaforge_announcing-adk-for-kotlin-10-building-production-ready-activity-7503479371857346560-Aj1B/), PiNCAMP Android engineer Arjun Kumar, noted that "handling tool schemas at compile time with KSP keeps startup fast on mobile targets".

Human-in-the-loop workflows help developers prevent unintended or improper tool usage by requiring explicit human confirmation before sensitive actions are executed. This is particularly important for tools that can perform high-impact operations, such as initiating a bank transfer. Developers can require confirmation by setting `requireConfirmation` in a tool’s declaration. This allows generated functions to:

> handle sensitive transactions requiring explicit user approval, while taking full advantage of first-class Android persistence services, like storing chat sessions in Room, indexed memory in AppSearch, and files directly in Android storage.

The following example illustrates this concept:

```
@Tool(
    name = "transferFunds",
    requireConfirmation = true
)
fun transferFunds(...)
```

Joske Vermeulen, maintainer of the [AI Dev Weekly newsletter](https://www.aimadetools.com/), shared his recommendations about using `requireConfirmation`:

> Start with one resumable agent and explicit tool confirmation before reaching for a hierarchy of agents. Production readiness depends more on lifecycle recovery and deterministic tool boundaries than on agent count.

Another key element is skills, which allow develoopers to manage procedural knowledge stored in `SKILL.md` files. These are dynamically loaded only when needed using what Google calls *progressive disclosure*. This approach gives agents access to domain-specific playbooks without requiring the entire playbook to be included into the model's context every time.

In addition, the ADK for Kotlin 1.0 includes Android-native features for building agents that combine on-device and cloud-based AI. For on-device inference, the framework supports both [LiteRT-LM](https://www.infoq.com/news/2026/06/google-litertlm-gemma4/) and [ML Kit](https://www.infoq.com/news/2025/06/google-mlkit-genai-gemini-nano/), which is currently available only as a beta feature. For cloud and hybrid AI, the ADK integrates with Firebase AI Logic. This allows Android apps to run agents locally when appropriate while seamlessly using cloud-based models when greater capabilities are required.

The ADK for Kotlin is open source and [available on GitHub](https://github.com/google/adk-kotlin).

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/google-adk-1-0-released/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。