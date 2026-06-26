<div align="center">

# feature-skill

**Add a new feature into your project by referring to how world-class developers do it.**

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![skills.sh](https://img.shields.io/badge/skills.sh-feature--skill-8A2BE2)](https://skills.sh/Atnatewoss/feature-skill)
[![Profiles](https://img.shields.io/badge/profiles-34-green)](#whats-inside)

</div>

A dispatcher skill for AI coding agents that dynamically loads the precise coding patterns, architectures, and workflows of top-tier engineers - Karpathy for ML, Rauchg for Next.js, Antirez for C, Torvalds for systems, and 30+ more - based on the task at hand.

Carefully handpicked from the architects behind Linux, Redis, Vercel, Supabase, LangChain, and HashiCorp as of 2026.

## How it works

Agents do not read all profiles at once. Progressive disclosure keeps the context window small.

1. The agent reads `SKILL.md` and consults the **Routing Table**.
2. Based on the task domain, it loads only the relevant profile(s) from `profiles/`.
3. It executes the workflow in `workflows/new-feature.md`, applying the loaded profiles' guardrails.

## What's inside

| Path | Purpose |
|---|---|
| `SKILL.md` | Dispatcher - agents read this first for routing logic |
| `AGENTS.md` | Agent auto-configuration entry point |
| `profiles/` | 34 developer profiles (Karpathy, Torvalds, Rauchg, etc.) loaded on demand |
| `profiles/_template.md` | Template for creating new profiles |
| `workflows/` | Execution chains: new-feature, code-review, pr-description |
| `registry-skills/` | Reusable sub-routines: implementation-plan, code-fix, commit-push-pr |
| `skills.sh.json` | Index for skills.sh discoverability |

## Usage

This skill works with any agent that reads markdown files (Claude Code, Cursor, Windsurf, Antigravity, etc.).

```
git submodule add https://github.com/Atnatewoss/feature-skill.git skills/feature-skill
```

Tell your agent to read `skills/feature-skill/AGENTS.md` (or `SKILL.md`) when implementing a new feature, or add it to your `.cursorrules` / `CLAUDE.md`:

```
For any new feature, start by reading skills/feature-skill/AGENTS.md and follow its instructions.
```

## Contributing

We welcome new profiles! Use the template at `profiles/_template.md` to get started.

1. Copy `profiles/_template.md` to `profiles/@username.md`.
2. Fill in all sections with research-backed content.
3. Add the profile to the Routing Table in `SKILL.md`.
4. Submit a pull request.

See [CONTRIBUTING](.github/PULL_REQUEST_TEMPLATE.md) guidelines for details.

## License

[MIT](LICENSE)
