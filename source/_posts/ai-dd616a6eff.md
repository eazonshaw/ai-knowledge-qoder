---
title: "CloudFlare Previews Automatic WebMCP Support for Web Pages"
date: 2026-08-11 06:27:34
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare announced a developer preview that lets any website enable a WebMCP(https://blog.cloudfla"
source_url: "https://www.infoq.com/news/2026/08/cloudflare-webmcp/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-10T20:00:00.000Z　|　采集：2026-08-11 06:27:34

## 正文

Cloudflare announced a [developer preview that lets any website enable a WebMCP](https://blog.cloudflare.com/webmcp/) (Web Model Context Protocol) interface with a single dashboard switch. This allows browser-based AI agents to interact with unmodified web pages through structured tools instead of scraping or guessing, keeping human traffic and control on the original site.

The core idea behind WebMCP is exposing structured, machine-readable tools directly to AI agents through a standard protocol. This allows them to call explicit functions like `searchFlights` or `bookTicket` without resorting to scraping and parsing HTML, which consumes tokens, or clicking UI buttons to trigger behavior. WebMCP makes interactions faster, more efficient, and far less fragile than traditional browser automation, which often breaks when the UI changes.

To adopt WebMCP, a website must expose its functionality as tools using either the [`document.modelContext` API](https://developer.chrome.com/docs/ai/webmcp/imperative-api), which allows developers to register tools, define their schemas, and write the code that implements them, or a [declarative JavaScript API](https://developer.chrome.com/docs/ai/webmcp/declarative-api) that allows to add annotations to a standard HTML forms to create a WebMCP tool.

What CloudFlare's current preview is aiming at is giving any site on Cloudflare the possibility to support WebMCP with a single switch by selecting *tool packs* from a pre-defined library. CloudFlare is currently including two tool packs in this preview: Content Credentials to allow agents to read C2PA content-provenance metadata from images on the page, and Site MCP server, which can proxy a site's MCP server tools to the in-browser agent. CloudFlare says the tool pack library will grow and that when new packs become available, a site can enable them without redeploying.

CloudFlare's implementation is built around a `bridge.js` module, which is silently injected into a served webpage using HTMLRewriter:

```
<!-- Cloudflare injects this at the edge. Same origin, and your HTML is otherwise untouched. -->
<script type="module"
        src="/.webmcp/bridge.js"
        data-packs="c2pa,mcp-server-client"
        data-mcp-url="/mcp"></script>
```

The module reference lists the tool packs adopted by the page in the `data-packs` attribute along with any additional parameter required (e.g., `data-mcp-url` for the Site MCP server tool pack).

> From there, the bridge composes the packs named in `data-packs` into one tool list and registers each with `.registerTool`. A pack is just a set of MCP tool descriptors and their handlers. Static packs, such as Content Credentials, declare their tools up front. A dynamic pack, such as the Site MCP Server pack, discovers its tools at boot before registering anything.

Existing MCP tools running on the server are discovered through the standard MCP `Tool` type, so for each of them the bridge registers a WebMCP proxy whose `execute()` method calls the site back on the same origin. Likewise, the bridge pass through a standard `CallToolResult` to handle the execution result.

CloudFlare WebMCP preview is highly work in progress. The WebMCP standard is itself a preview and only supported in [Chrome 145+](https://developer.chrome.com/docs/ai/webmcp). You can enable WebMCP by going to Agent Readiness > Labs in the Cloudflare Dashboard, toggle on WebMCP for your domain, and select the desired tool packs.

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/cloudflare-webmcp/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。