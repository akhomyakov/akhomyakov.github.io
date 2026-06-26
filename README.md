# Andrey Khomyakov — Product and AI Networking Leadership

This repository contains the source for a static Next.js personal site built for executive product strategy, AI networking platforms, and infrastructure leadership.

## Local development

1. Install dependencies with `yarn install`
2. Run locally with `yarn dev`
3. Update site content in `src/data/data.tsx`

## Deployment

The project is configured for static export and GitHub Pages compatibility.

## Key project files

- `src/data/data.tsx` — homepage copy, about, skills, work history, portfolio, testimonials, and contact
- `src/components/Layout/Page.tsx` — page metadata, canonical URL, and Open Graph values
- `src/components/Sections/` — homepage section components
- `next.config.js` — static export settings and GitHub Pages support

## Notes

- Canonical metadata is set for `https://akhomyakov.github.io`
- The site manifest is branded for this project
- Legacy resume template branding has been removed from page metadata and footer content

## Usage

### Local development

- Install dependencies: `yarn install`
- Run locally: `yarn dev`
- Update homepage copy in `src/data/data.tsx`

### Deployment

This site is configured for static export and GitHub Pages compatibility. Production export is managed by `next.config.js` with `output: 'export'`.

### Notes

- Homepage content is driven by `src/data/data.tsx`
- Metadata and Open Graph values are managed in `src/components/Layout/Page.tsx`
- Static export behavior is configured in `next.config.js`
- The contact section UI is included, but outbound email delivery is not wired by default
- Legacy resume template references have been removed from visible site content

## Project Created & Maintained By

### Andrey Khomyakov

- GitHub: https://github.com/akhomyakov
- LinkedIn: https://www.linkedin.com/in/akhomyakov

## Notes

This repository has been adapted from a resume website template into a personal executive brand site. Legacy template references are retained only in this repository metadata and documentation.

