---
title: "Kubernetes Confidential Containers 获 Fortanix 认证与密钥管理支持"
date: 2026-11-19 10:52:49
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "Fortanix 宣布(https://www.fortanix.com/company/pr/2026/10/fortanix-announces-confidential-ai-for-enter"
source_url: "https://www.infoq.cn/article/4PEbu8cLHkgz0oUF3etE?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-11-18　|　采集：2026-11-19 10:52:49

## 正文

Fortanix [宣布](https://www.fortanix.com/company/pr/2026/10/fortanix-announces-confidential-ai-for-enterprise-grade-kubernetes-workloads-on-cncf-confidential-containers-coco)在其 Confidential AI 平台中支持 Confidential Containers。该集成打通了 Kubernetes 工作负载认证与加密密钥发放流程。因此，符合安全策略的工作负载可以在基于硬件的可信执行环境（TEE）内解密模型和敏感数据。

[Confidential Containers](https://www.cncf.io/projects/confidential-containers/)（CoCo）是云原生计算基金会（CNCF）的一个项目，它能够将 Kubernetes Pod 运行在由基于硬件的可信执行环境（TEE）作为底层支撑的机密虚拟机内部 。与普通容器不同——隔离性主要依赖于宿主操作系统——机密虚拟机利用硬件保护机制对内存进行加密，并在工作负载运行期间限制对其访问。这有助于保护“使用中的数据”（而不仅仅是“静止数据”或“传输中的数据”），并允许团队在共享基础设施上运行敏感工作负载。不过，这些保护措施仍然需要信任客户机软件，并正确地配置认证和密钥发放机制。

Fortanix 的[技术概述](https://www.fortanix.com/blog/confidential-ai-at-container-speed)中描述了将 CoCo 工作负载连接至两项服务的插件：用于验证环境的机密计算管理器（CCM），以及仅向经 CCM 验证的环境发放密钥的数据安全管理器（DSM）。该公司表示，CCM 可以同时对处理器和图形处理单元（GPU）进行认证，但是否进行该验证则取决于具体配置。

CoCo 将镜像拉取和解压操作移到了机密虚拟机中。其认证代理（Attestation Agent）负责收集硬件证据，而机密数据中心（Confidential Data Hub）则在验证通过后获取机密信息。根据 Fortanix 描述的工作流，如果认证失败，那么密钥将保留在 DSM 中，因此，工作负载无法解密受保护的模型或数据。

Fortanix 首席产品官 Anuj Jaiswal 在公告中表示：“通过将认证和密钥管理整合到一个平台中，团队无需自行构建信任层即可采用标准 CoCo。”Fortanix 表示，CCM 和 DSM 以集群的方式运行，提供 7×24 小时服务支持，可以作为托管服务、本地部署或物理隔离环境使用。

[Fortanix 的英特尔 TDX 部署指南](https://support.fortanix.com/docs/deploy-confidential-container-coco-workloads-on-intel-tdx-platform)提供了两种 GPU 设置：Required（必选）模式下，CCM 将通过 NVIDIA 的认证服务验证 GPU 凭证；Ignored（忽略）模式下，仅检查凭证是否存在，而不考虑验证结果。该指南还指出，Fortanix CoCo Helm 图表不会配置主机固件或内核设置，这些配置必须预先完成。

[CoCo 的开源组件 Trustee](https://confidentialcontainers.org/docs/attestation/architecture) 中已经实现了认证和有条件密钥交付功能。Trustee 将证据评估与资源授权相分离。其认证服务会将平台声明与参考值进行比对。随后，在从本地存储、插件或外部密钥库中发放密钥之前，其密钥代理服务（Key Broker Service）会应用用户定义的策略。即使认证成功，仍然需要该策略对请求进行授权。Trustee 还接受与处理器认证报告绑定的 GPU 证据。

微软的 [Azure Secure Key Release](https://learn.microsoft.com/en-us/azure/confidential-computing/concept-skr-attestation) 在 Key Vault Premium 和托管 HSM 中提供了一种托管替代方案，并实现了与 Azure Attestation 的集成。它发放的是可导出的密钥，而非秘密或证书。

该 Pod 的客户机内核和辅助进程位于信任边界之内，因此团队也必须信任它们。[CoCo 的信任模型](https://confidentialcontainers.org/docs/architecture/trust-model/trust-model)指出，硬件测量通常会涵盖客户机环境，而容器验证则成为一个独立的阶段。该模型还警告称，飞地应用程序（enclave application）仍然可能暴露出危险的外部接口，而且不包括拒绝服务防护和硬件侧信道防护。认证并不能证明 AI 应用程序能够安全地处理数据。

Fortanix 表示现已支持 CoCo，其部署指南中详细记录了如何安装 Fortanix CoCo Helm 图表。该公告还提到，Fortanix 正在为 CoCo 开发开源插件，但未透露具体的存储库或版本信息。[CCM 9 月 17 日的发布说明](https://support.fortanix.com/docs/5-0-ccm-patch-1-september-17-2026)中新增了针对 AMD 安全加密虚拟化-安全嵌套分页 (SEV-SNP) 及英特尔信任域扩展 (TDX) 的 CoCo 应用程序注册功能。

声明：本文为 InfoQ 翻译，未经许可禁止转载。

原文链接：[https://www.infoq.com/news/2026/10/k8s-confidential-containers/](https://www.infoq.com/news/2026/10/k8s-confidential-containers/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/4PEbu8cLHkgz0oUF3etE?utm_source=rss&utm_medium=article）。