---
name: @simplex-chat-coding-skill
description: "GitHub profile skill from @simplex-chat. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Privacy-first communication systems, not generic app features. The core themes across `simplex-chat` and `simplexmq` are **no user identifiers**, **metadata protection**, **E2EE**, and **protocol-level design**.
- Reference implementations and infrastructure around a protocol, plus the clients that use it. `simplexmq` is explicitly a broker/reference implementation; `simplex-chat` spans mobile, desktop, CLI, bots, docs, and release tooling.
- Systems with clear operational guidance: server init, key handling, upgrade constraints, compatibility notes, and deployment instructions are documented alongside the code.
- Cross-platform products that are treated as one ecosystem: app, protocol, server, bots, website, translations, and release channels all live in the same orbit.

## Coding patterns to mirror

- Prefer **explicit, security-aware code** over clever abstractions. The README language and repo structure suggest a bias toward correctness, auditability, and careful state handling.
- Keep protocol and compatibility decisions visible. In `simplexmq`, version negotiation, backward compatibility, and server migration instructions are called out prominently.
- Document operational behavior where it matters: startup steps, keys/certs, persistence, recovery, and platform caveats. This style values "how it works in production" as much as implementation detail.
- Use small, named modules and clear boundaries for components like client/server/agent/bot/UI. The repo layout is broad, but the concern separation is strong.
- Follow existing formatting/lint discipline rather than introducing local style. The presence of `fourmolu.yaml` and `.hlint.yaml` signals a preference for standardized Haskell formatting and linting.
- When adding features, think in terms of protocol impact, migration path, and user-facing explanation, not just code changes.

## Product and UI taste

- The product voice is **trust-building and instructional**, not flashy. Messaging is direct: what the system protects, what users must do, and what tradeoffs exist.
- UI copy and docs lean toward **clarity over brevity**, especially for security-sensitive flows like making a private connection, verifying security codes, or handling server setup.
- The README uses badges, screenshots, store links, and multilingual navigation, but the overall tone stays technical and mission-driven rather than marketing-heavy.
- Expect UX to favor privacy-preserving workflows, explicit consent/connection steps, and visible security status rather than hidden convenience.

## Tech stack clues

- Main language: **Haskell**.
- Formatting/linting: **Fourmolu** and **HLint**.
- Build/dependency management: **Cabal** plus a repo-level `cabal.project`.
- Packaging/ops: **Docker**, shell scripts, and **Nix flakes** (`flake.nix`, `flake.lock`).
- Client app ecosystem: mobile and desktop in `simplex-chat`, with a **Swift/C++ mobile template** in `cpp-for-mobile`.
- Additional ecosystem pieces: **TypeScript** in `simplexmq-js`, **Go** in archived server work, HTML/JS for website/status pages, and bots/tools around the protocol.
- Expect protocol-heavy code, cryptography-adjacent concerns, and multi-target release plumbing.

## When to inspect repos first

- Before changing anything touching **protocol behavior, compatibility, or serialization**. `simplexmq` shows that versioning and forward/backward compatibility are first-class concerns.
- Before editing **security-sensitive paths**: identity, key handling, encryption, server init, message persistence, or verification flows.
- Before adding features that cross repo boundaries: app <-> protocol <-> server <-> bot <-> website.
- Before altering packaging/release behavior: installers, Dockerfiles, Nix, Fastlane, platform build scripts, or CLI/server launch flows.
- Before making UI copy or onboarding changes, inspect the README/docs/guide structure first--their style is tightly tied to product meaning and security posture.
- Before introducing a new module, inspect the existing naming and boundary patterns in the relevant repo; the codebase is broad, but each subsystem tends to have established seams.

## Repo Map

- [simplex-chat/simplex-chat](https://github.com/simplex-chat/simplex-chat): SimpleX - the first messaging network operating without user identifiers of any kind - 100% private by design! iOS, Android and desktop apps! (12174 stars, Haskell, topics: chat, protocol, e2ee, privacy)
- [simplex-chat/simplexmq](https://github.com/simplex-chat/simplexmq): SimpleXMQ - A reference implementation of the SimpleX Messaging Protocol for simplex queues over public networks. (808 stars, Haskell)
- [simplex-chat/cpp-for-mobile](https://github.com/simplex-chat/cpp-for-mobile): Template for cross-platform mobile app with native UIs and C++ core (17 stars, Swift)
- [simplex-chat/website](https://github.com/simplex-chat/website): SimpleX Chat website (14 stars, JavaScript)
- [simplex-chat/simplexmq-js](https://github.com/simplex-chat/simplexmq-js): SimpleXMQ - JavaScript SMP protocol client and agent (13 stars, TypeScript)
- [simplex-chat/.github](https://github.com/simplex-chat/.github) (10 stars)
- [simplex-chat/simplex-server-go](https://github.com/simplex-chat/simplex-server-go): [ARCHIVED] Server implementing simplex messaging protocol in Go (8 stars, Go)
- [simplex-chat/status.simplex.chat](https://github.com/simplex-chat/status.simplex.chat): Status page for pre-set SimpleX Servers (7 stars, HTML)
- [simplex-chat/cla](https://github.com/simplex-chat/cla): Contributor License Agreements for SImpleX Chat repositories (5 stars)
- [simplex-chat/model](https://github.com/simplex-chat/model): [ARCHIVED] Model of simplex-chat protocol (4 stars, Haskell)
- [simplex-chat/cordova-websockets-chat-example](https://github.com/simplex-chat/cordova-websockets-chat-example): Cordova websockets chat client to connect to Haskell websockets server example (3 stars, HTML)
- [simplex-chat/simplex-server-hsk](https://github.com/simplex-chat/simplex-server-hsk): [ARCHIVED] see simplex-messaging (2 stars, Haskell)

## How To Use This Skill

- Reach for this skill when the user asks for SimpleX Chat's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
