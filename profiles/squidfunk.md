---
name: @squidfunk-coding-skill
description: "GitHub profile skill from @squidfunk. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Developer-facing tools, especially documentation systems and static-site tooling.
- Products that are opinionated but extensible: “works out of the box,” but with clear escape hatches.
- Infrastructure-heavy utilities with a strong emphasis on performance, build reproducibility, and low maintenance.
- Public projects that double as polished product pages: docs, demos, onboarding, and marketing are treated as part of the software.

## Coding patterns to mirror

- Prefer strictness over convenience. In TypeScript code, expect and preserve:
  - `strict`-style compiler settings
  - `noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`
  - explicit return paths and narrow types
- Keep modules small and purpose-driven. The repos lean toward clear boundaries between build tooling, runtime code, and templates/assets.
- Use existing project conventions for path aliases and layout instead of inventing new import patterns.
- Favor declarative scripts and reproducible workflows over ad hoc commands.
- Write code that is optimized for maintainability and tooling:
  - lintable
  - testable
  - buildable in CI
  - easy to regenerate
- In lower-level code, the preference is for compact, modular implementations with centralized resource management and minimal runtime overhead.
- Documentation quality matters as much as code quality; user-facing behaviors should be explainable from the README or docs structure.

## Product and UI taste

- Strong preference for clean, polished, documentation-centric interfaces.
- Visual presentation is deliberate:
  - centered hero sections
  - prominent screenshots
  - badges and status indicators
  - light/dark aware assets
- The UX goal is “simple to adopt, professional to present.”
- Documentation is not auxiliary; it is part of the product experience.
- The style favors clarity and trust: explicit features, clear compatibility notes, visible support paths, and well-organized onboarding.

## Tech stack clues

- Heavy use of TypeScript for build systems, frontend tooling, and site/theme logic.
- Python remains important, especially around MkDocs-based documentation and packaging.
- Rust is used for newer, performance-oriented infrastructure and static-site tooling.
- C appears in specialized, low-level libraries where control and efficiency matter.
- Terraform/HCL shows up in supporting infrastructure and automation.
- Tooling patterns include:
  - `npm`/`ts-node`/ESLint/Stylelint in the TypeScript ecosystem
  - `pyproject.toml`, `uv.lock`, or `requirements.txt` on Python projects
  - Cargo workspaces for Rust
  - Autotools/Makefiles for portable C
- The overall stack leans toward cross-platform, automation-friendly, and CI-friendly setups.

## When to inspect repos first

- If the task touches docs generation, site building, theming, or markdown rendering.
- If you need to match project structure, import aliases, or build scripts exactly.
- If the change is in a public-facing UI where spacing, hierarchy, and visual polish matter.
- If the code is in a low-level library and performance, memory behavior, or API shape could be sensitive.
- If you’re adding a new CLI, build step, or automation workflow—these repos tend to have strong local conventions.
- If the task is in TypeScript, inspect first for lint rules and strict compiler assumptions before writing new code.

## Repo Map

- [zensical/zensical](https://github.com/zensical/zensical): A modern static site generator by the Material for MkDocs team (5046 stars, Rust, topics: documentation, static-site-generator)
- [zensical/studio](https://github.com/zensical/studio): Zensical Studio – Refactor documentation like code (20 stars, TypeScript, topics: documentation, refactoring)
- [squidfunk/mkdocs-material](https://github.com/squidfunk/mkdocs-material): Documentation that simply works (26993 stars, Python, topics: mkdocs, theme, documentation, material-design)
- [zensical/zrx](https://github.com/zensical/zrx): Zen Reactive Extensions (68 stars, Rust, topics: framework, reactive-streams)
- [zensical/mono](https://github.com/zensical/mono): Mono repository automation toolkit (30 stars, Rust)
- [squidfunk/protobluff](https://github.com/squidfunk/protobluff): A modular Protocol Buffers implementation for C (100 stars, C, topics: protocol-buffers, lightweight)
- [squidfunk/terraform-aws-cognito-auth](https://github.com/squidfunk/terraform-aws-cognito-auth): [UNMAINTAINED] Serverless Authentication as a Service (AaaS) provider built on top of AWS Cognito (298 stars, TypeScript, topics: aws, terraform, cognito, identity-provider)
- [squidfunk/terraform-aws-api-gateway-enable-cors](https://github.com/squidfunk/terraform-aws-api-gateway-enable-cors): Easily add an OPTIONS method to an API Gateway resource to enable CORS (79 stars, HCL, topics: aws, terraform, api-gateway, cors)
- [squidfunk/iframe-worker](https://github.com/squidfunk/iframe-worker): A tiny WebWorker shim for file:// (56 stars, TypeScript, topics: webworker, iframe, shim)
- [squidfunk/karma-viewport](https://github.com/squidfunk/karma-viewport): A Karma plugin for testing responsive features and layout (54 stars, TypeScript, topics: karma, karma-plugin, responsive, testing)
- [squidfunk/terraform-aws-github-ci](https://github.com/squidfunk/terraform-aws-github-ci): [DEPRECATED] Serverless CI for GitHub using AWS CodeBuild with PR and status support (51 stars, HCL, topics: aws, terraform, github, webhook)
- [squidfunk/generic-linked-in-driver](https://github.com/squidfunk/generic-linked-in-driver): A generic non-blocking linked-in driver for interfacing Erlang and C (47 stars, C, topics: erlang, ffi, driver)
- [squidfunk/isotopes](https://github.com/squidfunk/isotopes): Serverless and typed object store built on top of AWS SimpleDB (22 stars, TypeScript, topics: aws, simpledb, client, database)
- [squidfunk/mono](https://github.com/squidfunk/mono): Mono repository utilities (18 stars, TypeScript)
- [squidfunk/pyo3-debug-vscode](https://github.com/squidfunk/pyo3-debug-vscode): Debugging PyO3 with Visual Studio Code (16 stars, Python)
- [squidfunk/gpb-bindings](https://github.com/squidfunk/gpb-bindings): Generate bindings for gpb, Protocol Buffers for Erlang (16 stars, Erlang, topics: protocol-buffers)

## How To Use This Skill

- Reach for this skill when the user asks for Martin Donath's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
