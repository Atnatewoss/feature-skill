---
name: commit-push-pr
description: "Automates the process of staging, committing, pushing, and opening a PR."
---

## Objective
Standardize how features are shipped to the repository.

## Instructions
1. Review the staged diff. Ensure no accidental secrets or stray logs are included.
2. Generate a conventional commit message (`feat:`, `fix:`, `refactor:`, etc.).
3. Push to the appropriate branch.
4. Open a Pull Request, utilizing `workflows/pr-description.md` to populate the description body.
