---
title: "Meta Expands Its Custom Silicon Strategy From Compute Into Networking"
date: 2026-08-29 11:25:52
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Meta has detailed(https://engineering.fb.com/2026/08/24/networking-traffic/mtia-300-meta-training-ch"
source_url: "https://www.infoq.com/news/2026/08/meta-hccl/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-28T07:43:00.000Z　|　采集：2026-08-29 11:25:52

## 正文

[Meta has detailed](https://engineering.fb.com/2026/08/24/networking-traffic/mtia-300-meta-training-chip-built-in-nics/) MTIA 300, its first in-house accelerator optimized for training ranking and recommendation models.

Unlike large-language-model training, where raw floating-point throughput is often the dominant concern, Meta says recommendation models spend much more time communicating between accelerators. MTIA 300 addresses that by integrating networking and collective communication directly into the chip.

The communication pressure comes largely from embedding tables, which Meta says can contain more than 99% of a recommendation model’s parameters. Training these models across hundreds of accelerators generates frequent AllReduce, AllToAll, and AllGather operations, creating a workload where the network can become as important as the compute itself.

Meta first moved the network interface into the accelerator package. MTIA 300 contains two network chiplets with six custom 800 Gbps RDMA NICs each, providing 1.2 TB/s of total I/O bandwidth without crossing a PCIe bus. The same twelve NICs support both scale-up communication within a rack and scale-out traffic between racks, allowing Meta to change how bandwidth is divided without redesigning the chip.

![](https://www.infoq.com/news/2026/08/meta-hccl/news/2026/08/meta-hccl/en/resources/1Screenshot%202026-08-27%20at%203.02.39%E2%80%AFPM-1787869190861.png)

Source: Meta

Moving the NICs closer to compute did not remove another source of contention: on conventional GPUs, collective communication can consume the same processing resources needed for training. MTIA 300 instead includes 16 dedicated message engines that handle communication independently of its main compute grid, including near-memory hardware for reduction operations.

Meta reports that this separation allows large matrix operations and collective communication to run concurrently with less than 0.5% degradation in compute throughput. On the GPU architecture used for comparison, Meta measured degradation of more than 20% when the two workloads overlapped.

The hardware was co-designed with HCCL, Meta’s collective-communication library. Rather than having the host CPU orchestrate every communication operation while a job runs, HCCL compiles collective operations into subgraphs that MTIA 300’s message engines can execute autonomously. Once those instructions reach the accelerator, the host is no longer involved in driving the communication.

In production, Meta says HCCL reaches up to 940 GB/s of communication bandwidth within a rack. On a 150-billion-parameter recommendation model running across 40 accelerators, the company reports that MTIA 300 reduced total communication time by 3.9x compared with an equivalent GPU cluster.

MTIA 300 also marks an expansion of Meta’s broader custom-silicon programme. The company says it already [operates hundreds of thousands](https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/) of MTIA accelerators for inference and plans four further generations over the next two years, spanning ranking, recommendation, and generative-AI workloads. Meta has also expanded its partnership with Broadcom to co-develop future MTIA generations, while continuing to source accelerators from AMD, NVIDIA, and other vendors as part of what it calls a portfolio strategy.

That strategy reflects a wider shift among hyperscalers toward workload-specific AI silicon. [Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/) has continued expanding its TPU programme, [Amazon](https://aws.amazon.com/ai/machine-learning/trainium/) has grown its Trainium business, and [Microsoft](https://www.reuters.com/business/microsoft-plans-unveil-its-new-maia-300-ai-chip-this-fall-information-reports-2026-08-10/) is developing successive generations of Maia accelerators as cloud providers look for alternatives to relying exclusively on general-purpose GPUs.

MTIA 300 shows how far Meta is prepared to take that specialization. Rather than treating networking as supporting infrastructure around the accelerator, the company designed compute, communication hardware, and collective software together around a workload where moving data can be as important as processing it.

## About the Author

#### **Matt Foster**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/meta-hccl/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。