import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectImage } from '@/atoms/ProjectImage/ProjectImage';
import { ProjectNavigationFocus } from '@/atoms/ProjectNavigationFocus/ProjectNavigationFocus';
import { getMetadata } from '@/constants/metadata';
import { getPortfolioProject, portfolioProjects } from '@/constants/projects';
import { TechnologyBadges } from '@/molecules/TechnologyBadges/TechnologyBadges';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();
  return getMetadata({
    title: project.organization,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();
  const index = portfolioProjects.findIndex((item) => item.slug === slug);
  const next = portfolioProjects[(index + 1) % portfolioProjects.length];

  return (
    <main id="main-content" tabIndex={-1} className="case-study-page">
      <Link href="/portfolio" className="text-link">
        <span aria-hidden="true">←</span> All projects
      </Link>
      <header className="page-heading">
        <p className="section-kicker">
          <span>0{index + 1}</span> / {project.category}
        </p>
        <p className="eyebrow">{project.organization}</p>
        <h1 id="project-title" tabIndex={-1}>
          {project.title}
        </h1>
        <p>{project.summary}</p>
      </header>
      <ProjectNavigationFocus key={slug} />
      <div className="case-study-media">
        <ProjectImage
          publicId={project.publicId}
          alt={project.imageAlt}
          sizes="(min-width: 1024px) 940px, 100vw"
        />
      </div>
      <div className="case-study-content">
        <aside aria-label="Project details">
          <dl className="case-study-facts">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Period / Practice</dt>
              <dd>{project.period}</dd>
            </div>
            <div className="col-span-2">
              <dt>Technologies</dt>
              <dd>
                <TechnologyBadges
                  technologies={project.technologies}
                  label={`${project.organization} technologies`}
                />
              </dd>
            </div>
          </dl>
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link mt-8"
          >
            Visit project <span aria-hidden="true">↗</span>
          </a>
        </aside>
        <div className="case-study-prose">
          <section>
            <h2>The context</h2>
            <p>{project.context}</p>
          </section>
          {project.caseStudy && (
            <>
              <section>
                <h2>The challenge</h2>
                <p>{project.caseStudy.challenge}</p>
              </section>
              <section>
                <h2>The approach</h2>
                {project.caseStudy.approach.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
              <section>
                <h2>The outcome</h2>
                <p>{project.caseStudy.outcome}</p>
              </section>
            </>
          )}
          <section>
            <h2>My contributions</h2>
            <ul>
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <nav className="next-project" aria-label="More projects">
        <Link href="/portfolio" className="text-link">
          Project archive
        </Link>
        <Link href={`/portfolio/${next.slug}#top`} className="text-link">
          Next: {next.organization}
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </main>
  );
}
