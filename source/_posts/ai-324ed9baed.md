---
title: "Datadog Builds a Specialist AI Model for SRE Investigations"
date: 2026-10-30 09:27:04
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Datadog has released Scout(https://www.datadoghq.com/blog/ai/introducing-scout-sre-specialized-model"
source_url: "https://www.infoq.com/news/2026/10/datadog-scout-sre-model/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-29T09:00:00.000Z　|　采集：2026-10-30 09:27:04

## 正文

Datadog has [released Scout](https://www.datadoghq.com/blog/ai/introducing-scout-sre-specialized-model-bits-ai/), a model trained to investigate production problems. It runs inside Bits Investigation, the company's AI SRE product, where it can pick up an alert, look through telemetry and suggest what caused the problem. Datadog engineers and a small number of customers are using it in a closed preview.

Most of the work described in the announcement concerns cost. An investigation may require many model calls as Bits tries a query, studies the result and decides what to check next. General-purpose models can do this, but Datadog says the bill makes it difficult to run them against every alert. The authors of the announcement want Bits to begin work while an engineer is still responding to the page.

> "Our goal is for Bits to serve as an always-on first responder, gathering evidence and identifying likely causes before an engineer steps in."  
> [Othmane Abou-Amal, Ben Cohen, Afshin Rostamizadeh, Ameet Talwalkar, Omri Sass and Daniel Shan](https://www.datadoghq.com/blog/ai/introducing-scout-sre-specialized-model-bits-ai/)

On Datadog's AlertEval benchmark, Scout medium received a similar score to GPT-6.1 Sol high and Claude Opus 5.5 high. Its estimated inference cost was between three and eight times lower. At the xhigh setting, Datadog says Scout matched Claude Fable 5.1 xhigh for one quarter of the cost. No prices are published, so these figures are relative to the cost of a Scout medium investigation.

![Scout investigation, courtesy of Datadog](https://www.infoq.com/news/2026/10/datadog-scout-sre-model/news/2026/10/datadog-scout-sre-model/en/resources/11791923332-bits-investigation-scout-postgres-diagnosis-1793290308706.png)

AlertEval uses real alerts, archived telemetry and explanations written by Datadog engineers. An LLM judge compares Scout's account with an expert account, rewarding matches at both the immediate and underlying cause level. Contradictions and claims without evidence lose marks. The resulting score runs from zero to 100, but Datadog [warns that it is not a percentage of incidents solved](https://www.datadoghq.com/blog/ai/introducing-scout-sre-specialized-model-bits-ai/).

Scout is based on GLM-5.3 Flash. Datadog post-trained the model with reinforcement learning, using incident simulations made from patterns found in historical cases. The simulations contain an alert, telemetry that can be queried and a known cause. They do not contain customer data, according to the company. Scout practises with tools modelled on the ones in Bits, including searches across logs, metrics and traces, as well as code, deployment and feature flag inspection.

> "Its training rewards finding the cause and supporting its conclusions with evidence."  
> [Othmane Abou-Amal, Ben Cohen, Afshin Rostamizadeh, Ameet Talwalkar, Omri Sass and Daniel Shan](https://www.datadoghq.com/blog/ai/introducing-scout-sre-specialized-model-bits-ai/)

The [technical report](https://web-assets.dd-static.net/42588/1792071077-datadog-scout_technical_report.pdf) gives a useful account of what went wrong during training. A reward based on the final answer prompted Scout to make fewer claims and stop investigating early. That made it less likely to be penalised, without making it a better investigator. The team changed the reward to take account of correctness, exploration and supporting evidence. They also removed tools from some training runs, or shortened the time available, to stop the model learning one fixed route through an incident.

Datadog ran a second evaluation on [SREGym](https://sregym.com/), a public set of 90 faults. Scout resolved 71 cases at medium effort, 79 at high and 80 at xhigh. GPT-6.1 Sol xhigh completed 82. Datadog carried out these tests itself, including the runs for newer comparison models, so independent results would be useful.

Scout arrives as observability suppliers work out how much of an incident an agent should handle. [AWS DevOps Agent](https://www.infoq.com/news/2026/04/aws-devops-agent-ga/) combines telemetry from several monitoring products with source code, deployment records and runbooks. AWS is joining information across tools, whereas Datadog is training a cheaper model for repeated use inside its own product.

Honeycomb's [Canvas Agent](https://www.honeycomb.io/blog/honeycomb-launches-agent-observability-full-visibility-agentic-workflows) is closer to the way many engineers investigate by hand. It opens a shared Canvas when an alert fires or an SLO burns, runs queries, tests ideas and leaves the evidence visible for an engineer to examine. Teams can capture familiar debugging procedures as Canvas Skills. Honeycomb also provides an [MCP server](https://docs.honeycomb.io/investigate), which allows external agents to query its telemetry. Honeycomb has not announced a dedicated SRE model; its focus is on the query engine and the record of how the investigation progressed.

Splunk and New Relic have gone further into the repair stage. [Splunk AI SRE](https://www.splunk.com/en_us/products/ai-sre.html) groups alerts and produces a probable cause with an evidence chain. A connected Claude agent can prepare a code change in a sandbox and open a pull request. [New Relic's SRE Agent](https://newrelic.com/platform/sre-agent) brings runbooks, incident reviews and previous resolutions into its analysis, while Autopilot can suggest remedial action. Both keep an approval step before a production change.

A [ClickHouse study reported by InfoQ](https://www.infoq.com/news/2025/09/clickhouse-llm-sre-report/) found that general-purpose models could produce summaries, but needed human guidance to find root causes consistently. Instacart takes a similar approach with [Blueberry](https://www.infoq.com/news/2026/08/instacart-blueberry-sre-ai/): agents collect context before an engineer assesses the proposed cause in Slack.

The benchmark evidence for Scout remains largely Datadog's own. In a response to the launch, the independent AI news account [AGTP pointed out](https://x.com/AGTPinsights/status/2110794594833371583) that AlertEval has not been independently tested. It also asked for an audit trail showing which evidence Scout considered and discarded. Honeycomb's visible Canvas and Splunk's evidence chain indicate that other vendors see the same requirement. A short answer may help during an incident, but engineers also need to see how the model reached it.

Datadog has not given a date for general availability. The company plans to add more types of failure to its simulations and eventually allow Bits to carry out repairs. The preview stops before that point: Scout investigates, gives its diagnosis and proposes recovery actions, while an engineer remains responsible for the change.

## About the Author

#### **Matt Saunders**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/datadog-scout-sre-model/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。