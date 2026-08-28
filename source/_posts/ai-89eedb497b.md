---
title: "Google Cloud Launches AI-powered Agents to Simplify Database Lifecycle Management"
date: 2026-08-28 13:52:47
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google Cloud has introduced AI-powered Database Operations Agents(https://cloud.google.com/blog/prod"
source_url: "https://www.infoq.com/news/2026/08/google-database-operation-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-27T15:00:00.000Z　|　采集：2026-08-28 13:52:47

## 正文

Google Cloud has introduced [AI-powered Database Operations Agents](https://cloud.google.com/blog/products/databases/deep-dive-on-new-ai-powered-database-agents/), featuring an Onboarding Agent that streamlines database setup and an Observability Agent that helps automate troubleshooting, performance optimization, and tuning. Integrated with Gemini Cloud Assist, these agents support multiple database services, including AlloyDB, Bigtable, and Spanner.

Using the Database Onboarding Agent, developers can describe their requirements in natural language. The agent "understands technical metrics like IOPS, latency limits, and replication lag", enabling it to recommend the most suitable database solution based on workload characteristics, performance requirements, scale, data type, and reliability needs. It can also explain and validate the recommendations against those requirements, helping build confidence in the selected solution, and generate the commands needed to provision, configure, and deploy the database instance.

The Observability Agent is designed for site reliability and DevOps engineers, helping them diagnose complex database issues, identify root causes, and implement remediation actions:

> As your operations scale, identifying subtle issues like query hotspots or lock contention becomes an expensive burden. The database observability agent uses Google’s operational expertise and the reasoning capabilities of Gemini to solve these challenges. By automatically connecting telemetry across multiple sources including Database Insights, Cloud Monitoring, Cloud Logging, and Cloud Trace the agent provides a clear root cause analysis in minutes.

Using natural language, the Observability Agent can help build summarized analyses across a database fleet, correlate telemetry and other data sources to identify issues, and provide recommendations and execute remediation actions once engineers approve them.

Google also emphasizes that the new capabilities are available across already existing tools that developers have already integrated in their workflows, rather than requiring them to adopt a new specialized dashboard. They are available through the [Gemini](https://cloud.google.com/products/gemini/cloud-assist) / [Cloud Assist](https://docs.cloud.google.com/cloud-assist/investigations) chat, Google Cloud console, CLI tools, and IDEs such as Antigravity.

The same capabilities exposed by the Observability Agent, including system metrics, query metrics, fleet inventory, and detected issues, are also available through [MCP servers](https://docs.cloud.google.com/mcp/overview#google-gcp-mcp-servers), providing another way to access and integrate these capabilities into existing workflows.

As mentioned, the Observability and Onboarding Agents support multiple Google Cloud managed database services, including Cloud SQL, Spanner, AlloyDB, Firestore, Memorystore, and BigTable.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/google-database-operation-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。