import { HomeHeroSection } from './HomeHeroSection';
import { HomeSkillsSection } from './HomeSkillsSection';

export function HomeTemplate() {
  return (
    <main className="bg-white py-4">
      <div className="container mx-auto max-w-7xl">
        <HomeHeroSection />
        <hr className="border-tint-light my-4 border-t" />
        <HomeSkillsSection />
      </div>
    </main>
  );
}
