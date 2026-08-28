---
title: "Cloudflare Wallets Arrives Late to x402, and the Spending Controls Stop at the Payment"
date: 2026-08-28 13:52:47
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Cloudflare announced Cloudflare Wallets(https://blog.cloudflare.com/wallets/) during its Agents Week"
source_url: "https://www.infoq.com/news/2026/08/agent-payment-rails-x402/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-27T09:04:00.000Z　|　采集：2026-08-28 13:52:47

## 正文

Cloudflare announced [Cloudflare Wallets](https://blog.cloudflare.com/wallets/) during its Agents Week, giving AI agents a stablecoin balance and a cloudflare.pay handle to present when paying for APIs, data, and content. Only claiming a handle works today. Funding and payment are described as arriving in the coming months.

The one shipped feature is already drawing complaints. On [Hacker News](https://news.ycombinator.com/item?id=49175461), commenter merek found his company name and several variants taken:

> Without domain validation, what is this user's intention other than fraud/impersonation?

He added that he already has an impersonator running a website under his brand and confusing customers. Commenter nikolay contrasted the rollout with how Meta handled reserved usernames, giving advance notice and an equal start, and drew a conclusion about the product:

> What Cloudflare did is basically push me not to use their offering, because I couldn't get my username.

Payments run on [x402](https://www.x402.org/), which repurposes the HTTP 402 Payment Required status code for machine-native micropayments. Coinbase originated it, and the Linux Foundation now hosts it with around 40 members including Cloudflare, Stripe, Visa, Mastercard, Google, and Amazon Web Services. MCP followed the same path from a single vendor to the Agentic AI Foundation, and for the same reason. A protocol every competitor must implement is worth more to its originator inside a foundation than under its own control.

Foundation hosting settles who owns the specification without settling who competes on it, and Cloudflare arrives late to a field that already includes rails from AWS, Google Cloud, Circle, and the card networks. Its case rests on distribution. Wallets is the buy-side complement to the Monetization Gateway it launched on July 1, which lets sites and APIs charge agents per request over the same rails. Holding both sides means merchants who can charge agents and agents that can pay them, across a network Cloudflare says spans 337 cities and touches roughly one in five websites.

Several commenters read the announcement as being about something other than payments. Commenter eddythompson80 argued that agent identity has so far been trapped inside individual systems, since an identity AWS IAM assigns will not work on an unrelated website, and that OIDC federation is too complex for ordinary sites to adopt. The obstacle was never the mechanism but agreement on a provider:

> Agreeing on the single IdP was the problem, there are like 40.

His conclusion was that Cloudflare has spotted the opening:

> There is a legitimate need for that, and it looks like cloudflare figured if they are that "internet agent identity provider", then there is a lot of power and control over the internet and AI use in general.

Commenter wxw made the platform version of the same point, noting that Durable Objects and Workers are good agent primitives, so a team already using them may as well take the wallet, sandbox, and AI gateway too. Others were less comfortable. Commenter Ycros wrote that Cloudflare keeps inserting itself between everything, drawing a reply from nater5000 that a company building products in its own market with clear demand needs no further explanation.

The part worth reading closely is the control model. Each account holder gets an Account Wallet and can create separate Virtual Wallets per agent, funded from the main account and bounded by three controls the owner sets: an allowance, an allow-list of approved merchants, and a maximum transaction size. The stated intent is that an agent can test and buy services without a human approving each payment, with a hard ceiling on the damage.

*Account Wallets and per-agent Virtual Wallets in the Cloudflare dashboard (Source: [Cloudflare blog](https://blog.cloudflare.com/wallets/))*

Those primitives describe a budget rather than a policy. An allowance is a running total. An allow-list is a set membership test. A maximum transaction size is a per-request bound. Each evaluates the current payment against a fixed limit, and none expresses a relationship between payments.

Rules that platform teams tend to want do express relationships. An agent may only pay a vendor it has already checked against an approved catalog. It may not pay two vendors for the same thing within an hour. It must obtain approval before a first purchase from a new merchant. Each requires reasoning about the sequence rather than the current request.

Concurrency raises a related question. Agents issue actions in parallel, so several payments can be checked against an allowance that none of them has yet reduced, and each passes a ceiling their sum exceeds. Cloudflare has not published how its allowance behaves under concurrent spending, and that is worth establishing before letting an agent transact without per-payment approval.

The pattern is not particular to Cloudflare. Providers in this space ship limits rather than policy languages, and each leaves the composition of those limits to the application above.

For teams evaluating agent payments, the questions are narrow. Where does the spending policy live, at the wallet or in the application? What happens when several agent actions run in parallel against one budget? And whether a provider ships limits or a language, because that determines how much has to be built in-house.

x402 is a working rail, and the question of who governs it is settled. What an agent can spend across a sequence of payments is not.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/agent-payment-rails-x402/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。