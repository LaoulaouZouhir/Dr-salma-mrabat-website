# Scope: Milestone 3 - Convert Articles 11-15 & Relocate Images

## Architecture
Target project directory: `/Volumes/Stockage/Siteweb-samia2`
Source articles directory: `/Users/bigmac/Downloads/all_articles/`
Image destination: `public/articles/article<N>/images/` for N=11..15
JSX Component destination: `src/pages/chirurgie-dermatologique/`

## Milestones / Work Items
| # | Article | Source HTML | Target JSX | Image Path | Status |
|---|---------|-------------|------------|------------|--------|
| 11 | Article 11 | `/Users/bigmac/Downloads/all_articles/article11/index.html` | `src/pages/chirurgie-dermatologique/ExereseKystesLipomes.jsx` | `public/articles/article11/images/` | PLANNED |
| 12 | Article 12 | `/Users/bigmac/Downloads/all_articles/article12/index.html` | `src/pages/chirurgie-dermatologique/AblationGrainsBeaute.jsx` | `public/articles/article12/images/` | PLANNED |
| 13 | Article 13 | `/Users/bigmac/Downloads/all_articles/article13/index.html` | `src/pages/chirurgie-dermatologique/BiopsiesCutanees.jsx` | `public/articles/article13/images/` | PLANNED |
| 14 | Article 14 | `/Users/bigmac/Downloads/all_articles/article14/index.html` | `src/pages/chirurgie-dermatologique/ChirurgieOngleIncarne.jsx` | `public/articles/article14/images/` | PLANNED |
| 15 | Article 15 | `/Users/bigmac/Downloads/all_articles/article15/index.html` | `src/pages/chirurgie-dermatologique/PetiteChirurgieDermatologique.jsx` | `public/articles/article15/images/` | PLANNED |

## Guidelines & Rules
- Copy images from source `article<N>/images/` to `public/articles/article<N>/images/`.
- Preserve text content accurately from original HTML.
- Convert HTML tags to JSX (`class` -> `className`, self-closing tags like `<img ... />`, `<br />`, `<hr />`).
- Update image src paths: `images/XXX` -> `/articles/article<N>/images/XXX`.
- Add `rel="noopener noreferrer"` to external links.
- Preserve component layout structure, React hooks, imports, and styling consistent with existing site design.
- Verify build with `npm run build`.
