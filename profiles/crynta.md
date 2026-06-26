---
name: @crynta-coding-skill
description: "GitHub profile skill from @crynta. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Terminal-first, developer-centric tools with an AI layer bolted into the core workflow rather than treated as a side feature.
- Apps that are **lightweight, native, and cross-platform**: Tauri + Rust desktop apps, with a strong bias toward keeping disk size and runtime overhead low.
- Products that feel "opinionated but practical": editor, file explorer, source control, preview, and AI assistance all live in one workspace.
- Open-source projects that are meant to be actually used, documented, and shipped: clear install notes, changelogs, contributing docs, roadmap, security, and repo-specific agent instructions.
- Companion marketing/docs sites that mirror the product's aesthetic and communicate the product very directly.

## Coding patterns to mirror

- Prefer **strict TypeScript** and explicit project hygiene:
  - `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
  - `check-types`, lint, format, test, size checks, bundle analysis
- Keep boundaries clear between app surfaces:
  - separate `src/` vs `src-tauri/`
  - separate app routes/pages vs shared UI primitives
  - separate product code from docs/marketing content
- Use **small, purpose-built files** and centralize shared constants/config:
  - e.g. the website's `lib/site.ts` is the single source of truth for version, links, and downloads.
- Favor maintainable composition over clever abstractions:
  - UI built from reusable primitives (`components/ui/`, shadcn/radix patterns)
  - domain sections split into focused feature components
- Be explicit about tooling and repo intent:
  - pnpm workspace, biome/eslint/prettier, Next/Vite scripts, lockfiles committed
  - docs like `TERAX.md`, `AGENTS.md`, `CLAUDE.md` suggest the codebase expects automation and contributor guidance
- For Rust/Tauri or desktop code, assume performance matters and dependencies are chosen carefully.
- Write comments and docs that explain why something exists, especially for performance-sensitive or visually distinctive parts.

## Product and UI taste

- Strong preference for **dark, developer-oriented, high-contrast interfaces**.
- Visual identity leans toward:
  - terminal aesthetics
  - Catppuccin / GitHub / Nord / Gruvbox / Tokyo Night-style themes
  - JetBrains Mono + Inter pairing
  - subtle motion, not flashy animation
- The website shows a taste for **real-time graphics used sparingly and purposefully**:
  - WebGL shader backgrounds
  - smooth motion
  - polished hero section and feature presentation
- UI should feel configurable and capable:
  - themes, background images, blur/opacity controls
  - vim mode, keyboard navigation, fuzzy search, inline actions
- The product experience is designed around speed and density of capability, not minimalism for its own sake.

## Tech stack clues

- Heavy use of **TypeScript** across frontend, product, and tooling.
- Desktop stack: **Tauri 2 + Rust + React 19**, with CodeMirror 6, xterm.js, and native PTY integration in the main product.
- Web stack for the site: **Next.js 16 App Router + React 19 + TypeScript**.
- Styling/build ecosystem:
  - Tailwind CSS v4
  - shadcn/ui
  - Radix UI
  - class-variance-authority, clsx, tailwind-merge
  - Motion for animation
- Graphics/visual work may involve:
  - OGL / GLSL shaders
  - Hugeicons
- Tooling patterns:
  - pnpm
  - Biome or ESLint/Prettier depending on repo
  - Vitest for app testing where present
  - bundle/size analysis and import pruning (`knip`, size-limit)

## When to inspect repos first

- Before changing anything in the **terminal/editor/AI workflow**, inspect the product repo first; the conventions around state, command handling, and native boundaries are likely specific.
- Before adding or refactoring UI, inspect existing component composition and theme/token patterns so you match the established density, spacing, and dark styling.
- Before touching the website, inspect how shared data is centralized and how sections are split; the structure is intentionally simple and content-driven.
- Before introducing new dependencies, inspect the repo's dependency style: the projects lean toward curated, high-signal packages rather than broad frameworks.
- If the task affects desktop behavior, themes, or AI plumbing, inspect adjacent docs/instructions first (`TERAX.md`, `AGENTS.md`, README sections) to avoid drifting from the project's own operating model.

## Repo Map

- [crynta/terax-ai](https://github.com/crynta/terax-ai): Lightweight (7MB) Terminal-first AI-native dev workspace (7357 stars, TypeScript, topics: ai, code-editor, linux, macos)
- [crynta/Terax-website](https://github.com/crynta/Terax-website): The website and landing page for Terax (46 stars, TypeScript)
- [crynta/BibleOS](https://github.com/crynta/BibleOS): Bible reader cross-platform app with AI chat, built with Tauri (25 stars, TypeScript, topics: ai, bible, cross-platform, react)
- [crynta/DigitalTrade](https://github.com/crynta/DigitalTrade): A 3-in-1 web app (old pet-project) that combines the main features of trading, financial and banking applications. (4 stars, TypeScript, topics: banking, dashboard, django, docker)
- [crynta/xAI-Rust-SDK](https://github.com/crynta/xAI-Rust-SDK): xAI API Rust SDK (prototype) (5 stars, Rust)
- [crynta/Arch-Linux-i3](https://github.com/crynta/Arch-Linux-i3): I3-wm dotfiles for Arch linux (1 stars, Lua)
- [crynta/Enivim](https://github.com/crynta/Enivim): Neovim configuration for fullstack and python development (3 stars, Lua)
- [crynta/Hyprland](https://github.com/crynta/Hyprland) (2 stars, Lua)
- [crynta/crynta](https://github.com/crynta/crynta) (1 stars)
- [crynta/physics-engine](https://github.com/crynta/physics-engine): just trying practice vectors/physics with JS (canvas) (1 stars, TypeScript)
- [crynta/Chess.ts](https://github.com/crynta/Chess.ts) (0 stars, TypeScript)
- [crynta/Island-game](https://github.com/crynta/Island-game) (0 stars, TypeScript)

## How To Use This Skill

- Reach for this skill when the user asks for Crynta's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
