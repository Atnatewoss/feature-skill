---
name: @rauchg-coding-skill
description: "GitHub profile skill from @rauchg. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Small, sharply scoped projects with one obvious job: public Slack invite flow, Wi-Fi password lookup, tiny file search, chat demo, browser/gameboy emulation, realtime HTTP/WebSocket experiments.
- "Idea-to-demo" repositories that prove a point quickly. Even the more ambitious ones are framed as experiments or demos rather than large platforms.
- Utility software that is easy to run locally or globally: shell scripts, CLI tools, simple Node apps, or a focused Next.js site.
- Projects that feel publishable as-is: a working README, a package entry point, and deploy metadata are part of the product.

## Coding patterns to mirror

- Prefer the shortest path to a working feature. Keep the surface area small and the module structure obvious.
- Lean on scripts and package metadata for ergonomics:
  - CLI wrappers in `bin/`
  - install/start/build hooks in `package.json`
  - deploy files like `Procfile`, `Dockerfile`, `app.json`, `azuredeploy.json`
- For older Node repos, expect a pragmatic mix of Babel, Gulp, Express, socket.io, and CommonJS-era structure.
- For newer work, use modern TypeScript/React/Next conventions, but still keep code direct and readable.
- Readme-first thinking matters: many repos are effectively self-documenting through concise descriptions and minimal setup instructions.
- Keep abstractions light. These repos usually show a preference for straightforward composition over deep architectural layers.

## Product and UI taste

- The best products here are instantly understandable: "Public Slack organizations made easy," "Get the password of the wifi you're on," "Tiny file search utility."
- Strong preference for playful but practical interfaces: tools that feel clever, demoable, and a little delightful.
- Terminal-first and developer-first UX shows up often, but so does polished web presentation when the project needs it.
- Modern UI work appears restrained rather than flashy: MDX content, Tailwind, analytics, and a clean content-driven blog layout.
- Demos often foreground the core trick immediately instead of hiding it behind onboarding.

## Tech stack clues

- Historical Node/JS stack: Express, socket.io, superagent, body-parser, Babel, Gulp, Mocha, nock, supertest.
- Modern stack: Next.js, React, TypeScript, MDX, Tailwind, SWR, Vercel integrations, Upstash Redis.
- Shell and CLI tooling are common: Bash scripts, Zsh plugins, install scripts, terminal utilities.
- Deployment/runtime files appear often: `Procfile`, Docker, cloud platform manifests, Vercel/Now-style config.
- The range is broad, but the through-line is pragmatic JavaScript across web apps, CLIs, and small systems experiments.

## When to inspect repos first

- Always inspect the target repo before mimicking style too closely: this developer's style shifts a lot between eras and project types.
- Check whether the repo is:
  - old Node/Babel/Gulp/Express code,
  - modern Next/TypeScript app,
  - shell/CLI script,
  - or an experimental demo.
- Look for local conventions in:
  - file organization,
  - script names,
  - README tone,
  - formatting choices,
  - and whether the repo values minimal code or explicit scaffolding.
- If the repo is a demo or utility, optimize for brevity and clarity; if it's a blog/app, optimize for clean content structure and low-friction editing.

## Repo Map

- [rauchg/slackin](https://github.com/rauchg/slackin): Public Slack organizations made easy (6499 stars, JavaScript)
- [rauchg/wifi-password](https://github.com/rauchg/wifi-password): Get the password of the wifi you're on (bash) (4547 stars, Shell)
- [rauchg/blog](https://github.com/rauchg/blog) (1414 stars, MDX)
- [rauchg/spot](https://github.com/rauchg/spot): Tiny file search utility (bash) (954 stars, Shell)
- [rauchg/next-ai-news](https://github.com/rauchg/next-ai-news) (849 stars, TypeScript)
- [rauchg/chat-example](https://github.com/rauchg/chat-example) (800 stars, HTML)
- [rauchg/doom-captcha](https://github.com/rauchg/doom-captcha) (718 stars, C++)
- [rauchg/how-is-this-not-illegal](https://github.com/rauchg/how-is-this-not-illegal): A demo of using RSC and Vercel Postgres, legally (634 stars, JavaScript)
- [rauchg/weplay](https://github.com/rauchg/weplay): Collaborative gameboy emulation powered 100% by JavaScript (606 stars, JavaScript)
- [rauchg/clif](https://github.com/rauchg/clif): Dead easy terminal GIFs, from the terminal. (452 stars, JavaScript)
- [rauchg/node.websocket.js](https://github.com/rauchg/node.websocket.js): WebSocket-compatible realtime HTTP server implemented with Node.JS (268 stars, JavaScript)
- [rauchg/react-postgres-components](https://github.com/rauchg/react-postgres-components): An experiment on deploying remote functions that run inside Postgres using v8 (226 stars, TypeScript)

## How To Use This Skill

- Reach for this skill when the user asks for Guillermo Rauch's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
