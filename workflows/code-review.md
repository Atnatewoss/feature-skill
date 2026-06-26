---
name: code-review
description: "Review code changes with profile-informed guardrails. Use for self-review before PR or reviewing someone else's work."
---

## Instructions

Read the diff. Evaluate against these criteria, in order of priority:

### 1. Correctness
- Does it do what it claims?
- Are there off-by-one errors, race conditions, or unhandled edge cases?
- Does it break existing behavior?

### 2. Scope
- Is this the smallest change that solves the problem?
- Are there unrelated changes mixed in?
- Should this be split into multiple PRs?

*Torvalds instinct: if a patch does two things, it's two patches.*

### 3. Pattern compliance
- Does it follow the repo's existing conventions?
- File placement, naming, formatting, import style — does it match what's already there?
- If a profile is active, does the code align with that profile's patterns?

### 4. Surface area
- Does this add new exports, files, or abstractions? Are they justified?
- Could this be done with less code?
- Is anything added that isn't used yet ("we might need it later")?

*Karpathy instinct: can I understand this in one pass?*

### 5. Safety
- Any security implications? Input validation? Auth checks?
- Any data loss scenarios?
- Any backward compatibility concerns?

## Output format

For each issue found, state:
- **File and line** — where the issue is
- **Severity** — `blocker`, `should-fix`, or `nit`
- **What** — one sentence describing the problem
- **Suggestion** — how to fix it (optional but preferred)

If the code is clean, say so. Don't invent issues to seem thorough.
