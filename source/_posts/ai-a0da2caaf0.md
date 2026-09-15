---
title: "Java News Roundup: New OpenJDK JEPs, CDI 5.0, Spring, Open Liberty, RefactorFirst, ADK for Kotlin"
date: 2026-09-15 08:05:02
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "This week's Java roundup for September 7th, 2026, features news highlighting: new JEPs for ahead-of-"
source_url: "https://www.infoq.com/news/2026/09/java-news-roundup-sep07-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-14T20:15:00.000Z　|　采集：2026-09-15 08:05:02

## 正文

This week's Java roundup for September 7th, 2026, features news highlighting: new JEPs for ahead-of-time compilation and structured concurrency; GA releases of Jakarta CDI 5.0 and ADK for Kotlin 1.0; the September 2026 edition of Open Liberty; point releases of TornadoVM and RefactorFirst; a maintenance release of Micronaut; and first releases candidates of Groovy 6.0 and Gradle 9.8.

#### OpenJDK

JEP 544, [Ahead-of-Time Code Compilation](https://openjdk.org/jeps/544), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/J2VGSSFWJ7ZLHAYLCXVRUOXV4XMROQHL/) from its **JEP Draft 8335368** to **Candidate** status. This JEP proposes to improve application startup and warmup time such that it is instantly available with optimized native code when the HotSpot JVM starts. This enables applications to achieve peak performance more quickly and to sustain peak performance.

JEP 543, [Structured Concurrency](https://openjdk.org/jeps/543), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/VAN2ZOZDD5XBLOXCQOPDNZQ7XFQLTDVG/) from its **JEP Draft 8389757** to **Candidate** status. This JEP proposes to finalize this feature, without change, after seven rounds of preview, delivered in JDK 21 through the upcoming release of JDK 27, and two rounds of incubator delivered in JDK 19 and JDK 20. This feature simplifies concurrent programming by introducing structured concurrency to "*treat groups of related tasks running in different threads as a single unit of work, thereby streamlining error handling and cancellation, improving reliability, and enhancing observability.*"

#### JDK 27

[Build 35](https://github.com/openjdk/jdk/releases/tag/jdk-27%2B35) remains the current build in the JDK 27 [early-access builds](https://jdk.java.net/27/). Further details on this release may be found in the [release notes](https://jdk.java.net/27/release-notes).

JDK 27 will be released on Tuesday, September 15, 2026. InfoQ will follow up with a more detailed news story.

#### JDK 28

[Build 15](https://github.com/openjdk/jdk/releases/tag/jdk-28%2B15) of the JDK 28 [early-access builds](https://jdk.java.net/28/) was made available this past week featuring [updates](https://github.com/openjdk/jdk/compare/jdk-28%2B14...jdk-28%2B15) from Build 14 that include fixes for various [issues](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2028%20and%20%22resolved%20in%20build%22%20%3D%20b15%20order%20by%20component%2C%20subcomponent). More details on this release may be found in the [release notes](https://jdk.java.net/28/release-notes).

For [JDK 28](https://openjdk.org/projects/jdk/28/) and [JDK 27](https://openjdk.org/projects/jdk/27/), developers are encouraged to report bugs via the [Java Bug Database](https://bugreport.java.com/bugreport/).

#### TornadoVM

Approximately one week after the release of version 6.0, [TornadoVM](https://www.tornadovm.org/) 6.1.0 delivers bug fixes and an improvements to the fixed cost the host pays per operation, namely: skip upload of the per-launch 24-byte kernel-argument kernel stack-frame when the contents are identical; and skip the stream synchronisation when nothing has been enqueued. Further details on this release may be found in the [release notes](https://github.com/beehive-lab/TornadoVM/releases/#release-v6.1.0). InfoQ will follow up with a more detailed news story on the release of version 6.0.0.

#### Jakarta EE

In his weekly [Hashtag Jakarta EE](https://www.agilejava.eu/) blog, [Ivar Grimstad](https://se.linkedin.com/in/ivargrimstad), Jakarta EE Developer Advocate at the Eclipse Foundation, provided an [update](https://www.agilejava.eu/2026/09/13/hashtag-jakarta-ee-350/) on Jakarta EE 12, writing:

> [Jakarta Contexts and Dependency Injection (CDI) 5.0](https://jakarta.ee/specifications/cdi/5.0/) was approved by the Specification Committee this week as the first specification targeting Jakarta EE 12. This is an important milestone for [Jakarta EE 12](https://jakarta.ee/specifications/platform/12/) as CDI is one of the most central specifications in the Platform. More specifications will follow soon.

The design of the [Starter for Jakarta EE](https://start.jakarta.ee/) has been refreshed to align with the design of the [Jakarta EE website](https://jakarta.ee/). Developers are encouraged to test drive this new UI and provide feedback

The [Jakarta Agentic AI 1.0](https://jakarta.ee/specifications/agentic-ai/1.0/) specification, whose creation was approved in early November 2025, recently delivered a M1 release and a new [project website](https://jakartaee.github.io/agentic-ai/). The [August 2026](https://www.azul.com/blog/whats-new-in-the-august-2026-azul-payara-release/) edition of [Azul Payara](https://www.azul.com/products/payara-server/) serves as the first implementation

#### Spring Framework

The [release](https://spring.io/blog/2026/09/09/spring-tools-5-4-0-released) of [Spring Tools](https://spring.io/tools) 5.4.0 ships with bug fixes, a [dependency upgrade](https://eclipseide.org/release/noteworthy/2026-09/) to Eclipse IDE 2026-09 and new features such as: the addition of a validation check and a quick fix that replaces the combined use of the **`[@Controller](https://docs.spring.io/spring-framework/docs/7.0.8/javadoc-api/org/springframework/stereotype/Controller.html)`** and **`[@ResponseBody](https://docs.spring.io/spring-framework/docs/7.0.8/javadoc-api/org/springframework/web/bind/annotation/ResponseBody.html)`** annotations with **`[@RestController](https://docs.spring.io/spring-framework/docs/7.0.8/javadoc-api/org/springframework/web/bind/annotation/RestController.html)`**; adoption of the Spring Modulith **`[@ApplicationModuleListener](https://docs.spring.io/spring-modulith/docs/current/api/org/springframework/modulith/events/ApplicationModuleListener.html)`** annotation; and enabling the Claude Code plugin to render a project's logical structure. More details on this release may be found in the [release notes](https://github.com/spring-projects/spring-tools/releases/tag/5.4.0.RELEASE).

#### Open Liberty

The [GA release](https://openliberty.io/blog/2026/09/08/26.0.0.9.html) of [Open Liberty](https://openliberty.io/) 26.0.0.9 provides bug fixes, resolutions to numerous CVEs and notable changes such as: elevation of the MCP Server feature (**`mcp-1.0`**) from experimental to general availability; and an implementation of the [OAuth 2.0 Protected Resource Metadata](https://www.rfc-editor.org/info/rfc9728/) (RFC 9728) specification that allows developers to enable protected resource metadata when using the [OpenID Connect Client](https://openliberty.io/docs/latest/reference/feature/openidConnectClient-1.0.html) (**`openidConnectClient-1.0`**) feature.

This release brings breaking changes as the MCP Server feature name has changed from **`mcpServer-1.0`** to **`mcp-1.0`**, and the **`server.xml`** configuration element has changed from **`<mcpServer>`** to **`<mcp>`**.

#### Micronaut

The Micronaut Foundation has released versions 5.1.5 and 5.1.4 (announced [here](https://micronaut.io/2026/09/11/micronaut-framework-5-1-5/) and [here](https://micronaut.io/2026/09/09/micronaut-framework-5-1-4/), respectively) of the [Micronaut Framework](https://micronaut.io/), based on Micronaut Core versions [5.1.15](https://github.com/micronaut-projects/micronaut-core/releases/tag/v5.1.15) and [5.1.14](https://github.com/micronaut-projects/micronaut-core/releases/tag/v5.1.14). Notable changes include: a patch update to [Micronaut Data](https://micronaut-projects.github.io/micronaut-data/latest/guide/); resolutions to three CVEs; and a dependency upgrade to [Netty 4.2.18.Final](https://github.com/netty/netty/releases/tag/netty-4.2.18.Final) that addresses numerous CVEs. Further details on these releases may be found in the release notes for [version 5.1.5](https://github.com/micronaut-projects/micronaut-platform/releases/tag/v5.1.5) and [version 5.1.4](https://github.com/micronaut-projects/micronaut-platform/releases/tag/v5.1.4).

#### Apache Groovy

The [first release candidate](https://www.mail-archive.com/announce@apache.org/msg11842.html) of [Apache Groovy](https://groovy-lang.org/) 6.0.0 delivers bug fixes, dependency upgrades and new features such as: a new **`[@GroovyABI](https://github.com/apache/groovy/blob/master/src/main/java/org/apache/groovy/lang/annotation/GroovyABI.java)`** annotation that marks methods, which may be called directly from bytecode, as part of the Groovy Application Binary Interface (ABI); an improved **`[JsonSlurper](https://github.com/apache/groovy/blob/master/subprojects/groovy-json/src/main/java/groovy/json/JsonSlurper.java)`** class that adds a **`maxNumberLength`** attribute that will not accept a number token greater than that value and throw a **`[JsonException](https://github.com/apache/groovy/blob/master/subprojects/groovy-json/src/main/java/groovy/json/JsonException.java)`**; and an improved **`[XmlNodePrinter](https://github.com/apache/groovy/blob/master/subprojects/groovy-xml/src/main/java/groovy/xml/XmlNodePrinter.java)`** class for handling larger documents. More details on this release may be found in the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12318123&version=12357479).

#### RefactorFirst

[Jim Bethancourt](https://www.linkedin.com/in/jimbethancourt/), principal software consultant at [Improving](https://improving.com/), has released version 0.10.0 of [RefactorFirst](https://github.com/jimbethancourt/RefactorFirst/blob/main/README.md), a utility that prioritizes the parts of an application that should be refactored. This release provides bug fixes and two new features: JDK 17 as the minimal Java version; and support for Kotlin source file processing such that codebases containing both Java and Kotlin source files are treated as a unified codebase. Further details on this release may be found in the [release notes](https://github.com/refactorfirst/RefactorFirst/releases#release-0.10.0).

#### ADK for Kotlin

Google has [released](https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/) version 1.0 of the [ADK for Kotlin](https://adk.dev/get-started/kotlin/), an agent development kit for building production-ready AI agents in Kotlin and Android. First [introduced](https://developers.googleblog.com/adk-kotlin-android-building-ai-agents/) in May 2026, this new version delivers "*full feature parity with ADK 1.0 Core to Kotlin, Java, and Android developers through an idiomatic Kotlin API, and adds Android-first, on-device extensions for building agents on the JVM or on-device*." New features include: a new **`[MultiAgentLoader](https://github.com/google/adk-kotlin/blob/main/webserver/src/jvmMain/kotlin/com/google/adk/kt/webserver/loaders/MultiAgentLoader.kt)`** class that provides a fixed set of agents by name to complement the **`[SingleAgentLoader](https://github.com/google/adk-kotlin/blob/main/webserver/src/jvmMain/kotlin/com/google/adk/kt/webserver/loaders/SingleAgentLoader.kt)`** class; and a fluent **`builder()`** method, added to the **`[AdkServerConfig](https://github.com/google/adk-kotlin/blob/main/webserver/src/jvmMain/kotlin/com/google/adk/kt/webserver/AdkServerConfig.kt)`** class, that allows Java developers to configure a server without the all-arguments data-class constructor. More details on this release may be found in the [release notes](https://github.com/google/adk-kotlin/releases/tag/v1.0.0).

#### Gradle

The [first release candidate](https://github.com/gradle/gradle/releases/tag/v9.8.0-RC1) of [Gradle](https://gradle.org/) 9.8.0 delivers new features such as: support for the upcoming release of Java 27 in the Gradle daemon and Java toolchains; support for reusing the Maven [mirror repository settings](https://maven.apache.org/guides/mini/guide-mirror-settings.html) with a simple flag; and a 45% performance improvement in WindowsOS. Further details on this release may be found in the [release notes](https://docs.gradle.org/9.8.0-rc-1/release-notes.html).

## About the Author

#### **Michael Redlich**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/java-news-roundup-sep07-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。