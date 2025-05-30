import { AngelStudiosApplicationImage } from '@/atoms/Images/AngelStudiosApplicationImage';
import { ProjectArticle } from '@/organisms/ProjectArticle';

export function AngelStudiosWebsiteArticle() {
  return (
    <ProjectArticle
      description="Home to record breaking movies and TV shows. With millions of viewers, the audience chooses what the next big hit will be. All shows are crowdfunded. Watch Angel Studios Light Amplifying Content; available on TV, mobile, and web."
      image={<AngelStudiosApplicationImage />}
      link="https://www.angel.com"
      title="Angel Studios Website"
    />
  );
}
