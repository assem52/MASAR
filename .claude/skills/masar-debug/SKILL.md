---
name: masar-debug
description: Diagnose and fix a reproducible bug in the MASAR website or project. Use when behavior is failing, inconsistent, or difficult to explain.
---

# Debug a MASAR issue

1. Reproduce the issue or identify the failing path from evidence. Check browser-facing state, map/simulation behavior, and relevant console or build output as appropriate.
2. Narrow the cause before changing code. Separate a defect in the demo from behavior that belongs to the separate production platform.
3. Make a focused fix and preserve existing data and component boundaries. If the issue concerns a cross-team API or data contract, compare it with `02-docs/MASAR_Technical_Project_Brief.md` and document any unresolved mismatch instead of silently changing assumptions.
4. Run the relevant checks available in `website/package.json`. Summarize the cause, fix, and verification evidence.
