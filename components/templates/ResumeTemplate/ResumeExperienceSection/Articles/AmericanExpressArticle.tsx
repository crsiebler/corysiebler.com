import { AmericanExpressImage } from '@/atoms/Images/AmericanExpressImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function AmericanExpressArticle() {
  return (
    <ExperienceArticle
      image={<AmericanExpressImage />}
      title="American Express | Senior Software Engineer I"
      location="Scottsdale, AZ | May 2021 - January 2022"
      roles={[
        'Migrate existing repositories from Bitbucket to GitHub.',
        'Bugfixes for managing user sessions and handling timeouts.',
        'Diagnose compatibility issues of modules in Internet Explorer 11.',
        'Upgrade login functionality to improved API for tighter user profile and user session integration.',
      ]}
      technologies="React.js, Redux.js, Jenkins, Docker, Parrot QA, One-App"
    />
  );
}
