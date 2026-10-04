import { GroundsControlImage } from '@/atoms/Images/GroundsControlImage';
import { ProjectArticle } from '@/organisms/ProjectArticle';

export function GroundsControlWebsiteArticle() {
  return (
    <ProjectArticle
      description="A custom website designed around Grounds Control’s project photography and its Incredible Passion campaign, built with Next.js, TypeScript, Tailwind CSS, and optimized image delivery."
      image={<GroundsControlImage />}
      link="/portfolio/grounds-control"
      linkLabel="Explore the project"
      title="Grounds Control Company Website"
    />
  );
}
