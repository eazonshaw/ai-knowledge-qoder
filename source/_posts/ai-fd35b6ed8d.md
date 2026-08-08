---
title: "GitHub Hardens npm and Actions Defaults, Drawing Debate over Delays versus Signing"
date: 2026-08-09 06:18:44
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "GitHub has consolidated the changes(https://github.blog/security/supply-chain-security/disrupting-su"
source_url: "https://www.infoq.com/news/2026/08/github-npm-actions-defaults/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-08T07:45:00.000Z　|　采集：2026-08-09 06:18:44

## 正文

GitHub has [consolidated the changes](https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/) it shipped across npm and GitHub Actions between March and July 2026 to disrupt supply chain attacks. Nothing in the post is new, since every item already landed through the changelog; however, it makes clear how many of these changes alter defaults rather than add options.

Greg Ose, principal product security engineer, and Zachary Steindler, principal software engineer, frame the problem as one without a single fix. These attacks chain several weaknesses together, so GitHub has prioritized the mitigations that break the most impactful links.

For initial compromise, npm now places high-impact accounts into read-only mode for 72 hours when they change their email address or use a 2FA recovery code. On the Actions side, the default behavior of actions/checkout changed so workflows no longer check out untrusted fork code under commonly exploited triggers unless a team explicitly opts out. That change was backported, so it reaches pipelines that pinned an earlier release.

Two further controls target escalation. [Workflow execution policies](https://github.blog/changelog/2026-06-18-control-who-and-what-triggers-github-actions-workflows/) let admins govern who may trigger workflows and which trigger types are permitted, while the Actions cache is now read-only for untrusted triggers, closing the path where an attacker poisons a shared cache entry to reach privileged release workflows.

For credential exfiltration, the guidance is blunt: removing long-lived credentials from the pipeline is the single most effective step, and npm [trusted publishing](https://docs.npmjs.com/trusted-publishers) now supports CircleCI. An Actions network firewall is in technical preview, logging outbound traffic so teams can spot unusual destinations.

On propagation, npm [staged publishing](https://github.blog/changelog/2026-05-22-staged-publishing-and-new-install-time-controls-for-npm/) holds versions until an additional approval and 2FA step completes, and [npm v12](https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/) disables install scripts by default along with dependencies fetched via git or remote URLs. [Dependabot version updates](https://www.infoq.com/news/2026/07/github-dependabot-cooldown/) now wait three days before opening a pull request.

Community reactions on [Hacker News](https://news.ycombinator.com/item?id=49096427) have been sharply divided, centering less on the individual controls than on whether time delays are the right instrument at all.

The 72-hour account freeze drew immediate argument over how the number was chosen. As one commenter, datakan, put it, maintainers travel and take leave, and attacks are often timed for Fridays precisely because nobody is watching:

> There is a big difference between 3 days when someone may be sick or traveling and not looking and 30, which aligns better with 99% of scenarios this may be an issue with. 3 days is absurd. Even password apps with kill switches will default to 7 days.

Others rejected the premise that a single correct value exists. Every longer number invites a longer one, and a month-long publishing block would require an override path that does not currently exist. Commenter Normal\_gaussian proposed the empirical version: plot compromised repositories against the time a maintainer takes to begin resolution, and pick a value just past the inflection point.

A sharper objection came from lrvick, who described buying the expired email domain of a sole npm package author for eight dollars, putting the ability to ship code to roughly 70,000 companies within reach of a password reset:

> 72 hours would not make a difference here.

He extended that into the thread's dominant critique, that the industry keeps building process gates while declining to implement author-side package signing of the kind Linux distributions have had since the 1990s, and that npm has rejected pull requests implementing it, even optionally, for a decade.

The rebuttal came from acdha, who argued that what actually keeps Linux distributions safer is fewer people with push access combined with a time delay, rather than signatures as such:

> What keeps Linux distributions safer is that fewer people are able to push updates and there’s a time delay. The compromises are because people exploit release pipelines, and if your build infrastructure is compromised, it’ll merrily sign the compromised packages as well.

Commenter summarybot framed the cooldown approach as an admission of failure, given that GitHub owns npm and has extensive code analysis capability:

> Introducing a cooldown period seems like the lowest tech solution to a technological problem I have seen in a long while.

The counterargument from insanitybit was operational: cooldowns do not depend on updating detection rules or keeping pace with obfuscation, and they buy scanners time to do their work.

Trusted publishing generated the most practical exchange, prompted by a question about why it helps when an attacker has already compromised the workflow. As commenter pimterry explained:

> Trusted staged publishing helps a lot: you have to independently pwn the workflow \_and\_ then complete a separate 2FA flow as a maintainer. The workflow never sees any keys that can publish independently.

Others added that the attacker must trigger the specific workflow, which leaves a trace on GitHub.

If these reactions are representative, the disagreement is not about whether the individual controls help but about what they substitute for. GitHub has chosen mechanisms that work without maintainer participation, while the mechanism practitioners keep asking for, author-side signing, requires exactly that participation and has been declined for a decade on the grounds that it would deter contributors.

The asymmetry worth noting is that the changes arriving automatically are the moderate ones, while the strongest protections, staged and trusted publishing, remain opt-in and unevenly adopted. The install-script change in npm v12 will also break builds that never audited what runs at install time.

The changes are rolling out now, with GitHub pointing to its changelog for the remainder.

## About the Author

#### **Steef-Jan Wiggers**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/github-npm-actions-defaults/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。