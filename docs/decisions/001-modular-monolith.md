# ADR-001: Build the backend as a modular monolith
Status: Proposed · Date: 2026-11-16
## Context
The load is small: about 100 vehicles reporting every 10 seconds is 10 writes per second, which one application and one PostgreSQL instance handle easily. One person builds the backend, with coding agents, for a fixed demo date of 22 May 2027. Web and mobile need one stable API, and the demo must be reliable, yet the design must be able to grow to many companies.
## Decision
We build one NestJS application, deployed as one unit and split into modules that own their tables, expose only their `exports`, depend one way (Platform ← Fleet ← Tracking ← Intelligence), and notify higher layers through in-process events.
## Alternatives
- **Microservices:** rejected. They solve problems MASAR does not have (many teams, uneven load) and add service discovery, service-to-service auth and partial failures for one builder to debug alone.
- **Layer-first monolith** (controllers, services, repositories folders): rejected. It is fastest in week one, but nothing stops any service from touching any table, so features tangle and nothing can be extracted later. This is the realistic risk, not microservices.
## Consequences
- **Easier:** local setup, debugging, deployment, cross-module refactoring, and giving a coding agent one module to work in. A module with its own tables and events can still become a service later.
- **Harder:** boundaries are kept by rules and review, not the network. Prisma gives every module one client that reaches every table, so table ownership is a convention, ideally backed by a lint check. One bug can take down the whole backend.
- **Revisit if:** ingestion load far exceeds the planning assumption, or ingestion must stay up while the rest is redeployed. Then extract Tracking.
