---
title: "Airbus Makes Protection from Extraterritorial Law a Scored Criterion in Its Cloud Tender"
date: 2026-07-26 06:44:28
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Airbus has selected French provider Scaleway as its sovereign cloud partner following a competitive "
source_url: "https://www.infoq.com/news/2026/07/airbus-scaleway-sovereign-cloud/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-24T10:42:00.000Z　|　采集：2026-07-26 06:44:28

## 正文

Airbus has selected French provider Scaleway as its sovereign cloud partner following a competitive tender, with the aerospace and defence group placing legal jurisdiction alongside technical capability as a formal evaluation dimension. The [announcement](https://www.scaleway.com/en/news/scaleway-secures-european-trusted-cloud-services-contract-with-airbus/) is notable less for the vendor selected than for what the selection criteria reveal: protection against non-European extraterritorial legislation is now something a major industrial buyer scores providers against, not something it raises in a policy discussion.

According to the announcement, Airbus assessed providers across three dimensions. Technical capabilities covered advanced cloud services, interoperability, scalability, and AI capabilities. Operational excellence covered security, resilience, service continuity, and integration with Airbus' existing multi-cloud estate. The third dimension was legal and governance safeguards, specified as European jurisdiction, data protection, and protection against non-European extraterritorial legislation.

Catherine Jestin, executive vice president digital at Airbus, was explicit about the motivation:

> This collaboration marks a significant milestone in our broader commitment to European digital sovereignty. By integrating a trusted, high-performance cloud environment that keeps our critical data assets shielded from foreign extraterritorial laws, we are ensuring that our digital infrastructure keeps pace with our aerospace innovation, while maintaining control and resilience of our industrial operations.

The phrase "foreign extraterritorial laws" is doing specific work. The US CLOUD Act permits American authorities to compel US-headquartered providers to produce data held anywhere in the world, including facilities in the EU operated by EU subsidiaries. No amount of regional datacenter placement resolves that while the provider remains subject to US jurisdiction.

Practitioners discussing the deal on [Hacker News](https://news.ycombinator.com/item?id=48976682) pointed to precedents rather than hypotheticals: the [ICC chief prosecutor losing access to his Microsoft email](https://www.justiceinfo.net/en/156691-how-sanctions-can-weaponize-us-tech-against-the-icc.html) after being sanctioned by executive order in 2025, an account Microsoft's president later disputed cutting off, and the export controls that [briefly suspended access to Claude Fable 5 and Mythos 5](https://www.infoq.com/news/2026/06/claude-5-release/) in June. One commenter reduced it to a procurement rule:

> You can't build a business on a vendor who may be forced to block you at any moment.

The platform will support business-critical applications spanning aircraft design, engineering, manufacturing, and enterprise operations. Scaleway will provide infrastructure built on European technology with what the announcement describes as open technologies and interoperability with Airbus' existing systems.

What the announcement does not describe is an exit. Airbus frames the arrangement as complementing its existing multi-cloud approach, with the stated goal that "each workload is deployed in the environment best suited to its technical, operational and regulatory requirements." That is workload-criticality placement rather than repatriation, and it is the pattern most European enterprises evaluating sovereignty are likely to land on: a sovereign tier for jurisdictionally exposed data, hyperscaler capacity for everything else.

Scaleway CEO Damien Lucas tied the deal to AI infrastructure rather than storage, arguing that unlocking AI in advanced industries requires infrastructure combining performance with trust and long-term control. That framing matters because sovereignty questions increasingly arrive attached to AI workloads. InfoQ [recently reported](https://www.infoq.com/news/2026/07/claude-foundry-ga-europe/) on European practitioners blocked from adopting Claude models on Microsoft Foundry for the reason Airbus names here, among them a Dutch bank declining approval and an oncology IT architect requiring guaranteed EU-hosted inference. Airbus is making the same argument with a signed contract attached.

The effect reaches past the hyperscalers. A founder running a US-based SaaS company described losing long-standing European customers to the same reasoning:

> I've noticed over the past year an increasing number of customers leaving us to European competitors, customers that have been happy with us for years, using our European region. When I asked they said, I'm paraphrasing here, "happy with the product but management wants EU supplier."

Large vendors can answer that objection by establishing an EU entity. Small ones generally cannot.

Scaleway, the cloud arm of French telecoms group iliad, was [selected in April as one of four providers](https://www.scaleway.com/en/news/scaleway-selected-by-the-european-commission-to-deliver-a-sovereign-public-cloud-and-ai-platform-to-eu-institutions/) under the European Commission's €180 million Cloud III framework for EU institutions, and [acquired HPC provider Qarnot](https://qarnot.com/en/news/scaleway-acquires-qarnot-to-strengthen-its-european-cloud-ai-platform-with-low-carbon-hpc-technology) in July, justifying that deal partly on both companies being governed by European jurisdiction and therefore offering customers immunity to extraterritorial laws. Airbus separately partnered with Mistral AI in May, pairing a European model provider with European infrastructure.

Not every reading of the trend is jurisdictional. One commenter argued the sovereignty framing obscures a more mundane driver: cloud infrastructure is commoditizing, substrate-independence is becoming the default, and smaller providers now compete credibly on cost and support. Both readings hold at once. Kubernetes, Terraform, and S3-compatible APIs have lowered switching costs enough that jurisdictional preference becomes actionable rather than aspirational, which is why a tender can now score legal exposure without sacrificing technical requirements.

What a sovereignty requirement means in practice drew attention from compliance practitioners reacting to [Scaleway's announcement on LinkedIn](https://www.linkedin.com/feed/update/urn:li:share:7483432056727781376/). Marie-José P., a data compliance specialist and affiliated data protection officer, argued that the criterion only becomes meaningful when it is decomposed into things an auditor can check:

> For critical workloads, trust must be translated into verifiable controls: data and log location, support access, encryption key governance, subcontractor oversight, reversibility and operational continuity. The key issue is not only where the cloud provider is established, but whether long-term control can be demonstrated across the actual architecture and service chain.

Julien Raspopovitch, who works in legal, compliance and data privacy in healthcare, made the same point from the regulatory side, noting that European hosting reduces exposure to the CLOUD Act and FISA but does not remove the obligation to run a data protection impact assessment or to verify Article 28 sub-processing clauses, particularly in a multi-cloud estate:

> Sovereignty is a compliance asset, not a substitute for it.

Neither company disclosed the contract value, the migration timeline, the number of applications involved, or which workloads remain with existing providers. Migrating production ERP and manufacturing systems is a program that slips at any large manufacturer, and the announcement prices in none of that risk. The signal for platform teams elsewhere in Europe is the tender structure rather than the outcome: when a buyer of this size publishes jurisdictional protection as a scored requirement, competing tenders tend to copy the scorecard.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/airbus-scaleway-sovereign-cloud/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。