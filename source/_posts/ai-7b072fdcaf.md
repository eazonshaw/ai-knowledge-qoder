---
title: "AWS Ships Continuum for Code Vulnerabilities"
date: 2026-11-08 08:58:17
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "AWS recently made Continuum for code vulnerabilities(https://aws.amazon.com/blogs/aws/aws-continuum-"
source_url: "https://www.infoq.com/news/2026/11/aws-continuum-ga/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-06T10:00:00.000Z　|　采集：2026-11-08 08:58:17

## 正文

AWS recently made [Continuum for code vulnerabilities](https://aws.amazon.com/blogs/aws/aws-continuum-for-code-vulnerabilities-is-now-generally-available/) generally available in US East (N. Virginia) and US West (Oregon), four months after announcing it in [gated preview](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-continuum/). The pricing page, which the announcement does not mention, shows a model that charges by the finding as well as by the codebase.

Principal solutions architect Esra Kayabali describes a service that finds and validates code vulnerabilities, then delivers fixes as patches that can be automated or as pull requests in the connected repositories. It builds a context graph from those repositories and the surrounding AWS environment, with an optional collector supplying resource and network context from wherever the code runs.

Swami Sivasubramanian, VP of Agentic AI, and Christopher Rae, who leads AI security go-to-market at AWS, both framed the problem as volume rather than detection. Sivasubramanian wrote that most organizations running large application estates see thousands of findings a day; Rae [put it more bluntly](https://www.linkedin.com/posts/christopherrae_aws-security-cybersecurity-share-7519205158191554560-hEJG/), saying scanners find thousands daily and "most becomes noise that doesn't matter in your environment."

The validation step is the answer to that: rather than ranking by severity, Continuum confirms which findings are reachable by running the exploit in an isolated sandbox and attaching proof-of-concept code with the reproduction steps. Findings carry an evidence level, such as a verdict proven by static analysis of the vulnerable code path, and the output is an attack path and "a blast radius assessment instead of a risk score alone."

[Pricing](https://aws.amazon.com/continuum/pricing/) has two dimensions: a context fee covers lines of code protected per month, starting at $200 per million and tiering down to $100 above ten billion. An inference fee charges $10 per Continuum inference unit, consumed as findings are worked. AWS’s worked examples show the interaction: one million lines with 100 vulnerabilities at one unit each comes to $1,200, while 100 million lines with 10,000 vulnerabilities at two units each reaches $218,200. Context accounts for $18,200 of that and inference for the remaining $200,000, or roughly $20 per validated finding. The thousands of daily findings both executives describe, and the per-finding fee, measure the same workload from opposite ends.

[Responding](https://www.linkedin.com/posts/swaminathansivasubramanian_aws-continuum-for-code-vulnerabilities-is-activity-7519143809339985920-dnoK) on LinkedIn, Bernardo Meireles Correa, an engineer working on non-human and agent identity at Avatier, welcomed the ranking and named two things to watch:

> A proof in an isolated sandbox says the code is exploitable. It does not say the path to it exists in your environment, and the findings it cannot prove still need somewhere to go, or they quietly become the safe pile.

The product partly answers the first question: the optional collector gathers AWS resource and network configuration to judge reachability, though as additional setup rather than a default. The second goes unaddressed, since AWS documents what happens to findings it can prove and says nothing about the rest.

Where the announcement points is autonomy. For now, "every remediation starts in a mode where Continuum proposes the fix and a person approves it before it ships," and the console warns that a generated patch does not mean the issue is fixed, but AWS plans to let Continuum apply classes of fix on its own once confidence criteria such as test coverage and historical success rate are met.

![](/ai-knowledge-qoder/_imgs/ff93cd89e6cb2346.png)

*(Source: [AWS News Blog post](https://aws.amazon.com/blogs/aws/aws-continuum-for-code-vulnerabilities-is-now-generally-available/))*

Jorg Huser, a CTO and former AWS principal, replied to Rae by questioning what should unlock that:

> The move from approving each merge to approving a class of fixes deserves its own acceptance test. An overloaded review queue can otherwise become the reason to grant more autonomy. I’d want evidence that the fix removes the vulnerability and preserves expected application behavior. What would qualify a fix class for autonomous merging, and what would send it back to human review?

Google's [CodeMender](https://cloud.google.com/security/codemender) ships something close to that evidence. It also proves exploitability by running an exploit and declines to apply patches itself, and it then validates each patch with an LLM-as-a-judge framework that tests for program equivalence, so the fix resolves the root cause "without altering the application's intended behavior." That is the step AWS's console caveat concedes Continuum does not perform.

The product boundary InfoQ [reported in July](https://www.infoq.com/news/2026/07/aws-continuum-code-security/), when AWS serverless hero Yan Cui said "we have the same capabilities, two product names, and no clarity on which one you should use," is still visible in the documentation: the [Continuum user guide](https://docs.aws.amazon.com/continuum/latest/userguide/what-is-continuum.html) covers code vulnerabilities itself and sends readers to a separately titled [AWS Security Agent User Guide](https://docs.aws.amazon.com/securityagent/latest/userguide/how-it-works.html) for penetration testing and threat modeling. Only the code vulnerabilities capability reached general availability. Penetration testing remains separately priced at $50 per task-hour, and threat modeling, announced in preview in June, carries no published pricing.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/aws-continuum-ga/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。