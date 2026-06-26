---
name: @google-labs-code-coding-skill
description: "GitHub profile skill from @google-labs-code. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Agent-facing developer tools, not just end-user apps: specs, SDKs, skills, and prompt libraries that help coding agents act consistently.
- Documentation-first interfaces where the README is part of the product. Public behavior is usually introduced through examples, command snippets, and short conceptual explanations.
- Reusable building blocks packaged for compatibility across agents and runtimes: open standards, tool clients, plugin/skill packs, and SDK layers.
- Strong emphasis on "make the machine-readable part exact, keep the human-readable part explanatory." `design.md` is a clear example: YAML tokens for precision, prose for intent.

## Coding patterns to mirror

- Prefer explicit package boundaries and monorepo structure when the repo has multiple deliverables. These projects commonly use `packages/*`, Turborepo, and separate scripts for build/test/generate flows.
- Keep TypeScript strict and modern:
  - ES module style
  - `NodeNext`/`ES2022`
  - declaration output and source maps
  - Bun as the package manager/runtime in several repos
- Write APIs as small, composable methods with discoverable names:
  - `stitch.project(id)`
  - `screen.getHtml()`
  - `screen.variants(...)`
  - `callTool(...)`
- Favor concrete CLI commands and reproducible workflows over abstract prose. If behavior matters, give the exact command.
- Treat validation as first-class. In `design.md`, linting, diffing, contrast checks, and structural findings are core workflows, not extras.
- Use sparse, purposeful markdown structure: short sections, dense examples, and minimal narrative padding.

## Product and UI taste

- The visual taste implied by `design.md` is editorial and restrained: high-contrast neutrals, premium matte surfaces, warm backgrounds, and a single decisive accent color.
- The language around UI is systematic rather than decorative: tokens, rationale, contrast ratios, layout rules, and component states.
- Expect preference for clean, utility-driven interfaces with clear hierarchy and low visual noise.
- When they describe design systems, they emphasize consistency, legibility, and disciplined color usage over flamboyance.

## Tech stack clues

- TypeScript throughout most notable repos.
- Bun is heavily used for scripts and package management.
- Turborepo for monorepo orchestration.
- NodeNext/ESM module resolution in SDK code.
- Test and validation tooling is explicit and scriptable; Vitest appears in the SDK workflow.
- Some repos integrate with React and the broader AI tooling ecosystem:
  - Vercel AI SDK
  - Google ADK
  - MCP-style tool/server workflows
- Docs and package metadata matter a lot: `README.md`, `CONTRIBUTING.md`, `SECURITY.md`, and release/version-sync scripts appear repeatedly.

## When to inspect repos first

- Before changing any public API, CLI command, or method naming: mirror the existing call style and docs format.
- Before writing agent skills or prompt templates: inspect the existing repo for how dependencies, install steps, and compatibility notes are phrased.
- Before editing design-system or UI-spec code: read `design.md`-style examples to match token structure and prose tone.
- Before adding scripts or release flows: check package scripts first; these repos encode preferred workflows there.
- Before drafting a README or onboarding doc: inspect the repo's existing examples and section order, since documentation is part of the interface here.

## Repo Map

- [google-labs-code/design.md](https://github.com/google-labs-code/design.md): A format specification for describing a visual identity to coding agents. DESIGN.md gives agents a persistent, structured understanding of a design system. (20819 stars, TypeScript)
- [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills): A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor. (6187 stars, TypeScript)
- [google-labs-code/jules-awesome-list](https://github.com/google-labs-code/jules-awesome-list): Some awesome prompts for Jules Agent (3097 stars)
- [google-labs-code/stitch-sdk](https://github.com/google-labs-code/stitch-sdk): Generate UI screens from text prompts and extract their HTML and screenshots programmatically. (1733 stars, TypeScript)
- [google-labs-code/jules-action](https://github.com/google-labs-code/jules-action): Add a powerful cloud coding agent to your GitHub workflows (206 stars, topics: agent, ai, ai-agents, coding-agents)
- [google-labs-code/jules-sdk](https://github.com/google-labs-code/jules-sdk) (109 stars, TypeScript)
- [google-labs-code/jules-skills](https://github.com/google-labs-code/jules-skills) (76 stars, TypeScript)

## How To Use This Skill

- Reach for this skill when the user asks for Google Labs Code's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
