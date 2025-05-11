import { ER2Image } from '@/atoms/Images/ER2Image';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function ER2Article() {
  return (
    <ExperienceArticle
      image={<ER2Image />}
      title="ER2 | Web Developer"
      location="Mesa, AZ | March 2021 - April 2021"
      roles={[
        'Built and maintained custom ERP modules for inventory and logistics management.',
        'Integrated barcode scanning and automated reporting features.',
        'Worked with stakeholders to gather requirements and deliver tailored solutions.',
        'Created Cron based scheduling for company slideshow displayed throughout facilities.',
        'Added ability to log multiple door seals for chain of custody.',
        'Bugfixes for table sorting and UX consistency.',
      ]}
      technologies="PHP, Symfony, JavaScript, MySQL, Docker"
    />
  );
}
