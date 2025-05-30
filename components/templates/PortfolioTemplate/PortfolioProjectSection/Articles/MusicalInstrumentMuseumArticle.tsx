import { MusicalInstrumentMuseumImage } from '@/atoms/Images/MusicalInstrumentMuseumImage';
import { ProjectArticle } from '@/organisms/ProjectArticle';

export function MusicalInstrumentMuseumArticle() {
  return (
    <ProjectArticle
      description="MIM has a collection of more than 8,000 instruments from more than 200 world countries. The galleries reflect the rich diversity and history of many world cultures. But music and instruments also show us what we have in common—a thought powerfully expressed in our motto, music is the language of the soul. Provided estimation and project management as the landscape subcontractor under general contractor Ryan Companies, and landscape architect Ten Eyck Landscape Architects."
      image={<MusicalInstrumentMuseumImage />}
      link="https://mim.org/"
      title="Musical Instrument Museum"
    />
  );
}
