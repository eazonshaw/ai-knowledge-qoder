---
title: "Article: The Evolution of Agentic Harnesses: From Chains to Graph to Code"
date: 2026-10-27 09:00:26
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Key Takeaways - The progression of agentic harnesses has unfolded across three distinct paradigms: C"
source_url: "https://www.infoq.com/articles/agentic-ai-architecture-harness-evolution/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-26T11:00:00.000Z　|　采集：2026-10-27 09:00:26

## 正文

### Key Takeaways

-   The progression of agentic harnesses has unfolded across three distinct paradigms: **Chains, Graphs, and Code**, marking a transition from ad hoc, "best-effort" experiments to resilient, production-grade software architectures.
-   **Chains** represent the initial era of linear workflows, offering the lowest latency and compute costs for narrow tasks such as summarization, though they remain inherently fragile: a single upstream failure can cascade through the entire execution flow.
-   **Graphs** introduce explicit structure and operational control through nodes and edges, enabling sophisticated capabilities such as conditional branching, parallelism, and state management, thereby improving resilience in complex, multi-step environments.
-   **Code** harnesses treat execution as a first-class primitive, utilizing sandboxed environments and iterative refinement loops to deliver deterministic, verifiable outputs that offer the strongest possible guarantees of system reliability.
-   To ensure engineered reliability, developers must treat LLM outputs as untrusted input, decouple planning from execution, invest deeply in observability, and disciplinedly select the **least complex abstraction** that fulfills the necessary reliability, speed, and cost requirements.

*This article is part of the "[Agentic AI Architecture](https://www.infoq.com/articles/agentic-ai-architecture-article-series/)" article series. In this series, we try to establish agentic AI architecture as a new type of software architecture that will likely dominate the industry for years to come. The articles, written by industry experts, cover various elements and aspects of agentic AI architecture. We aim to present the latest trends and developments shaping the new type of architecture as it enters the mainstream.*

In the last few years, **building agents atop large language models (LLMs) has undergone a tectonic shift**. What began as ad-hoc prompts stitched together with glue code is steadily maturing into what we now recognize as agentic harnesses, also known as structured execution frameworks, that surround probabilistic models with the scaffolding needed to make them reliable, observable, and production-grade.

This evolution has not been abrupt, but incremental, shaped by the growing demands of real-world applications. Across this arc of change, three distinct paradigms have emerged over time, each reflecting a deeper understanding of how to constrain and operationalize non-deterministic intelligence into dependable software systems.

## Chains: Prompt Choreography

Initial agentic systems were built around **simple, linear workflows, which we call "chains**". This approach was intuitive and fast, enabling a quick time-to-market. You strung together a sequence of prompts where the output of step one feeds into step two, and so on. The harness was little more than glue code for tool calls and conversational memory, and ended up treating the LLM like a black-box function: text in, text out, with some syntactic sugar around it.

