import { NextivaNextOsImage } from '@/atoms/Images/NextivaNextOsImage';
import { ProjectArticle } from '@/organisms/ProjectArticle';

export function NextivaNextOsArticle() {
  return (
    <ProjectArticle
      description="Nextiva is a cloud-based all-in-one unified business communications platform, team collaboration tool, and customer service software. Top products include Nextiva’s VoIP business phone system, Sales and Customer CRM tools, and advanced Analytics and Reporting."
      image={<NextivaNextOsImage />}
      link="https://www.nextiva.com/"
      title="Nextiva NextOS"
    />
  );
}
