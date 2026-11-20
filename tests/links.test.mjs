// Runs against the built site (dist/). Every internal href/src must point at a
// file that exists, and every #anchor must match an id on the target page.
// Run `npm run build` first; CI does.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = '/metacore-portal/';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));

const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
const decode = (s) => decodeURIComponent(s.replaceAll('&amp;', '&'));
const ids = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => decode(m[1])));

function targetFile(urlPath) {
  let p = join(dist, urlPath.slice(BASE.length));
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  return p;
}

test('dist/ exists (run npm run build first)', () => {
  assert.ok(existsSync(join(dist, 'index.html')), 'dist/index.html missing');
});

test('internal links, images and anchors resolve', { skip: !existsSync(dist) }, () => {
  const pages = walk(dist).filter((f) => f.endsWith('.html'));
  assert.ok(pages.length >= 6, `expected at least 6 pages, found ${pages.length}`);
  const problems = [];
  for (const page of pages) {
    const html = readFileSync(page, 'utf8');
    const pageUrl = '/' + relative(dist, dirname(page)).split('\\').join('/') + '/';
    const here = BASE + (pageUrl === '//' ? '' : pageUrl.slice(1));
    for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
      const raw = m[1];
      if (/^(https?:|mailto:|tel:|data:)/.test(raw)) continue;
      const [path, hash] = decode(raw).split('#');
      const abs = path === '' ? here : resolve(here, path) + (path.endsWith('/') ? '/' : '');
      const where = `${relative(dist, page)}: ${raw}`;
      if (!abs.startsWith(BASE)) { problems.push(`${where} -> outside base ${BASE}`); continue; }
      const file = targetFile(abs);
      if (!existsSync(file)) { problems.push(`${where} -> ${abs} not found`); continue; }
      if (hash && file.endsWith('.html') && !ids(readFileSync(file, 'utf8')).has(hash)) {
        problems.push(`${where} -> no id="${hash}" on ${abs}`);
      }
    }
  }
  assert.deepEqual(problems, []);
});
