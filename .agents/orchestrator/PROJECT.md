# Project: Articles 6 & 7 Conversion to React JSX

## Architecture
Conversion of static HTML articles into React JSX subpage components for a medical dermatology website built with Vite/React/Tailwind.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Reference & Source Analysis | Read EpilationLaser.jsx, article6/index.html, article7/index.html | none | IN_PROGRESS |
| 2 | Article 6 JSX Conversion | Create InjectionsBotoxHyaluronique.jsx preserving 100% French content and proper JSX/Tailwind structure | M1 | PLANNED |
| 3 | Article 7 JSX Conversion | Create PeelingsSoinsPeau.jsx preserving 100% French content and proper JSX/Tailwind structure | M1 | PLANNED |
| 4 | Verification & Report | Run vite build / linter checks, verify layout & completeness, generate report | M2, M3 | PLANNED |

## Interface Contracts
- Standard page component export: `export default function <ComponentName>()`
- Imports: React, Link (from react-router-dom), SEO, Breadcrumbs, ArticleImageBlock (if applicable).
- Standard page structure: subpage-wrapper -> subpage-hero -> subpage-grid-layout -> subpage-cta-banner.
