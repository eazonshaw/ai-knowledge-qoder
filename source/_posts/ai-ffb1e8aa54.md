---
title: "Docker Sandbox Kit Spec: Packaging AI Agent Permissions as OCI Images"
date: 2026-10-03 08:49:39
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Docker has announced(https://www.docker.com/blog/docker-sandbox-kit-spec-cncf/) that it is bringing "
source_url: "https://www.infoq.com/news/2026/10/docker-sandbox-ai-agent/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-02T09:00:00.000Z　|　采集：2026-10-03 08:49:39

## 正文

Docker has [announced](https://www.docker.com/blog/docker-sandbox-kit-spec-cncf/) that it is bringing the Sandbox Kit Specification to the CNCF, aiming to make what an AI agent may access as portable as the agent itself. The Apache 2.0 spec, now at v3, packages an agent, its tools, and a typed list of the hosts, credentials, and volumes it requests into an ordinary OCI image. Docker announced the move at WeAreDevelopers on September 24.

Agents such as [Claude Code](https://claude.com/product/claude-code) and [Codex](https://openai.com/codex/) install packages, call APIs, and use credentials on a user's behalf. The grants that make them useful, such as bind mounts, broad tokens, and opened firewall rules, usually live in shell history, dashboards, and memory rather than in a reviewable artifact. Docker argues this is the fragmentation OCI was created to prevent, and that every runtime vendor could otherwise invent its own answer.

In [v3](https://www.docker.com/blog/docker-sandbox-kit-spec/), a Kit is no longer its own artifact type. It has no custom media type and no sidecar file. The manifest has one declaration: `vnd.docker.sandbox.kit.descriptor`. So, a Kit can be built with `docker buildx build`, pulled with `docker pull`, and scanned, signed, or used in a `FROM`. Pinning the digest pins content and permissions together.

Declarations are typed and versioned capabilities, for example `com.docker.sandbox/network-policy@2` and `com.docker.sandbox/credential@1`. In the spec's GitHub CLI example, the Kit allows `api.github.com` but denies `DELETE` on `/repos/**`, since deny wins. Credentials can be proxy-managed: a conforming runtime injects the real token into requests to named domains, and only a sentinel value exists inside the sandbox.

A Kit only requests permissions; the host decides. Without a conforming runtime, the annotation is inert. If a required request cannot be satisfied, the launch is refused. Docker Sandboxes, which run agents in microVMs with their own kernel, is the first conforming runtime.

A launch combines one workload Kit, which supplies the root filesystem, with any number of mixin overlays. Mixins are ordered by the `provides/requires` dependency graph rather than by flag order. Resolution fails if a `requires` is unmet or if two Kits provide the same name. Overlapping declarations reconcile, with network rules unioned, and incompatible ones are errors.

Every descriptor also reduces to a normalized set of grants. A runtime that gates updates can record that set and stop any version that widens it, including one that removes a deny rule. Docker says two conformance suites ship with the spec, one for Kit artifacts and one for runtimes.

Docker says it built Kits with AWS, Box, Datadog, Dynatrace, JFrog, NanoClaw, OpenClaw, Palo Alto Networks, and Snyk, among others. The company draws a parallel to its donation of the image format and runc that led to OCI. CNCF CTO Chris Aniszczyk welcomed the move:

> Standards are what let an ecosystem move fast without fragmenting, and few companies understand that better than Docker. By delivering Sandbox Kits as standard OCI images, Docker is giving the industry an open, repeatable way to package an AI agent, its tools, and its guardrails as one artifact.

The posts do not say whether the spec has been accepted into a CNCF program or which maturity level it would enter.

For engineers looking to get started, the project is hosted at the `docker/sandbox-kit-spec` repository, and examples can be tested using the `sbx CLI` (e.g., `sbx run ./hello --kit ./gh`). While existing registries, scanners, and signing tools handle Kits without modification, the descriptor grammar and per-capability semantics are new and will require learning. It is important to note that enforcement depends entirely on the runtime; since Docker Sandboxes is currently the only conforming implementation, portability across different runtimes has not yet been demonstrated. Until governance changes, Docker continues to maintain the specification and encourages feedback regarding any kit or runtime duties that cannot currently be expressed.

## About the Author

#### **Claudio Masolo**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/docker-sandbox-ai-agent/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。