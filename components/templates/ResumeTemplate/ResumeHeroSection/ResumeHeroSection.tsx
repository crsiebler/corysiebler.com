import Link from 'next/link';

export function ResumeHeroSection() {
  return (
    <header className="page-heading">
      <p className="section-kicker">
        <span>~/</span> experience
      </p>
      <h1>
        A career of connecting
        <br />
        <em>ideas to implementation.</em>
      </h1>
      <p>
        Engineering, architecture, and delivery across aerospace, media,
        financial services, and business platforms.
      </p>
      <div className="hero-actions">
        <a
          className="workspace-button"
          href="https://docs.google.com/document/d/1RqyY9j_5iwr4sg6hJGz0-6dbhUcQbUe6yhzmMff9g0Q/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open resume <span aria-hidden="true">↗</span>
        </a>
        <Link className="text-link" href="/portfolio">
          Explore my work <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
