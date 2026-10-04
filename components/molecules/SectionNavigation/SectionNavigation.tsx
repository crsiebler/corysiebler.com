'use client';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'about', name: 'About' },
  { id: 'work', name: 'Selected work' },
  { id: 'expertise', name: 'Expertise' },
  { id: 'contact', name: 'Contact' },
] as const;

export function SectionNavigation() {
  const [active, setActive] = useState<string>('about');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: string = 'about';
      const atBottom =
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 1;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top;
        if (
          top <= window.innerHeight * 0.35 ||
          (atBottom && top < window.innerHeight)
        ) {
          current = section.id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <nav aria-label="On this page" className="section-navigation">
      {sections.map(({ id, name }, index) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? 'location' : undefined}
        >
          <span className="section-nav-line" aria-hidden="true" />
          <span className="section-nav-number" aria-hidden="true">
            0{index + 1}
          </span>
          {name}
        </a>
      ))}
    </nav>
  );
}
