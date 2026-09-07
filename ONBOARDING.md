# ONBOARDING — DaveOS in Claude Code, step by step

Five phases. Each is a day or less. Don't start a phase until the previous one's checkbox in `MEMORY.md` is ticked.
Model per phase: **Opus 5** for Phases 1–3 and 5 (judgment-heavy, one-time). **Sonnet 5** for Phase 4 (recurring operations). Switch with `/model`. If the merge in Phase 3 stalls on Opus, `/model fable` for that stretch only.

---

## Phase 0 — In chat (done)
This kit was designed in Claude chat with no personal context. From here on, all work happens in Claude Code. If you want to think something through conversationally, do it in a Code session too — same model, and it can see the files. Chat is now optional.

---

## Phase 1 — Install the repo and prove the guardrails (about 1 hour)

### 1.1 Make it its own private repo
Do **not** put DaveOS inside your existing Claude Code repo. Reasons: that repo's `CLAUDE.md` would load on top of this one (coding conventions applied to your health log); its hooks and permissions would combine with these; and health/finance files would ride along wherever that repo gets pushed. Separate repo, private, no shared remote with anything public.

```
mkdir -p ~/daveos && cd ~/daveos
# unzip the kit here so CLAUDE.md is at the repo root
git init
git add -A
git commit -m "DaveOS v3: initial install"
```
Optional: `gh repo create daveos --private --source=. --push` if you want a private remote (needed later for cloud routines).

If you genuinely want it inside the existing repo anyway: put it at `<repo>/daveos/`, open Claude Code *in that subfolder* (so the parent `CLAUDE.md` still loads but this one is closest), and move the `.claude/settings.json` hooks up to the parent repo's settings. Not recommended.

### 1.2 Open it in Claude Code
Desktop app → Code tab → open `~/daveos`, or terminal: `cd ~/daveos && claude`. Accept the workspace trust prompt (required for hooks to run). Run `/model opus`.

### 1.3 Prove the guardrails before anything else
Paste, one at a time, and confirm each is refused with a "DaveOS guard" message:
- "Delete `00_Inbox/README.md`."
- "Move `01_Me/Goals.md` to `99_Archive/`."
- "Edit `_vendor/README.md` to add a line."
Then confirm this *asks* rather than blocks: "Add a line to `10_Personal/Finances/MEMORY.md`." Decline it.
If any of these doesn't behave, stop and fix `.claude/settings.json` / `.claude/hooks/guard.js` before continuing.

### 1.4 Connect tools
Connectors you've set up in claude.ai (Gmail, Calendar, Drive, Microsoft 365) are available to Claude Code. Check with `/mcp`. Add anything missing there or with `claude mcp add`. Test: "What's on my calendar tomorrow?"

### 1.5 First real prompt
"Read CLAUDE.md, MEMORY.md, ONBOARDING.md, and 00_Inbox/HANDOFF.md. Confirm the folder map matches what you see, then tick Phase 1 in MEMORY.md and run /close-out."

**Stop here.** Do not run the `01_Me` interviews yet — Phase 2 is where content gets entered once.

---

## Phase 2 — Cowork Academy, installed untouched (1–3 days, mostly his course)

### 2.1 Buy the Core tier
Updates matter because Cowork and Claude Code are changing monthly. Check the license permits modifying and extending the templates for personal use (the personalization module implies yes).

### 2.2 Install his system exactly as he instructs — in Cowork
His install and lessons assume Cowork. Follow them there, in a separate folder (e.g. `~/CoworkAcademy`), so the walkthroughs match your screen. Run his personalization module fully: voice, profile, projects, preferences. This is the one place you enter personal content from scratch. Do modules 1–3 at minimum before Phase 3; the rest in parallel with everything after.

### 2.3 Snapshot the pristine install into the repo
```
cp -R ~/CoworkAcademy/ ~/daveos/_vendor/cowork-academy/
cd ~/daveos && git add -A && git commit -m "vendor: Cowork Academy pristine install"
```
The guard hook makes `_vendor/` read-only from here on. Tick Phase 2.

---

## Phase 3 — Merge (one focused day, Opus 5)

### 3.1 Map
In Claude Code: `/merge-plan`. It reads both systems and writes every file's proposed fate (keep / adapt / drop / superseded) into `MERGE-LOG.md`, then stops. Read the map. Push back on anything. Default: his content wins where both cover the same thing; DaveOS wins on `30_People/`, `20_Companies/`, `95_Corporate/`.

### 3.2 Execute
Approve, and it proceeds one workstation at a time, committing after each. Between workstations, open the changed files and read them — this is your only chance to learn what's in there cheaply.

### 3.3 Recreate his automations
His Cowork scheduled tasks and skills come out of `/merge-plan` as a list. Schedule them in Claude Code (Phase 4.2). His skills land in `.claude/skills/`.

### 3.4 Audit and close
`/audit-reference-files`, `/audit-workstations`, fix what they flag, `/close-out`. Tick Phase 3.

---

## Phase 4 — Operate (week 2 onward, Sonnet 5)

### 4.1 Daily habit
Open Claude Code in `~/daveos`, `/model sonnet`. Work. End with `/close-out`. That command is the whole system: it turns corrections into rules and commits. Skip it and nothing compounds.

### 4.2 Schedule the recurring skills
Desktop scheduled tasks run while the app is open; cloud routines (claude.ai/code/routines or `/schedule`) run without your machine but need the private remote from 1.1. Start with desktop, move to routines once stable.
- `/weekly-review` — Sunday evening
- `/health-checkin` — daily or 3x/week
- `/one-on-one-prep` — morning of any calendar event with someone in `30_People/`
- `/ai-learning-log` — Friday
- `/audit-reference-files` and `/audit-workstations` — monthly
Record each in root `MEMORY.md` under "Recurring tasks."

### 4.3 Port remaining files
Anything not covered by his personalization: drop into `00_Inbox/`, run `/intake-and-route`, approve the plan.

### 4.4 Companies and people
"Copy `20_Companies/_TEMPLATE-Company` to `20_Companies/<Name>` and interview me to fill its CLAUDE.md and MEMORY.md." Then `/people-roster`. One company per session.

### 4.5 Month-one review
Run both audits. Ask: "What have I requested ad hoc three or more times that should be a skill?" Build those. Tick Phase 4.

---

## Phase 5 — Corporate layer (day 30+, Opus 5)
Open `95_Corporate/README.md` and follow it. When sharing with others: they can open the same repo (or a subset) in Cowork; you stay in Code. Personal folders stay out of anything shared.
