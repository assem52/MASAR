# packages/contracts

The API contract shared by `apps/web` and the Flutter app.

## REST types

TypeScript types generated from the API's OpenAPI spec, which NestJS generates. Never edit them by hand.

The generation script, the import path for `apps/web` and the staging address where the Flutter team gets the spec are added in Phase 1, together with OpenAPI v0.

## Socket.IO events

Hand-written. One room per company. Payloads are defined in Phase 1.

| Event | Direction | Room |
| --- | --- | --- |
| `vehicle.location.updated` | server → client | company |
| `vehicle.status.changed` | server → client | company |
| `alert.created` | server → client | company |
| `trip.started` | server → client | company |
| `trip.ended` | server → client | company |

## Changing the contract

See [`CONTRIBUTING.md`](../../CONTRIBUTING.md#changing-the-api-contract).
