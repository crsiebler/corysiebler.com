'use client';
import React, { useState, useEffect } from 'react';
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
    const anchorDiv = document.getElementById('anchor');
    anchorDiv?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        data-testid="jump-to-top"
        onClick={scrollToTop}
        className="bg-tint-lightest fixed right-5 bottom-5 z-40 rounded-full p-2 shadow-lg"
      >
        <ChevronUpIcon />
      </button>
    )
  );
}
