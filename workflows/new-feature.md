---
name: new-feature
description: "The default dev workflow. Runs every time a feature is being added or changed. Plan → implement → PR → ship."
---

## Step 1 — Break it down

Before touching code, structure the approach (if complex, consult `registry-skills/implementation-plan.md`):

- State the feature in one sentence. If you can't, it's too big — split it.
- Identify the smallest working unit that proves the feature works. Build that first.
- **Create a branch:** Never work directly on `main` or `master`. Create a descriptive branch (e.g., `feat/auth-ui` or `fix/nav-bug`) before writing any code.
- List the files that will change. If more than ~5, question whether you're doing too much.
- Call out edge cases now, not during review. What breaks? What's the migration path? What's the rollback?

*Karpathy instinct: shrink it to the smallest working version.*

Once planned, track your progress step-by-step (use `registry-skills/implementation-todo.md` if helpful for long tasks).

## Step 2 — Check for existing patterns

Before inventing anything, analyze the repo context (refer to `registry-skills/folder-tree.md` if the architecture is unclear):

- Search the repo for similar features, naming conventions, and file placement.
- Read the README. If the repo documents conventions, follow them.
- Check for relevant profiles (via the routing table in `SKILL.md`). If a profile covers this domain, read it and optionally clone their reference repos to study the pattern.
- If the repo has `AGENTS.md`, `CLAUDE.md`, or similar instruction files, read those first.

*Rauchg instinct: readme-first. Don't invent when you can follow.*

## Step 3 — Implement

Write the code:

- Start with the core behavior. No tests-first, no scaffolding-first — get the thing working.
- Keep surface area minimal. Every new export, file, or abstraction needs to justify itself.
- Match the repo's existing style: formatting, naming, import patterns, error handling.
- If the activated profile says "inspect repos first" for this kind of change, do it now — clone the reference repo and study the relevant file before writing yours.
- If things break or tests fail, you may loop through `registry-skills/code-fix.md` to systematically debug.

Guardrails from the profiles:
- **Minimal surface area** — don't add what you don't need (karpathy, rauchg, torvalds)
- **Type safety** — if the repo uses TypeScript, keep it strict (katt, himself65, ping-maxwell)
- **Explicit over clever** — readable code beats elegant code (torvalds, samuelcolvin)
- **Match the era** — check whether the repo is modern or legacy before applying patterns (rauchg)

## Step 4 — Generate PR description

Run `workflows/pr-description.md` to generate the pull request description.

## Step 5 — Ship

Finalize the delivery. (You can lean on `registry-skills/commit-push-pr.md` for automation standards):

- Stage the changes. Review the diff one more time.
- Commit with a clear, conventional message.
- Push and open the PR with the generated description.
- If CI exists, wait for it. If not, self-verify.

```
git add -A
git commit -m "<type>: <what changed>"
git push origin HEAD
```

That's the loop. Repeat for the next feature.
