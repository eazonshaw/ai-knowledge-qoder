---
title: "Python Workers Reach GA on Cloudflare, with Questions About Cold Starts and Upstream Maintenance"
date: 2026-09-30 08:54:49
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare recently made Python Workers generally available(https://blog.cloudflare.com/python-worke"
source_url: "https://www.infoq.com/news/2026/09/cloudflare-python-workers-ga/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-29T06:33:00.000Z　|　采集：2026-09-30 08:54:49

## 正文

Cloudflare recently made [Python Workers generally available](https://blog.cloudflare.com/python-workers-ga/), two years after the first [preview](https://blog.cloudflare.com/python-workers/). Python now sits alongside JavaScript and TypeScript on the Developer Platform, with bindings to Workers AI, R2, D1, Hyperdrive, Durable Objects, Queues and Workflows, and support for FastAPI, Django and Flask.

Three pieces of engineering made the GA possible, and two of them landed outside Cloudflare.

The first is a packaging standard. Python Workers run on [Pyodide](https://pyodide.org/en/stable/), so any package with a C, C++, or Rust extension must be cross-compiled to WebAssembly, and until now there was no standard way to do it. Cloudflare compiled and hosted those packages itself, which capped how many were available. The company proposed [PEP 783](https://peps.python.org/pep-0783/), standardizing a platform for Python in browser runtimes called PyEmscripten, and it was accepted after more than a year. Cloudflare also stabilized the Pyodide build toolchain and added PyEmscripten support to [cibuildwheel](https://cibuildwheel.pypa.io/en/stable/), so maintainers can build their own wheels.

The second is a socket bridge. Drivers such as aiomysql and asyncpg use the standard library socket module, which makes POSIX system calls that are stubs inside a WebAssembly sandbox. Cloudflare implemented those syscalls over the Workers [connect API](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/). The translation happens at the syscall level, so drivers need no changes, and that is what makes the Hyperdrive integration work.

The third is upstream contributions to HTTP clients. Libraries including requests and httpx now route through the JavaScript fetch API in WebAssembly environments, which is what lets OpenAI, LangChain, and MCP run inside a Worker.

The bindings themselves also became Pythonic. Sending a dictionary to a Queue previously required conversion through to\_js with a dict converter; the type conversion now happens inside the runtime and the SDK. Web frameworks arrive through connectors rather than a server, with workers.asgi and workers.wsgi translating incoming JavaScript requests into the structures WSGI and ASGI applications expect, on the argument that the platform is already the web server.

Community reactions have been sharply divided, and less about the features than about what sits underneath them.

The third item drew the sharpest response. Writing on [Hacker News](https://news.ycombinator.com/item?id=49787142) as a urllib3 maintainer, illia-v explained that his project merged large contributions adding Pyodide and Emscripten support, and later JSPI support, which is what made this work for requests. The funding, he says, went to the contributor who implemented it rather than to the maintainers left holding it:

> There is a meaningful difference between funding a contribution to an upstream project and funding the upstream maintainers.

The consequence shows in urllib3's own posture. The Emscripten backend remains experimental there and is explicitly out of scope in the project's security policy. He points to [CVE-2025-50182](https://nvd.nist.gov/vuln/detail/CVE-2025-50182), where urllib3's redirect controls did not behave as expected once requests were routed through fetch, and warns there may be more differences of that kind, because browser networking semantics differ from urllib3's usual backend.

Cold starts drew numbers rather than complaints. Syrus Akbary, founder of Wasmer, which sells a competing WebAssembly platform, revisited concerns he raised at the original launch:

> It will be quite hard for them to achieve <100ms startup time with their current architecture.

He said a minimal Python application started in around 60ms on Wasmer Edge against around 900ms on Cloudflare Workers in a benchmark his company published earlier this year, and asked for current p50 and p95 figures with and without native packages.

Dominik Picheta, one of the post's authors, answered from the Cloudflare side:

> Our memory snapshot implementation has improved the cold starts significantly already.

He added that sharding reduces how often cold starts occur, and pointed to an earlier post containing [numbers](https://blog.cloudflare.com/python-workers-advancements/). Akbary's follow-up noted that the post reported a startup time of about 1.027 seconds, and asked whether it had been remeasured since.

Version coupling was Akbary's other objection: being tied to the Python and Pyodide version that workerd embeds. Picheta answered that [compatibility flags](https://developers.cloudflare.com/workers/configuration/compatibility-flags/) select between Python 3.12, 3.13 and 3.14, while noting that older versions bring older Pyodide releases with fewer features, JSPI among them. Akbary read that as confirming the problem, since the flag moves workerd too.

Memory drew a separate concern from commenter dangoodmanUT, who had not tested it:

> This likely eats in 10's of MBs more into the worker memory allocation.

One exchange settled a technical point rather than a commercial one. Akbary argued that patching Python's event loop to use the JavaScript loop creates incompatibility, since the two differ in when coroutines execute. Hood Chatham, another author of the post and a Pyodide contributor, replied:

> With the WebLoop, Python coroutines stay lazy.

He added that the primitive a Python event loop needs is call\_later, which maps cleanly onto setTimeout, and that using the JavaScript loop is necessary because that is where I/O events happen in the runtime. A second loop would block them.

The same thread carries the counterweight to its own funding critique. Simon Willison suggested Cloudflare send money toward Pyodide. Picheta noted that Gyeongjae Choi, another author, is a Pyodide core developer, and Chatham is a Pyodide contributor Cloudflare hired. Two of the three names on the announcement maintain the project the runtime runs on.

If these reactions are representative, the GA label settles less than the engineering beneath it. The packaging standard removes a dependency on one vendor compiling wheels, and the syscall bridge lets existing drivers work unmodified. What remains open is who maintains the upstream pieces over time, and what the runtime costs at startup and in memory.

Cloudflare has published production patterns in a [python-workers-examples](https://github.com/cloudflare/python-workers-examples) repository, and its developer documentation now shows Python alongside JavaScript and TypeScript across products. On performance, the company says only that it plans to make Python Workers more performant and memory-efficient.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/cloudflare-python-workers-ga/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。