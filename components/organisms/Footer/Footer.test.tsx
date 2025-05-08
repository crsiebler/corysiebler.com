import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('renders the footer', () => {
    const { container } = render(<Footer />);
    const footerElement = container.firstChild as HTMLElement;

    expect(footerElement).not.toBeNull();
  });

  it('renders the copyright text', () => {
    const { container } = render(<Footer />);
    const textElement = container.querySelector('span');

    expect(textElement?.textContent).toContain('©');
  });
});
