---
name: pr-description
description: "Generate a clean, informative PR description from the current diff."
---

## Instructions

Read the staged or committed diff. Produce a PR description with this structure:

### Title
One line. Conventional commit style: `<type>: <what changed>`

Types: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `perf`, `build`

### What
2–4 sentences. What does this PR do? State the behavior change, not the implementation detail.

### Why
1–2 sentences. Why is this change needed? Link to an issue if one exists.

### How
Bullet list of the key implementation decisions. Focus on things a reviewer wouldn't guess from the diff alone:
- Why this file and not that one?
- Why this approach over the obvious alternative?
- Any tradeoffs made?

### Testing
How was this verified? Options:
- Manual testing steps
- Automated test output
- "N/A — no behavioral change"

### Breaking changes
List any. If none, omit this section entirely.

## Rules

- Keep it short. A PR description that's longer than the diff is a red flag.
- Don't restate the diff line by line. Reviewers can read code.
- If the change is trivial (typo fix, dep bump), the description can be one line.
- Match the tone of the repo's existing PRs if examples are available.
