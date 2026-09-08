---
title: "Does ICANN Open the Door on Identity Theft by Dropping 3rd Level .name Domains Registrations?"
date: 2026-09-09 07:45:38
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "A recent disclosure by software engineer Neil Fraser(https://neil.fraser.name/news/2026/09/03/) has "
source_url: "https://www.infoq.com/news/2026/09/name-domain-drop/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2003-09-26T00:00:00　|　采集：2026-09-09 07:45:38

## 正文

A recent disclosure by software engineer [Neil Fraser](https://neil.fraser.name/news/2026/09/03/) has brought scrutiny to a quiet regulatory change governing the .name top-level domain (TLD). Fraser announced on his personal website that his domain, registered nearly 25 years ago, is scheduled for deletion following approval from the Internet Corporation for Assigned Names and Numbers (ICANN).

The move stems from an ICANN [Registry Services Evaluation Policy request](https://itp.cdn.icann.org/en/files/consensus-policies/rsep-2026013-name-request-15-04-2026-en.pdf) submitted by registry operator Verisign on April 15, 2026. [Under the approved service change](https://itp.cdn.icann.org/en/files/consensus-policies/fessenden-to-kane-2-28-07-2026-en.pdf)(decision taken in late July), Verisign is discontinuing third-level domain registrations, structured as [first.last.name](https://www.infoq.com/news/2026/09/name-domain-drop/first.last.name), citing declining usage and limited registrar support. Operationally, EPP transactions will reject new third-level registrations, and all existing active registrations will be deleted following a minimum 90-day registrar notice period.

Importantly, the change does not decommission the entire .name TLD. Verisign will continue to support standard second-level domain registrations (such as example.name), which have been available since 2004. Existing second-level domains will remain unaffected by the termination.

However, the complete deletion of legacy third-level names directly impacts an estimated 22,000 registrants who adopted the structure when the TLD debuted in 2001 under Global Name Registry. Beyond the immediate disruption to long-running websites, mail servers, and IoT infrastructure, Fraser highlighted severe security ramifications: once third-level records are deleted, the parent second-level domains may become open for public registration. A malicious actor acquiring a released second-level domain could easily configure DNS records to intercept communications, reset passwords, and hijack accounts tied to legacy addresses.

![](https://www.infoq.com/news/2026/09/name-domain-drop/news/2026/09/name-domain-drop/en/resources/1Gemini_Generated_Image_b7xayhb7xayhb7xa-1788842894425.jpeg)*Image Source: Generated with Gemini based on the explanations from https://neil.fraser.name/news/2026/09/03/*

Online technical communities across [Hacker News](https://news.ycombinator.com/item?id=49550772), and [Mastodon](https://infosec.exchange/@jann) reacted with alarm. Commenters heavily criticised both Verisign's filing—which claimed that registrars identified no security, stability, or resiliency concerns—and ICANN's approval of an action that invalidates paid, active domains. Several observers characterised the resulting fallout as identity theft-as-a-service, warning that orphaned email addresses will become prime targets for automated takeover. Engineers on Hacker News noted that the decision sets a damaging precedent for registry stewardship, arguing that Verisign should either freeze existing delegations into perpetual read-only maintenance mode or permanently reserve the associated second-level domains rather than releasing them into the wild.

***Fraser: I'm just one of 22,000 people who will lose their domains. This is going to be fun. Time to lawyer up...***

With registrar deletion notices rolling out, affected domain owners are evaluating whether administrative appeals or legal challenges can compel ICANN and Verisign to offer defensive protections before legacy domains go dark.

## About the Author

#### **Olimpiu Pop**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/name-domain-drop/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。