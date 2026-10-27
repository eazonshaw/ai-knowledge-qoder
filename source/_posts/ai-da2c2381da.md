---
title: "Readyon Builds Four Layer Tenant Isolation for Multi Tenant Amazon EKS"
date: 2026-10-27 09:00:26
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "ReadyOn has detailed a four-layer tenant isolation architecture(http://aws.amazon.com/blogs/architec"
source_url: "https://www.infoq.com/news/2026/10/readyon-four-layer-isolation/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-26T14:07:00.000Z　|　采集：2026-10-27 09:00:26

## 正文

ReadyOn has detailed a [four-layer tenant isolation architecture](http://aws.amazon.com/blogs/architecture/readyons-four-walls-of-tenant-isolation-on-amazon-eks/) for its Harmony workforce intelligence platform running on Amazon Elastic Kubernetes Service (EKS). The design combines Kubernetes namespaces, dedicated Karpenter node pools, Amazon VPC security groups, and per-tenant Amazon Aurora databases to limit cross-tenant access across the Kubernetes, compute, network, and data layers.

Harmony processes payroll data, organizational hierarchies, and operational analytics for enterprise customers. [ReadyOn](https://www.readyon.com/) maps its controls to a 10-stage multi-tenant threat model, with particular attention to lateral movement from a compromised tenant workload. The company says adversarial exercises have not produced a successful cross-tenant path to date.

[Mohammad Akbarpour](https://www.linkedin.com/in/mohammad-akbarpour-46773127/), Professor at Stanford Graduate School of Business, discussing ReadyOn’s security architecture in a [LinkedIn post](https://lnkd.in/p/g-wCxd44), described the broader challenge as

> pushing AI capabilities forward while making the boundaries around inaccessible data and workflows difficult to cross.

[William Antonio G](https://www.linkedin.com/in/wiangube/), Principal AWS Engineer at Sparq, similarly emphasized the change in the security model when multiple tenants share infrastructure. In a [LinkedIn post](https://lnkd.in/p/g9p6jemF) discussing the architecture, he wrote,

> For single-tenant clusters, hardening is a well-documented challenge. But when you add multi-tenancy, the threat model fundamentally changes.

The first layer uses a dedicated Kubernetes namespace for each tenant, with RBAC, resource quotas, admission controls, and default deny network policies. ReadyOn uses Argo CD ApplicationSets to generate these resources from Git based configuration, providing the same baseline controls across tenants and automatically reconciling unauthorized changes.

The second layer isolates compute. Karpenter provisions dedicated node pools for each tenant using a dual taint strategy. Pods must tolerate both a tenant-identifying taint and a workload-type taint before they can be scheduled. An admission controller also verifies that requested tolerations correspond to the tenant associated with the namespace.

![](https://www.infoq.com/news/2026/10/readyon-four-layer-isolation/news/2026/10/readyon-four-layer-isolation/en/resources/1readyon-1791076393945.jpeg)

*ReadyOn’s Four Walls: namespace, compute, network, and data isolation and the cross-tenant paths blocked by each layer (Source: [AWS Blog Post](https://aws.amazon.com/blogs/architecture/readyons-four-walls-of-tenant-isolation-on-amazon-eks/))*

The third layer moves enforcement below Kubernetes. Per-tenant VPC security groups restrict database connections to the corresponding tenant node pool, while Kubernetes network policies enforce default deny behavior between namespaces. The EKS API endpoint is private and accessed through VPN, OpenID Connect, and multi-factor authentication.

The fourth layer separates tenant data through dedicated Aurora clusters rather than relying on row-level filtering in a shared database. ReadyOn also uses tenant-scoped AWS Secrets Manager paths, short-lived credentials through IAM Roles for Service Accounts, and dedicated observability backends.

AWS documentation notes that Kubernetes namespaces, RBAC, quotas, and network policies provide logical isolation but do not prevent workloads from sharing underlying nodes. It recommends node selectors, affinity rules, or taints and tolerations when stronger workload separation is required.

The layered model has also prompted discussion about whether isolation controls can be verified effectively without corresponding observability.

[Juan Pablo Gaviria](https://www.linkedin.com/in/jpgaviria/), an engineer who [commented](https://lnkd.in/p/gEMHQZw9) on the architecture on LinkedIn, argued that traces need to connect workload identity with database and network enforcement to expose gaps between controls.

> Isolation depth without observability depth is indistinguishable from false confidence.

ReadyOn therefore retains a shared EKS environment while extending tenant boundaries beyond Kubernetes into scheduling, AWS networking, and dedicated data infrastructure. The architecture treats the controls as overlapping defenses rather than assuming any individual layer provides complete isolation.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/readyon-four-layer-isolation/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。