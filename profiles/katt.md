---
name: @KATT-coding-skill
description: "GitHub profile skill from @KATT. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Type-first developer tools and libraries, especially around APIs, validation, and framework integration.
- Small, composable primitives that remove boilerplate: tRPC for end-to-end typesafe APIs, `envsafe` for runtime env validation, `next-router-query` for better router ergonomics.
- Opinionated but broadly reusable packages and starters: monorepo packages, example apps, workshop repos, and "kitchen sink" demos that show the whole integration surface.
- Public APIs that aim for **"move fast and break nothing"**: ergonomics matter, but correctness and type safety come first.

## Coding patterns to mirror

- Prefer **TypeScript everywhere** and design around inference rather than manual annotation.
- Keep runtime behavior minimal and predictable; avoid adding dependencies unless there is clear leverage.
- Favor **strict settings** and explicit boundaries:
  - strict TS configs
  - no unused locals/params
  - no implicit returns / fallthroughs in smaller libs
  - ESM-first packages in newer work
- Use monorepo-friendly structure and aliasing for clear package boundaries:
  - `packages/*`, `examples/*`, `scripts/*`
  - path aliases like `@trpc/server`, `~/*`
- Make docs and examples part of the product:
  - README-first communication
  - runnable starter repos
  - copy-pastable usage snippets
- Keep APIs compact and chainable when possible; prefer small helpers over large abstractions.
- Name things plainly and practically. The tone is "developer utility," not "framework magic."

## Product and UI taste

- The UI taste appears **clean, practical, and demo-oriented** rather than decorative.
- README and landing-page assets are polished but restrained: centered hero content, clear value statements, badges, screenshots/gifs, and immediate examples.
- The preferred experience is "easy to understand in one glance":
  - short feature bullets
  - obvious quickstart
  - visible proof of value
- For app UI, expect functional defaults and framework-native styling over bespoke design systems unless the repo clearly needs otherwise.
- Good defaults matter more than visual flourish.

## Tech stack clues

- Heavy TypeScript focus, with newer repos using modern TS/Node baselines.
- Common stack signals across repos:
  - **tRPC**
  - **Next.js**
  - **Prisma**
  - **React**
  - **Zod**
  - **TanStack React Query**
  - **Vitest**
  - **Playwright**
  - **ESLint + Prettier**
  - **pnpm**
  - **Turbo / Lerna** in monorepos
- Older library work used `tsdx`; newer repos lean into modern toolchains and explicit scripts.
- Packages are often built for both library consumption and example-driven learning, so tests, types, and docs are all first-class.

## When to inspect repos first

Inspect the repo before editing when you're touching:

- Public API surface, especially anything exported from a package root.
- Type inference, generics, conditional types, or runtime validation behavior.
- Monorepo wiring: package scripts, workspace config, path aliases, build/test pipelines.
- Example apps or starter flows, since those are often part of the product story.
- Docs/README content, because wording and code samples are treated as part of the implementation.
- Any env/config/runtime boundary, where this author tends to prefer strict validation and explicit behavior.
- UI changes in starter apps, to match their preference for simple, clean, demonstration-friendly interfaces.

## Repo Map

- [trpc/trpc](https://github.com/trpc/trpc): Move Fast and Break Nothing. End-to-end typesafe APIs made easy. (40365 stars, TypeScript, topics: typescript, api, nextjs, prisma)
- [trpc/examples-next-prisma-starter](https://github.com/trpc/examples-next-prisma-starter): tRPC starter repo with E2E-testing (789 stars, TypeScript, topics: nextjs, starter, trpc, typescript)
- [trpc/examples-kitchen-sink](https://github.com/trpc/examples-kitchen-sink): tRPC Kitchen Sink (114 stars, TypeScript, topics: trpc, kitchen-sink)
- [KATT/envsafe](https://github.com/KATT/envsafe): Makes sure you don't accidentally deploy apps with missing or invalid environment variables. (805 stars, TypeScript, topics: environment-variables, env, nodejs, react)
- [trpc/examples-next-prisma-websockets-starter](https://github.com/trpc/examples-next-prisma-websockets-starter): tRPC Next.js WebSocket Starter (481 stars, TypeScript)
- [trpc/tupleson](https://github.com/trpc/tupleson): Your hackable JSON serializer/deserializer (80 stars, TypeScript)
- [KATT/shop](https://github.com/KATT/shop): Full-stack React/Prisma/TS/GraphQL E-Commerce Example (385 stars, TypeScript, topics: react, typescript, graphql, prisma)
- [KATT/typescript.careers](https://github.com/KATT/typescript.careers) (41 stars, TypeScript)
- [KATT/next-router-query](https://github.com/KATT/next-router-query): Drop-in alternative of `useRouter().query` that tries it's best to get the query params on the first mount. (39 stars, TypeScript, topics: nextjs, router, query, search)
- [KATT/trpc-ai-playground](https://github.com/KATT/trpc-ai-playground) (23 stars, TypeScript)
- [KATT/graphql-workshop](https://github.com/KATT/graphql-workshop): GraphQL Node.js Workshop: Create an API Gateway (21 stars, JavaScript, topics: graphql, react, jest)
- [KATT/trpc-big-monorepo-repo-demo](https://github.com/KATT/trpc-big-monorepo-repo-demo): demo of good perf with tRPC + huge monorepo (20 stars, TypeScript)
- [KATT/options-curry](https://github.com/KATT/options-curry): TypeScript Options-object Currying (13 stars, TypeScript, topics: typescript, options-object, currying, options)
- [KATT/next-with-apollo-airbnb-auth0-graphcool](https://github.com/KATT/next-with-apollo-airbnb-auth0-graphcool): Server-side rendered & authed requests with GraphQL (13 stars, JavaScript)
- [KATT/react-server-action-useActionState-useFormState-issues](https://github.com/KATT/react-server-action-useActionState-useFormState-issues): Just a repo showcasing some issues with the design of Server Actions / `useActionState` /`useFormState()` (12 stars, TypeScript)
- [KATT/next-ssr-form](https://github.com/KATT/next-ssr-form): next-ssr-form (12 stars, TypeScript)
- [KATT/use-is-typing](https://github.com/KATT/use-is-typing): ... React Hook for typing indicator (11 stars, TypeScript)

## How To Use This Skill

- Reach for this skill when the user asks for Alex / KATT's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
