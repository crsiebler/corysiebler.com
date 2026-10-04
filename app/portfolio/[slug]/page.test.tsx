import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import ProjectPage, { generateMetadata, generateStaticParams } from './page';
import sitemap from '@/app/sitemap';

beforeAll(() => {
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'mock-cloud-name';
});
afterEach(cleanup);

describe('Project pages', () => {
  it('renders contribution content and working navigation for SGSS', async () => {
    render(await ProjectPage({ params: Promise.resolve({ slug: 'sgss' }) }));
    expect(
      screen.getByRole('heading', { name: 'My contributions' }),
    ).not.toBeNull();
    expect(screen.getByText(/Built Python automation/)).not.toBeNull();
    expect(
      screen.getByRole('link', { name: 'All projects' }).getAttribute('href'),
    ).toBe('/portfolio');
    expect(
      screen
        .getByRole('link', { name: /Next: Angel Studios/ })
        .getAttribute('href'),
    ).toBe('/portfolio/angel#top');
  });

  it('returns a 404 for unknown project URLs', async () => {
    await expect(
      ProjectPage({ params: Promise.resolve({ slug: 'missing' }) }),
    ).rejects.toThrow('NEXT_HTTP_ERROR_FALLBACK;404');
    await expect(
      generateMetadata({ params: Promise.resolve({ slug: 'missing' }) }),
    ).rejects.toThrow('NEXT_HTTP_ERROR_FALLBACK;404');
  });

  it('targets the document top when moving to the next project, including the archive wraparound', async () => {
    const slugs = ['triangulator', 'sgss', 'angel', 'grounds-control'];
    for (const [index, slug] of slugs.entries()) {
      render(await ProjectPage({ params: Promise.resolve({ slug }) }));
      const next = screen.getByRole('link', { name: /^Next:/ });
      expect(next.getAttribute('href')).toBe(
        `/portfolio/${slugs[(index + 1) % slugs.length]}#top`,
      );
      cleanup();
    }
  });

  it('renders detailed narratives for featured and archived case studies', async () => {
    for (const slug of ['triangulator', 'sgss', 'angel', 'grounds-control']) {
      render(await ProjectPage({ params: Promise.resolve({ slug }) }));
      for (const name of [
        'The context',
        'The challenge',
        'The approach',
        'The outcome',
      ]) {
        expect(screen.getByRole('heading', { name })).not.toBeNull();
      }
      cleanup();
    }
  });

  it('prerenders and indexes every case study, including archived work', async () => {
    for (const params of generateStaticParams()) {
      const metadata = await generateMetadata({
        params: Promise.resolve(params),
      });
      expect(metadata.alternates?.canonical).toBe(`/portfolio/${params.slug}`);
      expect(metadata.description).toBeTruthy();
      expect(
        sitemap().some(({ url }) => url.endsWith(`/portfolio/${params.slug}`)),
      ).toBe(true);
    }
    expect(generateStaticParams().map(({ slug }) => slug)).toEqual([
      'triangulator',
      'sgss',
      'angel',
      'grounds-control',
    ]);
  });
});
