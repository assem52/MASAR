# MASAR

MASAR is a fleet tracking platform with AI-powered fleet intelligence.
GPS positions arrive from a GPS device (through Traccar) and from a simulator.
The backend stores and processes them, and a web dashboard and a Flutter app show live vehicles, trips, alerts, reports and AI summaries.
One demo company first, multi-company by design.

## Folder map

| Folder | What it holds |
| --- | --- |
| `apps/api` | NestJS backend |
| `apps/web` | React + TypeScript (Vite) dashboard |
| `packages/contracts` | API contract types and Socket.IO events |
| `infra` | Docker Compose |
| `docs` | Architecture and setup |
| `docs/decisions` | Decision records |
| `.github` | PR template and code owners |

## Docs index

| Doc | Question it answers | Who reads it |
| --- | --- | --- |
| [`docs/setup.md`](docs/setup.md) | How do I get a fresh clone running? | Everyone |
| [`docs/architecture.md`](docs/architecture.md) | How is the system designed? | Everyone |
| [`docs/decisions/README.md`](docs/decisions/README.md) | Which decisions were made, and why? | Everyone |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How do we work: branches, PRs, API changes? | Everyone |
| [`CLAUDE.md`](CLAUDE.md) | What rules do coding agents follow? | Agents |
| [`apps/api/CLAUDE.md`](apps/api/CLAUDE.md) | What must agents know about the backend? | Agents, backend |
| [`apps/api/README.md`](apps/api/README.md) | How is the backend organised? | Backend |
| [`apps/web/README.md`](apps/web/README.md) | How is the dashboard organised? | Web |
| [`packages/contracts/README.md`](packages/contracts/README.md) | What is the API and event contract? | Web, mobile |
| [`infra/README.md`](infra/README.md) | Which services run locally? | Everyone |
| [`.github/pull_request_template.md`](.github/pull_request_template.md) | What goes in a PR description? | Authors |

## Quick start

See [`docs/setup.md`](docs/setup.md).

## Flutter app

Separate repository, owned by the mobile team. See [ADR-004](docs/decisions/004-repo-layout.md).
