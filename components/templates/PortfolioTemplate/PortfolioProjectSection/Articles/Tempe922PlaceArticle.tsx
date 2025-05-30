import { Tempe922PlaceImage } from '@/atoms/Images/Tempe922PlaceImage';
import { ProjectArticle } from '@/organisms/ProjectArticle/ProjectArticle';

export function Tempe922PlaceArticle() {
  return (
    <ProjectArticle
      description="Provided estimation and project management on one of Tempe’s premier student housing communities. 922 Place offers fully-furnished apartments with private bedrooms, and amenities for health, fitness, and socialization. Main feature of project was a lounge area consisting of a green-roof terrace and pool located on the four floor."
      image={<Tempe922PlaceImage />}
      link="https://www.instagram.com/922place/"
      title="922 Place"
    />
  );
}
