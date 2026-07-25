---
title: "Java 近期新闻：值对象、WildFly 41、TornadoVM、LangChain4j、Oracle AI Agent Studio"
date: 2026-07-26 06:44:28
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "OpenJDK 在 Valhalla 项目(https://openjdk.org/projects/valhalla/)的推动下，JEP 401（值对象预览版(https://openjdk.org"
source_url: "https://www.infoq.cn/article/SCpx11gzcAUXOFdkSEKC?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-07-24　|　采集：2026-07-26 06:44:28

## 正文

#### OpenJDK

在 [Valhalla 项目](https://openjdk.org/projects/valhalla/)的推动下，JEP 401（[值对象预览版](https://openjdk.org/jeps/401)）基于最初于 2020 年 8 月创建的 JEP Draft 8251554 进行了更新，并已[重新提交](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/IUNJJ3WP3X3XHP3QZTXXSSCPKFDNTK3W/)至候选状态。该 JEP 此前名为对象类与值（预览版），旨在通过值对象增强语言功能。它将值对象定义为：仅包含 final 字段；没有标识符；仅通过各自字段的值来区分。

#### JDK 27

JDK 27 的[早期访问构建](https://jdk.java.net/27/) [Build 31](https://github.com/openjdk/jdk/releases/tag/jdk-27%2B31) 发布，它是 Build 30 的[升级](https://github.com/openjdk/jdk/compare/jdk-27%2B30...jdk-27%2B31)，修复了各种[问题](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2027%20and%20%22resolved%20in%20build%22%20%3D%20b31%20order%20by%20component%2C%20subcomponent)。要了解关于这个构建的更多细节，请参阅[发布说明](https://jdk.java.net/27/release-notes)。

#### JDK 28

JDK 28 的[早期访问构建](https://jdk.java.net/28/) [Build 7](https://github.com/openjdk/jdk/releases/tag/jdk-28%2B7) 发布，它是 Build 6 的[升级](https://github.com/openjdk/jdk/compare/jdk-28%2B6...jdk-28%2B7)，修复了各种[问题](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2028%20and%20%22resolved%20in%20build%22%20%3D%20b07%20order%20by%20component%2C%20subcomponent)。要了解关于这个构建的更多细节，请参阅[发布说明](https://jdk.java.net/28/release-notes)。

#### WildFly

[WildFly](https://www.wildfly.org/) 41 [发布](https://www.wildfly.org/news/2026/07/16/WildFly-41-is-released/)，带来 Bug 修复、依赖项升级以及以下新功能：在 [wildfly-cloud-galleon-pack](https://github.com/wildfly/wildfly-cloud-galleon-pack/blob/main/README.md) 和 [wildfly-maven-plugin](https://docs.wildfly.org/wildfly-maven-plugin/) 功能包中添加可启动 JAR 文件；WildFly [容器](https://quay.io/repository/wildfly/wildfly)、[S2I 构建器](https://quay.io/repository/wildfly/wildfly-s2i)和[运行时](https://quay.io/repository/wildfly/wildfly-runtime)镜像的 JDK 25 版本已取代 JDK 17 版本；此外，还有多项功能已经从预览版提升至社区版和默认[稳定版](https://docs.wildfly.org/41/Admin_Guide.html#Feature_stability_levels)。要了解有关该版本的更多详细信息，请参阅[发布说明](https://github.com/wildfly/wildfly/releases/tag/41.0.0.Final)。

#### Open Liberty

[Open Liberty](https://openliberty.io/blog/2026/07/14/26.0.0.7.html) 26.0.0.7 的 [GA 版本](https://openliberty.io/blog/2026/07/14/26.0.0.7.html)带来 Bug 修复和以下新功能：默认跟踪已注销的单点登录（SSO）Cookie，使其在注销后无法被重放；在使用基于文件的健康检查机制时，可禁用 [MicroProfile Health 4.0](https://microprofile.io/specifications/health/4-0/) 中的 /health 端点。该版本还修复了 8 个 CVE，它们曾导致拒绝服务、HTTP 请求走私和服务器端请求伪造。

#### TornadoVM

TornadoVM 5.1.0 发布，修复了若干 Bug，并引入了以下新功能：在 CUDA 后端中支持 E4M3 和 E5M2 八位浮点存储； 为 PTX 和 CUDA 后端新增了可选的主机-设备分阶段传输路径；通过 [TornadoExecutionPlan](https://github.com/beehive-lab/TornadoVM/blob/master/tornado-api/src/main/java/uk/ac/manchester/tornado/api/TornadoExecutionPlan.java) 类中定义的 withIntraPlanConcurrency() 方法实现了性能提升，降低了所有单计划内并发调度计划中每项操作和每次连接的簿记开销（Bookkeeping Cost）。要了解有关该版本的更多详细信息，请参阅[发布说明](https://github.com/beehive-lab/TornadoVM/releases/tag/v5.1.0-jdk25)。

#### Apache TomEE

[Apache TomEE](https://tomee.apache.org/) 10.2.0 [发布](https://www.mail-archive.com/users@tomee.apache.org/msg18329.html)，带来了依赖项升级以及若干值得注意的 Bug 修复，包括：内部类 HttpConnection （在[HttpConnectionFactory](https://github.com/apache/tomee/blob/main/server/openejb-client/src/main/java/org/apache/openejb/client/HttpConnectionFactory.java) 类中定义）中的 sslTruststorePassword 参数在日志记录过程中未被屏蔽/过滤；在 [JNDIContext](https://github.com/apache/tomee/blob/main/server/openejb-client/src/main/java/org/apache/openejb/client/JNDIContext.java) 类中定义的 authenticate() 方法所抛出的 AuthenticationException 丢失了由 RemoteException 抛出的原因。要了解有关该版本的更多详细信息，请参阅[发布说明](https://tomee.apache.org/10.2.0/release-notes.html)。

#### Java Operator SDK

[Java Operator SDK](https://javaoperatorsdk.io/)  5.5.0 [发布](https://javaoperatorsdk.io/blog/2026/07/17/version-5.5-released/)，带来了以下值得注意的变更：[ResourceOperations](https://github.com/operator-framework/java-operator-sdk/blob/main/operator-framework-core/src/main/java/io/javaoperatorsdk/operator/api/reconciler/ResourceOperations.java) 类中提供了一套完整且一致的 update/patch/create 方法，支持 RFC 6902（[JavaScript 对象表示法 (JSON) Patch](https://datatracker.ietf.org/doc/html/rfc6902)）以及 RFC 7386（[JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386)）规范；此外，该版本还引入了新的 [Matcher](https://github.com/operator-framework/java-operator-sdk/blob/main/operator-framework-core/src/main/java/io/javaoperatorsdk/operator/api/reconciler/matcher/Matcher.java) 接口，允许开发人员将自定义匹配策略集成到 Options 类中定义的重载方法 matchAndFilter() 中。要了解有关该版本的更多详细信息，请参阅[发布说明](https://github.com/operator-framework/java-operator-sdk/releases/tag/v5.5.0)。

#### LangChain4j

[LangChain4j](https://github.com/langchain4j) 1.18.0 的正式版本（连同第 28 个测试版）带来了 Bug 修复以及以下新功能：一种新的“[信念-欲望-意图](https://jumpcloud.com/it-index/what-is-bdi-belief-desire-intention-architecture)”（BDI）代理模式，“为软件和机器人系统提供了一种结构化方法来形式化心理概念”；一个新的 [TextToSpeechModel](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-core/src/main/java/dev/langchain4j/model/audio/TextToSpeechModel.java) 接口，用于支持 OpenAI [Text-to-Speech](https://developers.openai.com/api/docs/guides/text-to-speech) API； 用于支持 [Mistral Batch](https://mistral.ai/news/batch-api/) API 的新类 [MistralAiBatchChatModel](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-mistral-ai/src/main/java/dev/langchain4j/model/mistralai/MistralAiBatchChatModel.java)。要了解有关该版本的更多详细信息，请参阅[发布说明](https://github.com/langchain4j/langchain4j/releases/tag/1.18.0)。

#### Micronaut

Micronaut 基金会[发布](https://micronaut.io/2026/07/16/micronaut-framework-5-0-5-released/)了基于 [Micronaut Core 5.0.6](https://github.com/micronaut-projects/micronaut-core/releases/v5.0.6) 的 [Micronaut Framework](https://micronaut.io/) 5.0.5 版本，对以下模块进行了补丁更新： [Micronaut AWS](https://micronaut-projects.github.io/micronaut-aws/latest/guide/)、 [Micronaut gRPC](https://micronaut-projects.github.io/micronaut-grpc/latest/guide/)、 [Micronaut Oracle Cloud](https://micronaut-projects.github.io/micronaut-oracle-cloud/latest/guide/) 和 [Micronaut Logging](https://micronaut-projects.github.io/micronaut-logging/latest/guide/)。要了解有关该版本的更多详细信息，请参阅[发布说明](https://github.com/micronaut-projects/micronaut-platform/releases/tag/v5.0.5)。

#### Quarkus

[Quarkus Shim](https://quarkus.io/extensions/io.quarkiverse.shim/quarkus-shim/) 是 Quarkus 团队新[推出](https://quarkus.io/blog/quarkus-shim/)的一个扩展，允许开发者在 Quarkus 构建过程中添加、封装或替换 Java 类中的行为。根据博文所述：

> 这项更改发生在增强阶段。无需 Java 代理，也不需要运行时插桩。经过转换的类可在 JVM 模式、开发模式以及本机可执行文件中正常运行。

这是一个基于 Quarkus 3.37.3 构建的实验性扩展。

#### Oracle

甲骨文针对  [Oracle AI Agent Studio for Fusion Applications](https://www.oracle.com/applications/fusion-ai/#studio) [推出](https://www.oracle.com/news/announcement/oracle-introduces-ai-native-builder-experience-2026-07-14/)了全新的原生 AI 构建器体验。这使客户能够在 [Oracle Fusion Cloud Applications](https://www.oracle.com/applications/) 环境中直接创建并原生运行 Fusion Agentic 应用程序。这一全新的构建器体验将“无代码、低代码和专业代码开发整合到了一个 Fusion 原生框架中”。

需要注意的是，AI Agent Studio 和 Fusion Cloud Applications 均为订阅服务。

原文链接：[https://www.infoq.com/news/2026/07/java-news-roundup-jul13-2026/](https://www.infoq.com/news/2026/07/java-news-roundup-jul13-2026/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/SCpx11gzcAUXOFdkSEKC?utm_source=rss&utm_medium=article）。