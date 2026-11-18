---
name: code-review
description: Review current MASAR changes for concrete defects, regressions, and contract mismatches. Use before sharing or merging a code change.
---

# Review MASAR changes

Review the current diff against the surrounding code and the relevant project guidance. The public website is a simulated demo; production backend, mobile, and hardware behavior belong to a separate platform.

Prioritize actionable findings:

- Incorrect behavior, edge cases, or regressions introduced by the change.
- Broken or inconsistent API, data, or team integration assumptions.
- Security or privacy issues, especially around public tracking links and fleet data.
- Missing failure/loading/empty states where the changed flow needs them.

For each finding, cite the file and line and explain the user impact. Report only issues supported by the code or documented contracts. If there are no findings, say so and mention important unverified areas. Do not modify files while reviewing.
