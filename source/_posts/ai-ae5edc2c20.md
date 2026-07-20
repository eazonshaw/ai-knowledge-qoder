---
title: "AWS Releases Loom, an Open-Source Reference Platform for Governing AI Agents at Enterprise Scale"
date: 2026-07-21 06:48:07
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "AWS recently released Loom(https://aws.amazon.com/blogs/opensource/building-secure-ai-agents-at-scal"
source_url: "https://www.infoq.com/news/2026/07/loom-aws-agent-platform/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-20T10:04:00.000Z　|　采集：2026-07-21 06:48:07

## 正文

AWS recently [released Loom](https://aws.amazon.com/blogs/opensource/building-secure-ai-agents-at-scale-introducing-loom-for-aws/), an open-source, opinionated agent platform that shows how organizations can build, deploy, and govern AI agents on AWS with security controls baked in from the start. Loom builds agents with the Strands Agents SDK, runs them on Amazon Bedrock AgentCore Runtime, and is available on [AWS Labs](https://github.com/awslabs/loom/). AWS positions it explicitly as a concrete example of how organizations might build their own agent platforms, not as a managed service.

The platform packages a unified management UI and backend API with identity provider integration, scope-based authorization, and lifecycle management for agents, memory resources, MCP servers, and agent-to-agent (A2A) integrations. It grew out of a prototype that Heeki Park, a principal solutions architect at AWS, [documented on Medium](https://heeki.medium.com/introducing-loom-an-agent-platform-66e7db019cdb) in June before the project graduated to AWS Labs.

The blog post structures Loom around seven challenges platform engineering teams face when they scale agent deployments: enforcing consistent resource tagging, implementing role-based and attribute-based access controls, building deployment blueprints, validating software before deployment, propagating identity through delegated actor chains, managing agent sprawl, and requiring human review before sensitive actions.

Identity propagation is where Loom addresses the hardest problem on that list. When an agent acts on behalf of a user and calls an MCP server, which in turn calls a REST API, each hop needs an access token that preserves the originating user's identity and permissions. Loom implements the full authorization code flow for user interactions and uses the [RFC 8693](https://datatracker.ietf.org/doc/html/rfc8693) token exchange process supported by AgentCore Identity, so both the end user and agent identity travel in downstream access tokens while the delegation chain stays intact. The platform visualizes each hop of the exchange, from agent to MCP server to Amazon API Gateway endpoint, each with its own on-behalf-of token. Downstream systems expose only the data the originating user is permitted to access.

The deployment model takes a deliberate stance against runtime code generation. Loom deploys a pre-written, configurable Python agent built with Strands Agents, injecting behavioral guidelines, memory resources, and MCP or A2A configurations at deployment time. Code never changes between deployments; only configuration does. Platform teams can scan the agent code once, add enterprise customizations such as logging requirements, and reuse it across every deployment. Teams that need no customization can instead use the no-code path through AgentCore's managed harness. Secrets and credentials are not stored in Loom at all. They live in AWS Secrets Manager and are pulled in only when required, with inbound and outbound auth managed by AgentCore Identity.

*Configuration-driven agent deployment with a pre-written Strands agent (Source: [AWS Open Source Blog)](https://aws.amazon.com/blogs/opensource/building-secure-ai-agents-at-scale-introducing-loom-for-aws/)*

Governance runs through two mechanisms. Tag profiles enforce three mandatory tags (loom:application, loom:group, loom:owner) on every deployed resource, with optional custom tags such as cost center identifiers. Access control combines two dimensions: role type determines the capabilities and view a user gets, while group tags determine which resources they can see. Administrators land on a catalog dashboard; end users see only a chat interface, agents in their own group, and their own conversation history.

For agent discovery, Loom integrates with AWS Agent Registry, currently in public preview, complying with the A2A agent card specification and the MCP tool schema. Agents undergo a review process before they can be published for production use. Park's [earlier write-up](https://heeki.medium.com/integrating-aws-agent-registry-into-your-agent-platform-for-discovery-and-governance-3350920204a4) on that integration surfaced a friction point worth knowing: the registry ARN contains only a random alphanumeric string rather than the registry name, forcing IAM policies for registry actions to use a wildcard resource.

Human-in-the-loop review is implemented three ways, using the Strands Agents hook framework and native MCP elicitations, so sensitive tool invocations pause for human approval before executing.

Early community reaction reflects a wait-and-see stance. On [Reddit](https://www.reddit.com/r/aws/comments/1utzg9e/anyone_deployed_loom_yet/), a thread asking whether anyone had deployed Loom drew no deployment reports two days in. One commenter offered the only substantive assessment, capturing both the appeal and the build-versus-adopt question that reference implementations invite:

> I think loom is one of the more promising new products from aws and should certainly be considered for corporate ai agent rollout projects. If you look at docs and loom dashboard its quite well thought out and opinionated in a good way. You could probably build your own version in a week though.

Loom itself is free and open source; the cost sits in the managed services underneath it.

Loom lands in a quickly forming category. Anthropic's Claude apps gateway, which InfoQ [recently covered](https://www.infoq.com/news/2026/07/claude-apps-gateway-aws/), claims the access and cost control layer for AI coding tools, while Loom demonstrates the platform layer for custom agent workloads: identity, deployment, registry governance, and approval workflows. The difference in maturity matters. The gateway is a supported product; Loom is an AWS Labs reference implementation intended for greenfield builds by platform engineering teams, and its role-based access model still carries visible demo scaffolding.

The [repository](https://github.com/awslabs/loom/) includes overview documentation, the specifications used to build the platform, and a deployment guide with cleanup instructions for testing.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/loom-aws-agent-platform/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。