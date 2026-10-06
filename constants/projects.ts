import { experienceTechnologies } from '@/constants/experienceTechnologies';

export interface PortfolioProject {
  slug: string;
  featured: boolean;
  title: string;
  organization: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  context: string;
  caseStudy?: {
    challenge: string;
    approach: readonly string[];
    outcome: string;
  };
  contributions: readonly string[];
  technologies: readonly string[];
  technologyHighlights?: readonly string[];
  publicId: string;
  imageAlt: string;
  externalUrl: string;
}

// Contributions draw from the existing résumé and firsthand project interviews.
export const portfolioProjects = [
  {
    slug: 'triangulator',
    featured: true,
    title: 'Finding transfer pathways in connected data.',
    organization: 'Triangulator / ASU',
    category: 'Graph engineering & technical leadership',
    period: '2025 — 2026',
    role: 'Technical Lead · OneOrigin',
    summary:
      'Pattern-based graph analysis and scored transfer-credit recommendations for an Arizona State University–sponsored platform.',
    context:
      'Credit Mobility Triangulator was developed by OneOrigin and sponsored by Arizona State University. It helped university administrators discover potential course equivalencies for transfer-credit evaluation. I led development of the platform and a distributed engineering team across the US and India.',
    caseStudy: {
      challenge:
        'Researching transfer-credit equivalencies could take administrators days, weeks, or months. New cross-state equivalencies were often investigated only when a student requested a transcript evaluation. The challenge was to discover useful candidates proactively across a large, connected dataset and give administrators a basis for reviewing them.',
      approach: [
        'The central technique was pattern-based triangulation. In a simplified example, existing A ↔ B and B ↔ C relationships could suggest an A ↔ C equivalency for administrator review. The actual patterns involved additional conditions, with confidence and scoring layered onto the recommendations.',
        'I wrote efficient openCypher queries to match graph patterns. A clustered AWS Neptune database supported intensive graph traversal, with nightly processing across hundreds of thousands of course nodes and equivalency edges to discover matching patterns.',
        'The work also incorporated statewide curriculum data, including transferable-credit relationships among public institutions with similar degree programs. Processing those relationships helped expand the equivalency dataset across state boundaries and surface candidates before an individual student requested an evaluation.',
        'As technical lead, I also architected the cloud-native platform, directed the distributed team, and delivered a working demonstration to stakeholders for feedback.',
      ],
      outcome:
        'Nightly pattern discovery expanded the pool of potential equivalencies available for review. With confidence and scoring built on top of the graph analysis, the platform had the potential to bring candidate evaluation from lengthy manual research to seconds-level results, while university administrators reviewed the recommendations.',
    },
    contributions: [
      'Led Triangulator development and provided technical direction, mentorship, and code reviews for a distributed team across the US and India.',
      'Wrote efficient openCypher queries for pattern-based discovery of potential course equivalencies in AWS Neptune.',
      'Worked on nightly graph processing across hundreds of thousands of course nodes and equivalency relationships.',
      'Incorporated statewide curriculum relationships to expand equivalency discovery across state boundaries.',
      'Architected cloud-native services using Python, Flask, SQLAlchemy, AWS Lambda, Step Functions, Neptune, PostgreSQL, and Vue.js.',
      'Delivered a working demonstration and gathered stakeholder feedback.',
    ],
    technologies: experienceTechnologies.oneOrigin,
    technologyHighlights: [
      'AWS Neptune',
      'openCypher',
      'Python',
      'AWS',
      'Vue.js',
    ] satisfies readonly (typeof experienceTechnologies.oneOrigin)[number][],
    publicId: 'cory-siebler/triangulator-credit-mobility',
    imageAlt: 'Credit Mobility Triangulator course equivalency platform',
    externalUrl: 'https://demo.creditmobility.net',
  },
  {
    slug: 'sgss',
    featured: true,
    title: 'Connecting space to Earth.',
    organization: 'NASA / General Dynamics',
    category: 'Mission-critical infrastructure',
    period: '2015 — 2019',
    role: 'Senior Software Engineer II · General Dynamics',
    summary:
      'Turning legacy mission data into validated Oracle records with Python tooling for the Space Network Ground Segment Sustainment program.',
    context:
      'NASA’s Space Network relays data from orbiting platforms, including the International Space Station and Hubble Space Telescope. The ground segment receives, processes, and distributes those signals. My work supported the Enterprise Infrastructure segment of SGSS.',
    caseStudy: {
      challenge:
        'Existing mission data from the legacy system was difficult to transform into the new relational schema and verify for correctness. System engineers needed to compare mission settings against the original data. Manually authoring normalized CSV files meant working across separate files and aligning foreign keys, making that review harder.',
      approach: [
        'I developed Python tooling with openpyxl to transform Excel documents into relational entities in Oracle. Excel remained the human-readable source for review, so system engineers could visualize mission settings and check them against the legacy data before ingestion.',
        'The tooling used mission names and associated data to identify relationships, checking that foreign key references aligned with the mission-name reference tying the records together. This kept the data understandable and traceable while generating the CSV files needed for ingestion into Oracle.',
        'Validation also checked combinations of settings, beyond whether each individual value was allowed. I loaded permitted configurations from a schema key-value table and checked human-entered data against those rules. For example, the permitted modulation depended on the selected radio frequency band; a modulation valid for one band could be invalid for another.',
        'Engineers ran the Python tool from the command line. Validation issues appeared in a CLI error report, with an optional text-file report. Each issue identified the Excel tab, column, and row so engineers could locate the problematic input in the workbook.',
        'The Excel-to-CSV extraction stage took too long. I refactored it to use multithreading, running extraction work concurrently to reduce the conversion wait.',
      ],
      outcome:
        'System engineers could continue reviewing familiar Excel documents while the tooling handled conversion and relational mapping. They no longer needed to construct normalized CSV files and align foreign keys by hand. Automated checks identified misaligned mission references and configuration combinations that were not permitted by the schema, with error reports pointing to the source cells for correction. The threaded extraction addressed the long conversion time, while mission-based identifiers kept the resulting data traceable to its source.',
    },
    contributions: [
      'Designed and developed relational databases using Oracle Exadata, Microsoft SQL Server, and MySQL, applying OLTP third normal form and OLAP star schema principles.',
      'Built Python automation with openpyxl to validate mission data, extract CSV files, and populate relational entities in Oracle.',
      'Validated mission references and configuration combinations against schema rules, reporting errors by Excel tab, column, and row through the CLI and optional text files.',
      'Refactored Excel-to-CSV extraction to use multithreading and retained human-readable mission identifiers for traceability.',
      'Maintained and configured Oracle Data Integrator, GoldenGate, and Oracle Business Intelligence applications.',
      'Worked with NASA engineers at White Sands and Goddard to verify data and deliver pre-deployment training.',
    ],
    technologies: experienceTechnologies.generalDynamics,
    technologyHighlights: [
      'Python',
      'Java',
      'openpyxl',
      'Oracle Exadata',
      'SQL',
      'PL/SQL',
    ] satisfies readonly (typeof experienceTechnologies.generalDynamics)[number][],
    publicId: 'cory-siebler/gdms-nasa-sgss',
    imageAlt: 'NASA Space Network Ground Segment Sustainment program',
    externalUrl:
      'https://gdmissionsystems.com/satellite-ground-systems/space-network-ground-segment-sustainment',
  },
  {
    slug: 'angel',
    featured: true,
    title: 'Helping stories find their audience.',
    organization: 'Angel Studios',
    category: 'Streaming & audience experience',
    period: '2022 — 2024',
    role: 'Senior Software Engineer · Angel Studios',
    summary:
      'Architecting angel.com’s SEO foundation, Contentful blog, and localization strategy for expansion into 13 international markets.',
    context:
      'Angel Studios brings audience-supported films and series to viewers across TV, mobile, and the web. On angel.com, I worked on the experiences that help people discover content and engage with the platform.',
    caseStudy: {
      challenge:
        'The goal was to connect common search queries with relevant articles and help new audiences discover Angel’s content. Expansion into 13 international markets also called for localized routing and a translation strategy, with an emphasis on Brazil, France, and Mexico.',
      approach: [
        'I architected and implemented the website’s SEO foundation and the entire blog feature. Contentful provided the content, while the blog turned that content into articles people could discover through search.',
        'The SEO approach centered on carefully curated page titles, headings, descriptions, and article content aligned with relevant keywords and common search queries. Articles were tailored to answer what people were searching for.',
        'I also designed the internationalized routing and content translation strategy for 13 markets, prioritizing Portuguese, French, and Spanish for Brazil, France, and Mexico. Contentful was integrated with Crowdin so native or fluent contributors could provide crowdsourced translations.',
        'Content editors entered titles, headings, descriptions, paragraphs, and rich text in Contentful. A custom plugin sent the text to Crowdin, where translators supplied localized versions. Once approved, translations were processed in batches back into Contentful.',
        'The Next.js application queried Contentful’s GraphQL endpoint with the requested locale. Contentful returned the locale-specific field values for the website to render, keeping the translated content in the same CMS workflow as the source content.',
      ],
      outcome:
        'High-ranking organic search results brought traffic to the blog on the order of tens of thousands of visitors per day. The routing and translation strategy supported expansion into 13 markets, pairing the content platform with a workflow for native or fluent translators.',
    },
    contributions: [
      'Architected and implemented the website’s SEO foundation and entire Contentful-powered blog feature.',
      'Aligned titles, headings, descriptions, and article content with relevant keywords and common search queries.',
      'Designed i18n routing and a Contentful–Crowdin translation strategy for 13 international markets, emphasizing Portuguese, French, and Spanish.',
      'Connected localized blog rendering to Contentful’s GraphQL endpoint using locale-specific content requests.',
      'Built About and Downloadables pages.',
      'Implemented structured data, Open Graph metadata, and performance improvements to support search discovery and sharing.',
      'Integrated Optimizely experimentation and Segment event tracking to evaluate audience experiences.',
      'Worked on Braze push notifications.',
    ],
    technologies: experienceTechnologies.angelStudios,
    technologyHighlights: [
      'Next.js',
      'React',
      'Contentful',
      'Crowdin',
      'GraphQL',
      'i18n',
    ] satisfies readonly (typeof experienceTechnologies.angelStudios)[number][],
    publicId: 'cory-siebler/angel-studios-application',
    imageAlt: 'Angel Studios streaming website and application',
    externalUrl: 'https://www.angel.com',
  },
  {
    slug: 'grounds-control',
    featured: false,
    title: 'A new foundation for a growing business.',
    organization: 'Grounds Control',
    category: 'Design & full-stack development',
    period: 'Phi Technology Solutions',
    role: 'Owner & Software Engineer · Phi Technology Solutions',
    summary:
      'A ground-up website design for a commercial landscape contractor, supporting its “Incredible Passion” campaign.',
    context:
      'Grounds Control needed to replace its Squarespace website with a modern presence that showcases its commercial landscape work and helps customers connect with the business.',
    caseStudy: {
      challenge:
        'The previous Squarespace website was simple and lacked a cohesive design. Its presentation did not reflect the quality of Grounds Control’s services. The business needed a website that could express that quality and support its “Incredible Passion” advertising campaign.',
      approach: [
        'I gathered details about the business owner’s personal tastes, then personally designed the website from the ground up. Those preferences informed a cohesive visual direction for the business.',
        'The landing page centered on a carousel showcasing Grounds Control’s project photography. It made the quality of the work the visual focus of the “Incredible Passion” campaign, with readable content available while the larger image assets loaded.',
        'I built the site with Next.js, TypeScript, and Tailwind CSS, using Cloudinary for portfolio photography and Vercel for hosting. Structured data and page metadata supported the search foundation.',
        'I built custom UI components with native HTML elements and careful state lifecycle management to limit component-library overhead. CSS transitions handled motion, and server-side rendering delivered HTML wherever possible to reduce processing on client devices. Minification and tree shaking limited the JavaScript shipped to the browser.',
        'Image delivery was a central part of the performance work. I optimized image resolution and converted assets to WebP to reduce transfer sizes and client bandwidth demands. These choices supported the goal of minimizing Largest Contentful Paint while retaining the photography-led design.',
      ],
      outcome:
        'The rebuild replaced the simple Squarespace presentation with a custom website designed around the owner’s tastes and the “Incredible Passion” campaign. A photography-led landing carousel showcased the quality of the business’s work, supported by custom components, server rendering, and optimized image delivery.',
    },
    contributions: [
      'Personally designed the website from the ground up after gathering the business owner’s preferences.',
      'Designed a photography-led landing carousel and cohesive presentation for the “Incredible Passion” advertising campaign.',
      'Built the website with Next.js, TypeScript, and Tailwind CSS.',
      'Optimized portfolio photography with appropriately sized WebP images and Cloudinary delivery to reduce network transfers.',
      'Built custom UI components with native HTML, CSS transitions, efficient state lifecycles, and server rendering, using minification and tree shaking to limit client JavaScript.',
      'Implemented structured data, page metadata, and performance improvements to support search visibility.',
      'Delivered the site using Vercel hosting through Phi Technology Solutions.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudinary'],
    publicId: 'cory-siebler/grounds-control',
    imageAlt: 'Grounds Control commercial landscaping website',
    externalUrl: 'https://groundscontrol.com',
  },
] as const satisfies readonly PortfolioProject[];

export const featuredProjects: readonly PortfolioProject[] =
  portfolioProjects.filter((project) => project.featured);

export function getPortfolioProject(
  slug: string,
): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}
