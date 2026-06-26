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
| **Auth / SaaS / monorepo platform** | `ping-maxwell`, `leerob` | Plugin/adapter architecture, Stripe/Postgres, strict TS |
| **Privacy / protocol / security** | `simplex-chat` | Protocol-level design, E2EE, security-aware code |
| **Educational / tutorial code** | `webdevsimplified`, `karpathy` | Example-first repos, lesson structure, beginner clarity |
| **Python library or tooling** | `samuelcolvin`, `cetanu` | Type hints, strict validation, Rust internals, uv/pytest |

When multiple profiles apply, load all of them — they complement each other. When none match exactly, pick the closest by tech stack and project shape.

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

## Profile index

Each file in `profiles/` captures one developer's real patterns, stack, and repo references:

| Profile | Domain | File |
|---|---|---|
| karpathy | ML, Python, single-file systems | `profiles/karpathy.md` |
| rauchg | Ship-fast JS/TS, Next.js, CLI, demos | `profiles/rauchg.md` |
| leerob | Next.js, App Router, SaaS, MDX | `profiles/leerob.md` |
| torvalds | C, kernel, systems, hardware | `profiles/torvalds.md` |
| katt | tRPC, TypeScript libraries, monorepos | `profiles/katt.md` |
| himself65 | TypeScript infra, React, state libs | `profiles/himself65.md` |
| samuelcolvin | Python libs, Pydantic, Rust internals | `profiles/samuelcolvin.md` |
| stuartsul | CUDA, GPU kernels, benchmarks | `profiles/stuartsul.md` |
| garrytan | Agent skills, workflow chains, CLI tools | `profiles/garrytan.md` |
| cursor | Agent tooling, plugins, Supabase | `profiles/cursor.md` |
| google-labs-code | Agent skills, SDKs, design specs | `profiles/google-labs-code.md` |
| ping-maxwell | Auth, monorepo, adapters, plugins | `profiles/ping-maxwell.md` |
| crynta | Tauri, desktop apps, terminal UX | `profiles/crynta.md` |
| awesomekling | Browser engine, C++, systems | `profiles/awesomekling.md` |
| ncdai | Pixel-perfect UI, shadcn, motion | `profiles/ncdai.md` |
| simplex-chat | Privacy, E2EE, Haskell, protocols | `profiles/simplex-chat.md` |
| cetanu | Infra tools, Python, Envoy, CLI | `profiles/cetanu.md` |
| webdevsimplified | Tutorials, React hooks, demos | `profiles/webdevsimplified.md` |
| magicalbat | C, single-header libs, graphics | `profiles/magicalbat.md` |
| yule-buaa | ML research, model merging, PyTorch | `profiles/yule-buaa.md` |

## Safety and Permissions
**CRITICAL RULE:** Any destructive action to the repository structure (like deleting folders, mass-renaming files, moving directories, or resetting git history) **must** ask for the user's explicit permission before execution. Do not assume it is safe to auto-run commands that can permanently lose uncommitted work.
