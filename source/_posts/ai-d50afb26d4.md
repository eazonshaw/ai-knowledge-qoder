---
title: "Java 近期新闻：JobRunr 9、OpenXava 8、Quarkus、LangChain4j、JNoSQL、Lathe"
date: 2026-10-19 07:48:42
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "OpenJDK JEP 544（提前代码编译(https://openjdk.org/jeps/544)）已经从 Proposed to Target 状态提升(https://mail.openjd"
source_url: "https://www.infoq.cn/article/AF1qxLVCRls3R6MdWwBh?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-10-17　|　采集：2026-10-19 07:48:42

## 正文

#### OpenJDK

JEP 544（[提前代码编译](https://openjdk.org/jeps/544)）已经从 Proposed to Target 状态[提升](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/KAQGAGMSCWSWWTE6MJ4M26NU4NJ37FNJ/)至 Targeted 状态，并计划在 JDK 28 中交付。该 JEP 旨在缩短应用程序的启动和预热时间，使应用程序在 HotSpot JVM 启动时就可以立即使用经过优化的原生代码。这样，应用程序就能够更快地达到峰值性能，并保持这一性能水平。

#### JDK 28

JDK 28 的[早期访问构建](https://jdk.java.net/28/) [Build 18](https://github.com/openjdk/jdk/releases/tag/jdk-28%2B18) 发布，它是 Build 17 的[升级](https://github.com/openjdk/jdk/compare/jdk-28%2B17...jdk-28%2B18)，修复了各种[问题](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2028%20and%20%22resolved%20in%20build%22%20%3D%20b18%20order%20by%20component%2C%20subcomponent)。要了解关于这个构建的更多细节，请参阅[发布说明](https://jdk.java.net/28/release-notes)。

对于 [JDK 28](https://openjdk.org/projects/jdk/28/)，欢迎开发者通过 [Java Bug 数据库](https://bugreport.java.com/bugreport/)报告 Bug。

#### Jakarta EE

在每周博客 [Hashtag Jakarta EE](https://www.agilejava.eu/) 中，Eclipse 基金会 Jakarta EE 开发大使 [Ivar Grimstad](https://se.linkedin.com/in/ivargrimstad) 介绍了 [Jakarta EE 12 的最新进展](https://www.agilejava.eu/2026/10/04/hashtag-jakarta-ee-353/)，他写道：

> 关于 Jakarta EE 12，目前正在就将 [Jakarta Authorization](https://jakarta.ee/specifications/authorization/) 纳入 [Jakarta EE Web Profile](https://jakarta.ee/specifications/webprofile/) 进行投票。将它与 Web Profile 中的其他安全规范归为一类是完全合理的。应指导委员会的要求，他们本周在平台电话会议上讨论并敲定了 Jakarta EE 12 的时间表。Jakarta EE 12 的时间表如下：
> 
> \- 12 月 1 日 — Jakarta EE 12 Core Profile
> 
> \- 3 月 31 日 — Jakarta EE 12 Web Profile
> 
> \- 5 月 15 日 — Jakarta EE 12 Platform

就我个人而言，我非常希望 [Jakarta EE 12 Web Profile](https://jakarta.ee/specifications/webprofile/12/) 能纳入 [Jakarta NoSQL](https://jakarta.ee/specifications/nosql/1.1/) 这一规范。在将人工智能集成到企业应用程序时，简化和标准化对 NoSQL 数据存储的访问是一项非常有用的功能。特别是对 RAG 向量数据库的支持，将非常实用。如果你赞同我的观点，或者对将 Jakarta NoSQL 纳入 Jakarta EE 12 有任何看法，请务必通过电子邮件列表或平台电话会议告诉我们。社区的声音至关重要！

最近，[Eclipse JNoSQL](https://www.jnosql.org/)（Jakarta NoSQL 的兼容实现）已经从孵化项目晋升为 Eclipse Enterprise for Java（EE4J）项目。该项目自 2017 年起便已经成为 Eclipse 项目，并自 Jakarta EE 11 起作为 [Jakarta Data](https://jakarta.ee/specifications/data/) 支持的一部分被纳入了 [Eclipse GlassFish](https://glassfish.org/)。

#### JobRunr

[JobRunr](https://www.jobrunr.io/) 9.0.0 [发布](https://www.jobrunr.io/en/blog/v9-release/)，带来了以下值得注意的变化：仪表盘的历史记录部分新增了一个 Chart 选项卡，以甘特图的形式展示任务的生命周期，其中，每种状态和每个持久化步骤各占一行；支持 Micronaut 5 和 Quarkus 3.40；当序列化任务过大时，系统会触发警告， 抛出 StepExecutionException 异常并解包。要了解有关该版本的更多详情，请参阅[发布说明](https://github.com/jobrunr/jobrunr/releases/tag/v9.0.0)以及观看 [9.0 版本发布时的网络研讨会](https://www.youtube.com/watch?v=bVNeB-ePdn0)。InfoQ 随后将发布一篇更详细的新闻报道。

#### OpenXava

[OpenXava](https://openxava.org/) 8.0.0 版本[发布](https://openxava.org/blog/openxava-8.0-released)，带来了 Bug 修复、文档改进、依赖项升级以及以下新功能：基于 Spring Boot 构建的 OpenXava；对 Jakarta EE 11 规范的部分支持；更现代化的界面风格。要了解有关该版本的更多详情，请参阅[发布说明](https://github.com/openxava/openxava/releases/tag/8.0)。

#### Quarkus

[Quarkus](https://quarkus.io/) 3.34.0 [发布](https://quarkus.io/blog/quarkus-3-40-released/)，带来了一些 Bug 修复和值得注意的变更，包括：改进了 [AeshLauncher](https://github.com/quarkusio/quarkus/blob/main/test-framework/aesh/src/main/java/io/quarkus/test/aesh/AeshLauncher.java) 接口，使其信号协议和超时诊断更加稳健；消除了 [ResteasyReactiveJacksonProcessor](https://github.com/quarkusio/quarkus/blob/main/extensions/resteasy-reactive/rest-jackson/deployment/src/main/java/io/quarkus/resteasy/reactive/jackson/deployment/processor/ResteasyReactiveJacksonProcessor.java) 类在端点返回 void 时产生的不必要的警告。要了解有关该版本的更多详情，请参阅 [3.40.1](https://github.com/quarkusio/quarkus/releases/tag/3.40.1) 和 [3.40.0](https://github.com/quarkusio/quarkus/releases/tag/3.40.0) 版本的发布说明。

#### Micronaut

Micronaut 基金会[发布](https://micronaut.io/2026/09/27/micronaut-framework-5-2-0/)了基于 Micronaut Core [5.2.11](https://github.com/micronaut-projects/micronaut-core/releases/tag/v5.2.11) 和 [5.2.8](https://github.com/micronaut-projects/micronaut-core/releases/tag/v5.2.8) 的 [Micronaut Framework](https://micronaut.io/) 5.2.1 和 5.2.0 版本（发布公告分别见[这里](https://micronaut.io/2026/10/01/micronaut-framework-5-2-1/)和[这里](https://micronaut.io/2026/09/27/micronaut-framework-5-2-0/)）。除修复了 Bug 并更新了 Micronaut 生态系统中的许多模块外，还包括以下新功能：对 [Micronaut for Python](https://docs.micronaut.io/5.2.x/core/#core-python) 的实验性支持，用于在编译时处理 Python 源代码；新增一个 [Micronaut Jakarta EL](https://github.com/micronaut-projects/micronaut-jakarta-el/blob/1.1.x/README.md) 模块，实现了 [Jakarta 表达式语言](https://jakarta.ee/specifications/expression-language/)规范。要了解有关该版本的更多详情，请参阅 [5.2.1](https://github.com/micronaut-projects/micronaut-platform/releases/tag/v5.2.1) 和 [5.2.0](https://github.com/micronaut-projects/micronaut-platform/releases/tag/v5.2.0) 版本的发布说明。

#### LangChain4j

[LangChain4j](https://github.com/langchain4j) 1.21.0 的正式版本（连同第 31 个 Beta 测试版）发布，修复了若干 Bug，升级了依赖项，并引入了新的实验性决策模型。其中包括一个由 [DecisionModel](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-core/src/main/java/dev/langchain4j/model/decision/DecisionModel.java) 接口以及 [DecisionServices](https://github.com/langchain4j/langchain4j/blob/main/langchain4j/src/main/java/dev/langchain4j/service/decision/DecisionServices.java)、[RoutingChatModel](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-core/src/main/java/dev/langchain4j/model/chat/router/RoutingChatModel.java) 和 [DecisionRouterPlanner](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-agentic-patterns/src/main/java/dev/langchain4j/agentic/patterns/decisionrouter/DecisionRouterPlanner.java) 类组成的新 API。要了解有关该版本的更多详情，请参阅[发布说明](https://github.com/langchain4j/langchain4j/releases/tag/1.21.0)以及[决策模型](https://docs.langchain4j.dev/tutorials/decision-models/)和[决策服务](https://docs.langchain4j.dev/tutorials/decision-services/)教程。

#### Eclipse JNoSQL

Eclipse JNoSQL 1.19.0 版本发布，带来了以下新功能：支持 [ScyllaDB](https://www.scylladb.com/)；更新了 Neo4J 6.3.0、InfluxDB 1.11.1、DynamoDB 2.55.7 和 MongoDB 5.13.0 的数据库驱动程序；改进了生命周期日志记录功能，其中包括 Oracle NoSQL 和 Jakarta Persistence 扩展。要了解有关该版本的更多详情，请参阅[发布说明](https://github.com/eclipse-jnosql/jnosql/releases/tag/1.1.19)。

#### 谷歌 ADK

[ADK for Java](https://adk.dev/get-started/java/) 1.11.0 版本发布，带来了 Bug 修复、文档改进以及一些新功能，包括：在 [EventActions](https://github.com/google/adk-java/blob/main/core/src/main/java/com/google/adk/events/EventActions.java) 类中新增了 rewindBeforeInvocationId() 方法，实现与 ADK for Kotlin 的回溯兼容；在 [Session](https://github.com/google/adk-java/blob/main/core/src/main/java/com/google/adk/sessions/Session.java) 类中新增了线程安全的方法 immutableEvents()、addEvent() 和 addEvents()，以取代现在已经弃用的 events() 方法。要了解有关该版本的更多详情，请参阅[发布说明](https://github.com/google/adk-java/releases/tag/v1.11.0)。

同样，[ADK for Kotlin](https://adk.dev/get-started/kotlin/) 1.3.0 版本也带来了 Bug 修复和一些新功能，包括：新增了 [@ExperimentalLiveApi](https://github.com/google/adk-kotlin/blob/main/core/src/commonMain/kotlin/com/google/adk/kt/annotations/ExperimentalLiveApi.kt) 注解，用于标记实时双向流 API；将 [Event](https://github.com/google/adk-kotlin/blob/main/core/src/commonMain/kotlin/com/google/adk/kt/events/Event.kt) 类中 author 属性的初始化值从 null 改为空字符串。要了解有关该版本的更多详情，请参阅[发布说明](https://github.com/google/adk-kotlin/releases/tag/v1.3.0)。

#### Lathe

Telenor Linx 高级软件工程师 [Alexey Gavrilov](https://www.linkedin.com/in/alexey-gavrilov-62222b2/) [推出](https://foojay.io/today/lathe-a-java-language-server-from-your-maven-build/)了一款新的 Java 语言服务器 [Lathe](https://github.com/ag-libs/lathe/blob/main/README.md)。它是[语言服务器协议](https://langserver.org/)（LSP）的一种实现。Lathe 简化了传统项目导入以及类路径或模块路径配置。它可以在任何兼容 LSP 的编辑器中运行，其模型源自 Maven 构建，因此所有内容都能保持同步。Lathe 随附一个 [Neovim](https://neovim.io/) 客户端和一个用于 AI 编码代理的 MCP 服务器。[最新版本 0.1.14](https://github.com/ag-libs/lathe/releases/tag/v0.1.14) 已于上周发布。

原文链接：[https://www.infoq.com/news/2026/10/java-news-roundup-sep28-2026/](https://www.infoq.com/news/2026/10/java-news-roundup-sep28-2026/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/AF1qxLVCRls3R6MdWwBh?utm_source=rss&utm_medium=article）。