import { useLayoutEffect } from 'react';

export default function RestoreProjectPosition() {
  useLayoutEffect(() => {
    const id = new URLSearchParams(location.search).get('returnProject');
    if (!id || !/^\d+$/.test(id)) return;
    let frame;
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        const card = document.getElementById(`project-card-${id}`);
        if (!card) return;
        let saved;
        try { saved = JSON.parse(sessionStorage.getItem('portfolio:project-return')); } catch { /* Use anchor. */ }
        if (saved?.id === Number(id) && Number.isFinite(saved.y) && saved.y >= 0) window.scrollTo({ top: saved.y, behavior: 'instant' });
        else card.scrollIntoView({ behavior: 'instant', block: 'start' });
        card.querySelector('a[data-detail-link]')?.focus({ preventScroll: true });
      });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  return null;
}
