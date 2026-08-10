---
title: "Java News Roundup: Shenandoah GC, TeamCity CVE, A2A Java SDK, Camel, Gradle, GlassFish, Groovy"
date: 2026-08-11 06:27:34
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "This week's Java roundup for August 3rd, 2026, features news highlighting: JEP 535, Shenandoah GC: G"
source_url: "https://www.infoq.com/news/2026/08/java-news-roundup-aug03-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-10T12:45:00.000Z　|　采集：2026-08-11 06:27:34

## 正文

This week's Java roundup for August 3rd, 2026, features news highlighting: JEP 535, Shenandoah GC: Generational Mode by Default, targeted for JDK 28; point releases of A2A Java SDK, Apache Camel and Gradle; a maintenance release of GlassFish; the fifth milestone release of Groovy 8.0; and a follow-up of the JetBrains TeamCity CVE.

#### OpenJDK

JEP 535, [Shenandoah GC: Generational Mode by Default](https://openjdk.org/jeps/535), has been [elevated](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/WCXBMQ2AIKRK5R4DV6LFML5L4KHMXZSM/) from **Proposed to Target** to **Targeted** for JDK 28. This JEP proposes to designate the Shenandoah Garbage Collector to generational mode by default. The non-generational mode will be deprecated with the intent to remove it in a future release.

#### JDK 27

[Build 34](https://github.com/openjdk/jdk/releases/tag/jdk-27%2B34) of the JDK 27 [early-access builds](https://jdk.java.net/27/) was made available this past week featuring [updates](https://github.com/openjdk/jdk/compare/jdk-27%2B33...jdk-27%2B34) from Build 33 that include fixes for various [issues](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2027%20and%20%22resolved%20in%20build%22%20%3D%20b34%20order%20by%20component%2C%20subcomponent). Further details on this release may be found in the [release notes](https://jdk.java.net/27/release-notes).

[Mark Reinhold](https://www.linkedin.com/in/markreinhold), Chief Architect, Java Platform Group at Oracle, has [announced](https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/EYKJPUAZ4BX4DXD7H4C5ETWJFNQZBFO5/) that, due to [increase in frequency](https://blogs.oracle.com/java/transitioning-java-to-more-frequent-security-updates) of Critical Patch Updates (CPUs), the date for the initial release candidate of JDK 27, originally scheduled for August 6, 2026 will now be August 20, 2026. This aligns with the August 18, 2026 release of the next available CPU. Describing the risks for this change, Reinhold stated:

> This reduces the time available for feedback on RC builds by two weeks, from five weeks and four days to three weeks and four days. That does, at least theoretically, increase risk. Historically, however, since we switched to the six-month cadence in JDK 10 we have needed a second RC build for fewer than half of our releases, and none of the bugs that triggered those builds was reported by an [end user](https://bugs.openjdk.org/browse/JDK-8377509?jql=labels%20%3D%20jdk-rc-fix). This suggests that the risk is tolerable.

Build 34 of JDK 27, released this past week, was originally intended to serve as the build for the initial release candidate.

#### JDK 28

[Build 10](https://github.com/openjdk/jdk/releases/tag/jdk-28%2B10) of the JDK 28 [early-access builds](https://jdk.java.net/28/) was also made available this past week featuring [updates](https://github.com/openjdk/jdk/compare/jdk-28%2B9...jdk-28%2B10) from Build 9 that include fixes for various [issues](https://bugs.openjdk.org/issues/?jql=project%20%3D%20JDK%20AND%20fixversion%20%3D%2028%20and%20%22resolved%20in%20build%22%20%3D%20b10%20order%20by%20component%2C%20subcomponent). More details on this release may be found in the [release notes](https://jdk.java.net/28/release-notes).

#### GlassFish

The release of [GlassFish](https://glassfish.org/) 8.0.4 delivers bug fixes, documentation improvements, dependency upgrades and new features such as: improvements to the **`[AutoDeployer](https://github.com/eclipse-ee4j/glassfish/blob/main/nucleus/deployment/autodeploy/src/main/java/org/glassfish/deployment/autodeploy/AutoDeployer.java)`** and **`[FileArchive](https://github.com/eclipse-ee4j/glassfish/blob/main/nucleus/deployment/common/src/main/java/com/sun/enterprise/deploy/shared/FileArchive.java)`** classes that add protection against files escaping the archive file; and improved diagnostics for unresolved JNDI lookups with the **`<ejb-ref>`** deployment descriptor element.

This release also provides resolutions to [CVE-2026-59889](https://nvd.nist.gov/vuln/detail/CVE-2026-59889) and [CVE-2026-54515](https://nvd.nist.gov/vuln/detail/CVE-2026-54515), both related to deserialization with [Jackson Databind](https://github.com/FasterXML/jackson-databind/blob/3.x/README.md) and a more critical [CVE-2026-12605](https://nvd.nist.gov/vuln/detail/CVE-2026-12605), a vulnerability where an attacker can gain full unauthenticated takeover of the GlassFish domain until the token expires due to a leaked **`gfresttoken`** from the **`[DownloadServlet](https://github.com/eclipse-ee4j/glassfish/blob/main/appserver/admingui/common/src/main/java/org/glassfish/admingui/common/servlet/DownloadServlet.java)`** class if the attacker is authenticated in the Admin Console. Further details on this release may be found in the [release notes](https://github.com/eclipse-ee4j/glassfish/releases/tag/8.0.4).

#### A2A Java SDK

The [release](https://quarkus.io/blog/a2a-java-sdk-1-0-0-final-released/) of [A2A Java SDK](https://github.com/a2aproject/a2a-java/blob/main/README.md) 1.2.0, a Java library that implements the [Agent2Agent Protocol](https://a2aproject.github.io/A2A/latest/) (A2A) for running agentic applications as A2AServers, ships with bug fixes, dependency upgrades and new features such as: the ability for non-CDI integrations to reuse existing authorization flows; and a new **`[TaskStreamLifecycleHook](https://github.com/a2aproject/a2a-java/blob/main/server-common/src/main/java/org/a2aproject/sdk/server/events/TaskStreamLifecycleHook.java)`** interface that allows developers to observe task stream lifecycle events and close all instance of the **`ChildQueue`** inner class, defined in the **`[EventQueue](https://github.com/a2aproject/a2a-java/blob/main/server-common/src/main/java/org/a2aproject/sdk/server/events/EventQueue.java)`** class, for a task on demand via the **`[StreamCloseHandle](https://github.com/a2aproject/a2a-java/blob/main/server-common/src/main/java/org/a2aproject/sdk/server/events/StreamCloseHandle.java)`** interface. More details on this release may be found in the [release notes](https://github.com/a2aproject/a2a-java/releases/tag/v1.2.0.Final).

#### Apache Grails

The *fifth milestone release* of [Apache Grails](https://grails.apache.org/) 8.0.0 provides bug fixes, dependency upgrades and new features such as: a refactor of the **`[GlobalGrailsClassInjectorTransformation](https://github.com/apache/grails-core/blob/8.0.x/grails-core/src/main/groovy/org/grails/compiler/injection/GlobalGrailsClassInjectorTransformation.groovy)`** class that extracts the helpers, provides a clearer flow, an expanded handling of the **`plugin.xml`** file and an isolated-build behavior; and the **`deepSanitize()`** method, defined in the **`[GrailsUtil](https://github.com/apache/grails-core/blob/8.0.x/grails-core/src/main/groovy/grails/util/GrailsUtil.java)`** class, now recognizes the values provided in the **`grails.logging.stackTraceFiltererClass`** and **`grails.exceptionresolver.logFullStackTraceOnFilter`** properties. Further details on this release may be found in the [release notes](https://github.com/apache/grails-core/releases/tag/v8.0.0-M5).

#### Apache Camel

The [release](https://camel.apache.org/blog/2026/08/camel-ai-tools-mcp-422/) of [Apache Camel](https://camel.apache.org/) 4.22.0 introduces two new features that improve integration of AI into Camel: the **`camel-ai-tool`** tool that allows for every AI framework to discover this tool; and the **`camel-mcp-server`** that allows developers to create Camel routes to become an MCP tool that any MCP-compatible client can discover and call. More details on this release may be found in this [blog post](https://camel.apache.org/blog/2026/08/camel-ai-tools-mcp-422/).

#### JetBrains

The [TeamCity](https://www.jetbrains.com/teamcity/) team has provided [additional guidance](https://blog.jetbrains.com/teamcity/2026/08/cve-2026-63077-update/) on the [recent disclosure of CVE-2026-63077](https://blog.jetbrains.com/teamcity/2026/07/cve-2026-63077/), a vulnerability that allows an attacker, with HTTP(S) access to a TeamCity server, to bypass authentication checks and execute arbitrary operating system commands. Since the original disclosure, there have been reports of active exploitations, as well as attempted exploitations, that have targeted unpatched TeamCity servers. Developers are highly encouraged to upgrade to TeamCity 2025.11.7 and 2026.1.3 or, if unable to upgrade, apply this [security patch plugin](https://download.jetbrains.com/teamcity/plugins/internal/fix_CVE_2026_63077.zip?_cl=MTsxOzE7dlNIbVBIckdSRFJKbTlVdjZ3dTFLUFZpMkFQNUM2RzRpWmZaR2ROalY2WjFjNm5BYXdPUDV0bnM2bm9OdWxvdTs=&_gl=1*3nki3r*_gcl_au*MTQ0ODEwMTMwMS4xNzg1NjYxNjc0Li0uLS4xNzg2MjY4NDc0LjE0NjE5MTQ2NDUuMTc4NjI2ODQ3NC4xNzg2MjY4NDc0*FPAU*MTQ0ODEwMTMwMS4xNzg1NjYxNjc0*_ga*ODkzMDk4MDQ4LjE3ODU2NjE2Njk.*_ga_9J976DJZ68*czE3ODYzNjA0ODIkbzYkZzEkdDE3ODYzNjA4OTEkajYwJGwwJGgw), a ZIP file download, for TeamCity 2017.1+.

#### Gradle

The [release](https://github.com/gradle/gradle/releases/tag/v9.7.0) of [Gradle](https://gradle.org/) 9.7.0 delivers notable changes such as: the [Isolated Projects](https://docs.gradle.org/9.7.0/userguide/isolated_projects.html) performance feature has been elevated from experimental to incubating; improvements to the [Configuration Cache](https://docs.gradle.org/9.7.0/userguide/configuration_cache.html) for improved build times by "*caching the result of the configuration phase and reusing it for subsequent builds*;" and improvements to the [security and infrastructure](https://docs.gradle.org/9.7.0/userguide/security.html) that make trusted PGP keys easier to document and signing-key rotations easier to discover. Further details on this release may be found in the [release notes](https://docs.gradle.org/9.7.0/release-notes.html).

## About the Author

#### **Michael Redlich**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/java-news-roundup-aug03-2026/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。