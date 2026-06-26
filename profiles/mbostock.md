---
name: @mbostock-coding-skill
description: "GitHub profile skill from @mbostock. Use it when the task would benefit from mimicking this developer's repo choices, coding style, and implementation techniques."
---

## What they tend to build

- Libraries for **data transformation, visualization, and spatial/streaming data** rather than app-level features.
- Tools that sit close to the metal: D3, TopoJSON, Crossfilter, ndjson-cli, shapefile, solar-calculator.
- APIs that are **small, composable, and general-purpose**, then documented through examples and reference pages.
- Products that prioritize **computational clarity**: make data manipulation, encoding, and rendering easier without hiding the underlying model.
- Reusable primitives over frameworks; the “platform” is usually a set of well-factored modules.

## Coding patterns to mirror

- Prefer **ES modules** and straightforward exports/imports. Modern repos use `src/index.js` as the entry point and package `exports`.
- Keep implementations **low-level and orthogonal**. D3 and Plot expose many focused modules instead of a single monolith.
- Favor **data-first APIs** with clear defaults, then allow composition and override.
- Use **small helper functions** and avoid deep abstraction unless it reduces repetition across a family of operations.
- Document behavior with **API references plus examples**; the docs are part of the design.
- Treat tests as a core artifact. Repos commonly use `mocha`, `tape`, or `vitest`, plus linting and formatting checks.
- For library code, keep build/release plumbing explicit: Rollup, prepublish build steps, minified browser bundles, and package metadata for `unpkg`/`jsdelivr`.
- When working in the D3 family, align with the existing style of **functional composition**, chainable operations, and naming that mirrors the domain.

## Product and UI taste

- Strong preference for **clarity over ornament**.
- Visual and interactive work tends to be **concise, information-dense, and exploratory** rather than polished in a marketing sense.
- Observable Plot shows a taste for **layered grammar-of-graphics composition**, with expressive defaults and compact syntax.
- D3’s framing emphasizes **flexibility on web standards**: SVG, Canvas, and HTML are first-class rather than abstracted away.
- Examples and docs are meant to teach by showing concrete results quickly, not by long conceptual exposition.

## Tech stack clues

- Primarily **JavaScript**, with selective **TypeScript** in newer packages like `htl` and `plot`.
- Heavy use of the **D3 ecosystem**: `d3-array`, `d3-scale`, `d3-geo`, `d3-shape`, `d3-selection`, etc.
- Visualization targets include **SVG, Canvas, and HTML**.
- Build tooling commonly includes **Rollup**, with modern repos also using **Vite/VitePress**, **Prettier**, **ESLint**, and **Vitest**.
- Package metadata often targets multiple distribution formats: `main`, `module`, `exports`, `unpkg`, `jsdelivr`, and bundled minified artifacts.
- Older repos may use `mocha`, `tape`, `uglify-js`, and older packaging conventions; newer repos are more ESM/TypeScript-forward.
- Geographic/data-format work often touches **TopoJSON**, **GeoJSON**, streaming parsers, and CLI utilities.

## When to inspect repos first

- Before changing anything in **visualization APIs**, inspect `d3` and `plot` to match naming, composition, and defaults.
- Before editing **HTML templating or safe interpolation**, inspect `htl`.
- Before touching **geo/topology/data encoding**, inspect `topojson`.
- Before implementing **cross-dimensional filtering or data reduction**, inspect `crossfilter`.
- Before adding **CLI or stream-processing behavior**, inspect `ndjson-cli`, `shapefile`, or `rw` for the expected minimal, pipe-friendly style.
- If a repo is older, inspect its **release and packaging conventions first** so you don’t accidentally impose a newer toolchain or module format.

## Repo Map

- [d3/d3](https://github.com/d3/d3): Bring data to life with SVG, Canvas and HTML. :bar_chart::chart_with_upwards_trend::tada: (113136 stars, Shell, topics: visualization, data-visualization, charts, svg)
- [observablehq/plot](https://github.com/observablehq/plot): A concise API for exploratory data visualization implementing a layered grammar of graphics (5305 stars, HTML, topics: visualization, data-visualization, charts, d3)
- [observablehq/runtime](https://github.com/observablehq/runtime): The reactive dataflow runtime that powers Observable Notebooks (1075 stars, JavaScript)
- [observablehq/htl](https://github.com/observablehq/htl): A tagged template literal that allows safe interpolation of values into HTML, following the HTML5 spec (367 stars, TypeScript)
- [square/crossfilter](https://github.com/square/crossfilter): Fast n-dimensional filtering and grouping of records. (6187 stars, JavaScript)
- [topojson/topojson](https://github.com/topojson/topojson): An extension of GeoJSON that encodes topology! 🌐 (4901 stars, JavaScript)
- [mbostock/stack](https://github.com/mbostock/stack): A presentation library with intuitive, scroll-based navigation. (1147 stars, JavaScript)
- [mbostock/shapefile](https://github.com/mbostock/shapefile): A cross-platform streaming parser for the ESRI Shapefile spatial data format. (807 stars, JavaScript)
- [mbostock/protovis](https://github.com/mbostock/protovis): A visualization toolkit for JavaScript using SVG. (626 stars, JavaScript)
- [mbostock/gistup](https://github.com/mbostock/gistup): Create a gist from terminal, then use git to update it. (484 stars, JavaScript)
- [mbostock/ndjson-cli](https://github.com/mbostock/ndjson-cli): Command line tools for operating on newline-delimited JSON streams. (280 stars, JavaScript)
- [mbostock/smash](https://github.com/mbostock/smash): SMASH TOGETHER MULTIPLE FILES [deprecated; try rollup/rollup] (200 stars, JavaScript)
- [mbostock/solar-calculator](https://github.com/mbostock/solar-calculator): Equations for computing the position of the Sun. (154 stars, JavaScript)
- [mbostock/us-rivers](https://github.com/mbostock/us-rivers): A map of flowlines from NHDPlus. (124 stars, JavaScript)
- [mbostock/rw](https://github.com/mbostock/rw): Now stdin and stdout are files. (118 stars, JavaScript)
- [mbostock/git-static](https://github.com/mbostock/git-static): A versioned static file server backed by Git. (115 stars, JavaScript)
- [mbostock/bl.ocks.org](https://github.com/mbostock/bl.ocks.org): Browser Extensions for bl.ocks.org (94 stars, JavaScript)
- [mbostock/svjimmy](https://github.com/mbostock/svjimmy): A bookmarklet to download SVG as PNG. (75 stars, HTML)

## How To Use This Skill

- Reach for this skill when the user asks for Mike Bostock's style, when the repo stack matches this person's ecosystem, or when studying their real code would reduce made-up output.
- Pick one or more relevant repositories from the list above based on the current task.
- Clone the most relevant repository or repositories into `/tmp` for temporary inspection.
- Study the implementation details, naming patterns, architecture, UI taste, and tooling choices there.
- Return to the main task and apply the useful patterns you observed instead of copying blindly.
- Treat the upstream repositories as reference material for style and technique, then adapt them to the current codebase responsibly.
