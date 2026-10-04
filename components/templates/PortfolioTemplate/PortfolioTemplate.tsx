import Link from 'next/link';
import { PortfolioProjectSection } from './PortfolioProjectSection';
import { FeaturedWork } from '@/organisms/FeaturedWork/FeaturedWork';

export function PortfolioTemplate() {
  return (
    <main id="main-content" tabIndex={-1} className="portfolio-page">
      <header className="page-heading">
        <p className="section-kicker">
          <span>~/</span> projects
        </p>
        <h1>
          Built with purpose.
          <br />
          <em>Across very different worlds.</em>
        </h1>
        <p>
          From space infrastructure to streaming and business platforms, a
          selection of the systems and experiences I’ve helped bring to life.
        </p>
        <Link href="/resume" className="text-link mt-6">
          View my experience <span aria-hidden="true">→</span>
        </Link>
      </header>
      <section aria-label="Featured projects" className="portfolio-featured">
        <FeaturedWork />
      </section>
      <section aria-labelledby="archive-title">
        <p className="eyebrow">~/archive</p>
        <h2 id="archive-title" className="archive-heading">
          More from the journey.
        </h2>
        <PortfolioProjectSection />
      </section>
    </main>
  );
}
