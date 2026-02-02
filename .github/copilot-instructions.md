# RegData AdGroup Site - AI Coding Guidelines

## Architecture Overview
This is a single-page Next.js application (v16) with the app router, built as a marketing site for a regulatory consulting firm. The site consists of vertically stacked section components rendered in `app/page.tsx`. No server-side rendering or API routes are used—it's a static client-side experience.

## Component Structure
- **Section-based layout**: Each component in `components/` represents a full-width page section (e.g., Hero, Services, Contact).
- **Reusable patterns**: Use `Container` for max-width content, `SectionHeader` for consistent titles with optional eyebrow and subtitle.
- **Interactivity**: Mark components with `"use client"` only when needed (e.g., Services uses state for accordion expansion).
- **Example**: Hero section imports content from `lib/content.ts` and uses custom Tailwind classes like `chip` and `btn-accent`.

## Styling Conventions
- **Tailwind CSS v4**: Primary styling framework with custom CSS variables in `app/globals.css` (e.g., `--accent` for blue-600).
- **Custom classes**: Defined in `@layer components` (e.g., `.section` for `py-16 sm:py-20`, `.card` for bordered/shadowed elements).
- **Color scheme**: Slate-based neutrals with blue accents; avoid hardcoded colors—use CSS variables or Tailwind classes.
- **Responsive design**: Mobile-first with `sm:`, `lg:` breakpoints; max-width content via `Container`.

## Content Management
- **Centralized content**: All text, links, and structured data live in `lib/content.ts` as exported objects (e.g., `brand`, `hero`, `services`).
- **Import pattern**: Components import specific objects (e.g., `import { brand, hero } from "@/lib/content"`).
- **Updates**: Modify content in `lib/content.ts` rather than hardcoding in components—keeps copy editable in one place.

## Development Workflow
- **Scripts**: `npm run dev` for development, `npm run build` for production build, `npm run lint` for ESLint checks.
- **Path aliases**: Use `@/` for root imports (configured in `tsconfig.json`).
- **TypeScript strict**: Enabled in `tsconfig.json`—ensure type safety for props and content objects.
- **No tests**: Project lacks test setup; focus on manual verification during development.

## Key Files
- `app/page.tsx`: Main page assembling all sections.
- `lib/content.ts`: Single source of truth for all site content.
- `app/globals.css`: Tailwind imports, CSS variables, and custom component classes.
- `components/Container.tsx`: Reusable wrapper for consistent padding/max-width.
- `components/SectionHeader.tsx`: Standardized section titles.

## Adding New Sections
1. Create component in `components/` following existing patterns (import from `lib/content.ts`).
2. Add to `app/page.tsx` in desired order.
3. Update `lib/content.ts` with new content object.
4. Use `Container` and `SectionHeader` for consistency.</content>
<parameter name="filePath">d:\VSCode\regdataadgroup-site\.github\copilot-instructions.md