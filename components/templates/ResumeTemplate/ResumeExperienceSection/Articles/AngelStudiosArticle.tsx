import { AngelStudiosImage } from '@/atoms/Images/AngelStudiosImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function AngelStudiosArticle() {
  return (
    <ExperienceArticle
      image={<AngelStudiosImage />}
      title="Angel Studios | Senior Software Engineer"
      location="Provo, Utah (Remote) | January 2022 - April 2024"
      roles={[
        'Achieved Top 5 page rank for dozens of search queries using highly optimized pages and articles.',
        'Created the About page for users to learn more information on Angel Studios.',
        'Improved site experience scores on Ahrefs from 70s to 90s through SEO best practices.',
        'Generated Downloadables section for fans to access cool artwork.',
        'Included JSON-LD and OpenGraph objects on pages to improve sharing and page rank.',
        'Integrated Optimizely for A/B testing, leading to 10-20% increased revenue and viewership through experimentation.',
        'Tracked user events using Segment for analytics and determining the success of campaigns.',
        'Improved Lighthouse score.',
        'Implemented i18n localization for a total of 32 different regions.',
        'Conformed to GDPR regulations.',
        'Initialized push notifications through Braze.',
        'Created a website Blog feature from Contentful CMS data that achieved thousands of daily hits organically. Created section from Contentful CMS.',
      ]}
      technologies="React.js, Next.js, Tailwind CSS, i18n, Vercel, Braze, Optimizely, Segment, Snowflake, Bitmovin, Cloudinary, Contentful"
    />
  );
}
