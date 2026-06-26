---
name: @himself65-coding-skill
description: "GitHub profile skill from @himself65. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Infrastructure and developer tools, not toy apps: runtime internals, frameworks, state libraries, VS Code extensions, crawlers, and agent skills.
- Projects usually aim for a "small core, broad surface" shape:
  - `nodejs/node` has a deep runtime core with clear module boundaries.
  - `pmndrs/jotai` centers on minimal primitives with lots of utilities/extensions.
  - `wakujs/waku` emphasizes a minimal framework with a thin public API.
  - `finance-skills` packages repeatable workflows into plugin-like skills.
- Documentation is part of the product. READMEs are long, structured, and often teach the API by example rather than by abstract prose.

## Coding patterns to mirror

- Prefer explicit structure over cleverness:
  - clear folders (`src`, `test`, `docs`, `examples`, `packages`)
  - many small files instead of oversized abstractions
  - separate runtime, tests, and docs cleanly.
- Use strict TypeScript settings when the repo does:
  - `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`
  - build for declaration output in library repos
  - preserve compatibility via `exports`, `typesVersions`, and path aliases.
- Keep APIs minimal and composable:
  - expose primitives first, helpers second
  - favor derived/computed patterns over special-case functions
  - support both sync and async flows when the domain needs it.
- Write examples that double as documentation:
  - short, runnable snippets
  - concrete names like `countAtom`, `doubledCountAtom`, `RootLayout`
  - show the primary use case before edge cases.
- For repo scaffolding and package management, expect pnpm, workspace setups, and modern tooling like ESLint, Prettier, Rollup, Vitest, Playwright, and TypeScript project references.

## Product and UI taste

- Minimal, functional presentation with lightweight branding.
- UI/docs style favors:
  - clean markdown hierarchy
  - badges for CI/version/downloads
  - concise intro copy
  - clear "getting started" paths.
- In framework/docs code, examples tend to be practical and modern:
  - server/client boundaries are called out explicitly
  - composition is preferred over hidden magic
  - the product story centers on "small core, modern features."
- In the finance skills repo, user-facing content is organized as workflows and checklists, suggesting a taste for operational, task-oriented interfaces rather than decorative ones.

## Tech stack clues

- Strong TypeScript bias across newer projects.
- Common stack signals:
  - Node.js / JavaScript / TypeScript
  - React ecosystem
  - pnpm workspaces
  - ESM in newer repos, CommonJS where compatibility matters
  - Rollup for packaging libraries
  - ESLint + Prettier for enforcement
  - Vitest / Playwright for testing
  - project references and declaration builds in monorepos.
- The codebase conventions are often dictated by distribution needs:
  - package `exports` maps
  - dual ESM/CJS entry points where needed
  - generated typings and compatibility layers.
- The "skills" repos show familiarity with plugin-based architectures and agent tooling conventions.

## When to inspect repos first

- Before editing any package entrypoints, exports, or typing setup. These repos often rely on precise build-time and resolution rules.
- Before adding new patterns to public APIs. The style leans minimal and composable, so new abstractions should match existing primitives.
- Before changing docs or examples. README structure is part of the product, and examples are usually canonical.
- Before touching monorepo wiring, test commands, or package scripts. The repo layout and tooling choices are intentional and tightly coupled.
- Before making UI changes in the React projects. The taste is toward minimal docs-led interfaces, not heavy visual systems.

## Repo Map

- [nodejs/node](https://github.com/nodejs/node): Node.js JavaScript runtime (118013 stars, JavaScript, topics: nodejs, javascript, node, js)
- [DimensionDev/Maskbook](https://github.com/DimensionDev/Maskbook): The portal to the new, open Internet. (1576 stars, TypeScript, topics: browser-extension, web3, peer-to-peer, encryption)
- [wakujs/waku](https://github.com/wakujs/waku): The minimal React framework (6333 stars, TypeScript)
- [pmndrs/jotai](https://github.com/pmndrs/jotai): Primitive and flexible state management for React (21208 stars, TypeScript, topics: react, state, management, atomic)
- [himself65/finance-skills](https://github.com/himself65/finance-skills): A collection of skills for AI financial analysis. (2889 stars, JavaScript, topics: claude-code, skills, trading, agent-skills)
- [himself65/trade-skills](https://github.com/himself65/trade-skills): A collection of skills for AI trading. (381 stars)
- [himself65/OpenArkCompiler](https://github.com/himself65/OpenArkCompiler): the source code of OpenArkCompiler(Mirror Repo) (691 stars, C++)
- [himself65/rich-data](https://github.com/himself65/rich-data): Data Viewer (145 stars, TypeScript, topics: react, typescript)
- [himself65/learn-os](https://github.com/himself65/learn-os): 操作系统学习指南 (92 stars, Assembly)
- [himself65/vscode-hentai](https://github.com/himself65/vscode-hentai): [Abandoned] 在vscode上看色图 (76 stars, TypeScript)
- [himself65/npm-download-stat](https://github.com/himself65/npm-download-stat) (64 stars, TypeScript)
- [himself65/affine-minimum](https://github.com/himself65/affine-minimum): build AFFiNE in minimum code and the most modern way (63 stars, TypeScript, topics: affine)
- [himself65/vscode-luogu](https://github.com/himself65/vscode-luogu): Solve Luogu Problems in VSCode (63 stars, TypeScript, topics: vscode-extension, luogu, typescript)
- [himself65/did-zhihu-close-down-today](https://github.com/himself65/did-zhihu-close-down-today): 知乎今天倒闭了吗？ (59 stars, JavaScript)
- [himself65/LianXue](https://github.com/himself65/LianXue): 恋学，全称Cre的恋爱学 (46 stars, JavaScript)
- [himself65/LuoguCrawler](https://github.com/himself65/LuoguCrawler): 一个python爬虫来爬取洛谷各种信息 (42 stars, Python, topics: python3, python, crawler)

## How To Use This Skill

- Reach for this skill when the user asks for Alex Yang's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
