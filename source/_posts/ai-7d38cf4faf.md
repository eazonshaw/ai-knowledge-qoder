---
title: "Claude Code Adds Experimental Code Mode to Orchestrate Tool Calls with JavaScript"
date: 2026-11-24 13:41:09
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Anthropic has added Code Mode(https://code.claude.com/docs/en/code-mode) to Claude Code, an experime"
source_url: "https://www.infoq.com/news/2026/11/claude-code-mode/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-23T12:17:00.000Z　|　采集：2026-11-24 13:41:09

## 正文

Anthropic has added [Code Mode](https://code.claude.com/docs/en/code-mode) to Claude Code, an experimental feature in which the model writes JavaScript to drive its tools instead of requesting each Bash, Read, or Edit call separately. Code Mode is off by default, requires Claude Code v2.1.323 or later, and is enabled with the `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` environment variable. Anthropic warns it may change or be removed in any release.

In a normal session, Claude asks for one tool call, reads the full result, and decides the next step. In [Code Mode](https://code.claude.com/docs/en/code-mode), one script can run commands in parallel, pass one result into the next call, and return only the output the model needs. The documentation's example finds a file with rg, raises a retry limit, runs the tests, and returns just the path and test output. The conversation still shows each tool call and diff, while the generated code sits in the transcript viewer. Anthropic recommends it for edits repeated across many files, searches that need filtering, and independent commands. Code that Claude waits on stops after ten minutes; sessions started in auto or bypassPermissions mode can push it to the background for up to two hours while the conversation continues.

The permission model is the part architects should read first. Each call inside a script still goes through deny and ask rules and [PreToolUse hooks](https://code.claude.com/docs/en/hooks), but in [auto mode](https://code.claude.com/docs/en/permission-modes) the classifier reviews the script before it runs, not each call, and cannot see values computed at run time. A git push can now reach a hook as cd 'app' && git push, so hooks must check every part of a command; a hook matching the REPL tool can read the JavaScript from tool\_input.code. Project settings cannot enable Code Mode, so a cloned repository cannot switch it on, and administrators can block it through managed settings.

[Code Mode](https://code.claude.com/docs/en/code-mode) runs only in interactive terminal sessions of the native build, on Opus 5.5, Sonnet 5.5, Haiku 5.5, or Fable 5.2, through a Claude subscription or Console account. It does not work with -p, the Agent SDK, the VS Code panel, the Desktop app, Amazon Bedrock, gateways, or zero-data-retention organizations. Agent teams need v2.1.326. Anthropic has published no token or latency figures for it.

[George (@bolyki)](https://x.com/bolyki/status/2123068346224509366) compared Code Mode with normal mode across eight interactive Sonnet 5.5 runs and posted:

> Same results every time. Context 20-25% smaller. On the bigger task: 37% fewer tokens, 19% lower cost. But it is not faster, and on a tiny task it cost more.

[Ravi Madabhushi](https://x.com/ravibits/status/2123128487125123166), who builds agent auth infrastructure, pushed back on claims that the feature makes MCP obsolete:

> It doesn't materially change anything wrt authentication, authorization and audit policy layers; Your agent still makes those same MCP calls, with the same auth tokens and context and what materially changes is how much context gets into the model window and how much can be discarded.

The idea, and the name, predate Anthropic's release. Cloudflare introduced [Code Mode for MCP](https://blog.cloudflare.com/code-mode/) converting MCP tools into a TypeScript API that models code against inside sandboxed Workers, where bindings keep API keys away from generated code. Anthropic's own post on [code execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp) described one workflow dropping from 150,000 to 2,000 tokens, and the Claude API offers [programmatic tool calling](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling) in a remote code execution container. Code Mode instead runs the script in the developer's local session, against Claude Code's built-in tools and permission system.

Code Mode remains opt-in and experimental, and Anthropic collects feedback through /feedback. Setup steps and troubleshooting are in the [Claude Code documentation](https://code.claude.com/docs/en/code-mode)

## About the Author

#### **Daniel Dominguez**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/claude-code-mode/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。