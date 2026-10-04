'use client';
import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@/atoms/icons';

export function JumpToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    document.getElementById('main-content')?.focus({ preventScroll: true });
    const anchorDiv = document.getElementById('anchor');
    anchorDiv?.scrollIntoView({
      behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        className="bg-surface text-accent border-line fixed right-5 bottom-5 z-40 rounded-full border p-3"
        type="button"
        aria-label="Back to top"
        data-testid="jump-to-top"
        onClick={scrollToTop}
      >
        <ChevronUpIcon />
      </button>
    )
  );
}
