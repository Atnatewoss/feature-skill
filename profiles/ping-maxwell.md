---
name: @ping-maxwell-coding-skill
description: "GitHub profile skill from @ping-maxwell. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Practical developer tools with a clear wedge: auth, collaboration, UI kits, CLI tooling, package safety, and app infrastructure.
- Projects are usually **platform pieces, not one-off apps**:
  - `better-auth` is a framework-agnostic auth core with plugins and adapters.
  - `better-auth-ui` packages ready-made auth screens/components.
  - `better-hub` rethinks GitHub workflows for humans + agents.
  - `better-npm` focuses on registry/proxy/security infrastructure.
- The recurring product shape is: **small surface area, broad integration, opinionated defaults, extensibility through plugins/adapters**.
- They favor shipping things that reduce boilerplate for other developers and provide a clean path from "works out of the box" to "fully customized."

## Coding patterns to mirror

- **Monorepo-first organization**: root orchestration plus many focused packages/apps. Expect code to be split by domain rather than by layered architecture.
- **TypeScript everywhere**, with strictness turned up and minimal tolerance for implicit behavior.
- **Composable APIs** over inheritance-heavy or framework-coupled designs. Better Auth especially implies plugin/adaptor patterns and framework-agnostic boundaries.
- **Explicit tooling and scripts** in `package.json`; they treat build/lint/test/typecheck as first-class product maintenance.
- **Small, named packages** for features and adapters rather than giant catch-all modules.
- **Docs and examples are part of the codebase**. README quality is high and often includes installation, architecture, and feature summaries.
- **Automation-friendly repo hygiene**: linting, formatting, spellcheck, typechecking, changesets/hooks, and CI-oriented structure are common.

## Product and UI taste

- UI is **polished but not flashy**: clean layouts, centered hero sections, strong screenshots, and "ready-to-use" messaging.
- They like **drop-in, configurable components** rather than design systems that require a lot of assembly.
- For app experiences, they prefer:
  - **keyboard-first interactions**
  - **dense but organized information layouts**
  - **clear state and workflow visibility**
  - **AI features that assist, not dominate**
- Visual tone leans toward **professional, minimal, trust-building** interfaces, especially for auth/security/productivity tools.
- Documentation and marketing pages are treated like part of the product, with strong emphasis on clarity, screenshots, and quick-start flows.

## Tech stack clues

- Heavy use of **TypeScript**, with modern module settings:
  - `type: "module"`
  - `moduleResolution: "bundler"` in some repos
  - strict compiler settings
- Common workspace tooling:
  - **pnpm** in Better Auth
  - **bun** in Better Hub / Better NPM
  - **Nx** in Better Auth UI
  - **Turbo** in Better Auth
- Lint/format stacks vary by repo but stay strict:
  - **Biome** in Better Auth / Better Auth UI
  - **oxlint/oxfmt** in Better Hub
- Testing/build infrastructure is serious and repo-specific:
  - `vitest`, `tsc --build`, `changesets`, `lefthook`, `simple-git-hooks`
- UI stack clues:
  - Better Auth UI uses **shadcn/ui** and **HeroUI**
  - Better NPM uses **Next.js**, **Tailwind CSS**, **Cloudflare Workers/Hono**, **Turso**, **Vercel AI SDK**
- Architecture clues:
  - Better Auth emphasizes **adapters, plugins, packages, docs, and tests**
  - Better Hub emphasizes **web app + browser extension + AI assistant + collaboration flows**
  - Better NPM emphasizes **registry proxying, scanning pipelines, and trust/safety**

## When to inspect repos first

Inspect the repo before changing code when:

- You're touching **public APIs**, plugin hooks, adapters, or config surfaces.
- The task crosses package boundaries in a monorepo.
- You need to match an existing **component visual language** or auth flow.
- The repo uses a non-default stack mix (for example: Bun + Nx, or pnpm + Turbo + Biome).
- The change affects **build, release, or deployment workflows**.
- You're adding new docs, examples, or README-facing behavior, since presentation quality is part of the product.

When in doubt, look for:
- existing package boundaries,
- the repo's formatter/linter/typecheck setup,
- similar plugins/components/routes,
- and README examples that show the intended public shape.

## Repo Map

- [better-auth/better-auth](https://github.com/better-auth/better-auth): The most comprehensive authentication framework (28847 stars, TypeScript, topics: authentication, oauth, oauth2, typescript)
- [better-auth/better-hub](https://github.com/better-auth/better-hub): Re-imagining code collaboration for humans and agents (1238 stars, TypeScript)
- [better-auth-ui/better-auth-ui](https://github.com/better-auth-ui/better-auth-ui): Beautiful UI components built for Better Auth. (1656 stars, TypeScript)
- [better-auth/better-npm](https://github.com/better-auth/better-npm): Every npm package release, vetted before it reaches your node_modules. (77 stars, TypeScript)
- [ping-maxwell/better-auth-kit](https://github.com/ping-maxwell/better-auth-kit): A collection of plugins, tools, libraries, examples, and more for Better-Auth. (310 stars, TypeScript, topics: better-auth)
- [ping-maxwell/package-manager-proxy](https://github.com/ping-maxwell/package-manager-proxy): A TypeScript CLI that automatically detects the package manager (pnpm, bun, npm, yarn, etc.) based on the current directory, and then forwards all CLI args to that package manager. (3 stars, JavaScript)
- [ping-maxwell/better-auth-dashboard](https://github.com/ping-maxwell/better-auth-dashboard): A better-Auth powered admin dashboard. (65 stars, TypeScript)
- [ping-maxwell/better-cast](https://github.com/ping-maxwell/better-cast): An open source Youtube alternative. (2 stars, TypeScript)
- [ping-maxwell/remote-ts](https://github.com/ping-maxwell/remote-ts): An easy way to remotely add local typescript files across projects. (2 stars, TypeScript)
- [ping-maxwell/better-hub-cursor-theme](https://github.com/ping-maxwell/better-hub-cursor-theme): Cursor IDE theme for Better Hub (0 stars)
- [ping-maxwell/better-hub-grovbox-theme](https://github.com/ping-maxwell/better-hub-grovbox-theme): Grovbox theme for Better Hub (0 stars)
- [ping-maxwell/better-auth-browser-extension](https://github.com/ping-maxwell/better-auth-browser-extension): BetterAuth browser extension demo (0 stars, TypeScript)

## How To Use This Skill

- Reach for this skill when the user asks for Maxwell's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
