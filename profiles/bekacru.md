---
name: @Bekacru-coding-skill
description: "GitHub profile skill from @Bekacru. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Small, reusable TypeScript libraries that expose a narrow core API and then grow through plugins/adapters/examples.
- Framework-agnostic primitives: auth, fetch, routing, analytics, utilities.
- Monorepos with multiple packages and a strong separation between core logic, adapters, docs, and demos.
- Developer tooling that reduces setup friction: CLI init tools, starter templates, examples, typed wrappers.

## Coding patterns to mirror

- Prefer composable “builder” APIs over large classes or imperative config blobs.
  - Examples: `createEndpoint`, `createRouter`, `createClient`, wrappers around fetch/crypto.
- Keep public APIs explicit and typed end-to-end.
  - Validation is not optional; schemas are part of the surface area, not a bolt-on.
- Favor small, readable modules with one responsibility.
- Use ESM-first TypeScript (`type: "module"`) and modern package tooling.
- Keep runtime logic portable across Bun, Node, browsers, workers, and serverless environments.
- Default to strictness:
  - strict TS settings
  - typecheck in CI
  - lint/format gates
  - dependency and package health checks
- Write docs/examples as first-class code:
  - README examples are practical and copyable
  - API docs often explain behavior with minimal theory
- Comments, when present, are usually there to clarify intent or constraints, not narrate obvious code.

## Product and UI taste

- Minimal, polished presentation over heavy visual complexity.
- Strong preference for clear branding assets and centered hero-style README layouts.
- UI copy tends to be practical and benefit-led:
  - “privacy first”
  - “framework-agnostic”
  - “typed”
  - “minimal config”
- The products look designed for builders, not consumers:
  - compact dashboards
  - direct onboarding
  - documentation-forward landing pages
- Subtle “craft” matters, but not at the expense of clarity or speed.

## Tech stack clues

- TypeScript is the default language across nearly everything.
- Package management and repo orchestration:
  - `pnpm`
  - `turbo`
  - workspace-based monorepos
- Code quality/tooling:
  - `biome` for lint/format
  - `vitest` for tests
  - `knip` for dependency pruning
  - `changesets` / release automation
  - `lefthook` / simple git hooks
- Build tools vary by package:
  - `tsup`
  - `tsdown`
  - sometimes Bun for local dev/examples
- Validation and runtime portability show up often:
  - standard-schema compatible validators
  - Web Crypto
  - support for Node, Bun, browsers, workers, Deno
- Adjacent ecosystem signals:
  - auth/OAuth/passkeys/SSO
  - typed fetch/RPC
  - analytics/privacy-first data collection
  - Next.js and other app-framework integrations

## When to inspect repos first

- Before adding or changing any public API surface, especially if it should feel like the existing builders (`createX` patterns).
- Before touching auth, validation, route handling, or client-server contracts.
- Before introducing new package boundaries, scripts, or build steps in a monorepo.
- Before writing docs or examples for a new feature; the README style is part of the product.
- Before implementing adapters/integrations, to match how portability and typing are handled elsewhere.
- Before refactoring shared utilities, since these repos tend to optimize for small reusable primitives rather than broad abstractions.

## Repo Map

- [better-auth/better-auth](https://github.com/better-auth/better-auth): The most comprehensive authentication framework (28848 stars, TypeScript, topics: authentication, oauth, oauth2, typescript)
- [better-auth/better-fetch](https://github.com/better-auth/better-fetch): Advanced fetch wrapper for TypeScript (1014 stars, TypeScript)
- [better-auth/better-call](https://github.com/better-auth/better-call): a tiny web framework for typescript (794 stars, TypeScript)
- [loglib/loglib](https://github.com/loglib/loglib): Crafted with care, Privacy first, Open source web analytics (418 stars, TypeScript)
- [better-auth/utils](https://github.com/better-auth/utils): A simple typescript API for common auth related operations built on top of Web Crypto API. (228 stars, TypeScript)
- [Bekacru/ts-init](https://github.com/Bekacru/ts-init): A CLI tool to initialize a tsconfig based on Matt Pocock's ts-config cheat sheet. (40 stars, JavaScript)
- [Bekacru/t3-app-better-auth](https://github.com/Bekacru/t3-app-better-auth) (97 stars, TypeScript)
- [Bekacru/nextjs-better-auth-SaaS-stater](https://github.com/Bekacru/nextjs-better-auth-SaaS-stater) (83 stars, TypeScript)
- [Bekacru/better-auth-nextjs-cf-d1-example](https://github.com/Bekacru/better-auth-nextjs-cf-d1-example) (72 stars, TypeScript)
- [Bekacru/my-ts-style-guide](https://github.com/Bekacru/my-ts-style-guide): My typescript style guide (15 stars)
- [Bekacru/better-fetch-docs](https://github.com/Bekacru/better-fetch-docs) (11 stars, TypeScript)
- [Bekacru/bun-telegram-scraper](https://github.com/Bekacru/bun-telegram-scraper) (11 stars, TypeScript)
- [Bekacru/talk-to-yourself](https://github.com/Bekacru/talk-to-yourself): simple site where you can have a conversation with yourself (11 stars, CSS)
- [Bekacru/gebeya-search](https://github.com/Bekacru/gebeya-search) (10 stars, TypeScript)
- [Bekacru/next-org](https://github.com/Bekacru/next-org): Organization and role based access for next-auth (8 stars, TypeScript)
- [Bekacru/u-portfolio](https://github.com/Bekacru/u-portfolio): Ultra minimal one config portfolio starter. (6 stars, TypeScript)
- [Bekacru/codenight-devs](https://github.com/Bekacru/codenight-devs) (5 stars, TypeScript)

## How To Use This Skill

- Reach for this skill when the user asks for Bereket Engida's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
