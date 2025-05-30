import { PortfolioHeroSection } from './PortfolioHeroSection';
import { PortfolioProjectSection } from './PortfolioProjectSection';

export function PortfolioTemplate() {
  return (
    <main className="py-8">
      <PortfolioHeroSection />
      <hr className="border-tint-light my-4" />
      <PortfolioProjectSection />
    </main>
  );
}
