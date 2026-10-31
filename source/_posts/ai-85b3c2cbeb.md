---
title: "Article: InfoQ AI, ML and Data Engineering Trends Report - 2026"
date: 2026-10-31 09:15:33
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Key Takeaways !(https://www.infoq.com/articles/ai-ml-data-engineering-trends-2026/articles/ai-ml-dat"
source_url: "https://www.infoq.com/articles/ai-ml-data-engineering-trends-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-30T09:00:00.000Z　|　采集：2026-10-31 09:15:33

## 正文

### Key Takeaways

![](https://www.infoq.com/articles/ai-ml-data-engineering-trends-2026/articles/ai-ml-data-engineering-trends-2026/en/resources/1ai-ml-de-graph-2026-1793191770354.jpg)

-   Language models have shifted from large-sized models to the small language models. We are also seeing the rise of reasoning models that can think through math and logic problems before responding.
-   AI Agents are moving from personal agents to the agents working with teams to companies using agents across entire organizations.
-   System One models like TypeSafe AI’s Jev will see more adoption because of their deterministic and faster inference, in addition to their lower costs compared to the LLMs.
-   AI Inference continues to be a useful and powerful trend and more and more companies will start doing this moving forward.
-   AI evaluations have been getting a lot of attention this year. Evaluations are a way to help us to make sure that the agents do the right thing for the right tasks.
-   Physical AI has seen significant developments in 2026. We are starting to connect the software intelligence to machines that can perceive and act in the physical world.

The InfoQ AI ML Annual Trends Reports offer InfoQ readers a comprehensive overview of emerging trends and technologies in the areas of AI, ML, and Data Engineering. This report summarizes the InfoQ editorial team’s podcast with external guests to discuss the trends in AI and ML technologies for the year 2026 and what to look out for in the next twelve months. In conjunction with the report and trends graph, our [accompanying podcast](https://www.infoq.com/podcasts/ai-ml-data-engineering-trends-2026/) features insightful discussions of all of these trends.

## AI and ML Trends Adoption Graph

An important part of the annual trends report is the trends graph, which shows the trends, technologies and topics that have made it to the innovators category and which have been promoted to the early adopters and early majority categories. The categories are based on the book, [Crossing the Chasm](https://en.wikipedia.org/wiki/Crossing_the_Chasm), by Geoffrey Moore. At InfoQ, we mostly focus on categories that have not yet crossed the chasm. Here is this year’s graph:

![](https://www.infoq.com/articles/ai-ml-data-engineering-trends-2026/articles/ai-ml-data-engineering-trends-2026/en/resources/2ai-ml-de-graph-2026-1793191769123.jpg)

It has been almost four years since ChatGPT came out back in November 2022. It has also been two or three years since RAG Technologies started seeing enterprise adoption and autonomous LLM agents came out. The explosive growth of the last few years has continued in 2026 and AI technologies have seen significant innovations and developments since the InfoQ team discussed the [trends report last year](https://www.infoq.com/articles/ai-ml-data-engineering-trends-2025/) (see 2025 trends graph below).

![](https://www.infoq.com/articles/ai-ml-data-engineering-trends-2026/articles/ai-ml-data-engineering-trends-2026/en/resources/1ai-ml-de-graph-2025-1793191769123.jpg)

For the details of 2025 AI ML technology trends, also check out last year’s trends report [article](https://www.infoq.com/articles/ai-ml-data-engineering-trends-2025/).

This year’s trends article builds on what we discussed last year. It highlights the trends graph, which shows different phases of technology adoption and provides more details on individual technologies added or updated since last year’s trends report. We also discuss which technologies and trends have been promoted in the adoption graph. For this year’s updated adoption graph, the team has also added a few additional topics that we didn’t discuss in the podcast.

As you will notice, we have also done some major reorganizing of the topics where there is an overlap of the scope, and removed a few technologies that no longer need to be tracked on the adoption graph because of their mainstream adoption.

Here are some highlights of what has changed since last year’s report:

## Innovators

The first category on our adoption graph, Innovators, has a few interesting new topics added this year. These topics are discussed in detail below.

### Agent-to-Agent Protocols

As agentic AI systems become complex involving multiple different agents and domains, the communication between the individual agents as well as between multi-agent systems is crucial for these systems to be consistently safe, accurate, and reliable.

One of our panelists in the trends report podcast, Daniel Dominguez, spoke about agent communication protocols and the significance they have in the overall agentic AI solutions.

> **Daniel Dominguez**: There is an architectural shift happening underneath all of this. For agents to become useful inside enterprises, they need to access tools, data, APIs, and talk to other agents. All the protocols like MCP or A2A are going to become more and more different. I think the question would be whether agent protocols become a new enterprise integration layer.
> 
> For example, today we connect applications to APIs. Tomorrow we may increase and have agent discovery capabilities that we see in task coordinating work on top of those APIs. I think all of these architectural layers are also changing the way that agents interact with each other.

### Inference Engines (vLLM, SGLang, llm-d)

Another area that saw a significant development and transformation is the AI Inference. 2026 has been called the year of inference. The companies are shifting from training models to running AI inference in production. Inference is expected to account for around two-thirds of AI compute spending by the end of this year. Reasoning models, long context, and agents have turned it from a model-execution problem into a systems problem spanning compute, memory, networking, routing, and economics.

Hien Luu discussed this trend in detail in what he is seeing in terms of inference frameworks.

> **Hien Luu**: The inference topic has exploded since the beginning of 2026. Obviously from one end, you have all these inference stacks from [vLLM](https://vllm.ai/), [SGLang](https://www.sglang.io/), and so on that are helping the rest of us to spin up our own inference service in our own environment. At the same time, these open-weight models are becoming more and more capable. That space is initially not a whole lot of people how it works and how to operate it, but now there's a lot more information and resources out there about how to actually use these software, \[and\] how to optimize them. At the same time, some of the use cases we talk about are the financial companies where you have PIIs.
> 
> The ability to host these open-weight models internally for those kinds of specific use cases are very, very relevant. I believe that that's going to continue to grow, continue to be the case where a company will do more of this moving forward now that it's a lot more approachable, easier to do. There are some companies that because they want to save cost, they actually want to host internal open-weights models for coding, for example. For many reasons that inference is going to continue to be a very, very useful, very powerful topic and more and more companies will start doing this moving forward in my mind.

### Harness Engineering

A relatively new area that has been seeing a lot of attention starting this year is Harness Engineering. Hien talked about the importance of this topic and how it supports the engineering capabilities like memory management and co-execution.

> **Hien Luu**: I want to add \[two things\] to discussions of agents. One is harness engineering. I think that extensions of context engineering. But the thing that I see is quite interesting and relevant to a workshop that I'm going to be giving is that these agent SDKs start out with just helping us to write the loop. Now this SDK has been expanded to provide harness engineering capabilities, including memory management for context, including co-execution, including some of the out-of-the-box tools for doing into actual local file systems.
> 
> That’s another trend you can see that these agent SDK from LangChain or Anthropic or OpenAI; they all move in that direction of adding more capabilities as part of the harness engineering. As anyone building agents moving forward, that's something to look out \[for\] and leverage. There’s a whole other trend of managing these agents. These companies are providing a runtime environment for you to host your agent. Whether you want to do it or not, that's a separate question, but that's what they're seeing. "We are able to build, we are able to build it well, and then how do we operate and run it at scale?"

### Spec-Driven Development and AI Software Factories

With AI technologies contributing to most of the coding in the software development process, we are seeing the developers starting to focus more on the requirements and specifications to take full advantage of automating the design and coding tasks in their applications.

This technology shift has given rise to trends like Spec-Driven Development and AI Software Factories. Some organizations are creating dedicated teams to create the software factory model where the development teams can use AI tools to automate the complete software development process. This model includes the specific SDLC steps like automatically compiling and analyzing the business domain and requirements of an existing software application, reviewing the new business requirements or systems enhancements, writing functional and non-functional (technical) specifications for those new requirements, generating the design and development tasks to implement the new requirements, and, finally, auto-generating the code and other artifacts of the updated software application.

Panelist Hien Luu shared his insights about Spec-Driven Development.

> **Hien Luu**: This probably started maybe four or five years ago. The coding agent now is pretty powerful. But as you build a project, typically you want to have a plan in advance in terms of what you want, the capabilities and whatnot, and not jump to the coding agent immediately to build. It is borrowing what we know as a good practice to do, but now codified it in a form for the coding agent that you work with. If you build a brand new greenfield project, for example, you build a spec up, what is it about? What are the capabilities that you want?
> 
> Then you have a brainstorming session with your coding agent to provide a context that it needs before you actually go and build it. I think there's a lot of good practices there that people have built around this. I think most people recognize that's a good practice. I don't hear much more about it now because as people are actually practicing it and the AI factory is another that's probably in the last few months of really how to infuse AI into the various steps of your software development life cycle.
> 
> The typical use case is, "Hey, somebody raised a bug. How do you get AI to take that from beginning to end to actually take the PR, do an analysis, try to recreate the problem, come up with a fix, submit a PR, and then you go through the rest of the steps of review and testing and so on?" That is as we all have too many things to do, too many tasks. I think if we can help automate that, that will accelerate another dimension to accelerating the software development life cycle.

### Physical AI / Embodied AI

Another area that continues to see more and more innovation is Physical AI. This is where we bring intelligence into the real world. An AI agent is a software system, how do we bring the same power into the hardware, whether they're robots or collaborative robots (cobots) or self-driving cars.

Daniel Dominguez talked about what's happening and what we should be paying attention to in the Physical AI world.

> **Daniel Dominguez**: Basically it's saying, "How do we bring AI into the physical world?" Over the last few years we have spent the time putting intelligence into software. Now we're starting to connect that intelligence to machines that can perceive and act in a physical world. So what, you said, we are starting to see robotics, we're starting to see autonomous vehicles, drones, and industrial systems are now part of this transition. What I think makes physical AI fundamentally different from software agents is that mistakes have physical consequences on the physical AI.
> 
> One thing is that in software, an agent can make a mistake generating their own file, but a robot can move their own equator. It’s going to be a whole different level of mistakes. Reliability, simulations, safety, verification, \[and\] evaluations are going to become more and more important in the physical world. Based on that, all the foundation models for robots that are happening right now, another important shift is that robotics are starting to benefit from more of the same foundational model approach that transformed the language and vision.
> 
> We're going to start seeing things like \[a\] simulation for [digital twins robots](https://developer.nvidia.com/blog/simulating-robots-in-industrial-facility-digital-twins/), all the things that are going to happen for open robotics, \[and\] all the things that are going to happen from AI agents to physical agents. All of this is just going to start moving faster and faster over the next year because right now the AI is here. Now we have to put it in our physical world.

Chip Huyen also discussed how robots and vision language models can work together.

> **Chip Huyen**: It's the next frontier to get the models into the real world and we see a lot of progress. I think the only challenge is that there are several challenges. We keep saying that robotics are like cars, like LLM to say, "Okay, we know we have a lot of robots in the real world." We have [Waymos](https://waymo.com/) everywhere. We have [Zoox](https://zoox.com/). We see a lot of robots in the real world.
> 
> One big difference between robotics, models, and LLMs, it's that the challenge of backtracking. For LLMs, when you're training on a virtual, on the computer, if it makes a mistake, you can run back. You can reset the state and continue. You can do a lot of explorations and pick the best state.
> 
> You can't really do \[that\] exactly \[in\] robotics. You can't get a robot, "Okay, there's a staircase that's there". The robot falls and it breaks. You can't just run it back and get the same robot as before. It makes exploration extremely, extremely hard. Another challenge is data. I have been looking into a lot of robotic setups. I think [Janatics Robotics](https://www.janatics.com/robotics.php) company – we have a bunch of companies like [Generalist](https://generalistai.com/), [Physical Intelligence](https://www.pi.website/), [Sunday](https://www.sunday.ai/), [Skild AI](https://www.skild.ai/), which I'm very excited about.

Other trends in the Innovators category we have added or revised for this year include the following topics:

-   Agent Security and Governance
-   Voice Agents
-   Specialized Decision Models (e.g., TypeSafeAI's Jev Model)
-   AI Gateways
-   GraphRAG
-   LLMOps / GenAIOps
-   Brain-Computer Interfaces

## Early Adopters

In the Early Adopters category, we would like to highlight two main topics: Innovations in language models and RAG.

### AI Agents / Agent Orchestration

Similar to last year, Agentic AI has again been the dominant topic this year. 2025 and prior years were all about how to learn and how to build AI agents. Now the organizations are trying to figure out how to operate the agents, how to deploy them to production, and how to scale them in production.

Daniel Dominguez discussed the recent developments in AI Agents area, in [this year's podcast](https://www.infoq.com/podcasts/ai-ml-data-engineering-trends-2025/):

> **Daniel Dominguez**: I think the biggest change in 2026 is that AI is moving from being something that we interact \[with\] to something that we delegate \[to\]. Like Hien was saying, I think most AI applications over the last few years were based on a simple interaction. You will just ask a question and the mobile gives you an answer. Right now we're starting this year, we are starting to see a system that can plan, can use tools, can execute actions, can do their own work and continue working for a much longer period of time. I think this year is less about another jump in the model intelligence and more about turning that intelligence into actual systems.
> 
> What I find interesting is that agents are moving through several levels very quickly. We started with personal agents helping one person, then we started seeing agents working with teams, and now companies are thinking about agents operating across entire organizations. I think the important change is that we're moving from beyond just a chatbot model. Instead, we are simply generating an answer. An agent can have goals, can use tools, can interact with software, can make decisions, \[and\] can keep working until the task is complete.
> 
> I think that changes AI from \[an\] interface into something closer to an execution layer. We can see this mainly in software development. Software development is probably where this transition is more visible. We moved from autocomplete to copilots and now we have coding agents. We have tools like Claude, Codex, Cursor, Replit, and others that can navigate repositories, can modify multiple files, can run comments, can execute tasks, can inspect failures, and can iterate on their own. The interesting question is no longer, can AI write code? We already know that AI can write code.
> 
> In the AI Agents space, more complex systems using multiple agents (multi-agent systems) are becoming more common because of the additional benefits they can bring to the table, compared to systems based on individual agents.

Panelist Arthur Casals spoke about the current research happening with multi-agent systems, how these multi-agent systems work, and what are the real-world use cases to leverage them.

> **Arthur Casals**: When you think about [multi-agent systems](https://en.wikipedia.org/wiki/Multi-agent_system) as a topic, it's been there for a few decades already before LLM agents. People from the academic community are seeing whatever comes with LLM agents and after [transformers](https://en.wikipedia.org/wiki/Transformer_\(deep_learning\)) and is related to the entire multi-agent systems trying to reinvent things that were there in the past. My research area is on classical multi-agent systems, before LLM, which doesn't mean that it can't incorporate or use LLM systems as part of it. But these days I've been working on [belief revision](https://en.wikipedia.org/wiki/Belief_revision). This is a big part of solving two problems actually in the AI landscape, one related to hallucination and the second one related to information accuracy and provenance after being processed by the agent. It's between computer science and philosophy, a lot of formal logic, but yeah, it's really interesting. One thing that we've been working with, I think since the beginning of this year, and the end of last year, is a formal logic-based profile definition that could be used. It's similar to the concepts around [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) that we were discussing before. So \[they\] have a structure input, a structural output and how we can make the AI not the agents refrain from using agents, but actually working from here to there.

### AI Evaluations for Models and Agents

This year, we have also seen more developments in the quality assurance space with the AI evaluations, guardrails and harness frameworks. The year 2026 has been dubbed as the year of AI Evaluations. There are a lot of different techniques that are gaining attention in this area. Testing harness frameworks are probably the most talked about topic this year. As AI tools are increasingly leveraged to write code and other components of software solutions, the need for formal, rigorous, consistent and reliable validation frameworks has never been more critical. How do we then measure AI effectiveness? What kind of metrics can help in the evaluation and validation steps with an end-to-end process that has proper checks and balances?

We asked the panelists to explain what they are seeing in the agentic AI evaluation space. Here are their observations.

> **Hien Luu**: This is a very important topic for companies that are bringing their AI agents to production, particularly the one that for their customers, not so much about internal ones. If you look at an example from DoorDash, they build an AI assistant for ordering food. You have other companies that are building customer support agents for external users. We all know that LLMs are not deterministics and building agents, they can take the wrong turn, they can make the wrong tool calls and stuff like that. Evaluations are a way to help us to make sure that the agents do the right thing for the right tasks at the highest level.
> 
> Without evaluation, how would you know that it's gone rogue or does something that's unexpected, not according to your company's policies and all that stuff like that. Companies not only have to do this, but they have to incorporate this as one of their core steps in building AI agents. A lot of companies end up building something called an evaluation harness, which helps drive the whole evaluation flow from getting the data, running the evaluation or tests, as we all know tests – right? – and then assessing the quality at the end.

> **Daniel Dominguez**: I completely agree with the idea that this year is becoming the year of evaluations for models and agents. Once an agent can perform an action, evaluating only the model is not enough. You have to evaluate the whole system, you have to evaluate the model, the tool, the context, the agent loop, the environment. Here is where the metrics changed as well.
> 
> It’s not only whether the answer was correct, it's whether the agent completed the task, how much it cost, how long it took, how many interventions were necessary, and whether it did something unsafe along the way. I think all these evaluations were just starting to see how we are going to evaluate all this workflow regarding agents and regarding LLMs and regarding the interactions that they do in our job.

Outside of these highlighted technology trends, there are a few entries that we are moving from Innovators into the Early Adopters category. All these technologies listed below have gone through extensive development and adoption and are now being used by many applications in various organizations.

AI technologies have, for the right reasons, started being leveraged in the [DevOps](https://en.wikipedia.org/wiki/DevOps) and [SRE](https://sre.google/) areas of the production support, troubleshooting, maintenance, and upgrade operations.

-   Agentic Coding / Autonomous Software Engineering
-   Agent Observability
-   Inference Optimization and Model Routing
-   Small Language Models (SLMs)
-   Reasoning Models
-   Explainable AI
-   Virtual Reality (eg VR/AR/MR/XR)
-   Cognitive Services
-   Edge AI Inference
-   Model Context Protocol (MCP)
-   Multi-modal AI
-   AI DevOps/AI-powered SRE

## Early Majority

We are moving the following topics to the Early Majority category as these technologies have become more mainstream and are being widely adopted by software development teams in various organizations.

### Context Engineering

In the age of AI agents, Context Engineering topic continues to be important and evolving to be used in AI powered solutions. Arthur Casals spoke about this with emphasis on one of the challenges in Context Engineering, the Context Pollution.

> **Arthur Casals**: [Context pollution](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) is actually the biggest problem, the problem worth emphasizing now, because we've seen the past year or so movements toward bigger context windows in general, but they don't really solve the issue if the system cannot distinguish what's useful, what's current, what's alternative information from irrelevant, stale, adversarial material. I'm bringing something from my own research here, but in general, more context can make an agent slower, more expensive, less reliable.
> 
> The practical question would be, if you have your context window, regardless of the size of it, what enters the context? From which source, with which permission, for what step of the workflow so you don't have this huge pollution. That talks about retrieval quality, source distribution, professions rules, context model in general, [context compression](https://www.langchain.com/blog/context-management-for-deepagents). I mean, there's a huge, huge heap of problems underneath the word context. That's how I see it.

Also, compared to last year’s report, we have more topics as listed below, that we think are ready to move to Early Majority status.

-   Generative AI/Large Language Models (LLMs)
-   Retrieval Augmented Generation (RAG)
-   Knowledge Graphs
-   MLOps
-   Vector Databases
-   Data Contracts
-   Data Observability
-   Graph Data Analytics
-   Synthetic Data Generation
-   Open Table Formats (OTFs)

## Late Majority

Finally, in the last category in our adoption graph, the Late Majority, we have a few topics that have moved from the Early Majority category. These technologies are now fully adopted by teams and part of their core architecture and design patterns and development processes.

-   Automated Machine Learning
-   Image Recognition (Computer Vision)
-   Digital Assistants
-   Data Mesh
-   Stream Processing and Analytics
-   Recommendation Engines
-   Lakehouses
-   Spark

## Topics Removed from Adoption Graph

We also want to note that in this edition of the AI ML Trends Report, we have removed some mature technologies that have been in use for several years now. These technologies have become very much part of the mainstream technologies and adoption, and don’t need to be tracked on our adoption graph for our readers.

Some of these topics include mature technologies like NLP and Deep Learning, NoSQL Databases, In-Memory Data Grids, and Big Data (Hadoop).

## Conclusion

AI is a significant technology shift. As we all know by now, after almost four years, it is not a fad or some temporary blip on the technology radar. It is here to stay. It is one of the major technology waves in the last twenty-plus years. We should take advantage of this technology transformation, not be afraid of it. Find ways to use AI tools to automate any workflows in your day-to-day life, whether it is in the office projects or in your personal life.

Some of the team’s predictions for the next year include:

-   We expect to see more innovations in US-based robotic companies.
-   We will also see a lot of cheaper and faster models; the TypeSafe style of model would be very interesting.
-   We're going to start seeing limitations on AI, in the areas of energy and AI infrastructure in terms of access for electricity, capacity, and cooling data center locations. For 2027, some of the biggest AI stories may actually happen outside the models themselves; it's going to be more about energy, the chips, the infrastructure, and the geopolitics.
-   Every AI agent will incorporate some form of the Jev model.
-   Increasingly, communications are going to be between agents, moving forward as we figure out how to build, operate and bring all these agents to production.
-   We'll see a lot of things using smaller specialized agents for mixed models, for well-defined tasks. The big difference will be in the surrounding system.
-   AI will be even a bigger part of our daily lives. We think the niche areas will be settled where AI will be really valuable and where human intelligence is still required.

## About the Authors

#### **Srini Penchikala**

Show moreShow less

#### **Chip Huyen**

Show moreShow less

#### **Daniel Dominguez**

Show moreShow less

#### **Hien Luu**

Show moreShow less

#### **Arthur Casals**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/articles/ai-ml-data-engineering-trends-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。