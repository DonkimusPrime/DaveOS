---
name: merge-plan
description: "Produce and execute a merge map between a vendor system in _vendor/ (e.g. Cowork Academy) and DaveOS. Use when: the owner says 'merge plan', 'plan the merge', or asks to integrate a purchased/third-party Cowork or Claude Code system."
---
# Merge plan

Precondition: the vendor system is installed untouched under `_vendor/<name>/` and committed. If not, stop and say so.

## Phase A — map (read-only, no file changes)
1. Inventory every file in `_vendor/<name>/` and every file in DaveOS (excluding `_vendor/`, `99_Archive/`).
2. Classify each vendor file: rule / state / reference / skill / template / automation / lesson-only.
3. For each, decide: **keep** (copy as-is into a DaveOS location), **adapt** (copy then change — say exactly what), **drop** (not applicable — say why), **superseded** (DaveOS already covers it better — say why). Default: vendor wins where both cover the same thing; DaveOS wins only for people/company/corporate structure.
4. Flag: model-workaround rules to prune (repetition reminders, formatting nags), Cowork-only automations that must be recreated as Claude Code scheduled tasks or routines, and any contradictions between vendor rules and `01_Me/Principles.md`.
5. Write the full map to `MERGE-LOG.md` as proposed rows marked `PROPOSED`. Present a summary. Stop and wait for approval.

## Phase B — execute (one workstation at a time)
6. For each approved workstation: copy/adapt files, update the row from `PROPOSED` to done, run `git add -A && git commit -m "merge: <workstation>"`. Confirm with the owner before the next one.
7. After all workstations: run `/audit-reference-files` and `/audit-workstations`. Fix contradictions. Commit.
8. Recreate vendor automations: list each with its proposed cadence and the skill it maps to; the owner schedules them.
