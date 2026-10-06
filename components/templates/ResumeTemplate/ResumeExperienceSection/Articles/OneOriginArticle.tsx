import { OneOriginImage } from '@/atoms/Images/OneOriginImage';
import { experienceTechnologies } from '@/constants/experienceTechnologies';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function OneOriginArticle() {
  return (
    <ExperienceArticle
      image={<OneOriginImage />}
      title="OneOrigin | Technical Lead"
      location="Scottsdale, AZ | Mar 2025 - Jul 2026"
      roles={[
        'Led development of Triangulator, an ASU-sponsored platform recommending potential transfer-credit equivalencies to university administrators.',
        'Wrote efficient openCypher graph-pattern queries for nightly processing across hundreds of thousands of course nodes and equivalency relationships in clustered AWS Neptune.',
        'Incorporated statewide curriculum relationships to expand equivalency discovery across state boundaries.',
        'Architected and implemented scalable, cloud-native solutions using Python, Flask, SQLAlchemy, AWS Lambda, Step Functions, Neptune (graph DB), PostgreSQL, and Vue.js + Tailwind CSS.',
        'Designed evaluator-facing and upcoming student self-service tools for automated credit assessments and instant transcript evaluations.',
        'Delivered a working demo to stakeholders and gathered critical feedback.',
        'Led a distributed team across the US and India, providing technical direction, mentorship, and code reviews.',
        'Collaborated with stakeholders, managed Jira boards, and ensured Agile delivery.',
        'Optimized system performance, enhanced security, and enforced best practices across CI/CD pipelines and cloud infrastructure.',
      ]}
      technologies={experienceTechnologies.oneOrigin.join(', ')}
    />
  );
}
