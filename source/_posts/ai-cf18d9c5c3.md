---
title: "OpenAI Details GPT-Live’s Architecture for Continuous Stateful Voice Interaction"
date: 2026-09-03 07:41:54
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "OpenAI recently published an engineering account of GPT-Live(https://openai.com/index/continuous-voi"
source_url: "https://www.infoq.com/news/2026/09/openai-gpt-live/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-02T12:20:00.000Z　|　采集：2026-09-03 07:41:54

## 正文

OpenAI recently published [an engineering account of GPT-Live](https://openai.com/index/continuous-voice-interaction-with-gpt-live/). It described how they designed the system to maintain continuous voice interaction while separating latency-sensitive media processing from broader application work. The live path contains the media pipeline and inference loop, while delegation, tool use, persistence, and other application logic run behind an asynchronous [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) boundary.

The design reflects a central challenge for real-time AI applications. Conversation must remain responsive even when other operations have variable latency or depend on external services. OpenAI’s account also describes dedicated, stateful inference for each session. Sessions reserve capacity on their assigned instance, but their context can move to another instance when capacity is being drained, or a conversation reaches its context limit.

OpenAI retained [WebRTC](https://webrtc.org/) as its media foundation, introducing WebRTC Abridged Roundtrip Protocol ([WARP⁠](https://datatracker.ietf.org/doc/draft-uberti-tsvwg-warp/)) improvements and Instant Connect to reduce startup latency. Before launch, the company also conducted a "silent" test that processed authentic incoming Voice traffic while discarding the output. According to OpenAI, this identified load-related behavior that synthetic tests had missed.

[Justin Uberti](https://x.com/juberti), Head of Realtime AI at OpenAI, spoke with InfoQ about the architecture and its operational trade-offs.

**InfoQ: GPT-Live separates the latency-critical media path from application logic through an asynchronous boundary. How did you decide what belongs on each side of that boundary, and which product capabilities were hardest to decouple from the live interaction path?**

> **Justin Uberti:** We knew that achieving our target latency required consistent media delivery – essentially, "the voice must flow." So, we adopted the principle that the live path should only run the media pipeline and inference loop, and everything else – delegation, tool use, persistence, and other application logic – should happen behind an asynchronous RPC boundary. This architectural choice allowed us to focus our optimization efforts on the most critical components and avoid regressions from less time-sensitive work.
> 
> Even so, we were concerned about how fast we could make delegation to our frontier models, and we also had to rethink how to feed voice data to our safety systems. These components each needed some specific design work, but it was much easier to optimize these pieces in isolation rather than as part of the critical path.

**InfoQ: A continuous voice conversation is inherently stateful, yet the system must scale and recover from failures. What architectural approach did you take to managing session state, and how did it affect availability, elasticity, and operational complexity?**

> **Uberti:** The key decision was to use dedicated, stateful inference while allowing session context to migrate in real time to a new model instance when needed. Each session reserves capacity on its assigned instance, but we can steer new sessions to instances with available capacity and migrate existing sessions when an instance is draining or a session nears its context limit. This gives us the desired operational flexibility to spin instances up and down based on demand.

**InfoQ: You retained WebRTC but introduced WARP and Instant Connect to reduce startup latency. Did you consider newer transport standards or other alternatives instead of extending the WebRTC stack, and what interoperability and operational trade-offs led to your choice?**

> **Uberti:** WebRTC provides a battle-tested low-latency media stack with built-in error recovery. While we see a lot of promise in efforts like [RTP over QUIC](https://datatracker.ietf.org/doc/draft-ietf-avtcore-rtp-over-quic/), these protocols currently only provide the transport layer, and not the full media pipeline. Even at the transport layer, there are still some missing features, for example, GCC congestion control and RTT-aware path selection.
> 
> Accordingly, we felt that simplifying WebRTC’s handshake was easier and less risky than replacing the transport layer on both client and server. Each WARP improvement—SPED, DTLS 1.3, and SNAP—could also be deployed independently, allowing us to test its impact and verify its benefits in isolation. As a bonus, existing WebRTC applications get these benefits without any code changes, which is a nice win for the ecosystem. Ultimately, I think WebRTC will become more like [QUIC](https://en.wikipedia.org/wiki/QUIC) and vice versa, meaning that you won’t have to choose between them.

**InfoQ: The silent test mirrored production Voice sessions into GPT-Live without changing what users heard. What architectural mechanisms made that safe and representative, and which failure modes did it reveal that conventional load testing could not?**

> **Uberti:** We set up the silent test to run with the application service in effectively a read-only mode, with no user credentials, so that incoming voice data was fed to the model, but then the output was simply discarded. This allowed us to test the media loop and inference service with authentic voice traffic and no impact to the customer experience.
> 
> Unlike conventional load tests, which typically rely on canned or synthetic speech, the silent test captured the diversity and geographic reach of real Voice sessions. It revealed that system performance degraded under load in ways our synthetic tests had not predicted, which we addressed with targeted optimizations and bug fixes. For example, in certain regions, some GPUs were not colocated with the CPUs feeding them, introducing unexpected latency. Validating these fixes against real production traffic gave us greater confidence they would hold up on launch day.

## About the Author

#### **Eran Stiller**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/openai-gpt-live/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。