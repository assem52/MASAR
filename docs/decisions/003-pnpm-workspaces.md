# ADR-003: Manage the monorepo with pnpm workspaces
Status: Proposed · Date: 2026-11-19
Plan decision #: TODO(assem)
## Context
The repository holds `apps/api` (NestJS), `apps/web` (React + Vite) and `packages/contracts`. `apps/web` must import the contract types from `packages/contracts` without publishing it anywhere. One person builds it, so a single install and a single lockfile keep setup and CI simple.
## Decision
We use pnpm workspaces: the root `package.json` is private, the workspace packages are `apps/*` and `packages/*`, pnpm 12.21.0 is pinned through `packageManager` and `devEngines`, and Node 26 is pinned in `.nvmrc` and `engines`.
## Alternatives
- **npm workspaces:** rejected because its flat `node_modules` lets a package import a dependency it never declared.
- **Yarn workspaces:** rejected because it adds nothing MASAR needs over pnpm, and it would mean a second tool to learn.
- **Separate installs per app, no workspace:** rejected because `apps/web` could not link `packages/contracts` without publishing it.
## Consequences
Easier: one install and one lockfile for every package, local linking of `packages/contracts`, and strict dependency boundaries (a package can only import what it declares). Harder: everyone and CI must use the pinned pnpm and Node versions (`fnm use` reads `.nvmrc`), and tools that expect a flat `node_modules` may need extra configuration. Revisit if a tool we depend on does not work with pnpm.
