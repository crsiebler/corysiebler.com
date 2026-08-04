import { PNCImage } from '@/atoms/Images/PNCImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function PNCArticle() {
  return (
    <ExperienceArticle
      image={<PNCImage />}
      title="PNC Bank | Software Engineer Principal"
      href="https://www.pnc.com/"
      location="Phoenix, AZ | August 2026 - Present"
      roles={[
        'Lead the design and development of scalable, secure, and high-performance Python applications aligned with business strategy and enterprise standards.',
        'Develop, test, debug, document, maintain, and enhance applications using FastAPI, Celery, and SQLAlchemy.',
        'Design distributed, fault-tolerant, and resilient software systems and optimize application performance.',
        'Lead code reviews, mentor engineers, and establish software development and lifecycle best practices.',
        'Collaborate with stakeholders to translate business requests into technical requirements for features and enhancements.',
        'Champion Agile delivery through sprint planning, backlog refinement, complex problem solving, and cross-functional collaboration.',
        'Develop and maintain CI/CD pipelines using Git, Bitbucket, and Jenkins, with Ansible configuration management on RHEL.',
        'Evaluate software solutions for security, supportability, maintainability, cost, risk, and adherence to enterprise standards.',
      ]}
      technologies="Python, FastAPI, Celery, SQLAlchemy, REST APIs, Git, Bitbucket, Jenkins, Ansible, RHEL, CI/CD, Agile"
    />
  );
}
