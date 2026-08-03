---
title: "Java News Roundup: OpenJDK JEPs, Jakarta EE, GraalVM, TornadoVM, Micronaut, Quarkus, JobRunr, Maven"
date: 2026-08-04 06:53:08
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "This week's Java roundup for July 27th, 2026, features news highlighting: OpenJDK JEPs targeted and "
source_url: "https://www.infoq.com/news/2026/08/java-news-roundup-jul27-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-03T14:30:00.000Z　|　采集：2026-08-04 06:53:08

## 正文

This week's Java roundup for July 27th, 2026, features news highlighting: OpenJDK JEPs targeted and proposed to target for JDK 28; the GA release of GPULlama3.java 1.0; point releases of Micronaut, Quarkus and JobRunr; a maintenance release of JDKUpdater; the sixth release candidate of Maven 4.0; and the first milestone release of Jakarta Agentic AI 1.0.

#### OpenJDK

After its review had concluded, JEP 539, [Strict Field Initialization in the JVM (Preview)](https://openjdk.org/jeps/539), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/NJ2UURKJJJHCZH4ADZ26FDCHNMWR3QX4/) from **Proposed to Target** to **Targeted** for JDK 28. This JEP introduces strictly-initialized fields in the Java Virtual Machine that are required to be initialized before they are read. Therefore, default values such as 0 or null are never observed. This feature is available for use by compilers that emit class files.

Similarly, JEP 401, [Value Objects (Preview)](https://openjdk.org/jeps/401), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/KYFVJ6HM4CI4APOM5OTJYAQOZBF4N76D/) from **Proposed to Target** to **Targeted** for JDK 28. Formerly known as *Object Classes and Values (Preview)*, this JEP proposes to enhance the language with *value objects*, defined as objects that: only contain **`final`** fields; do not have identity; and are solely distinguished by the values of their respective fields.

JEP 535, [Shenandoah GC: Generational Mode by Default](https://openjdk.org/jeps/535), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/WCXBMQ2AIKRK5R4DV6LFML5L4KHMXZSM/) from **Candidate** to **Proposed to Target** for JDK 28. This JEP proposes to designate the Shenandoah Garbage Collector to generational mode by default. The non-generational mode will be deprecated with the intent to remove it in a future release. The review is expected to conclude on August 3, 2026.

JEP 542, [PEM Encodings of Cryptographic Objects](https://openjdk.org/jeps/542), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/GR3THDRU4JECTN7COO5RSFRQSOAFJE5U/) from its **JEP Draft 8386511** to **Candidate** status. This JEP proposes to finalize this feature after three rounds of preview delivered in JDK 25 through JDK 27. This feature offers "*an API for encoding objects that represent cryptographic keys, certificates, and certificate revocation lists into the widely-used Privacy-Enhanced Mail (PEM) transport format, and for decoding from that format back into objects.*" This JEP will support conversions between PEM text and cryptographic objects in [PKCS #8](https://datatracker.ietf.org/doc/html/rfc5208) and [X.509](https://datatracker.ietf.org/doc/html/rfc5280) binary formats. Changes include: a reclassification of the PEM record class to a regular class as a convenience for providing constructors that accept Base64-encoded content in byte arrays; and a rename of the **`[DEREncodable](https://cr.openjdk.org/~ascarpino/pem/api/java.base/java/security/DEREncodable.html)`** interface to **`BinaryEncodable`** to more accurately describe the binary data stored in PEM text.

#### JDK 27

[Build 33](https://github.com/openjdk/jdk/releases/tag/jdk-27%2B33) of the JDK 27 [early-access builds](https://jdk.java.net/27/) was made available this past week featuring [updates](https://github.com/openjdk/jdk/compare/jdk-27%2B32...jdk-27%2B33) from Build 32 that include fixes for various [issues](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2027%20and%20%22resolved%20in%20build%22%20%3D%20b33%20order%20by%20component%2C%20subcomponent). Further details on this release may be found in the [release notes](https://jdk.java.net/27/release-notes).

#### JDK 28

[Build 9](https://github.com/openjdk/jdk/releases/tag/jdk-28%2B9) of the JDK 28 [early-access builds](https://jdk.java.net/28/) was also made available this past week featuring [updates](https://github.com/openjdk/jdk/compare/jdk-28%2B8...jdk-28%2B9) from Build 8 that include fixes for various [issues](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2028%20and%20%22resolved%20in%20build%22%20%3D%20b09%20order%20by%20component%2C%20subcomponent). More details on this release may be found in the [release notes](https://jdk.java.net/28/release-notes).

#### Jakarta EE

The *first milestone release* of [Jakarta Agentic AI](https://jakarta.ee/specifications/agentic-ai/1.0/) 1.0.0 delivers notable changes such as: a new internal TCK infrastructure that moves beyond signaturea and reflection checks for covering real behavioral semantics; and new **`@RequiresEngine`** and **`@RequiresNoEngine`** annotations that replace use of the JUnit **`[@Disabled](https://github.com/junit-team/junit-framework/blob/main/junit-jupiter-api/src/main/java/org/junit/jupiter/api/Disabled.java)`** annotation for tests when a reference implementation is being deployed. Further details on this release may be found in the [release notes](https://github.com/jakartaee/agentic-ai/releases/tag/1.0.0-M1).

The [Eclipse Starter for Jakarta EE](https://start.jakarta.ee/) has been formally updated to support Jakarta EE 11. Supporting runtimes are Azul Payara, GlassFish and Open Liberty. Developers are encouraged to generate applications and report any feedback on the GitHub [list of issues](https://github.com/eclipse-ee4j/starter/issues).

#### GraalVM

The [release](https://medium.com/graalvm/graalvm-25-2-is-here-600a9ae53f83) of [GraalvM](https://www.graalvm.org/) 25.2 ships with notable changes such as: a new [Graal Script Agent](https://github.com/graalvm/graal-script-agent/blob/main/README.md), an early-preview Java library, that turn natural-language requests into sandboxed application plugins that run locally; support for G1 GC on Native Image for all platforms, including WindowsOS; and Java Vector API enabled by default. More details on this release may be found in the [release notes](https://www.graalvm.org/release-notes/25.2/).

#### TornadoVM

The [release](https://x.com/tornadovm/status/2082056257070895598) of [GPULlama3.java](https://github.com/beehive-lab/GPULlama3.java/blob/main/README.md) 1.0.0, an open-source GPU-accelerated Llama 3 inference project powered by [TornadoVM](https://www.tornadovm.org/), provides bug fixes and new features such as: support for TornadoVM CUDA backend with the accelerated batch prefill from the [Tensor Core MMA](https://www.tornadovm.org/cuda-for-java#tensor-core-mma); a new OpenAI-compatible server that can serve any GPULlama3 model behind HTTP API OpenAI clients; and a new **`[RunMetrics](https://github.com/beehive-lab/GPULlama3.java/blob/main/src/main/java/org/beehive/gpullama3/auxiliary/RunMetrics.java)`** class for improved collection of performance metrics. Further details on this release may be found in the [release notes](https://github.com/beehive-lab/GPULlama3.java/blob/main/CHANGELOG.md).

#### Micronaut

The Micronaut Foundation has [released](https://micronaut.io/2026/07/27/micronaut-framework-5-1-0-release/) version 5.1.0 of the [Micronaut Framework](https://micronaut.io/) based on [Micronaut Core 5.1.10](https://github.com/micronaut-projects/micronaut-core/releases/v5.1.10). This release updates many of the Micronaut modules that include new features such as: a new **`@Property`** annotation, nested within the **`[@Introspected](https://github.com/micronaut-projects/micronaut-core/blob/5.2.x/core/src/main/java/io/micronaut/core/annotation/Introspected.java)`** annotation, for providing sequenced-collection injection, CDI integration hooks and traversal of Kotlin inner class via the [Kotlin Symbolic Processing API](https://kotlinlang.org/docs/ksp-overview.html); and support for [OpenDI](https://github.com/eclipse-ee4j/odi/blob/main/README.md), an Eclipse compatible implementation of CDI Lite, a subset of the full [Contexts and Dependency Injection](https://jakarta.ee/specifications/cdi/4.0/) specification delivered in version 4.0. More details on this release may be found in the [release notes](https://github.com/micronaut-projects/micronaut-platform/releases/tag/v5.1.0).

#### Quarkus

The [release](https://quarkus.io/blog/quarkus-3-38-released/) of [Quarkus](https://quarkus.io/) 3.38.0 delivers bug fixes, dependency upgrades and two new features: support for weight-based memory eviction for the Hibernate [Second Level Cache](https://docs.hibernate.org/stable/core.old/reference/en/html/performance-cache.html) (2LC) cache regions implemented via [Caffeine](https://github.com/ben-manes/caffeine/blob/master/README.md) and [JCache](https://www.jcp.org/en/jsr/detail?id=107); and a new [HTTP Problem](https://quarkus.io/extensions/io.quarkiverse.httpproblem/quarkus-http-problem/) extension that implements RFC-7807, [Problem Details for HTTP APIs](https://datatracker.ietf.org/doc/html/rfc7807), to automatically map exceptions to standardize the HTTP responses from the **`application/problem+json`** endpoint. Further details on this release may be found in the [release notes](https://github.com/quarkusio/quarkus/releases#release-3.38.0).

#### JobRunr

The [release](https://www.jobrunr.io/en/blog/jobrunr-v8.8.0/) of [JobRunr](https://www.jobrunr.io/) 8.8.0 ships with bug fixes and enhancements such as: improved logging when an instance of the **`[BackgroundJobServer](https://github.com/jobrunr/jobrunr/blob/master/core/src/main/java/org/jobrunr/server/BackgroundJobServer.java)`** class encounters a **`[StorageException](https://github.com/jobrunr/jobrunr/blob/master/core/src/main/java/org/jobrunr/storage/StorageException.java)`**; support for Kotlin 2.4; and the ability for Quarkus users to remove the **`[quarkus-smallrye-health](https://central.sonatype.com/artifact/io.quarkus/quarkus-smallrye-health)`** dependency as it is no longer required to run JobRunr with the Quarkus [SmallRye Health](https://quarkus.io/extensions/io.quarkus/quarkus-smallrye-health/) extension. More details on this release may be found in the [release notes](https://github.com/jobrunr/jobrunr/releases/tag/v8.8.0).

#### JDKUpdater

Version 26.0.33+211 of [JDKUpdater](https://github.com/HanSolo/JDK-Updater/blob/main/README.md), a utility that provides developers the ability to keep track of updates related to builds of OpenJDK and GraalVM has been made available this past week. Introduced in mid-March 2024 by [Gerrit Grunwald](https://de.linkedin.com/in/gerritgrunwald), Principal Engineer at Azul, this release delivers an update on the release feature to accommodate the recent changes in [release cadence](https://blogs.oracle.com/java/transitioning-java-to-more-frequent-security-updates) for OpenJDK Critical Patch Updates. Further details on this release may be found in the [release notes](https://github.com/HanSolo/JDK-Updater/releases/tag/26.0.33%2B211).

#### Maven

The *sixth release candidate* of Maven 4.0.0 ships with bug fixes (including resolved issues from RC5), documentation improvements, dependency upgrades, and new features such as: the ability to accept Java module names as an attached **`artifactId`**, even if they differ from a project's **`artifactId`**, to support multi-module projects where more than one artifact may be produced; and an extraction of the **`[maven-executor](https://central.sonatype.com/artifact/org.apache.maven/maven-executor)`** dependency into its own project for improved execution of Maven 3 and Maven 4 projects in **`embedded`** and **`forked`** modes.

Developers should be advised of known compatibility issues and stricter POM validation as detailed in the [release notes](https://github.com/apache/maven/releases/tag/maven-4.0.0-rc-6).

## About the Author

#### **Michael Redlich**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/java-news-roundup-jul27-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。