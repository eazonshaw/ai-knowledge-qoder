---
title: "CircleCI Makes Machine Runner Orchestrator Generally Available"
date: 2026-10-10 09:24:28
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "CircleCI(https://circleci.com/) has made its Machine Runner Orchestrator 1.0.0(https://circleci.com/"
source_url: "https://www.infoq.com/news/2026/10/circleci-machine-runner/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-09T12:00:00.000Z　|　采集：2026-10-10 09:24:28

## 正文

[CircleCI](https://circleci.com/) has made its [Machine Runner Orchestrator 1.0.0](https://circleci.com/changelog/machine-runner-orchestrator-release-1-0-0/) generally available, providing automated scaling of self-hosted machine runner virtual machines according to CI workload demand. The release expands the earlier Runner Provisioner preview with support for CPU, GPU, and ARM workloads from a single deployment, as well as Kubernetes environments running on GKE, AKS, and EKS, alongside KubeVirt-based clusters.

The release is aimed at a common challenge with self-hosted CI infrastructure: maintaining enough runner capacity for bursts of build and test activity without permanently provisioning machines for peak demand. The orchestrator monitors CircleCI workload requirements and provisions and removes machine runners accordingly, allowing organisations to retain control over the underlying compute environment while making runner capacity more dynamic. CircleCI says the capability is included with self-hosted runners across its plans at no additional cost.

Earlier versions were focused on provisioning machine runners, but the new orchestrator can manage several resource classes from a single deployment. That matters in environments where CI workloads are no longer homogeneous: conventional CPU builds can coexist with GPU-intensive workloads and ARM-based builds without requiring separate orchestration installations for each class.

The underlying architecture also reflects the increasing use of Kubernetes as the control plane for CI infrastructure. Rather than requiring a particular Kubernetes distribution, Machine Runner Orchestrator now supports the three major managed Kubernetes platforms - [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine), [Azure Kubernetes Service](https://azure.microsoft.com/en-us/products/kubernetes-service), and [Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks/) - as well as KubeVirt environments. This gives platform teams more flexibility over where the orchestration layer runs while the actual CI runners remain machine-based

Machine Runner Orchestrator occupies a different layer from Kubernetes node autoscalers such as [Karpenter](https://karpenter.sh/) and [Cluster Autoscaler](https://docs.aws.amazon.com/eks/latest/best-practices/cas.html). Kubernetes node autoscaling primarily responds to unschedulable Pods and adjusts the underlying cluster capacity. Karpenter, for example, provisions nodes based on pending workloads and can also consolidate or otherwise manage node lifecycle.

CircleCI's orchestrator instead operates at the CI runner layer. Its purpose is to ensure that the machines registered as CircleCI runners scale with the demand for CI jobs. In a Kubernetes-based architecture, the two approaches can therefore potentially operate together: Kubernetes manages the infrastructure hosting the orchestration components, while CircleCI manages the machine capacity available to execute CI workloads.

CircleCI is not alone in moving self-hosted CI execution toward Kubernetes-native autoscaling. [GitHub's Actions Runner Controller](https://github.com/actions/actions-runner-controller) (ARC) provides a Kubernetes operator for orchestrating and scaling self-hosted GitHub Actions runners. Its runner scale sets can automatically increase or decrease runner capacity based on workflow demand, creating and removing ephemeral runners as jobs are processed.

The difference is largely in the execution model. GitHub ARC primarily creates ephemeral runner environments as Kubernetes-managed workloads, whereas CircleCI's Machine Runner Orchestrator is specifically concerned with machine runner virtual machines. This makes CircleCI's approach particularly relevant for CI workloads that require VM-level isolation or capabilities that are hard to reproduce in standard runner containers, while still using Kubernetes as the orchestration control plane.

The transition to 1.0 is not completely transparent for existing preview users. CircleCI has formally renamed the product from runner-provisioner to machine-runner-orchestrator, changing the associated Helm chart, container image repository, and Packagecloud repository. Existing installations cannot simply be upgraded in place: CircleCI instructs users to uninstall the previous deployment and install the new 1.0.0 package.

That creates a short operational gap during migration. CircleCI warns that runners associated with the configured resource classes will be offline between removal of the old deployment and installation of the new one. Organisations therefore need to account for this when upgrading production CI infrastructure rather than treating the release as a conventional in-place software update.

Version 1.0.0 also addresses two high-severity vulnerabilities in the Go gRPC implementation. The fixes cover CVE-2026-84304, involving heap memory exhaustion through HTTP/2 frame fragmentation, and CVE-2026-84445, which could cause a crash when requests were missing the :authority or Host header.

The 1.0 release moves CircleCI further toward the model of combining multiple resource classes with Kubernetes-based orchestration and support for major managed Kubernetes platforms. For platform engineering teams, the interesting shift is therefore not simply another runner feature, but the emergence of CI execution capacity as an independently scalable infrastructure layer; one that can respond to software delivery demand in much the same way that modern platforms already scale application workloads

## About the Author

#### **Craig Risi**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/circleci-machine-runner/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。