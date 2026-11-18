# MASAR architecture

Status: Proposed. This describes the intended design; it will change as decisions are accepted. Each decision has a record in `decisions/`.

## System overview

```
Real trackers ──> Traccar ──┐
                            ├──> API: ingestion ──> domain modules ──> REST + WebSocket ──> Web dashboard
Simulator ──────────────────┘          │                  │                                 └──> Mobile app
                                       ├──> PostgreSQL + PostGIS (history, business data)
                                       └──> Redis (latest position per vehicle)
```

- **Traccar** decodes device protocols and forwards each position as JSON to one API endpoint. The simulator posts to the same endpoint, so real and simulated data follow one path.
- **The API** is one NestJS application divided into modules (ADR-001).
- **The web dashboard and the mobile app** (separate repository) talk only to the API.

## Backend modules

Dependencies point one way; a lower layer never imports a higher one.

| Layer | Modules | Responsibility |
| --- | --- | --- |
| Platform | auth, companies, users | Identity, roles, tenant scoping |
| Fleet | vehicles, drivers, devices | Fleet records and device-to-vehicle mapping |
| Tracking | ingestion, live state, trips | Receive positions, keep the latest position, detect trips |
| Intelligence | geofences, alerts, reports, AI | Rules, summaries and answers built on tracking data |

When a lower layer must notify a higher one, it emits an in-process event (for example, a position was recorded). See the planned ADR on in-process events.

## Two paths through the API

- **Hot path:** a position arrives, is validated, stored, written to Redis, and announced as an event. It does nothing else.
- **Request path:** a person uses the dashboard or app. Guards check the token and role; every query is scoped by `company_id`.

## Web dashboard

- Server state (lists, trips, reports) is fetched over REST and cached.
- Live state (positions) arrives over WebSocket into a small store keyed by vehicle.
- UI state (selection, filters) lives in the URL and components.
- On load or reconnect: fetch a snapshot of current positions, then apply live updates.

## Not decided yet

Token storage in the browser, trip-detection rules, map rendering for 100+ markers, and the database schema.
