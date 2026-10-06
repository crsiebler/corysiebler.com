import type { MetadataRoute } from 'next';
import { siteUrl } from '@/constants/metadata';
import { portfolioProjects } from '@/constants/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/',
    '/resume',
    '/portfolio',
    ...portfolioProjects.map(({ slug }) => `/portfolio/${slug}`),
  ].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
