---
name: audit-workstations
description: "Audit workstations. Use when: monthly (scheduled) or 'audit my workstations.'"
---
# Audit workstations

Trigger: monthly (scheduled) or "audit my workstations."

1. For every folder in `10_Personal/` and `20_Companies/`: read `CLAUDE.md` and `MEMORY.md`, list files, note last-modified dates.
2. Flag:
   - `MEMORY.md` over 40 lines, or containing items older than 30 days with no update → propose archive or a real file
   - Workstations untouched for 60+ days → propose merging or archiving
   - Files sitting in a workstation that belong elsewhere by the routing rules
   - Skills in `.claude/skills/` that no workstation references and haven't run in 60 days
3. Present as a change list with a one-line reason each. Apply only what's approved. Moves go to `99_Archive/<workstation>/` with the date.
