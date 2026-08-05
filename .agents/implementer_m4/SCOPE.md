# Scope: Milestone 4 - Convert Articles 16-20 & Relocate Images

## Architecture & Inputs
- Source HTML directory: `/Users/bigmac/Downloads/all_articles/article<16..20>/`
- Target JSX components directory: `/Volumes/Stockage/Siteweb-samia2/src/pages/prevention-depistage/`
- Target Images directory: `/Volumes/Stockage/Siteweb-samia2/public/articles/article<16..20>/images/`

## Article Mapping
1. Article 16: `/Users/bigmac/Downloads/all_articles/article16/index.html` -> `src/pages/prevention-depistage/DepistageCancersPeau.jsx`
2. Article 17: `/Users/bigmac/Downloads/all_articles/article17/index.html` -> `src/pages/prevention-depistage/ControleGrainsBeaute.jsx`
3. Article 18: `/Users/bigmac/Downloads/all_articles/article18/index.html` -> `src/pages/prevention-depistage/PreventionSolaire.jsx`
4. Article 19: `/Users/bigmac/Downloads/all_articles/article19/index.html` -> `src/pages/prevention-depistage/LesionsCutaneesSuspectes.jsx`
5. Article 20: `/Users/bigmac/Downloads/all_articles/article20/index.html` -> `src/pages/prevention-depistage/ConseilsPreventionDermatologique.jsx`

## Verification Requirements
- Copy image assets for articles 16 to 20 from download directories to `public/articles/article<N>/images/`.
- Convert HTML structure to valid React JSX:
  - `class` -> `className`
  - Self-closing void tags (`<img />`, `<br />`, `<hr />`, `<input />`)
  - Image paths transformed to `/articles/article<N>/images/<filename>`
  - Preserve text, headings, captions, breadcrumbs, layout.
  - External links must have `rel="noopener noreferrer"`.
- Clean build: `npm run build` succeeds without syntax or asset resolution errors.
- Forensic audit verdict CLEAN.
