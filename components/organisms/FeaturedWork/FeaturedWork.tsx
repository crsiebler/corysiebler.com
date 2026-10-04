import Link from 'next/link';
import { ProjectImage } from '@/atoms/ProjectImage/ProjectImage';
import { featuredProjects } from '@/constants/projects';

export function FeaturedWork() {
  return (
    <div className="featured-work">
      {featuredProjects.map((project, index) => (
        <article key={project.slug} className="featured-project">
          <Link
            href={`/portfolio/${project.slug}`}
            className="project-image-link"
            aria-label={`Explore ${project.organization}`}
          >
            <ProjectImage publicId={project.publicId} alt={project.imageAlt} />
            <span className="project-index" aria-hidden="true">
              0{index + 1}
            </span>
          </Link>
          <div className="project-body">
            <p className="eyebrow">{project.category}</p>
            <h3>
              <Link href={`/portfolio/${project.slug}`}>
                {project.organization}
                <span aria-hidden="true" className="project-arrow">
                  ↗
                </span>
              </Link>
            </h3>
            <p className="project-headline">{project.title}</p>
            <p className="muted-copy">{project.summary}</p>
            <ul
              className="technology-list"
              aria-label={`${project.organization} technologies`}
            >
              {(project.technologyHighlights ?? project.technologies).map(
                (technology) => (
                  <li key={technology}>{technology}</li>
                ),
              )}
            </ul>
            <Link href={`/portfolio/${project.slug}`} className="text-link">
              Explore the project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
