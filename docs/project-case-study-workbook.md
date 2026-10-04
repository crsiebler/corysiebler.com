# Project case study interviews

The first website drafts draw from the existing résumé and are expanded through firsthand interviews. Distinguish approximate outcomes recalled by Cory from dated, sourced measurements. Do not add unsupported revenue, search ranking, or performance figures. Work through one project at a time; rough notes are sufficient.

## Triangulator — featured

Captured firsthand: Triangulator’s central technique was pattern-based triangulation to suggest potential transfer-credit equivalencies for university administrators to review. A simplified A ↔ B ↔ C pattern could suggest A ↔ C, with more complex constraints in the actual matching logic. Confidence and scoring were layered onto the project. Manual research could take days, weeks, or months; the proposed evaluation process could return results in seconds. This is a potential outcome, not a supplied production benchmark or evidence of automatic approval.

Cory wrote efficient openCypher pattern-matching queries. Nightly processing traversed hundreds of thousands of course nodes and equivalency edges using a clustered AWS Neptune database. Statewide curriculum data and public-institution transfer relationships helped grow equivalency data across state boundaries, proactively discovering candidates beyond the transcript requests that normally initiate evaluation.

The case study also incorporates résumé-backed technical leadership at OneOrigin, ASU sponsorship, distributed-team leadership, cloud architecture, and a stakeholder demonstration. Featured work now consists of Triangulator, SGSS, and Angel. Grounds Control retains its case-study route and an archive card.

Remaining questions:

1. How were confidence and scores calculated? Which parts did you personally design, and which were owned by others?
2. What constraints could disqualify a candidate despite a matching graph pattern?
3. How were recommendations evaluated with university administrators? Was the seconds-level result demonstrated, benchmarked, or a target?
4. Were there nightly traversal runtimes, dataset counts, or query improvements that can be shared with a date and source?
5. How were statewide curriculum sources reconciled and updated?
6. Which diagrams or screenshots can be shared publicly?

## SGSS

Captured firsthand: legacy mission data was difficult to transform and validate against the new schema. Cory developed Python/openpyxl tooling to convert Excel documents through CSV ingestion into relational entities in Oracle. Schema-value validation and mission-based identifiers supported correctness and traceability. Keeping Excel as the review format let system engineers compare settings with legacy mission data without manually constructing normalized CSV files or aligning foreign keys. Refactoring extraction to use multithreading addressed long conversion waits.

Validation details: the tooling checked whether foreign key references aligned with the mission-name reference used to tie records together. It loaded permitted configurations from a schema key-value table and validated relationships between settings, including radio frequency band and modulation. The interview example allowed QPSK, 8PSK, 16APSK, and 32APSK for Ku, and 8PSK, 16APSK, and 32APSK for Ka. These describe the supplied project example, not universal radio standards; the public page explains the dependency without reproducing an exhaustive configuration matrix.

Error reporting: the Python tool ran from the command line and displayed validation issues in a CLI error report, optionally written to a text file. The report identified each problem by Excel tab, column, and row. Import behavior after validation failures has not yet been described; the public page makes no claim about stopping ingestion or partially importing valid records.

The page now includes this challenge, approach, and qualitative outcome alongside the broader résumé contributions. No timing, throughput, or error-rate figures have been supplied. Describe concurrency without asserting a profiled CPU-bound speedup. The exact Oracle table mechanism remains to be clarified; the public copy currently says CSV ingestion into Oracle.

Remaining questions:

1. What did the Enterprise Infrastructure segment need to do, and who used it?
2. Which databases, pipelines, scripts, or applications did you personally own? What belonged to your team?
3. Did validation failures stop ingestion? How did you check that migrated records matched the legacy data after loading?
4. How did you verify correctness before deployment? What did training and handoff involve?
5. Are there defensible before/after extraction times or data volumes? Were the CSV files read through Oracle external tables or another mechanism?
6. Which diagrams, screenshots, or technical details can be shared publicly?

## Angel Studios

