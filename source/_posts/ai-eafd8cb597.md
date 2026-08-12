---
title: "Article: InfoQ Cloud and DevOps Trends Report - 2026"
date: 2026-08-13 06:30:44
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Key Takeaways !(https://www.infoq.com/articles/cloud-devops-trends-2026/articles/cloud-devops-trends"
source_url: "https://www.infoq.com/articles/cloud-devops-trends-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-12T11:00:00.000Z　|　采集：2026-08-13 06:30:44

## 正文

### Key Takeaways

![](https://www.infoq.com/articles/cloud-devops-trends-2026/articles/cloud-devops-trends-2026/en/resources/1cloud-devops-trends-report-2026-graph-1786093401070.jpg)

-   AI has moved from experimentation to enterprise execution, and this directly affects cloud strategy. Organizations are shifting from individual coding assistants to team- and enterprise-level AI systems, with agents, AI platforms, and model infrastructure becoming strategic priorities.
-   Cloud reliability is back in the spotlight. Recent outages across major cloud providers have reminded architects that resilience, multi-region design, and operational readiness remain just as important as adopting the latest cloud services.
-   Platform teams are evolving from builders to enablers. Rather than simply provisioning infrastructure, they are standardizing AI capabilities, governance, and developer workflows while reducing shadow platform initiatives.
-   FinOps must evolve beyond cloud costs. AI token usage has become a major operational expense, but organizations still lack effective ways to connect AI spending with developer productivity and business outcomes.
-   Digital sovereignty is becoming an architectural concern. European organizations are increasingly evaluating sovereign cloud strategies, although balancing regulatory requirements with reliance on global cloud platforms remains a significant challenge.

The InfoQ Trends Reports offer InfoQ readers a concise, opinionated overview of topics that we believe architects and technical leaders should prioritize. In addition to this report and the updated DevOps and Cloud InfoQ trends graph, an [accompanying podcast](http://www.infoq.com/podcasts/cloud-devops-trends-2026) is available, featuring several editors and friends of InfoQ discussing these trends.

An essential part of the annual trends report is the trends graph, which shows what trends and topics have made it to the innovators category and which ones have been promoted to early adopters and early majority categories. The categories are based on the book [Crossing the Chasm](https://en.wikipedia.org/wiki/Crossing_the_Chasm) by Geoffrey Moore. At InfoQ, we primarily focus on categories that have not yet crossed the chasm. Here is this year’s graph:

![](https://www.infoq.com/articles/cloud-devops-trends-2026/articles/cloud-devops-trends-2026/en/resources/2cloud-devops-trends-report-2026-graph-1786093957555.jpg)

Some significant innovations and developments have occurred since the InfoQ team discussed the trends report last year (see 2025 trends graph below).

![](https://www.infoq.com/articles/cloud-devops-trends-2026/articles/cloud-devops-trends-2026/en/resources/1cloud-devops-trends-report-2025-graph-1786093957555.jpg)

This article highlights the trends graph, which shows different phases of technology adoption, and provides more details on individual technologies that were added or updated since last year’s trends report. We also discuss which technologies and trends have been promoted in the adoption graph.

Here are some highlights of what has changed since last year’s report:

## Innovators

The first category on our adoption graph, Innovators, is where we place emerging approaches that only the most forward-leaning teams are building today. This year, the new entrants reflect how quickly AI infrastructure has become a first-class architectural concern.

### Enterprise AI Platforms and AI Gateways

One of the clearest shifts this year is the move from individual AI assistants to centrally governed AI platforms, particularly within the enterprise. Rather than letting every team wire up its own models, organizations are beginning to stand up an internal AI platform with a centralized gateway, an approved model catalog, and provisioned team workspaces. The pattern borrows directly from established API management thinking and applies it to models, tools, and agents.

> **Steef-Jan Wiggers**: It's a hub-spoke model where you have your centralized AI gateway, so it's basically your API management you talked about, but then for your AI. I think Apigee has it, Microsoft has its API management, but then you can position it as an AI gateway as well. And then behind it you have your centralized model catalog, so the ones that are allowed to be used. And then they're going to go to what they call a spoke, so that will be your team building up on the platform.

These platforms remain early. As Wiggers noted, how the hub-spoke model fans out in practice is still an open question. But the direction of travel is unmistakable: model routing for cost control, in-house hosting for sovereignty, and a governed catalog so that a hundred teams do not each make their own model decisions.

### FinOps for AI and Tokenomics

FinOps for cloud is a mature discipline, but AI spending has opened a new frontier that existing tools do not yet cover well. Token consumption has become a major operational expense, and the panel was candid that connecting that spend to value remains unsolved. Matt Saunders captured the tension bluntly.

> **Matt Saunders**: The FinOps tools can tell you that Matt Saunders spent X, Y, Z dollars on tokens in Opus, in Fable, in Sonnet, et cetera. But none of them that I know of can actually relate that back to outcomes.

Renato Losio pointed out that AI costs are frequently a proxy for something else, which makes them far harder to optimize than deterministic line items like storage class or data transfer. There is also a deeper uncertainty: whether today's model prices are subsidized to drive lock-in, or reflect the real long-term cost. Shweta Vohra framed the shape of the problem from the FinOps Foundation's perspective.

> **Shweta Vohra**: Agents' chaos at the moment is bigger than the Microservices times we saw. We have already hit the big rocks of wastage around AI and cloud optimizations. But now we have smaller opportunities and challenges in the form of agents- so many agents. Instead of those big models, big investments, and MLOps, we have now reached these small pebbles. We need to gather them and make sense out of it. That's why the FinOps Foundation has also forked out the Tokenomics Foundation. At the same time, the Agentic AI Foundation was born under the Linux Foundation.

### Sovereign Cloud Strategies

Digital sovereignty has moved from a policy discussion to an architectural one, particularly in Europe. Organizations are evaluating what it would actually take to keep data, and increasingly models, within regional boundaries. The honest answer from practitioners is that full sovereignty is difficult when so much of the enterprise estate is built on American platforms and SaaS. Steef-Jan Wiggers noted that at his employer almost every application, system, and hyperscaler is American, down to the core policy system, so becoming fully sovereign would mean rebuilding and re-engineering nearly everything. European providers can supply IaaS and storage, but platform and SaaS layers, a CRM such as Salesforce, for instance, have no obvious sovereign equivalent.

Renato Losio was skeptical that the current wave of European alternatives can yet match hyperscaler depth.

> **Renato Losio**: In Europe, most of the providers that provide an alternative, it's mostly marketing. They don't offer the kind of services to the level they should to be a real alternative. It reminds me a bit of the early days of S3, when everyone was claiming to have an S3 backend that was basically just one single server running with an S3 API.

He acknowledged, though, that the sovereign-region push has at least made teams aware of a challenge many had not considered before. Mark Silvester offered a concrete counter-signal from his regulated European client base.

> **Mark Silvester**: All of our clients are within Europe and they're absolutely adamant on keeping everything within Europe. About half of our clients are actually gradually migrating back on-prem. It's absolutely a trend that I've seen.

## Early Adopters

In the Early Adopters category, we highlight AI agents for cloud engineering and the broader agentic infrastructure race. Last year, we positioned AI agents for cloud engineering in the Innovators category; this year, adoption has moved forward enough, despite persistent governance friction, to promote them.

### AI Agents for Cloud Engineering

The hyperscalers have made agents a product priority, not a research curiosity. Across the major clouds, agent registries, DevOps agents, and sandboxed execution environments have shipped in rapid succession. Steef-Jan Wiggers described this as an infrastructure arms race.

> **Steef-Jan Wiggers**: I would say the agent infrastructure arms race basically going on. You see a lot of hyperscalers investing in products already. Agent registry, DevOps agents with AWS, I think even Microsoft has DevOps agents, and you see Google shipping a GKE Agent Sandbox, Cloudflare shipping dynamic workloads. Some of those hyperscalers are really putting the AI infrastructure in their products.

Enterprise adoption, however, is gated by governance and compliance. Mark Silvester and Wiggers both work in regulated environments and described the same coordination problem: individual teams racing ahead with AI without a shared foundation, duplicating each other's work, and running into security and compliance controls such as those introduced under DORA. A recurring, healthy question in these organizations is whether a given problem needs AI at all, or whether it is already solved by existing capabilities such as input management.

### Agentic Infrastructure and Governance Automation

Beyond individual agents, a more microservices-flavored pattern is emerging: dedicated agents for coding, testing, and CI, coordinated rather than replaced by a single all-powerful model. Matt Saunders framed the year as a split between teams betting on ever-larger frontier models and teams composing smaller, purpose-built agents. Which philosophy wins, or whether they converge, is one of the more interesting open questions heading into next year.

Governance tooling is beginning to catch up. Saunders highlighted the arrival of centralized authentication for MCP, addressing one of the protocol's sharpest early problems: agents inheriting the permissions of whoever set them up.

> **Matt Saunders**: I just put an article on InfoQ quite recently about MCP having centralized auth now. So there's a plugin for centralized auth. I have a perception of MCP coming in and just running roughshod over permissions and IAM that you have in your internal organization. And that inevitably has led to it not being adopted as much as it might have been.

## Early Majority

We are promoting platform engineering and the Model Context Protocol into the Early Majority category. Both have matured to the point where the debates have shifted from whether to adopt them to how best to operate them at scale.

### Platform Engineering

Platform engineering has quietly become foundational. The panel described it as being in a productive holding pattern for its non-AI work, stable, well-understood, and no longer the exciting frontier, while agentic AI has become the new source of experimentation for platform teams. The role of the platform team is shifting from builder to enabler: standardizing AI capabilities so that teams do not each reinvent them, and reducing the shadow platforms that emerge when the central offering is not good enough.

> **Mark Silvester**: It's become probably the main focus of the platform engineering teams with the clients that we're working with to become AI-native enablers, to ensure that they don't always become a bottleneck. If the platform isn't good enough, then teams will want to do it themselves in a completely different way.

Matt Saunders described the discipline's non-AI work as being in a productive holding pattern: teams are no longer debating how best to Terraform infrastructure, but rather data sovereignty, model hosting, and access control around frontier models, working out how to add value at the platform level so that a hundred people do not each make their own decisions. Shweta Vohra argued that platform engineering has reached early majority in practice, even if the wider community still debates its identity. At KubeCon, she found that around 70% of a large audience considered platform engineering to be a rename of DevOps, evidence that the discipline is still maturing in perception even as the tooling consolidates. She also drew a sharpening distinction between the two roles.

> **Shweta Vohra**: There has to be a difference between a platform engineer and a developer now. Developer has to be on the higher abstraction layers, and platform engineer can still stay grounded with the engines, the infrastructure and Kubernetes and whatnot. Its time to move to platform engineering 2.0. Agentic developer portals are a new thing, and it's early days, like we've all seen with IDPs, but this time it'll mature faster. I would advice focus on AI native platforms as next big thing. There is so much more to happen in this space.

### Model Context Protocol (MCP)

MCP is rapidly becoming the default integration protocol for AI tooling. Introduced by Anthropic in late 2024, it standardizes how models connect to external tools and data. 

This year's conversation was less about whether MCP matters and more about operating it safely: how much tool surface to expose, how to enforce least privilege, and how to bring it under existing identity and access controls. Shweta Vohra noted that limiting which tools are exposed through MCP has become a standard compliance checkpoint, and the arrival of centralized auth (discussed above) marks the protocol's transition into serious enterprise use.

Vohra also flagged the [Agentic AI Foundation](https://aaif.io/), formed in late 2025, as an encouraging standardization effort. Standardization is a prerequisite for the security and compliance maturity that enterprises need, and while the work is early, the direction is positive.

## Late Majority

The Late Majority category covers technologies now fully adopted and treated as core architecture. This year, one theme forced its way back into prominence here: reliability.

### Cloud Reliability and Resilience

For all the attention on AI, the single most surprising trend for Renato Losio had nothing to do with it. It was how poorly major cloud services performed on reliability over the past year, from a long regional outage to the widely felt disruption when a core US region went down and took large parts of the internet with it.

> **Renato Losio**: What really surprised me is how poor the reliability of the major cloud services has been the last year. If someone had told me one year ago we would have had a region of AWS off for six months, I could not have forecasted that. As well as US Virginia down for many hours last October, with quite some repercussions for half of the internet.

The lesson is a familiar one that bears repeating: multi-region design, operational readiness, and resilience are not optional extras to bolt on after adopting the latest service. As the pressure of new AI workloads strains capacity, the fundamentals of reliability matter more, not less.

### FinOps and Observability for Cloud

Classic cloud FinOps, optimizing storage classes, data transfer, and compute, and observability remain fully adopted, mature practices. As Losio put it, the big rocks of cloud waste have largely been addressed; what remains for cloud is incremental. The frontier, as covered in the Innovators section, has moved to AI spend. The tooling for deterministic cloud costs is solid, and vendors are extending it toward sustainability and green-computing reporting, which several panelists found genuinely useful.

## A Note of Caution: What May Be Overrated

Every year we ask the panel which trends listeners should be cautious about. The consensus this year centered on separating substance from marketing.

-   **Agent washing**. Wiggers cautioned against products that bolt agents onto everything without adding value, echoing the earlier DevOps-veneer era. In regulated settings such as health insurance, fully autonomous decision-making is simply not permitted; a human or doctor must remain in the loop. The question to ask is where an agent genuinely adds value and where it does not.
-   **Fully autonomous agents in the enterprise**. Mark Silvester and Shweta Vohra both urged keeping humans in the loop, with Vohra warning teams to stay conscious of the deeper problems, agentic meshes and harnesses, rather than being drawn to fancy portals and surface features.
-   **Over-proliferation of managed AI services**. Renato Losio predicted that several of the rapidly renamed and rebranded cloud AI services will not survive the next twelve months, and that developers will increasingly care about outcomes rather than which model runs behind the assistant.
-   **Death-of-the-engineer predictions**. Matt Saunders sees the narrative that AI will replace junior or senior engineers as fading, along with the more radical multi-year predictions of a completely transformed world.

## Conclusion

If last year's report was about consolidation, this year's is about execution under pressure. AI has crossed from experiment to mandate, and that shift is reshaping cloud strategy, platform engineering, and FinOps all at once. Organizations are standing up governed AI platforms, wrestling with token economics that existing tools cannot yet explain, and revisiting sovereignty as a concrete architectural constraint rather than an abstract concern.

At the same time, a string of high-profile outages has pulled reliability back to the center of the conversation, a reminder that the fundamentals, such as multi-region design, operational readiness, and clear human governance, do not become less important just because the frontier has moved. The panel's strongest shared advice was to resist "AI washing" and to keep asking where automation genuinely adds value.

The teams best positioned for the next twelve months will be those that pair AI-enabled execution with platform governance and honest measurement, turning enthusiasm into durable value rather than accumulated cost and complexity. As Daniel Bryant put it in the accompanying podcast wrap-up: the shiny technology is compelling, but the fundamentals remain core.

**Mentioned Resources:**

-   [Agentic AI Foundation](https://aaif.io/)
-   [QCon London 2026: Morgan Stanley Rethinks Its API Program for the MCP Era](https://www.infoq.com/news/2026/03/morgan-stanley-apis-mcp-calm/)
-   [Team Topologies](https://teamtopologies.com/)
-   [Platform Engineering in the Age of AI (InfoQ Live)](https://live.infoq.com/)
-   [Decoding Platform Engineering Patterns](https://mybook.to/sv-platformengineering)
-   [Simon Wardley's InfoQ content](https://www.infoq.com/profile/Simon-Wardley/#allActivity)
-   [Matthew Skelton at QCon London: Team Topologies, Infrastructure, Agency, and AI](https://qconlondon.com/presentation/mar2026/team-topologies-infrastructure-agency-ai)

## About the Authors

#### **Steef-Jan Wiggers**

Show moreShow less

#### **Matt Saunders**

Show moreShow less

#### **Shweta Vohra**

Show moreShow less

#### **Daniel Bryant**

Show moreShow less

#### **Mark Silvester**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/articles/cloud-devops-trends-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。