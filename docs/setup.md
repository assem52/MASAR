# Local setup

Not runnable yet. This page is filled in during Phase 0, and every team member tests it from a fresh clone before Milestone 0 (28 Nov 2026).

## Prerequisites (provisional)

- Git
- Docker Desktop
- Node.js (LTS), pinned in `.nvmrc` (TODO(assem): add `.nvmrc` with the version)
- pnpm (proposed, no decision record yet)

## Steps

1. Clone the repository.
2. Copy `.env.example` to `.env`.
3. Start the services: at Milestone 0 Docker Compose runs PostgreSQL + PostGIS and Redis only (Traccar is added in Phase 1). TODO(assem): command, once `infra/docker-compose.yml` exists.
4. Run the API and web app: TODO(assem): commands, once the apps have `package.json` scripts.

If any step fails for you, fix this document in your first pull request.
