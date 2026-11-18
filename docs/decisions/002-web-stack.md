# ADR-002: Build the web dashboard as a React + TypeScript single-page app (Vite)
Status: Proposed · Date: 2026-11-18
Plan decision #: TODO(assem)
## Context
The web dashboard is used only after login: live map, WebSocket positions, trips, alerts and reports, in English and Arabic (right-to-left). The backend is a separate NestJS API that serves REST and WebSocket. The web app has no public pages and no SEO need. One person builds it, with coding agents, for a fixed demo date of 22 May 2027.
## Decision
We build `apps/web` as a React + TypeScript single-page app bundled with Vite, talking only to the API.
## Alternatives
- **Next.js:** rejected because server rendering adds nothing behind a login, it adds a second server layer next to NestJS, and the map and WebSocket screens are client-only anyway.
## Consequences
Easier: one runtime concept, a static build any host can serve, no server and client component split to debug. Harder: no built-in file-based routing (we pick a router) and no server rendering if a public page is ever needed. Revisit if we add public pages that need SEO.

Proposed, no decision record yet: React Router, TanStack Query, Tailwind CSS, react-i18next, MapLibre GL JS and socket.io-client; deployed as a static build behind Nginx. Environment variables use the `VITE_` prefix.
