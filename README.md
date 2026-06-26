# feature-skill

**Add a new feature into your project by referring to how world-class developers do it.**

This repository is an **Agent Skill** that stops your AI from writing generic "slop". It acts as a dispatcher, dynamically loading the precise coding patterns, architectures, and workflows of top-tier engineers (e.g., Karpathy for ML, Rauchg for Next.js, Antirez for C) based on the task at hand.

Carefully handpicked from the architects behind Linux, Redis, Vercel, Supabase, LangChain, and HashiCorp as of 2026.

## Structure

- `SKILL.md`: The dispatcher. Agents read this first for routing logic.
- `profiles/`: Developer profiles loaded on demand based on the task domain.
- `workflows/`: Execution chains (new-feature, code-review, pr-description).
- `registry-skills/`: Sub-routines (implementation-plan, code-fix, commit-push-pr).

## How it works

Agents do not read all profiles at once. Progressive disclosure keeps the context window small.

1. The agent reads `SKILL.md` and consults the **Routing Table**.
2. Based on the task domain, it loads only the relevant profile(s) from `profiles/`.
3. It executes the workflow in `workflows/new-feature.md`, applying the loaded profiles' guardrails.

## Usage

This skill works with any agent that reads markdown files (Antigravity, Claude Code, Cursor, Windsurf, etc.).

**Clone or submodule into your project:**
```bash
git submodule add https://github.com/Atnatewoss/feature-skill.git skills/feature-skill
```

Then tell your agent to read `skills/feature-skill/SKILL.md` when implementing a new feature, or add it to your `.cursorrules` / `CLAUDE.md`:
```
For any new feature, start by reading skills/feature-skill/SKILL.md and follow its routing and workflow instructions.
```

## Contributing

When adding a new profile to `profiles/`:
1. Use the standard YAML frontmatter (`name`, `description`).
2. Include sections for: *What they tend to build*, *Coding patterns to mirror*, *Product and UI taste*, *Tech stack clues*, *When to inspect repos first*, and a *Repo Map*.
3. Update the Routing Table in `SKILL.md` to include the new profile.
