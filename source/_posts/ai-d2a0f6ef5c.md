---
title: "Changesets v3: Bumps Peer Dependents by Patch and Ships ESM Only with an 88% Smaller Install"
date: 2026-09-23 07:55:35
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Changesets, the file based versioning and changelog tool for JavaScript monorepos, has shipped v3.0("
source_url: "https://www.infoq.com/news/2026/09/changesets-v3-release/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-22T06:00:00.000Z　|　采集：2026-09-23 07:55:35

## 正文

Changesets, the file based versioning and changelog tool for JavaScript monorepos, has shipped [v3.0](https://changesets.dev/blog/announcing-changesets-v3), its first major release in the seven years since v2, bringing leaner installs, a rebuilt CLI, and a long awaited change to how peer dependencies are bumped.

The release landed on 11 August 2026, led by a refreshed maintainer team of Mateusz Burzyński, Bjorn Lu and Adam Haglund working through a public [v3 release plan](https://github.com/changesets/changesets/issues/1945). It arrives with a new [documentation site](https://changesets.dev/), a matching [changesets/action v2](https://github.com/changesets/action/releases/tag/v2.0.0), and more than 3M weekly downloads behind it.

All packages are now [ESM only](https://changesets.dev/guide/migration) and require Node.js 22.11 or newer, plus pnpm 10, npm 10.9 or Yarn 4.5.2 as a minimum, with Yarn Classic dropped. The cleanup cut install size from 16.1MB to 2.1MB and dependencies from 95 to 39, and internally the project moved to [tsdown](https://tsdown.dev/), [rolldown](https://rolldown.rs/), vitest and oxfmt. Changelog formatting no longer pulls in its own Prettier copy, instead using [@changesets/format](https://npmx.dev/@changesets/format) to detect prettier, oxfmt, deno or dprint in the project.

The headline behaviour change is that a peer dependency update now gives dependents a [patch bump rather than a major one](https://github.com/changesets/changesets/pull/2090). The old behaviour generated years of complaints, including [issue 1011](https://github.com/changesets/changesets/issues/1011), where a team maintaining a design system monorepo wrote that bumping to a major version "feels like it is sending the wrong message and not honouring semver". Authors shipping a genuine break can still add an explicit major changeset for the dependent.

The maintainers of [Bumpy](https://github.com/dmno-dev/bumpy/blob/main/docs/differences-from-changesets.md), a recently launched competitor, note that v3 "hardcodes the opposite extreme", since every peer change is now assumed non breaking, and that neither version lets you configure propagation. Their comparison still credits v3 with fixing many long standing complaints, while listing gaps such as pnpm [catalog support](https://github.com/changesets/changesets/issues/1707) and an unchanged prerelease design.

The CLI was rebuilt on [cac](https://github.com/changesets/changesets/pull/2009) for argument parsing and [clack prompts](https://github.com/changesets/changesets/pull/1879) for interaction, which also fixes cancelled prompts crashing the process. New `pack` and `publish-plan` commands support the build, pack and publish sequence [recommended by the e18e community](https://e18e.dev/docs/publishing.html), and the v2 action exposes sub actions so teams using npm trusted publishing can narrow publish permissions.

Upgrading is mostly configuration work, documented in the [migration guide](https://changesets.dev/guide/migration). Beyond the install requirements, commands and flags have been renamed:

```
# v2
changeset tag
changeset status --sinceMaster
# v3
changeset git-tag
changeset status --since=main
```

Configuration moves too, with `prettier` replaced by `format` and private packages no longer versioned unless opted back in:

```
{
 "format": "auto",
 "privatePackages": { "version": true, "tag": false }
}
```

`changeset version` now exits with code 1 when there is nothing to release, so as one team's [release playbook](https://github.com/neolution-ch/release-playbook/blob/main/docs/CHANGESETS.md) warns, "any script that runs it unconditionally under set -e will now fail on an empty release".

Against [semantic-release](https://github.com/semantic-release/semantic-release), which infers versions from conventional commits, and [release-it](https://github.com/release-it/release-it), Changesets keeps its distinctive trade off that contributors write release intent into markdown files, and the release stays reviewable as a pull request. v3 does not change that model, it makes it cheaper to install and better behaved around peer dependencies.

Changesets is an MIT licensed tool for managing versioning and changelogs with a focus on monorepos. Contributors declare how their changes should be released, and the CLI turns those declarations into version bumps, changelog entries and registry publishes. v3 is [available now](https://github.com/changesets/changesets/blob/main/packages/cli/CHANGELOG.md), with v2 kept on a [maintenance branch](https://github.com/changesets/changesets/tree/maintenance/v2).

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/changesets-v3-release/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。