'use client';

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { LinkedInIcon, GitHubIcon, XIcon } from '@/atoms/icons';
import { Text } from '@/atoms/Text';
import { ResumeContactSection } from './ResumeContactSection';
import { ResumeDescriptionSection } from './ResumeDescriptionSection';
import { ResumeExperienceSection } from './ResumeExperienceSection';
import { ResumeHeroSection } from './ResumeHeroSection';

export function ResumeTemplate() {
  return (
    <main className="my-4 min-h-screen bg-white">
      <ResumeHeroSection />
      <hr className="border-tint-light my-4 border-t" />
      <ResumeContactSection />
      <hr className="border-tint-light my-4 border-t" />
      <ResumeDescriptionSection />
      <hr className="border-tint-light my-4 border-t" />
      <ResumeExperienceSection />

      {/* Skills */}
      <section className="mb-8">
        <Text
          component="h3"
          className="text-primary mb-4 font-semibold"
          variant="h4"
        >
          Skills
        </Text>
        <ul className="text-shade grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
          <li>JavaScript (Next.js, React.js)</li>
          <li>Python (Pyramid, Django, Flask)</li>
          <li>PHP (Symfony)</li>
          <li>Java (J2EE, OSGi, Spring)</li>
          <li>Web: HTML5, CSS3, Sass</li>
          <li>Databases: Oracle, Snowflake, MySQL, PostgreSQL</li>
          <li>Styling: Tailwind, Material-UI</li>
          <li>Cloud: Vercel, AWS, Heroku</li>
          <li>DevOps: Docker, Kubernetes, Jenkins</li>
          <li>IDEs: VS Code, JetBrains, Eclipse</li>
          <li>Agile: Kanban, Scrum</li>
          <li>Tools: Redis, Nginx, RabbitMQ, Jira, Bitbucket, GitHub</li>
          <li>Other: GraphQL, Webpack, Node.js</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-8">
        <Text
          component="h3"
          className="text-primary mb-4 font-semibold"
          variant="h4"
        >
          Education
        </Text>
        <div className="flex items-center gap-4">
          <CldImage
            src="https://res.cloudinary.com/di8xu0omv/image/upload/v1746905495/cory-siebler/arizona-state-university-ira-a-fulton-schools-of-engineering-logo"
            alt="Arizona State University Ira A. Fulton Schools of Engineering"
            width={120}
            height={60}
            format="webp"
            className="rounded bg-white object-contain p-2"
          />
          <div>
            <Text className="font-bold" component="p">
              Bachelor of Computer Science
            </Text>
            <Text className="text-shade-dark" component="p" variant="body2">
              Arizona State University
            </Text>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="mb-8">
        <Text
          component="h3"
          className="text-primary mb-4 font-semibold"
          variant="h4"
        >
          Interests
        </Text>
        <ul className="text-shade flex flex-wrap gap-4 text-sm">
          <li>Softball</li>
          <li>Bowling</li>
          <li>Arduino & Raspberry Pi</li>
          <li>Fitness</li>
          <li>eSports</li>
          <li>Hiking</li>
        </ul>
      </section>

      {/* Footer Links */}
      <footer className="text-shade-dark mt-8 flex flex-col items-center justify-center gap-4 text-xs sm:flex-row">
        <Link
          href="https://github.com/crsiebler"
          target="_blank"
          className="flex items-center gap-1 hover:underline"
        >
          <GitHubIcon className="text-primary" size={18} />
          github.com/crsiebler
        </Link>
        <Link
          href="https://linkedin.com/in/cory-siebler"
          target="_blank"
          className="flex items-center gap-1 hover:underline"
        >
          <LinkedInIcon className="text-primary" size={18} />
          linkedin.com/in/cory-siebler
        </Link>
        <Link
          href="https://twitter.com/CorySiebler"
          target="_blank"
          className="flex items-center gap-1 hover:underline"
        >
          <XIcon className="text-primary" size={18} />
          @CorySiebler
        </Link>
      </footer>
    </main>
  );
}
