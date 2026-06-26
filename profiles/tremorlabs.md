---
name: @tremorlabs-coding-skill
description: "GitHub profile skill from @tremorlabs. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build
- React UI kits for dashboards, analytics, and SaaS app templates.
- Component libraries that are meant to be **copied, pasted, composed, and exported cleanly** rather than heavy app-specific code.
- Data-visualization primitives and dashboard surfaces: charts, cards, metric blocks, tables, filters, dialogs, date pickers, navigation, etc.
- Documentation- and demo-friendly packages: Storybook, README examples, and prebuilt templates are part of the product, not an afterthought.

## Coding patterns to mirror
- Prefer **TypeScript + React function components** with strict typing and small, composable APIs.
- Keep styling utility-first with **Tailwind classes**; expect long `className` strings and shared visual tokens instead of bespoke CSS.
- Use `tailwind-merge` and `clsx`-style patterns to resolve conditional class conflicts cleanly.
- Mirror the repo’s bias toward **accessible primitives** from Radix / Headless UI / React Aria rather than custom interaction code.
- Components often expose simple props around:
  - `className`
  - variant-like appearance choices
  - controlled/uncontrolled state
  - content slots and renderable children
- Keep implementations practical and readable:
  - minimal abstraction layers
  - explicit prop names
  - colocated helpers when they support a single component
- Match the ecosystem conventions:
  - `"use client"` when components are intended for client rendering
  - strict TS config assumptions
  - Storybook/demo fixtures for visual verification
- Favor small, reusable UI units over deeply nested architecture.

## Product and UI taste
- The visual style is **clean, polished, enterprise-oriented, and data-dense without feeling heavy**.
- Dashboard layouts lean on:
  - strong hierarchy
  - lots of whitespace
  - restrained color usage
  - subtle depth and motion
- Dark mode is treated as a first-class concern.
- Animations are present but understated: short durations, soft easing, and small offsets.
- The design language favors:
  - rounded, calm surfaces
  - readable metric typography
  - chart-forward layouts
  - accessible contrast
- Public-facing docs and examples are polished, centered, and image-rich; examples show the expected end state clearly.

## Tech stack clues
- Core stack: **React + TypeScript + Tailwind CSS**.
- Component primitives and behavior libraries:
  - Radix UI
  - Headless UI
  - Floating UI
  - React Aria / React Stately for date-related interaction
- Charts: **Recharts**.
- Date handling: **date-fns** and `react-day-picker`.
- Styling helpers: `tailwind-merge`, `clsx`, `tailwind-variants`, `prettier-plugin-tailwindcss`.
- Build/test tooling across repos:
  - Storybook
  - Jest / Vitest
  - Playwright in the app/template repo
  - Rollup or Vite for library/app builds
  - semantic-release in the package repo
- Repo structure suggests separate concerns:
  - library package
  - raw component source
  - dashboard template app
  - blocks/templates source

## When to inspect repos first
- Before changing any **public component API** or prop naming.
- Before adjusting **Tailwind token usage**, variant handling, or class composition.
- Before editing **animation timing, motion curves, or dark-mode behavior**.
- Before touching **Radix/Headless UI wrappers**, because interaction and accessibility patterns are likely intentional.
- Before changing chart components or data-shape assumptions.
- Before adding new dependencies; these repos are curated and already have a preferred stack.
- Before building a new dashboard/template screen: inspect existing examples and Storybook stories to match hierarchy, spacing, and component density.

## Repo Map

- [tremorlabs/tremor-npm](https://github.com/tremorlabs/tremor-npm): React components to build charts and dashboards (16467 stars, TypeScript, topics: reactjs, tailwindcss, ui-system, typescript)
- [tremorlabs/tremor](https://github.com/tremorlabs/tremor): Copy & Paste React components to build modern web applications. (3490 stars, TypeScript, topics: components, dashboard, radix-ui, react)
- [tremorlabs/tremor-blocks](https://github.com/tremorlabs/tremor-blocks): Tremor Blocks Source Code (520 stars, TypeScript)
- [tremorlabs/template-dashboard-oss](https://github.com/tremorlabs/template-dashboard-oss): Free open-source dashboard template by Tremor. (507 stars, TypeScript, topics: dashboard, radix-ui, template, typescript)
- [tremorlabs/template-dashboard](https://github.com/tremorlabs/template-dashboard) (30 stars, TypeScript)
- [tremorlabs/template-database](https://github.com/tremorlabs/template-database) (23 stars, TypeScript)
- [tremorlabs/template-solar](https://github.com/tremorlabs/template-solar) (22 stars, TypeScript)
- [tremorlabs/template-insights](https://github.com/tremorlabs/template-insights) (20 stars, TypeScript)
- [tremorlabs/template-planner](https://github.com/tremorlabs/template-planner) (17 stars, TypeScript)
- [tremorlabs/template-overview](https://github.com/tremorlabs/template-overview) (15 stars, TypeScript)
- [tremorlabs/tinybird-utils](https://github.com/tremorlabs/tinybird-utils) (14 stars, TypeScript)
- [tremorlabs/tremor-cli](https://github.com/tremorlabs/tremor-cli) (11 stars, TypeScript)

## How To Use This Skill

- Reach for this skill when the user asks for tremor's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
