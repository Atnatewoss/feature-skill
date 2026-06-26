---
name: feature-skill
description: "Activate this skill whenever a new feature is being planned, implemented, or shipped. It dispatches to the right coding legends based on what you're building, then runs a repeatable dev workflow: plan → implement → PR → ship."
---

This skill is a dispatcher. It routes to the right sub-skill(s) in `profiles/` based on the current task, then executes the workflow chain in `workflows/`. The profiles intentionally contradict each other — that's the point. Don't flatten them. Load only what's relevant.

## Routing table

Read the task. Match the domain. Load the profile(s).

| Building this | Activate these profiles | Why |
|---|---|---|
| **ML / AI training or inference** | `karpathy`, `yule-buaa` | Single-file training loops, minimal abstraction, metric-driven |
| **Next.js / React web app** | `rauchg`, `leerob`, `ncdai` | Ship-fast demos, App Router conventions, polished UI |
| **TypeScript library or SDK** | `katt`, `himself65`, `samuelcolvin` | Type-first APIs, monorepo structure, composable primitives |
| **CLI tool or shell utility** | `rauchg`, `torvalds`, `cetanu` | Small surface area, direct implementations, script ergonomics |
| **Systems / C / C++ / kernel** | `torvalds`, `awesomekling`, `magicalbat` | Explicit architecture, minimal abstraction, hardware-aware |
| **GPU / CUDA / performance** | `stuartsul`, `karpathy` | Tile-level conventions, benchmark harnesses, compile-time params |
| **Agent skills / AI tooling** | `garrytan`, `cursor`, `google-labs-code` | Skill/plugin patterns, workflow chains, agent infrastructure |
| **Desktop app (Tauri / Electron)** | `crynta` | Tauri + Rust + React, terminal aesthetics, theme systems |
| **Auth / SaaS / monorepo platform** | `ping-maxwell`, `leerob`, `bekacru` | Plugin/adapter architecture, Stripe/Postgres, strict TS |
| **Privacy / protocol / security** | `simplex-chat` | Protocol-level design, E2EE, security-aware code |
| **Educational / tutorial code** | `webdevsimplified`, `karpathy` | Example-first repos, lesson structure, beginner clarity |
| **Python library or tooling** | `samuelcolvin`, `cetanu` | Type hints, strict validation, Rust internals, uv/pytest |
| **Data Dashboards & Analytics** | `steven-tey`, `tremorlabs`, `grafana` | Data-dense UIs, Vercel/Next.js edge, visualization primitives |
| **Documentation & Technical Writing** | `squidfunk`, `hashicorp` | MkDocs, technical guides, exact CLI docs, structured knowledge |
| **Databases & State (SQL, C)** | `antirez`, `dimitri`, `supabase` | Postgres migrations, Redis/C data structures, realtime sync |
| **Diagrams, Canvas & SVG** | `vjeux`, `mbostock` | Excalidraw, D3.js, complex frontend rendering, data-driven docs |
| **AI Agents & Strict Implementations** | `hwchase17`, `lucidrains`, `sindresorhus` | LangChain flows, paper implementations, ultra-strict small modules |

When multiple profiles apply, load all of them — they complement each other. 
**Anti-Hallucination Guardrail:** If absolutely none of the profiles match the task domain, **do not guess or hallucinate a pattern**. Explicitly fall back to standard, generic best practices for the language, or ask the user for clarification. Never force a mismatched profile just to use one.

## How to use this skill

Every time a new feature is about to be worked on, run this sequence:

### 1. Route
Read the task. Consult the routing table above. Load the matching profile file(s) from `profiles/`.

### 2. Execute the workflow
Run `workflows/new-feature.md` — the full plan → implement → PR → ship chain.

That's it. The workflow handles the rest.

## Available workflows

| Workflow | File | When to use |
|---|---|---|
| **New feature** | `workflows/new-feature.md` | Default. Any time you're adding or changing functionality. |
| **Code review** | `workflows/code-review.md` | Reviewing someone else's code or self-reviewing before PR. |
| **PR description** | `workflows/pr-description.md` | Generating a clean, informative pull request description. |


## Safety and Permissions
**CRITICAL RULE:** Any destructive action to the repository structure (like deleting folders, mass-renaming files, moving directories, or resetting git history) **must** ask for the user's explicit permission before execution. Do not assume it is safe to auto-run commands that can permanently lose uncommitted work.
