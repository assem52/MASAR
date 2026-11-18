# MASAR: instructions for coding agents

## What this is

MASAR is a fleet tracking platform: GPS positions arrive from real trackers (through Traccar) and from a simulator, the backend stores and processes them, and a web dashboard and a Flutter app (separate repository) show live vehicles, trips, alerts, reports and AI summaries. One demo company first, multi-company by design.

## Repository map

- `apps/api`: NestJS + TypeScript backend (modular monolith, see `docs/decisions/001-modular-monolith.md`)
- `apps/web`: Next.js + TypeScript dashboard
- `infra`: Docker Compose and Traccar configuration
- `docs`: `architecture.md`, `setup.md`, `decisions/`

Each app gets its own `CLAUDE.md` with area conventions once its first module exists.

## Commands

None yet. Add run, test, lint and migrate commands here as soon as they exist.

## Status

Phase 0. No application code yet. Decisions marked Proposed in `docs/decisions/` are not final: do not build on them as settled facts.

## Rules

- Work on one issue per session, on its own branch. Never commit to `main`.
- Propose a plan before editing. Wait for approval on anything that changes architecture, the API contract or the database schema.
- Every business table carries `company_id`, and every query is scoped by it. No exceptions.
- Modules own their tables. Do not read or write another module's tables; use its exported service or an event.
- Dependencies point one way: Platform ← Fleet ← Tracking ← Intelligence.
- All user-facing text in the web app goes through translation files (English and Arabic, right-to-left).
- AI features receive numbers computed by the backend. Never let a model produce figures that are not in the data it was given.
- Do not add a dependency without stating why in the pull request.
- Never edit an applied migration, CI configuration or any `.env` file.
- Run lint, type check and tests before declaring work done. Report what you could not verify.
- If a decision changes, update the matching file in `docs/decisions/` or `docs/architecture.md` in the same pull request.

## Do not invent

If a requirement, convention or contract is not written in this repository, ask. Do not fill the gap with a guess.
