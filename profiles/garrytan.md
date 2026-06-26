---
name: @garrytan-coding-skill
description: "GitHub profile skill from @garrytan. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- **Opinionated systems that turn a vague task into a repeatable workflow.** The repo set is dominated by "skills," "agents," "review," "qa," "release," and "plan" commands rather than one-off app code.
- **Tools for shipping with AI, not just using AI.** `gstack` packages a whole operating model: browser automation, review roles, release steps, docs generation, QA, and guardrails.
- **Memory, retrieval, and agent infrastructure.** `gbrain` is a long-term memory layer with hybrid search, graph traversal, synthesis, and privacy boundaries.
- **Benchmarking and proving claims.** `gbrain-evals` exists to validate the core system with sealed answers, repeated runs, and published weak spots.
- **Developer tools that preserve production behavior.** `resend_robot` keeps production code unchanged while swapping behavior at the boundary for dev and test.

## Coding patterns to mirror

- **Be explicit and opinionated.** Prefer clear defaults, named roles, and well-scoped commands over flexible abstractions.
- **Use small, command-shaped modules.** The repos are organized around discrete CLI entrypoints and task-specific folders (`skills`, `eval`, `tools`, many slash-command-style flows).
- **Lean into TypeScript + Bun for core tooling.** `gstack` and `gbrain` both use ESM, Bun scripts, strict TS, and CLI binaries.
- **Export surfaces intentionally.** `gbrain`'s `package.json` exposes many internal modules directly; this suggests a preference for clear public entrypoints over hidden internals.
- **Favor testable boundaries.** `resend_robot` shims at the gem boundary; `gbrain` has separate engine, ingestion, extraction, and search layers; `gbrain-evals` isolates benchmark runners from corpora and outputs.
- **Write docs as part of the product.** These repos ship with dense README narratives, `CLAUDE.md`, `AGENTS.md`, architecture notes, changelogs, and benchmark reports.
- **Optimize for honesty in metrics.** `gbrain-evals` explicitly publishes bad numbers and describes why; if you add measurement code, include caveats and failure cases.

## Product and UI taste

- **Practical over decorative.** Interfaces exist to move work forward: browse, inspect, reply, review, QA, benchmark, ship.
- **Browser-based utilities should be fast and direct.** `resend_robot`'s UI is a simple outbox/preview/reply workflow, with search/filter and JSON endpoints for automation.
- **Sanitize and constrain UI surfaces.** The email preview explicitly sanitizes HTML and avoids iframes; this suggests a strong preference for safe, minimal rendering.
- **Keep the real system intact.** The best pattern here is "same code path, different boundary behavior" rather than building a separate fake app for dev.
- **Communicate like a builder/operator.** README copy is assertive, metric-heavy, and framed around shipping, reliability, and leverage.

## Tech stack clues

- **TypeScript / ESM / Bun** are the default for modern tooling:
  - strict TS
  - `moduleResolution: "bundler"`
  - `allowImportingTsExtensions`
  - Bun scripts and compiled CLIs
- **Ruby appears when integrating with Rails ecosystems.** `resend_robot` is a Ruby gem with Rails generators, rake tasks, and Minitest helpers.
- **Markdown is a first-class interface.** Skills, prompts, workflows, and docs are all Markdown files.
- **CLI-first plus web-UI where needed.** Even UI-backed tools usually expose command-line and JSON surfaces for agents.
- **Evaluation harnesses are separate from product code.** `gbrain-evals` is its own repo and treats benchmark reproducibility as a product feature.

## When to inspect repos first

- **Before adding a new command/skill/agent role.** Naming, file placement, and docs conventions matter a lot in `gstack`.
- **Before changing retrieval, indexing, or eval logic.** `gbrain` and `gbrain-evals` have architecture and benchmark assumptions worth matching.
- **Before touching dev/prod boundary code.** `resend_robot` is boundary-sensitive by design; inspect how it monkey-patches and restores real behavior.
- **Before designing UI surfaces.** The taste is sparse, functional, and automation-friendly; inspect existing preview/reply patterns first.
- **Before defining any claim about quality or performance.** Their repos expect numbers, methodology, and honest failure modes, not just feature description.

## Repo Map

- [garrytan/gstack](https://github.com/garrytan/gstack): Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA (116415 stars, TypeScript)
- [garrytan/gbrain](https://github.com/garrytan/gbrain): Garry's Opinionated OpenClaw/Hermes Agent Brain (24193 stars, TypeScript)
- [garrytan/gbrain-evals](https://github.com/garrytan/gbrain-evals) (275 stars, HTML)
- [garrytan/resend_robot](https://github.com/garrytan/resend_robot) (11 stars, Ruby)

## How To Use This Skill

- Reach for this skill when the user asks for Garry Tan's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