At LinkedIn, for example, one of our [early Generative AI agents](https://www.linkedin.com/blog/engineering/generative-ai/musings-on-building-a-generative-ai-product) used a fixed 3-step chain built using the [LangChain](https://docs.langchain.com/oss/python/langchain/overview) framework:

![](https://www.infoq.com/articles/agentic-ai-architecture-harness-evolution/articles/agentic-ai-architecture-harness-evolution/en/resources/252figure-1-1792744960352.jpg)

**Figure 1: Simple Chain Workflow with RAG (Source: created by author)**

1.  Routing: The classification step to decide if the query was in scope and which specialized AI "expert" should handle it.
2.  Retrieval: The recall-oriented step of calling the right tools (like Bing web search or internal LinkedIn APIs) to gather specific information, creating a dossier to "ground" the response for Retrieval Augmented Generation (RAG).
3.  Generation: The precision-oriented step of filtering and synthesizing the retrieved data into a coherent final answer.

While relatively fast to build and deploy, this simplicity led to fragility. The workflow, such as answering a user's question via a series of tool calls over the LinkedIn Economic Graph, depended entirely on the textual fidelity of the preceding step. A single mistake upstream would cascade through and derail the entire flow because there was no built-in mechanism to systematically detect or recover from the error. 

This approach epitomized the "best-effort" nature of these early agentic products. Building the initial 80% of the experience was relatively fast, but closing the final quality gap for production required extensive iteration through rigorous evaluations, prompt refinement, and sustained engineering investment.

## Graphs: Introducing Structure and Control

As use cases for agentic systems grew more complex, the inherent limitations and fragility of linear chains became impossible to ignore. **Developers responded by adopting graphs, the natural abstraction for introducing branching, conditional logic, parallelism, and retries into the workflow.** 

In this approach, graph-based harnesses use nodes to represent distinct tasks (such as LLM calls, tool invocations, or validations) and edges to govern the control flow. This shift from a linear structure to a graph mirrored the evolution seen in both data pipelines and traditional distributed systems.

The key innovation of graph-based systems was not merely adding branches but making control flow explicit and declarative. Rather than embedding logic implicitly in prompts or code, developers defined execution plans that could be easily inspected, modified, and reasoned about. This created a reasoning-loop control flow in which the LLM could leverage the graph structure to route and execute complex, long-running tasks, often in dynamic environments.

For many complex tasks, a single monolithic agent application was not tenable. Graph systems led to the emergence of multi-agent systems with a top-level intelligent orchestrator to manage task flow and dependencies. This transition to multiple agents required first-class protocols for establishing asynchronous agent-to-agent communication, like [A2A](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/) and [ACP](https://agentcommunicationprotocol.dev/introduction/welcome) (which eventually merged into A2A).

![](https://www.infoq.com/articles/agentic-ai-architecture-harness-evolution/articles/agentic-ai-architecture-harness-evolution/en/resources/188figure-2-1792744960352.jpg)

**Figure 2: Representative Multi-agent Architecture (Source: created by author)**

Given the cognitive limitations of these agents, "human in the loop" (HITL) support was essential. Agents were not fully autonomous; instead, they sought clarification, received feedback, or requested approvals from human operators at key decision points, balancing autonomy with control.

At LinkedIn, we [implemented orchestration and inter-agent communication](https://www.linkedin.com/blog/engineering/generative-ai/the-linkedin-generative-ai-application-tech-stack-extending-to-build-ai-agents) by reusing the existing LinkedIn messaging system to handle long-lived tasks, broken into message sequences, ensuring guaranteed "First In, First Out" (FIFO) delivery and seamless message history lookup. This foundation provided:

-   **Parallelism** via multiple message threads.
-   **Resilience** through existing constructs for persistent retries and eventual delivery.
-   **Flexible execution modalities**, allowing agents to respond in a single chunk, synchronously streaming, or asynchronously streaming across multiple messages.

The graph-based workflow was implemented atop [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview) and enabled several critical functions that improved system robustness and complexity management:

-   **Conditional execution** allowed routing and re-routing based on intermediate results.
-   **Retries and fallbacks** enabled the system to gracefully recover from failures.
-   **State management** allowed the system to move beyond text and maintain structured intermediate data across the flow.
-   **Explicit validation**, including schema checks, business rules, or secondary models, was used to avoid blindly trusting LLM outputs.

These agents also required advanced memory to learn from user interactions and support an increasingly personalized, adaptive, and useful experience over time. Building atop the distributed multi-agent architecture allowed us to model [Cognitive Memory](https://www.linkedin.com/blog/engineering/ai/the-linkedin-generative-ai-application-tech-stack-personalization-with-cognitive-memory-agent) itself as another agent that application agents could integrate with.

These innovations enabled the launch and subsequent iterations of [Hiring Assistant](https://news.linkedin.com/2025/hiring-assistant-globally-available), LinkedIn’s first AI agent designed for recruiters. Recruiters can choose to delegate time-consuming tasks to Hiring Assistant, including finding candidates and assisting in applicant review, so that they can focus on the most strategic, people-centric parts of their job.

Over time, we realized that delivering a truly great agentic experience required more than a capable model. Our agent needed strong domain intelligence, grounded in a rich organizational context, and the ability to improve over time. This required memory to learn from interactions and support an increasingly personalized, adaptive, and useful experience for recruiters.

While graphs significantly expanded the complexity of tasks agents could handle compared to chains, they remained fundamentally bounded automations built around human-defined workflows. As these workflows and state spaces grew more complex, developers faced increasing pressure to explicitly encode recovery paths, validation logic, and edge-case handling. This resulted in brittle, overly intricate, and often difficult-to-maintain flow definitions and evaluation frameworks. Rigidity also made graph-based approaches ill-suited to tasks that could not be cleanly expressed as deterministic workflows.

## Code: Execution as a First-Class Primitive

**The most recent leap in agentic systems has come from treating code, rather than prompts, as the primary medium of reasoning**. Instead of simply asking the model to "think through" a complex problem in natural language, coding harnesses generate, execute, and refine code in a sandbox environment.

This eliminates the fundamental limitation of asking developers to define intricate workflows and instead allows agents to "find" solutions by generating code with verifiable outputs. These harnesses often come with built-in tools for planning, task delegation, memory access, and token management/compaction.

A natural language output from an LLM is probabilistic and, prior to subsequent validation steps, inherently untrustworthy. A piece of code, however, is deterministic. It either compiles, runs, and delivers the correct output, or it fails. This pass/fail clarity provides the tight feedback loops necessary to dramatically improve system reliability.

To ensure safety and correctness, this architecture relies on four core components:

-   **Execution Sandbox**: A controlled, isolated environment where the generated code can run safely.
-   **Instrumentation and Logging**: Mechanisms to capture all outputs, errors, and intermediate states during the code's execution for inspection.
-   **Validation Harness**: Unit tests, assertions, or checks that automatically verify the generated code's output against expected correctness criteria.
-   **Iterative Refinement Loop**: The agent observes failures, systematically modifies its generated code, and automatically retries execution until the correctness criteria are met.

At LinkedIn, we have used this approach to build an internal tool that allows developers, product managers, data scientists, and even business operations personnel to ask natural language analytical questions of an agent and receive answers grounded in aggregated platform data and insights. The agent operates within our existing privacy, access control, and security frameworks, enforcing role and purpose-based data access, layering automated governance review over outputs, and routing model interactions through approved, compliant infrastructure.

The agent translates the user query into a combination of declarative SQL and imperative Python code, executes it against sample data, validates the outputs against strict constraints (including privacy, visibility, and governance checks), and iterates on it in a loop until all correctness criteria are met.

Using a code-based approach has resulted in a quicker time-to-market, since we’ve avoided the laborious work of creating bespoke prompts, tools, and workflow graphs, and running evaluation cycles to fine-tune them. The final system is not only more reliable but also significantly more auditable and reproducible.

## Best Practices for Robust Agentic AI Architectures

Regardless of what stage your agentic system is at, from simple chains to complex coding harnesses, certain foundational principles separate robust systems from fragile ones.

-   **Treat LLM Outputs as Untrusted Input**: Since the Large Language Model’s output is probabilistic, it must be rigorously validated before it influences any downstream logic. Never trust the text output without validation; apply schema checks, business and compliance rules, or secondary models before proceeding.
-   **Decouple Planning from Execution**: Allow the model to propose a plan, but execute that plan within a strictly controlled software framework. This separation is vital as it significantly improves both transparency and system control.
-   **Invest in Observability**: You cannot debug a complex and highly non-deterministic system if you can't see what it's doing. Robust observability must capture detailed information, including the state at each step of agent execution, execution traces, and validation results, while appropriately masking sensitive information.
-   **Build for Continuous Improvement**: Agentic systems are inherently iterative rather than static. Build robust feedback loops that capture and analyze failures, enable prompt, policy, and procedural memory evolution, and invest deeply in evaluation and simulation environments to systematically improve system performance over time.

## Choosing the Right Abstraction

Not every problem justifies the operational complexity of graphs or coding harnesses. Selecting the right abstraction is ultimately an engineering tradeoff across task complexity, reliability requirements, explainability, latency, and cost. The fundamental principle is simple: Use the least complex system that reliably solves the problem.

Chains are often sufficient for narrow, linear tasks where a single pass or a limited sequence of prompts can produce acceptable outcomes. Examples include drafting customer support responses, summarizing documents, moderating content, or extracting structured data from predictable inputs. These systems typically offer the lowest latency and compute cost because they minimize model calls, orchestration overhead, and state management. For many production workloads, chains remain the most economically efficient option, especially when rapid iteration or large-scale deployment is required.

Graphs become appropriate when workflows require conditional branching, retries, tool invocation, or explicit state transitions. Real-world examples include multi-step customer service resolution, enterprise IT automation, compliance pipelines, or onboarding systems where different actions are triggered based on intermediate outputs. While graphs improve resilience and operational control, they introduce additional latency through orchestration layers and often require multiple LLM invocations, increasing both serving cost and system complexity. They represent a middle ground: more reliable than chains, but more expensive to design and operate.

Coding harnesses are best suited for domains where precision, verification, and recoverability are critical. Examples include software engineering agents, financial analysis systems, legal document validation, scientific workflows, and infrastructure automation, in which generated outputs can be tested, compiled, simulated, or formally validated. These systems frequently incur the highest compute and latency costs due to iterative reasoning loops, execution of external tools, and validation cycles. However, they provide the strongest guarantees in environments where correctness materially outweighs speed or cost.

As models improve and costs decline, the instinct to over-engineer remains a common failure mode. More sophisticated abstractions often increase compute spend, latency, and operational complexity faster than they improve business outcomes.

The real advantage comes from disciplined abstraction selection: deploying the simplest system that meets reliability, speed, and cost requirements. **Strong engineering organizations do not win by maximizing architectural sophistication; they win by optimizing capability per dollar.**

## Conclusion

The rapid evolution of agentic systems has triggered a fundamental change in the role of the developer. We are witnessing a professional transition from the 'Prompt Designer' to the 'System Architect'. In the early days of chain-based LLMs, success often hinged on the artisanal skill of crafting the perfect prompt. However, as systems mature into complex graph and code harnesses, the focus has shifted to rigorous software engineering: designing execution flows, managing state and dependencies, and building robust validation and recovery mechanisms.

This change is rooted in a broader goal: moving from a "best-effort" mindset to one of "engineered reliability". Early systems tolerated unpredictability as an inherent constraint. Modern agentic harnesses demand better; they are engineered to aim for determinism wherever possible, use controlled nondeterminism only where necessary, and feature clear failure modes with defined recovery paths.

This progression marks the evolution of AI agents from bleeding-edge fringe experiments into first-class production-grade systems. The novelty is not in the components themselves, but in how they integrate probabilistic models into deterministic frameworks.

The challenge and the opportunity here are to treat these systems not as magical black boxes, but as software systems that demand the same rigor, design, and engineering excellence as any other critical infrastructure.

*This article is part of the "[Agentic AI Architecture](https://www.infoq.com/articles/agentic-ai-architecture-article-series/)" article series. In this series, we try to establish agentic AI architecture as a new type of software architecture that will likely dominate the industry for years to come. The articles, written by industry experts, cover various elements and aspects of agentic AI architecture. We aim to present the latest trends and developments shaping the new type of architecture as it enters the mainstream.*

## About the Author

#### **Karthik Ramgopal**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/articles/agentic-ai-architecture-harness-evolution/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。