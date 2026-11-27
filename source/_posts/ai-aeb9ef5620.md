---
title: "QCon San Francisco 2026: How to Kill the Code Review"
date: 2026-11-27 11:52:25
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Closing the Engineering the Developer Experience track at QCon San Francisco 2026(https://qconsf.com"
source_url: "https://www.infoq.com/news/2026/11/qcon-sf-26-kill-code-review/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-26T17:16:00.000Z　|　采集：2026-11-27 11:52:25

## 正文

Closing the Engineering the Developer Experience track at [QCon San Francisco 2026](https://qconsf.com/presentation/nov2026/how-kill-code-review), Ankit Jain, co-founder and CEO of [Aviator](https://www.aviator.co/), argued that line-by-line code review is already quietly dead on most teams, and that the sharper question is "how long until we stop reading the code?" He also flagged his conflict of interest up front, noting that he runs a company that sells a solution and asking the audience to "be suspicious of me."

![](https://www.infoq.com/news/2026/11/qcon-sf-26-kill-code-review/news/2026/11/qcon-sf-26-kill-code-review/en/resources/1Screenshot%202026-11-26%20at%2015.02.54-1795712694459.png)

The talk revisited an [essay he wrote for Latent Space](https://latent.space/p/reviews-dead) in March 2026 proposing a five-layer trust model to replace reviews. Eight months on, Jain said the mechanics held up but the essay missed human judgment entirely. He began with the data that unseated his original framing. A 2013 Microsoft study found 44% of reviewers cited defect-finding as their motivation, yet only 14% of their comments were actually about defects, and a 2018 Google study of more than nine million reviews reached almost the same split. Code review was never really about bugs, he argued, it was about knowledge sharing, echoing [Addy Osmani](https://addyosmani.com/blog/agentic-code-review/): "We made writing cheap, and understanding stayed exactly as expensive as it has always been."

A September Faros study of more than 4,000 teams found that over 75% of PRs now merge without any human review, average PR size has grown, and redo work is up 67% year over year. Earlier research showed review quality drops sharply past 400 lines, yet the median PR today is 640 lines. "We are reviewing the code, but we are rubber stamping it," Jain said, pointing to a Reddit post from an experienced developer refusing to review AI-generated PRs that collected over 1,900 upvotes. The result is "review theater," where agents write, another AI reviews, agents revise, and humans skim and merge.

![](https://www.infoq.com/news/2026/11/qcon-sf-26-kill-code-review/news/2026/11/qcon-sf-26-kill-code-review/en/resources/1percent-1795712694459.png)

To replace a single review, Jain proposed six layers: Argue, Capture, Codify, Prove, Debate, Own. Agents should argue about a change locally before the PR exists, surfacing only what they disagreed about. Intent and acceptance criteria, familiar from behaviour-driven development, should be captured during the coding session and attached to the PR rather than discarded. Repeated review comments become invariants, standing rules with scope, provenance, a verification method, and a team owner. Aviator mined 11,000 of its own review comments to produce 64 invariants. Evidence should replace green checks: screenshots, DOM snapshots, recorded requests, latencies, and database logs, because the same agent that wrote the code likely wrote its unit tests. Humans then debate decisions rather than diffs, and ownership shifts from author and reviewer to the teams that own the rules.

Jain reported his nine-engineer team now merges four times the PRs it did a year ago and still approves every one, while reverts have dropped around 40%. He also shared a failure: a change passed every filter and caused an 18-minute outage from an unindexed query, after which the post-mortem asked which rule was missing rather than who approved it. Critical areas such as security, authentication and billing still get line-by-line review.

He closed with a line: You can outsource your thinking. You cannot outsource your understanding.

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/qcon-sf-26-kill-code-review/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。