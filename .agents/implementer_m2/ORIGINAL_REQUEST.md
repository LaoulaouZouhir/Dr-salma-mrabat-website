# Original User Request

## Initial Request — 2026-08-04T17:14:44Z

You are an Implementer subagent assigned to Milestone 2: Convert Articles 6-10 & Relocate Images.

Working directory: /Volumes/Stockage/Siteweb-samia2/.agents/implementer_m2

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work.

Your tasks:
1. Relocate images for articles 6 to 10:
   Copy images from `/Users/bigmac/Downloads/all_articles/article<N>/images/` to `public/articles/article<N>/images/` for N=6..10.
   Create directory `public/articles/article<N>/images/` for each article 6 to 10.

2. Convert HTML to JSX and update component files in `src/pages/dermatologie-esthetique/`:
   - Article 6 (`/Users/bigmac/Downloads/all_articles/article6/index.html`) -> `src/pages/dermatologie-esthetique/InjectionsBotoxHyaluronique.jsx`
   - Article 7 (`/Users/bigmac/Downloads/all_articles/article7/index.html`) -> `src/pages/dermatologie-esthetique/PeelingsSoinsPeau.jsx`
   - Article 8 (`/Users/bigmac/Downloads/all_articles/article8/index.html`) -> `src/pages/dermatologie-esthetique/MicroneedlingMesotherapie.jsx`
   - Article 9 (`/Users/bigmac/Downloads/all_articles/article9/index.html`) -> `src/pages/dermatologie-esthetique/TraitementCicatricesTaches.jsx`
   - Article 10 (`/Users/bigmac/Downloads/all_articles/article10/index.html`) -> `src/pages/dermatologie-esthetique/RajeunissementCutane.jsx`

3. Guidelines for JSX Conversion:
   - Preserve text content accurately from original HTML.
   - Replace `class=` with `className=`.
   - Ensure all void tags are self-closing (`<img ... />`, `<br />`, `<hr />`).
   - Translate image src: `<img src="images/XXX"...>` -> `<img src="/articles/article<N>/images/XXX"... />`.
   - Maintain breadcrumb navigation, section titles (`h1`, `h2`, `h3`), captions, and layout structure consistent with existing site design.
   - Ensure external links have `rel="noopener noreferrer"`.

4. Run build verification: Run build (`npm run build` or `npx vite build`) to verify clean syntax and compilation without JSX or missing asset errors.

5. Write handoff report at `/Volumes/Stockage/Siteweb-samia2/.agents/implementer_m2/handoff.md` and report completion to orchestrator.
