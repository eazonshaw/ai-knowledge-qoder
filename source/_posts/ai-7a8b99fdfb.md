---
title: "Chrome Opens Trial for the Email Verification API: Letting Sites Verify Without Sending Emails"
date: 2026-10-29 09:25:01
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Google has opened a Chrome origin trial(https://developer.chrome.com/blog/email-verification-protoco"
source_url: "https://www.infoq.com/news/2026/10/chrome-email-verification/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-28T09:32:00.000Z　|　采集：2026-10-29 09:25:01

## 正文

Google has opened a Chrome [origin trial](https://developer.chrome.com/blog/email-verification-protocol-origin-trial) for the [Email Verification API](https://github.com/WICG/email-verification), a [WICG proposal](https://wicg.github.io/email-verification/) that lets a browser confirm a visitor owns the email address they typed, without sending a single message. The trial began in Chrome 150 on desktop, with Gmail taking part as the first participating provider.

The idea replaces the familiar one-time code or magic link. Today a user enters an email, leaves for their inbox, copies a code, and returns, a context switch that often loses them. The proposal uses a three-party model where the browser sits between the site (the "verifier") and the mailbox provider (the "issuer"). If the user is already signed in to their provider, the browser quietly fetches a signed token and drops it into the form, and the server validates that token on submission. Google notes the issuer never learns which site made the request.

For developers the front end implementation is fairly straightforward. The email field needs an autocomplete hint, plus a hidden input carrying a session-bound nonce:

```
<input id="email" name="email" type="email" autocomplete="email">
<input type="hidden" name="token" nonce={nonce} autocomplete="email-verification-token">
```

The heavier work sits on the server side, where the token's signature is checked against the provider's keys. Resend's Phil Nash, who wrote a [walkthrough](https://resend.com/blog/email-verification-api) of the flow, published an [npm package](https://github.com/philnash/email-verification-api) and a Next.js example to handle that parsing and validation.

On [Hacker News](https://news.ycombinator.com/item?id=45782192) a developer said there is "literally no worse context switch" than hopping to an inbox mid sign-up, and that email verification had cost them "dozens, maybe hundreds" of registrations they never finished. Another pointed out that verification mail is frequently blocked or filtered to spam, with no visible difference between delayed and lost messages, so removing it is a genuine win.

[One commenter](https://news.ycombinator.com/item?id=45782192) argued the privacy claim is thin:

> Make everything what works complicated.  
> There is no advantage.
> 
> "User privacy is enhanced as the issuer does not learn which web application is making the request as the request is mediated by the browser." Every web application nowadays send you a welcome, onboarding, reminder after the verification. (No user privacy enhancement)
> 
> So we get a new process that solves nothing, but makes everything complicated. (And complicated helps the big and hurt the little in th long run)
> 
> Not verified but feels like a Google draft that closes the web.

Another called the issuer's blindness to the requesting site a "functional liability" rather than a feature. Developers who rely on per-recipient addresses, such as `name+site@example.com`, noted the flow still forces a fallback whenever the provider cannot attest those aliases. Others likened it to [FedCM](https://developer.chrome.com/docs/privacy-sandbox/fedcm/), folding identity primitives into the browser as password managers once did.

Outside Chrome with a signed-in Gmail account, sites drop back to the classic confirmation email, and the established syntax, MX, and SMTP checking services still cover the addresses this API cannot.

Teams already testing should track breaking changes. Chrome's [October update](https://developer.chrome.com/blog/email-verification-october-2026) added Android and third-party origin trials in Chrome 154, renamed the `Sec-Fetch-Dest` issuance value to `email-verification`, and from Chrome 156 returns the email exactly as submitted. The [verifier](https://developer.chrome.com/docs/identity/email-verification/verifier) and [issuer](https://developer.chrome.com/docs/identity/email-verification/issuer) guides track the current contract.

The Email Verification API remains an experimental proposal, best used today as a progressive enhancement while the WICG gathers feedback from sites, providers, and users.

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/10/chrome-email-verification/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。