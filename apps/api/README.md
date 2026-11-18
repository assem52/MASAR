# apps/api

NestJS backend: REST API, WebSocket gateway and position ingestion. Modular monolith, see [`ADR-001`](../../docs/decisions/001-modular-monolith.md).

## Commands

TODO(assem): none yet. Add them when `package.json` scripts exist.

## Module conventions

Defined in ADR-001 and [`docs/architecture.md`](../../docs/architecture.md):

- Each module owns its tables and exposes only its `exports`.
- Dependencies point one way: Platform ← Fleet ← Tracking ← Intelligence.
- Higher layers are notified through in-process events.
- Every business table carries `company_id`, and every query is scoped by it.

## Environment variables

Names are provisional. See [`.env.example`](../../.env.example): `DATABASE_URL`, `REDIS_URL`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `INGEST_TOKEN`, `AI_API_KEY`.
