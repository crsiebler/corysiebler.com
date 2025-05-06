import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { JsonLd, Person } from './JsonLd';

describe('JsonLd Component', () => {
  it('renders a script tag with the correct type', () => {
    const schema: Person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Cory Siebler',
      jobTitle: 'Software Engineer',
      description: 'A passionate software engineer.',
      image: 'https://example.com/image.jpg',
      url: 'https://example.com',
      sameAs: [
        'https://github.com/corysiebler',
        'https://linkedin.com/in/corysiebler',
      ],
      skills: ['JavaScript', 'React', 'Node.js'],
      affiliation: {
        '@type': 'Project',
        name: 'Open Source Contributions',
        sponsor: 'GitHub',
      },
      worksFor: [
        {
          '@type': 'Organization',
          name: 'Tech Company',
          url: 'https://techcompany.com',
        },
      ],
    };

    const { container } = render(<JsonLd schema={schema} />);
    const scriptTag = container.querySelector('script');

    expect(scriptTag).not.toBeNull();
    expect(scriptTag?.getAttribute('type')).toBe('application/ld+json');
  });

  it('renders the correct JSON-LD content', () => {
    const schema: Person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Cory Siebler',
      jobTitle: 'Software Engineer',
      description: 'A passionate software engineer.',
      image: 'https://example.com/image.jpg',
      url: 'https://example.com',
      sameAs: [
        'https://github.com/corysiebler',
        'https://linkedin.com/in/corysiebler',
      ],
      skills: ['JavaScript', 'React', 'Node.js'],
      affiliation: {
        '@type': 'Project',
        name: 'Open Source Contributions',
        sponsor: 'GitHub',
      },
      worksFor: [
        {
          '@type': 'Organization',
          name: 'Tech Company',
          url: 'https://techcompany.com',
        },
      ],
    };

    const { container } = render(<JsonLd schema={schema} />);
    const scriptTag = container.querySelector('script');

    expect(scriptTag?.innerHTML).toBe(JSON.stringify(schema));
  });
});
