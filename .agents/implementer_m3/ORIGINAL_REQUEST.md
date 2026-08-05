# Original User Request

## 2026-08-04T09:14:45Z

You are an Implementer subagent assigned to Milestone 3: Convert Articles 11-15 & Relocate Images.

Working directory: /Volumes/Stockage/Siteweb-samia2/.agents/implementer_m3

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work.

Your tasks:
1. Relocate images for articles 11 to 15:
   Copy images from `/Users/bigmac/Downloads/all_articles/article<N>/images/` to `public/articles/article<N>/images/` for N=11..15.
   Create directory `public/articles/article<N>/images/` for each article 11 to 15.

2. Convert HTML to JSX and update component files in `src/pages/chirurgie-dermatologique/`:
   - Article 11 (`/Users/bigmac/Downloads/all_articles/article11/index.html`) -> `src/pages/chirurgie-dermatologique/ExereseKystesLipomes.jsx`
   - Article 12 (`/Users/bigmac/Downloads/all_articles/article12/index.html`) -> `src/pages/chirurgie-dermatologique/AblationGrainsBeaute.jsx`
   - Article 13 (`/Users/bigmac/Downloads/all_articles/article13/index.html`) -> `src/pages/chirurgie-dermatologique/BiopsiesCutanees.jsx`
   - Article 14 (`/Users/bigmac/Downloads/all_articles/article14/index.html`) -> `src/pages/chirurgie-dermatologique/ChirurgieOngleIncarne.jsx`
   - Article 15 (`/Users/bigmac/Downloads/all_articles/article15/index.html`) -> `src/pages/chirurgie-dermatologique/PetiteChirurgieDermatologique.jsx`

3. Guidelines for JSX Conversion:
   - Preserve text content accurately from original HTML.
   - Replace `class=` with `className=`.
   - Ensure all void tags are self-closing (`<img ... />`, `<br />`, `<hr />`).
   - Translate image src: `<img src="images/XXX"...>` -> `<img src="/articles/article<N>/images/XXX"... />`.
   - Maintain breadcrumb navigation, section titles (`h1`, `h2`, `h3`), captions, and layout structure consistent with existing site design.
   - Ensure external links have `rel="noopener noreferrer"`.

4. Run build verification: Run build (`npm run build` or `npx vite build`) to verify clean syntax and compilation without JSX or missing asset errors.

5. Write handoff report at `/Volumes/Stockage/Siteweb-samia2/.agents/implementer_m3/handoff.md` and report completion to orchestrator.
