---
name: @dimitri-coding-skill
description: "GitHub profile skill from @dimitri. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Postgres-centric tools that solve a whole workflow, not just a library: migration, copy/clone, CDC, SQL regression testing, extension management, charting over query results.
- Command-line apps with strong operator ergonomics: a single binary or a small set of subcommands, rich `--help`, clear defaults, and examples that show real database URLs and shell invocation.
- Systems that do one hard thing well and document the edges: rejected rows in `pgloader`, concurrent index building and logical decoding in `pgcopydb`, package/source management in `el-get`.
- Projects often bridge PostgreSQL with another runtime or ecosystem:
  - Common Lisp for orchestration and tooling
  - C for low-level database utilities
  - Go for CLI/testing utilities
  - Emacs Lisp for editor integration
  - Clojure/JVM when rewriting for packaging/runtime simplicity

## Coding patterns to mirror

- Favor explicit operational flows over abstraction-heavy APIs. Their repos usually expose the workflow directly:
  - `clone`, `follow`, `snapshot`, `compare`, `copy`, `dump`, `restore`
  - install/update/remove/init in `el-get`
- Make failure modes visible and recoverable. `pgloader` keeps rejected data and continues; `pgcopydb` separates schema, data, and index work; the documentation calls out limitations and complexities plainly.
- Use layered architecture with clear boundaries:
  - CLI entrypoints
  - core engine
  - per-feature modules/subcommands
  - tests and docs alongside implementation
- Prefer concrete examples in docs and code comments. Their READMEs tend to include exact commands, sample connection strings, and real output-oriented usage.
- Keep platform/build concerns first-class: Makefiles, Dockerfiles, Debian packaging, CI scripts, and bootstrap helpers are common in the repo roots.
- When in Lisp code, expect many small files grouped by feature rather than one giant file, and code that integrates closely with external processes and files.

## Product and UI taste

- Practical over flashy. Even the UI work (`pgcharts`) is built around getting a query in, seeing the result, and exporting or sharing it.
- Good defaults matter more than configuration depth. They like tools that work from a minimal command, then expose advanced flags when needed.
- For web UI, the preference is functional dashboards/editor panes rather than decorative interfaces:
  - query editor
  - query list
  - chart/result pane
  - shareable chart-only view
- Security and access are usually constrained by design rather than a large auth subsystem: `pgcharts` limits users to registered databases and keeps administration CLI-driven.

## Tech stack clues

- Strong PostgreSQL ecosystem knowledge: logical decoding, extensions, event triggers, COPY/pg_dump/pg_restore behavior, replication concepts, packaging around Postgres tooling.
- Common Lisp is a major language in this orbit, often with Quicklisp/SBCL and self-contained binaries.
- C shows up for performance-sensitive database tooling.
- Emacs Lisp is used for editor tooling and package management.
- Go appears for smaller utilities and testing-focused tools.
- Build/release patterns:
  - `Makefile`-driven
  - Docker images
  - Debian packaging
  - ReadTheDocs / generated manuals
  - CI workflows on GitHub Actions, with older Travis-era scripts in some repos
- Runtime distribution style differs by project:
  - `pgloader` v4: single JAR, Java 21+
  - `pgcharts`/`pgloader` v3-era tools: SBCL/Common Lisp binaries
  - native tools like `pgcopydb`: C and Unix process orchestration

## When to inspect repos first

- Before adding or changing a CLI, inspect `pgloader` and `pgcopydb` for how subcommands, flags, and help text are structured.
- Before touching PostgreSQL-heavy logic, inspect `pgcopydb` and `pgloader` for how they separate schema/data phases and handle partial failure.
- Before writing Emacs Lisp or package-management behavior, inspect `el-get` for modular file layout and installation/update flows.
- Before building a browser-facing query tool or embedded UI, inspect `pgcharts` for the query-editor/result-pane pattern and how it packages static assets.
- Before choosing build/release mechanics, inspect the repo roots: these projects often encode their deployment assumptions in `Makefile`, Dockerfiles, Debian metadata, and bootstrap scripts.

## Repo Map

- [dimitri/pgloader](https://github.com/dimitri/pgloader): Migrate to PostgreSQL in a single command! (6448 stars, Common Lisp, topics: postgresql, migration, mysql, mssql)
- [dimitri/el-get](https://github.com/dimitri/el-get): Manage the external elisp bits and pieces upon which you depend! (1662 stars, Emacs Lisp)
- [dimitri/pgcopydb](https://github.com/dimitri/pgcopydb): Copy a Postgres database to a target Postgres server (pg_dump | pg_restore on steroids) (1508 stars, C)
- [dimitri/pgcharts](https://github.com/dimitri/pgcharts): Turn your PostgreSQL queries into Charts (402 stars, Common Lisp)
- [dimitri/regresql](https://github.com/dimitri/regresql): Regression Testing your SQL queries (354 stars, Go)
- [dimitri/switch-window](https://github.com/dimitri/switch-window): Offer a *visual* way to choose a window to switch to (311 stars, Emacs Lisp)
- [dimitri/emacs-kicker](https://github.com/dimitri/emacs-kicker): A minimal kick start init file for emacs (144 stars, Emacs Lisp)
- [dimitri/prefix](https://github.com/dimitri/prefix): Prefix Range module for PostgreSQL (106 stars, C)
- [dimitri/pgextwlist](https://github.com/dimitri/pgextwlist): PostgreSQL Extension Whitelisting (101 stars, C)
- [dimitri/sudoku](https://github.com/dimitri/sudoku): Solving Every Sudoku Puzzle (63 stars, Python)
- [dimitri/preprepare](https://github.com/dimitri/preprepare): PostgreSQL prepare statements made pooling friendly (46 stars, C)
- [dimitri/tpch-citus](https://github.com/dimitri/tpch-citus): Drivers to run TPC-H with Citus and PostgreSQL (38 stars, C)

## How To Use This Skill

- Reach for this skill when the user asks for Dimitri Fontaine's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
