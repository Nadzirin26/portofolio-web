import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { projectDetails } from '../src/data/projectDetails.js';
import { projectRoute } from '../src/lib/projectRoutes.js';

test('detail URLs support direct navigation and reject nested/invalid paths', () => {
  assert.equal(projectRoute('/projects/fish-it'), 'fish-it');
  assert.equal(projectRoute('/projects/fish-it/'), 'fish-it');
  for (const path of ['/', '/demos/test/index.html', '/projects/a/b', '/projects/%2f']) assert.equal(projectRoute(path), null);
});
test('Vercel rewrite targets detail pages without swallowing PNG project previews or demo files', () => {
  const { rewrites } = JSON.parse(readFileSync('vercel.json', 'utf8'));
  assert.equal(rewrites.length, 1);
  assert.equal(rewrites[0].source, '/projects/:slug([a-z0-9-]+)');
  assert.equal(rewrites[0].destination, '/index.html');
});
test('each case study has a unique stable URL, valid preview, and complete verified content', () => {
  const cardSource = readFileSync('src/data/index.js', 'utf8').split('export const education')[0];
  const cardIds = [...cardSource.matchAll(/id: (\d+),/g)].map(m => Number(m[1]));
  assert.deepEqual(projectDetails.map(p => p.id).sort(), cardIds.sort(), 'Every public project card must have a case study');
  assert.equal(new Set(projectDetails.map(p => p.slug)).size, projectDetails.length);
  assert.equal(new Set(projectDetails.map(p => p.id)).size, projectDetails.length);
  for (const p of projectDetails) {
    assert.equal(projectRoute(`/projects/${p.slug}`), p.slug);
    assert.ok(existsSync(`public/projects/${p.image}`), p.slug);
    assert.ok(p.summary && p.verification && p.paragraphs.length >= 2, p.slug);
    assert.ok(p.role && p.workflow.length && p.architecture.length, p.slug);
    for (const link of p.links) assert.ok(/^https:\/\//.test(link.href) || link.href.startsWith('/demos/'));
  }
});

test('every workflow and pipeline explains inputs, processing, outputs, branches and boundaries', () => {
  for (const project of projectDetails) {
    for (const [steps, explanation] of [[project.workflow, project.workflowExplanation], [project.architecture, project.pipelineExplanation]]) {
      assert.ok(explanation.intro && explanation.limitation && explanation.branches.length, project.slug);
      assert.deepEqual(steps, explanation.steps.map(s => s.title));
      for (const step of explanation.steps) assert.ok(step.input && step.description && step.output, project.slug);
    }
  }
});