Captured firsthand: Cory architected and implemented the entire website SEO foundation and blog feature. Titles, headings, descriptions, and content were carefully curated around relevant keywords, with articles tailored to common search queries. Contentful supplied the website content. Cory also designed internationalized routing and the content translation strategy for expansion into 13 markets, emphasizing Brazil, France, and Mexico through Portuguese, French, and Spanish. Contentful was integrated with Crowdin for crowdsourced translations by native or fluent contributors.

Publishing workflow: editors entered titles, headings, descriptions, paragraphs, and rich text in Contentful. A custom plugin funneled text into Crowdin. Translators supplied translations, which returned to Contentful in batches once approved. The Next.js application queried Contentful’s GraphQL endpoint with a locale to retrieve locale-specific string values. Ownership of the custom plugin itself has not been specified; the public copy describes its role without claiming Cory authored it. Missing-translation behavior and how source updates affected translations remain unspecified.

Reported outcome: high-ranking organic search results brought tens of thousands of visitors daily. This is a firsthand approximate scale; the timeframe, analytics source, and precise traffic metric have not been supplied. Public copy uses “on the order of tens of thousands of visitors per day” without implying audited measurements or a quantified increase from a baseline. The 13-market interview scope replaces the earlier résumé-derived 32-region wording in the case study and résumé; no equivalence between countries, languages, and locales is asserted.

Remaining questions:

1. Did you build the custom Crowdin plugin, configure an existing integration, or collaborate with another owner? What was your responsibility for the approval and batch-import workflow?
2. How did localized URLs, rendering, updates, and missing translations work?
3. Which SEO or performance issue did you diagnose, and how did you fix it?
4. What was your role in the Optimizely experiments? How were results attributed?
5. Which period and analytics source support the daily organic traffic estimate? Did it measure users, sessions, pageviews, or search clicks? Which other résumé figures have a defensible source and timeframe?
6. What screenshots or examples show the work you actually shipped?

## Grounds Control

Captured firsthand: the previous Squarespace site was simplistic and lacked a cohesive design that reflected the quality of Grounds Control’s services. Cory gathered details about the business owner’s personal tastes and personally designed the replacement website from the ground up. The goal combined efficient delivery with a beautiful layout supporting the “Incredible Passion” advertising campaign.

Design and engineering details: the landing-page carousel highlighted Grounds Control’s project photography. Text remained readable while larger image assets loaded. Cory used custom UI components, native HTML elements, efficient state lifecycle management, CSS transitions, server-side rendering where possible, minified JavaScript, and tree shaking to limit client processing and bundle size. Image resolution optimization and WebP formatting reduced network-transfer demands. Minimizing LCP was a stated goal; no measured LCP, bundle-size, or bandwidth figures have been supplied, and no claim is made that loading images in the background alone improved LCP.

The page now includes these decisions alongside the implementation details: Next.js, TypeScript, Tailwind, Cloudinary, and Vercel. Content-migration ownership, current content-maintenance workflow, measured performance, and campaign results remain unspecified. The public copy makes no quantified performance or business-outcome claim.

CMS correction: Payload CMS was planned for blogging and easily customizable content sections but was not used on the project. It has been removed from the public implementation narrative, technology list, and original portfolio article. The shipped site is not described as content-managed without confirmation of its actual editing workflow.

Remaining questions:

1. How are project photos and site content maintained today?
2. What did discovery, content migration, and handoff involve? Who supplied campaign copy and photography?
3. Why did you choose the media delivery approach? Were there practical constraints around image quality, cost, or asset management?
4. Are there dated performance measurements or examples demonstrating the image and bundle optimizations?
5. What changed after launch: inquiries, editing effort, performance, search visibility, or reliability?
6. Which screenshots can illustrate before and after?

## Final page structure

- Problem and audience
- Role and ownership
- Constraints
- Approach and significant tradeoffs
- Contributions
- Verified outcomes
- Lessons learned

Keep product context separate from personal contributions. Date measurements, state their scope, and distinguish team outcomes from individual work.
