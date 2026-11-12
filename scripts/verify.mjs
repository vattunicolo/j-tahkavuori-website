// Read-only HTTP smoke check for an already running local app.
import assert from 'node:assert/strict';
const base = 'http://127.0.0.1:3000';
const page = await fetch(base);
assert.equal(page.status, 200);
const html = await page.text();
for (const text of ['lang="fi"', 'noindex', 'j.tahkavuori@outlook.com', 'tel:+358401272354', '109 900', 'Vain vapaat']) assert.ok(html.includes(text), `Missing: ${text}`);
assert.equal((html.match(/class="match /g) || []).length, 22, 'Expected 22 upcoming matches');
assert.equal((html.match(/class="book-link"/g) || []).length, 15, 'Expected 15 inquiry links');
for (const path of ['/aitio-0.jpeg','/aitio-1.jpeg','/aitio-2.jpeg','/aitio-3.jpeg','/aitio-4.jpeg','/icon.svg']) {
  const res = await fetch(base + path);
  assert.equal(res.status, 200, path);
  assert.ok(res.headers.get('content-type')?.startsWith('image/'), path);
}
assert.equal((await fetch(base + '/missing-page')).status, 404);
console.log('PASS: page, Finnish language, noindex, contact links, sale price, 22 matches, 15 inquiry links, 6 images, 404.');
