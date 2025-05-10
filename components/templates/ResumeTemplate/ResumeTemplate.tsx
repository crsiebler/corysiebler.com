'use client';

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { Accordion } from '@/atoms/Accordion';
import {
  InfoIcon,
  LinkedInIcon,
  PhoneIcon,
  MailIcon,
  GitHubIcon,
  XIcon,
} from '@/atoms/icons';
import { LinkButton } from '@/atoms/LinkButton';
import { Text } from '@/atoms/Text';

export function ResumeTemplate() {
  return (
    <main className="min-h-screen bg-white px-4 py-8">
      <section className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8 flex flex-col items-center gap-2">
          <Text component="h1" className="text-primary font-bold" variant="h3">
            Cory Siebler
          </Text>
          <Text
            component="h2"
            className="text-tint-darkest font-light"
            variant="h5"
          >
            Senior Software Engineer & Technical Lead
          </Text>
          <div className="flex flex-col items-center gap-2">
            <div className="border-primary h-32 w-32 overflow-hidden rounded-full border-2">
              <CldImage
                src="cory-siebler/avatar"
                alt="Cory Siebler"
                width={128}
                height={128}
                format="webp"
                className="h-full w-full object-cover"
              />
            </div>
            <Text className="text-shade text-center" variant="body2">
              Hi! My name is Cory Siebler. Welcome to my personal website!
            </Text>
            <div className="mt-2 flex gap-4">
              <Link
                href="https://linkedin.com/in/cory-siebler"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="text-primary" size={28} />
              </Link>
              <Link href="tel:14803192922" aria-label="Phone">
                <PhoneIcon className="text-primary" size={28} />
              </Link>
              <Link href="mailto:cory.siebler@pm.me" aria-label="Email">
                <MailIcon className="text-primary" size={28} />
              </Link>
              <Link
                href="https://github.com/crsiebler"
                target="_blank"
                aria-label="GitHub"
              >
                <GitHubIcon className="text-primary" size={28} />
              </Link>
            </div>
          </div>
        </header>

        {/* Download Resume / Portfolio */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <LinkButton
            href="/build/7d2b34ec370b5f354424cfd8d1f7aa15.pdf"
            target="_blank"
            color="primary"
            variant="contained"
          >
            <span className="flex items-center gap-2">
              <Text component="span" variant="body2">
                Download Resume
              </Text>
              <InfoIcon size={20} />
            </span>
          </LinkButton>
          <LinkButton href="/portfolio" color="primary" variant="outlined">
            <Text component="span" variant="body2">
              See Portfolio
            </Text>
          </LinkButton>
        </div>

        {/* Experience */}
        <section className="mb-8">
          <Text
            component="h3"
            className="text-primary mb-4 font-semibold"
            variant="h4"
          >
            Work Experience
          </Text>
          <Accordion title="OneOrigin | Technical Lead (Scottsdale, AZ | Mar 2025 - Present)">
            <div className="mb-2 flex items-center gap-4">
              <CldImage
                src="cory-siebler/one-origin-logo"
                alt="OneOrigin"
                width={60}
                height={60}
                format="webp"
                className="rounded bg-white object-contain p-2"
              />
            </div>
            <ul className="text-shade ml-8 list-disc text-sm">
              <li>
                Lead the development of Triangulator, a platform automating
                credit transfer eligibility evaluations for post-secondary
                institutions (sponsored by ASU).
              </li>
              <li>
                Architected and implemented scalable, cloud-native solutions
                using Python, Flask, SQLAlchemy, AWS Lambda, Step Functions,
                Neptune (graph DB), PostgreSQL, and Vue.js + Tailwind CSS.
              </li>
              <li>
                Designed evaluator-facing and upcoming student self-service
                tools for automated credit assessments and instant transcript
                evaluations.
              </li>
              <li>
                Delivered a working demo to stakeholders and gathered critical
                feedback.
              </li>
              <li>
                Led a distributed team across the US and India, providing
                technical direction, mentorship, and code reviews.
              </li>
              <li>
                Collaborated with stakeholders, managed Jira boards, and ensured
                Agile delivery.
              </li>
              <li>
                Optimized system performance, enhanced security, and enforced
                best practices across CI/CD pipelines and cloud infrastructure.
              </li>
            </ul>
            <Text className="text-shade-dark mt-2 text-xs">
              <span className="font-semibold">Technologies:</span> Python,
              Flask, AWS, Vue.js, Graph Databases, JavaScript, PostgreSQL,
              Tailwind CSS, Jenkins, Jira
            </Text>
          </Accordion>
          <Accordion title="MegaPlanIT | Senior Software Engineer (Scottsdale, AZ | 2023 - 2025)">
            <div className="mb-2 flex items-center gap-4">
              <CldImage
                src="cory-siebler/megaplanit-logo"
                alt="MegaPlanIT"
                width={60}
                height={60}
                format="webp"
                className="rounded bg-white object-contain p-2"
              />
            </div>
            <ul className="text-shade ml-8 list-disc text-sm">
              <li>
                Led the development of a PCI compliance SaaS platform for
                enterprise clients.
              </li>
              <li>
                Architected and implemented scalable solutions using Next.js,
                React, Node.js, and AWS.
              </li>
              <li>
                Integrated third-party APIs and built custom reporting
                dashboards for compliance tracking.
              </li>
              <li>
                Mentored junior developers and established best practices for
                code quality and CI/CD.
              </li>
            </ul>
            <Text className="text-shade-dark mt-2 text-xs">
              <span className="font-semibold">Technologies:</span> Next.js,
              React, Node.js, AWS, PostgreSQL, Docker, GitHub Actions
            </Text>
          </Accordion>
          <Accordion title="Angel Studios | Senior Software Engineer (Contract) (Remote | 2022 - 2023)">
            <div className="mb-2 flex items-center gap-4">
              <CldImage
                src="cory-siebler/angel-studios-logo"
                alt="Angel Studios"
                width={60}
                height={60}
                format="webp"
                className="rounded bg-white object-contain p-2"
              />
            </div>
            <ul className="text-shade ml-8 list-disc text-sm">
              <li>
                Developed and maintained streaming platform features for
                millions of users.
              </li>
              <li>
                Worked closely with product and design teams to deliver
                high-impact user experiences.
              </li>
              <li>
                Optimized video delivery and analytics pipelines for performance
                and reliability.
              </li>
            </ul>
            <Text className="text-shade-dark mt-2 text-xs">
              <span className="font-semibold">Technologies:</span> React,
              Next.js, Node.js, AWS, TypeScript, GraphQL
            </Text>
          </Accordion>
          <Accordion title="American Express | Software Engineer (Phoenix, AZ | 2021 - 2022)">
            <div className="mb-2 flex items-center gap-4">
              <CldImage
                src="cory-siebler/amex-logo"
                alt="American Express"
                width={60}
                height={60}
                format="webp"
                className="rounded bg-white object-contain p-2"
              />
            </div>
            <ul className="text-shade ml-8 list-disc text-sm">
              <li>
                Contributed to the development of internal tools for global
                payment processing.
              </li>
              <li>
                Implemented RESTful APIs and microservices in Java and Node.js.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver secure,
                scalable solutions.
              </li>
            </ul>
            <Text className="text-shade-dark mt-2 text-xs">
              <span className="font-semibold">Technologies:</span> Java,
              Node.js, Spring Boot, React, Docker, Jenkins
            </Text>
          </Accordion>
          <Accordion title="ER2 | Software Engineer (Mesa, AZ | 2020 - 2021)">
            <div className="mb-2 flex items-center gap-4">
              <CldImage
                src="cory-siebler/er2-logo"
                alt="ER2"
                width={60}
                height={60}
                format="webp"
                className="rounded bg-white object-contain p-2"
              />
            </div>
            <ul className="text-shade ml-8 list-disc text-sm">
              <li>
                Built and maintained custom ERP modules for inventory and
                logistics management.
              </li>
              <li>
                Integrated barcode scanning and automated reporting features.
              </li>
              <li>
                Worked with stakeholders to gather requirements and deliver
                tailored solutions.
              </li>
            </ul>
            <Text className="text-shade-dark mt-2 text-xs">
              <span className="font-semibold">Technologies:</span> PHP, Symfony,
              JavaScript, MySQL, Docker
            </Text>
          </Accordion>
          <Accordion title="Nextiva | Software Engineer (Scottsdale, AZ | 2019 - 2020)">
            <div className="mb-2 flex items-center gap-4">
              <CldImage
                src="cory-siebler/nextiva-logo"
                alt="Nextiva"
                width={60}
                height={60}
                format="webp"
                className="rounded bg-white object-contain p-2"
              />
            </div>
            <ul className="text-shade ml-8 list-disc text-sm">
              <li>
                Developed features for a cloud-based VoIP platform serving
                enterprise clients.
              </li>
              <li>
                Improved system reliability and scalability through refactoring
                and performance tuning.
              </li>
              <li>
                Collaborated with QA and DevOps to streamline deployment
                pipelines.
              </li>
            </ul>
            <Text className="text-shade-dark mt-2 text-xs">
              <span className="font-semibold">Technologies:</span> Java, Spring,
              React, AWS, Jenkins, Docker
            </Text>
          </Accordion>
          <Accordion title="General Dynamics | Software Engineer (Scottsdale, AZ | 2018 - 2019)">
            <div className="mb-2 flex items-center gap-4">
              <CldImage
                src="cory-siebler/general-dynamics-logo"
                alt="General Dynamics"
                width={60}
                height={60}
                format="webp"
                className="rounded bg-white object-contain p-2"
              />
            </div>
            <ul className="text-shade ml-8 list-disc text-sm">
              <li>
                Worked on mission-critical defense software for secure
                communications.
              </li>
              <li>
                Implemented and tested embedded systems and real-time
                applications.
              </li>
              <li>
                Collaborated with cross-disciplinary teams to meet strict
                security requirements.
              </li>
            </ul>
            <Text className="text-shade-dark mt-2 text-xs">
              <span className="font-semibold">Technologies:</span> C++, Java,
              Embedded Systems, Linux, Git
            </Text>
          </Accordion>
          <Accordion title="Lockheed Martin | Software Engineer Intern (Orlando, FL | 2017 - 2018)">
            <div className="mb-2 flex items-center gap-4">
              <CldImage
                src="cory-siebler/lockheed-martin-logo"
                alt="Lockheed Martin"
                width={60}
                height={60}
                format="webp"
                className="rounded bg-white object-contain p-2"
              />
            </div>
            <ul className="text-shade ml-8 list-disc text-sm">
              <li>
                Assisted in the development of simulation and training software
                for defense applications.
              </li>
              <li>
                Contributed to code reviews, testing, and documentation efforts.
              </li>
              <li>
                Gained experience in large-scale, high-security software
                environments.
              </li>
            </ul>
            <Text className="text-shade-dark mt-2 text-xs">
              <span className="font-semibold">Technologies:</span> C++, Java,
              Simulation, Git, Jira
            </Text>
          </Accordion>
          <Accordion title="Ghost Armor | Web Developer (Tempe, AZ | 2015 - 2017)">
            <div className="mb-2 flex items-center gap-4">
              <CldImage
                src="cory-siebler/ghost-armor-logo"
                alt="Ghost Armor"
                width={60}
                height={60}
                format="webp"
                className="rounded bg-white object-contain p-2"
              />
            </div>
            <ul className="text-shade ml-8 list-disc text-sm">
              <li>
                Developed and maintained e-commerce website and internal tools.
              </li>
              <li>Implemented new features and optimized site performance.</li>
              <li>Worked with marketing to improve SEO and user experience.</li>
            </ul>
            <Text className="text-shade-dark mt-2 text-xs">
              <span className="font-semibold">Technologies:</span> PHP,
              JavaScript, MySQL, HTML5, CSS3
            </Text>
          </Accordion>
        </section>

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
      </section>
    </main>
  );
}
