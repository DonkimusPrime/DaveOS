# HANDOFF — context from the chat session that built this kit (Sept 6, 2026)

Read this once at the start of the first Claude Code session. Leave it in place until Phase 3 is done, then ask the owner to archive it.

## What the owner wants
One operating system, run from a private git repo in Claude Code, that:
- runs personal life first — fitness/health, admin, finances, travel, comms, AI learning;
- manages the companies the owner runs or participates in, and the employees and partners across them, proactively;
- grows into a corporate-wide layer across the parent organization (Decennial Group) without restructuring;
- steadily raises the owner's AI knowledge, skills, and utilization.

## How this kit was built
- Deliberately context-free. No names, companies, or history were used. Every content field is blank and gets filled through the interviews in `ONBOARDING.md`.
- Same architecture as Jeff Su's Cowork Academy (root rules + editable memory + routed workstations + skills + audits), built from what's public about it. It lacks his tested content and lessons.
- Additions his system doesn't have: a cross-cutting people layer (`30_People/`), a company template (`20_Companies/`), and a reserved corporate overlay (`95_Corporate/`).

## Decisions made
1. Owner is likely purchasing the Cowork Academy (Core tier) and merging it with this kit.
2. Merge approach, agreed:
   - Install his system untouched and keep it as a pristine reference copy (lessons and future updates still map to it).
   - Produce a merge map first: every file marked keep / adapt / drop / superseded, one-line reason. Owner approves before anything moves.
   - Execute the merge in Cowork, one workstation at a time, pointed at both folders.
   - Keep `MERGE-LOG.md` recording every file's origin and every change.
   - Default to his tested wording over this kit's; change structure only where the people/company/corporate layers require it.
   - Prune only model-workaround rules (repetition, over-formatting reminders); keep all genuine context (voice, triage rules, decisions).
   - Confirm his license permits modification and extension before merging.
3. Platform decision: Claude Code, not Cowork, for the owner's own use (native CLAUDE.md hierarchy, git history, enforced hooks, model switching). Cowork remains the surface for sharing with non-technical people later.
4. Repo decision: DaveOS is its own private repo, separate from the owner's existing Claude Code repo.
5. Corporate layer (`95_Corporate/`) is Phase 5 — not started until the personal layer is stable (~30 days).

## Open item
- The owner operates from an internal app, **Dasher** (capture-first team notepad, hosted on Cloud Run). Integration options discussed: (a) wrap its backend as a remote MCP server and add as a custom connector — requires whoever maintains Dasher's backend, and the endpoint must be reachable from Anthropic's cloud; (b) drive its web UI via Claude in Chrome; (c) periodic export into a workstation `Resources/` folder. **Unresolved: who maintains Dasher's backend.** Dasher maps naturally onto the `00_Inbox/` capture-and-route pattern.

## Non-negotiables carried over
- Never delete or move files without asking.
- Health data: only what the owner writes down; never infer conditions.
- Never store account numbers, IDs, or credentials anywhere in this system.
- End substantial sessions with `/close-out` — this is how corrections become rules, and it commits.

## First prompt for the next session
"Read CLAUDE.md, MEMORY.md, ONBOARDING.md, and 00_Inbox/HANDOFF.md. Confirm the folder map matches what you see, then tick Phase 1 in MEMORY.md and run /close-out."
