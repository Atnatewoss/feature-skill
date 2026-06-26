---
name: @vjeux-coding-skill
description: "GitHub profile skill from @vjeux. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build
- Developer-facing infrastructure with broad impact: UI libraries, app scaffolding, formatters, layout engines, and native bridges.
- Abstractions that make a hard system feel simple: declarative rendering, zero-config setup, opinionated formatting, cross-platform layout.
- Tools that prioritize reuse across environments: web + native, JS + C++, JS + Android/iOS, shared monorepo packages.
- Projects often include an explanatory layer alongside the code: docs, examples, changelogs, contribution guides, and scripts that make the repo self-operating.

## Coding patterns to mirror
- Prefer small, composable modules with clear boundaries over large “frameworky” files.
- Optimize for explicit public APIs and hidden implementation details. The README should explain the mental model; the code should keep the internals out of the way.
- Use repository-level consistency: shared lint/format config, workspace structure, and scripts for build/test/format are part of the design, not an afterthought.
- Expect an “opinionated but flexible” approach: default paths should be easy, with escape hatches for advanced cases.
- When changing behavior, keep the surface area narrow and preserve compatibility across packages/platforms.
- Write code and docs that are easy to review in chunks: clear naming, direct control flow, and incremental changes beat cleverness.

## Product and UI taste
- Strong preference for low-friction onboarding: “run one command,” “get started immediately,” “works without configuration.”
- UI/UX messaging is crisp, explanatory, and pragmatic rather than flashy.
- Documentation is part of the product: README structure, badges, quick-start examples, and clear “why this exists” framing matter.
- Good defaults are a product principle. Even when the project is technical, the user experience should feel guided and opinionated.
- Visual presentation tends to be clean and minimal, with emphasis on clarity, not decoration.

## Tech stack clues
- Heavy JavaScript/TypeScript focus, often in monorepos.
- React and React Native are central reference points.
- Frequent tooling around Babel, ESLint, Prettier, Flow, Jest, and package workspaces.
- Cross-language systems appear too: C++ for performance/platform code, plus native build layers for mobile.
- Repo automation is common: scripts, codegen/build pipelines, formatting enforcement, CI-first maintenance.
- Expect modern package management and repo orchestration rather than ad hoc setup.

## When to inspect repos first
- Before editing, check root config files for the repo’s real rules: formatter, linter, package manager, workspace layout, and build/test scripts.
- Inspect README and contributing docs to match the project’s intent and terminology; these repos often encode product philosophy there.
- If working in a subpackage, look for neighboring package patterns before adding new abstractions.
- For changes touching public behavior, inspect tests and any snapshot/fixture structure first; these codebases often rely on contract-like tests.
- If the repo spans JS + native or JS + compiler/tooling, inspect adjacent language conventions before assuming style from one layer applies to the others.

## Repo Map

- [react/react](https://github.com/react/react): The library for web and native user interfaces. (246147 stars, JavaScript, topics: javascript, react, frontend, declarative)
- [react/react-native](https://github.com/react/react-native): A framework for building native applications using React (126098 stars, C++, topics: android, app-framework, ios, mobile)
- [react/create-react-app](https://github.com/react/create-react-app): Set up a modern web app by running one command. (103320 stars, JavaScript, topics: react, zero-configuration, build-tools)
- [prettier/prettier](https://github.com/prettier/prettier): Prettier is an opinionated code formatter. (52102 stars, JavaScript, topics: formatter, printer, prettier, ast)
- [react/yoga](https://github.com/react/yoga): Yoga is an embeddable layout engine targeting web standards. (18797 stars, C++)
- [facebookarchive/nuclide](https://github.com/facebookarchive/nuclide): An open IDE for web and native mobile development, built on top of Atom (7722 stars, JavaScript)
- [vjeux/mp4-h264-re-encode](https://github.com/vjeux/mp4-h264-re-encode): Pure re-encoding of an mp4-h264 video file with the web APIs as well as in-depth description of how it works. (480 stars, JavaScript, topics: h264, webcodecs)
- [vjeux/jsRayTracer](https://github.com/vjeux/jsRayTracer) (167 stars, JavaScript)
- [vjeux/jParser](https://github.com/vjeux/jParser): Parsing binary files made easy (163 stars, JavaScript)
- [vjeux/video-editor](https://github.com/vjeux/video-editor): Created with CodeSandbox (147 stars, JavaScript)
- [vjeux/soulver.js](https://github.com/vjeux/soulver.js): Rewrite of fantastic Soulver application (143 stars, JavaScript)
- [vjeux/jspp](https://github.com/vjeux/jspp): C++ shaped into Javascript (101 stars, C++)
- [vjeux/GithubLogin](https://github.com/vjeux/GithubLogin): Login to Github API in the browser (58 stars)
- [vjeux/jsWoWModelViewer](https://github.com/vjeux/jsWoWModelViewer): Display World of Warcraft Models (M2) in WebGL (56 stars, JavaScript)
- [vjeux/markdown-react](https://github.com/vjeux/markdown-react): React Render for Standard Markdown (52 stars, JavaScript)
- [vjeux/react-xtags](https://github.com/vjeux/react-xtags): Using React to implement xtags (49 stars, JavaScript)
- [vjeux/react-cli](https://github.com/vjeux/react-cli) (45 stars)
- [vjeux/jsxdom](https://github.com/vjeux/jsxdom): DOM backend for JSX (45 stars, JavaScript)

## How To Use This Skill

- Reach for this skill when the user asks for Christopher Chedeau's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
