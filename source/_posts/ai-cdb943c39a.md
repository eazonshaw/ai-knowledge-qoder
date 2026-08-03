---
title: "GitHub Copilot CLI在重新设计的终端UI中新增选项卡与免配置文件的工具设置"
date: 2026-08-04 06:53:08
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "GitHub 正式推出了重新设计的 GitHub Copilot CLI终端界面(https://github.blog/changelog/2026-06-23-copilot-cli-new-te"
source_url: "https://www.infoq.cn/article/wybFeXucFGaobN7wQjev?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-08-03　|　采集：2026-08-04 06:53:08

## 正文

GitHub 正式推出了重新设计的 GitHub Copilot CLI[终端界面](https://github.blog/changelog/2026-06-23-copilot-cli-new-terminal-interface-is-generally-available/)。该界面自 Microsoft Build 2026 预览后，开发者可以通过`/experimental`标志试用。此次更新引入了选项卡布局、会话内的工具配置体验，并为直接在命令行与 GitHub 交互的开发者提供了更清洁、更无障碍的界面。

交互式 Copilot CLI 会话会在屏幕顶部展示选项卡。开发者可按 Tab 键在默认的 Session 选项卡与个人 Gists 选项卡之间切换；在仓库内运行 CLI 时还会新增 Issues 与 Pull requests 选项卡，其作用域限定为该仓库。高亮某个 issue 或 pull request 并按“c”键会把该引用插入到提示词中，以便让 Copilot 调查、修复、评论或审阅，按“o”键会在浏览器中打开高亮项，在 Issues 或 Pull requests 选项卡上按“/”可以使用自定义查询搜索 GitHub。选项卡还支持鼠标选择、拖动重排、隐藏或在设置中关闭。

扩展 Copilot CLI 的工具配置现在提供了引导式的会话体验，避免了手工编辑配置文件。开发者可以运行`/mcp add`完成交互表单，或使用实验性的`/mcp search`命令浏览[GitHub MCP Registry](https://github.com/mcp)并直接安装[模型上下文协议（MCP，Model Context Protocol）](https://modelcontextprotocol.io/)服务器。GitHub 表示，新添加的服务器可立即使用，无需重启 CLI。`/skills`命令可以切换单项 skill，`/plugin`命令可从市场、仓库或本地路径安装插件，`/settings`则支持以内联对话框显示并修改配置。

新界面还针对可访问性与可读性做了优化。它采用了对主题敏感的语义配色与响应式组件，能在窄终端中自适应显示且不截断内容。`/theme`命令允许开发者选择`default`、`dim`、`high-contrast`或`colorblind` 等配色模式；在检测到屏幕阅读器时，它会自动启用相应的支持，添加标签化图标并禁用动画。

该发布基于 GitHub Copilot CLI 本身在 2026 年 2 月实现普遍可用的基础之上，增加了在终端中浏览与操作 GitHub issues、pull requests 与 gists 的能力，并提供了无需离开终端即可配置工具的方法。开发者可在终端运行`copilot update`来进行更新，并支持通过`/feedback`命令提交反馈或在公共仓库中创建 issue。

查看英文原文：[GitHub Copilot CLI Gets Tabs and No-Config-File Tool Setup in Redesigned Terminal UI](https://www.infoq.com/news/2026/07/copilot-cli-terminal-ga/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/wybFeXucFGaobN7wQjev?utm_source=rss&utm_medium=article）。