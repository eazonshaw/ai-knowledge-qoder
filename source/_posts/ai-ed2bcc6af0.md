---
title: "GKE Security Blueprint Joins Growing List of Cloud AI Frameworks"
date: 2026-07-23 06:54:22
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google Cloud has published a new blueprint setting out how organisations should secure artificial in"
source_url: "https://www.infoq.com/news/2026/07/google-gke-ai-security-blueprint/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-07-22T08:00:00.000Z　|　采集：2026-07-23 06:54:22

## 正文

Google Cloud has published a new blueprint setting out how organisations should secure artificial intelligence workloads running on Google Kubernetes Engine, arguing that the shift from prototype to production has outpaced traditional security models. The document, [written by Glen Messenger and Shannon Kularathna](https://cloud.google.com/blog/topics/developers-practitioners/securing-ai-at-enterprise-scale-the-google-kubernetes-engine-blueprint/), sets out a three layer approach covering infrastructure, model integrity and application security, and is aimed at chief information security officers and platform engineering teams.

![Best practices for AI workload security on GKE screenshot](https://www.infoq.com/news/2026/07/google-gke-ai-security-blueprint/news/2026/07/google-gke-ai-security-blueprint/en/resources/1Screenshot%20From%202026-07-20%2018-49-05-1784570058958.png)

Messenger, a group product manager on the GKE security team, writes that teams "need to protect proprietary model weights, defend against novel application-layer threats like prompt injection, and enforce strict regulatory compliance, all without slowing down your AI developers." The blueprint argues that meeting these goals requires more than a place to run containers and calls for a platform that "compounds layers of security out-of-the-box."

For infrastructure, the blueprint suggests using Confidential GKE Nodes, which extend hardware level memory encryption to accelerators including Nvidia H100 GPUs and TPUs. Also using Workload Identity Federation (which lets inference pods fetch model weights from Cloud Storage without long-lived keys) and VPC Service Controls lets administrators build a perimeter around regulated data.

> You can't have a secure AI workload on an insecure cluster.  
> \- Google Cloud GKE team, [Securing AI at Enterprise Scale: The Google Kubernetes Engine Blueprint](https://cloud.google.com/blog/topics/developers-practitioners/securing-ai-at-enterprise-scale-the-google-kubernetes-engine-blueprint/)

For model security, Google points out that traditional software bills of materials do not capture AI-specific artefacts such as datasets and frameworks, so the blueprint introduces [k8s-aibom](https://github.com/GoogleCloudPlatform/k8s-aibom/), an open source Kubernetes controller that generates AI bills of materials automatically. At the application layer, Model Armor inspects prompts and responses for injection attempts, sensitive data exposure and harmful content, while GKE Sandbox, built on the gVisor isolation technology, is recommended for containing AI agents that execute generated code or call untrusted tools.

Google recommends a phased rollout with three stages, described in the blueprint as Deploy, Operate and Govern. The first stage covers baseline controls such as enabling Workload Identity and running sensitive workloads on Confidential Nodes. The second moves to production hardening through signed image policies and log aggregation, and the third introduces organisation wide guardrails and automated incident response. [SecurityBrief's coverage of the announcement](https://securitybrief.com.au/story/google-cloud-unveils-ai-security-blueprint-for-gke) notes that the release highlights "how cloud providers are packaging existing infrastructure, identity, and monitoring products into AI-specific operating models for customers building applications on managed platforms."

Google is not alone in publishing this kind of guidance. Amazon Web Services has taken a similar layered approach with its AWS AI Security Framework, and has paired this with an open source initiative called [AI on EKS](https://awslabs.github.io/ai-on-eks/) that provides Terraform blueprints for deploying AI workloads on Amazon's own managed Kubernetes service. AWS has also extended Amazon GuardDuty's threat detection to EKS clusters, using a managed eBPF agent to spot credential exfiltration and reverse shells directly on the Kubernetes data plane, as [InfoQ reported in June 2025](https://www.infoq.com/news/2025/06/guardduty-eks/).

Security vendor ARMO has published [a detailed critique of where these AWS native tools stop being useful for AI specific threats](http://www.armosec.io/blog/ai-agent-security-framework-aws-eks/). In a implementation guide on securing AI agents on EKS, Yossi Ben Naim, ARMO's vice president of product management, writes that "AWS-native tools handle identity, encryption, and control-plane logging well, but they stop at the workload boundary, leaving a blind spot exactly where agentic AI threats happen: inside your containers, at runtime, where agents make autonomous decisions about which tools to call and which data to access." Ben Naim's central argument is that identity and audit tools such as IAM Roles for Service Accounts and CloudTrail logging answer questions about what an agent is permitted to do, but not whether a permitted action is actually normal for that specific agent. He proposes a four-stage cycle of observing agent behaviour, assessing the gap between granted and used permissions, detecting deviations from an established baseline, and only then enforcing tightened policy.

Microsoft has approached the problem from a different angle, focusing on the identity and behaviour of AI agents themselves rather than the underlying container platform. Its [Agent Factory](https://azure.microsoft.com/en-us/blog/tag/agent-factory/) series, hosted on the Azure blog, describes how [Microsoft Entra Agent ID](https://www.microsoft.com/en-gb/security/business/identity-access/microsoft-entra-agent-id) gives individual agents their own scoped and short lived credentials, and how automated red teaming through a tool called PyRIT is used to probe agents for weaknesses before release.

A separate Cloud Native Computing Foundation blog, [covered by InfoQ in April 2026](https://www.infoq.com/news/2026/04/kubernetes-secure-workloads/), makes a point that cuts across all cloud vendors: Kubernetes itself understands orchestration and isolation, but has no built in concept of whether a prompt should be executed or a response leaks sensitive information, meaning that traditional controls such as role based access control and network policies remain necessary but are not sufficient on their own.

## About the Author

#### **Matt Saunders**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/07/google-gke-ai-security-blueprint/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。