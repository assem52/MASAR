# Contributing to MASAR

These rules apply to everyone, whichever editor or AI tool you use.

## Workflow

1. Pick an issue from the GitHub Projects board, or open one. Every issue has one owner, acceptance criteria and a milestone.
2. Create a branch from `main` named `<type>/<scope>-<short-description>`. See [Branch names](#branch-names).
3. Make small commits. Open a pull request early as a draft if you want feedback.
4. Fill in the pull request template. Request review from the code owner of the area you changed.
5. Merge when CI passes and the reviewer approves. Merges are squashed.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/): `feat(api): add vehicle list endpoint`, `fix(web): keep map selection after reconnect`. Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`.

## Branch names

Branches follow the commit style: `<type>/<scope>-<short-description>`, in lowercase kebab-case, with about 3 to 5 words after the scope.

- Types are the same as commit types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`.
- Scopes are `api`, `web`, `infra` or `docs`. Add the module name when it helps.
- Examples: `feat/api-vehicle-list-endpoint`, `fix/web-map-selection-reconnect`, `docs/decisions-traccar-ingestion`.

## Pull requests

- The pull request title follows the commit format, because merges are squashed and the title becomes the commit on `main`.
- One issue per pull request, small enough to review in about 15 minutes (as a guide, under 400 changed lines, not counting generated files).
- Say what changed, why, and how you tested it.
- Reviews get a response within 48 hours.

## Changing the API contract

The API contract is generated from the backend code and published on the staging server. To change it:

1. Open an issue describing the change and who it affects.
2. Update the backend and the generated contract.
3. Announce it in the `#api-changes` Discord channel.
4. A breaking change needs acknowledgement from the mobile lead before it merges.

## Definition of done

An issue is done only when:

- [ ] its acceptance criteria are met, and someone other than the author has seen it work
- [ ] CI is green and it is merged to `main`
- [ ] it runs on staging, or locally against seed data
- [ ] documentation and decision records are updated if the change touched them
- [ ] no secrets are committed

## Decision records

Significant technical decisions are recorded in `docs/decisions/`. See [`docs/decisions/README.md`](docs/decisions/README.md) for when to write one.

## Using AI coding tools

You may use any AI tool. You are responsible for every line you submit: if you cannot explain a change, do not open the pull request. Agent instructions for this repository live in `CLAUDE.md`.
