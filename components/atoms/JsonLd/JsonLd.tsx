export interface Organization {
  '@type': 'Organization';
  name: string;
  url: string;
}

export interface Project {
  '@type': 'Project';
  name: string;
  sponsor: string;
}

export interface Person {
  '@context': 'https://schema.org';
  '@type': 'Person';
  affiliation: Project;
  description: string;
  image: string;
  jobTitle: string;
  name: string;
  sameAs: string[];
  skills: string[];
  url: string;
  worksFor: Organization[];
}

interface JsonLdProps {
  schema: Person;
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
