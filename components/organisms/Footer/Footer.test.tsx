import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';
import { Footer } from './Footer';

afterEach(cleanup);

describe('Footer Component', () => {
  it('links to the X profile with an accessible name', () => {
    render(<Footer />);
    expect(
      screen
        .getByRole('link', { name: '@CorySiebler on X' })
        .getAttribute('href'),
    ).toBe('https://x.com/CorySiebler');
    expect(screen.getByText('X', { exact: true })).not.toBeNull();
    expect(
      screen.getByRole('link', { name: '@CorySiebler on X' }).textContent,
    ).toBe('X ↗');
  });
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
