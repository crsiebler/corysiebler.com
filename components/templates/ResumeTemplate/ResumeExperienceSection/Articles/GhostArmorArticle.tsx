import { GhostArmorImage } from '@/atoms/Images/GhostArmorImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function GhostArmorArticle() {
  return (
    <ExperienceArticle
      image={<GhostArmorImage />}
      title="Ghost Armor | Web Developer"
      location="Tempe, AZ | 2015 - 2017"
      roles={[
        'Maintain an eCommerce website built on Symfony framework.',
        'Provide in office IT support along with on the phone help for approximately fifty remote locations throughout the U.S.',
        'Develop new applications, such as an asset management system, and scripts to improve reporting and automate tasks.',
      ]}
      technologies="PHP, Symfony2, Twig, MySQL, CSS, jQuery, AJAX, Foundation"
    />
  );
}
