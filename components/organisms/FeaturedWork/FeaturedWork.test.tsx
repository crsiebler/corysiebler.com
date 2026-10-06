import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { FeaturedWork } from './FeaturedWork';
import { featuredProjects } from '@/constants/projects';
import { PortfolioProjectSection } from '@/templates/PortfolioTemplate/PortfolioProjectSection';
import { ResumeSkillsSection } from '@/templates/ResumeTemplate/ResumeSkillsSection/ResumeSkillsSection';

beforeAll(() => {
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'mock-cloud-name';
});
afterEach(cleanup);

describe('Project selection', () => {
  it('pairs technology labels with decorative icons and supports text-only concepts', () => {
    render(<FeaturedWork />);
    const technologies = screen.getByRole('list', {
      name: 'Triangulator / ASU technologies',
    });
    const python = within(technologies).getByText('Python').closest('li')!;
    expect(python.querySelector('[aria-hidden="true"] svg')).not.toBeNull();
    const openCypher = within(technologies)
      .getByText('openCypher')
      .closest('li')!;
    expect(openCypher.querySelector('svg')).toBeNull();
  });

  it('keeps every homepage technology highlight represented in its project and resume skills', () => {
    render(<ResumeSkillsSection />);
    for (const project of featuredProjects) {
      for (const technology of project.technologyHighlights ?? []) {
        expect(project.technologies).toContain(technology);
        expect(screen.getByText(technology)).not.toBeNull();
      }
    }
  });

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
