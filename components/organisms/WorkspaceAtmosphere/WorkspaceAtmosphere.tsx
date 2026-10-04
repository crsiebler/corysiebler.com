'use client';
import { useEffect, useRef } from 'react';

export function WorkspaceAtmosphere() {
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      scene.current?.style.setProperty(
        '--scene-shift',
        `${Math.min(window.scrollY * 0.06, 120)}px`,
      );
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const configure = () => {
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(frame);
      frame = 0;
      if (media.matches) {
        scene.current?.style.setProperty('--scene-shift', '0px');
      } else {
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
      }
    };
    configure();
    media.addEventListener('change', configure);
    return () => {
      window.removeEventListener('scroll', onScroll);
      media.removeEventListener('change', configure);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={scene} className="workspace-atmosphere" aria-hidden="true">
      <div className="atmosphere-orbit orbit-one" />
      <div className="atmosphere-orbit orbit-two" />
      <div className="atmosphere-grid" />
    </div>
  );
}
