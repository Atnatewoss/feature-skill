---
name: @antirez-coding-skill
description: "GitHub profile skill from @antirez. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Small, self-contained systems in C that solve one narrow problem very well: text editing, terminal input, radix trees, dynamic strings, chat servers, message brokers, decoders, local inference.
- Tools that are useful both as a finished utility and as a teaching artifact. `kilo` and `smallchat` are explicitly “minimal example” projects; `ds4` is still framed as a purpose-built system with a narrow target rather than a generic framework.
- Software that works close to the metal or close to the terminal: network servers, terminal UIs, VT100-based interaction, GPU backends, embedded-like systems thinking.
- Repos that often come with a strong “why this exists” README: the motivation, constraints, and intended operating model are part of the product.

## Coding patterns to mirror

- Prefer plain ANSI C and direct system/API usage over heavy abstraction.
- Keep dependencies minimal or absent; if a library is used, it is usually because it is a core part of the solution, not convenience.
- Favor small, composable modules and reusable building blocks (`sds`, `rax`, `linenoise`) that can be lifted into other projects.
- Write for clarity under constraints:
  - compact code paths
  - explicit control flow
  - data-structure-first solutions
  - practical shortcuts when they simplify the implementation
- Expect terminal-oriented conventions: keybindings, line editing, raw input handling, escape sequences, and simple CLI ergonomics.
- README tone is pragmatic and opinionated: state the scope, what it is not, and the intended usage upfront.
- In evolving/demo repos like `smallchat`, prefer incremental refactors and keep changes aligned with the project’s staged narrative.

## Product and UI taste

- Terminal-first and keyboard-driven rather than GUI-heavy.
- Minimal but usable interfaces: simple commands, fixed keybindings, text-based search/edit/navigation, and low ceremony.
- Strong preference for “small and complete” over “large and flexible.”
- UI polish is functional, not decorative: the interface should be obvious, fast, and fit the constraints of the environment.
- In developer tools, the end-to-end workflow matters: CLI + server/API + validation/testing + model/runtime-specific support.

## Tech stack clues

- Heavy use of C, including ANSI C and systems-style C.
- Cross-platform low-level work appears frequently:
  - macOS / Metal
  - NVIDIA CUDA
  - ROCm
  - POSIX terminals and sockets
- Common support code patterns include:
  - custom dynamic string and tree data structures
  - terminal helpers
  - Makefiles over elaborate build systems
  - small self-contained `.c`/`.h` pairs
- For `ds4`, the stack is especially specific: local inference engine, GGUF tooling, server/CLI, GPU backends, SSD/KV handling, benchmarking, and model-specific validation.
- The projects often assume you can reason directly about performance, memory layout, and I/O behavior.

## When to inspect repos first

- Before editing, check the repo’s README and existing code structure: these projects are often intentionally narrow and may reject “general improvements” that change the project’s purpose.
- Inspect first when the repo is an example or staged demo (`smallchat`, similar video-driven repos): the intended evolution path matters more than feature completeness.
- Inspect first when the project is model- or backend-specific (`ds4`): there are usually strict assumptions about supported models, hardware targets, and validation methods.
- Inspect first if you plan to add dependencies or abstraction layers: the default bias here is toward self-contained code and minimal surface area.
- Inspect first if the task touches terminal behavior, input handling, or performance-critical paths; these repos tend to encode very specific low-level choices.

## Repo Map

- [antirez/rax](https://github.com/antirez/rax): A radix tree implementation in ANSI C (1253 stars, C)
- [antirez/dump1090](https://github.com/antirez/dump1090): Dump1090 is a simple Mode S decoder for RTLSDR devices (2892 stars, C)
- [antirez/linenoise](https://github.com/antirez/linenoise): A small self-contained alternative to readline and libedit (4306 stars, C)
- [antirez/kilo](https://github.com/antirez/kilo): A text editor in less than 1000 LOC with syntax highlight and search. (8997 stars, C)
- [antirez/sds](https://github.com/antirez/sds): Simple Dynamic Strings library for C (5504 stars, C)
- [antirez/disque](https://github.com/antirez/disque): Disque is a distributed message broker (8069 stars, C)
- [antirez/ds4](https://github.com/antirez/ds4): DeepSeek 4 Flash and PRO local inference engine for Metal, CUDA and ROCm (15695 stars, C)
- [antirez/smallchat](https://github.com/antirez/smallchat): A minimal programming example for a chat server (7508 stars, C)
- [antirez/neural-redis](https://github.com/antirez/neural-redis): Neural networks module for Redis (2229 stars, C)
- [antirez/iris.c](https://github.com/antirez/iris.c): Flux 2 image generation model pure C inference (1955 stars, C)
- [antirez/hping](https://github.com/antirez/hping): hping network tool (1703 stars, C)
- [antirez/voxtral.c](https://github.com/antirez/voxtral.c): Pure C inference of Mistral Voxtral Realtime 4B speech to text model (1698 stars, C)
- [antirez/lamernews](https://github.com/antirez/lamernews): Lamer News -- an HN style social news site written in Ruby/Sinatra/Redis/JQuery (1356 stars, Ruby)

## How To Use This Skill

- Reach for this skill when the user asks for Salvatore Sanfilippo's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
