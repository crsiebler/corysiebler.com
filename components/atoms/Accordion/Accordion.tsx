'use client';
import { useState, ReactNode } from 'react';
import clsx from 'clsx';
import { ChevronRightIcon } from '@/atoms/icons';
import { Text } from '@/atoms/Text';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-tint-darkest overflow-hidden rounded-lg shadow">
      <button
        onClick={toggleAccordion}
        className="bg-tint-lightest flex w-full items-center justify-between p-4 text-left"
      >
        <Text component="h2" variant="h4">
          {title}
        </Text>
        <ChevronRightIcon
          className={clsx('transform transition-transform', {
            '-rotate-90': !isOpen,
            'rotate-90': isOpen,
          })}
        />
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}
