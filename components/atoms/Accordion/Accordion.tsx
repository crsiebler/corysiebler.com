import { ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  return (
    <details className="resume-disclosure">
      <summary>
        {title}
        <span aria-hidden="true">+</span>
      </summary>
      <div className="resume-disclosure-content">{children}</div>
    </details>
  );
}
