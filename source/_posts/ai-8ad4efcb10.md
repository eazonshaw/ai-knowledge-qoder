---
title: "Netflix Treats GPU Reliability as a Distributed Systems Problem"
date: 2026-10-31 09:15:33
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Netflix has detailed(https://netflixtechblog.com/reliable-gpu-compute-for-large-training-inference-j"
source_url: "https://www.infoq.com/news/2026/10/netflix-gpu-distributed-systems/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-30T12:00:00.000Z　|　采集：2026-10-31 09:15:33

## 正文

Netflix has [detailed](https://netflixtechblog.com/reliable-gpu-compute-for-large-training-inference-jobs-d62b03a96d7a) how it is building a reliability platform for large-scale GPU training and inference, using layered health checks, automated remediation, and fault-tolerant training to keep jobs running despite hardware failures.

The problem is particularly acute for large AI training jobs. A model may run for weeks across hundreds of GPUs, with all workers operating in lockstep. A single failed GPU, degraded network adapter, or slow machine can therefore stop or significantly slow the entire workload. Netflix has built its GPU compute platform on [Kubernetes](https://kubernetes.io/) and designed it to detect these failures, remove unhealthy capacity automatically, and allow long-running jobs to recover from machine loss.

The approach has produced measurable results: Netflix reports more than 99.95% GPU-node availability and an increase in job success from approximately 98% to more than 99.5%.

A conventional cloud health check can establish that a virtual machine is running and reachable, but that does not mean its GPUs are capable of running a distributed training workload.

Netflix found that a GPU can respond normally to a status query while failing once memory is allocated or sustained computation begins. Similarly, a network adapter may be present but have fewer links than expected, allowing collective operations to continue at severely reduced bandwidth.

![](https://www.infoq.com/news/2026/10/netflix-gpu-distributed-systems/news/2026/10/netflix-gpu-distributed-systems/en/resources/11_73vlwnPR6M7b1cYx43QeGw-1792576901909.webp)

Device-level checks use [NVIDIA DCGM](https://developer.nvidia.com/dcgm) to monitor GPU errors, memory, interconnect, and thermal conditions, while networking checks inspect the state and number of high-speed [Elastic Fabric Adapter](https://aws.amazon.com/hpc/efa/) interfaces. A Kubernetes node agent converts these results into node conditions that controllers can act upon.

The checks are deliberately designed to fail closed. If a diagnostic tool hangs, its timeout marks the machine unhealthy rather than allowing a broken check to report success. Netflix also maintains fallback paths using kernel logs when the normal GPU diagnostic mechanism itself fails.

Detecting a fault is only half the problem. Netflix has built controllers that progressively respond to failures rather than immediately replacing an entire machine.

A transient problem can initially block new work while allowing existing workloads to continue. If the condition persists, the machine is drained, and its workloads are moved. Depending on the failure, remediation can range from killing a problematic job or resetting a GPU to rebooting the machine or replacing it entirely.

This approach integrates with [Karpenter's](https://karpenter.sh/) node auto-repair capabilities, with Netflix adding policies that determine how long to tolerate different failures and how much of the cluster can be disrupted at once.

Netflix also accepts that hardware failures cannot be eliminated. Instead, its training platform makes them cheaper to recover from.

Large jobs use checkpointing and elastic workers, allowing training to resume from the last healthy checkpoint when a machine is lost. The platform can then automatically retry failures, while application failures are classified separately to avoid repeatedly restarting jobs with genuine software bugs.

Netflix also treats the training job itself as a distributed system. Rather than looking only for failed machines, it can identify a single slow rank that is holding the rest of the job back. This matters because a GPU does not have to fail to reduce the throughput of a synchronous workload.

![](https://www.infoq.com/news/2026/10/netflix-gpu-distributed-systems/news/2026/10/netflix-gpu-distributed-systems/en/resources/11_E194fQZ3PRUDlq0AU5VQPg-1792576901909.webp)

Netflix is also using [NVIDIA's Multi-Instance GPU (MIG)](https://www.nvidia.com/en-us/technologies/multi-instance-gpu/) capabilities to allow smaller inference workloads to share GPUs while maintaining memory-level isolation between tenants.

This improves utilisation compared with dedicating an entire GPU to every workload. Netflix is also working towards Kubernetes Dynamic Resource Allocation (DRA), which should allow more expressive resource requests and topology-aware placement, including ensuring that GPUs, network adapters and CPUs are positioned appropriately within the machine.

[Meta](https://engineering.fb.com/2025/07/22/data-infrastructure/how-meta-keeps-its-ai-hardware-reliable/) also uses extensive hardware diagnostics, automated remediation, checkpointing, and rapid recovery. Its recent work focuses heavily on detecting hardware faults, including difficult silent data corruption (SDCs), across extremely large AI clusters. Meta reports that hardware failures accounted for more than 66% of training interruptions in its Llama 3 experience.

Netflix's architecture places particularly strong emphasis on closing the operational loop: validate hardware before scheduling, monitor it during execution, identify the failure domain, remediate automatically, and measure the resulting goodput. Meta, meanwhile, has invested heavily in hardware-level fault detection and cluster maintenance as well as recovery.

Both approaches reflect the same underlying reality: at thousands of GPUs, reliability can no longer be treated as simply keeping individual machines available.

## About the Author

#### **Craig Risi**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/netflix-gpu-distributed-systems/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。