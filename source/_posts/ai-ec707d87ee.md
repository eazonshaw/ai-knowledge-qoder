---
title: "Anthropic Outlines its AI-Powered Code Review Process for Claude Code"
date: 2026-11-16 09:28:46
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Anthropic has outlined(https://claude.dev/blog/solving-code-review-at-anthropic/) how the Claude Cod"
source_url: "https://www.infoq.com/news/2026/11/claude-code-review/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-15T09:55:00.000Z　|　采集：2026-11-16 09:28:46

## 正文

Anthropic has [outlined](https://claude.dev/blog/solving-code-review-at-anthropic/) how the Claude Code team handles code reviews as AI agents increasingly contribute to its codebase. The approach relies on multiple layers of automated verification, AI-powered reviews, and risk-based human approval, aiming to reduce manual review time without increasing regressions or production incidents.

Addy Osmani, Morgan Westlee Lunt and Qing Wang described how the team's review process has evolved alongside the growing volume of AI-generated code. Between June and September, merged pull requests to the Claude Code repository more than doubled, while the proportion of changes requiring a revert fell by over 40%.

Rather than relying on traditional line-by-line reviews, the team has moved much of the verification earlier in the development process. Before opening a pull request, Claude runs tests, builds, and linters, while a separate agent reviews the changes in a fresh context.

Every pull request then goes through several automated checks. Claude-powered reviewers inspect code changes for potential bugs, with multiple agents independently investigating findings before another group verifies them. A separate security review can also block a merge if unresolved issues remain.

This approach also raises questions about the evolving boundaries between software engineering, testing, and quality assurance. As one commenter [put it](https://x.com/jaysonambrose/status/2114817948355563631?a=fSm_DXMpxoiMe03c8xw&s=20):

> So code review is officially synonymous with testing now? Should the code review mechanism be owned by QA team? Is there still a QA team?

Human involvement depends on the risk associated with a change. Low-risk modifications, such as documentation updates or internal features behind feature flags, may require no human approval. Medium-risk changes require one person, while high-risk modifications need two approvals. Changes to particularly sensitive areas, including CI workflows, always require human oversight.

The team also introduced mechanisms to prevent automated reviews from generating excessive feedback. Review cycles are capped at three rounds before the author is asked to reconsider the implementation. Subsequent reviews focus on new changes rather than repeatedly examining the entire pull request.

These adjustments have improved review efficiency. According to Anthropic, the share of internal pull requests passing after one review and fix round increased from 65% to 78%. Meanwhile, the proportion requiring five or more rounds dropped from 8.9% to 1.5%.

![](https://www.infoq.com/news/2026/11/claude-code-review/news/2026/11/claude-code-review/en/resources/1code-review-convergence-1794735662698.png)*Source: Cloude.dev*

Human reviewers nevertheless remain responsible for architectural decisions, product direction, high-risk changes, and the final outcome. The team also emphasizes that the person directing an AI agent remains accountable for the code it produces.

Anthropic's approach extends beyond code review itself. Merged changes are typically released behind feature flags, tested internally, and gradually rolled out to users. Incidents and reverted changes are also incorporated into a growing evaluation dataset used to measure and improve the automated reviewers.

The central idea is to optimize code review around the risks a change introduces rather than the amount of code a human has personally read. As AI-generated code becomes more common, Anthropic's experience illustrates how engineering teams may need to rethink the balance between automated verification and human oversight.

## About the Author

#### **Robert Krzaczyński**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/claude-code-review/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。