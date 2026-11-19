# Decision records

Each file records one significant technical decision and why we made it. Format: Context, Decision, Alternatives, Consequences (see `template.md`).

## When to write one

When a decision is hard to reverse or affects more than one area: database, authentication, architecture style, API style, deployment, a major library. Skip naming, folder layout and styling.

## How

1. Copy `template.md` to the next number, for example `005-short-title.md`.
2. Set the status to Proposed and open a pull request.
3. Change it to Accepted once agreed. Never delete a record; mark it Superseded and link the replacement.

## Index

| # | Decision | Status | Plan decision # |
| --- | --- | --- | --- |
| [001](001-modular-monolith.md) | Build the backend as a modular monolith | Proposed | none |
| [002](002-web-stack.md) | Build the web dashboard as a React + TypeScript SPA (Vite) | Proposed | 13 |
| [003](003-pnpm-workspaces.md) | Manage the monorepo with pnpm workspaces | Proposed | none |
| [004](004-repo-layout.md) | Keep API, web and contracts in one repository; Flutter in its own | Proposed | 1 |
