import { NextivaImage } from '@/atoms/Images/NextivaImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function NextivaArticle() {
  return (
    <ExperienceArticle
      image={<NextivaImage />}
      title="Nextiva | Software Engineer II"
      location="Scottsdale, AZ | July 2019 - January 2021 (1 year 7 months)"
      roles={[
        'Develop backend microservices using Python Pyramid and Tornado frameworks.',
        'Implement new features and redesign existing user interface using React.js with hooks.',
        'Deploy Dockerized applications and Node packages using automated pipelines in Jenkins to Kubernetes clusters.',
        'Create and maintain RESTful APIs with Java Spring for services such as Identity Access and Management (IAM).',
        'Developed features for a cloud-based VoIP platform serving enterprise clients.',
        'Improved system reliability and scalability through refactoring and performance tuning.',
        'Collaborated with QA and DevOps to streamline deployment pipelines.',
      ]}
      technologies="JavaScript, Python, React.js, Redux.js, Pyramid, Tornado, Java, Spring, Hibernate, PostgreSQL, RabbitMQ, Nginx, Tyk, Docker, Kubernetes, Jenkins, Jira, Bitbucket, Confluence, LocalStack, AWS S3, AWS RDS, AWS ECS"
    />
  );
}
