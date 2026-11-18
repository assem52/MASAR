# packages/contracts

The API contract shared by `apps/web` and the Flutter app.

## REST types

TypeScript types generated from the API's OpenAPI spec, which NestJS generates. Never edit them by hand.

- Regenerate: TODO(assem): command, once the script exists.
- `apps/web` imports the types from this package: TODO(assem): import path, once the package exists.
- The Flutter team gets the published spec from TODO(assem): staging URL.

## Socket.IO events

Hand-written. One room per company.

| Event | Direction | Payload | Room |
| --- | --- | --- | --- |
| `vehicle.location.updated` | server → client | TODO(assem) | company |
| `vehicle.status.changed` | server → client | TODO(assem) | company |
| `alert.created` | server → client | TODO(assem) | company |
| `trip.started` | server → client | TODO(assem) | company |
| `trip.ended` | server → client | TODO(assem) | company |

## Changing the contract

See [`CONTRIBUTING.md`](../../CONTRIBUTING.md#changing-the-api-contract).
