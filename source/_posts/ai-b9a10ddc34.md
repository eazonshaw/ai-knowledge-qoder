---
title: "Rigorous Yet Sustainable Human Reviews in the AI Era"
date: 2026-09-04 07:43:33
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Mandatory AI checks paired with manual spikes for complex changes keep developers sharp, Artie Shevc"
source_url: "https://www.infoq.com/news/2026/09/human-reviews-AI-era/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-03T11:57:00.000Z　|　采集：2026-09-04 07:43:33

## 正文

Mandatory AI checks paired with manual spikes for complex changes keep developers sharp, Artie Shevchenko argued in his talk [Code Health Guardian](https://www.youtube.com/watch?v=mHXm5j_tGrc), at [Craft conference](https://craft-conf.com/). Teams can boost velocity by skipping peer reviews on low-risk PRs and using AI approvals, provided most developers are code owners and teams are small.

Shevchenko referred to Joel Mokyr, a 2025 Nobel-winning economic historian who argues that technological progress only becomes permanent when practice and a deep understanding of theory continuously feed into each other, establishing a knowledge feedback loop.

Today, AI has the potential to strengthen the knowledge feedback loop, but it also has the potential to break it. That’s because AI doesn’t really understand anything; it generates tokens, creating an illusion of understanding, Shevchenko argued:

> AI makes knowledge more accessible by explaining theory to everyone in their context using their practical examples. But, without a human in the loop, chances are this will go off the rails. Knowledge without understanding, accepting whatever AI prompt throws at us, we risk a broken knowledge feedback loop.

We must keep intellectual control over our codebases to preserve and strengthen the feedback loop. Today, with the AI pump, we need to maintain intellectual control over increasingly larger volumes of complexity.

Cognitive debt is the erosion of shared understanding within your team of the system you’re working on. AI amplifies cognitive debt problems by increasing review volume, Shevchenko said. To address the code review bottleneck, we have to go beyond developer experience.

Rigorous code reviews are not just a skill or a habit; they’re also a muscle, Shevchenko argued. Muscles can and should be trained, but there’s a limit to how much they can potentially handle.

Shevchenko presented different options to handle not small, non-trivial changes:

> 1.  Rigorous review: hard in the past, and even harder with AI
> 2.  Just skim through it: cognitive debt accumulates really fast
> 3.  Coding first, AI second approach

He suggested to spike the code change and provide this spike and the specification to AI, which proposes improvements and fixes. You choose the changes to go forward with, and review each one individually.

With this approach, you still need to review, but you’re better positioned to do so because you already deeply understand the solution, Shevchenko argued.

We can optimize peer reviews by skipping low-risk changes, but the most impactful optimization is to allow code owners to rely on AI review only, Shevchenko suggested:

> Instead of peer review, you notify other owners, AI rubberstamps it, and you merge it.

The owner’s policy optimization works well only in combination with small teams, Shevchenko said. It’s a prerequisite to solving the human reviews bottleneck, making human reviews sustainable, he concluded.

InfoQ interviewed [Artie Shevchenko](https://www.linkedin.com/in/artie-shevchenko-67845a4b/) after his talk.

**InfoQ: What are the challenges of reviewing AI-generated code?**

> **Artie Shevchenko**: First and foremost, it’s the sheer volume of incoming code changes. High-quality code review was never easy, but managing a continuous stream of reviews can be truly exhausting. And everyone has a personal threshold—once you cross it, the fatigue from processing additional reviews grows exponentially.
> 
> ​The second challenge is deceptive correctness. Compared to human-written code, AI-generated changes often look plausible at first glance. Spotting the subtle flaws hidden under that polished surface actually takes more mental effort than before.
> 
> ​Finally, AI defaults to adding new code rather than simplifying what’s already there. Spotting opportunities to streamline and refactor still often requires a deep understanding of the broader codebase.
> 
> ​That said, compared to the overall volume issue, everything else pales in comparison. The relentless stream of AI-generated code and docs up for review is clearly the central hurdle. And that’s what my talk focuses on—how to manage that load. Don’t get me wrong, there’s no silver bullet, but there are concrete ways to mitigate the friction.

**InfoQ: How does a policy that allows owners to rely on AI reviews incentivize code ownership?**

> **Shevchenko**: Under a code ownership model, owners are required to review and approve every single change made to their codebase. A policy that lets owners bypass human review and rely on AI approval of their *own* PRs creates a massive incentive to earn ownership—it gives engineers complete autonomy and lets them bypass review wait times for their own work.
> 
> But there’s a catch. If most engineers on a team aren’t code owners, the few who are will still spend almost all their time reviewing AI-generated changes coming from non-owners. In that setup, letting owners fast-track their own PRs has little impact on team velocity, and owners’ review fatigue remains extremely high.
> 
> ​Nothing is truly solved unless most team members are code owners. But you can’t simply hand out ownership without compromising architectural integrity. Which leads to a pretty obvious conclusion: to make this policy work, teams must be small.

## About the Author

#### **Ben Linders**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/human-reviews-AI-era/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。