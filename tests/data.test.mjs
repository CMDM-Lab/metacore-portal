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
  assert.ok(data.tables.length > 0);
  for (const t of data.tables) {
    assert.ok(t.title, 'table needs a title');
    for (const it of t.items) {
      const where = `${t.title} / ${it.en}`;
      assert.ok(it.en && it.zh, `${where}: en and zh are required`);
      for (const k of ['internal', 'academic', 'industry']) {
        const v = it[k];
        const ok = (typeof v === 'number' && Number.isInteger(v) && v > 0) || (typeof v === 'string' && v.trim() && !/^[\d,]+$/.test(v));
        // A string of digits ("3,060") means the price was quoted in YAML and
        // would skip number formatting; write it as a bare number instead.
        assert.ok(ok, `${where}: ${k}="${v}" must be a positive integer or a text like 客製化價格`);
      }
    }
  }
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
