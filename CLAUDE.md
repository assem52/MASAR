# MASAR: instructions for coding agents

## What this is

MASAR is a fleet tracking platform: GPS positions arrive from a GPS device (through Traccar) and from a simulator (see `docs/architecture.md`), the backend stores and processes them, and a web dashboard and a Flutter app (separate repository) show live vehicles, trips, alerts, reports and AI summaries. One demo company first, multi-company by design.

## Repository map

- `apps/api`: NestJS + TypeScript backend (modular monolith, see `docs/decisions/001-modular-monolith.md`)
- `apps/web`: React + TypeScript (Vite) dashboard
- `packages/contracts`: API contract types and Socket.IO events
- `infra`: Docker Compose (Traccar is added in Phase 1)
- `docs`: `architecture.md`, `setup.md`, `decisions/`

Each app has its own `CLAUDE.md` with area conventions: [`apps/api/CLAUDE.md`](apps/api/CLAUDE.md) (web added when it is scaffolded).

## Commands

Run from the root: `pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, `pnpm format`. Each runs in every package that has the script. Migration commands are added with the database.

## Status

Phase 0. `apps/api` holds the NestJS scaffold only; `apps/web` and `packages/contracts` are not scaffolded. Decisions marked Proposed in `docs/decisions/` are not final: do not build on them as settled facts.

## Rules

- Work on one task per session, on its own branch. Never commit to `main`.
- Only write code that follows a pattern Assem has already built in this repo. When a task needs a new pattern, stop and say so instead of writing it.
- Nothing gets merged that Assem cannot explain line by line.
- Never add AI attribution to commits, pull requests or files: no `Co-Authored-By` trailer, no "Generated with" line.
- Propose a plan before editing. Wait for approval on anything that changes architecture, the API contract or the database schema.
- Every business table carries `company_id`, and every query is scoped by it. No exceptions.
- Modules own their tables. Do not read or write another module's tables; use its exported service or an event.
- Dependencies point one way: Platform ← Fleet ← Tracking ← Intelligence.
- All user-facing text in the web app goes through translation files (English and Arabic, right-to-left). Full team rules are in `CONTRIBUTING.md`.
- AI features receive numbers computed by the backend. Never let a model produce figures that are not in the data it was given.
- Do not add a dependency without stating why in the pull request.
- Never edit an applied migration, CI configuration or any `.env` file.
- Run lint, type check and tests before declaring work done. Report what you could not verify.
- If a decision changes, update the matching file in `docs/decisions/` or `docs/architecture.md` in the same pull request.

## Do not invent

If a requirement, convention or contract is not written in this repository, ask. Do not fill the gap with a guess.
