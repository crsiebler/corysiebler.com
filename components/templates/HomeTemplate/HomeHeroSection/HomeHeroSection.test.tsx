import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { HomeHeroSection } from './HomeHeroSection';

beforeAll(() => {
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'mock-cloud-name';
});
afterEach(cleanup);

describe('HomeHeroSection', () => {
  it('links to the X profile with an accessible name', () => {
    render(<HomeHeroSection />);
    expect(
      screen
        .getByRole('link', { name: '@CorySiebler on X' })
        .getAttribute('href'),
    ).toBe('https://x.com/CorySiebler');
    const xLink = screen.getByRole('link', { name: '@CorySiebler on X' });
    expect(xLink.querySelector('[aria-hidden="true"] svg')).not.toBeNull();
  });
  it('invites hiring inquiries through Phi Technology Solutions', () => {
    render(<HomeHeroSection />);

    expect(screen.getByText(/Want to hire me\? Reach out to/i)).not.toBeNull();
    expect(
      screen
        .getByRole('link', { name: 'Phi Technology Solutions' })
        .getAttribute('href'),
    ).toBe('https://phitechsolutions.com/');
  });
});
