---
name: migrate-existing-setup
description: "Migrate an existing setup. Use when: onboarding step 7b, or 'migrate my old Cowork folder / Claude Projects.'"
---
# Migrate an existing setup

Trigger: onboarding step 7b, or "migrate my old Cowork folder / Claude Projects."

Inputs the owner provides: a path to the old folder, and/or exported Project instructions + knowledge files + memory text pasted into `00_Inbox/migration/`.

1. Back up: copy the old folder to `99_Archive/migration-<date>/` untouched. Do nothing until this is confirmed.
2. Inventory everything. Classify each item: rule (→ a `CLAUDE.md` or `Voice-Principles.md`), state (→ a `MEMORY.md`), reference (→ a workstation `Resources/` or `01_Me/`), work product (→ the right workstation), or dead (→ leave in archive).
3. For rules: merge, don't append. Where the old rule and a new file conflict, show both and ask.
4. For old Claude Projects: project instructions → workstation `CLAUDE.md`; project memory → `MEMORY.md` (rewritten as structured lines, not a paragraph); knowledge files → `Resources/`.
5. Present the full mapping as a table. Migrate only what's approved, one workstation at a time, confirming after each.
