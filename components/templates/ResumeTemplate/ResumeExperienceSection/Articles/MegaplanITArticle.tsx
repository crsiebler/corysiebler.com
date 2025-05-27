import { MegaplanITImage } from '@/atoms/Images/MegaplanITImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function MegaplanITArticle() {
  return (
    <ExperienceArticle
      image={<MegaplanITImage />}
      title="MegaplanIT | Senior Software Engineer (Contract)"
      location="Scottsdale, AZ | May 2024 - November 2025"
      roles={[
        'Led the development of a PCI compliance SaaS platform for enterprise clients.',
        'Architected and implemented scalable solutions using Next.js, React, Node.js, and AWS.',
        'Integrated third-party APIs and built custom reporting dashboards for compliance tracking.',
        'Mentored junior developers and established best practices for code quality and CI/CD.',
      ]}
      technologies="Next.js, React, Node.js, AWS, PostgreSQL, Docker, GitHub Actions"
    />
  );
}
