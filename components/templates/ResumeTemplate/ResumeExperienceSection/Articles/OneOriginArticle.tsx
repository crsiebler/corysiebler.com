import { OneOriginImage } from '@/atoms/Images/OneOriginImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function OneOriginArticle() {
  return (
    <ExperienceArticle
      image={<OneOriginImage />}
      title="OneOrigin | Technical Lead"
      location="Scottsdale, AZ | Mar 2025 - Present"
      roles={[
        'Lead the development of Triangulator, a platform automating credit transfer eligibility evaluations for post-secondary institutions (sponsored by ASU).',
        'Architected and implemented scalable, cloud-native solutions using Python, Flask, SQLAlchemy, AWS Lambda, Step Functions, Neptune (graph DB), PostgreSQL, and Vue.js + Tailwind CSS.',
        'Designed evaluator-facing and upcoming student self-service tools for automated credit assessments and instant transcript evaluations.',
        'Delivered a working demo to stakeholders and gathered critical feedback.',
        'Led a distributed team across the US and India, providing technical direction, mentorship, and code reviews.',
        'Collaborated with stakeholders, managed Jira boards, and ensured Agile delivery.',
        'Optimized system performance, enhanced security, and enforced best practices across CI/CD pipelines and cloud infrastructure.',
      ]}
      technologies="Python, Flask, AWS, Vue.js, Graph Databases, JavaScript, PostgreSQL, Tailwind CSS, Jenkins, Jira"
    />
  );
}
