# Contributing to MASAR

These rules apply to everyone, whichever editor or AI tool you use.

## Workflow

1. Branch from `main` with the name `<type>/<scope>-<short-description>`. See [Branch names](#branch-names).
2. Make small commits. Open a pull request early as a draft if you want feedback.
3. Fill in the pull request template: goal, acceptance criteria, what is out of scope, and how it was tested.
4. Request review from the code owner of the area you changed.
5. Merge when CI is green and one reviewer approves. Merges are squashed.

`main` is protected: every change goes through a pull request with one review and green CI (lint, type check, test, build). Branches are short-lived. GitHub issues are not used.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/): `feat(api): add vehicle list endpoint`, `fix(web): keep map selection after reconnect`. Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`.

## Branch names

Branches follow the commit style: `<type>/<scope>-<short-description>`, in lowercase kebab-case, with about 3 to 5 words after the scope.

- Types are the same as commit types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`.
- Scopes are `api`, `web`, `infra` or `docs`. Add the module name when it helps.
- Examples: `feat/api-vehicle-list-endpoint`, `fix/web-map-selection-reconnect`, `docs/decisions-traccar-ingestion`.

## Pull requests

- The pull request title follows the commit format, because merges are squashed and the title becomes the commit on `main`.
- One goal per pull request, small enough to review in about 15 minutes (as a guide, under about 400 changed lines, not counting generated files).
- Every description states the goal, the acceptance criteria, what is out of scope, and how it was tested.
- Reviews get a response within 48 hours.

## Team rules

- All user-facing text in the web app goes through translation files (English and Arabic, right-to-left ready).
- Every business table carries `company_id`, and every query is scoped by it.

## Changing the API contract

The API contract is generated from the backend code and published on the staging server, which is set up in Phase 1. To change it:

1. Describe the change and who it affects in the pull request.
2. Update the contract.
3. Announce it in the `#api-changes` Discord channel.
4. Implement the change.

A breaking change needs acknowledgement from the mobile lead before it merges. Details of the contract itself are in [`packages/contracts/README.md`](packages/contracts/README.md).

## Definition of done

A change is done only when:

- [ ] its acceptance criteria are met, and someone other than the author has seen it work
- [ ] CI is green and it is merged to `main`
- [ ] it runs on staging, or locally against seed data
- [ ] documentation and decision records are updated if the change touched them
- [ ] no secrets are committed

## Decision records

Significant technical decisions are recorded in `docs/decisions/`. See [`docs/decisions/README.md`](docs/decisions/README.md) for when to write one.

## Using AI coding tools

You may use any AI tool. You are responsible for every line you submit: nothing is merged that Assem cannot explain line by line. Agent instructions for this repository live in [`CLAUDE.md`](CLAUDE.md).
