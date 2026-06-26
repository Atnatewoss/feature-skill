---
name: @leerob-coding-skill
description: "GitHub profile skill from @leerob. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

Favor crisp, production-ready Next.js experiences with a strong teaching/documentation angle: small templates, reusable starters, and examples that show the "right" way to wire up auth, payments, MDX, deployment, and performance.

## What they tend to build

- Next.js-first projects dominate: blogs, SaaS starters, email clients, media players, auth flows, and deployment examples.
- Many repos are intentionally instructional rather than sprawling product codebases: the README usually explains setup, env vars, local dev, and production deployment clearly.
- Common themes:
  - content sites with MDX
  - SaaS apps with Postgres + Stripe
  - developer tooling / learning resources
  - performance-sensitive utilities and demos
- The work often bridges "simple to clone" with "real-world enough to ship."

## Coding patterns to mirror

- Prefer small, obvious abstractions over clever architecture.
- Use TypeScript and modern Next.js conventions by default:
  - App Router
  - `next dev --turbopack` where applicable
  - `moduleResolution: "bundler"`
  - path aliases like `@/*`
- Keep configuration explicit and minimal:
  - clear `package.json` scripts
  - env setup documented in README
  - direct dependency lists that reflect the product stack
- Build around practical primitives:
  - server actions / middleware for auth and validation
  - Zod for schema validation
  - Drizzle/Postgres for data
  - JWT/cookie auth in starter-style apps
- In large repo contexts like `next.js`, expect strong repo hygiene:
  - many scripts for builds, tests, benchmarks, and evals
  - separate packages/apps
  - dedicated docs and test folders
  - conventions matter more than one-off patterns

## Product and UI taste

- UI tends to be clean, efficient, and demoable rather than ornate.
- Good defaults matter: Tailwind, shadcn/ui, Framer Motion, Lucide icons, and utility-first composition show up often.
- Landing pages and dashboards are designed to communicate quickly:
  - clear pricing / auth / onboarding paths
  - dense but readable layouts
  - polished micro-interactions without heavy visual noise
- "Information dense" and "fast" are recurring goals, especially in apps like the music player and SaaS starter.
- MDX/blog work suggests a preference for readable typography, simple content structure, and developer-friendly publishing.

## Tech stack clues

- Strong Next.js bias, including the latest App Router-era patterns.
- Frequent supporting stack:
  - TypeScript
  - Tailwind CSS
  - MDX
  - Postgres
  - Stripe
  - Drizzle
  - shadcn/ui
  - Vercel Analytics / Vercel deployment
- Other signals:
  - Rust appears for performance-sensitive tooling (`pixo`)
  - Python shows up for occasional game/demo projects
  - Testing and tooling are important in larger repos (`jest`, turborepo/turbo, linting, formatting, eval scripts)

## When to inspect repos first

Inspect the repo before editing when the task touches any of these:

- Next.js App Router conventions or route structure
- auth, middleware, cookies, server actions, or RBAC
- Stripe billing, webhooks, or checkout flows
- Postgres/Drizzle schema changes
- MDX/blog rendering or content pipelines
- build/test/tooling scripts in the monorepo
- performance-sensitive code paths or repo-wide conventions

Also inspect first when working in `vercel/next.js` specifically: it has many established internal patterns, repo-specific scripts, and testing conventions that are easy to miss if you guess.

## Repo Map

- [vercel/next.js](https://github.com/vercel/next.js): The React Framework (140248 stars, JavaScript, topics: react, server-rendering, universal, node)
- [leerob/next-mdx-blog](https://github.com/leerob/next-mdx-blog): Next.js + MDX blog template with Tailwind CSS and TypeScript. (7557 stars, TypeScript, topics: nextjs, mdx, react, blog)
- [nextjs/saas-starter](https://github.com/nextjs/saas-starter): Get started quickly with Next.js, Postgres, Stripe, and shadcn/ui. (15913 stars, TypeScript, topics: nextjs, postgres, shadcn-ui, stripe)
- [leerob/pixo](https://github.com/leerob/pixo): High-performance image compression library written in Rust. (426 stars, Rust)
- [leerob/next-self-host](https://github.com/leerob/next-self-host): An example deploying Next / Postgres / Nginx to a Ubuntu Linux server. (1510 stars, TypeScript)
- [leerob/vim-for-react-devs](https://github.com/leerob/vim-for-react-devs): A bite-sized course to get you quickly productive with Vim. (873 stars, TypeScript, topics: reactjs, vim)
- [leerob/next-music-player](https://github.com/leerob/next-music-player): A blazing fast, information dense media player built with Next.js. (829 stars, TypeScript, topics: nextjs)
- [leerob/next-email-client](https://github.com/leerob/next-email-client): An email client built with the Next.js App Router and Postgres. (723 stars, TypeScript, topics: nextjs, postgres)
- [leerob/fastfeedback](https://github.com/leerob/fastfeedback): Easily add user reviews, feedback, and comments to your website in one line of code. (602 stars, JavaScript)
- [leerob/mastering-nextjs](https://github.com/leerob/mastering-nextjs): A free video course for building static and server-side rendered applications with Next.js and React. (591 stars, JavaScript, topics: nextjs, react, mdx, course)
- [leerob/nextjs-aws-s3](https://github.com/leerob/nextjs-aws-s3): Example Next.js app to upload photos to an S3 bucket. (360 stars, topics: nextjs, aws, s3, aws-cdk)
- [leerob/react2025](https://github.com/leerob/react2025): Build applications from the the future, today. (340 stars, TypeScript, topics: nextjs, react, course, vercel)
- [leerob/nextjs-vercel-firebase](https://github.com/leerob/nextjs-vercel-firebase): Next.js App Router + Firebase (279 stars, TypeScript, topics: nextjs, firebase, firestore, vercel)
- [leerob/space-invaders](https://github.com/leerob/space-invaders): Python clone with a modern twist (261 stars, Python, topics: python, pygame, space-invaders)

## How To Use This Skill

- Reach for this skill when the user asks for Lee Robinson's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
