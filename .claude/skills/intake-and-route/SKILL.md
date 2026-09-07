---
name: intake-and-route
description: "Intake and route (00_Inbox). Use when: files in `00_Inbox/`, or the owner says 'process the inbox.'"
---
# Intake and route (00_Inbox)

Trigger: files in `00_Inbox/`, or the owner says "process the inbox."

1. List every file in `00_Inbox/`. For each, read enough to classify it.
2. Propose a destination for each using the routing rules in root `CLAUDE.md`. Present as a table: file → destination → one-line reason.
3. Flag anything that would need a new company folder or a new person file. Do not create those without approval.
4. Wait for approval. Then move files, create person files from template where approved, and add a line to the receiving workstation's `MEMORY.md` if the file changes current state.
5. Anything unresolved stays in the inbox and gets listed under "Unrouted" in root `MEMORY.md`.
