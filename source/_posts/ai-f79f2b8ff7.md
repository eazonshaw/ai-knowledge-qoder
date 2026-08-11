---
title: "IBM and Red Hat Expand Lightwell to Strengthen Trust and Governance for AI-Era Open Source"
date: 2026-08-12 06:32:19
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "IBM(https://www.ibm.com/us-en) and Red Ha(https://www.redhat.com/en)t have announced(https://newsroo"
source_url: "https://www.infoq.com/news/2026/08/lightwell-ai-open-source/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-11T12:00:00.000Z　|　采集：2026-08-12 06:32:19

## 正文

[IBM](https://www.ibm.com/us-en) and [Red Ha](https://www.redhat.com/en)t have [announced](https://newsroom.ibm.com/2026-07-08-ibm-and-red-hat-expand-lightwell-with-new-commercial-offerings-to-build-the-trust-infrastructure-for-ai-era-open-source) an expansion of Lightwell, introducing new commercial offerings designed to help organizations establish trusted, verifiable software supply chains for the age of AI-assisted software development. Building on the open-source [Lightwell project,](https://www.redhat.com/en/lightwell) the new offerings aim to simplify software signing, provenance, artifact verification, and policy enforcement, enabling enterprises to ensure that both human- and AI-generated software can be trusted throughout the software delivery lifecycle.

The announcement reflects a growing shift in software security. As AI accelerates software creation, the challenge is no longer simply producing code faster, but proving where software originated, how it was built, whether it has been modified, and whether it complies with organizational security policies before reaching production. IBM argues that establishing a verifiable "trust infrastructure" will become a foundational capability as enterprises increasingly rely on AI-generated code, open-source components, and automated software supply chains.

Lightwell builds upon many of the security standards that have emerged over the past several years, including [Sigstore](https://www.sigstore.dev/), [in-toto](https://in-toto.io/), [SLSA (Supply-chain Levels for Software Artifacts)](https://slsa.dev/), and [software bill of materials (SBOM)](https://www.ibm.com/think/topics/sbom) initiatives. Rather than treating signing, provenance, and policy enforcement as independent activities, Lightwell aims to integrate them into a cohesive platform that enables organizations to verify every stage of the software delivery process.

The expanded commercial offerings provide capabilities for artifact signing, provenance generation, policy validation, and lifecycle management, helping organizations implement supply chain security without assembling multiple disconnected open-source projects themselves. This is particularly relevant as AI-assisted development increases both the speed and volume of software changes entering enterprise delivery pipelines.

This has shifted attention toward cryptographic provenance and continuous verification. Rather than relying solely on code reviews or vulnerability scanning, organizations are increasingly seeking evidence that software was built in approved environments, signed using trusted identities, generated from verified source code, and has remained unaltered throughout its lifecycle. In this model, trust becomes an attribute that accompanies software from development through deployment rather than a final security check performed immediately before release.

Rather than introducing entirely new security concepts, Lightwell packages many of these emerging standards into a commercially supported platform that organizations can adopt more easily within enterprise software delivery environments. The emphasis is less on replacing existing security controls than on operationalizing them consistently across increasingly complex development ecosystems.

The announcement also reflects an important evolution in software engineering. Traditionally, software supply chain security focused on preventing malicious code from entering build pipelines. Increasingly, however, organizations need to establish trust not only in source code but also in AI-generated artifacts, automated workflows, infrastructure changes, and autonomous software delivery processes.

As AI agents become capable of generating code, modifying infrastructure, resolving incidents, and contributing directly to software delivery, organizations need mechanisms to verify who, or what, performed each action, under which identity, and according to which policies. This aligns with broader industry efforts around verifiable execution, cryptographic attestations, workload identity, and policy-as-code, all of which seek to make increasingly autonomous software systems transparent and accountable.

IBM and Red Hat are part of a much broader movement toward trusted software supply chains. GitHub has continued expanding provenance capabilities through [CodeQL](https://codeql.github.com/), artifact attestations, and secret scanning, while Google has [driven adoption of SLSA](https://cloud.google.com/blog/products/application-development/google-introduces-slsa-framework) and Sigstore across its software ecosystem. Microsoft has integrated software signing and provenance into Azure DevOps and [GitHub Advanced Security](https://azure.microsoft.com/en-us/products/devops/github-advanced-security), and the [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/) recently partnered with [Kusari](https://www.kusari.dev/) to strengthen supply chain security across cloud-native projects. Meanwhile, initiatives such as the [Linux Foundation's](https://www.linuxfoundation.org/press/linux-foundation-and-industry-leaders-launch-akrites-to-defend-critical-open-source-software-against-ai-enabled-cyber-threats) [Akrites](https://akrites.org/) project are exploring how similar cryptographic trust models can [protect open-source software](https://www.infoq.com/news/2026/07/akrites-open-source-ai-threats/) from emerging AI-enabled threats.

Although these initiatives differ in implementation, they share a common objective: ensuring that software can be trusted not simply because it functions correctly, but because its entire lifecycle, from source code to deployment, is verifiable, transparent, and resistant to tampering. Lightwell extends this philosophy into the AI era by recognising that trust must increasingly encompass not only human developers but also AI systems participating in software creation.

**IBM's expansion of Lightwell suggests that the future of software security will depend less on individual security tools and more on comprehensive trust architectures that span the entire software lifecycle. As AI accelerates development and automation becomes increasingly autonomous, organizations will need stronger guarantees that every artifact, dependency, and deployment can be traced back to a verified source and validated against organizational policy.**

## About the Author

#### **Craig Risi**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/lightwell-ai-open-source/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。