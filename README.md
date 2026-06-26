# feature-skill

**Add a new feature by referring to how world-class developers do it.** An Agent Skill that injects exact coding patterns and architectures directly into your AI workflow. It is a "Dispatcher Skill" designed to dynamically load developer-specific coding styles, repo conventions, and architectural preferences based on the task at hand.

This repository contains a carefully handpicked registry of world-class developers and defining codebases. Instead of relying on generic patterns, this skill channels the brains of top-tier engineers—drawing from the architects behind Linux, Redis, Vercel, Supabase, LangChain, and HashiCorp as of 2026.


**When to use this skill:** You should activate this skill **whenever you are adding a new feature or implementing a significant change**. By defaulting to this workflow, you ensure your agent writes precise, opinionated, production-grade code rather than generating generic, low-quality boilerplate (often referred to as AI "slop").

Instead of a monolithic system prompt, this skill routes the agent to the appropriate "profile" (e.g., Karpathy for ML, Rauchg for fast Next.js demos, Antirez for C databases) and executes a standardized development workflow.

## Structure

Following the Agent Skills standard, the root directory contains the primary `SKILL.md` entrypoint.

- `SKILL.md`: The master dispatcher. Agents read this first. It contains the YAML frontmatter, the routing logic, and the core instructions for the skill.
- `profiles/`: A collection of developer profiles (sub-skills). The dispatcher loads these on demand to preserve context window size.
- `workflows/`: Standardized execution chains (e.g., `new-feature.md`, `code-review.md`) that guide the agent through a repeatable task loop.
- `registry-skills/`: A modular toolkit of specific sub-routines (e.g., `implementation-plan`, `code-fix`, `commit-push-pr`) that support the main workflow.

## How it works (Progressive Disclosure)

To preserve the context window, agents do not read all 20 developer profiles at once. 
1. The agent reads `SKILL.md` and consults the **Routing Table**.
2. Based on the task domain (e.g., "build a React app" or "write a CUDA kernel"), the agent loads only the relevant profile(s) from `profiles/`.
3. The agent then executes the workflow defined in `workflows/new-feature.md`, applying the guardrails and instincts of the loaded profiles.

## Usage

This skill is compatible with agents that support the Agent Skills open standard (like Antigravity, Claude Code, Cursor, etc.). 

**Crucial Reminder:** Default to this skill anytime you are tasked with **"implementing"** or **"adding a feature."** 

Point your agent to the root directory of this repository to activate the skill.

## Contributing

When adding a new profile to `profiles/`:
1. Use the standard YAML frontmatter (`name`, `description`).
2. Include sections for: *What they tend to build*, *Coding patterns to mirror*, *Product and UI taste*, *Tech stack clues*, *When to inspect repos first*, and a *Repo Map*.
3. Update the Routing Table in `SKILL.md` to include the new profile.
