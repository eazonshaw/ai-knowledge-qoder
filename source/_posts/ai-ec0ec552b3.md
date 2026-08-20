---
title: "How Code in the Age of Artificial Intelligence Becomes Write-Only and Disposable"
date: 2026-08-21 06:17:04
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Artificial intelligence (AI) makes all code write-only, Phillip Mortimer argued in his talk Complexi"
source_url: "https://www.infoq.com/news/2026/08/code-AI-write-only-disposable/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-20T11:25:00.000Z　|　采集：2026-08-21 06:17:04

## 正文

Artificial intelligence (AI) makes all code write-only, Phillip Mortimer argued in his talk [Complexity and Creativity in Software Engineering](https://qconlondon.com/presentation/mar2026/complexity-and-creativity-software-engineering) at [QCon London](https://qconlondon.com/). It’s too dense to read, and tests define the behaviour and become the documentation. Code is also disposable; it becomes easier to rewrite than to debug. Humans can’t review AI-generated code at scale. Mortimer suggested automating reviews and letting agents self-heal software via observability. Intent decouples from implementation; developers should focus on creativity.

In the age of AI, all code is write-only, Mortimer argued. He quoted Eric S Raymond:

> Write-only code is code so arcane, complex, or ill-structured that it cannot be modified or even comprehended by anyone but its author, and possibly not even by him/her.

Certain languages are write-only by design, trading readability for incredible power and performance, Mortimer said. He mentioned APL and regular expressions. These languages represent a kind of complexity that comes from extreme density.

A principle to deal with such code is that the tests define the behaviour:

> When you write code that is too dense to read, the only way to understand what it does is through extensive test cases. The tests become the documentation for your code.

You read the input-output pairs, which tells you what the code is supposed to do, because you can’t read it very easily from the code itself, Mortimer said.

Another principle Mortimer mentioned was that the code is disposable. Write-only code is so hard to debug. It’s often easier to rewrite the code from scratch than it is to modify what you’ve already written. You keep the tests, throw away the code, and write it again, he said.

Humans can’t review generated code due to the sheer volume, Mortimer argued:

> There’s no point in having humans try to review AI-generated code line by line, because humans very quickly become the bottleneck.

Mortimer suggested writing really detailed tests and automating your code reviews. He also suggested that software should heal itself:

> A powerful thing to do is to have an AI coding agent listen to your observability platform, aggregate alerts over some time window, and start raising pull requests to fix the problems that it’s seen, starting with the most common ones.

We should decouple intent from implementation. AI uses natural language, making developers portable across programming languages, Mortimer said.

The role for the software developer today is creativity, Mortimer argued:

> Creativity is iterative. It’s step-by-step improvement over long periods of time. Anyone can create. You just need to start working.

We should embrace a write-only principle, Mortimer argued. AI has solved the implementation problem; the only thing left is creativity.

Developers enjoy writing software. It’s challenging, mentally stimulating work. What I really like doing is solving problems and building, Mortimer said. And there’s never been a better time to build with software than today. Intent and implementation are now completely decoupled. We are all full stack developers; all you need is a creative idea, he concluded.

InfoQ interviewed [Phillip Mortimer](https://www.linkedin.com/in/phillip-mortimer/) after his talk.

**InfoQ: How can we automate code reviews?**

> **Phillip Mortimer**: This is relatively straightforward - a coding agent harness can be invoked as a CI action, with a skill that enshrines what a senior developer would look for when reviewing code. The code review agent can post comments, request changes, or even approve a PR.
> 
> You might think that having a model review its own output would be ineffective - but I’ve seen many examples of this process providing really valuable review comments, catching bugs before they get deployed. A different prompt, a different set of instructions, a different context seems to be enough to get a meaningful review. In fact, this adversarial review process is becoming a common technique in agentic systems more widely, not just in code review.
> 
> Code review agents can also be set up to run outside of the pull request loop, which might not catch structural issues within an atomic change in a single pull request. "De-slopify" agents can be run regularly against your codebase, looking for repeated code, unparameterized tests, unused feature flags or similar low-effort, low-risk items to fix.

**InfoQ: What can organizations do to foster creativity?**

> **Mortimer**: Creative people need time and space to work, free from the day-to-day demands of meetings, deliverables and demos. They also often work best alone - brainstorming, a beloved technique in the corporate world, has actually been shown to produce fewer good ideas than people working individually. I like to try to schedule groups of meetings together, at the start of the day or the end of the day, allowing for long periods of focus time, where I can work uninterrupted on hard problems.
> 
> Constraints are also important in creative work. Constraints remove the infinite possibilities of a blank canvas and force exploration of a bounded space. I previously worked at a document intelligence startup called Accelex. In the early days, we were constrained by time and resources, which forced me to find innovative solutions to the problem of reading data from tables.
> 
> Creativity is iterative work, compounded over long periods of time, not a single flash of genius. Having the time and space to think creatively is more important now than ever, as the drive for hyper-velocity engineering leaves less and less time to pause, reflect, and engage in creative thinking.

## About the Author

#### **Ben Linders**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/code-AI-write-only-disposable/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。