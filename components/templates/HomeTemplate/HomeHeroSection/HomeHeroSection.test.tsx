import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';
import { HomeHeroSection } from './HomeHeroSection';

beforeAll(() => {
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'mock-cloud-name';
});

describe('HomeHeroSection', () => {
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
