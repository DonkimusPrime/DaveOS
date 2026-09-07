#!/usr/bin/env node
// DaveOS guard hook. Deterministic rules that a CLAUDE.md line can't enforce.
// Exit 2 = block (stderr is shown to Claude as the reason). Exit 0 = allow.
let d = '';
process.stdin.on('data', c => (d += c)).on('end', () => {
  let j = {};
  try { j = JSON.parse(d || '{}'); } catch (e) { process.exit(0); }
  const t = j.tool_name || '';
  const i = j.tool_input || {};
  const deny = m => { process.stderr.write('DaveOS guard: ' + m + '\n'); process.exit(2); };

  if (t === 'Bash') {
    const c = i.command || '';
    if (/(^|[\s;&|(])(rm|rmdir|shred|del|rd)\s/i.test(c)) deny('deletion commands are blocked. Ask the owner to delete manually.');
    if (/git\s+push\b.*(\s--force\b|\s-f\b)/.test(c)) deny('force push is blocked.');
    if (/git\s+(reset\s+--hard|clean\s+-[a-z]*f|checkout\s+--\s|branch\s+-D)/.test(c)) deny('destructive git command is blocked.');
    if (/(^|[\s;&|(])mv\s/.test(c) && !/00_Inbox/.test(c)) deny('mv outside 00_Inbox is blocked. Only inbox routing may move files; otherwise ask the owner.');
    if (/[\\/]_vendor[\\/]/.test(c) && /(>|>>|\bsed\s+-i|\btee\b)/.test(c)) deny('_vendor is read-only.');
  }

  if (['Write', 'Edit', 'MultiEdit'].includes(t)) {
    const p = i.file_path || '';
    if (/(^|[\\/])99_Archive[\\/]/.test(p)) deny('99_Archive is read-only.');
    if (/(^|[\\/])_vendor[\\/]/.test(p)) deny('_vendor is the pristine vendor copy. Never edit it; copy into a workstation instead.');
  }
  process.exit(0);
});
