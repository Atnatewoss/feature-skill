---
name: @hashicorp-coding-skill
description: "GitHub profile skill from @hashicorp. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build
- Large, production-grade infrastructure tools: provisioning, orchestration, secrets, service discovery, and distributed coordination.
- Mostly **CLI-first** systems with clear operational workflows, backed by APIs, plugins, and internal engines.
- Core domains are usually **stateful and failure-aware**: graphs, leases, consensus, scheduling, replication, security, and auditability.
- They favor tooling that is both **operator-friendly** and **automation-friendly**: predictable commands, reproducible runs, and strong docs.

## Coding patterns to mirror
- Prefer **clear subsystem boundaries** over sprawling packages. Common roots like `internal/`, `command/`, `sdk/`, `plugins/`, `helper/`, and `api/` suggest layered design.
- Keep core logic separate from integration surfaces:
  - command/CLI entrypoints
  - protocol or plugin adapters
  - platform-specific files like `signal_unix.go` / `signal_windows.go`
- Expect **explicit control flow and careful error handling** in core paths, especially for distributed or security-sensitive behavior.
- Use **declarative, composable abstractions** when modeling infrastructure or config. Terraform/HCL strongly suggests readable config and stable interfaces.
- Preserve repo conventions around:
  - tests alongside the behavior they validate
  - release/change tooling in `.release`, `.changes`, changelogs
  - build and developer scripts in `Makefile`, `scripts/`, `tools/`
- For cross-cutting systems, mirror their tendency to make integrations feel pluggable rather than hard-coded:
  - Terraform providers
  - Vault plugins
  - go-plugin / RPC-style boundaries
  - Raft/consensus libraries as reusable infrastructure

## Product and UI taste
- The primary product experience is **documentation, CLI output, and operational workflows**, not flashy UI.
- README pages are functional and structured: short mission statement, key features, then docs/getting-started links.
- When UI exists, it appears as a **supporting surface** rather than the center of the product (`vault/ui`), so keep interfaces pragmatic and admin-oriented.
- Security-sensitive products like Vault use prominent trust cues: badges, disclosure guidance, and direct links to docs and certification.

## Tech stack clues
- **Go** is the dominant language across core repos: Terraform, Vault, Consul, Nomad, Packer, Raft, Serf, go-plugin, HCL, LRU cache.
- **Ruby** appears in Vagrant.
- Configuration and ecosystem signals:
  - **HCL** / Terraform config language
  - **protobuf/buf** in Vault (`buf.yaml`, `buf.gen.yaml`)
  - **Docker** and `Makefile`-driven builds
  - CI and release automation via `.github`, `.release`, changelog tooling
  - platform/version pinning via `.go-version`, `.node-version`, `.nvmrc`
- The repos suggest strong attention to:
  - distributed systems primitives
  - plugin interfaces
  - cross-platform behavior
  - static analysis and code quality tooling

## When to inspect repos first
- Before changing anything in:
  - Terraform planning/graph behavior
  - provider/plugin boundaries
  - Vault auth, secret storage, leases, revocation, or audit paths
  - consensus, replication, or state machine logic
  - platform-specific shutdown/signal handling
  - release, changelog, or docs generation flows
- Inspect existing repo patterns first when the change touches:
  - public commands or user-facing flags
  - config/schema shape
  - plugin/RPC compatibility
  - security-sensitive defaults or error messages
- For any new feature, look for the nearest analogue in `command/`, `internal/`, `api/`, or repo-specific subsystem directories before adding new structure.

## Repo Map

- [hashicorp/consul](https://github.com/hashicorp/consul): Consul is a distributed, highly available, and data center aware solution to connect and configure applications across dynamic, distributed infrastructure. (29966 stars, Go, topics: consul, service-mesh, service-discovery, kubernetes)
- [hashicorp/nomad](https://github.com/hashicorp/nomad): Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and Vault integrations. (16648 stars, Go)
- [hashicorp/terraform](https://github.com/hashicorp/terraform): Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned. (48792 stars, Go, topics: graph, infrastructure-as-code, terraform, cloud)
- [hashicorp/vagrant](https://github.com/hashicorp/vagrant): Vagrant is a tool for building and distributing development environments. (27166 stars, Ruby, topics: vagrant, ruby, automation, virtualization)
- [hashicorp/vault](https://github.com/hashicorp/vault): A tool for secrets management, encryption as a service, and privileged access management (35836 stars, Go, topics: vault, go, secrets)
- [hashicorp/packer](https://github.com/hashicorp/packer): Packer is a tool for creating identical machine images for multiple platforms from a single source configuration. (15719 stars, Go)
- [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws): The AWS Provider enables Terraform to manage AWS resources. (10959 stars, Go, topics: terraform, terraform-provider, aws)
- [hashicorp/raft](https://github.com/hashicorp/raft): Golang implementation of the Raft consensus protocol (9050 stars, Go)
- [hashicorp/serf](https://github.com/hashicorp/serf): Service orchestration and management tool. (6059 stars, Go)
- [hashicorp/go-plugin](https://github.com/hashicorp/go-plugin): Golang plugin system over RPC. (6023 stars, Go)
- [hashicorp/hcl](https://github.com/hashicorp/hcl): HCL is the HashiCorp configuration language. (5790 stars, Go, topics: hcl, configuration-language, hashicorp, json)
- [hashicorp/golang-lru](https://github.com/hashicorp/golang-lru): Golang LRU cache (5092 stars, Go)

## How To Use This Skill

- Reach for this skill when the user asks for HashiCorp's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
