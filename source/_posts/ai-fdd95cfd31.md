---
title: "Harbor Adds Docker Sandboxes to Run Reproducible AI Agent Evals in Isolated MicroVMs"
date: 2026-10-23 08:15:26
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Docker announced(https://www.docker.com/blog/harbor-docker-sandboxes-run-safe-reproducible-agent-eva"
source_url: "https://www.infoq.com/news/2026/10/ai-agents-harbor-docker/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-22T09:00:00.000Z　|　采集：2026-10-23 08:15:26

## 正文

Docker [announced](https://www.docker.com/blog/harbor-docker-sandboxes-run-safe-reproducible-agent-evals/) that [Harbor](https://www.harborframework.com/), the open-source agent evaluation framework, now works with [Docker Sandboxes](https://docs.docker.com/ai/sandboxes/). This change allows each evaluation task to run in its own [microVM](https://www.docker.com/blog/why-microvms-the-architecture-behind-docker-sandboxes/). So, instead of sharing a container, tasks are isolated for better performance. The same tasks run locally or in Docker Cloud Sandboxes, and Docker says it has tested Harbor with 64 concurrent tasks in the cloud.

Evaluating a coding agent means letting it install packages, edit files, and run commands, and a benchmark repeats this thousands of times. Docker's engineers describe this as running untrusted, AI-written code at scale. They also flag reward hacking, where an agent earns a passing score by tampering with tests or overwriting the file that records its score instead of solving the task. Harbor manages orchestration. It runs tasks, collects scores, and logs. It also supports benchmarks like Terminal-Bench. It needs an execution environment that is both isolated and consistent.

Each task runs in a Docker Sandbox, a microVM with its own kernel, so agent activity stays inside the VM and cannot reach the host, other tasks, or anything outside the environment. In Docker Cloud Sandboxes, configurable network policies let a task pull dependencies during setup, then restrict internet access while the agent works. Every agent is then evaluated under the same network conditions, which addresses a common source of non-reproducible results. Docker Compose is supported, so Harbor can run multi-container tasks inside a single cloud sandbox, with services and sidecars sharing the same microVM.

The announcement does not include benchmark data on startup overhead, per-task cost, or eval score variance. The one concrete scale figure is the 64 concurrent tasks Docker tested on Cloud Sandboxes. Higher limits are available on request through Docker's contact channel. Teams sensitive to per-task latency or cost will need to measure those themselves.

The integration is available now in the nightly release of Docker Sandboxes, and Docker says it will reach the stable release on October 23. Harbor is installed with the sbx extra, and the nightly build is pinned to version 0.24.1.dev202610150414. Cloud runs require a Docker account with Cloud access enabled. You also need a personal access token that has the Cloud Sandboxes permission. Harbor reads this from the SBX\_DOCKER\_USERNAME and SBX\_DOCKER\_PAT environment variables. A run selects the sandbox environment with the `-e sbx` flag, for example, `harbor run -t hello-world/hello-world -a oracle -e sbx`. The post presents the local option as free, while cloud scaling depends on Docker's Cloud Sandboxes offering.

The teams already using Harbor can try the integration today on the nightly build or wait for the stable release on October 23. Local runs go through the Docker Sandboxes CLI after `sbx login`, with `--ek target=local` added to the Harbor command. The local integration currently supports only public and no-network modes, subject to the machine's existing sandbox policy. The finer-grained network policy described for fair comparisons is tied to Cloud Sandboxes, so teams that need that control should plan for the cloud path. Network restriction removes one avenue for cheating, but the post does not claim to prevent reward hacking within the sandbox, such as an agent modifying test files it can write to. Harbor and Docker Sandboxes documentation covers the pre-integrated sandbox setup.

Docker's Harbor integration adds to the growing list of sandbox backends for the framework. It also expands the range of agent-runtime integrations with Docker Sandboxes.

On the Harbor side, the framework shows horizontal-scaling integrations with cloud sandbox providers. These include Daytona, Modal, E2B, Runloop, Tensorlake, LangSmith, Blaxel, Novita Sandbox, EC2, and Beam. You can find more details in its [GitHub repository](https://github.com/harbor-framework/harbor). The latest addition before Docker is LangSmith. By installing the langsmith extra, you can run evals in LangSmith production sandboxes. This works through the same interface used for Daytona, E2B, or Modal. For more details, see [Towards AI](https://pub.towardsai.net/harbor-turns-agent-eval-sandboxes-into-a-swappable-backend-4d8ef6c06a87). Harbor's [cloud deployment docs](https://www.harborframework.com/docs/run-jobs/cloud-sandboxes) suggest Daytona as the best choice. Daytona allows multi-container deployments using a docker-compose.yaml file. In contrast, Modal, E2B, and Runloop do not support this feature.

Beyond Harbor, Docker has been placing Sandboxes under other agent platforms. NanoCo and Docker have teamed up. Now, you can deploy NanoClaw, a claw-based agent platform, in Docker's MicroVM sandbox with just one command. This info comes from [DevOps Digest](https://www.devopsdigest.com/nanoclaw-integrates-with-docker-sandboxes). In July 2026, GitHub Agentic Workflows added Docker Sandboxes as a supported agent runtime, shipped in gh-aw version 0.82.9. Docker's [walkthrough](https://www.docker.com/blog/running-ai-agents-in-github-actions-with-docker-sandboxes/) says the sandbox has its own Docker daemon. This setup allows an agent to run Testcontainers-based integration tests without needing to mount the host Docker socket. The Harbor integration builds on the [Cloud Sandboxes launch](https://www.docker.com/?p=94083) from September 24. This launch extends local sandbox isolation to Docker-managed cloud infrastructure. Now, agent workflows can continue even if a laptop shuts down. [Third-party coverage](https://aicybr.com/blog/docker-cloud-sandboxes-kits-agent-pricing) of the launch reports a one-hour default session with a 24-hour maximum, and that paused sandboxes carry no compute charge. The same launch introduced Kits, packaged as OCI images, and Docker has committed to submitting the Kits specification to the CNCF. [NanoClaw Integrates with Docker Sandboxes +4](https://www.devopsdigest.com/nanoclaw-integrates-with-docker-sandboxes-0)

## About the Author

#### **Claudio Masolo**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/ai-agents-harbor-docker/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。