---
name: @StuartSul-coding-skill
description: "GitHub profile skill from @StuartSul. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- **Performance-first systems work**, especially GPU kernels and adjacent tooling:
  - CUDA kernel experiments, benchmarks, spill minimizers, and tutorial scaffolding.
  - Work tends to sit close to hardware: tensor cores, shared memory, TMA, warp-level scheduling, register pressure.
- **Exploratory repos are common**: many projects are personal research sandboxes rather than polished product apps.
- **Small, focused utilities** also show up:
  - schedule scraper to iCal
  - bare-metal ELF dynamic linker
  - academic LaTeX template
  - games/AI practice projects
- The recurring pattern is: **build the smallest thing that answers a technical question, then benchmark or validate it**.

## Coding patterns to mirror

- **Optimize for directness over abstraction** unless the abstraction materially simplifies low-level work.
  - In CUDA code, expect explicit templates, layout structs, and compile-time parameters.
  - Prefer code that exposes hardware choices clearly: tile sizes, block shapes, pipeline stages, warp counts.
- **Keep repo structure practical and local to the experiment**:
  - subdirectories by architecture or experiment family
  - Makefiles near the kernel/source they build
  - README instructions that are short and runnable
- **Use declarative configuration where it helps benchmarking**:
  - compile-time constants
  - simple harnesses
  - reproducible run steps
- **Expect iterative, imperfect code** in experimental repos.
  - Comments and docs may lag behind implementation.
  - When modifying code, preserve the exploratory feel: clear naming, but not over-engineered cleanup.
- **Prefer concrete examples and working entrypoints** over broad architecture docs.
  - README snippets, `make run`, and minimal setup steps are common.

## Product and UI taste

- **Functional and sparse beats polished and decorative**.
  - The LaTeX template is described as "simple and elegant."
  - The tutorial repo emphasizes hands-on progression and setup clarity.
- **Interfaces, when present, tend to serve technical workflows**:
  - collaborative IDE for ChucK
  - graphical game UIs
  - benchmark harnesses and demo pages
- Visual style, where evident, is **clean and centered rather than maximalist**.
  - The ThunderKittens README uses centered hero imagery and short, punchy claims.
- In UI work, mirror a **tool-builder mindset**:
  - make state and actions obvious
  - keep controls minimal
  - favor utility over ornamental design

## Tech stack clues

- **CUDA / C++ are core**.
- Strong signals for **NVIDIA GPU architectures**:
  - Hopper (H100), Blackwell (B200), Blackwell Ultra (B300)
  - tensor cores, WGMMA, TCGEN05, shared memory, TMA, NVLink/NVSwitch
- Adjacent tools and languages appear as needed:
  - **Python** for experimentation, RL, scraping, and ML prototypes
  - **TypeScript** for web IDE/collaboration tooling
  - **Makefiles** for builds and runs
  - **Verilog/VHDL** for hardware experiments
  - **TeX** for assignment templates
  - some low-level **C** for systems work
- Likely dependencies in this orbit:
  - PyTorch, pybind11, CUDA 12.8+, clangd support files
- Repos often rely on **submodules** and local vendored dependencies.

## When to inspect repos first

- Before changing anything in **CUDA/kernel code**, inspect nearby repos for:
  - expected tile/layout conventions
  - compile/run patterns
  - naming for pipeline stages, accumulators, and layouts
- Before editing a benchmark or tutorial, inspect for:
  - the local Makefile pattern
  - architecture-specific directory organization
  - the repo's preferred harness and validation flow
- Before making UI/product changes, inspect existing repos to learn:
  - how minimal the interface should be
  - whether the goal is a demo, research tool, or production-like collaboration app
- If the task touches **ThunderKittens** or GPU architecture specifics, inspect first rather than guessing:
  - the codebase is hardware-shaped, and small mismatches in tile sizes, precision, or pipeline assumptions matter.

## Repo Map

- [HazyResearch/ThunderKittens](https://github.com/HazyResearch/ThunderKittens): Tile primitives for speedy kernels (3486 stars, Cuda)
- [StuartSul/gpu-experiments](https://github.com/StuartSul/gpu-experiments): A collection of GPU experiments and benchmarks for my personal understanding and research. (31 stars, Cuda)
- [StuartSul/deltaspill](https://github.com/StuartSul/deltaspill): Delta-debugging minimizer for CUDA register spills. (9 stars, Cuda)
- [StuartSul/ThunderKittens-Tutorials](https://github.com/StuartSul/ThunderKittens-Tutorials) (8 stars, Makefile)
- [StuartSul/co-chuck](https://github.com/StuartSul/co-chuck): Co-Chuck: WebChucK IDE with Multi-User Collaboration and Synchronized ChucK Shreds (4 stars, TypeScript)
- [StuartSul/five-in-a-row](https://github.com/StuartSul/five-in-a-row): Game of five in a row (Omok) written in python, with graphical user interface & artificial intelligence (minimax, DNN, and reinforcement learning) (4 stars, Python, topics: omok, gomoku, gui, ai)
- [StuartSul/elf32-dynamic-linker-rpi](https://github.com/StuartSul/elf32-dynamic-linker-rpi): ELF32 dynamic linker that runs on bare-metal Raspberry Pi. (2 stars, C)
- [StuartSul/homemade-neural-network](https://github.com/StuartSul/homemade-neural-network): Neural network made from scratch, without using any external library. (2 stars, Python, topics: neural-network)
- [StuartSul/latex-assignment-template](https://github.com/StuartSul/latex-assignment-template): A simple and elegant LaTeX template for my university assignments. (1 stars, TeX)
- [StuartSul/LCK-Schedule-Scraper](https://github.com/StuartSul/LCK-Schedule-Scraper): A simple Python script that scrapes LCK match schedules and saves them as an iCal file. (1 stars, Python)
- [StuartSul/hardware-matmul-accelerators](https://github.com/StuartSul/hardware-matmul-accelerators): Matrix-matrix multiplication hardware accelerator, written in Verilog, for deployment on ZedBoard. (1 stars, VHDL)
- [StuartSul/RL_Tic-Tac-Toe](https://github.com/StuartSul/RL_Tic-Tac-Toe): Personal reinforcement learning practice with graphic tic-tac-toe (1 stars, Python)
- [StuartSul/CPP2048](https://github.com/StuartSul/CPP2048): Game of 2048 written in C++ (1 stars, C++)

## How To Use This Skill

- Reach for this skill when the user asks for Stuart Sul's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
