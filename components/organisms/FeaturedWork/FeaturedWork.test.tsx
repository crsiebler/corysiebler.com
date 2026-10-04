import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { FeaturedWork } from './FeaturedWork';
import { PortfolioProjectSection } from '@/templates/PortfolioTemplate/PortfolioProjectSection';

beforeAll(() => {
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'mock-cloud-name';
});
afterEach(cleanup);

describe('Project selection', () => {
  it('features Triangulator, SGSS, and Angel without an archived fourth card', () => {
    render(<FeaturedWork />);
    expect(screen.getAllByRole('article')).toHaveLength(3);
    const destinations = screen
      .getAllByRole('link', { name: /Explore the project/ })
      .map((link) => link.getAttribute('href'));
    expect(destinations).toEqual([
      '/portfolio/triangulator',
      '/portfolio/sgss',
      '/portfolio/angel',
    ]);
  });

  it('keeps Grounds Control accessible from the archive without duplicating Triangulator', () => {
    render(<PortfolioProjectSection />);
    const link = screen.getByRole('link', { name: /Explore the project/ });
    expect(link.getAttribute('href')).toBe('/portfolio/grounds-control');
    expect(link.getAttribute('target')).toBeNull();
    expect(
      screen.queryByRole('heading', { name: 'Credit Mobility Triangulator' }),
    ).toBeNull();
  });
});
