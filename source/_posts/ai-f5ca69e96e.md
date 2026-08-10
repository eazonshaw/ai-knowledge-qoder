---
title: "How Pinterest Secures AWS Infrastructure at Scale with a Centralized Terraform Pipeline"
date: 2026-08-11 06:27:34
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Pinterest has revealed(https://medium.com/pinterest-engineering/securing-infrastructure-at-scale-int"
source_url: "https://www.infoq.com/news/2026/08/pinterest-secures-aws-infra/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-10T10:00:00.000Z　|　采集：2026-08-11 06:27:34

## 正文

Pinterest [has revealed](https://medium.com/pinterest-engineering/securing-infrastructure-at-scale-introducing-pinterests-resource-provisioner-pipeline-rpp-8283bb12cbe5) the Resource Provisioner Pipeline (RPP), its own [Terraform](https://developer.hashicorp.com/terraform) execution engine. It ensures least-privilege access and needs dual-control reviews. This is important for the company’s [AWS infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/), as it adds strict guardrails to the [GitHub Actions](https://docs.github.com/en/actions) workflows. The system handles many Terraform workspaces, which control thousands of cloud resources. This includes IAM policies, VPCs, load balancers, S3 buckets, and Kubernetes clusters.

Pinterest's Terraform code is scattered across many repositories. Each one is owned by a different team. A consolidation into a mono-repo is still in progress. Granting a [CI/CD](https://en.wikipedia.org/wiki/CI/CD) system wide permissions to make changes across many repositories and AWS accounts can lead to a big risk. This increases the chances of accidental misconfigurations and malicious actions. RPP was built as a bridge that secures this multi-repo reality without waiting for the underlying consolidation to finish.

RPP activates on GitHub pull request events. It runs as a central set of composite GitHub Actions instead of per-repo scripts. This approach splits a single PR into separate plan/apply runs for each affected workspace. Execution uses a chained-role model. First, a workflow takes on a central RPPActionsRole. This role is limited to certain pre-authorised GitHub workflows through OIDC token validation. That role reads a source-of-truth configuration file. This file maps each workspace to its allowed repository, working directory, owning team, and execution IAM role. Before down-scoping, RPP checks that the Terraform code path matches the specific S3 backend and KMS key for that workspace. This helps catch mistakes where a developer might accidentally link one workspace's directory to another's state file. The pipeline takes on the workspace-specific team role only after the check passes. Then, it runs \`terraform fmt\`, \`plan\`, and, after a clear human comment on the PR, it applies the changes. All code changes additionally require sign-off from an approved reviewer on the owning repository.

![](https://www.infoq.com/news/2026/08/pinterest-secures-aws-infra/news/2026/08/pinterest-secures-aws-infra/en/resources/11_2VWNdlPaAPPmPfaHHl6Ytg-1786109894068.jpeg) Execution model

Pinterest says the model provides a single control point for fixes across the infrastructure. This means a systemic issue, like a weak CI runner shell, can be fixed in one place instead of in hundreds of separate repositories. The centralized composite actions help the team run consistent PR-triggered checks. This includes static analysis with custom Semgrep rules and AI-assisted scanning. They can also do optional LocalStack-based dry runs to test against mocked AWS behaviour before changes affect real accounts.

RPP is a private system, not open-source. The architecture uses standard OIDC-based role chaining and workspace-to-role mapping. However, the strong focus on backend-block validation is important. It acts as a guardrail against cross-workspace state corruption. This detail is key for teams using similar multi-repo Terraform setups.

The workspace-path-role mapping pattern is a helpful guide. It includes source-of-truth config, backend validation, and down-scoped role assumption. Teams can use it to enforce least privilege in PR-driven Terraform pipelines without needing a full mono-repo migration. Dual control has two layers: a human code review approval and a clear PR comment needed to trigger the apply. This keeps planning and applying as separate, auditable actions.

Securing centralised IaC pipelines is a well-known challenge. Mercari had a [similar issue](https://engineering.mercari.com/en/blog/entry/20220121-securing-terraform-monorepo-ci/) with its Terraform monorepo. It started with one broad [GCP](https://docs.cloud.google.com/docs) service account that had owner rights for all projects. To fix this, Mercari used GCP's tools. They paired keyless Cloud Build credentials with a read-only "plan" account and a specific "apply" account for each service. They used impersonation to limit each job's impact to one project.

Slack chose a [different approach](https://slack.engineering/how-we-use-terraform-at-slack/). They decentralized state ownership to individual teams. However, they still enforce a plan-then-apply gate. Changes must go through sandbox and development before reaching production. RPP stands out because it includes a clear backend and KMS-key validation step. This step checks a workspace's Terraform code path against its state file before any role is assumed. It acts as an extra defence, adding to a role-mapping model similar to what Mercari and Slack use. This helps keep centralized IaC pipelines safe from becoming a single point of failure.

## About the Author

#### **Claudio Masolo**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/pinterest-secures-aws-infra/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。