import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
const html = fs.readFileSync('out/index.html', 'utf8');
assert.ok(html.includes('lang="fi"'));
assert.ok(html.includes('noindex'));
assert.equal((html.match(/class="match /g) || []).length, 22);
assert.equal((html.match(/class="book-link"/g) || []).length, 15);
const localAssets = [...html.matchAll(/(?:src|href)="([^"#?]+)(?:\?[^" ]*)?"/g)]
  .map(match => match[1]).filter(url => url.startsWith('/'));
assert.ok(localAssets.length > 5);
for (const url of localAssets) {
  assert.ok(url.startsWith(prefix + '/'), `Missing Pages prefix: ${url}`);
  const relative = decodeURIComponent(url.slice(prefix.length + 1));
  assert.ok(fs.existsSync(path.join('out', relative)), `Missing exported asset: ${relative}`);
}
assert.ok(fs.existsSync('out/404.html'));
console.log(`PASS: static HTML, 22 matches, 15 inquiry links, 404, and ${localAssets.length} exported assets under ${prefix || '/'}.`);
