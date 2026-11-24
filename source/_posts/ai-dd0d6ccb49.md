---
title: "Java News Roundup: Java4Shell, Oracle CSPUs, OpenJDK, Azul Payara, BellSoft, Helidon, LangChain4j"
date: 2026-11-24 13:41:09
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "This week's Java roundup for November 16th, 2026, features news highlighting: the Java4Shell RCE vul"
source_url: "https://www.infoq.com/news/2026/11/java-news-roundup-nov16-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-23T15:30:00.000Z　|　采集：2026-11-24 13:41:09

## 正文

This week's Java roundup for November 16th, 2026, features news highlighting: the Java4Shell RCE vulnerability; Oracle CSPUs; Lazy Constants targeted for JDK 28; the November 2026 edition of Azul Payara; point releases of Java Operator SDK, LangChain4j and Micrometer; maintenance releases of Liberica JDK and Helidon; and second release candidates of Hibernate Reactive.

#### OpenJDK

Oracle has released versions 27.0.1.0.3, 25.0.5.0.3, 21.0.13.0.3, 17.0.21.0.3, 11.0.33.0.3 and 8u511b3 of the JDK as part of their quarterly [Critical Security Patch Update Advisory](https://www.oracle.com/security-alerts/cspunov2026.html) for November 2026. Further details on this release may be found in the release notes for [version 27.0.1.0.3](https://www.oracle.com/java/technologies/javase/27-0-1-0-3-relnotes.html), [version 25.0.5.0.3](https://www.oracle.com/java/technologies/javase/25-0-5-0-3-relnotes.html), [version 21.0.13.0.3](https://www.oracle.com/java/technologies/javase/21-0-13-0-3-relnotes.html), [version 17.0.21.0.3](https://www.oracle.com/java/technologies/javase/17-0-21-0-3-relnotes.html), [version 11.0.33.0.3](https://www.oracle.com/java/technologies/javase/11-0-33-0-3-relnotes.html) and [version 8u511 b33](https://www.oracle.com/java/technologies/javase/8u511-b33-relnotes.html).

JEP 547, [Lazy Constants (Fourth Preview)](https://openjdk.org/jeps/547), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/PMNSAVN3SBA4FM65PMCQY4JVXBVFJNWO/) from **Proposed to Target** to **Targeted** for JDK 28. This JEP proposes a fourth preview, with no changes, after three rounds of preview delivered in the upcoming release of JDK 27 and JDK 26 through JDK 25. Formerly known as *Stable Values* and *Computed Constants*, this feature introduces the concept of *computed constants*, defined as immutable value holders that are initialized at most once. This offers the performance and safety benefits of **`final`** fields, while offering greater flexibility as to the timing of initialization. The name change from *Stable Values* to *Lazy Constants* with the release of JDK 26, better captures the intent of a high-level use case.

JEP 548, [Vector API (Thirteenth Incubator)](https://openjdk.org/jeps/548), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/YOPAIPHIGQN4CVE7MXYFIIXHENKMVYZW/) from its JEP Draft 8397768 to Candidate status. This JEP proposes a thirteenth incubation with one notable change, after twelve rounds of incubation delivered in JDK 16 through JDK 27. This feature introduces an API to "*express vector computations that reliably compile at runtime to optimal vector instructions on supported CPU architectures, thus achieving performance superior to equivalent scalar computations.*" This JEP adds support for **`[Vector<Float16>](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Vector.html)`** vectors, whose lanes hold 16-bit floating-point numbers in the IEEE 754 **`binary16`** format. The Vector API will continue to incubate until the necessary features of [Project Valhalla](https://openjdk.org/projects/valhalla/) become available as preview features. At that time, the Vector API team will adapt the Vector API and its implementation to use them, and will promote the Vector API from **Incubation** to **Preview**.

#### JDK 28

[Build 25](https://github.com/openjdk/jdk/releases/tag/jdk-28%2B25) of the JDK 28 [early-access builds](https://jdk.java.net/28/) was made available this past week featuring [updates](https://github.com/openjdk/jdk/compare/jdk-28%2B24...jdk-28%2B25) from Build 24 that include fixes for various [issues](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2028%20and%20%22resolved%20in%20build%22%20%3D%20b25%20order%20by%20component%2C%20subcomponent). More details on this release may be found in the [release notes](https://jdk.java.net/28/release-notes).

For [JDK 28](https://openjdk.org/projects/jdk/28/), developers are encouraged to report bugs via the [Java Bug Database](https://bugreport.java.com/bugreport/).

#### Java4Shell

A new Remote Code Execution (RCE) vulnerability, known as Java4Shell ([CVE-2026-114938](https://nvd.nist.gov/vuln/detail/cve-2026-114938)), affects versions 27.0.1.0.3, 25.0.5.0.3, 21.0.13.0.3, 17.0.21.0.3 and 8u511b33-perf of Oracle Java SE, versions 21.0.13.0.3 and 17.0.21.0.3 of Oracle GraalVM for JDK, and Oracle GraalVM Enterprise Edition: 21.3.20.0.3. As described in the CVE documentation:

> \[This\] difficult to exploit vulnerability allows \[an\] unauthenticated attacker with network access via multiple protocols to compromise Oracle Java SE, Oracle GraalVM for JDK, Oracle GraalVM Enterprise Edition. Successful attacks of this vulnerability can result in takeover of Oracle Java SE, Oracle GraalVM for JDK, Oracle GraalVM Enterprise Edition. Note: This vulnerability can only be exploited by supplying data to APIs in the specified Component without using Untrusted Java Web Start applications or Untrusted Java applets, such as through a web service.

Organizations and projects that have addressed this CVE include: [BellSoft](https://bell-sw.com/blog/addressing-java4shell-in-liberica-jdk/), [Azul](https://www.azul.com/blog/java4shell-cve-2026-114938-what-it-is-who-is-affected-and-what-to-do-now/), [JetBrains](https://blog.jetbrains.com/teamcity/2026/11/java4shell-cve-2026-114938-what-it-means-for-teamcity/), [GraalVM](https://x.com/graalvm/status/2123049498783961320), [Quarkus](https://quarkus.io/blog/java4shell/) and [WildFly](https://www.wildfly.org/news/2026/11/20/WildFly-and-Java4Shell/). InfoQ will follow up with a more detailed news story.

#### Spring Framework

It was a busy week over at Spring as the various teams have delivered *GA releases* that include: [Spring Boot](https://spring.io/projects/spring-boot), [Spring Framework](https://spring.io/projects/spring-framework), [Spring Security](https://spring.io/projects/spring-security), [Spring Session](https://spring.io/projects/spring-session), [Spring Integration](https://spring.io/projects/spring-integration), [Spring HATEOAS](https://spring.io/projects/spring-hateoas), [Spring Modulith](https://spring.io/projects/spring-modulith), [Spring AI](https://spring.io/projects/spring-ai), [Spring AMQP](https://spring.io/projects/spring-amqp), [Spring for Apache Kafka](https://spring.io/projects/spring-kafka) and [Spring LDAP](https://spring.io/projects/spring-ldap).

The Spring team has also [resolved a total of 90 CVEs](https://spring.io/security) spanning multiple projects. InfoQ will follow up with a more detailed news story.

#### Azul Payara

The [release](https://www.azul.com/blog/whats-new-in-the-november-2026-azul-payara-release/) of [Azul Payara](https://www.azul.com/products/payara-server/) 7.6.0, the November 2026 edition, includes Community Edition 7.2026.11, Enterprise Edition 6.44.0 and Enterprise Edition 5.93.0. Along with bug fixes and component upgrades, all three editions deliver resolutions to five CVEs, two of which are related to Azul Payara:

-   [CVE-2026-90908](https://www.infoq.com/news/2026/11/java-news-roundup-nov16-2026/CVE-2026-90908), a vulnerability in the **`[GenericAdminAuthenticator](https://github.com/payara/Payara/blob/main/nucleus/admin/util/src/main/java/com/sun/enterprise/admin/util/GenericAdminAuthenticator.java)`** class that allows a remote, unauthenticated attacker to bypass JMX/RMI administrative access restrictions by spoofing the client host address that may lead to remote code execution.
-   [CVE-2026-110003](https://nvd.nist.gov/vuln/detail/cve-2026-110003), A vulnerability in the administration REST interface that allows a remote, unauthenticated attacker to bypass secure-admin remote-access restrictions by supplying an arbitrary value in the **`X-GlassFish-authToken`** HTTP header that grants execution of arbitrary administrative commands, equivalent to complete compromise of the server.

Further details on this release may be found in the [release notes](https://docs.azul.com/payara/release-notes/release-notes-7.6.0.html) and the Azul Payara [security advisories](https://docs.azul.com/payara/security/security-fix-list.html) page.

#### Hibernate

The [second release candidates](https://in.relation.to/2026/11/17/hibernate-reactive-5_1_0_CR2/) of [Hibernate Reactive](https://hibernate.org/reactive/) 5.1.0 and 5.0.0 ship with one single bug fix from the first release candidates, in which use of the Jakarta Persistence **`[@TableGenerator](https://jakarta.ee/specifications/persistence/3.2/apidocs/jakarta.persistence/jakarta/persistence/TableGenerator.html)`** annotation could cause a deadlock when a session holding the lock on the row of the generator table needed a new block of IDs.

Version 5.0.0.CR2 will be the last release candidate. With the GA release of version 5.0.0.Final, it will be declared as end-of-life and focus will be on version 5.1.0.

More details on these releases may be found in the release notes for [version 5.1.0.CR2](https://github.com/hibernate/hibernate-reactive/releases/tag/5.1.0.CR2) and [version 5.0.0.CR2](https://github.com/hibernate/hibernate-reactive/releases/tag/5.0.0.CR2).

#### Java Operator SDK

The [release](https://javaoperatorsdk.io/blog/2026/11/19/version-5.7-released/) of [Java Operator SDK](https://javaoperatorsdk.io/) 5.7.0 provides bug fixes, dependency upgrades and new features such as: the ability to enable virtual threads via construction in the **`[Operator](https://github.com/operator-framework/java-operator-sdk/blob/main/operator-framework-core/src/main/java/io/javaoperatorsdk/operator/Operator.java)`** class or the **`josdk.use-virtual-threads`** property; and a new **`keepAlive()`** method, defined in the **`Operator`** class that starts a non-daemon thread to keep the JVM running until the operator is shut down. Version 5.7 is now built on [Fabric8 Kubernetes Client](https://github.com/fabric8io/kubernetes-client/blob/main/README.md) 8.0. Further details on this release may be found in the [release notes](https://github.com/operator-framework/java-operator-sdk/releases/tag/v5.7.0).

#### BellSoft

Concurrent with Oracle's [Critical Security Patch Update](https://www.oracle.com/security-alerts/cspunov2026.html) (CSPU) for November 2026, BellSoft has [released](https://bell-sw.com/blog/liberica-jdk-november-2026-cspu-builds-are-released/) CSPU patches for versions 27.0.1.1 25.0.5.1, 21.0.13.1, 17.0.21.1, 11.0.33.1, 8u514 7u523 and 6u523 of [Liberica JDK](https://bell-sw.com/pages/libericajdk/), their downstream distribution of OpenJDK, to address this [list of CVEs](https://docs.bell-sw.com/security/search/). This release also includes a patch for the aforementioned Java4Shell Remote Code Execution vulnerability.

With an overall total of 111 fixes and backports, BellSoft states they have participated in eliminating 21 issues in all releases.

#### Helidon

The release of Helidon 27.0.2 delivers bug fixes and one notable change in which the default limit of decoded-input (strings, byte arrays, JSON, forms, and buffered multipart parts) for in-memory entity conversations has been increased to 1 mebibyte (MiB). More details on this release may be found in the [release notes](https://github.com/helidon-io/helidon/blob/27.0.2/CHANGELOG.md).

This release also aligns with the Oracle Critical Patch Updates for November 2026 and includes the Helidon 4.x and 3.x release trains as described in this [blog post](https://medium.com/helidon/monthly-cpu-release-for-helidon-november-2026-37612a94f574).

#### LangChain4j

The *formal release* (along with the *thirty-fourth beta release*) of [LangChain4j](https://github.com/langchain4j) 1.24.0 ships with bug fixes, documentation improvements, dependency upgrades and new features such as: new **`[DecisionSchedulerPlanner](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-agentic-patterns/src/main/java/dev/langchain4j/agentic/patterns/decisionscheduler/DecisionSchedulerPlanner.java)`** and **`[DecisionModels](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-agentic/src/test/java/dev/langchain4j/agentic/decision/DecisionModels.java)`** classes to serve as a decision model-based agentic pattern; and support for resuming suspended agentic systems in the **`[AgentMonitor](https://github.com/langchain4j/langchain4j/blob/main/langchain4j-agentic/src/main/java/dev/langchain4j/agentic/observability/AgentMonitor.java)`** class. Further details on this release, including breaking changes, may be found in the [release notes](https://github.com/langchain4j/langchain4j/releases/tag/1.24.0).

#### Micrometer

After two milestones and two releases candidates, the GA release of [Micrometer Metrics](https://github.com/micrometer-metrics/micrometer/blob/main/README.md) 1.18.0 provides bug fixes, documentation improvements, dependency upgrades and new features such as: an optimization of the **`[PrometheusMeterRegistry](https://github.com/micrometer-metrics/micrometer/blob/main/implementations/micrometer-registry-prometheus/src/main/java/io/micrometer/prometheusmetrics/PrometheusMeterRegistry.java)`** and **`[MicrometerCollector](https://github.com/micrometer-metrics/micrometer/blob/main/implementations/micrometer-registry-prometheus/src/main/java/io/micrometer/prometheusmetrics/MicrometerCollector.java)`** classes for collecting data snapshots; and a new **`RowState`** inner class, defined in the **`[MultiGauge](https://github.com/micrometer-metrics/micrometer/blob/main/micrometer-core/src/main/java/io/micrometer/core/instrument/MultiGauge.java)`** class, that eliminates the need to remove and re-register an instance of the existing **`Row`** inner class. More details on this release, including deprecations, may be found in the [release notes](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.18.0).

Similarly, the GA release of [Micrometer Tracing](https://github.com/micrometer-metrics/tracing/blob/main/README.md) 1.8.0 delivers bug fixes, documentation improvements, dependency upgrades and new features such as: a simplification of baggage handles and lookups by directly storing the name of the handle and its metadata by eliminating use of the **`CompositeBaggage`** and Java **`[AtomicReference](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html)`** classes; and a refactor of the **`[BaggageTextMapPropagator](https://github.com/micrometer-metrics/tracing/blob/main/micrometer-tracing-bridges/micrometer-tracing-bridge-otel/src/main/java/io/micrometer/tracing/otel/propagation/BaggageTextMapPropagator.java)`** class for improved baggage propagation. Further details on this release, including deprecations, may be found in the [release notes](https://github.com/micrometer-metrics/tracing/releases/tag/v1.8.0).

## About the Author

#### **Michael Redlich**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/java-news-roundup-nov16-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。