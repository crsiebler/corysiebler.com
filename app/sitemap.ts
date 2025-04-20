import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://corysiebler.com',
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://corysiebler.com/resume',
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://corysiebler.com/portfolio',
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
