---
name: close-out
description: "Close out a session: turn corrections into rules, decisions into memory, then git commit. Use when: the owner says 'close out', or at the end of any session that produced a decision, correction, or new file."
---
# Session audit (end of a substantial session)

Trigger: the owner says "close out," or at the end of any session that produced a decision, correction, or new file.

1. List what happened this session: files created/changed, decisions made, corrections the owner gave.
2. For each correction: is it a one-off, or a rule? If a rule, propose the exact line and the file it belongs in (`Voice-Principles.md`, a workstation `CLAUDE.md`, or `01_Me/Principles.md`).
3. For each decision: propose the `MEMORY.md` line (or a `91_Templates/decision-log.md` entry if it's significant).
4. Propose updates to root `MEMORY.md` "top 3" if priorities shifted.
5. Apply only what's approved. This is how the system learns — if the owner skips this step, nothing carries forward.
6. Commit: `git add -A && git commit -m "close-out: <one line>"`. Every close-out is a commit; that is the audit trail.
