---
name: @lucidrains-coding-skill
description: "GitHub profile skill from @lucidrains. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- PyTorch implementations of recent ML papers, especially attention-centric generative models and vision transformers.
- Reusable libraries rather than one-off scripts: each repo usually exposes a small public API (`ViT`, `GaussianDiffusion`, `Trainer`, etc.) and then layers many variants on top.
- “Reference implementation” code that aims to be usable by others, not just a notebook experiment.
- Projects that track a research area over time: a base model, then follow-up variants, simplifications, and extensions in the same package.
- Training utilities and end-to-end examples are part of the product, not an afterthought.

## Coding patterns to mirror

- Keep the main constructor API compact and readable; favor explicit keyword args with sane defaults.
- Prefer composable modules over deep inheritance trees. New variants usually feel like small wrappers around a shared core.
- Make shapes and tensor flow easy to infer from the code. The repos lean on straightforward forward passes over clever abstraction.
- Use `einops`-style tensor reshaping where it improves clarity.
- Expose practical extras directly in the library:
  - trainers
  - sampling helpers
  - attention inspection hooks
  - multi-GPU / mixed precision support
- Name classes after the paper or concept users will search for (`SimpleViT`, `GaussianDiffusion1D`, `Unet1D`, `Trainer1D`).
- Write examples that are copy-pastable and minimal:
  - import
  - instantiate
  - random input
  - forward / sample
- Comments and README text often explain the paper idea and the implementation choice in plain language, sometimes with a light, conversational tone.

## Product and UI taste

- Documentation is visual but not flashy: a small hero image or GIF at the top, then a dense table of contents.
- READMEs are structured for skimming by researchers:
  - short model summary
  - install
  - usage
  - parameters
  - variants
  - FAQ / resources / citations
- They like showing many closely related model variants in one repo rather than splitting them prematurely.
- Examples and diagrams matter more than polished UI. The “UI” is mostly the README experience and import ergonomics.

## Tech stack clues

- Python-first, almost entirely PyTorch.
- Packaging is conventional and lightweight: `pyproject.toml` or `setup.py`, plus `MANIFEST.in` in several repos.
- Common ML stack signals:
  - `torch`
  - `einops`
  - `accelerate` for distributed training
  - mixed precision / AMP
  - optional flash attention
- Repos often include:
  - `examples/`
  - `tests/`
  - `images/`
  - `configs/`
  - training scripts at the root
- The codebase usually supports both inference and training paths in the same package.

## When to inspect repos first

- If you need to add a new paper variant, inspect the nearest existing implementation first; the style is strongly lineage-based.
- If the task touches tensor shapes, attention blocks, or sampling, check the repo’s forward path and helper modules before editing.
- If you need to add an API, mirror the existing constructor/README pattern rather than inventing a new surface.
- If the request involves training, multi-GPU, or checkpoints, inspect the trainer classes and example scripts first.
- If you’re unsure about naming, defaults, or what should be public, look at how similar classes are exported in the package root.

## Repo Map

- [lucidrains/vit-pytorch](https://github.com/lucidrains/vit-pytorch): Implementation of Vision Transformer, a simple way to achieve SOTA in vision classification with only a single transformer encoder, in Pytorch (25364 stars, Python, topics: artificial-intelligence, attention-mechanism, transformers, computer-vision)
- [lucidrains/alphafold3-pytorch](https://github.com/lucidrains/alphafold3-pytorch): Implementation of Alphafold 3 from Google Deepmind in Pytorch (1673 stars, Python, topics: artificial-intelligence, deep-learning, attention-mechanisms, denoising-diffusion)
- [lucidrains/imagen-pytorch](https://github.com/lucidrains/imagen-pytorch): Implementation of Imagen, Google's Text-to-Image Neural Network, in Pytorch (8417 stars, Python, topics: artificial-intelligence, deep-learning, text-to-image, imagination-machine)
- [lucidrains/x-transformers](https://github.com/lucidrains/x-transformers): A concise but complete full-attention transformer with a set of promising experimental features from various papers (5913 stars, Python, topics: artificial-intelligence, deep-learning, attention-mechanism, transformers)
- [lucidrains/vector-quantize-pytorch](https://github.com/lucidrains/vector-quantize-pytorch): Vector (and Scalar) Quantization, in Pytorch (3968 stars, Python, topics: artificial-intelligence, deep-learning, pytorch, vector-quantization)
- [lucidrains/transfusion-pytorch](https://github.com/lucidrains/transfusion-pytorch): Pytorch implementation of Transfusion, "Predict the Next Token and Diffuse Images with One Multi-Modal Model", from MetaAI (1375 stars, Python, topics: artificial-intelligence, attention, deep-learning, multi-modal)
- [lucidrains/DALLE2-pytorch](https://github.com/lucidrains/DALLE2-pytorch): Implementation of DALL-E 2, OpenAI's updated text-to-image synthesis neural network,  in Pytorch (11310 stars, Python, topics: artificial-intelligence, deep-learning, text-to-image)
- [lucidrains/denoising-diffusion-pytorch](https://github.com/lucidrains/denoising-diffusion-pytorch): Implementation of Denoising Diffusion Probabilistic Model in Pytorch (10616 stars, Python, topics: artificial-intelligence, deep-learning, generative-model, score-matching)
- [lucidrains/PaLM-rlhf-pytorch](https://github.com/lucidrains/PaLM-rlhf-pytorch): Implementation of RLHF (Reinforcement Learning with Human Feedback) on top of the PaLM architecture. Basically ChatGPT but with PaLM (7866 stars, Python, topics: artificial-intelligence, attention-mechanisms, deep-learning, reinforcement-learning)
- [lucidrains/DALLE-pytorch](https://github.com/lucidrains/DALLE-pytorch): Implementation / replication of DALL-E, OpenAI's Text to Image Transformer, in Pytorch (5629 stars, Python, topics: artificial-intelligence, deep-learning, attention-mechanism, text-to-image)
- [lucidrains/deep-daze](https://github.com/lucidrains/deep-daze): Simple command line tool for text to image generation using OpenAI's CLIP and Siren (Implicit neural representation network). Technique was originally created by https://twitter.com/advadnoun (4319 stars, Python, topics: artificial-intelligence, deep-learning, transformers, siren)
- [lucidrains/stylegan2-pytorch](https://github.com/lucidrains/stylegan2-pytorch): Simplest working implementation of Stylegan2, state of the art generative adversarial network, in Pytorch. Enabling everyone to experience disentanglement (3783 stars, Python, topics: generative-adversarial-network, artificial-intelligence, pytorch, machine-learning)
- [lucidrains/musiclm-pytorch](https://github.com/lucidrains/musiclm-pytorch): Implementation of MusicLM, Google's new SOTA model for music generation using attention networks, in Pytorch (3293 stars, Python, topics: artificial-intelligence, attention-mechanisms, deep-learning, music-synthesis)
- [lucidrains/audiolm-pytorch](https://github.com/lucidrains/audiolm-pytorch): Implementation of AudioLM, a SOTA Language Modeling Approach to Audio Generation out of Google Research, in Pytorch (2621 stars, Python, topics: artificial-intelligence, attention-mechanisms, audio-synthesis, deep-learning)

## How To Use This Skill

- Reach for this skill when the user asks for Phil Wang's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
