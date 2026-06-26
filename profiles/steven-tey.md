---
name: @steven-tey-coding-skill
description: "GitHub profile skill from @steven-tey. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Shipping-first, productized web apps rather than generic libraries: link attribution, analytics, discovery/gallery, editor tooling, and AI-powered experiences.
- Most repos are built to be demoable and deployable out of the box: one-click deploy buttons, local setup steps, seed scripts, and clear environment-variable docs.
- Strong bias toward reusable platforms and companion packages: main app + SDKs + examples + docs + UI/config packages.
- Common themes: content creation, link tracking, analytics dashboards, AI-assisted workflows, and public-facing marketing surfaces.

## Coding patterns to mirror

- Prefer TypeScript everywhere; keep APIs and internal packages typed and composable.
- Use monorepo structure when the project has multiple surfaces:
  - `apps/*` for products
  - `packages/*` for shared UI, utils, configs, SDKs
  - Turborepo/pnpm workspace orchestration
- Keep scripts explicit and practical: `dev`, `build`, `lint`, `format`, `test`, `clean`, plus repo-specific helpers like seed/publish commands.
- Follow a “shared config first” approach:
  - shared Tailwind preset/config
  - shared UI/util packages
  - shared formatter/lint tooling
- Favor framework-native patterns in Next.js:
  - App Router
  - Server Actions / Form Actions where possible
  - Edge functions when useful
  - minimize extra API layers if the framework can handle it
- Keep README and repo tooling unusually polished; documentation is treated as part of the product.
- Use conventional, predictable package boundaries and imports; don’t scatter ad hoc utility code across feature files if it can live in a shared module.

## Product and UI taste

- Taste leans clean, opinionated, and highly polished rather than barebones.
- UI favors:
  - utility-first Tailwind styling
  - motion/animation for delight
  - component libraries/primitives like Radix
  - strong typography and marketing-friendly presentation
- Public-facing apps often have strong launch/landing-page polish:
  - centered hero sections
  - badges, deploy buttons, and concise value props
  - docs/marketing pages that feel integrated with the app
- Product surfaces are designed to feel modern and “Vercel-native”: fast, minimal, and easy to deploy.
- Novel suggests a preference for editorial, Notion-like UX; Precedent suggests reusable, opinionated UI building blocks; Dub suggests analytics-heavy, professional SaaS interfaces.

## Tech stack clues

- Next.js is the default web framework.
- TypeScript is the language standard.
- Tailwind CSS is the primary styling system.
- Frequent adjacent tools:
  - Prisma
  - Vercel platform features
  - Turborepo
  - pnpm
  - NextAuth / Clerk for auth depending on project
  - Radix UI / Headless UI for primitives
  - Framer Motion for animation
  - Vercel AI SDK / OpenAI in AI features
  - Upstash, Tinybird, PlanetScale, Resend, Stripe, Postgres
- README/setup patterns suggest familiarity with open-core SaaS, SDK distribution, and docs-driven product development.

## When to inspect repos first

- Before changing anything in:
  - shared UI/config packages
  - auth flows
  - analytics or attribution logic
  - deployment/build scripts
  - package publishing/versioning
  - Tailwind/theme tokens or motion styles
- Before adding a new feature that might belong in a shared package instead of a single app.
- Before refactoring Next.js routing/data fetching, since these repos use a mix of App Router, Server Actions, and framework-specific conventions.
- Before writing docs or onboarding copy, because their repos are unusually intentional about README structure, setup flow, and deploy instructions.

## Repo Map

- [dubinc/dub](https://github.com/dubinc/dub): The modern link attribution platform. Loved by world-class marketing teams like Framer, Perplexity, Superhuman, Twilio, Buffer and more. (23732 stars, TypeScript, topics: vercel, nextjs, upstash, tinybird)
- [dubinc/oss-gallery](https://github.com/dubinc/oss-gallery): A crowdsourced list of the best open-source projects on the internet. Built with the Dub TypeScript SDK. (1343 stars, TypeScript, topics: awesome-list, dub, list, open-source)
- [dubinc/dub-ts](https://github.com/dubinc/dub-ts): Official Dub Typescript SDK (65 stars, TypeScript, topics: api, dub, node, npm)
- [dubinc/docs](https://github.com/dubinc/docs): Official docs for Dub.co (71 stars, MDX, topics: docs, documentation, dub, mintlify)
- [dubinc/examples](https://github.com/dubinc/examples): Examples applications that you can build with Dub's link and analytics infrastructure. (16 stars, TypeScript)
- [dubinc/analytics](https://github.com/dubinc/analytics): Client-side JavaScript SDK for tracking conversion analytics with Dub (12 stars, TypeScript)
- [steven-tey/novel](https://github.com/steven-tey/novel): Notion-style WYSIWYG editor with AI-powered autocompletion. (16343 stars, TypeScript, topics: chatgpt, notion, openai, prosemirror)
- [steven-tey/precedent](https://github.com/steven-tey/precedent): An opinionated collection of components, hooks, and utilities for your Next.js project. (5100 stars, TypeScript, topics: authjs, eslint, framer-motion, nextauth)
- [steven-tey/chathn](https://github.com/steven-tey/chathn): Chat with Hacker News using natural language. Built with OpenAI Functions and Vercel AI SDK. (1179 stars, TypeScript, topics: ai, ai-sdk, edge-functions, hacker-news)
- [steven-tey/extrapolate](https://github.com/steven-tey/extrapolate): Age transformation AI app powered by Next.js, Vercel, Replicate, Upstash, and Cloudflare R2 + Workers. (696 stars, TypeScript, topics: cloudflare-r2, nextjs, replicate, upstash)
- [steven-tey/weathergpt](https://github.com/steven-tey/weathergpt): ChatGPT Plugin starter template built with Next.js 13 App Router, Edge Functions, and Vercel (340 stars, TypeScript, topics: chatgpt, chatgpt-plugin, chatgpt-plugins, nextjs)
- [steven-tey/spirals](https://github.com/steven-tey/spirals): Generate beautiful AI spiral art with one click. Powered by Vercel and Replicate. (306 stars, TypeScript)
- [steven-tey/og](https://github.com/steven-tey/og): Display headlines directly inside your news article's OG images. (202 stars, TypeScript, topics: twitter, vercel, vercel-og)
- [steven-tey/shooketh](https://github.com/steven-tey/shooketh): An AI bot built with the Vercel AI SDK, OpenAI gpt-3.5-turbo, and fine-tuned on Shakespeare's literary works. (130 stars, TypeScript)
- [steven-tey/novella](https://github.com/steven-tey/novella): Example application using the Novel Editor. (86 stars, TypeScript)
- [steven-tey/prisma-server-actions](https://github.com/steven-tey/prisma-server-actions): Demo app showing how you can use Prisma in Next.js Server Actions (31 stars, TypeScript)
- [steven-tey/moviebot](https://github.com/steven-tey/moviebot): Code repository for Moviebot – an NLP-powered movie recommendation chatbot, written in Python, HTML/CSS and JavaScript & hosted on Vercel + AWS Lambda. (23 stars, Python)
- [steven-tey/steventey.com](https://github.com/steven-tey/steventey.com) (18 stars, TypeScript)

## How To Use This Skill

- Reach for this skill when the user asks for Steven Tey's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
