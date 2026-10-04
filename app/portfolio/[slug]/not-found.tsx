import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="portfolio-page">
      <header className="page-heading">
        <p className="eyebrow">404 / project not found</p>
        <h1>This project isn’t in the archive.</h1>
        <p>Explore the selected work and earlier projects.</p>
      </header>
      <Link className="workspace-button" href="/portfolio">
        Back to projects
      </Link>
    </main>
  );
}
