---
name: @ncdai-coding-skill
description: "GitHub profile skill from @ncdai. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Polished public-facing products with a strong visual identity: portfolio sites, component registries, and small OSS utilities.
- Interfaces that feel production-ready, not just functional: animated, responsive, dark-mode aware, and visually refined.
- Reusable UI primitives and component libraries, especially ones meant to be distributed through shadcn-style workflows or package registries.
- Tools that solve a narrow problem very well, like an iOS-like wheel picker or a dark-mode extension.
- Projects that are as much about presentation and documentation as code: live demos, screenshots, badges, docs, and clean README structure.

## Coding patterns to mirror

- Prefer strict TypeScript and Next.js-friendly structure:
  - `strict: true`, `noEmit`, bundler-style module resolution, `@/*` path alias.
  - Keep code compatible with modern React/Next conventions.
- Use monorepo boundaries when the project needs them:
  - `apps/` for the site/demo, `packages/` for reusable libraries, and Turborepo-style task orchestration.
- Keep components composable and registry-friendly:
  - Unstyled or lightly styled primitives when the goal is reuse.
  - APIs that are easy to document, preview, and publish.
- Treat motion and interaction as first-class code:
  - Smooth inertia, drag/scroll support, keyboard navigation, type-ahead search, looped behavior.
- Build with automation in mind:
  - Scripts for build, validate, generate assets, capture screenshots, and registry output.
  - Use small dedicated scripts rather than monolithic build logic.
- Write code and metadata that are easy to ship:
  - Package manifests, README badges, changelogs, and validation steps are part of the product.
- Favor clear naming and straightforward structure over clever abstractions.

## Product and UI taste

- Strong bias toward clean, modern, "pixel-perfect" UI.
- Light/dark theme parity is expected, not optional.
- Motion should feel native and restrained: smooth transitions, inertia, and tactile feedback without visual noise.
- Visual polish matters at the edges:
  - crisp screenshots,
  - deliberate spacing,
  - readable code blocks,
  - nice empty states,
  - thoughtful docs pages.
- They seem to like apps that are SEO-aware, shareable, and installable:
  - JSON-LD, sitemap/robots, OG images, RSS, PWA.
- The README and landing page are treated like product surfaces:
  - concise value prop,
  - live demo,
  - badges,
  - sponsors/credits,
  - clear contribution path.

## Tech stack clues

- Core stack signal:
  - Next.js 16
  - React
  - TypeScript
  - Tailwind CSS v4
  - shadcn/ui
- Motion/interaction and UI tooling:
  - motion libraries
  - `@base-ui/react`
  - `class-variance-authority`
  - icon sets from multiple providers
- Content and distribution:
  - MDX
  - shadcn registry / CLI
  - dynamic OG generation
  - AI-readable endpoints like `llms.txt`
- Package/build ecosystem:
  - pnpm
  - Turborepo
  - Bun for scripts in at least one repo
  - Vitest, ESLint, Prettier, Husky, lint-staged
- Distribution mindset:
  - public demos, npm packages, registry artifacts, and docs sites all matter.

## When to inspect repos first

Inspect their repos before coding if the task touches any of these:

- A reusable component API, especially if it should be shadcn-compatible or registry-ready.
- Gesture-heavy or animated behavior:
  - scrolling,
  - inertia,
  - drag,
  - infinite looping,
  - keyboard interaction.
- Site architecture for a public-facing Next.js app:
  - content routing,
  - MDX,
  - metadata,
  - OG images,
  - feeds,
  - robots/sitemap.
- Monorepo task wiring:
  - build pipelines,
  - package boundaries,
  - release scripts,
  - generated artifacts.
- UI polish decisions:
  - theme tokens,
  - spacing,
  - motion timing,
  - screenshot-worthy layout details.
- Anything that will be documented or published:
  - check README patterns, scripts, and validation flow first, because they usually encode the intended workflow.

## Repo Map

- [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com): A pixel-perfect dev portfolio and shadcn registry. (2063 stars, TypeScript, topics: nextjs, shadcn-ui, tailwindcss, motion)
- [ncdai/react-wheel-picker](https://github.com/ncdai/react-wheel-picker): iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. / Backed by Vercel OSS Program (738 stars, TypeScript, topics: react, picker-component, wheelpicker)
- [ncdai/zadark](https://github.com/ncdai/zadark): ZaDark is an extension that helps you enable Dark Mode for Zalo PC and Web. ZaDark is available on Windows, macOS, Chrome, Safari, Edge and Firefox. (182 stars, JavaScript, topics: chrome-extension, macos, windows, dark-theme)
- [ncdai/shadcn-brand](https://github.com/ncdai/shadcn-brand): shadcn/brand is brand assets for shadcn/ui. (2 stars, TypeScript)
- [ncdai/cloudflare-add-multiple-sites](https://github.com/ncdai/cloudflare-add-multiple-sites): To add multiple sites to Cloudflare at once and more efficiently, you can do so via the Cloudflare API. (2 stars, Shell)
- [ncdai/ncdai](https://github.com/ncdai/ncdai) (1 stars)
- [ncdai/ltudjava-summer2020-hibernate](https://github.com/ncdai/ltudjava-summer2020-hibernate): 18120113 - QuanLySinhVien (1 stars, Java)
- [ncdai/nodejs-webpack-es6](https://github.com/ncdai/nodejs-webpack-es6): Set up project with NodeJS, Webpack, ES2015 (1 stars, JavaScript)
- [ncdai/appchat-nodejs-socketio](https://github.com/ncdai/appchat-nodejs-socketio): NodeJS + SocketIO = App Chat (1 stars, JavaScript)
- [ncdai/meteor-react-notes-app](https://github.com/ncdai/meteor-react-notes-app): Meteor React notesApp (1 stars, JavaScript)
- [ncdai/skills](https://github.com/ncdai/skills) (0 stars)
- [ncdai/.opn](https://github.com/ncdai/.opn): Open-source bio page (0 stars)

## How To Use This Skill

- Reach for this skill when the user asks for Chanh Dai's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
