---
title: "Flux Mirror Uses Gitless GitOps to Keep Software Supply Chain Under Control"
date: 2026-08-21 06:17:04
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Flux has introduced Flux Mirror(https://fluxcd.io/blog/2026/08/flux-mirror/), a CLI plugin that mirr"
source_url: "https://www.infoq.com/news/2026/08/flux-mirror-gitless-gitops/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-20T08:00:00.000Z　|　采集：2026-08-21 06:17:04

## 正文

Flux has introduced [Flux Mirror](https://fluxcd.io/blog/2026/08/flux-mirror/), a CLI plugin that mirrors container images, Helm charts and OCI artifacts between registries from a declarative configuration. The plugin is part of the [Flux v2.9 CLI plugin system](https://fluxcd.io/blog/2026/06/flux-v2.9.0/) and is presented as a way to keep Kubernetes clusters reconciling only from registries that teams operate themselves. This product fits into the Flux project's move towards Gitless GitOps, in which OCI registries become the source of truth for desired state rather than Git repositories at runtime.

Flux Mirror aims to solve long-standing operational problems with artefacts hosted in registries outside an organisation’s control. The announcement highlights familiar examples, including [Docker Hub rate limiting](https://about.gitlab.com/blog/prepare-now-docker-hub-rate-limits-will-impact-gitlab-ci-cd/) and Broadcom’s decision in 2025 to [freeze the popular free Bitnami catalogue](https://medium.com/@talkimhi/bitnamis-august-28th-bombshell-the-end-of-free-container-images-as-we-know-them-74fe5cdfb882), as reminders that external registries’ policies can become part of a production architecture overnight. In the announcement they argue that every Kubernetes user should be able to answer where their artefacts live, who can change them and what happens when an upstream source disappears, even if they are not using Flux itself.

![Flux Mirror getting started instructions](https://www.infoq.com/news/2026/08/flux-mirror-gitless-gitops/news/2026/08/flux-mirror-gitless-gitops/en/resources/1Screenshot%20From%202026-08-18%2016-03-32-1787065800503.png)

Flux Mirror’s scope covers three main artefact categories and a small set of carefully defined features. It can copy container images byte-for-byte, including multi-architecture manifest lists, mirror Helm charts from HTTP repositories into OCI registries and relocate Flux's own desired state artefacts. A configuration file describes what should be mirrored, from which sources and into which destinations, allowing teams to encode registry content as declarative state in version control.

> Combining identity policies, attestations, and minimum artifact age turns your mirror into what we’ve been calling a supply-chain diode. Every Kubernetes user should have a deliberate answer for where these artifacts live, who can change them, and what happens when the upstream disappears.  
> \- [Flux CD team](https://fluxcd.io/blog/2026/08/flux-mirror/)

Flux Mirror groups container images, Helm charts and Flux OCI desired state artefacts into a single relocation workflow, republishing HTTP-based Helm charts as deterministic OCI artefacts that Flux can consume without relying on upstream chart indices. It applies a selector pipeline of regular expressions, semantic version constraints, sorting and top N limiting so that teams mirror only the versions they use.

Flux Mirror can check that each artefact was signed by the right person or build system before it is copied, using Cosign signatures and identity information, and it can also carry over SBOMs and build provenance so that Flux can re check this evidence on the cluster. It also enforces a minimum age for signatures, so newly signed artefacts are held back and only mirrored after they have been public for long enough to be considered safe.

The announcement also shows how Flux Mirror fits operationally into Gitless GitOps pipelines built around Flux’s OCI support. Teams can install the plugin and run a sync from GitHub Actions using a dedicated setup action that verifies artefact attestations before first use, or as a Kubernetes `CronJob` colocated with clusters and registries. Secrets can also be mirrored, including short-lived tokens for cloud workloads, and used in `imagePullSecrets` or `secretRef` fields in Kubernetes clusters.

Flux Mirror does not exist in isolation, with other work happening to solve this problem. Guides from UnifyDrive and Argo CD show how `regctl`, Helm and ORAS can be combined to copy charts and images between registries and consume them through OCI support in Argo CD, albeit without the integrated verification and drift detection that Flux Mirror offers. Community tools like [helmper](https://www.reddit.com/r/kubernetes/comments/1cldlcq/helmper/) similarly target Helm chart and image synchronisation, reinforcing that artefact relocation is now seen as its own operational concern.

The announcement discusses minimum artifact age, a significant issue right now with increasingly-fast supply chain attacks happening this year, such as the [Shai Hulud worm and subsequent waves](https://www.infoq.com/news/2025/10/npm-s1ngularity-shai-hulud/), and the [compromise of Aqua Security’s Trivy GitHub Action](https://www.infoq.com/news/2026/04/trivy-supply-chain-attack/) which left bad artefacts live for days. InfoQ has also reported recently on [coordinated defence in open-source ecosystems](https://www.infoq.com/news/2026/06/athena-security-coalition/), and with Chainguard’s data driven view that [most container CVE instances occur in the long tail of less popular images](https://www.infoq.com/news/2026/01/chainguard-opensource-vulns/) rather than the top twenty most widely used ones. Together they illustrate why policies that only allow signed, aged artefacts into a private registry can be seen as a form of one-way diode in the software supply chain.

[Writing on X](https://x.com/controlplaneio/status/2089692387752702261), Flux backers Control Plane concisely summarised the risks that Flux Mirror is trying to mitigate:

> When you pull images directly from public registries in your Kubernetes Deployments, you make their uptime, rate limits, and retention policy part of your production architecture.  
> \- Control Plane

In [response to the LinkedIn announcement post](https://www.linkedin.com/feed/update/urn:li:activity:7495074065234313216/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287495103683932909568%2Curn%3Ali%3Aactivity%3A7495074065234313216%29), [BIMP](https://bimp.ai/) founder Hannah Foxwell accentuated the need for a registry to have all the artefacts devs require in one place:

> Platform teams want dev teams using their private curated registry but to do that you have to make sure the registry has everything they need when they need it  
> \- Hannah Foxwell

For teams already using Flux or considering Gitless GitOps, the plugin offers a way to relocate artefacts into private registries, enforce identity and minimum age policies and keep pull credentials rotated, without maintaining a large collection of bespoke scripts. For others, it serves as a detailed example of how to design declarative mirror pipelines that combine image, chart and configuration artefacts with verified provenance and controlled flow from public infrastructure into production clusters. A [full run-through](https://fluxcd.io/blog/2026/08/flux-mirror/) is available on Flux's website.

## About the Author

#### **Matt Saunders**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/flux-mirror-gitless-gitops/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。