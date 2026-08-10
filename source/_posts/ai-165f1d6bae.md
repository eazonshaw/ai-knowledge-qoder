---
title: "Article: Comprehension as an Architectural Characteristic: A System That Is Not Understood Cannot Evolve Safely"
date: 2026-08-11 06:27:34
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Key Takeaways - Human comprehension is an inherent architectural characteristic that must be activel"
source_url: "https://www.infoq.com/articles/system-comprehension-evolutionary-architecture/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-10T11:00:00.000Z　|　采集：2026-08-11 06:27:34

## 正文

### Key Takeaways

-   Human comprehension is an inherent architectural characteristic that must be actively maintained. Unlike performance or availability, it silently decays over time, and a system that is not understood cannot evolve safely.
-   AI has commoditized code generation, removing the comprehension that formed for free during implementation. It must now be sought before generation, not during review.
-   Comprehension cannot be measured directly, but its decay creates signals that teams can monitor and act on.
-   For a system to be evolvable, the team must hold a shared model of the essentially complex core and its seams. Comprehension has to flow from agent to individual, and individual to team.
-   The human review is a comprehension checkpoint, not a quality gate, where the comprehension attained before code generation is validated, strengthened, and disseminated.

*This article was written by participants of the [online InfoQ Certified Architect Program](https://certification.qconferences.com/architecture). It represents the capstone of their work, reflecting the cohort's collective learnings on the intersection of AI and modern software architecture.*

## The Comprehension Problem

Seasoned teams on complex systems would have experienced production incident calls where most of the time goes into figuring out how the system is connected and what it actually does, rather than finding the bug. Eventually, the team ends up digging through the code to settle what the team’s collective memory couldn’t - how the system behaves. This problem arises as the understanding never expanded beyond certain individuals and outwards to others on the team(s).

In evolutionary architecture, systems should be designed to absorb and adapt to changing requirements and shifting landscapes. But to actually enable this adaptability, team members need a profound understanding of the system itself. As Peter Naur argued in *[Programming as Theory Building](https://pages.cs.wisc.edu/~remzi/Naur.pdf)*, it is not enough to simply understand the code; you have to understand the underlying "theory" held in the minds of the programmers who built it, "**theory**" being the mental model programmers build to understand how a program works. His claim is that the system includes the theory and not just the code. How widely and durably that theory is held across the team is therefore a property of the system itself. Margaret-Anne Storey expands on this idea in her paper [*From Technical Debt to Cognitive and Intent Debt: Rethinking Software Health in the Age of AI*](https://arxiv.org/pdf/2603.22106), where she defines three distinct kinds of system debt: **technical**, **cognitive** and **intent**. Cognitive debt is the silent loss of shared understanding of the system (loss of theory, as per Naur); intent debt is the lack of rationale for why the system is the way it is. Unlike characteristics like performance and availability, this property can deteriorate silently over time, and a system that is not understood cannot evolve safely. Because human comprehension holds both the what and why, it is a direct antidote to both cognitive and intent debt and must be recognized as an inherent architectural characteristic of evolutionary architecture.

## Three Forces That Erode Comprehension

#### Related Sponsors

In complex systems maintained by multiple teams, centralized decision-making often creates bottlenecks and knowledge silos. Decisions queue behind a few people and knowledge concentrates with them. To combat these bottlenecks and truly enable an evolutionary architecture, organizations might shift toward decentralized architectural decision-making. While this optimizes flow and teams develop a deep expertise in their local sub-domains, the global picture fragments. Teams may understand how their service works, yet could lose the "why" behind where the systemic boundaries were drawn in the first place. Without shared governance and practices, local theories drift apart, deepening the organization’s knowledge fragmentation.

Team churn also compounds this problem. When people leave the team, they take some of the "theory" away with them. New hires must rebuild the theory from scratch, aided by artifacts that generally record the what and not the why. Lacking the historical context of why certain boundaries exist, they might fall back to making tactical patches rather than systemic improvements matching the original design. In time, this erodes architectural integrity.

The latest and fastest of these three forces is GenAI. It reduced the implementation effort that used to generate comprehension as a byproduct, but that effort was also what built the mental model of the system in developers. Comprehension was naturally built and reinforced during the design, implementation, and verification phases prior to GenAI becoming prominent in software engineering. As this technology matures and delivery pressures become more pronounced than ever before, we see this tendency to deliver without comprehension creeping into enterprise software. During a feature demo to a client, an experienced engineer on one of our teams had to spend considerable time to understand how a piece of code she shipped a week before works, because she had never formed the mental model of it. The code passed every quality gate, but the demo was the first time the comprehension debt surfaced.

A recent [article](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers) from Arvind Narayanan and Sayash Kapoor talked about a software engineer's work being a "decide-execute-deliver" sandwich, with understanding being a pre-requisite for all three layers.

Generative AI has compressed the middle layer, and we argue that the comprehension that used to come in all three layers should now be deliberately created at the two ends. This is where comprehension of the essentially complex parts has to form - before and after the "generative" phase. Software engineers must expend mental effort during these phases to connect designs and existing system structures to organize and create a mental model.

Knowledge fragmentation, team churn, and AI-generated change - each erode comprehension at different speeds and lead to a system that cannot be safely changed.

## Detecting and Measuring Comprehension Loss

Architects and technical leaders can quantify the erosion of system comprehension by monitoring several key indicators. The natural instruments for this are fitness functions - they let architects express important architectural characteristics and verify them automatically. Automated fitness functions can measure some leading indicators of theory loss, but they cannot measure comprehension of intent itself. No pipeline check can confirm that a human understands why a change exists. The automation's job is to detect the conditions under which theory decays; the act of verifying that the change matches intent and that someone actually holds the theory of it belongs to the human checkpoint described in the next section.

So, we have deliberately stretched the term. The "fitness functions" in the list below assess the sociotechnical system around the code, and only some are fully automatable. The rest are monitored indicators rather than executable checks, and in several cases that is a choice, not a limitation. Metrics about people change behavior when enforced - a gate that blocks a PR could be gamed to bypass the hurdle - enforce when gaming is hard or harmless and monitor otherwise. Treat thresholds as triggers for investigation rather than targets. Where a gate exists with an option to bypass, track the waivers and overrides so that thresholds can be corrected or team practices can be improved.

![](https://www.infoq.com/articles/system-comprehension-evolutionary-architecture/articles/system-comprehension-evolutionary-architecture/en/resources/235figure-1-1786088589722.jpg)

**Figure 1: Comprehension must form before and after the execute phase  
Source: author-created with draw.io**

### Code Review Dynamics

Pull Requests are a primary vehicle for knowledge sharing. Dysfunctional review metrics often point to a breakdown in shared understanding. Keep an eye out for these early warning signs:

-   **Large PR sizes**: When a PR is too large to review, the knowledge flow it is supposed to carry does not happen. Enforce this by blocking large PRs (define the thresholds for your context). Ask the author to break down the PR and also catch this early in design review.
-   **Agentic Code Reviewer**: Do not let agentic code reviews be the sole reviewer of the PR - they can be the first reviewer, but it has to be followed by a human reviewer. Enforce this with policies such as CodeOwners.
-   **Review Dysfunction**: When review load falls on a handful of people or when the organizational dynamics deter reviewers from giving proper feedback to seniors, approval becomes a formality. This can only be monitored. Track the share of approved PRs having no substantive comments or with only ‘LGTM’, and the distribution of reviews across the team. Rotate reviewers and empower everyone in the team to review PRs, regardless of title. Make it explicit that challenging any author’s design or code is expected, including the architect’s.
-   **Missing Design Reviews**: Code changes with a large blast radius - the essentially complex core and seams - should always be preceded by a design review, regardless of the size of the change. This is difficult to enforce, so track PRs that touch core modules and get merged without a prior design review. Have the author give a team session on the design changes to make up for the lost design review opportunity.

### Knowledge Distribution

Projects stall when a critical mass of context is held by too few engineers. Look out for instances where only one person holds the intent of the system. "Let's wait for Dave" should make the team sit up and take notice. **Degree of Authorship** ([DOA](https://dl.acm.org/doi/epdf/10.1145/2512207)) measures the amount of work a person contributes to the creation of a system. A high DOA implies the knowledge is concentrated around a few individuals. Note that DOA has its limitations; consider it as just one of the signals that can be used. Monitor it using tools like [git-truck](https://github.com/git-truck/git-truck) that can map knowledge distribution across a codebase and expose severe single points of failure. A low [truck factor](https://en.wikipedia.org/wiki/Bus_factor) signals fragile system comprehension. Rotate developers working on such modules, add multiple owners to those modules, and conduct learning sessions.

### Onboarding Friction

The time it takes a new hire to become productive is a direct proxy for system comprehensibility. If onboarding times are trending upward, the project's cognitive overhead is likely weighing on tenured team members too. Track the time it takes for the new hire to contribute to the design and architecture of the system, not just raise pull requests. Encourage new engineers to keep a log of confounding things - missing documentation, stale contracts, implicit dependencies. Review and address these findings on a periodic basis.

### Lack of Documentation of Intent

Design decisions or changes without the accompanying 'why' can confuse even the creators over time. Documentation is an answer to "will someone who wasn’t here need it". Monitor the origin of such issues by detecting when a PR touches core or structural boundaries without adding an ADR or documentation for the rationale. Also track instances where changes to existing modules require unearthing the missing context. Address this by adding lightweight ADRs to capture the intent.

### Domain Leakage

Changes that degrade architectural boundaries can make "local reasoning" impossible, and a seemingly isolated change has unintended side effects in an unrelated area. Use architectural fitness functions to fail the build if constraints are violated, and if so, redesign the interfaces or dependencies.

## Comprehension Checkpoint

A human reviewer cannot just read the code and trust what it says about itself. The human review at this stage is a comprehension checkpoint, not a quality gate. Feedback sensors like fitness functions should catch bad output, and the human is there to hold the intent, to build the theory of what the change does and why. This is why design reviews are more important than code reviews in agentic engineering flows.

There is a core difference in an engineer understanding a module during design and implementation vs after it was generated - that is the difference between active and passive thinking. When you solve a problem actively without having a solution readily available, it leads to creative solutions and ideas that are relevant to the context. This helps in evolving the system in an organic manner, driven by decisions relevant for the business domain and constraints. If code reviews and verification are the only places where our comprehension is sought, then comprehension never really forms. Pre-hoc comprehension ensures that humans remain in control of the system being constructed. Post-hoc comprehension implies that you will no longer be deciding the design of the system; since there are numerous ways in which the system can be built, and if you are not taking the decision upfront, you will end up with a statistically default design that the LLM was trained on, not the one your context demands.

This does not mean that every change has to follow this process. It still makes perfect sense to delegate grunt work to AI, with the reviewer needing to know just enough to verify the output, and not really elevate it to a shared understanding. Decide when to hold the theory for the essentially complex core, and when to let go.

Any system has to be understood, designed, built, validated, and maintained, even if parts of this flow get expedited as technology evolves. Teams should start by validating the requirements and ensuring they are unambiguous and testable, with documented acceptance criteria, before letting the agents code. This is not a call for big upfront design, as the unit here is a user story and not the entire system. With agentic engineering, the decide-execute loop runs faster, and the human engineer has to hold the intent of the change - what is changing and how the behavior changes at the boundaries - so that construction can be delegated without losing the theory.

Have the engineer explain the code in their own words, and carry that explanation into the PR description and the merge commit message. The value lies entirely in producing the commit message / PR description manually, instead of having an agent generate it automatically. The friction of writing the message is the probe for the author to find out if they hold the theory or not.

## Sustaining the Shared Model

Individual comprehension, while necessary, is still not sufficient. When an engineer holds a simplified model of the system in their head, comprehension divergence is cheap to fix. But when sub-systems communicate, and different teams interact, the divergence of mental models is expensive. Bounded context seams are the most important areas where comprehension must be shared. An API schema, for example, explains the shape of the request and response, pre-conditions and authorization, but does not talk about the behavioral aspect of the contract - things like idempotency, retry-safety, ordering requirements, consistency, and delivery guarantees. That behavior is theory and must exist on both sides as a shared understanding. Tools and artifacts such as ADRs and context maps are necessary, but they don’t sustain comprehension by themselves. That shared model can be achieved only by enabling knowledge flow: maintaining deliberate team topologies, pairing and rotating engineers across modules so that the theory is not siloed with one engineer, and adopting [decentralized](https://www.infoq.com/news/2026/06/architectural-decisions/) architectural decision-making.

![](https://www.infoq.com/articles/system-comprehension-evolutionary-architecture/articles/system-comprehension-evolutionary-architecture/en/resources/177figure-2-1786088589722.jpg)

**Figure 2: Individual comprehension is necessary but not sufficient - it must flow onward to the team to survive churn.  
Source: author-created with draw.io**

With GenAI, the knowledge silo issues are magnified. When agents produce code faster than humans can comprehend, the knowledge flow gets an additional first hop - between the agent and the individual. The person directing the agent must be able to explain the design - not by learning it from the generated output, but by reconciling what was implemented with the mental model they had during design. The comprehension checkpoint handles the *agent-to-individual* hop; the practices above sustain the *individual-to-team* flow that makes shared understanding durable. If comprehension is an architectural characteristic, then comprehension debt (the gap between what the system is and what the team understands it to be) is a liability that accrues interest. Like technical debt, it is not paid down in a single effort. The practices work only as recurring habits, and hence comprehension must be baked into the process in such a way that it is meant for the engineer who hasn’t joined yet.

## Engineering Comprehension Deliberately

Treating comprehension as an architectural characteristic means giving it what we give the others: leading indicators to watch, fitness functions to automate them, and practices that hold the line. If you discover the gap in comprehension only after the agent-generated code is in production, you've already lost the cheap option. Fragmentation, churn, and generative AI each widen that gap at their own pace, and none of them announces itself - the system keeps passing its gates while the theory behind it thins unseen. So make comprehension deliberate at the seams and at the core domains and wherever the system should be evolvable.

Evolutionary architecture promises systems that absorb change safely. That promise is only as good as the shared understanding underneath it, and understanding only survives when it is deliberately and continuously engineered.

## About the Authors

#### **Jacobus Meintjes**

Show moreShow less

#### **Narayana Rengaswamy**

Show moreShow less

#### **Paul Katsande**

Show moreShow less

#### **Sureshbabu Bikki**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/articles/system-comprehension-evolutionary-architecture/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。