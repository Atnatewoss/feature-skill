---
name: @samuelcolvin-coding-skill
description: "GitHub profile skill from @samuelcolvin. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Production-oriented developer tools in Python, usually centered on **type safety, validation, and observability**.
- Libraries that feel small at the surface but are backed by **serious internal rigor**: `pydantic`, `pydantic-ai`, `logfire`, `watchfiles`, `dirty-equals`, `python-devtools`.
- Projects often target a **clear core use case** rather than generic frameworks: validate data, build agents, trace LLM apps, watch files, run snippets safely.
- Performance-sensitive components are frequently pushed into **Rust** while keeping the public API Pythonic.

## Coding patterns to mirror

- Prefer **modern, explicit type hints** everywhere; treat types as part of the product.
- Keep APIs **canonical and ergonomic**: small number of obvious entry points, sensible defaults, minimal ceremony.
- Favor **clear behavior over abstraction**. If a helper exists, it usually exists to make the public API simpler, not to hide complexity for its own sake.
- Write code that is easy to **test, lint, and document**. These repos consistently include strong tooling (`pre-commit`, formatting configs, CI, coverage, docs build scripts).
- Use **Python 3.10+ style** and idioms; examples in READMEs are concise and executable.
- Be careful with naming: prefer **plain, descriptive names** over clever ones.
- In library code, expect a strong bias toward **backward compatibility, incremental migration, and explicit versioning**.
- For behavior that crosses Python/Rust boundaries, assume they value **small interfaces and strict contracts**.

## Product and UI taste

- The public face is usually **clean, minimal, and confidence-building**, not flashy.
- README and docs style:
  - strong opening promise
  - short "why this exists" section
  - practical examples early
  - lots of badges/links when it helps credibility
- For product UI, especially in Logfire:
  - **simple dashboard, high information density**
  - focus on making advanced tooling feel approachable
  - strong preference for **developer-readable data**: traces, SQL, structured objects, validation context
- The overall taste is "**powerful but not intimidating**": sophisticated internals, restrained presentation.

## Tech stack clues

- **Python** is the main language across the ecosystem.
- **Rust** appears in performance and safety-critical components (`monty`, `rtoml`, `watchfiles` internals).
- Common ecosystem signals:
  - `pyproject.toml`, `uv.lock`
  - `pre-commit`, `ruff`/formatters/linting, `pytest`
  - `mkdocs` / docs-site tooling
  - `asyncio`, `FastAPI`, `OpenTelemetry`, `SQL`
- `pydantic-ai` suggests familiarity with:
  - agent frameworks
  - model/provider abstraction
  - evals
  - tool calling / MCP / UI event streams
- `logfire` suggests strong taste for:
  - tracing/logging
  - telemetry
  - production debugging
  - data-rich developer UX
- Cross-language support is common: Python, Rust, sometimes TypeScript/JS wrappers or tooling.

## When to inspect repos first

- Before coding anything in this ecosystem, inspect the target repo if you need:
  - exact API shape or naming conventions
  - error-handling patterns
  - test layout and fixture style
  - docs/example formatting
  - Python<->Rust boundary patterns
  - release/versioning conventions
- Definitely inspect first for:
  - **agent frameworks** or model abstractions
  - **performance-sensitive code**
  - anything touching **validation, serialization, or tracing**
  - changes that must fit existing **migration/backward-compatibility** expectations
- Also check repo-local instruction files (`AGENTS.md`, `CLAUDE.md`) early; these repos often rely on them for contributor-specific constraints.

## Repo Map

- [pydantic/pydantic](https://github.com/pydantic/pydantic): Data validation using Python type hints (28119 stars, Python, topics: validation, parsing, json-schema, pydantic)
- [pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai): AI Agent Framework, the Pydantic way (18013 stars, Python, topics: agent-framework, pydantic, python, genai)
- [pydantic/monty](https://github.com/pydantic/monty): A minimal, secure Python interpreter written in Rust for use by AI (7787 stars, Rust)
- [pydantic/logfire](https://github.com/pydantic/logfire): AI observability platform for production LLM and agent systems. (4333 stars, Python, topics: fastapi, logging, observability, openai)
- [samuelcolvin/watchfiles](https://github.com/samuelcolvin/watchfiles): Simple, modern and fast file watching and code reload for Python, written in Rust (2508 stars, Python, topics: python, asyncio, filesystem, notify)
- [samuelcolvin/python-devtools](https://github.com/samuelcolvin/python-devtools): Dev tools for python (1078 stars, Python, topics: python-devtools, python, devtools)
- [samuelcolvin/dirty-equals](https://github.com/samuelcolvin/dirty-equals): Doing dirty (but extremely useful) things with equals. (997 stars, Python, topics: python, pytest, unit-testing, testing-tools)
- [samuelcolvin/pytest-pretty](https://github.com/samuelcolvin/pytest-pretty): pytest plugin for pretty printing the test summary. (475 stars, Python)
- [samuelcolvin/rtoml](https://github.com/samuelcolvin/rtoml): A fast TOML library for python implemented in rust. (402 stars, Python, topics: python, rust, toml, deserialization)
- [samuelcolvin/JuliaByExample](https://github.com/samuelcolvin/JuliaByExample): Examples of Julia (317 stars, Julia)
- [samuelcolvin/smokeshow](https://github.com/samuelcolvin/smokeshow): create temporary websites (197 stars, TypeScript, topics: temporary-websites, http, https, coverage-reports)
- [samuelcolvin/aioaws](https://github.com/samuelcolvin/aioaws): Asyncio compatible SDK for aws services. (180 stars, Python, topics: python, aws, s3, ses)
- [samuelcolvin/jinjahtml-vscode](https://github.com/samuelcolvin/jinjahtml-vscode): Syntax highlighting for jinja(2) html templates in vscode (164 stars, JavaScript)
- [samuelcolvin/dnserver](https://github.com/samuelcolvin/dnserver): Simple development DNS server written in python (164 stars, Python, topics: dns, dns-server, python, python3)
- [samuelcolvin/aicli](https://github.com/samuelcolvin/aicli): OpenAI powered AI CLI in just a few lines of code. (126 stars, Python)
- [samuelcolvin/notbook](https://github.com/samuelcolvin/notbook): An argument that Jupyter Notebooks are flawed and the world needs a successor. (92 stars, Python)

## How To Use This Skill

- Reach for this skill when the user asks for Samuel Colvin's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
