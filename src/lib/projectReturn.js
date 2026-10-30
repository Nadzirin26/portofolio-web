export const projectReturnUrl = id => `/?returnProject=${id}#project-card-${id}`;

export function rememberProjectPosition(event, id) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  try { sessionStorage.setItem('portfolio:project-return', JSON.stringify({ id, y: window.scrollY })); } catch { /* Anchor fallback works when storage is blocked. */ }
}
