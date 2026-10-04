'use client';
import { useEffect } from 'react';

export function ProjectNavigationFocus() {
  useEffect(() => {
    if (window.location.hash !== '#top') return;
    const frame = window.requestAnimationFrame(() => {
      // Cancel any smooth scrolling started while focusing the outgoing link.
      if (window.scrollY !== 0) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      document.getElementById('project-title')?.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
