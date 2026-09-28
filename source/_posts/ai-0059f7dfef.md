---
title: "Docker Cloud Sandboxes Provide a Consistent Sandbox Abstraction Across Laptop and Cloud"
date: 2026-09-28 08:08:07
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Docker Cloud Sandboxes provide secure, hosted execution environments(https://www.docker.com/blog/int"
source_url: "https://www.infoq.com/news/2026/09/docker-cloud-sandboxes/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-26T17:00:00.000Z　|　采集：2026-09-28 08:08:07

## 正文

[Docker Cloud Sandboxes provide secure, hosted execution environments](https://www.docker.com/blog/introducing-cloud-sandboxes-start-on-your-laptop-finish-in-the-cloud) for running AI coding agents on Docker-managed infrastructure. Built on hardware-enforced microVM isolation, the platform provides a consistent execution environment and unified CLI workflows for seamlessly moving workloads from local machines to the cloud.

Docker Cloud Sandboxes are an evolution of [Docker Sandboxes](https://www.infoq.com/news/2026/08/docker-vmm-layer/), which Docker introduced earlier this year to provide local microVM environments where coding agents could operate autonomously and safely. However, developers are increasingly running multiple long-horizon tasks in parallel, says Docker, creating a need for persistent, scalable execution environments beyond the local machine.

> When agents worked in short bursts, the question was whether the model could hold a task together. Now that they work in hours, the question is where those hours happen. A laptop is built around a person. It sleeps when the lid closes, slows down on battery, and disconnects when you move.

With Cloud Sandboxes developers can move a sandbox between local and cloud execution with one command, making it possible to "run a dozen agents at once, for five, ten, or 21 hours each, without watching any of them". Cloud Sandboxes use the same isolation model as local Docker Sandboxes and are managed through the same CLI. This enables developers to start a task locally and then move it to the cloud when it requires additional resource, or hand off a task to the cloud before leaving for the day. Another key use case is parallelizing workloads across dozens of tasks, with each task running in its own isolated cloud sandbox.

To move a sandbox from your local machine to Docker infrastructure or vice versa, you run:

```
$ sbx move my-project --to cloud
```

This command "captures the sandbox's filesystem and recreates it on the other side, so your work carries over".

Alongside Cloud Sandboxes, Docker is also releasing several kits, which are pre-configured, pre-built sandboxes defined according to the [Docker Sandbox Kit Specification](https://github.com/docker/sandbox-kit-spec). In the latest Kits v3 specification, Kits are no longer treated as a separate artifact but are instead packaged as standard OCI images. This allows them to be used just like any other Docker image, including with `build` and `pull`, and to serve as a base for building more complex Kits.

Commenting on the announcement, Deutsche Bank lead devops engineer Florin Lungu said he finds "it [interesting that this innovation allows for safe, autonomous coding in microVM environments](https://www.linkedin.com/posts/lunguflorin_introducing-cloud-sandboxes-start-on-your-share-7508918440905265152-2Vwr/), enhancing flexibility in our workflows".

However, Reddit user [CircumspectCapybara pointed out that sandboxing addresses only part of the issue](https://www.reddit.com/r/technology/comments/1wpgq9e/comment/pbvw806/): "any remotely useful agent workload is going to need to connect their sandboxed agents to limited external services" to access "tools it would realistically call in real life, real libraries or artifacts and stuff it might try to pull down from PyPI or Docker Hub or Hugging Face". This creates a potential attack surface even when the agent remains contained within the sandbox: "they can just talk to the narrow set of services they have been given access to and by talking to them break them while remaining inside the sandbox".

As a final note, Hacker News reader ongedierte [echoed this concern](https://news.ycombinator.com/item?id=49842053) arguing that "traditional sandboxes are not going to be the correct abstraction" and that "building harnesses based on object capabilities and being able to limit exactly what an agent can access in what manner will be the way forward".

## About the Author

#### **Sergio De Simone**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/docker-cloud-sandboxes/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。