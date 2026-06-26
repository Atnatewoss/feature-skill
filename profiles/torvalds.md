---
name: @torvalds-coding-skill
description: "GitHub profile skill from @torvalds. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Low-level systems and hardware-adjacent tools: kernel code, audio effects, circuit-adjacent projects, input devices, file converters, tiny utilities.
- Projects are usually exploratory rather than productized: "learn how this works" comes before "generalize this into a framework."
- The scope is often intentionally narrow: one job, done directly, with few moving parts.
- A lot of the work is about latency, correctness, and real-world constraints rather than abstraction for its own sake.

## Coding patterns to mirror

- Prefer explicit, direct implementations over clever layers.
- Keep data flow close to the metal: sample-in/sample-out, one pass, minimal buffering, minimal latency.
- Use small, composable modules only when they reduce complexity; don't introduce frameworks just to look tidy.
- Make configuration and build behavior visible in-repo. The Linux tree shows this clearly with root-level build and tooling files like `Makefile`, `Kbuild`, `Kconfig`, `.clang-format`, `.editorconfig`, `.rustfmt.toml`, `.clippy.toml`.
- Expect a strong bias toward maintainability through conventions, not heavy architecture.
- Comments and docs should explain practical intent, tradeoffs, and constraints, not restate the obvious.
- If code is experimental, it can stay honest about that; there's no need to pretend it is more polished or universal than it is.

## Product and UI taste

- Minimalist and function-first.
- Favor interfaces that do one thing clearly, even if they are a bit rough around the edges.
- Latency and responsiveness matter more than visual flourish.
- In hardware/software hybrids, physical controls and workflow details are part of the design, not an afterthought.
- There is a noticeable preference for "simple and works" over "fancy and clever":
  - no unnecessary FFT/ML magic when an IIR filter or delay loop will do,
  - no elaborate UI when a direct utility is enough.

## Tech stack clues

- Heavy C usage, especially systems-level C.
- Linux kernel conventions are central: kernel-style build files, subsystem directories, generated tooling, and strict formatting/linting config.
- Some Rust appears in the kernel tree, but it's secondary to the C/core systems mindset.
- Side projects also use:
  - Python for small tooling/visualization,
  - OpenSCAD / KiCad for hardware design,
  - plain Makefiles and simple scripts for glue.
- Repositories tend to be self-contained and tool-oriented rather than dependency-heavy.

## When to inspect repos first

- Before making changes, inspect the local repository structure for:
  - existing build files,
  - formatting configs,
  - subsystem layout,
  - naming conventions for modules and headers.
- For kernel-like code, check nearby directories and existing patterns before inventing new ones.
- For hardware/audio utilities, inspect the small companion tools and scripts first; they often reveal the intended data format and workflow.
- When the repo is experimental, read the README before coding: it usually states the actual goal, constraints, and what should stay intentionally simple.

## Repo Map

- [torvalds/linux](https://github.com/torvalds/linux): Linux kernel source tree (237654 stars, C)
- [torvalds/GuitarPedal](https://github.com/torvalds/GuitarPedal): Linus learns analog circuits (2041 stars, C)
- [torvalds/uemacs](https://github.com/torvalds/uemacs): Random version of microemacs with my private modificatons (2061 stars, C)
- [torvalds/AudioNoise](https://github.com/torvalds/AudioNoise): Random digital audio effects (4390 stars, C)
- [torvalds/HunspellColorize](https://github.com/torvalds/HunspellColorize): Wrapper around 'less' to colorize spelling mistakes using Hunspell (349 stars, C)
- [torvalds/test-tlb](https://github.com/torvalds/test-tlb): Stupid memory latency and TLB tester (1020 stars, C)
- [torvalds/1590A](https://github.com/torvalds/1590A): Random odd guitar pedal design in kicad (569 stars, OpenSCAD)
- [torvalds/pesconvert](https://github.com/torvalds/pesconvert): Brother PES file converter (566 stars, C)
- [torvalds/ScrollWheel](https://github.com/torvalds/ScrollWheel): Minimalist RP2350 magnetic sensor scroll wheel toy project (339 stars, C)

## How To Use This Skill

- Reach for this skill when the user asks for Linus Torvalds's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
