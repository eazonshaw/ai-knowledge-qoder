---
title: "Microsoft Releases Aspire 13.5 With a Refreshed Dashboard and Workflow Improvements"
date: 2026-08-21 06:17:04
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Last week, Microsoft's team released Aspire 13.5(https://devblogs.microsoft.com/aspire/whats-new-asp"
source_url: "https://www.infoq.com/news/2026/08/dotnet-aspire-13-5-release/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-20T08:07:00.000Z　|　采集：2026-08-21 06:17:04

## 正文

Last week, Microsoft's team released [Aspire 13.5](https://devblogs.microsoft.com/aspire/whats-new-aspire-13-5/), an update that refreshes the dashboard and the [aspire.dev](https://aspire.dev/) homepage, expands the ways an AppHost can interact with developers, and adds more flexibility to how applications are deployed.

According to the release, [earlier Aspire 13](https://www.infoq.com/news/2025/11/dotnet-aspire-13-release/) work focused on expanding the tool across languages, deployment targets, and coding agents, including a full-parity TypeScript AppHost, new command-line features, and Kubernetes and Docker Compose deployment integrations. This release steps back to freshen the look and add several long-requested quality-of-life features.

The most immediate change is visual. The dashboard received, as stated by the dev team, *"a new coat of paint"*, while the overall layout and features stayed the same, so everything remains where users expect it. Microsoft also states that it checked contrast and accessibility across the updated surfaces so the new look works well for everyone.

The [dashboard](https://devblogs.microsoft.com/aspire/whats-new-aspire-13-5/#-a-fresh-view-of-aspire) also gained smaller, frequently requested improvements, including case-insensitive console log search, filtering of logs and traces by timestamp or exact numeric comparison, cleaner reconnection when the resource-service connection drops, and friendlier health-check failure messages in place of raw exception stacks.

![](https://www.infoq.com/news/2026/08/dotnet-aspire-13-5-release/news/2026/08/dotnet-aspire-13-5-release/en/resources/1aspire-dashboard-refresh-1787127819539.webp)*(New dashboard look, Source: Official Microsoft [release blog post](https://devblogs.microsoft.com/aspire/whats-new-aspire-13-5/))*

The [Interaction Service](https://aspire.dev/extensibility/interaction-service/), which lets a resource command ask for input or show a notification where the developer is already working, now supports file imports. As described, a command can open a file picker that accepts JSON or YAML, enforce a size limit, and hand the AppHost a stream to read, removing the older detour of placing a file in a set directory before running a script.

Longer tasks can also display a progress dialog with optional cancellation, and commands can declare named arguments that appear as input controls in the dashboard and as options in the command-line interface. Together, as reported, these pieces give integration authors what they need for a complete setup or import flow.

Aspire 13.5 also puts a terminal inside the dashboard. As stated, adding *[WithTerminal()](https://aspire.dev/app-host/with-terminal/)* gives a resource an interactive terminal session, useful for shells, REPLs, and other tools that expect real input and output. Users can type into it, switch between replicas, and return to normal console logs without stopping the session, and multiple viewers can attach to the same process at once. The feature and its matching commands are marked experimental in this release.

Another notable change is that [TypeScript AppHosts](https://aspire.dev/app-host/typescript-apphost/) are now generally available and no longer require an experimental opt-in. With that milestone in place, the Interaction Service, file uploads, and progress dialogs work the same way from both C# and TypeScript, and the release closes remaining gaps by adding custom [health checks](https://aspire.dev/fundamentals/health-checks/) and [container file copying](https://aspire.dev/app-host/container-files/) to the TypeScript model. Project and executable resources can also be given HTTPS developer [certificates](https://aspire.dev/app-host/certificate-configuration/) directly from the AppHost, though those APIs remain experimental.

On deployment, the update lets applications model persistent volumes for [Kubernetes workloads](https://aspire.dev/deployment/kubernetes/persistent-volumes/), configuring storage class, capacity, and access mode before binding the volume to a project or container. Aspire then emits the persistent volume claim and renders the workload accordingly.

New methods also let an application reference [existing Azure resources](https://aspire.dev/integrations/cloud/azure/customize-resources/) across resource groups, subscriptions, and tenants, keeping environment details out of the AppHost source while references and deployment intent stay in the model. Separately, the Aspire command-line interface can now be installed and updated through package managers including Homebrew, WinGet, npm, Nix, mise, and NuGet.

The [Visual Studio Code extension](https://aspire.dev/get-started/aspire-vscode-extension/) was also rebranded to Aspire and gained several capabilities, including the ability to open the dashboard in a side panel, Bun and MAUI debugging support, and resource commands shown directly in the tree view.

![](https://www.infoq.com/news/2026/08/dotnet-aspire-13-5-release/news/2026/08/dotnet-aspire-13-5-release/en/resources/1code-extension-sidebar.DsBK1mmC_2uBUbt-1787128269312.webp)

*(Updated VS Code extension look, Source: Official [Microsoft documentation](https://aspire.dev/get-started/aspire-vscode-extension/))*

The release further carries a number of [breaking changes](https://aspire.dev/whats-new/aspire-13-5/#breaking-changes), including the renaming of the *ServiceProvider* property to *Services* and the deprecation of the GitHub Models integration. The dashboard's AI Assistant chat was also removed in this version.

For interested readers, the full [What's New in Aspire 13.5](https://aspire.dev/whats-new/aspire-13-5/) page, including the complete inventory, migration notes, and breaking changes, is available on the Aspire documentation site.

## About the Author

#### **Almir Vuk**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/dotnet-aspire-13-5-release/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。