---
name: @sindresorhus-coding-skill
description: "GitHub profile skill from @sindresorhus. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Small, focused, high-signal utilities rather than large frameworks.
- Opinionated developer tools with a clear job: HTTP clients, type helpers, prompts, spinners, shortcuts, defaults wrappers.
- Curated resource/list repositories when the value is in selection and maintenance, not implementation.
- Cross-platform tooling that feels polished and low-friction, especially for macOS, Node.js, and the terminal.

## Coding patterns to mirror

- Prefer minimal surface area: expose the fewest APIs needed, and make them easy to understand at a glance.
- Optimize for readability and maintainability over cleverness.
- Use modern language features and current platform APIs where possible.
- Lean into strong defaults and sensible conventions instead of heavy configuration.
- Keep docs, contribution rules, and repo hygiene explicit:
  - `.editorconfig`, `.gitattributes`
  - `contributing.md`, `code-of-conduct.md`
  - clear PR templates and repository-specific guidance
- For list-style repos, keep entries curated, categorized, and aggressively filtered for quality.

## Product and UI taste

- Strong preference for “tiny”, “elegant”, “minimal”, and “fast” experiences.
- Visual presentation should be restrained and polished, not decorative.
- Interfaces and outputs should reduce cognitive load:
  - clean terminal UX
  - minimal CSS
  - straightforward macOS interactions
- Quality is part of the product: even utility libraries are presented like finished tools, not rough snippets.

## Tech stack clues

- Heavy use of JavaScript/TypeScript and TypeScript-first package design.
- Swift for macOS and iOS-adjacent tooling.
- Node.js and npm ecosystem are core.
- Shell/Zsh appears in personal tooling and prompt-related work.
- CSS and Electron show up in supporting tools and app-adjacent projects.
- The ecosystem focus suggests compatibility with modern web and Apple developer workflows.

## When to inspect repos first

- Before adding or changing public APIs in a package.
- Before matching repository conventions for docs, naming, or file layout.
- Before implementing CLI behavior or terminal output formatting.
- Before designing macOS UI or interaction details.
- Before editing a curated list: the acceptance bar is usually stricter than it looks, and the repo’s existing organization is the real spec.

## Repo Map

- [sindresorhus/type-fest](https://github.com/sindresorhus/type-fest): A collection of essential TypeScript types (17244 stars, TypeScript, topics: typescript-definitions, typescript, types, utilities)
- [sindresorhus/ky](https://github.com/sindresorhus/ky): 🌳 Tiny & elegant JavaScript HTTP client based on the Fetch API (16954 stars, TypeScript, topics: fetch, whatwg-fetch, http-client, http-request)
- [sindresorhus/awesome](https://github.com/sindresorhus/awesome): 😎 Awesome lists about all kinds of interesting topics (479029 stars, topics: awesome, awesome-list, unicorns, lists)
- [sindresorhus/awesome-chatgpt](https://github.com/sindresorhus/awesome-chatgpt): 🤖 Awesome list for ChatGPT — an artificial intelligence chatbot developed by OpenAI (6308 stars, topics: ai, artificial-intelligence, awesome, awesome-list)
- [sindresorhus/KeyboardShortcuts](https://github.com/sindresorhus/KeyboardShortcuts): ⌨️ Add user-customizable global keyboard shortcuts (hotkeys) to your macOS app in minutes (2648 stars, Swift, topics: keyboard-shortcuts, hotkey, macos, swift-package)
- [sindresorhus/Defaults](https://github.com/sindresorhus/Defaults): 💾 Swifty and modern UserDefaults (2474 stars, Swift, topics: userdefaults, nsuserdefaults, macos, ios)
- [sindresorhus/awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs): :zap: Delightful Node.js packages and resources [BECAUSE OF TOO MUCH SPAM AND LOW-QUALITY SUBMISSIONS, SUBMISSIONS ARE PAUSED UNTIL JULY] (66073 stars, topics: awesome, awesome-list, nodejs, javascript)
- [sindresorhus/awesome-electron](https://github.com/sindresorhus/awesome-electron): Useful resources for creating apps with Electron [SUBMISSIONS ARE TEMPORARILY PAUSED BECAUSE I'M TIRED OF REVIEWING LOW-QUALITY STUFF] (27198 stars, topics: awesome, awesome-list, electron, list)
- [sindresorhus/quick-look-plugins](https://github.com/sindresorhus/quick-look-plugins): List of useful Quick Look plugins for developers (18669 stars)
- [sindresorhus/got](https://github.com/sindresorhus/got): 🌐 Human-friendly and powerful HTTP request library for Node.js (14914 stars, TypeScript, topics: http-client, http-request, http, https)
- [sindresorhus/pure](https://github.com/sindresorhus/pure): Pretty, minimal and fast ZSH prompt (14326 stars, Shell, topics: shell, zsh, prompt, shell-prompt)
- [sindresorhus/pageres](https://github.com/sindresorhus/pageres): Capture website screenshots (9740 stars, TypeScript)
- [sindresorhus/ora](https://github.com/sindresorhus/ora): Elegant terminal spinner (9717 stars, JavaScript)
- [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css): The minimal amount of CSS to replicate the GitHub Markdown style (8893 stars, CSS)
- [sindresorhus/Gifski](https://github.com/sindresorhus/Gifski): 🌈 Convert videos to high-quality GIFs on your Mac (8473 stars, Swift, topics: gifski, gif, gif-animation, video)

## How To Use This Skill

- Reach for this skill when the user asks for Sindre Sorhus's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
