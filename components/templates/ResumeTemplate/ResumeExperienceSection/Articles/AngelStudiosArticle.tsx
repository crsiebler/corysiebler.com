import { AngelStudiosImage } from '@/atoms/Images/AngelStudiosImage';
import { experienceTechnologies } from '@/constants/experienceTechnologies';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function AngelStudiosArticle() {
  return (
    <ExperienceArticle
      image={<AngelStudiosImage />}
      title="Angel Studios | Senior Software Engineer"
      location="Provo, Utah (Remote) | January 2022 - April 2024 (2 years 4 months)"
      roles={[
        'Achieved Top 5 page rank for dozens of search queries using highly optimized pages and articles.',
        'Created the About page for users to learn more information on Angel Studios.',
        'Improved site experience scores on Ahrefs from 70s to 90s through SEO best practices.',
        'Generated Downloadables section for fans to access cool artwork.',
        'Included JSON-LD and OpenGraph objects on pages to improve sharing and page rank.',
        'Integrated Optimizely for A/B testing, leading to 10-20% increased revenue and viewership through experimentation.',
        'Tracked user events using Segment for analytics and determining the success of campaigns.',
        'Improved Lighthouse score.',
        'Designed i18n routing and a Contentful–Crowdin translation strategy for expansion into 13 international markets, emphasizing Portuguese, French, and Spanish.',
        'Conformed to GDPR regulations.',
        'Initialized push notifications through Braze.',
        'Architected and implemented the website SEO foundation and entire Contentful-powered blog, attracting organic traffic on the order of tens of thousands of visitors per day.',
      ]}
      technologies={experienceTechnologies.angelStudios.join(', ')}
    />
  );
}
