---
name: @grafana-coding-skill
description: "GitHub profile skill from @grafana. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Build observability infrastructure, not just apps: metrics, logs, traces, profiling, load testing, agent pipelines, dashboards, and storage backends.
- Favor systems that are:
  - horizontally scalable
  - multi-tenant where relevant
  - cost-effective and operable
  - low-dependency or “single-binary” when possible
- The repo set leans toward end-to-end platforms plus supporting components:
  - `grafana`: UI/product surface for querying, visualizing, alerting, and exploring data
  - `loki`, `tempo`, `mimir`, `pyroscope`: backend storage/query services
  - `alloy`, `beyla`: collection/instrumentation agents
  - `k6`: load testing tooling
- Documentation and onboarding are part of the product. README pages, developer guides, style guides, and operational docs are prominent, not afterthoughts.

## Coding patterns to mirror

- Prefer explicit, boring, production-friendly code over clever abstractions.
- Expect strict tooling and repo-wide consistency:
  - TypeScript `strict: true`, `isolatedModules`, `moduleResolution: bundler`
  - Go repos with `golangci`, `Makefile`-driven workflows, and vendoring in some cases
  - lint/test/build commands wired into the repo rather than ad hoc scripts
- Match the monorepo/large-repo pattern:
  - clear package boundaries
  - many top-level workflow files
  - task orchestration via `nx`, `yarn`, `playwright`, webpack, and helper scripts in Grafana
- Keep changes compatible with existing testing culture:
  - frontend: Playwright, Storybook, a11y checks
  - backend: Go tests, integration tests, fuzzing in some repos, release/ops workflows
- Use domain language precisely:
  - “query,” “visualize,” “alert,” “explore,” “multi-tenant,” “labels,” “data sources,” “pipelines,” “tracing,” “profiling”
- Optimize for operability:
  - configs, flags, environments, and deployment paths are first-class
  - prefer clear defaults and explicit behavior over hidden magic

## Product and UI taste

- Grafana UI favors dense but navigable information design:
  - dashboards with reusable template variables
  - split views and side-by-side comparisons
  - mixed data sources in a single graph
  - preserved filters when moving between metrics and logs
- UX is about fast exploration, not decorative flourish:
  - quick query/edit/inspect loops
  - flexible visualization controls
  - strong support for drilldown and cross-navigation
- Visual consistency matters:
  - the repo points contributors to a style guide and Storybook
  - design work should fit existing component patterns rather than introduce one-off UI
- The product tone is practical and operational:
  - help users find, compare, and act on telemetry quickly
  - make alerting and investigation feel like part of the same workflow

## Tech stack clues

- Frontend-heavy Grafana core:
  - TypeScript
  - React
  - webpack
  - Yarn
  - Nx
  - Playwright
  - Storybook
  - ESLint, Prettier, Stylelint, Jest
- Backend and platform services:
  - Go is the dominant language across Loki, Mimir, Tempo, Pyroscope, Alloy, Beyla, Tanka, MCP server
  - Kubernetes and deployment tooling are common
  - Helm, Jsonnet, CUE, and templated config appear in supporting repos
- Repo conventions suggest:
  - strict config management
  - multi-environment build/test pipelines
  - code generation and release automation are normal
- Grafana specifically shows:
  - `public/`, `packages/`, `scripts/`, `pkg/`, `docs/`, `e2e-playwright/`
  - lots of repo-level tooling files (`nx.json`, `lerna.json`, `eslint.config.js`, `playwright.config.ts`, `go.work`, `tsconfig.json`)

## When to inspect repos first

- Before changing UI, inspect `grafana/grafana` for:
  - nearby components
  - Storybook examples
  - existing dashboard/explore interaction patterns
  - accessibility and test conventions
- Before changing backend behavior, inspect the relevant service repo:
  - `loki` for log pipeline/storage patterns
  - `mimir` for metrics/storage and multi-tenancy patterns
  - `tempo` for tracing query/storage flows
  - `pyroscope` for profiling-specific data models
- Before adding config, deployment, or operator logic:
  - check `alloy`, `tanka`, `helm-charts`, or the repo’s `docs/` and `Makefile`
  - these projects tend to have strong conventions for flags, defaults, and generated manifests
- If the task touches shared platform behavior, inspect existing docs and scripts first:
  - Grafana’s repo structure and build/test scripts are part of the intended workflow
  - many changes need alignment with lint, e2e, release, and docs expectations

## Repo Map

- [grafana/loki](https://github.com/grafana/loki): Like Prometheus, but for logs. (28451 stars, Go, topics: loki, grafana, prometheus, logging)
- [grafana/mimir](https://github.com/grafana/mimir): Grafana Mimir provides horizontally scalable, highly available, multi-tenant, long-term storage for Prometheus. (5141 stars, Go, topics: prometheus, metrics, tsdb, opentelemetry)
- [grafana/tempo](https://github.com/grafana/tempo): Grafana Tempo is a high volume, minimal dependency distributed tracing backend. (5334 stars, Go, topics: distributed-tracing, grafana)
- [grafana/k6](https://github.com/grafana/k6): A modern load testing tool, using Go and JavaScript (30893 stars, Go, topics: golang, load-testing, load-generator, javascript)
- [grafana/grafana](https://github.com/grafana/grafana): The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more. (74829 stars, TypeScript, topics: grafana, monitoring, analytics, metrics)
- [grafana/pyroscope](https://github.com/grafana/pyroscope): Continuous Profiling Platform. Debug performance issues down to a single line of code (11512 stars, Go, topics: continuous-profiling, profiling, performance, golang)
- [grafana/alloy](https://github.com/grafana/alloy): OpenTelemetry Collector distribution with programmable pipelines (3289 stars, Go, topics: collector, grafana, loki, monitoring)
- [grafana/mcp-grafana](https://github.com/grafana/mcp-grafana): MCP server for Grafana (3192 stars, Go)
- [grafana/tanka](https://github.com/grafana/tanka): Flexible, reusable and concise configuration for Kubernetes (2676 stars, Go, topics: jsonnet, kubernetes, configuration, reusable)
- [grafana/grafana-zabbix](https://github.com/grafana/grafana-zabbix): Zabbix plugin for Grafana dashboard (2231 stars, TypeScript, topics: zabbix, grafana, monitoring, group-datasources)
- [grafana/beyla](https://github.com/grafana/beyla): eBPF-based autoinstrumentation of web applications and network metrics (2013 stars, Go, topics: ebpf, metrics-gathering, observability, traces)
- [grafana/helm-charts](https://github.com/grafana/helm-charts) (1999 stars, Go Template, topics: grafana, helm-charts, kubenetes, hacktoberfest)

## How To Use This Skill

- Reach for this skill when the user asks for Grafana Labs's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
