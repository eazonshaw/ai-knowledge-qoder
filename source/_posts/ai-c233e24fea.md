---
title: "Study Finds AI-generated Code Fails to Boost Productivity Due to Downstream Bottlenecks"
date: 2026-10-23 08:15:26
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "A recent Harvard study of 718 firms(https://fion.ac/jellyfish.pdf), using the Jellyfish analytics pl"
source_url: "https://www.infoq.com/news/2026/10/jellyfish-ai-productivity/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-22T14:00:00.000Z　|　采集：2026-10-23 08:15:26

## 正文

A [recent Harvard study of 718 firms](https://fion.ac/jellyfish.pdf), using the Jellyfish analytics platform, finds that although AI coding assistants and agents increase code volume, this does not translate into a corresponding increase in completed work, partly because AI-generated code increases the workload in later stages of development, particularly code review.

The study was based on approximately 300 million work events of 700,000 workers across 700+ firms from January 2021 to March 2026. The data was gathered from several sources such as HR information, code version control systems, issue management systems, scheduling tools such as Google Calendar, and generative-AI tools, including GitHub Copilot, Cursor, and Claude Code.

The researchers considered three measures of coding output: lines of code added, commits, and pull requests.

> AI assistants lead to small increases in code output — 12% for lines of code, 9% for commits, and 5% for pull requests — with only the effect on commits being statistically significant. AI agents lead to large and significant increases in all three measures: 30% for lines of code, 20% for commits, and 23% for pull requests.

The authors used these data to evaluate software output by the number of Jira issues and epics resolved per worker per month, with issues treated as individual units of engineering work, and epics as larger projects or features. Coding assistant were found not to increase the number of resolved issues, while agents brought a 12% increase. However, this is significantly smaller than the estimated 30% increase in lines of code.

To explain this chasm, they examined the overall development process, which encompasses multiple steps beyond coding, including feature and scope planning, code reviews, testing, and deployment.

> We impute time usage from the Jellyfish data and validate this imputation using a survey of 100 Prolific engineers, finding that engineers spend 30-40% of their time writing code; the remainder goes to these complementary tasks. When AI raises productivity in code writing, complementary steps may serve as bottlenecks.

Specifically, they found that the average PR time to review increased by 49%, the number of comments per PR rose by 53%, and the share of PRs requiring changes doubled. Additionally, the share of workers performing code reviews increased by 14%, with no improvement coming from the adoption of AI to assist with the reviews. They authors also noted that the increase in PR-related effort could not be explained by an increase in the size of individual PRs.

Commenting on the findings, Reddit user [Prime\_1 observed](https://www.reddit.com/r/technology/comments/1x3go0s/comment/pfbum9w/) that "every line of code is a potential liability", a point further developed by markehammons, who [highlighted the additional risk of AI hallucinations](https://www.reddit.com/r/technology/comments/1x3go0s/comment/pfemx4t/):

> Doubly so when you're dealing with an untrustworthy actor, and agents are more untrustworthy than most actors. They can do the most messed up stuff without any hint of malice, and in a misguided attempt to pursue the task given to them.

Reddit user enigmamonkey further suggested that [mean time to recovery](https://www.reddit.com/r/technology/comments/1x3go0s/comment/pff1lmq/) could become an increasingly important metric for assessing AI’s impact on software development:

> If your engineers are writing and understanding less and less of the code they ship, I imagine issues become more frequent and more complicated to resolve. Particularly as the codebase scales… and it will scale.

Jellyfish is a software company that provides a platform for measuring and analyzing software engineering performance. It connects data from tools such as GitHub and Jira to help companies understand developer productivity and software delivery.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/jellyfish-ai-productivity/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。