# Decision records

Each file records one significant technical decision and why we made it. Format: Context, Decision, Alternatives, Consequences (see `template.md`).

## When to write one

When a decision is hard to reverse or affects more than one area: database, authentication, architecture style, API style, deployment, a major library. Skip naming, folder layout and styling.

## How

1. Copy `template.md` to the next number: `002-short-title.md`.
2. Set the status to Proposed and open a pull request.
3. Change it to Accepted once agreed. Never delete a record; mark it Superseded and link the replacement.

## Index

| # | Decision | Status |
| --- | --- | --- |
| [001](001-modular-monolith.md) | Build the backend as a modular monolith | Proposed |
| [002](002-web-stack.md) | Build the web dashboard as a React + TypeScript SPA (Vite) | Proposed |
