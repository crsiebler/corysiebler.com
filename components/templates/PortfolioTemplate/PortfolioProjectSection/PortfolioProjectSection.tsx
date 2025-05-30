import { AngelStudiosWebsiteArticle } from './Articles/AngelStudiosWebsiteArticle';
import { GroundsControlWebsiteArticle } from './Articles/GroundsControlWebsiteArticle';
import { LoneButteCasinoArticle } from './Articles/LoneButteCasinoArticle';
import { MusicalInstrumentMuseumArticle } from './Articles/MusicalInstrumentMuseumArticle';
import { NextivaNextOsArticle } from './Articles/NextivaNextOsArticle';
import { SpaceGroundSegmentSustainmentArticle } from './Articles/SpaceGroundSegmentSustainmentArticle';
import { Tempe922PlaceArticle } from './Articles/Tempe922PlaceArticle';
import { TriangulatorArticle } from './Articles/TriangulatorArticle';
import { UnmannedAerialSystemArticle } from './Articles/UnmannedAerialSystemArticle';

export function PortfolioProjectSection() {
  return (
    <section
      className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 xl:grid-cols-3"
      id="projects"
    >
      <TriangulatorArticle />
      <GroundsControlWebsiteArticle />
      <AngelStudiosWebsiteArticle />
      <NextivaNextOsArticle />
      <SpaceGroundSegmentSustainmentArticle />
      <UnmannedAerialSystemArticle />
      <MusicalInstrumentMuseumArticle />
      <LoneButteCasinoArticle />
      <Tempe922PlaceArticle />
    </section>
  );
}
