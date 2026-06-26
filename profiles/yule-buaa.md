---
name: @yule-BUAA-coding-skill
description: "GitHub profile skill from @yule-BUAA. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build
- Research-first ML repos that package a paper's method into a runnable codebase: model merging for LMs, dynamic graph learning libraries, spatio-temporal graph models, heterogeneous graph models.
- Most projects are **benchmark- and script-oriented**, not app-oriented: train/eval entrypoints, preprocessing steps, baselines, and reproducible experiments.
- They often build **method families**, not one-off demos:
  - `MergeLM` / `MergeLLM`: merging and inference scripts for multiple model types.
  - `DyGLib`: a reusable library with multiple dynamic graph methods and standardized evaluation.
- Repos are usually framed around the paper result plus "how to run it," with README sections for overview, datasets, and execution.

## Coding patterns to mirror
- Prefer **clear CLI entrypoints** over deeply abstracted frameworks:
  - examples like `train_*.py`, `evaluate_*.py`, `merge_*.py`, `inference_*.py`.
- Keep the project **modular but lightweight**:
  - `models/`, `utils/`, `scripts/`, `preprocess_data/`, `method_merging_methods/`, `figures/`.
- Favor **task-specific files** and explicit script names rather than a single generic runner.
- Use **standard ML plumbing**:
  - dataset preprocessing scripts
  - training / inference / evaluation split
  - utilities for metrics and config handling
- Readmes are practical and research-oriented:
  - paper link, short summary, news updates, datasets, environment, and exact command examples.
- Match their habit of supporting **baseline comparison and extensibility**:
  - add new models/datasets by dropping code into the expected folder and wiring it into existing train/eval scripts.

## Product and UI taste
- No evidence of product/UI-heavy design. The taste is for **scientific utility and clarity**, not polished interfaces.
- When they do present visuals, they are usually **paper figures in the README** and simple diagrams, not interactive UI.
- Documentation style is direct and operational:
  - "how to preprocess"
  - "how to train"
  - "how to evaluate"
  - "how to extend"

## Tech stack clues
- Primary language: **Python**.
- Common ML stack signals:
  - **PyTorch**
  - `numpy`, `pandas`, `tqdm`, `tabulate`
  - likely `transformers` / Hugging Face tooling in LM-related work
- Repository structure suggests comfort with:
  - command-line Python scripts
  - experiment configuration via args
  - checkpointing / model save-load flows
  - benchmark datasets and preprocessing pipelines
- In the PEFT-adjacent ecosystem, the style leans toward **integrating with established libraries** rather than reinventing infrastructure.

## When to inspect repos first
- Inspect the existing repo first when the task touches:
  - training loops
  - evaluation metrics
  - dataset preprocessing
  - model-merging logic
  - adding a new baseline or benchmark
- Also inspect first if the change needs to fit their script conventions:
  - they tend to have one canonical file per task, and matching the naming/arg style matters.
- For README or experiment changes, copy their structure:
  - short overview -> setup -> dataset/data prep -> run commands -> results/news.
- If you're unsure about abstractions, prefer **small, explicit script additions** over introducing a new framework layer.

## Repo Map

- [yule-BUAA/MergeLM](https://github.com/yule-BUAA/MergeLM): Codebase for Merging Language Models (ICML 2024) (869 stars, Python)
- [yule-BUAA/MergeLLM](https://github.com/yule-BUAA/MergeLLM): Codes for Merging Large Language Models (37 stars, Python)
- [yule-BUAA/DyGLib](https://github.com/yule-BUAA/DyGLib): A Library for Dynamic Graph Learning (NeurIPS 2023) (300 stars, Python)
- [yule-BUAA/DSTGCN](https://github.com/yule-BUAA/DSTGCN): codes of Deep Spatio-Temporal Graph Convolutional Network for Traffic Accident Prediction (80 stars, Python, topics: deep-learning, spatial-temporal-data, graph-convolutional-networks, traffic-accident-prediction)
- [yule-BUAA/R-HGNN](https://github.com/yule-BUAA/R-HGNN): codes of R-HGNN model for Heterogeneous Graph Representation Learning (47 stars, Python)
- [huggingface/peft](https://github.com/huggingface/peft): PEFT: State-of-the-art Parameter-Efficient Fine-Tuning. (21322 stars, Python, topics: adapter, diffusion, llm, parameter-efficient-learning)
- [yule-BUAA/DyGLib_TGB](https://github.com/yule-BUAA/DyGLib_TGB): An Empirical Evaluation of Temporal Graph Benchmark (38 stars, Python)
- [yule-BUAA/DNNTSP](https://github.com/yule-BUAA/DNNTSP): codes of DNNTSP model for Temporal Sets Prediction (33 stars, Python, topics: data-minig, deep-learning, temporal-sets-prediction, temporal-data)
- [yule-BUAA/LEGNN](https://github.com/yule-BUAA/LEGNN): codes of LEGNN for Semi-supervised Node Classification (12 stars, Python)
- [yule-BUAA/HGConv](https://github.com/yule-BUAA/HGConv): codes of HGConv model for Heterogeneous Graph Learning (9 stars, Python)
- [yule-BUAA/ETGNN](https://github.com/yule-BUAA/ETGNN): codes of Element-guided Temporal Graph Representation Learning for Temporal Sets Prediction (7 stars, Python)
- [yule-BUAA/SFCNTSP](https://github.com/yule-BUAA/SFCNTSP): codes of Predicting Temporal Sets with Simplified Fully Connected Networks at AAAI 2023 (5 stars, Python)
- [yule-BUAA/CTTSP](https://github.com/yule-BUAA/CTTSP): codes of Continuous-Time User Preference Modelling for Temporal Sets Prediction (3 stars, Python)

## How To Use This Skill

- Reach for this skill when the user asks for Yu Le's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
