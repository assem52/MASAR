# apps/web

React + TypeScript (Vite) single-page dashboard for fleet managers and dispatchers. See [`ADR-002`](../../docs/decisions/002-web-stack.md).

## Commands

Run from the repo root with `pnpm --filter @masar/web <script>`, or from `apps/web`:

- `pnpm dev`: start the Vite dev server
- `pnpm build`: type-check and build to `dist/`
- `pnpm lint`, `pnpm typecheck`, `pnpm format`

## Folder conventions

Defined when the app is scaffolded.

## Translation rule

All user-facing text goes through translation files (English and Arabic, right-to-left ready). See [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

## Environment variables

Vite exposes only variables prefixed with `VITE_`. They are listed here once the app needs any.
