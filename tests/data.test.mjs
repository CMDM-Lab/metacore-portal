// Checks the YAML data files that drive the pricing, members and downloads
// pages. A mistake here (a typo'd price, a missing file) would otherwise only
// show up as a broken page after deploy.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { parse } from 'yaml';

const root = new URL('../', import.meta.url);
const load = (p) => parse(readFileSync(new URL(p, root), 'utf8'));

test('pricing.yaml: every item has en, zh and 3 prices', () => {
  const data = load('src/data/pricing.yaml');
  if (data.effective !== null) {
    assert.match(String(data.effective), /^\d{4}-\d{2}-\d{2}$/, 'effective must be YYYY-MM-DD or null');
  }
  assert.ok(data.items.length > 0, 'items must not be empty');
  for (const it of data.items) {
    const where = it.en;
    assert.ok(it.en && it.zh, `${where}: en and zh are required`);
    for (const k of ['internal', 'academic', 'industry']) {
      const v = it[k];
      const ok = (typeof v === 'number' && Number.isInteger(v) && v > 0) || (typeof v === 'string' && v.trim() && !/^[\d,]+$/.test(v));
      // A string of digits ("3,060") means the price was quoted in YAML and
      // would skip number formatting; write it as a bare number instead.
      assert.ok(ok, `${where}: ${k}="${v}" must be a positive integer or a text like 客製化價格`);
    }
  }
});

// MetaCore asked (2026-11) for one combined table with priced items first.
// An item counts as priced if any of its 3 prices is a number.
test('pricing.yaml: priced items come before 客製化價格 items', () => {
  const { items } = load('src/data/pricing.yaml');
  const priced = items.map((it) => ['internal', 'academic', 'industry'].some((k) => typeof it[k] === 'number'));
  const firstCustom = priced.indexOf(false);
  const late = firstCustom < 0 ? [] : items.slice(firstCustom).filter((_, i) => priced[firstCustom + i]).map((it) => it.en);
  assert.deepEqual(late, [], 'move these priced items above the first 客製化價格 item');
});

test('downloads.yaml: files exist and legacy ids are unique', () => {
  const { files } = load('src/data/downloads.yaml');
  const ids = files.map((f) => f.legacy_id).filter((x) => x !== undefined);
  assert.equal(new Set(ids).size, ids.length, 'legacy_id must be unique');
  for (const f of files) {
    assert.ok(f.title, `${f.file}: title is required`);
    assert.ok(existsSync(new URL(`public/files/${f.file}`, root)), `public/files/${f.file} does not exist`);
  }
});

test('members.yaml: photos exist', () => {
  const data = load('src/data/members.yaml');
  for (const p of [...data.pis, ...data.staff]) {
    assert.ok(p.name, 'name is required');
    assert.ok(Array.isArray(p.contact), `${p.name}: contact must be a list`);
    if (p.photo) {
      assert.ok(existsSync(new URL(`src/assets/images/${p.photo}`, root)), `${p.name}: photo ${p.photo} not in src/assets/images/`);
    }
  }
});

// In YAML, " #" starts a comment: `- 02.2312-3456 #288781` silently drops the
// extension. Phone numbers must be quoted. This happened during the migration.
test('data files: no unquoted value followed by " #" (YAML comment trap)', () => {
  const bad = [];
  for (const f of ['pricing.yaml', 'members.yaml', 'downloads.yaml']) {
    readFileSync(new URL(`src/data/${f}`, root), 'utf8').split('\n').forEach((line, i) => {
      const m = line.match(/^\s*(?:-\s+|[\w]+:\s+)([^"'#\s][^#]*?)\s+#/);
      if (m) bad.push(`src/data/${f}:${i + 1}: ${line.trim()}  -> wrap the value in quotes`);
    });
  }
  assert.deepEqual(bad, []);
});

// The cmdm6 redirect rules point old download links at public/files/. If a file
// is removed but its rule stays, old links 301 to a 404.
test('deploy/cmdm6 redirect: every target file exists in public/files', () => {
  const conf = readFileSync(new URL('deploy/cmdm6-metacore-portal-redirect.conf', root), 'utf8');
  const targets = [...conf.matchAll(/\/metacore-portal\/files\/(\S+)/g)].map((m) => m[1]);
  assert.ok(targets.length > 0, 'expected at least one file redirect');
  const missing = targets.filter((f) => !existsSync(new URL(`public/files/${f}`, root)));
  assert.deepEqual(missing, [], 'redirect points to a file that is not in public/files/');
});
