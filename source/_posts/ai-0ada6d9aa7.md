---
title: "Entire's Git Forge Rethinks Git Collaboration for Coding Agents"
date: 2026-11-09 09:18:37
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Entire is a Git forge designed specifically for collaboration between human developers and AI coding"
source_url: "https://www.infoq.com/news/2026/11/entire-git-forge-coding-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-08T11:00:00.000Z　|　采集：2026-11-09 09:18:37

## 正文

[Entire is a Git forge designed specifically for collaboration between human developers and AI coding agents](https://entire.com/blog/the-git-forge-for-agent-human-collaboration). Its premise is that traditional software development infrastructure, particularly the pull request (PR) model, is not well suited to an environment where AI agents generate, review, and iterate on code at high speed.

As Thomas Dohmke, former GitHub CEO and currently CEO of Entire, explains, GitHub and GitLab transformed human-to-human collaboration by centering it around asynchronous code reviews and version control. [A multi-agent forge, by contrast, centers around the asynchronous orchestration, versioning, and auditing of AI agents working alongside humans](https://x.com/ashtom/status/2114763996691562540).

Built on top of a fully distributed architecture that enables pushes up to 89 times faster than GitHub, Entire's core component is *trails*, which addresses the challenges AI coding agents pose to the traditional PR-based development model:

> The pull request \[timeline\] has become an audit log that only the agent reads. It does not provide the information for the developer to decide whether they can merge with confidence.

Trails bring the most relevant information to the top of the page in the form of eval scores that are updated on every push. These scores help developers assess whether a PR has reached a stable state or requires another iteration of agent-driven coding and review:

> Only when the confidence is high, risk is low, and all findings are cleared, the merge should happen.

A trail can be initiated from a bug report, a feature request, or manually, and can span multiple repositories. Whenever new code is pushed, a review agent running in a cloud sandbox evaluates the changes and returns a score and a rationale based on code quality, security, *slop*, and whether human code review is required. For example, if the slop score is orange, developers can ask their coding agent to improve the code and push a new change, thus triggering a new iteration.

> The last 5 runs and the current run are shown for each eval. We believe this is crucial as one-shot loops are often missing a critical issue. Repeating the loops and stabilizing the scores is crucial for the success of agentic coding.

Evaluation agents can be configured through Entire's interface or repository-level JSON configuration.

Review agents can suggest fixes or improvements, which remain visible in the trail while it is open. All review findings must be either resolved or closed before a merge is allowed. Developers can also configure repository-level Gates to define the conditions required for approval.

Another foundational concept introduced by Entire is *continuous memory*, which preserves all accumulated knowledge in the repository so that agents can reuse it across sessions rather than starting from scratch. Continuous memory is implemented by two open-source tools, [`entire-graph`](https://github.com/entireio/entire-graph), which builds a precomputed map of the Git repository including ranked code searches, definition and callers, types and routes, and more; and [`entire-brain`](https://github.com/entireio/entire-brain), which creates a persistent memory layer by combining the codebase map with previous agent sessions and information recorded in Git history.

> This allows agents to always have the right context at the right time, aka the "why" behind the "what changed."

As a final note on Entire, it also supports integrations with CI platforms like Buildkite and Depot.

Commenting on the announcement on Hacker News, user conartist6 expressed the view that [engineers have delegated writing code to agents](https://news.ycombinator.com/item?id=50248113) because of programming languages and tools that leave much to be desired. Haimantika, currently at Entire, points out that the problem has never been languages or tools, rather

> it' s that the reasoning gets thrown away between the person and the artifact. Commit messages were always bad, docs always rotted, “why is this here” was always answered by whoever remembered. Agents just made that acute, because now there's no one who remembers. That's the bit we're trying to fix. If a better language fixes it too, honestly I'd take that.

Entire is only one of several new players in the source code management arena, which also include [Zed DeltaDB](https://zed.dev/deltadb), [Anthropic Scion](https://www.infoq.com/news/2026/10/anthropic-source-control/), [East River Source Control](https://ersc.io/blog/martin-joins-ersc), [Cursor Origin](https://www.infoq.com/news/2026/08/cursor-origin-alternative-github/), [Radicle](https://radicle.dev/), and others.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/entire-git-forge-coding-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。