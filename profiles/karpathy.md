---
name: @karpathy-coding-skill
description: "GitHub profile skill from @karpathy. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Small, self-contained systems that do one hard thing well: train, evaluate, or serve an LLM with minimal moving parts.
- Repos that expose the whole pipeline plainly: data prep, model, training, inference, UI, and evaluation are all present, but split only when it improves clarity.
- "Teeth over education" code: practical, benchmark-oriented, and meant to be hacked on immediately.
- Strong preference for minimal surface area:
  - single-file or few-file core loops
  - no heavy framework layer
  - no distributed complexity unless it is the point of the project
- Projects often explore an idea by shrinking it to the smallest working version:
  - `micrograd` -> tiny autograd
  - `minGPT` / `nanoGPT` -> minimal GPT training
  - `llama2.c` / `llm.c` -> raw C/CUDA inference/training
  - `nanochat` / `autoresearch` -> end-to-end LLM systems on one GPU

## Coding patterns to mirror

- Keep core logic compact and readable. Favor "a ~300-line training loop" over layered abstractions.
- Make the main script the center of gravity. The repo usually wants a clear entrypoint that shows the whole system end-to-end.
- Use explicit, hackable knobs:
  - `--depth`, batch size, context length, learning rate, dropout, compile flags, etc.
  - defaults should be reasonable and optimized for a concrete compute budget
- Prefer simple, direct naming. Model components and scripts are usually named by function, not by architecture ceremony.
- Write code so the tradeoff is obvious:
  - what is fixed vs configurable
  - what is the one metric that matters
  - what is meant to be edited by the user/agent
- Optimize for iteration speed and comparability:
  - fixed time budgets
  - one dominant validation metric
  - small diffs that let you tell whether a change helped
- When in doubt, collapse complexity before adding abstractions. The style consistently values "can I understand this in one pass?".
- Use notebooks for explanation/experimentation, but keep the executable system in scripts.

## Product and UI taste

- The UI taste is functional, familiar, and low-friction rather than ornate.
- Good interfaces here feel like:
  - a ChatGPT-like web app
  - straightforward training dashboards/leaderboards
  - clear progress artifacts (`progress.png`, scaling plots, loss curves)
- Visuals are used to communicate state, not decorate:
  - logo + one or two clear plots
  - benchmarks and leaderboards
  - concise status pages
- If building UI, prefer:
  - familiar interaction patterns
  - minimal chrome
  - direct access to the model/chat/tool output
  - obvious links to logs, runs, and metrics

## Tech stack clues

- Heavy Python usage for research orchestration and training loops.
- PyTorch is the default implementation substrate for most repos.
- CUDA/C is used when performance or "close to the metal" simplicity matters (`llm.c`, `llama2.c`).
- Jupyter notebooks appear for pedagogy, analysis, and scaling-law exploration.
- `uv` + `pyproject.toml` are used for modern Python packaging and reproducible environments.
- Common adjacent tooling:
  - `tiktoken`, `datasets`, `transformers`, `wandb`, `tqdm`
  - single-GPU training assumptions
  - occasional CPU/MPS compatibility paths
- The stack often mixes research code and product code in one repo, but keeps the runtime path obvious.

## When to inspect repos first

- Inspect first if the task touches:
  - training loops
  - model definitions
  - eval metrics
  - CLI flags/configuration patterns
  - script entrypoints or run orchestration
- Also inspect first if you need to match:
  - README tone and structure
  - lightweight docs conventions
  - output artifacts like plots, checkpoints, or run logs
  - the repo's preferred "single source of truth" file
- For new features, check whether the repo expects:
  - one file to edit
  - a Markdown-driven instruction layer
  - a script-based pipeline instead of a framework-based one
- If the change affects performance, inspect for the repo's canonical benchmark setup before coding. The style is very metric-driven, and small implementation details often matter.

## Repo Map

- [karpathy/nanoGPT](https://github.com/karpathy/nanoGPT): The simplest, fastest repository for training/finetuning medium-sized GPTs. (60173 stars, Python)
- [karpathy/nanochat](https://github.com/karpathy/nanochat): The best ChatGPT that $100 can buy. (55468 stars, Python)
- [karpathy/llm.c](https://github.com/karpathy/llm.c): LLM training in simple, raw C/CUDA (30355 stars, Cuda)
- [karpathy/llama2.c](https://github.com/karpathy/llama2.c): Inference Llama 2 in one file of pure C (19674 stars, C)
- [karpathy/micrograd](https://github.com/karpathy/micrograd): A tiny scalar-valued autograd engine and a neural net library on top of it with PyTorch-like API (16459 stars, Jupyter Notebook)
- [karpathy/autoresearch](https://github.com/karpathy/autoresearch): AI agents running research on single-GPU nanochat training automatically (88716 stars, Python)
- [karpathy/LLM101n](https://github.com/karpathy/LLM101n): LLM101n: Let's build a Storyteller (37379 stars)
- [karpathy/minGPT](https://github.com/karpathy/minGPT): A minimal PyTorch re-implementation of the OpenAI GPT (Generative Pretrained Transformer) training (24626 stars, Python)
- [karpathy/nn-zero-to-hero](https://github.com/karpathy/nn-zero-to-hero): Neural Networks: Zero to Hero (23296 stars, Jupyter Notebook)
- [karpathy/llm-council](https://github.com/karpathy/llm-council): LLM Council works together to answer your hardest questions (21547 stars, Python)
- [karpathy/char-rnn](https://github.com/karpathy/char-rnn): Multi-layer Recurrent Neural Networks (LSTM, GRU, RNN) for character-level language models in Torch (12068 stars, Lua)
- [karpathy/convnetjs](https://github.com/karpathy/convnetjs): Deep Learning in Javascript. Train Convolutional Neural Networks (or ordinary ones) in your browser. (11174 stars, JavaScript)

## How To Use This Skill

- Reach for this skill when the user asks for Andrej's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
