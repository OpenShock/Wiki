#!/usr/bin/env node
// Walks docs/, extracts the first H1 from each .md/.mdx into frontmatter
// `title:`, and removes the H1 line from the body. Skips files that already
// have a `title:` in frontmatter.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'docs';

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (/\.mdx?$/.test(name)) out.push(p);
  }
  return out;
}

function escapeYaml(s) {
  if (/[:#'"\\]/.test(s) || s.includes('  ')) {
    return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return s;
}

let updated = 0;
let skipped = 0;
let noH1 = 0;

for (const file of walk(ROOT)) {
  const raw = readFileSync(file, 'utf8');
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  let frontmatter = '';
  let body = raw;
  if (fmMatch) {
    frontmatter = fmMatch[1];
    body = raw.slice(fmMatch[0].length);
  }

  if (/^title\s*:/m.test(frontmatter)) {
    skipped++;
    continue;
  }

  // Find first H1 in body (skip code fences).
  const lines = body.split(/\r?\n/);
  let inFence = false;
  let h1Index = -1;
  let title = '';
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^```/.test(l)) { inFence = !inFence; continue; }
    if (inFence) continue;
    const m = l.match(/^#\s+(.+?)\s*$/);
    if (m) {
      title = m[1].trim();
      h1Index = i;
      break;
    }
  }

  if (!title) {
    noH1++;
    console.log(`  no H1: ${file}`);
    continue;
  }

  // Remove the H1 line (and a single trailing blank line if present).
  lines.splice(h1Index, 1);
  if (lines[h1Index] === '') lines.splice(h1Index, 1);
  // Trim leading blanks.
  while (lines.length && lines[0].trim() === '') lines.shift();
  const newBody = lines.join('\n');

  const titleLine = `title: ${escapeYaml(title)}`;
  const newFm = frontmatter
    ? `---\n${frontmatter}\n${titleLine}\n---\n\n`
    : `---\n${titleLine}\n---\n\n`;

  writeFileSync(file, newFm + newBody);
  updated++;
}

console.log(`\nUpdated: ${updated}  Skipped (had title): ${skipped}  No H1: ${noH1}`);
