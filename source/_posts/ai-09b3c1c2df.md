---
title: "Cloudflare WriteGuard Brings Fine-Grained Security Controls for MCP Servers"
date: 2026-08-19 06:13:01
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare is introducing WriteGuard, now in private beta, to provide fine-grained security controls"
source_url: "https://www.infoq.com/news/2026/08/cloudflare-writeguard-mcp-safety/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-18T16:00:00.000Z　|　采集：2026-08-19 06:13:01

## 正文

Cloudflare is introducing [WriteGuard, now in private beta, to provide fine-grained security controls for MCP (Model Context Protocol) servers](https://blog.cloudflare.com/mcp-portal-writeguard-private-beta/). It aims to make AI agents safer by controlling their access to tools that can modify data or perform actions, rather than simply read information.

WriteGuard is a shared policy, attribution, and auditing layer that aims to address the risks that arise when AI agents use MCP to access external services with write-access privileges, including databases, GitHub, SaaS applications, internal APIs, etc.

> Read-only was a good starting point. As models improved and teams gained experience with AI, people across engineering, product, design, sales, and customer success began asking for tools that could take action. \[...\] we wanted centralized control over the write actions agents could perform, agent labels to appear in downstream applications, and an audit trail that made agent activity easy to investigate.

WriteGuard sits right behind Cloudflare's MCP server portal and intercepts all incoming MCP requests. It loads the policy associated with the targeted tool and evaluates the request context to determine whether a request is allowed to pass through unchanged or shall be blocked. If an allowed request subsequently fails, it is routed to the auditing service, along with all requests that are denied in the first place.

![](https://www.infoq.com/news/2026/08/cloudflare-writeguard-mcp-safety/news/2026/08/cloudflare-writeguard-mcp-safety/en/resources/1writeguard-1787067901416.jpg)

According to Cloudflare engineers Scott Roe-Meschke and Kenny Johnson, the advantage of WriteGuard lies in its ability to define tool-specific policies without requiring changes to the MCP server itself. It also serves as a shared security layer across all MCP servers connected through the Cloudflare portal.

> For GitLab alone, we could have built these controls directly into the server. But we needed the same capabilities for Jira, our internal wiki, Google Workspace, and every new MCP server we added. Reimplementing them in each server would take more work and produce inconsistent behavior.

Each tool is assigned a risk tier ranging from `read-only`, which carries no risk at all, to `critical`. For example, completing a merge request, triggering a production deployment, or bulk-deleting records are classified as critical operations. Creating a merge request or updating an issue field falls under the `contained write` tier, while lower-impact actions such as marking a notification as read, subscribing to an issue, or adding a comment has `minimal impact`.

WriteGuard does not require creating standalone agent accounts, which would "create a second set of permissions to manage", note Roe-Meschke and Johnson. Instead, MCP servers use existing OAuth credentials to identify the user. To ensure that agent-driven action remain identifiable in the centralized audit log, WriteGuards adds MCP client and session context to the human identity.

> WriteGuard classifies each invocation as successful, failed, or blocked, then asynchronously sends a scrubbed event to an internal audit Worker. The event omits values for keys considered secret or sensitive. It includes the server, tool, risk tier, outcome, user, client, and duration.

WriteGuard is currently available as a [private beta](https://www.cloudflare.com/resource/writeguard-beta-landing-page/), allowing Cloudflare to validate its behavior and refine the product before making it generally available.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/cloudflare-writeguard-mcp-safety/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。