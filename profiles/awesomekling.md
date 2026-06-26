---
name: @awesomekling-coding-skill
description: "GitHub profile skill from @awesomekling. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

### What they tend to build

- **Systems-first software with a strong "build the whole stack" instinct.** The flagship repo is a full browser engine/browser with multi-process architecture, renderer isolation, IPC, sandboxing, and shared core libraries.
- **Prototype tools that become products.** `melt` is described as the original code doodle that eventually became Ladybird; `toyweb` and `jakt-png` look like small experiments or focused utilities.
- **Developer-facing analysis and inspection tools.** `perfect` is a web viewer for `perf.data`, explicitly modeled after Instruments.app.
- **Small, direct programs over framework-heavy apps.** The repos skew toward single-purpose binaries, parsers, and proof-of-concept stacks rather than large app frameworks.

### Coding patterns to mirror

- **Prefer explicit architecture and clear module boundaries.** Ladybird's root layout (`AK`, `Base`, `Libraries`, `Services`, `UI`, `Utilities`, `Tests`) suggests a strong separation of concerns.
- **Lean on repo-local conventions and formatters.** There are dedicated config files for C++, Rust, editor settings, linting, and formatting (`.clang-format`, `.clang-tidy`, `rustfmt.toml`, `.editorconfig`), so code should conform tightly to existing tooling.
- **Keep implementations straightforward and readable.** The smaller repos (`toyweb`, `jakt-png`, `perfect`) point to direct code paths, minimal indirection, and practical naming.
- **Treat experiments as first-class.** The style seems comfortable with small exploratory codebases that can later grow into real systems.
- **Prefer runnable, documented entry points.** READMEs are short and action-oriented: build, run, drop a file, inspect the result.
- **In C++ code, expect modern but conservative structure.** The repository ecosystem around Ladybird suggests strong emphasis on compile-time correctness, consistent formatting, and clear ownership.

### Product and UI taste

- **Utility over ornament.** `perfect` is modeled after Instruments.app, but the README and setup imply a tool whose main job is clarity and inspection, not polish for its own sake.
- **Developer usability matters.** The browser and profiling tools are built with practical workflows in mind: drag-and-drop, local dev server, explicit build instructions.
- **UI is likely functional and information-dense.** Ladybird's browser architecture and `perfect`'s profiling focus suggest interfaces that prioritize legibility, debugging, and control.

### Tech stack clues

- **C++ is the core language for the main project.**
- **Jakt appears in smaller experiments and parser-like code** (`toyweb`, `jakt-png`), so it's part of the broader ecosystem.
- **Rust is present but secondary** (`rust-libc`, `rust` fork), likely for targeted experimentation or portability work.
- **Node.js is used for lightweight tooling/web UI** (`perfect` with `node server.js`, ES modules, modern Node 18+).
- **Build tooling is cross-platform and CMake-centric** for the main browser project, with strong support files for clang, gdb/lldb, vcpkg, and CI/devcontainer workflows.

### When to inspect repos first

- **Before touching browser engine, process model, IPC, or UI shell code:** inspect `ladybird` first, especially nearby modules and build configs.
- **Before implementing a small parser, decoder, or experimental language project:** inspect `toyweb` and `jakt-png`.
- **Before adding analysis/visualization UX:** inspect `perfect` for interaction style and startup flow.
- **Before changing formatting, build, or tooling behavior:** inspect the repo-local config files and existing scripts first; style is enforced by tooling as much as by code.

## Repo Map

- [LadybirdBrowser/ladybird](https://github.com/LadybirdBrowser/ladybird): Truly independent web browser (64273 stars, C++, topics: browser, browser-engine)
- [awesomekling/perfect](https://github.com/awesomekling/perfect): Web analysis tool for Linux perf profiles (37 stars, JavaScript)
- [awesomekling/melt](https://github.com/awesomekling/melt): The first code doodle that eventually became the Ladybird web browser. From December 23rd, 2018. (27 stars, C++)
- [awesomekling/ytalk](https://github.com/awesomekling/ytalk): Old unreleased development branch of the YTalk chat program (23 stars, C)
- [awesomekling/jakt-png](https://github.com/awesomekling/jakt-png) (9 stars)
- [awesomekling/toyweb](https://github.com/awesomekling/toyweb) (9 stars)
- [awesomekling/rust-libc](https://github.com/awesomekling/rust-libc) (5 stars, Rust)
- [awesomekling/dotfiles](https://github.com/awesomekling/dotfiles) (5 stars, Vim Script)
- [awesomekling/rust](https://github.com/awesomekling/rust) (1 stars, Rust)

## How To Use This Skill

- Reach for this skill when the user asks for Andreas Kling's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
