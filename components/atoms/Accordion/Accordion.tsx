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
    <div
      className={clsx(
        'border-tint-lightest border bg-white transition-all',
        'rounded-lg shadow-md',
        isOpen ? 'mb-6' : 'mb-2',
      )}
    >
      <button
        onClick={toggleAccordion}
        className={clsx(
          'bg-tint-lightest flex w-full items-center justify-between rounded-lg p-4 text-left',
          isOpen && 'rounded-b-none',
        )}
      >
        <Text component="h6" variant="body2">
          {title}
        </Text>
        <ChevronRightIcon
          className={clsx('transform transition-transform duration-300', {
            '-rotate-90': !isOpen,
            'rotate-90': isOpen,
          })}
          size={18}
        />
      </button>
      {isOpen && <div className="rounded-b-lg bg-white p-6">{children}</div>}
    </div>
  );
}
