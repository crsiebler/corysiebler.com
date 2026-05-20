# Repository Instructions

## Runtime And Tooling
- Use Bun for this repo; `bun.lock` is the lockfile and there is no npm/pnpm/yarn lockfile.
- Node version is `22.14.0` from `.nvmrc` when a Node runtime is needed.
- The dev server is `bun dev` (`next dev --turbopack`).

## Verification Commands
- Full unit test suite: `bun test` or CI-equivalent `bun vitest run`.
- Focused test file: `bun vitest run path/to/file.test.tsx`; focused test name: `bun vitest run path/to/file.test.tsx -t "test name"`.
- Lint: `bun lint` for the package script; CI currently runs `bun eslint "**/*.{js,jsx,ts,tsx}"`.
- Typecheck has no package script; run `bun tsc --noEmit`.
- Production build: `bun run build`.

## App Structure
- This is a Next.js App Router site. Route entrypoints live in `app/`; pages usually import a matching template from `components/templates/*Template`.
- Shared UI follows atomic-design directories under `components/atoms`, `components/molecules`, `components/organisms`, and `components/templates`.
- Content/data for navigation, metadata, skills, projects, and contact lives in `constants/` rather than an external CMS.
- Shared hooks live in `lib/hooks`; tests use Vitest with `jsdom` and global test APIs.

## Imports And Styling
- Prefer configured aliases from `tsconfig.json`: `@/atoms/*`, `@/molecules/*`, `@/organisms/*`, `@/templates/*`, `@/lib/*`, and fallback `@/*`.
- Import ordering is enforced by ESLint: React first, then external, internal, parent, sibling, index; groups are alphabetized with no blank lines between groups.
- Tailwind is v4 via `@tailwindcss/postcss`; theme tokens are defined in `app/globals.css` inside `@theme inline`, not in a `tailwind.config.*` file.
- Prettier uses `prettier-plugin-tailwindcss`, single quotes, semicolons, 2 spaces, 80 columns, and trailing commas.

## Environment Gotchas
- Runtime metadata and Cloudinary image URLs read `NEXT_PUBLIC_BASE_URL` and `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`.
- Several tests set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` themselves; add similar setup for new tests that render Cloudinary-backed image components.
- The Husky pre-commit hook runs `npm test`, even though normal repo commands use Bun.
