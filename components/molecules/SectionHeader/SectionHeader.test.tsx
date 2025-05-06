import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader Component', () => {
  it('renders the title', () => {
    const { container } = render(<SectionHeader title="My Section" />);
    const headerElement = container.firstChild as HTMLElement;

    expect(headerElement.tagName.toLowerCase()).toBe('h3');
    expect(headerElement.textContent).toBe('My Section');
  });

  it('applies the correct styles', () => {
    const { container } = render(<SectionHeader title="Styled Section" />);
    const headerElement = container.firstChild as HTMLElement;

    expect(headerElement.classList.contains('border-l-4')).toBe(true);
    expect(headerElement.classList.contains('border-indigo-600')).toBe(true);
  });
});
