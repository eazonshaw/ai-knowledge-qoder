---
title: "Java 近期资讯：TornadoVM 8.0、JNoSQL、Endive、JReleaser、JBang、LangChain4j 与 Quarkus Almanac"
date: 2026-11-19 10:52:49
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "JDK 28 JDK 28 早期访问构建版(https://jdk.java.net/28/)的第 22 个构建版(https://github.com/openjdk/jdk/releases/ta"
source_url: "https://www.infoq.cn/article/oSiN27BaersaKQcQGdaa?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-11-18　|　采集：2026-11-19 10:52:49

## 正文

## JDK 28

JDK 28 [早期访问构建版](https://jdk.java.net/28/)的[第 22 个构建版](https://github.com/openjdk/jdk/releases/tag/jdk-28%2B21)于上周发布。与第 21 个构建版相比，它包含多项[更新](https://github.com/openjdk/jdk/compare/jdk-28%2B21...jdk-28%2B22)，其中包括对多个[问题](https://bugs.openjdk.org/browse/JDK-8394487?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2028%20and%20%22resolved%20in%20build%22%20%3D%20b22%20order%20by%20component%2C%20subcomponent)的修复。有关此次发布的更多详情，可参阅[发布说明](https://jdk.java.net/28/release-notes)。

对于 [JDK 28](https://openjdk.org/projects/jdk/28/)，开发者可以通过 [Java Bug Database](https://bugreport.java.com/bugreport/) 报告错误。

## TornadoVM

[TornadoVM](https://www.tornadovm.org/) 8.0.0 [发布](https://www.tornadovm.org/blogs/tornadovm-8-0-0-tc-tornadovm-compiler)了名为 TornadoVM Compiler（TC）的全新纯 Java 编译器，可将 Java 内核编译为 CUDA C++、OpenCL C 或 Metal Shading Language。它取代了过去十年间一直是 TornadoVM 重要组成部分的 [Graal Compiler](https://www.graalvm.org/jdk25/reference-manual/java/compiler/) 和 [Java 级 JVM 编译器接口](https://openjdk.org/jeps/243)（JVMCI）。使用 TC 时，开发者无须修改代码。[TaskGraph](https://github.com/beehive-lab/TornadoVM/blob/master/tornado-api/src/main/java/uk/ac/manchester/tornado/api/TaskGraph.java)、[TornadoExecutionPlan](https://github.com/beehive-lab/TornadoVM/blob/master/tornado-api/src/main/java/uk/ac/manchester/tornado/api/TornadoExecutionPlan.java) 和 [KernelContext](https://github.com/beehive-lab/TornadoVM/blob/master/tornado-api/src/main/java/uk/ac/manchester/tornado/api/KernelContext.java) 等类，以及 [@Parallel](https://github.com/beehive-lab/TornadoVM/blob/master/tornado-api/src/main/java/uk/ac/manchester/tornado/api/annotations/Parallel.java) 和 [@Reduce](https://github.com/beehive-lab/TornadoVM/blob/master/tornado-api/src/main/java/uk/ac/manchester/tornado/api/annotations/Reduce.java) 等注解，都可以与 TC 配合使用。

TornadoVM 现在还利用 GraalVM Native Image，以及 [Project Leyden](https://openjdk.org/projects/leyden/) 旗下的 JEP 516——[支持任意 GC 的提前对象缓存](https://openjdk.org/jeps/516)——来改善启动时间。有关此次发布的更多详情，可参阅[发布说明](https://github.com/beehive-lab/TornadoVM/releases/tag/v8.0.0)。

## Eclipse JNoSQL

作为 Jakarta NoSQL 和 Jakarta Data 规范的兼容实现，[Eclipse JNoSQL](https://www.jnosql.org/) 1.2.0 发布了多项值得关注的变化，包括：新增支持向量数据库的 [VectorTemplate](https://github.com/eclipse-jnosql/jnosql/blob/main/jnosql-mapping/jnosql-mapping-vector/src/main/java/org/eclipse/jnosql/mapping/vector/VectorTemplate.java) 接口；集成 [Milvus](https://milvus.io/)、[Qdrant](https://qdrant.tech/) 和 [Weaviate](https://weaviate.io/) 向量数据库以支持向量搜索；以及新增用于处理时间序列数据的流式时间查询操作。有关此次发布的更多详情，可参阅[发布说明](https://github.com/eclipse-jnosql/jnosql/releases/tag/1.2.0)。

## Endive

[Endive](https://endive.run/) 1.2.0 的[发布](https://www.linkedin.com/posts/andrea-peruffo-32269178_webassembly-java-jvm-share-7521965708919033856-PvPf/)带来了错误修复、依赖升级和新功能，包括：解释器在 JDK 11 及更高版本上默认支持 SIMD 指令，无须额外添加或配置；改进其实验性提前编译（AOT）编译器 [Redline](https://endive.run/docs/experimental/redline)，使原生内存对 GC 更友好；以及持续改进 [Endive Component Model](https://github.com/roastedroot/endive-cm/blob/main/Readme.md)，这一 WebAssembly [组件模型设计与规范](https://github.com/WebAssembly/component-model/blob/main/README.md)的实现用于支持 Endive 运行时。有关此次发布的更多详情，可参阅[发布说明](https://github.com/bytecodealliance/endive/releases/tag/1.2.0)。

## JBang

[JBang](https://www.jbang.dev/) 0.143.0 发布了错误修复、文档改进和两项新功能：由于 SDKMan 不支持 Windows，改用 [mise-en-place](https://mise.jdx.dev/)；以及新增用于执行特定版本别名的统一语法。有关此次发布的更多详情，可参阅[发布说明](https://github.com/jbangdev/jbang/releases/tag/v0.143.0)。

## JReleaser

[JReleaser](https://jreleaser.org/) 1.27.0 的[发布](https://andresalmiray.com/jreleaser-1-27-0-has-been-released/)带来了错误修复、文档改进、依赖升级和新功能，包括：支持通过 Java 模块调用和／或加载 [JReleaser Tool Provider](https://jreleaser.org/guide/latest/tools/jreleaser-tool-provider.html)；改进提交消息中链接了 GitHub Issue 时的变更日志生成；以及移除使用 [XPath](https://www.w3.org/TR/xpath-31/) 解析 POM 文件的方式，因为将 JReleaser 打包为原生镜像时曾因此出现问题。有关此次发布的更多详情，可参阅[发布说明](https://github.com/jreleaser/jreleaser/releases/tag/v1.27.0)。

## LangChain4j

[LangChain4j](https://github.com/langchain4j) 1.23.0 的正式版（以及第 33 个测试版）发布，带来了错误修复、文档改进、依赖升级和新功能，包括：新增 [OllamaDecisionModel](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-ollama/src/main/java/dev/langchain4j/model/ollama/OllamaDecisionModel.java) 类，以支持在 Ollama 中运行的决策模型；以及新增 [ConfidenceCascadePlanner](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-agentic-patterns/src/main/java/dev/langchain4j/agentic/patterns/cascade/ConfidenceCascadePlanner.java) 类，作为一种基于置信度级联决策模型的智能体模式。有关此次发布的更多详情，可参阅[发布说明](https://github.com/langchain4j/langchain4j/releases/tag/1.23.0)。

## Hibernate

[Hibernate ORM](https://hibernate.org/orm/) 8.0.0 的[第四个测试版](https://in.relation.to/2026/10/28/orm-80-beta4/)带来了错误修复和多项值得关注的变化，包括：可以直接在带有 Jakarta Persistence [@ManyToOne](https://jakarta.ee/specifications/persistence/3.2/apidocs/jakarta.persistence/jakarta/persistence/ManyToOne.html) 和 [@OneToOne](https://jakarta.ee/specifications/persistence/3.2/apidocs/jakarta.persistence/jakarta/persistence/OneToOne.html) 注解的关联上声明 [@Filter](https://docs.hibernate.org/orm/8.0/javadocs/org/hibernate/annotations/Filter.html) 和 [@SQLRestriction](https://docs.hibernate.org/orm/8.0/javadocs/org/hibernate/annotations/SQLRestriction.html) 注解，包括通过连接表映射的关联；以及新增 [@GeneratorOptimizer](https://github.com/hibernate/hibernate-orm/blob/main/hibernate-core/src/main/java/org/hibernate/annotations/GeneratorOptimizer.java) 注解，可“直接在标识符字段或 getter 上，为序列或表标识符生成选择标准优化器”。

[Hibernate Reactive](https://hibernate.org/reactive/) 5.1.0 和 5.0.0 分别发布了[第一个和第三个测试版](https://in.relation.to/2026/10/30/hibernate-reactive-5_1_0_Beta1/)，带来了错误修复和多项值得关注的变化，包括：新增用于管理 Hibernate Reactive、Hibernate ORM 和 Vert.x SQL 客户端版本的平台物料清单（BOM）；以及在启动期间检查版本，确保类路径上的 Hibernate ORM 和 Vert.x SQL 客户端不低于所支持的最低版本。这两个版本都兼容 Hibernate ORM 8.0.0.Beta4。

## JobRunr

[JobRunr](https://www.jobrunr.io/) 9.0.3 发布了错误修复、文档改进、依赖升级，以及一项新功能：更新 [JobHandler](https://github.com/jobrunr/jobrunr/blob/master/core/src/main/java/org/jobrunr/server/JobHandler.java) 类，以改进 [JobZooKeeper](https://github.com/jobrunr/jobrunr/blob/master/core/src/main/java/org/jobrunr/server/JobZooKeeper.java) 类的日志消息。有关此次发布的更多详情，可参阅[发布说明](https://github.com/jobrunr/jobrunr/releases/tag/v9.0.3)。

## Gradle

[Gradle](https://gradle.org/) 9.9.0 的首个候选发布版带来了多项值得关注的变化，包括：[Kotlin DSL](https://docs.gradle.org/9.9.0-rc-1/userguide/kotlin_dsl.html) 脚本可以借助 [Kotlin Build Tools API](https://kotlinlang.org/docs/build-tools-api.html) 进行增量编译，以提升构建性能；新增可应用于未声明为方法的 JUnit Platform 测试的[测试过滤器](https://docs.gradle.org/9.9.0-rc-1/userguide/java_testing.html#test_filtering)；以及改进 [Problems API](https://docs.gradle.org/9.9.0-rc-1/userguide/reporting_problems.html#header)，为 [Problems](https://docs.gradle.org/current/javadoc/org/gradle/api/problems/Problems.html) 接口提供预定义的问题分组层级。有关此次发布的更多详情，可参阅[发布说明](https://docs.gradle.org/9.9.0-rc-1/release-notes.html)。

## Quarkus Almanac

Quarkus 团队[推出](https://quarkus.io/blog/quarkus-almanac/)了 [Quarkus Almanac](https://quarkus.io/almanac/)，这是一款供开发者比较两个版本之间变化的工具。可比较的变化包括配置属性、受管理的依赖项、扩展，以及 Quarkus JAR 文件中类的 API。开发者最早可以追溯到 Quarkus 0.0.1 于 2018 年 11 月发布时的版本。

原文链接：

[https://www.infoq.com/news/2026/11/java-news-roundup-oct26-2026/](https://www.infoq.com/news/2026/11/java-news-roundup-oct26-2026/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/oSiN27BaersaKQcQGdaa?utm_source=rss&utm_medium=article）。