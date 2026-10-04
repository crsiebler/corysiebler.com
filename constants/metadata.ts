import type { Metadata, Viewport } from 'next';
import type { Person } from '@/atoms/JsonLd';
import { githubUrl, linkedInUrl } from '@/constants/contact';

export const siteUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://corysiebler.com';
const portrait = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'di8xu0omv'}/image/upload/f_auto,q_auto,w_800/cory-siebler/portrait`;
const description =
  'Cory Siebler is a Principal Software Engineer in Phoenix, Arizona, building reliable software, cloud platforms, and AI-enabled engineering workflows.';

export interface GetMetadataProps {
  description?: string;
  path?: string;
  title?: string;
}

export function getViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#f5f6f3' },
      { media: '(prefers-color-scheme: dark)', color: '#0d1723' },
    ],
  };
}

export function getMetadata({
  description: pageDescription = description,
  path = '/',
  title = 'Home',
}: GetMetadataProps): Metadata {
  const pageTitle = `${title ? `${title} | ` : ''}Cory Siebler — Principal Software Engineer`;
  return {
    metadataBase: new URL(siteUrl),
    alternates: { canonical: path },
    title: pageTitle,
    description: pageDescription,
    authors: [{ name: 'Cory Siebler', url: siteUrl }],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      locale: 'en_US',
      url: path,
      siteName: 'Cory Siebler',
      images: [{ url: portrait, width: 800, height: 800, alt: 'Cory Siebler' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [portrait],
    },
  };
}

export const schema: Person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cory Siebler',
  image: portrait,
  description,
  url: siteUrl,
  sameAs: [githubUrl, linkedInUrl, 'https://phitechsolutions.com'],
  jobTitle: 'Principal Software Engineer & Business Owner',
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Phi Technology Solutions, LLC',
      url: 'https://phitechsolutions.com',
    },
    { '@type': 'Organization', name: 'PNC Bank', url: 'https://pnc.com' },
  ],
  knowsAbout: [
    'Software architecture',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'AWS',
    'Developer platforms',
    'AI-enabled engineering',
  ],
};
