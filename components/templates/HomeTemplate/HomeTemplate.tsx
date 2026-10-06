import Link from 'next/link';
import { HomeHeroSection } from './HomeHeroSection';
import { CircuitIcon } from '@/atoms/icons/CircuitIcon';
import { GitIcon } from '@/atoms/icons/GitIcon';
import { McpIcon } from '@/atoms/icons/McpIcon';
import { emailUrl } from '@/constants/contact';
import { FeaturedWork } from '@/organisms/FeaturedWork/FeaturedWork';

const capabilities = [
  {
    command: 'architecture',
    icon: CircuitIcon,
    title: 'Systems that hold up.',
    description:
      'Full-stack applications, cloud-native platforms, and clear boundaries that make software easier to evolve.',
    technologies: ['TypeScript', 'Next.js', 'Python', 'AWS'],
  },
  {
    command: 'delivery',
    icon: GitIcon,
    title: 'From idea to production.',
    description:
      'Reliable delivery, practical automation, and testing that builds confidence in every release.',
    technologies: ['CI/CD', 'Docker', 'Terraform', 'Playwright'],
  },
  {
    command: 'intelligence',
    icon: McpIcon,
    title: 'Better tools for builders.',
    description:
      'AI-enabled engineering, agent workflows, MCP integrations, and retrieval systems grounded in real problems.',
    technologies: ['MCP', 'LangGraph', 'RAG', 'Developer tooling'],
  },
];

export function HomeTemplate() {
  return (
    <main className="workspace-home" id="main-content" tabIndex={-1}>
      <HomeHeroSection />
      <div className="home-content">
        <section id="about" className="workspace-section about-section">
          <p className="section-kicker">
            <span>01</span> / About
          </p>
          <h2>
            Good software starts
            <br />
            with <em>good judgment.</em>
          </h2>
          <p>
            I’m a software engineer in Phoenix, Arizona, with 14+ years of
            experience turning complex problems into dependable systems.
          </p>
          <p>
            My work spans NASA ground infrastructure, streaming experiences at
            Angel Studios, financial services, and custom platforms for
            businesses. I’m at home connecting the details of implementation to
            the bigger architectural picture.
          </p>
          <p>
            Through{' '}
            <a
              className="inline-link"
              href="https://phitechsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phi Technology Solutions
            </a>
            , I help businesses build thoughtful digital experiences. I also
            explore how AI and developer tooling can make engineering more
            effective.
          </p>
          <div className="about-footnote">
            <span className="status-dot" aria-hidden="true" /> Based in Phoenix
            · Building across industries
          </div>
        </section>
        <section id="work" className="workspace-section">
          <p className="section-kicker">
            <span>02</span> / Selected work
          </p>
          <h2>
            Different domains.
            <br />
            <em>The same care.</em>
          </h2>
          <p className="section-intro">
            A selection of systems and experiences I’ve helped build, modernize,
            and bring to life.
          </p>
          <FeaturedWork />
          <Link className="text-link all-work-link" href="/portfolio">
            View the project archive <span aria-hidden="true">→</span>
          </Link>
        </section>
        <section id="expertise" className="workspace-section">
          <p className="section-kicker">
            <span>03</span> / Expertise
          </p>
          <h2>
            Depth where it matters.
            <br />
            <em>Range where it helps.</em>
          </h2>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <article key={capability.command} className="capability">
                <p className="eyebrow flex items-center gap-2">
                  <span aria-hidden="true">
                    <capability.icon size={18} fill="currentColor" />
                  </span>
                  <span aria-hidden="true">~/</span>
                  {capability.command}
                </p>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul className="technology-list" aria-label={capability.title}>
                  {capability.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link className="text-link" href="/resume">
            Explore my experience <span aria-hidden="true">→</span>
          </Link>
        </section>
        <section id="contact" className="workspace-section contact-section">
          <p className="section-kicker">
            <span>04</span> / Contact
          </p>
          <p className="eyebrow">$ start a conversation</p>
          <h2>
            Have something
            <br />
            <em>worth building?</em>
          </h2>
          <p>
            Let’s talk about your next project, an engineering challenge, or an
            opportunity to work together.
          </p>
          <a className="workspace-button" href={emailUrl}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </section>
      </div>
    </main>
  );
}
