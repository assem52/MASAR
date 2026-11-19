# apps/web: instructions for coding agents

The root [`CLAUDE.md`](../../CLAUDE.md) rules apply here too. This file adds what is specific to the web dashboard.

## Stack

React + TypeScript single-page app bundled with Vite, talking only to the API ([ADR-002](../../docs/decisions/002-web-stack.md)). The decision is Proposed, so do not build on it as settled. ESM only (`"type": "module"`).

## Rules

- All user-facing text goes through translation files, English and Arabic (right-to-left). No hardcoded strings in components.
- The web app talks only to the API. It never reads the database or calls the AI provider.
- Figures shown to the user come from the API. Do not compute fleet numbers in the browser.

## Commands

Run from the repository root:

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the web app with reload on save (Vite) |
| `pnpm --filter @masar/web lint` | Lint with oxlint (config: root `.oxlintrc.json`) |
| `pnpm --filter @masar/web typecheck` | Type check without building |
| `pnpm --filter @masar/web build` | Type check and build to `dist/` |
| `pnpm --filter @masar/web format` | Format with Prettier |

There is no test script yet.

## Not decided yet

Router, server-state library, styling, translation library, map library, WebSocket client, deployment, and the `VITE_` environment variable convention are all proposed in ADR-002 but have no decision record. Do not add any of them until the matching record is accepted. If a task needs one, stop and say so.
