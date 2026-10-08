---
title: "Survey Finds AI-Generated Code Increases Debugging and Failure Rates and Creates a Comprehension Gap"
date: 2026-10-08 09:26:53
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "A survey conducted by independent research firm Coleman Parkes on behalf of Undo, a company focused "
source_url: "https://www.infoq.com/news/2026/10/survey-complex-codebases-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-07T18:00:00.000Z　|　采集：2026-10-08 09:26:53

## 正文

A survey conducted by independent research firm Coleman Parkes on behalf of Undo, a company focused on scaling AI-powered root-cause analysis, found that while AI coding agents have accelerated code generation, [they have shifted the primary bottleneck to debugging, code comprehension, and maintenance](https://undo.io/research-report-2026/).

The report surveyed 300 senior engineer leaders responsible for delivering mission-critical software, most of whom working with C/C++. The survey focuses specifically on mission-critical codebases where code "must be understood", with respondent identifying the most demanding task as "understanding what that code does, how it affects existing codebases, and debugging it when an application doesn’t behave the way it’s expected to".

In those environments, teams spend an average of 9.8 hours per week producing code, but 16.9 hours per week debugging issues identified during development or encountered by customers in production, accounting for 42% of the average working week.

Along with debugging getting more relevant, another critical dimension is emerging as a challenge, code comprehension:

> Now that AI is generating most of the code being produced, engineers no longer have the inherent understanding they used to. That makes it easier for defects to escape, and when something inevitably goes wrong, nobody has the knowledge to trace the failure back to its root cause.

Due to the acceleration in code generation brought by AI agents, the survey found 35% of generated code reaches production before the team has fully understood it. Moreover, 80% of respondents said that coding agents struggle to solve difficult problems in complex codebases. As a result, approximately one-third of teams "use AI agents for comprehension and debugging only in straightforward codebases", while relying on additional techniques to build sufficient confidence when working with more complex systems.

Other significant problems reported by surveyed teams include **production incident or service outage affecting internal users or customers** (81% experienced this at least once in the previous six months, with 14% experiencing them multiple times per month), **incorrect root-cause or issue diagnosing due to hallucination** (93% at least once, with 18% multiple times per month), and **test escapes, serious defects or poorly optimized code entering production** (91% at least once, with 8% experiencing these issues multiple times per month).

Overall, 79% of engineering leaders say that AI agents can generate code significantly faster, but that the resulting shift in effort toward debugging and "unpicking" AI-generated code means the overall release cycle is "no faster than before".

Greg Law, founder and CEO of Undo, summarized the survey findings by noting that engineers "lose days trying to unravel what went wrong and why" with "code that's almost, but not quite right" and that "while agents are great at writing reams of code quickly, they're less capable at debugging it".

Since the launch and widespread adoption of AI coding agents, the software engineering community has extensively debated their benefits, limitations, and how best to use them. One recurring concern is [how to manage agent speed when it outpaces humans' ability to review the generated code](https://www.reddit.com/r/LocalLLaMA/comments/1q7hywi/how_do_you_manage_quality_when_ai_agents_write/). This has led to several popular approaches, including the [*test-first red-green loop*](https://www.reddit.com/r/codex/comments/1wlvf0j/state_of_agentic_coding/), and [*automated fallbacks*](https://www.reddit.com/r/AI_Agents/comments/1rz493g/building_apps_with_ai_agents_10_tips_from_9/), and others. The broader consensus, however, is that AI agents do not fundamentally change the nature of software engineering, [which has never been solely about coding](https://www.reddit.com/r/theprimeagen/comments/1oslx84/agentic_coding_is_not_software_engineering_1309/), but about understanding constraints, making trade-offs, and ensuring that the resulting system behaves as intended.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/survey-complex-codebases-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。