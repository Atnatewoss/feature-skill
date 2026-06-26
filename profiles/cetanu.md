---
name: @cetanu-coding-skill
description: "GitHub profile skill from @cetanu. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Infra-facing tools that transform or serve config rather than end-user apps: Envoy control planes, SPF flatteners, DNS lookups, rate-limit services.
- Small, sharp utilities with one clear job:
  - `sender_policy_flattener` flattens SPF includes into IP blocks.
  - `cmdprobe` is a portable health-check binary.
  - `veiled` is a thin CLI wrapper around Fernet.
- Libraries and generators that improve ergonomics for other systems:
  - `envoy_data_plane` turns Envoy protos into Python dataclasses for autocomplete and validation.
- Repos are usually built around real operational needs and then generalized with config, plugins, or reusable APIs.

## Coding patterns to mirror

- Prefer explicit, config-driven flows over abstraction-heavy designs.
- Keep the main path thin; push complexity into data models, templates, or small helpers.
- Use strong, structured representations for protocol/config data:
  - dataclasses / generated types for API surfaces
  - JSON/YAML-style config objects
- Lean into composable extension points when a system needs growth:
  - sovereign exposes polling plugins in Python
- Make operational behavior visible and reproducible:
  - `Makefile` targets for run/lint/test
  - `uv` for Python env management
  - lockfiles committed (`uv.lock`, `package-lock.json`)
- Favor readable CLI ergonomics:
  - long-form flags, descriptive help text, sensible defaults
  - support both config-file and direct-flag usage
- Tests and release hygiene matter:
  - explicit `test/` or `tests/`
  - changelog/release docs
  - contributor instructions in README

## Product and UI taste

- Utility-first, not flashy.
- When a UI exists, it looks functional and lightweight rather than custom-designed:
  - `sovereign` uses Bulma + Sass for a straightforward admin surface.
- Docs are part of the product:
  - long README sections for mission, mechanism, setup, and contribution flow
  - examples and sample commands are preferred over prose-only explanations
- Even non-UI output is designed for clarity:
  - `sender_policy_flattener` can emit email diffs or HTML fallback when alerts are needed.

## Tech stack clues

- Strong Python bias for core tooling and services.
- Common Python stack signals:
  - `fastapi`
  - `pytest`
  - `pylint`
  - `pyproject.toml`
  - `uv`
  - `poetry` in older projects
  - `betterproto` for protobuf/dataclass generation
- Envoy/control-plane work is a recurring theme:
  - `envoy`, `envoyproxy`, `data-plane-api`, `xDS`, gRPC-adjacent patterns
- Rust appears for small, performance-sensitive CLI tools.
- Lua is used for Neovim plugins and editor automation.
- Go shows up sparingly, likely for surrounding infrastructure tooling.
- Ancillary frontend assets are minimal and usually build from Sass rather than a large JS app.

## When to inspect repos first

- Before touching Envoy, xDS, or config-generation logic.
- Before adding a CLI flag or changing command semantics in any utility.
- Before editing README/examples: docs are often the primary user interface.
- Before introducing new dependency patterns; existing projects tend to be conservative and specific.
- Before changing build/test commands: each repo has its own Makefile/uv/poetry setup.
- Before implementing anything around templates, polling, or plugin hooks in `sovereign`.
- Before changing data models in `envoy_data_plane`, since generated/typed API shapes likely matter more than hand-written convenience.

## Repo Map

- [cetanu/sovereign](https://github.com/cetanu/sovereign): JSON control-plane for Lyft's Envoy proxy (65 stars, Python, topics: envoy, control-plane, envoy-proxy, fastapi)
- [cetanu/envoy_data_plane](https://github.com/cetanu/envoy_data_plane): A conversion of envoyproxy/data-plane-api into Python dataclasses using betterproto (22 stars, Python, topics: python-library, envoy, envoyproxy, envoy-data-plane)
- [cetanu/cmdprobe](https://github.com/cetanu/cmdprobe): Portable, configurable health check utility (0 stars, Rust)
- [cetanu/veiled](https://github.com/cetanu/veiled): A very thin CLI wrapper around cryptography.fernet:Fernet for symmetric encryption (1 stars, Python)
- [cetanu/dotfiles](https://github.com/cetanu/dotfiles) (7 stars, Lua)
- [cetanu/taskrunner.nvim](https://github.com/cetanu/taskrunner.nvim): Plugin to make it easy to run your project commands (3 stars, Lua)
- [cetanu/sender_policy_flattener](https://github.com/cetanu/sender_policy_flattener): Compact large SPF chains into flat blocks of IP addresses (43 stars, Python, topics: spf-record, spf, email, dns)
- [cetanu/blistd](https://github.com/cetanu/blistd): DNS Blacklist Lookup (12 stars, Python)
- [cetanu/kube-stuff](https://github.com/cetanu/kube-stuff) (7 stars, Go)
- [cetanu/zargs](https://github.com/cetanu/zargs): A rewrite of xargs in Rust, for fun and science (4 stars, Rust)
- [cetanu/archon.nvim](https://github.com/cetanu/archon.nvim): A Neovim plugin for recording architectural decisions, within the code. (3 stars, Lua)
- [cetanu/python-env.nvim](https://github.com/cetanu/python-env.nvim) (3 stars, Lua)
- [cetanu/ipfilter_howto](https://github.com/cetanu/ipfilter_howto): IP Filter Based Firewalls HOWTO (3 stars)
- [cetanu/steward](https://github.com/cetanu/steward): An implementation of the Lyft rate-limit service (2 stars, Rust, topics: envoy, envoyproxy, rate-limiting)

## How To Use This Skill

- Reach for this skill when the user asks for Vasilios's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
