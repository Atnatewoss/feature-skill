---
name: @Magicalbat-coding-skill
description: "GitHub profile skill from @Magicalbat. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Small-to-medium tools and demos in C, often framed as "I want this exact utility" rather than general-purpose products.
- From-scratch implementations: neural nets, fractals with custom multi-precision, rendering experiments, trackpad input handling, graphing/memory helpers.
- Developer-facing or workflow-focused apps: a vim-like spreadsheet calculator, note/PDF markup, presentation tooling, config repos, input libraries.
- Projects that start as a video/demo and then become reusable code or a library-style extraction.

## Coding patterns to mirror

- Favor plain C with minimal abstraction overhead. Expect straightforward control flow, explicit state, and manual memory management.
- Prefer self-contained files and "drop-in" components:
  - single-header libraries like `better_trackpad.h`, `mg_arena.h`, `mg_plot.h`
  - example programs like `example.c`
- Document usage near the code, especially at the top of headers or in README snippets.
- Keep APIs small and practical; the style leans toward "just enough surface area" rather than deep frameworks.
- Use portable build setup when possible, but don't over-engineer it—simple `Makefile`s and platform-specific example code are normal.
- In app code, keyboard/input handling and state machines matter more than elaborate architecture.
- When solving algorithmic problems, expect custom implementations instead of pulling in dependencies.

## Product and UI taste

- Keyboard-first interfaces are a strong signal: vim-inspired controls, spreadsheet navigation, fast command-like interactions.
- Utility and responsiveness outrank visual polish. The UI often serves experimentation, editing, or inspection.
- The projects suggest a preference for tools that feel "hackable" and immediate rather than enterprise-polished.
- Cross-platform support appears when it helps reach the intended workflow, especially Windows/Linux/web.
- Good fit: apps with dense functionality exposed through shortcuts, commands, or direct manipulation.

## Tech stack clues

- Primary language: C.
- Also used: C++, Python, JavaScript, Java, Lua.
- Common environment/tooling clues:
  - Neovim
  - tmux
  - Makefiles
  - Windows Win32 APIs
  - OpenGL
  - Vulkan compute
  - web builds for some C projects
- Libraries and domains they like:
  - memory arenas
  - graph plotting
  - custom rendering
  - input-device handling
  - math-heavy and graphics-heavy code
- Adjacent ecosystems appear in game jams: Unity, Godot, Pygame.

## When to inspect repos first

- Before adding new APIs to a C library or header-only module.
- Before changing input handling, hotkeys, or event processing.
- Before matching build conventions, since setup is often lightweight and project-specific.
- Before adding memory allocation patterns, because arena-style allocation may already be established.
- Before touching UI behavior in editor-like tools, since keybinding conventions matter.
- Before writing cross-platform code, especially anything involving Windows APIs, OpenGL, or web targets.
- Start by checking README examples and top-of-file comments; those usually define the intended usage faster than the architecture does.

## Repo Map

- [Magicalbat/videos](https://github.com/Magicalbat/videos): Code from videos on my YouTube channel (139 stars, C)
- [Magicalbat/Configs](https://github.com/Magicalbat/Configs) (63 stars, Lua)
- [Magicalbat/nscim](https://github.com/Magicalbat/nscim): Neoscim - Vim-like spreadsheet calculator (34 stars, C)
- [Magicalbat/win32-better-trackpad](https://github.com/Magicalbat/win32-better-trackpad): Provides more in-depth trackpad messages to windows than win32 does by default (30 stars, C)
- [Magicalbat/mg-libraries](https://github.com/Magicalbat/mg-libraries): STB-Styles libraries for various things in C (16 stars, C)
- [Magicalbat/TurboSpork](https://github.com/Magicalbat/TurboSpork): A system for creating neural networks in C (14 stars, C, topics: c, from-scratch, machine-learning)
- [Magicalbat/Magicalbat](https://github.com/Magicalbat/Magicalbat): Config files for my GitHub profile. (8 stars, topics: config, github-config)
- [Magicalbat/TurboSporkOld](https://github.com/Magicalbat/TurboSporkOld): Archive of the first version of my TurboSpork library (6 stars, C)
- [Magicalbat/Fractal-Renderer](https://github.com/Magicalbat/Fractal-Renderer): A C application for rendering fractal zooms (6 stars, C)
- [Magicalbat/Animated-Presentation](https://github.com/Magicalbat/Animated-Presentation): A C application for creating animated presentations (5 stars, C)
- [Magicalbat/Octopus](https://github.com/Magicalbat/Octopus): Octopus is a note taking and PDF markup application (3 stars, C)
- [Magicalbat/Handwritten-Stroke-Rendering](https://github.com/Magicalbat/Handwritten-Stroke-Rendering): Test application for rendering handwritten strokes with OpenGL in C (1 stars, C)

## How To Use This Skill

- Reach for this skill when the user asks for Ian Dvorin's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
