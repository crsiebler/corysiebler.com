import { GroundsControlImage } from '@/atoms/Images/GroundsControlImage';
import { ProjectArticle } from '@/organisms/ProjectArticle';

export function GroundsControlWebsiteArticle() {
  return (
    <ProjectArticle
      description="One of the largest commercial landscape contractors in the Southwest needed to redesign their existing Square Space website. The update, built using Next.js, TypeScript, Tailwind CSS, and Payload CMS, gives them a marketable component to attract new customers and stay in touch with their existing clientele."
      image={<GroundsControlImage />}
      link="https://groundscontrol.com"
      title="Grounds Control Company Website"
    />
  );
}
