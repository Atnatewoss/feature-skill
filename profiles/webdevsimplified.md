---
name: @WebDevSimplified-coding-skill
description: "GitHub profile skill from @WebDevSimplified. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Educational, example-first repos: lesson folders, small demos, and code meant as a reference rather than a drop-in product.
- Beginner-friendly learning material across the stack: HTML/CSS/JS fundamentals, SQL exercises, React patterns, and isolated "how to" projects.
- Practical clones and feature demos over abstract libraries: WebRTC video chat, face detection, auth flows, folder structure examples, permissions, hooks.
- Reusable building blocks: custom hooks, registry entries, utility snippets, and pattern examples that can be copied into other apps after understanding them.

## Coding patterns to mirror

- Favor small, focused modules and explicit naming over clever abstractions.
- Keep examples self-contained and easy to inspect; one repo often maps cleanly to one concept.
- Use modern JavaScript/TypeScript syntax, but don't over-engineer architecture when a straightforward implementation is enough.
- Prefer clear incremental fixes and notes when behavior is subtle or browser-dependent.
- Document the "why" in README or inline comments when a workaround matters more than the implementation itself.
- For React work, lean toward custom hooks, simple composition, and practical utilities rather than heavy state frameworks.
- When building exercises or tutorials, structure the code so it's easy to compare before/after states or lesson-by-lesson progression.

## Product and UI taste

- Functional and instructional UI first; polish is secondary to clarity.
- Interfaces tend to be clean, minimal, and direct, with the main goal being to demonstrate a concept quickly.
- Examples usually expose the core interaction immediately rather than burying it in visual complexity.
- In clone-style projects, the emphasis is on getting core behavior right, not inventing a new visual language.

## Tech stack clues

- Strong React presence, including Create React App-era setups and testing-library conventions.
- Vanilla JavaScript remains important, especially for learning projects and browser API demos.
- TypeScript appears in newer utility/registry-style repos.
- MDX is used for blog/content-driven code.
- Common web APIs and libraries show up: WebRTC, face-api.js, Firebase, Passport, js-cookie, lodash, copy-to-clipboard.
- SQL/MySQL education is a notable theme, so practical database examples are in scope.
- Repository structure often follows the tool or lesson format rather than a large monorepo convention.

## When to inspect repos first

- If you need the exact shape of a custom hook API, inspect first; these repos are likely to encode intended ergonomics.
- If the task involves browser APIs, media capture, or compatibility quirks, inspect first for the specific event handling or deprecated API replacements they use.
- If you're matching a tutorial or lesson repository, inspect first to preserve folder-by-folder organization and naming.
- If the work touches auth, permissions, or realtime/video features, inspect first because the implementation style is usually pragmatic and dependency-specific.
- If you need to match content or docs structure, inspect first to mirror their concise instructional README style rather than inventing a new format.

## Repo Map

- [WebDevSimplified/wds-shadcn-registry](https://github.com/WebDevSimplified/wds-shadcn-registry) (285 stars, TypeScript)
- [WebDevSimplified/Web-Dev-Simplified-Official-Blog](https://github.com/WebDevSimplified/Web-Dev-Simplified-Official-Blog) (199 stars, MDX)
- [WebDevSimplified/useful-custom-react-hooks](https://github.com/WebDevSimplified/useful-custom-react-hooks) (2031 stars, JavaScript)
- [WebDevSimplified/Zoom-Clone-With-WebRTC](https://github.com/WebDevSimplified/Zoom-Clone-With-WebRTC) (1567 stars, JavaScript)
- [WebDevSimplified/Learn-SQL](https://github.com/WebDevSimplified/Learn-SQL): Exercises for beginners to learn SQL (1759 stars, topics: sql, mysql, learn-sql, sql-exercises)
- [WebDevSimplified/Introduction-to-Web-Development](https://github.com/WebDevSimplified/Introduction-to-Web-Development) (885 stars, HTML)
- [WebDevSimplified/Face-Detection-JavaScript](https://github.com/WebDevSimplified/Face-Detection-JavaScript) (1035 stars, JavaScript)
- [WebDevSimplified/React-Firebase-Auth](https://github.com/WebDevSimplified/React-Firebase-Auth) (651 stars, JavaScript)
- [WebDevSimplified/react-folder-structure](https://github.com/WebDevSimplified/react-folder-structure) (646 stars, JavaScript)
- [WebDevSimplified/parity-deals-clone](https://github.com/WebDevSimplified/parity-deals-clone) (593 stars, TypeScript)
- [WebDevSimplified/Vanilla-JavaScript-Calculator](https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator): Pure vanilla JavaScript calculator using modern ES6 syntax and classes (536 stars, JavaScript)
- [WebDevSimplified/permission-system](https://github.com/WebDevSimplified/permission-system) (427 stars, TypeScript)
- [WebDevSimplified/Whatsapp-Clone](https://github.com/WebDevSimplified/Whatsapp-Clone) (416 stars, JavaScript)
- [WebDevSimplified/Nodejs-Passport-Login](https://github.com/WebDevSimplified/Nodejs-Passport-Login) (405 stars, JavaScript)

## How To Use This Skill

- Reach for this skill when the user asks for WebDevSimplified's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
