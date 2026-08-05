# Original User Request

## 2026-08-04T17:14:45Z

You are an Implementer subagent assigned to Milestone 4: Convert Articles 16-20 & Relocate Images.

Working directory: /Volumes/Stockage/Siteweb-samia2/.agents/implementer_m4

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work.

Your tasks:
1. Relocate images for articles 16 to 20:
   Copy images from `/Users/bigmac/Downloads/all_articles/article<N>/images/` to `public/articles/article<N>/images/` for N=16..20.
   Create directory `public/articles/article<N>/images/` for each article 16 to 20.

2. Convert HTML to JSX and update component files in `src/pages/prevention-depistage/`:
   - Article 16 (`/Users/bigmac/Downloads/all_articles/article16/index.html`) -> `src/pages/prevention-depistage/DepistageCancersPeau.jsx`
   - Article 17 (`/Users/bigmac/Downloads/all_articles/article17/index.html`) -> `src/pages/prevention-depistage/ControleGrainsBeaute.jsx`
   - Article 18 (`/Users/bigmac/Downloads/all_articles/article18/index.html`) -> `src/pages/prevention-depistage/PreventionSolaire.jsx`
   - Article 19 (`/Users/bigmac/Downloads/all_articles/article19/index.html`) -> `src/pages/prevention-depistage/LesionsCutaneesSuspectes.jsx`
   - Article 20 (`/Users/bigmac/Downloads/all_articles/article20/index.html`) -> `src/pages/prevention-depistage/ConseilsPreventionDermatologique.jsx`

3. Guidelines for JSX Conversion:
   - Preserve text content accurately from original HTML.
   - Replace `class=` with `className=`.
   - Ensure all void tags are self-closing (`<img ... />`, `<br />`, `<hr />`).
   - Translate image src: `<img src="images/XXX"...>` -> `<img src="/articles/article<N>/images/XXX"... />`.
   - Maintain breadcrumb navigation, section titles (`h1`, `h2`, `h3`), captions, and layout structure consistent with existing site design.
   - Ensure external links have `rel="noopener noreferrer"`.

4. Run build verification: Run build (`npm run build` or `npx vite build`) to verify clean syntax and compilation without JSX or missing asset errors.

5. Write handoff report at `/Volumes/Stockage/Siteweb-samia2/.agents/implementer_m4/handoff.md` and report completion to orchestrator.
