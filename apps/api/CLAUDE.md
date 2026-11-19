# apps/api: instructions for coding agents

The root [`CLAUDE.md`](../../CLAUDE.md) rules apply here too. This file adds what is specific to the backend.

## NestJS 12

This app uses NestJS 12, which is likely newer than what you know. Check the official docs before writing Nest code: https://docs.nestjs.com/llms.txt indexes them, with a markdown page per chapter. Do not rely on NestJS 10 or 11 tutorials.

- **ESM only.** Relative imports end in `.js` (`import { AppService } from './app.service.js'`). `__dirname` does not exist; use `import.meta.dirname`.
- **Tests run on Vitest.** Mocks are `vi.fn()`, not `jest.fn()`. Unit tests sit next to the code as `*.spec.ts`; end-to-end tests live in `test/`.
- **Validation** uses a Standard Schema library (Zod, Valibot, ArkType) through `StandardSchemaValidationPipe` with `@Body({ schema })` or `@Param('id', { schema })`. See https://docs.nestjs.com/application/validation.md.
- **First-party packages come first.** Before adding a library or writing your own, check whether Nest has a package for it, for example `@nestjs/config`, `@nestjs/swagger`, `@nestjs/websockets`, `@nestjs/terminus`, `@nestjs/event-emitter`, `@nestjs/schedule`, `@nestjs/throttler`. Adding any dependency still needs a reason in the pull request.

## Commands

Run from the repository root:

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the API on http://localhost:3000 with reload on save |
| `pnpm --filter @masar/api lint` | Lint with oxlint (config: root `.oxlintrc.json`) |
| `pnpm --filter @masar/api typecheck` | Type check without building |
| `pnpm --filter @masar/api test` | Unit tests |
| `pnpm --filter @masar/api test:e2e` | End-to-end tests |
| `pnpm --filter @masar/api build` | Compile to `dist/` |

## Not decided yet

The database layer (Prisma on PostgreSQL + PostGIS is proposed), authentication, and the module folder layout. Do not introduce any of them until the matching decision record in `docs/decisions/` is accepted.
