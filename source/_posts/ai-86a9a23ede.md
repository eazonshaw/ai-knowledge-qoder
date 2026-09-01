---
title: "Java News Roundup: GraalVM, Jakarta Data, JNoSQL, Azul Payara, WildFly, Quarkus, Atmosphere"
date: 2026-09-01 08:54:36
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "This week's Java roundup for August 24th, 2026, features news highlighting: the GA release of Atmosp"
source_url: "https://www.infoq.com/news/2026/08/java-news-roundup-aug24-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-31T11:30:00.000Z　|　采集：2026-09-01 08:54:36

## 正文

This week's Java roundup for August 24th, 2026, features news highlighting: the GA release of Atmosphere 4.0; point releases of GraalVM, Azul Payara and Quarkus; a maintenance release of WildFly 41; milestone releases of Jakarta Data and Eclipse JNoSQL; a beta release of the September 2026 edition of Open Liberty; and the release of Docker images for GlassFish 8.0.4.

#### OpenJDK

JEP 542, [PEM Encodings of Cryptographic Objects](https://openjdk.org/jeps/542), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/LVA5F5FUDPXJZMHJZJZW3NJV3MNKJCXG/) from **Proposed to Target** to **Targeted** for JDK 28. This JEP proposes to finalize this feature after three rounds of preview delivered in JDK 25 through JDK 27. This feature offers "*an API for encoding objects that represent cryptographic keys, certificates, and certificate revocation lists into the widely-used Privacy-Enhanced Mail (PEM) transport format, and for decoding from that format back into objects.*" This JEP will support conversions between PEM text and cryptographic objects in [PKCS #8](https://datatracker.ietf.org/doc/html/rfc5208) and [X.509](https://datatracker.ietf.org/doc/html/rfc5280) binary formats. Changes include: a reclassification of the PEM record class to a regular class as a convenience for providing constructors that accept Base64-encoded content in byte arrays; and a rename of the **`[DEREncodable](https://cr.openjdk.org/~ascarpino/pem/api/java.base/java/security/DEREncodable.html)`** interface to **`BinaryEncodable`** to more accurately describe the binary data stored in PEM text.

#### JDK 27

[Build 35](https://github.com/openjdk/jdk/releases/tag/jdk-27%2B35) remains the current build in the JDK 27 [early-access builds](https://jdk.java.net/27/). Further details on this release may be found in the [release notes](https://jdk.java.net/27/release-notes).

#### JDK 28

[Build 13](https://github.com/openjdk/jdk/releases/tag/jdk-28%2B13) of the JDK 28 [early-access builds](https://jdk.java.net/28/) was also made available this past week featuring [updates](https://github.com/openjdk/jdk/compare/jdk-28%2B12...jdk-28%2B13) from Build 12 that include fixes for various [issues](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2028%20and%20%22resolved%20in%20build%22%20%3D%20b13%20order%20by%20component%2C%20subcomponent). More details on this release may be found in the [release notes](https://jdk.java.net/28/release-notes).

For [JDK 28](https://openjdk.org/projects/jdk/28/) and [JDK 27](https://openjdk.org/projects/jdk/27/), developers are encouraged to report bugs via the [Java Bug Database](https://bugreport.java.com/bugreport/).

#### GlassFish

The [OmniFish](https://omnifish.ee/) team has [released](https://x.com/OmniFishEE/status/2092925094150488526) Docker images for version 8.0.4 of [GlassFish](https://github.com/eclipse-ee4j/glassfish.docker/pkgs/container/glassfish) and [GlassFish Embedded](https://github.com/eclipse-ee4j/glassfish.docker/pkgs/container/embedded-glassfish). Further details on how developers can use these new images may be found in this [user guide](https://github.com/eclipse-ee4j/glassfish.docker/wiki).

#### GraalVM

The [release](https://medium.com/graalvm/graalvm-25-3-is-here-41641acebfaf) of [GraalVM](https://www.graalvm.org/) 25.3 delivers notable new features such as: a new **`[SubstratePriorityInliningPhase](https://github.com/oracle/graal/blob/master/substratevm/src/com.oracle.svm.hosted/src/com/oracle/svm/hosted/phases/priorityinline/SubstratePriorityInliningPhase.java)`** class that implements a priority inliner, for both JIT and Native Image modes, for improved performance of generated code; and improved security hardening with a mechanism that can prevent attackers from redirecting program execution to unexpected code locations. More details on this release may be found in the [release notes](https://www.graalvm.org/release-notes/25.3/).

#### Jakarta EE

The *fourth milestone release* of [Jakarta Data](https://jakarta.ee/specifications/data/) 1.1.0 ships with bug fixes, documentation improvements, dependency upgrades and new features such as: updated TCK tests; the ability to indicate the sorting of nulls via the **`[@OrderBy](https://github.com/jakartaee/data/blob/main/api/src/main/java/jakarta/data/repository/OrderBy.java)`** annotation; and improved null safety using the **`[@Nullable](https://jakarta.ee/specifications/annotations/3.0/apidocs/jakarta.annotation/jakarta/annotation/nullable)`** and **`[@Nonnull](https://jakarta.ee/specifications/annotations/3.0/apidocs/jakarta.annotation/jakarta/annotation/nonnull)`** annotations defined in the Jakarta Annotations specification. Further details on this release may be found in the [release notes](https://github.com/jakartaee/data/releases/tag/1.1.0-M4).

#### Eclipse JNoSQL

The *second milestone release* of Eclipse JNoSQL 1.2.0, an implementation of the [Jakarta NoSQL](https://jakarta.ee/specifications/nosql/) specification, provides notable changes such as: a new **`[AutoApplyConverters](https://github.com/eclipse-jnosql/jnosql/blob/main/jnosql-mapping/jnosql-mapping-reflection/src/main/java/org/eclipse/jnosql/mapping/reflection/AutoApplyConverters.java)`** class that scans for implementations of the Jakarta Persistence **`[AttributeConverter](https://jakarta.ee/specifications/persistence/4.0/apidocs/jakarta.persistence/jakarta/persistence/attributeconverter)`** interface to supports auto-apply converters in the JNoSQL mapping reflection module; and support for CDI interceptors, in both semistructured and key-value repository implementations, that allow for handling of cross-cutting concerns. More details on this release may be found in the [release notes](https://github.com/eclipse-jnosql/jnosql/releases/tag/1.2.0-M2).

#### Azul Payara

The [release](https://www.azul.com/blog/whats-new-in-the-august-2026-azul-payara-release/) of [Azul Payara](https://www.azul.com/products/payara-server/) 7.3.0, the August 2026 edition, includes Community Edition 7.2026.8, Enterprise Edition 6.41.0 and Enterprise Edition 5.90.0. Along with bug fixes and component upgrades, all three editions deliver these new features: consistent support for [gRPC](https://github.com/grpc/grpc/blob/master/README.md) 1.83.1, the latest version, in all Azul Payara release trains; a new mechanism to customise and filter the recorded content in the access logs; and improved access log formatting displayed in the console from Azul Payara Micro.

This release also introduces the initial implementation of the [Jakarta Agentic AI](https://jakarta.ee/specifications/agentic-ai/) specification. Further details on this release may be found in the [release notes](https://docs.azul.com/payara/release-notes/release-notes-7.3.0.html).

#### Open Liberty

The [beta release](https://openliberty.io/blog/2026/08/25/26.0.0.9-beta.html) of [Open Liberty](https://openliberty.io/) 26.0.0.9 ships with bug fixes and new features such as: support for the MCP Java API (**`[org.mcpjava:mcp-server-api:1.0.0](https://central.sonatype.com/artifact/org.mcpjava/mcp-server-api/overview)`**) in the **`mcpServer-1.0`** feature; and updates to their MCP metrics such that MBean names now use their own JMX **`[ObjectName](https://docs.oracle.com/en/java/javase/26/docs/api/java.management/javax/management/ObjectName.html)`** keys. The latter is a breaking change requiring developers to update their JMX queries or scripts.

#### WildFly

The [release](https://www.wildfly.org/news/2026/08/27/WildFly-41-0-1-is-released/) of [WildFly](https://www.wildfly.org/) 41.0.1 provides bug fixes, component upgrades and notable changes such as: an update to their filter as per JEP 290, [Filter Incoming Serialization Data](https://openjdk.org/jeps/290), that includes a new deny list in the application **`bin/jdk.serialFilter`** file; and an upgrade to the latest version of [Apache CFX](https://cxf.apache.org/) that supports blocking of decoupled destinations, as specified in the [Web Services Addressing](https://www.w3.org/submissions/ws-addressing/) specification, as a mitigation to reduce the risk of a Server Side Request Forgery (SSRF) attack. More details on this release may be found in the [release notes](https://github.com/wildfly/wildfly/releases/tag/41.0.1.Final).

#### Quarkus

The [release](https://quarkus.io/blog/quarkus-3-39-released/) of [Quarkus](https://quarkus.io/) 3.39.0 delivers bug fixes, dependency upgrades and two new features: support for post-quantum cryptography in the Quarkus [TLS Certificate Registry](https://quarkus.io/extensions/io.quarkus/quarkus-tls-registry/) extension; and a reversal on enabling [reflection-free Jackson serializers](https://quarkus.io/blog/reflection-free-jsckson-serializers/) by default due to on-going issues despite having improved stabilization of this feature. Further details on this release may be found in the release notes for [version 3.39.1](https://github.com/quarkusio/quarkus/releases/tag/3.39.1) and [version 3.39.0](https://github.com/quarkusio/quarkus/releases/tag/3.39.0).

The Quarkus team has also [released](https://quarkus.io/blog/quarkus-flow-1-0-0-released/) version 1.0.0 of the Quarkus [Flow](https://quarkus.io/extensions/io.quarkiverse.flow/quarkus-flow/), an extension that implements the [Open Workflow Specification](https://open-workflow-specification.org/) specification. New features include: a Java DSL that can define workflows via YAML or directly in Java code; Agentic AI orchestration with LangChain4j; and the ability to emit and consume cloud events.

#### Atmosphere

The [release](https://async-io.live/blog/atmosphere-4x-ai/) of [Atmosphere](https://github.com/Atmosphere/atmosphere/blob/main/README.md) 4, a real-time engine for AI agents on the JVM, now includes a portable AI agent component. Two maintenance releases over this past week ship with bug fixes and new features such as: scope the [RUNTIME.md](https://github.com/Atmosphere/atmosphere/blob/main/samples/spring-boot-personal-assistant/src/main/resources/agent-workspace/RUNTIME.md) workspace settings using the **`configureForAgent()`** method, defined in the **`[AiConfig](https://github.com/Atmosphere/atmosphere/blob/main/modules/ai/src/main/java/org/atmosphere/ai/AiConfig.java)`** class, by which the workspace seeds the default process; and the addition of Spring Boot low-level handlers layer under the **`[@ManagedService](https://github.com/Atmosphere/atmosphere/blob/main/modules/cpr/src/main/java/org/atmosphere/config/service/ManagedService.java)`** annotation. More details on this release may be found in the release notes for [version 4.0.69](https://github.com/Atmosphere/atmosphere/releases/tag/atmosphere-4.0.68) and [version 4.0.68](https://github.com/Atmosphere/atmosphere/releases/tag/atmosphere-4.0.68).

## About the Author

#### **Michael Redlich**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/java-news-roundup-aug24-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。