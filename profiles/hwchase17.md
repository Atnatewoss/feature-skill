---
name: @hwchase17-coding-skill
description: "GitHub profile skill from @hwchase17. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build
- Small, demo-first LLM apps that prove one idea end-to-end: ingest data, build a vector store, ask questions, deploy a chat UI.
- Reusable templates and starter kits rather than large frameworks: Streamlit chat templates, notebook examples, CLI wrappers, ingest/query scripts.
- Projects that translate a custom data source into a natural-language interface: Notion, documents, the State of the Union, “your data,” etc.
- Repos are often instructional as much as functional: they are meant to be copied, adapted, and run quickly.

## Coding patterns to mirror
- Keep the flow explicit and linear: install → set `OPENAI_API_KEY` → ingest → query → run app.
- Prefer small, single-purpose files with obvious names:
  - `ingest.py` / `ingest_data.py`
  - `qa.py` / `query_data.py`
  - `app.py` / `main.py`
- Expose simple command-line entry points for quick testing before UI polish.
- Make “how to adapt this” easy to find:
  - a `load_chain`-style function for swapping in custom logic
  - short notes about what to change in the template
- Use concrete, runnable examples in docs and code comments; avoid abstract architecture-heavy explanations.
- Structure docs around steps and expected outcomes, often with one command per step.
- Keep dependencies and setup lightweight and visible in `requirements.txt`.

## Product and UI taste
- Favors practical chat interfaces over elaborate product design.
- Streamlit is a common choice: quick, accessible, easy to deploy.
- The user experience is “ask a question about your data” rather than navigation-heavy dashboards.
- Clear onboarding matters more than visual sophistication:
  - export instructions
  - environment variables
  - exact commands
  - sample prompts
- When UI exists, it is typically minimal and task-focused, with the value in the data-to-answer pipeline.

## Tech stack clues
- Python dominates.
- Strong LangChain usage; newer repos also reference LangGraph.
- Common supporting pieces:
  - Streamlit for web apps
  - CLI scripts for local interaction
  - Jupyter notebooks for examples and experiments
  - OpenAI API / embeddings
  - FAISS and Chroma for vector search
  - LangSmith for tracing/debugging in newer templates
- Expect repository patterns around document loaders, embeddings, vector stores, and retrieval QA.

## When to inspect repos first
- If the task involves a data source, inspect the ingest script before changing the UI.
- If you need a deployable demo, inspect `main.py` or `app.py` first to see the minimal app contract.
- If the repo has both notebook and script versions, check the notebook for the canonical example and the scripts for production-ish wiring.
- If you’re adapting an existing template, inspect README steps and the chain-loading function before adding new abstractions.
- If behavior depends on a vector store or prompt grounding, inspect the query script and any persisted artifacts (`*.pkl`, Chroma/FAISS files) first.

## Repo Map

- [hwchase17/langchain-hub](https://github.com/hwchase17/langchain-hub) (3415 stars, Python)
- [hwchase17/notion-qa](https://github.com/hwchase17/notion-qa) (2154 stars, Python)
- [hwchase17/chat-your-data](https://github.com/hwchase17/chat-your-data) (970 stars, Python)
- [hwchase17/chroma-langchain](https://github.com/hwchase17/chroma-langchain) (376 stars, Jupyter Notebook)
- [hwchase17/langchain-streamlit-template](https://github.com/hwchase17/langchain-streamlit-template) (298 stars, Python)
- [hwchase17/auto-openai-prompter](https://github.com/hwchase17/auto-openai-prompter) (250 stars, Python)
- [hwchase17/adversarial-prompts](https://github.com/hwchase17/adversarial-prompts): Curation of prompts that are known to be adversarial to large language models (192 stars)
- [hwchase17/autoresearch-agents](https://github.com/hwchase17/autoresearch-agents) (143 stars, Python)
- [hwchase17/langchain-gradio-template](https://github.com/hwchase17/langchain-gradio-template) (137 stars, Python)
- [hwchase17/ai-engineer](https://github.com/hwchase17/ai-engineer) (104 stars, Jupyter Notebook)
- [hwchase17/langchain-0.1-guides](https://github.com/hwchase17/langchain-0.1-guides) (95 stars, Jupyter Notebook)
- [hwchase17/chat-langchain-notion](https://github.com/hwchase17/chat-langchain-notion) (79 stars, Python)

## How To Use This Skill

- Reach for this skill when the user asks for Harrison Chase's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
