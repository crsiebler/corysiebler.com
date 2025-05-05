import { HomeHeroSection } from './HomeHeroSection';
import { HomeSkillsSection } from './HomeSkillsSection';

export function HomeTemplate() {
  return (
    <main className="bg-white py-4">
      <HomeHeroSection />
      <hr className="border-tint-light my-4 border-t" />
      <HomeSkillsSection />
    </main>
  );
}
