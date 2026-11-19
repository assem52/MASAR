# ADR-004: Keep the API, web dashboard and contracts in one repository; the Flutter app in its own
Status: Proposed · Date: 2026-11-19
Plan decision #: 1
## Context
MASAR has a NestJS API, a React dashboard and a Flutter app. The API and the dashboard are built by the same person, change together (a new endpoint usually means a new screen), and share TypeScript contract types. The Flutter app is built by a separate mobile team in a different language and toolchain, and it only needs the API's published contract.
## Decision
One repository holds `apps/api`, `apps/web`, `packages/contracts`, `infra` and `docs`; the Flutter app lives in its own repository and consumes the OpenAPI spec published by the API.
## Alternatives
- **One repository for everything, Flutter included:** rejected because the mobile team would carry the Node toolchain and CI, and the TypeScript team the Flutter toolchain, for no shared code.
- **A separate repository per app (api, web, mobile):** rejected because the web app could not import `packages/contracts` without publishing it, and every API change would need coordinated pull requests in two repositories.
## Consequences
Easier: an API change and the matching dashboard change land in one pull request; one install, one lockfile and one CI for all TypeScript code ([ADR-003](003-pnpm-workspaces.md)); one place for decisions and docs. Harder: the Flutter team depends on the published spec staying current, so breaking API changes follow the contract process in `CONTRIBUTING.md`; the two repositories have separate history and CI. Revisit if the mobile app starts sharing code with the TypeScript apps.
