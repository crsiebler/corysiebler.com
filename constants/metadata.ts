import { env } from 'process';
import { Person } from '@/atoms/JsonLd';

export interface GetMetadataProps {
  description?: string;
  path?: string;
  title?: string;
}

export function getMetadata({
  description,
  path = '/',
  title = 'Home',
}: GetMetadataProps) {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL;
  const page = title ? `${title} | ` : '';
  return {
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    title: `${page}Cory Siebler - Senior Software Engineer`,
    description:
      description ??
      'Cory Siebler is a Senior Software Engineer, business owner of Phi Technology Solutions, LLC, and a technical lead at OneOrigin. Explore his expertise.',
    keywords:
      'Cory Siebler, Senior Software Engineer, Phi Technology Solutions, LLC, OneOrigin, Triangulator, Arizona State University, full-stack developer, Next.js, Python, React.js, web development, software architecture, portfolio, GitHub',
    author: 'Cory Siebler',
    openGraph: {
      title: `${page}Cory Siebler - Senior Software Engineer`,
      type: 'website',
      locale: 'en_US',
      url: `${baseUrl}${path}`,
      site_name: 'Cory Siebler',
      images: [
        {
          url: `https://res.cloudinary.com/di8xu0omv/image/upload/cory-siebler/portrait.jpeg`,
          width: 800,
          height: 800,
          alt: 'Cory Siebler Portrait',
        },
      ],
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Cory Siebler',
      image: `${baseUrl}/images/portrait.jpg`,
      description:
        'Cory Siebler is a Software Engineer, business owner of Phi Technology Solutions, LLC, and a technical lead at OneOrigin. Explore his expertise.',
      url: baseUrl,
      sameAs: [
        'https://github.com/corysiebler',
        'https://www.linkedin.com/in/corysiebler/',
        'https://phitechsolutions.com',
      ],
      jobTitle: 'Senior Software Engineer & Business Owner',
      worksFor: [
        {
          '@type': 'Organization',
          name: 'Phi Technology Solutions, LLC',
          url: 'https://phitechsolutions.com',
        },
        {
          '@type': 'Organization',
          name: 'OneOrigin',
          url: 'https://oneorigin.us',
        },
      ],
      affiliation: {
        '@type': 'Project',
        name: 'Triangulator',
        sponsor: 'Arizona State University',
      },
    } as Person,
  };
}

export const schema: Person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cory Siebler',
  image: `${env.NEXT_PUBLIC_BASE_URL}/images/portrait.jpg`,
  description:
    'Cory Siebler is a Senior Software Engineer, business owner of Phi Technology Solutions, LLC, and a technical lead at OneOrigin. Explore his portfolio, skills, and expertise.',
  url: 'https://corysiebler.com',
  sameAs: [
    'https://github.com/corysiebler',
    'https://www.linkedin.com/in/corysiebler/',
    'https://phitechsolutions.com',
  ],
  jobTitle: 'Senior Software Engineer & Business Owner',
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Phi Technology Solutions, LLC',
      url: 'https://phitechsolutions.com',
    },
    {
      '@type': 'Organization',
      name: 'OneOrigin',
      url: 'https://oneorigin.us',
    },
  ],
  affiliation: {
    '@type': 'Project',
    name: 'Triangulator',
    sponsor: 'Arizona State University',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Next.js',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Python',
    'Django',
    'Java',
    'Spring',
    'PHP',
    'Symfony',
    'DevOps',
    'Docker',
    'Kubernetes',
    'Databases',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'GraphQL',
    'Git',
    'AWS',
    'Heroku',
    'Vercel',
  ],
};
