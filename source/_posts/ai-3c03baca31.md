---
title: "Cloudflare OS: Cloudflare's Open-Source Corporate AI Platform Built on a Capability-Based Model"
date: 2026-08-25 06:16:19
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare recently open-sourced Cloudflare OS(https://blog.cloudflare.com/cloudflare-os/) on GitHub"
source_url: "https://www.infoq.com/news/2026/08/cloudflare-os-ai-platform-secure/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-23T22:50:00.000Z　|　采集：2026-08-25 06:16:19

## 正文

Cloudflare recently open-sourced [Cloudflare OS](https://blog.cloudflare.com/cloudflare-os/) on [GitHub](https://github.com/cloudflare/cloudflare-os). Cloudflare OS allows enterprise teams to output work artifacts grounded in enterprise knowledge, know-how, and provisioned connectors, automate repetitive workflows with optimized token cost (with AI assistance only where needed), and build personal, shareable, customizable work software that caters to specific, complex use cases within a secure sandboxed model. The underlying capability-based model can be used to enforce enterprise policies.

Lead architect [Kenton Varda](https://www.linkedin.com/in/kenton-varda-5b96a2a4) explained what is a massive, multi-faceted release in a [concise post](https://x.com/KentonVarda/status/2084990137180590572?s=20):

> Today we are releasing Cloudflare OS, a chatbot with connectors, just like every other tech company is doing.
> 
> \[…\] Except actually, it’s different.
> 
> This is a full-on personal app vibe coding platform, in which the sandbox is so secure that \[…\] a company’s security team can feel comfortable giving non-technical users permission to vibe code and then sleep soundly at night.
> 
> How is that possible? \[…\] For example, if you have a document editor app, each document runs as a separate instance of the app, in a separate sandbox (one “Gadget”).
> 
> This means two things, both of which I think are Big Deals: 1. The platform can manage all access control, by controlling who can access the Gadget at all. There is no way the Gadget can accidentally leak itself to an attacker – even an attacker who has access to other Gadgets based on the same app *\[Ed. note: other risk vectors may apply, including misconfigured Gatekeeper capability grants\]*. 2. Since everyone is running their own copy of the code, everyone can freely *modify* their copy of the code.
> 
> Think about #2 a bit more.
> 
> What if, when you wanted a new feature in the software you are using, you could just prompt your agent to add it?
> 
> This doesn’t work in the cloud Software-as-a-Service model, because you are not running your own copy of the app.
> 
> \[…\] AI has changed that. Now you just ask the agent \[…\]
> 
> And it is so fun.

The project reportedly emerged directly from Cloudflare’s internal operational scaling challenges. Chief information officer [Sam Rhea](https://pt.linkedin.com/in/samrhea) previously [reported that employees were seeking to rapidly deploy unvetted generative AI workflows to create bespoke “SuperApps”.](https://blog.cloudflare.com/how-we-use-ai-with-cloudflare-os/) These scripts required elevated administrative access and direct production API tokens across dozens of internal systems of record. To channel this demand without compromising security boundaries, Cloudflare initially operated a human-staffed “magic AI email” alias to catalog routine operational friction points. This triage revealed that while off-the-shelf agent harnesses excel at boilerplate software engineering, traditional knowledge workflows require strict context management, deterministic task execution, and dynamic permission isolation.

Rather than running centralized, multi-tenant Software-as-a-Service (SaaS) applications, Cloudflare OS gives each user their own copy of the application. Whenever a user prompts the system to generate a document, dashboard, or data view, the runtime instantiates a dedicated, isolated app instance within fine-grained V8 isolates managed by Cloudflare’s open-source [workerd](https://github.com/cloudflare/workerd) runtime and [Dynamic Workers](https://blog.cloudflare.com/dynamic-workers/).

Each user can use generative AI to modify the source code of their specific instance on the fly without risking cross-tenant data leakage or introducing vulnerabilities into shared environments.

Secure access to resources is governed by a capability-based security model that Cloudflare termed “Gatekeepers”. Unlike standard Model Context Protocol (MCP) connections whose implementation often provide ambient, broad access to systems and resources, Gatekeepers strictly scope access to designated resources, mask sensitive database columns, apply role-based rate limits, and mandate human approvals before executing destructive side effects. Agents start in a zero-trust state with zero ambient permissions.

Kenton [further explained on Hacker News](https://news.ycombinator.com/item?id=49183778):

> When you share a Gadget, we verify that anyone you share with also has direct permission to access each of the resources it is connected to (via the Gatekeeper system). Hence, no security bug in the Gadget itself could accidentally grant people access to things they don’t already have.

The release article mentions that Cloudflare employees have used Cloudflare OS since May 2026, reporting significant productivity gains. [According to Rhea](https://blog.cloudflare.com/how-we-use-ai-with-cloudflare-os/#send-out-champions-and-share-your-wins),  
non-technical staff built more than 4,000 custom business tools within 30 days, while sales teams recovered an estimated 10,000 hours of manual data aggregation for territory planning and pipeline analysis.

Engineering teams now use the “Cloudflare Engineering Codex” (a machine-readable policy repository). Automated review agents evaluated pull requests and architecture designs against the Codex, flagging nearly 250,000 potential bugs, blocking 16,000 non-compliant merges, and catching roughly 600 architectural defects prior to implementation.

The release generated widespread technical debate across developer communities.

Varda [defended calling the product an OS](https://news.ycombinator.com/item?id=49365536), asserting that the platform behaves as an operating system by arbitrating compute workloads, isolating processes, and enforcing capability-based security boundaries for non-technical software authors.

[Jeremy Morrell](https://jeremymorrell.dev/) published a blog post using the term [internal corporate platforms](https://jeremymorrell.dev/blog/extensible-software-in-the-age-of-llms/#internal-corporate-platform) to describe the need for enterprise-grade secure collaboration and productivity AI tools for employees, in a similar way that internal developer platforms target developers in a company.

Commenter `masterj`, while praising the capability model, [questioned whether standalone agent workspaces would fare well](https://news.ycombinator.com/item?id=49364639) against native ecosystem integrations from established productivity suites:

> Every tech company is scrambling to be the stable foundation for people in enterprise to build cute little one-off apps safely. It’s a perfectly fine pattern, but it’s hard to imagine a world where Cloudflare becomes the default. Much easier to imagine Google or Microsoft adopting whatever UI/UX patterns work well and tying into enterprise data.

Cloudflare OS is available under the Apache-2.0 license via the official [cloudflare-os](https://github.com/cloudflare/cloudflare-os) repository and a starter deployment template on [GitHub](https://github.com/cloudflare/cloudflare-os-starter).

## About the Author

#### **Bruno Couriol**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/cloudflare-os-ai-platform-secure/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。