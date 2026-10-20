---
title: "Buildkite Adds Scoped Secrets and New Agentic CI Tools"
date: 2026-10-20 08:49:33
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Continuous integration provider Buildkite(https://buildkite.com/) has introduced pipeline-scoped sec"
source_url: "https://www.infoq.com/news/2026/10/buildkite-ci-secrets-agentic/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-19T09:00:00.000Z　|　采集：2026-10-20 08:49:33

## 正文

Continuous integration provider [Buildkite](https://buildkite.com/) has introduced pipeline-scoped secrets and new Model Context Protocol tools for validating pipelines, diagnosing failed builds and repairing webhooks. The company has also added Linux arm64 support to its GitHub Actions compatibility layer and expanded OpenTelemetry data in Buildkite Agent v4.1.0.

The new secrets view is available under Pipeline settings. It lets engineers create cluster secrets whose access is restricted to the current pipeline, rather than managing every secret from the wider cluster interface. Teams can add conditions for a branch, queue, build source or build creator. Secret values remain hidden after creation.

![Elastic CI Stack architecture, courtesy of Buildkite](https://www.infoq.com/news/2026/10/buildkite-ci-secrets-agentic/news/2026/10/buildkite-ci-secrets-agentic/en/resources/1buildkite-elastic-ci-stack-on-aws-architecture-CeSqGaPZ-1792160660710.png)

Matt Mejia, writing in [Buildkite's announcement](https://buildkite.com/resources/blog/what-shipped-at-buildkite-september-27-october-3-2026/), says the change "keeps pipeline-specific secrets together" while showing how many other secrets the cluster manages. Users need permission both to edit the pipeline and manage its cluster. GitHub Actions pipelines also display a prompt linking to secret configuration before their first workflow runs.

> "Pipeline secrets are cluster secrets restricted to the current pipeline, and branch, queue, build source, or creator conditions narrow access further."  
> [Matt Mejia](https://buildkite.com/resources/blog/what-shipped-at-buildkite-september-27-october-3-2026/)

The Buildkite CLI now includes a command for migrating GitHub Actions secrets. Version 3.59.1 fixes handling of relative workflow paths during that migration. Agent v4.0.9 also redacts Buildkite tokens by prefix in job logs, while v4.0.8 redacts captured job errors using secrets registered for the job.

The work addresses several places where credentials can be exposed or configured incorrectly, although scoped storage does not remove the need to control their use inside steps. [InfoQ reported in 2025 that HashiCorp was advocating prevention-first secret management](https://www.infoq.com/news/2025/10/hashicorp-secrets/) throughout developer tools and CI/CD systems. Buildkite's own documentation advises teams to expose a secret only to the steps that require it.

The most extensive feature changes are in Buildkite's open-source MCP server. The new `validate_pipeline` tool checks pipeline YAML syntax and structure against Buildkite's official schema without uploading it or starting a build. It returns paths and error messages that an AI coding agent can use to correct invalid steps. The check does not cover environment variable interpolation, plugin configuration, dependency references or dynamically generated steps.

A second tool, `compare_builds`, compares a failed build with the most recent earlier successful build on the same branch, or with another selected build. It reports steps that have newly failed, recovered or remained broken, together with changes in runtime and retries. For up to three newly failing steps, it includes the end of the job log so an agent has some immediate diagnostic context.

> "Log access alone does not debug a build."  
> [Matt Mejia](https://buildkite.com/resources/blog/what-shipped-at-buildkite-september-27-october-3-2026/)

The MCP release also adds Test Engine execution traces and slowest-execution queries. Another tool, `create_pipeline_webhook`, can add a missing GitHub webhook to an existing pipeline, avoiding the need to recreate it. Version 1.23.0 changed `create_pipeline` so that callers must specify `create_webhook`, which is a breaking change.

Buildkite reversed one earlier default after running evaluations, with failure summaries now again including jobs that never ran because making that behaviour optional led agents to issue extra tool calls. Remote MCP connections can now be pinned to one Buildkite organisation by adding it to the server URL. The option works with both toolset and read-only URLs.

Giving agents discrete validation, comparison and repair tools should reduce their reliance on parsing full logs and composing lower-level API calls. Permissions remain important because webhook repair and pipeline creation can modify CI configuration. [InfoQ's coverage of GitHub agentic workflows](https://www.infoq.com/news/2026/05/github-agentic-workflows/) describes a related security model based on isolated execution, restricted permissions and auditable actions.

Buildkite's GitHub Actions compatibility layer can now run its importer and generated jobs on Linux arm64 agents. Labels such as `ubuntu-24.04-arm` require an explicit queue mapping and do not fall back to x86-64 or emulation. The feature allows organisations with arm64 CI fleets to retain that architecture when bringing compatible Actions workflows to Buildkite.

Other compatibility fixes resolve environment values, named secrets, runtime variables and matrix values in service-container configuration. Buildkite has also exposed more `strategy.*` values to job and step expressions. The changed-file limit used by path filters has risen from 300 to 3,000, alongside a fix for push workflows where a branch moved after the original push.

Agent v4.1.0 adds cache save and restore durations and sizes to Buildkite telemetry. OpenTelemetry job spans now include the commit, pull request and build author. These fields add context for teams investigating slow jobs or retry patterns. [Pinterest previously described using Honeycomb with Buildkite](https://www.infoq.com/news/2024/12/pinterest-honeycomb-enhanced-ci/) to separate agent waiting time from script execution and identify jobs behind build-time spikes.

The associated [Elastic CI Stack v7 release](https://buildkite.com/resources/changelog/408-elastic-ci-stack-v7-is-here-with-buildkite-agent-v4/) brings Agent v4 to Linux and Windows instances on AWS. It removes Agent v3 support and retires or replaces some tracing and cancellation parameters. Buildkite advises users to review custom parameter files, deployment automation and values supplied through `AgentEnvFileUrl` before upgrading. Support for all Agent v3 releases ends on 3 September 2027.

## About the Author

#### **Matt Saunders**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/buildkite-ci-secrets-agentic/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。