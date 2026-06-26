---
name: @supabase-coding-skill
description: "GitHub profile skill from @supabase. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Platform primitives, not narrow apps: database, auth, realtime, storage, APIs, CLI, dashboards, and client SDKs.
- “Batteries-included” developer tooling around Postgres: local dev, migrations, types generation, APIs, and operational workflows.
- Modular sub-systems that can be used independently, then composed into a larger product. The README explicitly frames client libraries as standalone pieces for each external system.
- OSS-first infrastructure with a strong self-host story. Repositories emphasize hosted + local + self-hosted workflows, compatibility matrices, and operational docs.

## Coding patterns to mirror

- Prefer clear package boundaries over giant abstractions. The monorepo is split into apps, packages, blocks, scripts, and repo-specific tooling.
- Keep public APIs explicit and documented. Many repos pair code with README sections, developer guides, env docs, and compatibility notes.
- Use repo-native conventions and automation rather than ad hoc scripts:
  - `pnpm` + `turbo` in the TypeScript monorepo
  - `mise` / `mix` in Elixir services
  - `nix` in the Postgres packaging repo
- Optimize for maintainability across multiple clients and runtimes. Shared behavior is usually factored into language-specific submodules (`postgrest-js`, `auth-js`, `realtime-js`, etc.).
- Favor descriptive, operational naming: `OBSERVABILITY_METRICS.md`, `ERROR_CODES.md`, `ENVS.md`, `DEVELOPERS.md`, `compatibility` tables, `setup` scripts.
- Treat docs and tests as part of the implementation. The repos show strong coupling between code, examples, and runtime/deployment instructions.

## Product and UI taste

- Polished, documentation-heavy, and trust-oriented.
- Prefer a clean “platform dashboard” feel: centered hero sections, light/dark-aware imagery, badges, status tables, and direct links to docs/examples.
- Explain systems with architecture diagrams and concise feature checklists rather than marketing copy.
- UI/content tends to be practical and developer-facing: clarity, discoverability, and proof of capability matter more than decorative complexity.

## Tech stack clues

- TypeScript dominates the flagship monorepo and client/CLI/dashboard surface area.
- Next.js/React-style frontend work is implied by the monorepo structure and UI/dashboard packages.
- Elixir + Phoenix power realtime infrastructure.
- Go is used for auth services.
- Rust appears in database-adjacent tooling like GraphQL and ETL.
- Python, Swift, Dart, C#, Go, Java, Kotlin clients exist across the ecosystem.
- Postgres is the center of gravity; expect migrations, SQL, replication, permissions, extensions, and API generation concerns.
- Tooling signals: `turbo`, `pnpm`, `prettier`, `mix`, `mise`, `nix`, Docker, and strong CI/lint/typecheck discipline.

## When to inspect repos first

- Before changing any public API, SDK method, generated type, or protocol shape.
- Before editing cross-cutting behavior that may need to match sibling packages or language ports.
- Before touching docs, env vars, scripts, or developer workflow files; these repos often encode important conventions outside source code.
- Before UI work in the dashboard or docs app, to match existing layout, copy style, and dark/light behavior.
- Before infra/runtime changes in realtime, auth, or Postgres-related repos, because compatibility and operational constraints are documented repo-by-repo.
- When a task spans multiple repos or packages, inspect the nearest `DEVELOPERS.md`, README, and sibling package implementations first.

## Repo Map

- [supabase/supabase](https://github.com/supabase/supabase): The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications. (104880 stars, TypeScript, topics: firebase, supabase, realtime, postgrest)
- [supabase/realtime](https://github.com/supabase/realtime): Broadcast, Presence, and Postgres Changes via WebSockets (7588 stars, Elixir, topics: elixir, postgres, postgresql, realtime)
- [supabase/postgres](https://github.com/supabase/postgres): Unmodified Postgres with some useful extensions (1753 stars, Nix)
- [supabase/postgres-meta](https://github.com/supabase/postgres-meta): A RESTful API for managing your Postgres. Fetch tables, add roles, and run queries (1211 stars, TypeScript, topics: postgres, postgresql, database)
- [supabase/supabase-js](https://github.com/supabase/supabase-js): An isomorphic Javascript client for Supabase. Query your Supabase database, subscribe to realtime events, upload and download files, browse typescript examples, invoke postgres functions via rpc, invoke supabase edge functions, query pgvector. (4489 stars, TypeScript, topics: client-library, database, isomorphic, javascript)
- [supabase/auth](https://github.com/supabase/auth): A JWT based API for managing users and issuing JWT tokens (2470 stars, Go, topics: authentication, auth, authorization, jwt)
- [supabase/pg_graphql](https://github.com/supabase/pg_graphql): GraphQL support for PostgreSQL (3344 stars, Rust, topics: graphql, graphql-server, postgresql, postgres)
- [supabase/mcp](https://github.com/supabase/mcp): Connect Supabase to your AI assistants (2762 stars, TypeScript)
- [supabase/supabase-py](https://github.com/supabase/supabase-py): Python Client for Supabase. Query Postgres from Flask, Django, FastAPI. Python user authentication, security policies, edge functions, file storage, and realtime data streaming. Good first issue. (2530 stars, Python, topics: python, community, supabase, auth)
- [supabase/cli](https://github.com/supabase/cli): Supabase CLI. Manage postgres migrations, run Supabase locally, deploy edge functions. Postgres backups. Generating types from your database schema. (2289 stars, TypeScript, topics: cli, database, database-management, dbms)
- [supabase/agent-skills](https://github.com/supabase/agent-skills): Agent Skills to help developers using AI agents with Supabase (2280 stars, TypeScript, topics: ai, ai-agents, skills, supabase)
- [supabase/etl](https://github.com/supabase/etl): Stream your Postgres data anywhere in real-time. Simple Rust building blocks for change data capture (CDC) pipelines. (2273 stars, Rust, topics: logical-replication, postgres, replication, rust)
- [supabase/supavisor](https://github.com/supabase/supavisor): A cloud-native, multi-tenant Postgres connection pooler. (2227 stars, Elixir, topics: elixir, erlang, postgresql)

## How To Use This Skill

- Reach for this skill when the user asks for Supabase's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
