---
name: masar-implement
description: Implement a feature or focused change in the MASAR repository. Use when changing the website or coordinating a change with MASAR's documented team interfaces.
---

# Implement a MASAR change

1. Identify which project owns the change. The public demo lives in `website/`; its README describes the demo as simulated browser data with no backend. Do not imply that the demo implements production backend, hardware, or mobile behavior.
2. Read the nearest README and relevant code before editing. For cross-team work, consult `02-docs/MASAR_Technical_Project_Brief.md` and any API, data, or design contract relevant to the change.
3. Keep the change aligned with the existing structure and interfaces. Coordinate assumptions through the shared contract or documentation when the change crosses frontend, backend, mobile, hardware, AI, or UI/UX boundaries. Do not invent team conventions that are not documented.
4. Make the smallest coherent change. Preserve the demo's simulated-data boundary and the brief's guidance that AI output must be grounded in supplied data.
5. Before finishing, inspect `website/package.json` for available scripts and run only checks relevant to the change. The current website scripts include `build`; do not assume a test suite exists. Report what changed and any checks that could not be run.
