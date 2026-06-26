---
name: @cursor-coding-skill
description: "GitHub profile skill from @cursor. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Developer-facing tooling around Cursor itself: SDK examples, cloud agents, hooks, plugin specs, agent tracing, and MCP/server catalogs.
- Small, focused reference implementations rather than giant apps. The `cookbook` repo is explicitly a collection of "small examples," and the SDK docs read like runnable demos.
- Infrastructure for agent workflows: enqueue/drain patterns, event streaming, tracing formats, review queues, and automation around agent completion.
- Community platforms and directories that normalize a standard and make it searchable, submit-able, and easy to inspect.

## Coding patterns to mirror

- Prefer explicit, documented flows over hidden magic. README files explain setup, environment variables, queue processing, and data lifecycle step by step.
- Keep examples self-contained and copyable. Repos are organized as runnable labs, templates, quickstarts, and sample apps.
- Use clear domain names and small modules that map to product concepts: `enqueuePluginScan`, `runPluginScan`, `kickDrainAfterResponse`, `plugin_scans`, `agent-trace`.
- Bias toward standards and conventions: Open Plugins spec, `.mcp.json`, `skills/*/SKILL.md`, `agents/*.md`, hooks JSON, etc.
- When adding features, match their habit of separating orchestration from presentation: queue logic, cron safety nets, and agent execution live alongside UI, but are described as distinct layers.
- Favor clean config and workspace structure: Bun workspaces, root-level repo docs, and environment-variable-driven setup.

## Product and UI taste

- Their UI leans practical, data-rich, and navigation-friendly: directory browsing, submission flows, kanban views, search, artifact previews, and status grouping.
- Strong preference for documentation-first UX. Many projects are understandable from README alone, with explicit "Getting Started," prerequisites, and setup steps.
- Search and filtering matter: `Fuse.js` for fuzzy search, `nuqs` for URL state, and status-driven views suggest interactive dashboards with shareable state.
- Visual stack implies a polished component system rather than bespoke styling: Radix UI + shadcn/ui + Tailwind.
- The overall feel is "developer utility" more than marketing chrome: clear labels, direct CTAs, and operational transparency.

## Tech stack clues

- TypeScript is the dominant language for product and tooling repos.
- Frontend: Next.js App Router, Turbopack, Tailwind CSS, Radix UI, shadcn/ui, `nuqs`, `Fuse.js`.
- Runtime/tooling: Bun, Biome.
- Backend/data: Supabase/PostgreSQL, Supabase Queues (`pgmq`), Vercel cron, server actions, `next/server` `after()`.
- Automation/agent infra: Cursor SDK, cloud agents, hooks, plugin scans, tracing formats.
- Some adjacent Python exists (`eval`), but the center of gravity is TypeScript-first.

## When to inspect repos first

- Before changing anything in plugin submission, scanning, or spec parsing, inspect `community-plugins` and `plugins` for the exact component names and validation flow.
- Before building agent workflow features, inspect `cookbook` for the existing SDK, hooks, and cloud-agent examples.
- Before implementing data-driven directory or admin UI work, inspect `community-plugins` for the Next.js/Supabase structure and how URL state, search, and queues are wired.
- Before adding anything around tracing or agent event schemas, inspect `agent-trace` to match the format and terminology.
- If the task touches deployment, background jobs, or reliability, inspect for queue-drain + cron patterns first; they clearly care about explicit async lifecycle handling.

## Repo Map

- [cursor/cookbook](https://github.com/cursor/cookbook) (3949 stars, TypeScript)
- [cursor/plugins](https://github.com/cursor/plugins): Cursor plugin specification and official plugins (2141 stars, TypeScript)
- [cursor/cursor](https://github.com/cursor/cursor) (32989 stars)
- [cursor/community-plugins](https://github.com/cursor/community-plugins): Plugins from the Cursor community (3953 stars, TypeScript)
- [cursor/agent-trace](https://github.com/cursor/agent-trace): A standard format for tracing AI-generated code. (762 stars, TypeScript)
- [cursor/mcp-servers](https://github.com/cursor/mcp-servers): A list of MCP (Model Context Protocol) servers for developer tools and services (225 stars)
- [cursor/eval](https://github.com/cursor/eval) (143 stars, Python)
- [cursor/plugin-template](https://github.com/cursor/plugin-template) (73 stars, JavaScript)

## How To Use This Skill

- Reach for this skill when the user asks for Cursor's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
