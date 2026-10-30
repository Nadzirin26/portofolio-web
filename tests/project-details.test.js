import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { projectDetails } from '../src/data/projectDetails.js';
import { projectRoute } from '../src/lib/projectRoutes.js';

test('detail URLs support direct navigation and reject nested/invalid paths', () => {
  assert.equal(projectRoute('/projects/fish-it'), 'fish-it');
  assert.equal(projectRoute('/projects/fish-it/'), 'fish-it');
  for (const path of ['/', '/demos/test/index.html', '/projects/a/b', '/projects/%2f']) assert.equal(projectRoute(path), null);
});
test('each case study has a unique stable URL, valid preview, and complete verified content', () => {
  assert.equal(new Set(projectDetails.map(p => p.slug)).size, projectDetails.length);
  assert.equal(new Set(projectDetails.map(p => p.id)).size, projectDetails.length);
  for (const p of projectDetails) {
    assert.equal(projectRoute(`/projects/${p.slug}`), p.slug);
    assert.ok(existsSync(`public/projects/${p.image}`), p.slug);
    assert.ok(p.summary && p.verification && p.paragraphs.length >= 2, p.slug);
    for (const link of p.links) assert.ok(/^https:\/\//.test(link.href) || link.href.startsWith('/demos/'));
  }
});
