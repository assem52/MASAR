# Local setup

Today the API and the web app run locally on their own. The database services (Docker Compose) are added before Milestone 0 (28 Nov 2026), and this page grows with them. Every team member tests it from a fresh clone.

## Prerequisites

- Git
- Node.js 26, pinned in `.nvmrc`. With [fnm](https://github.com/Schniz/fnm), run `fnm use` in the repository folder.
- pnpm 12.21.0, pinned in the root `package.json` ([ADR-003](decisions/003-pnpm-workspaces.md)): `npm install -g pnpm@12.21.0`
- Docker Desktop (needed once Docker Compose is added)

## Steps

1. Clone the repository and open its folder.
2. Install every workspace package from the root: `pnpm install`
3. Copy `.env.example` to `.env`.
4. Start the API and the web app: `pnpm dev`
5. Open the web app at the address Vite prints in the terminal (http://localhost:5173 by default). Under the title it shows the API health response.
6. To check the API alone, open http://localhost:3000/api/health.

## Everyday commands

Run these from the root. Each one runs in every package that has the script.

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the API and the web app with reload on save |
| `pnpm lint` | Lint |
| `pnpm typecheck` | Type check |
| `pnpm test` | Unit tests |
| `pnpm build` | Build |
| `pnpm format` | Format with Prettier |

If any step fails for you, fix this document in your first pull request.
