---
title: "GKE Pod Snapshots Cut Model Load Times, and Move the Work to Snapshot Lifecycle Management"
date: 2026-09-28 08:08:07
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google has published benchmark results(https://cloud.google.com/blog/products/containers-kubernetes/"
source_url: "https://www.infoq.com/news/2026/09/gke-pod-snapshots-benchmarks/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-27T06:46:00.000Z　|　采集：2026-09-28 08:08:07

## 正文

Google has [published benchmark results](https://cloud.google.com/blog/products/containers-kubernetes/gke-pod-snapshots) for GKE Pod snapshots, reporting startup latency reductions of as much as 89%, with a 70B parameter model loading in 37 seconds and an 8B model in 15 seconds. The feature saves the running state of a workload, including CPU and GPU memory, and restores it on demand. It [reached general availability](https://docs.cloud.google.com/kubernetes-engine/docs/release-notes-new-features) in May on clusters running version 1.35.3-gke.1234000 or later.

This is checkpoint and restore, not caching. The snapshot holds everything the application had running: open file descriptors, threads, CPU registers, memory. It also holds the container root filesystem, EmptyDir volumes, and tmpfs mounts. A new replica picks up from there. It never runs the initialization that loads the model, which is where most of the startup time goes on large models.

[gVisor](https://gvisor.dev/) is what makes that possible, and it comes with a condition. Pods have to run in GKE Sandbox, since that is where the gVisor runtime lives. Autopilot clusters already have it. Standard clusters need a node pool with gVisor turned on. An agent on each node handles the snapshot lifecycle. A controller on the control plane clears out obsolete snapshots. Cloud Storage holds the data.

Two [custom resources](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/podsnapshot) do the configuring. PodSnapshotStorageConfig points at the bucket. PodSnapshotPolicy picks Pods by label, sets the trigger to workload or manual, and sets retention with a `lastAccessTimeout` and a cap on snapshots per group.

Google's customer example is Codeway. Its Retake platform had a custom caching layer for compiled artifacts, which got startup down to a minute. Lead DevOps engineer Ahmet Furkan Çomak said Pod snapshots cut that to "just 8 seconds". The team now starts H100 instances for a specific job and shuts them down when it finishes.

Practitioner reaction has centered less on the capture than on what happens afterward. Responding to a [LinkedIn analysis](https://www.linkedin.com/posts/suresh-rajashekaraiah_googlecloud-gke-kubernetes-share-7508052455197171712-JUmQ) of the release by Suresh Rajashekaraiah, Mohana Narasimha G., a senior DevOps and MLOps engineer, wrote:

> The restore path is compelling, but I suspect snapshot invalidation will be the harder platform problem than capture itself. Model digest, CUDA/driver version, GPU type/topology, and runtime config all become part of the compatibility key; secrets, DNS, and downstream connections need explicit rehydration after restore. Are you treating snapshots as immutable artifacts with an admission check before scheduling?

Google's [documentation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/pod-snapshots) answers the first half of that. GKE builds a hash from the Pod's essential runtime fields, which it calls the distilled Pod spec, and embeds it in the snapshot; a Pod restoring from it must produce an identical hash. The target node must have an identical machine series and CPU architecture (N2 to N2 or G2 to G2), and the gVisor kernel version and GPU driver version must match those captured. Where no compatible snapshot exists, the Pod starts normally.

A rootfs-only scope relaxes the rules. GKE skips the hash comparison, and because process memory is not restored, snapshots can cross machine families, including to E2.

The rehydration half remains with the application, and the documentation is specific about it. Encryption keys and certificates created before a snapshot must be re-created afterward, since the restored process resumes holding what it held when frozen. Environment variables live in application memory, where gVisor cannot reliably find and replace them, so a workload depending on new values has to read them from a file at `/proc/gvisor/spec_environ`. External connections are terminated on restore, persistent volumes are not checkpointed, and user-added iptables or nftables rules and routes are not restored.

If that reaction is representative, the work moves to managing snapshots rather than turning the feature on. Upgrade a node pool and the gVisor kernel or GPU driver version may change. Existing snapshots no longer match. The Pod then starts normally, per the documented fallback, and nothing errors. The benefit is just gone.

Restore is not instant either, whatever the headline numbers suggest. gVisor's kernel comes back first, usually within a few seconds. The application starts running at that point. Its memory is still loading in the background.

Hardware support is narrower than the framing suggests: whole-pod snapshots do not work on E2 machine types, multi-GPU Pods are supported only on L4 GPUs, and GPU sharing with Multi-Instance GPU is not supported.

The governance question follows from what a snapshot contains. A file in Cloud Storage holds the complete memory of a running workload, which in the agent sandbox case is memory that executed untrusted, model-generated code. Access rests on Workload Identity Federation and IAM bindings for each Pod's service account, which Google notes can take time to propagate.

The agent sandbox case sits on top of this. [GKE Agent Sandbox](https://www.infoq.com/news/2026/05/gke-agent-sandbox-hypercluster/) reached general availability in May, with a warm pool Google says allocates up to 300 sandboxes per second per cluster, 90% of them within 200 milliseconds, and it uses Pod snapshots to suspend idle agents rather than hold compute warm. [Agent Substrate](https://github.com/agent-substrate/substrate), the open-source project Google introduced at the same time, explores the same suspend and resume multiplexing at higher density, and its repository states it is not ready for production.

Meet Shah, AVP of cloud platform and AI engineering, who [drew the line](https://www.linkedin.com/posts/meetshah10290_kubernetes-gke-agenticai-ugcPost-7507648409642713088-9CXY) between them:

> Agent Sandbox GA is the foundation you can plan against for secure execution. Agent Substrate is the density chapter still being written in the open.

Google describes the feature as workload-agnostic, naming Java applications, game servers and legacy monoliths alongside AI inference. The decisions it leaves to teams are which node pools run gVisor, which bucket holds the snapshots and who can read it, how long snapshots persist, and what the workload refreshes when it resumes from a state it did not expect to be frozen in.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/gke-pod-snapshots-benchmarks/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。