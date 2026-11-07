---
title: "Yelp Combines Native and Server-Driven UI for Its AI Assistant"
date: 2026-11-07 09:27:48
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Yelp has adopted a hybrid user interface architecture for its AI Assistant,(https://engineeringblog."
source_url: "https://www.infoq.com/news/2026/11/yelp-assistant-hybrid-ui/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-11-06T14:25:00.000Z　|　采集：2026-11-07 09:27:48

## 正文

Yelp has adopted a [hybrid user interface architecture for its AI Assistant,](https://engineeringblog.yelp.com/2026/09/the-making-of-the-yelp-assistant-ui.html) combining native mobile controls with server-driven conversation rendering to support faster interface changes across platforms. The design uses Yelp’s CHAOS framework, short for Content Hosting Architecture with Optimization Strategies, to render conversation content while keeping navigation and message input native.

Yelp Assistant launched on iOS in 2024 to help users create project requests for local service professionals. It has since expanded to answer questions about businesses and support actions such as reservations, appointments, and food orders.

[CHAOS](https://engineeringblog.yelp.com/2024/03/chaos-yelps-unified-framework-for-server-driven-ui.html) supports web, iOS, and Android. In a server-driven UI architecture, the backend defines what the client displays and how it responds to interactions, so interface changes can reach users without requiring a new mobile app release.

[Daniel Andrade Groppe](https://www.linkedin.com/in/dangro/), Services Tech Lead at Yelp, highlighted,

> Our existing CHAOS framework lacked some of the capabilities the Assistant required, including text input fields and network requests. Extending the framework would have delayed delivery, so we took a hybrid approach: we kept navigation and message input native while using CHAOS to render the conversation area.

![](https://www.infoq.com/news/2026/11/yelp-assistant-hybrid-ui/news/2026/11/yelp-assistant-hybrid-ui/en/resources/1telp-1792327086823.jpeg)

*Yelp Assistant UI: Native and Server-Driven Components (Source: [Yelp Blog Post](https://engineeringblog.yelp.com/2026/09/the-making-of-the-yelp-assistant-ui.html))*

The implementation separates view configuration from conversation data. When a chat starts, the client fetches the CHAOS configuration and initializes a dataset for message events. Subsequent events update the existing view without refetching the configuration. Events represent persistent user and bot messages, temporary typing indicators and quick replies, and links that open destinations. The backend can also send actions to control the interface. For example, when a project request is complete, it can return a message, a link to view matches, and an action that disables chat input. This event-driven design decouples rendering from conversation logic.

Airbnb has documented a related approach through its [Ghost Platform](https://www.infoq.com/news/2021/07/airbnb-server-driven-ui/), which uses server-defined UI across web and mobile clients. Both approaches let teams update supported presentation without requiring every change to ship in a new client release. Yelp’s implementation applies this model to a conversational interface while retaining native controls and client-side handling for message state and interactions.

![](https://www.infoq.com/news/2026/11/yelp-assistant-hybrid-ui/news/2026/11/yelp-assistant-hybrid-ui/en/resources/1Screenshot%202026-10-17%20at%205.54.48%E2%80%AFPM-1792327086823.png)

*Yelp Assistant UI Chat Interaction Flow* *(Source: [Yelp Blog Post](https://engineeringblog.yelp.com/2026/09/the-making-of-the-yelp-assistant-ui.html))*

The client displays submitted messages and a typing indicator, disables input, and sends requests to the backend. On response, it displays the reply and quick replies and re-enables input. Recoverable errors trigger retries, while non-recoverable failures disable input and prompt users to try again later.

Yelp engineers note that the architecture also introduces coordination challenges and engineers needed time to learn both the Assistant and CHAOS, and shared implementations can still behave differently across platforms. Separating view configuration from conversation data enables independent feature development. The architecture also supported reusing the Android Assistant to launch the [Biz Ask Anything](https://engineeringblog.yelp.com/2026/03/building-baa-from-prototype-to-product.html) pilot. According to Yelp, this work laid the groundwork for its next-generation Assistant, which now connects business information with actions users can take.

## About the Author

#### **Leela Kumili**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/11/yelp-assistant-hybrid-ui/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。