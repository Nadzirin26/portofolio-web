import test from 'node:test';
import assert from 'node:assert/strict';
import { resetOnReload } from '../src/lib/startupNavigation.js';

function browserFor(type) {
  const calls = [];
  return {
    calls,
    performance: { getEntriesByType: () => type ? [{ type }] : [] },
    history: { scrollRestoration: 'auto', replaceState: (...args) => calls.push(args) },
    scrollTo: options => calls.push(options),
  };
}
test('refresh clears detail paths, hashes and return queries by selecting Home before render', () => {
  const browser = browserFor('reload');
  resetOnReload(browser);
  assert.equal(browser.history.scrollRestoration, 'manual');
  assert.deepEqual(browser.calls, [[null, '', '/'], { top: 0, left: 0, behavior: 'instant' }]);
});
test('ordinary links, direct detail entry and back/forward preserve their navigation', () => {
  for (const type of ['navigate', 'back_forward', undefined]) {
    const browser = browserFor(type);
    resetOnReload(browser);
    assert.deepEqual(browser.calls, []);
    assert.equal(browser.history.scrollRestoration, 'auto');
  }
});
