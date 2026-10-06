import Link from 'next/link';
import { GitHubIcon } from '@/atoms/icons/GitHubIcon';
import { LinkedInIcon } from '@/atoms/icons/LinkedInIcon';
import { XIcon } from '@/atoms/icons/XIcon';
import {
  emailUrl,
  githubUrl,
  linkedInUrl,
  xHandle,
  xUrl,
} from '@/constants/contact';
import { SectionNavigation } from '@/molecules/SectionNavigation/SectionNavigation';

export function HomeHeroSection() {
  return (
    <div className="home-introduction" id="hero">
      <p className="eyebrow">
        <span aria-hidden="true">$ </span>whoami
      </p>
      <h1>
        Cory
        <br />
        Siebler<span className="name-period">.</span>
      </h1>
      <p className="hero-role">Principal Software Engineer</p>
      <p className="hero-statement">
        Thoughtful systems.
        <br />
        Reliable software.
        <br />
        <span>Built for what comes next.</span>
      </p>
      <p className="hero-description">
        I connect architecture with execution — from mission-critical
        infrastructure to products people use every day.
      </p>
      <div className="hero-actions">
        <Link className="workspace-button" href="/portfolio">
          Explore my work <span aria-hidden="true">↗</span>
        </Link>
        <Link className="text-link" href="/resume">
          View resume <span aria-hidden="true">→</span>
        </Link>
      </div>
      <SectionNavigation />
      <div className="hero-socials">
        <a
          href={githubUrl}
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">
            <GitHubIcon size={22} />
          </span>
        </a>
        <a
          href={linkedInUrl}
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">
            <LinkedInIcon size={22} />
          </span>
        </a>
        <a
          href={xUrl}
          aria-label={`${xHandle} on X`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">
            <XIcon size={22} />
          </span>
        </a>
        <a href={emailUrl} className="mono-link">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p className="hero-hiring">
        Want to hire me? Reach out to{' '}
        <a
          href="https://phitechsolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Phi Technology Solutions
        </a>
        .
      </p>
    </div>
  );
}
