---
title: "Meta 开源 Astryx：面向 Agent 的 React 设计系统"
date: 2026-09-23 07:55:35
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "Meta 最近宣布推出 Astryx(https://astryx.atmeta.com/blog/introducing-astryx) Beta，一款由 Meta 内部经过八年开发而成的开源 Re"
source_url: "https://www.infoq.cn/article/He6bUhlNIuPEa99GGRYC?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-09-22　|　采集：2026-09-23 07:55:35

## 正文

Meta 最近宣布推出 [Astryx](https://astryx.atmeta.com/blog/introducing-astryx) Beta，一款由 Meta 内部经过八年开发而成的开源 React 设计系统。Astryx 基于 React 19 和 StyleX 构建，提供 150 多个具备可访问性的 UI 组件、可定制的 CSS Design Token，以及专门的 CLI 和 MCP 工具链，既面向工程师，也面向 AI Agent。

Meta 的设计系统将组件的行为和可访问性合规与视觉表现解耦。后者通过集中的 Design Token 层进行定义，例如颜色调色板、字体层级和边框圆角等。

在底层，Astryx 使用 Meta 的 StyleX 编写组件样式。[StyleX](https://stylexjs.com/) 是 Meta 推出的一个[构建时 CSS-in-JS 编译器，可以生成确定性、无冲突的原子化 CSS](https://www.infoq.com/news/2021/10/facebook-css-js-stylex/?_gl=1*p0hob8*_up*MQ..*_ga*MjMyNTQ5MDIzLjE3ODk4Mjk4MDQ.*_ga_VMVPD4D2JY*czE3ODk4Mjk4MDIkbzEkZzAkdDE3ODk4Mjk4MDIkajYwJGwwJGgw)。组件提供 `xstyle` 属性，用于在编译时获得类型检查的 StyleX 样式支持：

```
import * as stylex from '@stylexjs/stylex';
```

复制代码

核心软件包 [@astryxdesign/core](https://github.com/facebook/astryx) 在发布类型化 React 组件的同时，也提供预编译的 CSS 文件。组件还原生支持 `className`，因此团队可以与 [Tailwind](https://tailwindcss.com/)、CSS Modules 或普通样式表无缝协作：

```
<Card className="shadow-lg hover:shadow-xl transition-shadow">
```

复制代码

使用预编译 CSS 和 `className` 无需额外配置编译器。

Astryx 的 CLI 提供了 `swizzle` 命令，允许开发者将组件的完整源代码导出到自己的代码仓库中。开发者可以通过 Design Token 及相关 class 来定制组件的外观。标准的 React 组合模式则允许开发者定制单个组件的行为，或者定制某个组件所有实例的行为，例如使用组件 Wrapper 模式。不过，如果定制需求需要访问未对外暴露的内部实现，例如私有状态、DOM 结构或无法访问的事件监听器。代码导出功能虽然提供了更高的定制灵活性，但也意味着开发者需要自行负责这些代码，以及由此产生的维护工作。

Astryx 表示，其通过 [CLI](https://github.com/facebook/astryx/tree/main/packages/cli)（`@astryxdesign/cli`）和一个 MCP Endpoint 原生支持 AI 工作流。

Reddit 上的一些开发者对 Meta 赞助的框架能否获得长期维护，以及其治理方式[表示担忧](https://www.reddit.com/r/DigitalEscapeTools/comments/1umn1rz/do_you_trust_metas_opensource_software/)。另一些开发者已经开始将其 Token 架构和组件规范移植到其他 UI Runtime，例如 [Svelte 5](https://rohitk06.in/blogs/announcing-astryx-svelte) 和 [Flutter](https://pub.dev/packages/astryx_ui)。

Astryx 采用 [MIT License](https://github.com/facebook/astryx/blob/main/LICENSE) 发布，并要求使用 React 19 或更高版本。

查看英文原文：[Meta Open-Sources Astryx, its Agent-Ready React Design System](https://www.infoq.com/news/2026/09/meta-astryx-design-system/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/He6bUhlNIuPEa99GGRYC?utm_source=rss&utm_medium=article）。