#!/usr/bin/env node
// Converts VitePress ::: callouts/details to Fumadocs <Callout>/<Accordion> JSX.
// Renames .md → .mdx for files that get JSX injected.
import { readFileSync, writeFileSync, renameSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOT = 'docs';

const typeMap = {
  tip: 'success',
  info: 'info',
  warning: 'warn',
  danger: 'error',
};

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.mdx?$/.test(name)) out.push(p);
  }
  return out;
}

let converted = 0;
let renamed = 0;

for (const file of walk(ROOT)) {
  let raw = readFileSync(file, 'utf8');
  if (!/^:::/m.test(raw)) continue;

  const lines = raw.split(/\r?\n/);
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Match ::: type [optional title]
    const calloutMatch = line.match(/^(\s*):::\s+(tip|warning|danger|info)\s*(.*?)\s*$/);
    const detailsMatch = line.match(/^(\s*):::\s+details\s+(.*?)\s*$/);

    if (calloutMatch) {
      const [, indent, vType, title] = calloutMatch;
      const fType = typeMap[vType];
      i++;

      // Collect content until closing :::
      const content = [];
      while (i < lines.length && !/^\s*:::\s*$/.test(lines[i])) {
        content.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing :::

      // Trim leading/trailing blank lines from content
      while (content.length && content[0].trim() === '') content.shift();
      while (content.length && content[content.length - 1].trim() === '') content.pop();

      if (title) {
        out.push(`${indent}<Callout type="${fType}" title="${title.replace(/"/g, '&quot;')}">`);
      } else {
        out.push(`${indent}<Callout type="${fType}">`);
      }
      for (const cl of content) out.push(cl);
      out.push(`${indent}</Callout>`);
    } else if (detailsMatch) {
      const [, indent, title] = detailsMatch;
      i++;

      const content = [];
      while (i < lines.length && !/^\s*:::\s*$/.test(lines[i])) {
        content.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing :::

      while (content.length && content[0].trim() === '') content.shift();
      while (content.length && content[content.length - 1].trim() === '') content.pop();

      out.push(`${indent}<Accordions>`);
      out.push(`${indent}<Accordion title="${title.replace(/"/g, '&quot;')}">`);
      for (const cl of content) out.push(cl);
      out.push(`${indent}</Accordion>`);
      out.push(`${indent}</Accordions>`);
    } else {
      out.push(line);
      i++;
    }
  }

  const result = out.join('\n');
  writeFileSync(file, result);
  converted++;

  // Rename .md → .mdx if needed
  if (extname(file) === '.md') {
    const newPath = file.replace(/\.md$/, '.mdx');
    renameSync(file, newPath);
    renamed++;
    console.log(`  converted + renamed: ${file} → .mdx`);
  } else {
    console.log(`  converted: ${file}`);
  }
}

console.log(`\nConverted: ${converted}  Renamed to .mdx: ${renamed}`);
