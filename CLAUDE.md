# CLAUDE.md — Root Instructions (always read first)

This repo is a personal operating system run with Claude Code. It starts personal and is designed to grow into a corporate system later without restructuring. Subfolder `CLAUDE.md` files load automatically when you work in that folder.

## Order of operations for every session
1. Read this file.
2. Read `MEMORY.md` (what's active right now).
3. Read `01_Me/Profile.md` and `01_Me/Principles.md` (who the owner is, how they decide).
4. Identify which workstation the task belongs to and read that workstation's `CLAUDE.md` + `MEMORY.md`.
5. Do the work inside that workstation. Update that workstation's `MEMORY.md` when state changes.

## The three-file model
- `CLAUDE.md` = rules and standing context for a folder. Changes rarely.
- `MEMORY.md` = current state: open items, status, decisions. Short, human-editable, updated often.
- Everything else = the actual work product and reference material (source of truth).
If a fact lives in a file, don't restate it in MEMORY.md — link to it.

## Folder map
- `00_Inbox/` — drop zone. Anything ported in lands here first, then gets routed (see `/intake-and-route`).
- `01_Me/` — identity, principles, goals. Standing context for everything.
- `10_Personal/` — personal life workstations (Comms, Health-Fitness, Finances, Travel, Admin, AI-Learning).
- `20_Companies/` — one folder per company. Copy `_TEMPLATE-Company/` to add one.
- `30_People/` — one file per person, across all companies and personal life. People are cross-cutting, so they live here, not inside a company folder.
- `.claude/skills/` — repeatable processes. Load the matching skill when a task fits it.
- `91_Templates/` — starting shapes for recurring documents.
- `95_Corporate/` — reserved for the org-wide layer (shared rules, org people, org projects). Empty until Phase 3.
- `99_Archive/` — closed work. Read-only unless asked.

## Routing rules
- Belongs to an existing workstation → work there.
- About a person → `30_People/<name>.md` (create from template if missing), and link from the relevant company/workstation.
- Looks like a new company or area → ask before creating the folder.
- No home → leave in `00_Inbox/` and list it under "Unrouted" in root `MEMORY.md`.

## Cross-loading
- Anything the owner will send or sign → also read `10_Personal/Comms/Voice-Principles.md`.
- Anything about a person → also read their `30_People/` file.

## Standing rules
- Never delete or move files outside `00_Inbox/` (the guard hook blocks it anyway). Never edit `_vendor/` or `99_Archive/`.
- Commit after every substantive change. Small commits with plain-language messages. Never force-push.
- Claude Code's own auto-memory is secondary; `MEMORY.md` files are canonical. If they disagree, `MEMORY.md` wins and auto-memory gets corrected.
- One workstation per task. If a task spans two (e.g. a person who works across two companies), do the work in the one most affected and note the link in the other's `MEMORY.md`.
- Health data: only read what's in `10_Personal/Health-Fitness/`. Never infer conditions; work only with what the owner has written down.
- Prefer building a reusable process (a skill or template) over a one-off answer when the same request will recur.
- At the end of any session with a decision or correction, run `/close-out` — it turns corrections into rules and commits. That is how the system learns.
- Keep `MEMORY.md` files under ~40 lines. If one grows past that, move detail into a real file and link it.
