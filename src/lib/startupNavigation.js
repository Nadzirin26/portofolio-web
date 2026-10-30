// A refresh starts at Home; ordinary navigation keeps project return positions.
export function resetOnReload(browser = window) {
  const navigation = browser.performance.getEntriesByType('navigation')[0];
  if (navigation?.type !== 'reload') return;
  browser.history.scrollRestoration = 'manual';
  browser.history.replaceState(null, '', '/');
  browser.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}
