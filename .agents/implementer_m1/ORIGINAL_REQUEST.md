# Original User Request

## Initial Request — 2026-08-04T17:15:03+08:00

You are a Worker subagent executing Milestone 1: Convert Articles 1-5 & Relocate Images.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work.

Your tasks in workspace `/Volumes/Stockage/Siteweb-samia2`:

1. Relocate images for articles 1 to 5:
   Create directory `public/articles/article<N>/images/` for each article 1 to 5 (N=1..5) even if source folder is empty.
   Copy images from `/Users/bigmac/Downloads/all_articles/article<N>/images/` to `public/articles/article<N>/images/` for N=1..5. You can use terminal commands like `mkdir -p` and `cp -r` via `run_command`.

2. Convert HTML to JSX and update component files in `src/pages/dermatologie-medicale/`:
   First, inspect the existing component files in `src/pages/dermatologie-medicale/` to understand their export structure, layout wrapper, breadcrumbs, imports, styling, etc.
   - Article 1 (`/Users/bigmac/Downloads/all_articles/article1/index.html`) -> `src/pages/dermatologie-medicale/AcneRosacee.jsx`
   - Article 2 (`/Users/bigmac/Downloads/all_articles/article2/index.html`) -> `src/pages/dermatologie-medicale/EczemaPsoriasisVitiligo.jsx`
   - Article 3 (`/Users/bigmac/Downloads/all_articles/article3/index.html`) -> `src/pages/dermatologie-medicale/ChuteCheveux.jsx`
   - Article 4 (`/Users/bigmac/Downloads/all_articles/article4/index.html`) -> `src/pages/dermatologie-medicale/AllergiesInfections.jsx`
   - Article 5 (`/Users/bigmac/Downloads/all_articles/article5/index.html`) -> `src/pages/dermatologie-medicale/DermatologiePediatrique.jsx`

3. Guidelines for JSX Conversion:
   - Read each source HTML file carefully.
   - Preserve text content accurately from original HTML.
   - Replace `class=` with `className=`.
   - Ensure all void tags are self-closing (`<img ... />`, `<br />`, `<hr />`, `<input ... />`).
   - Translate image src: `<img src="images/XXX"...>` -> `<img src="/articles/article<N>/images/XXX"... />`.
   - Translate style strings into style objects or React-compliant attributes if inline styles exist (e.g. style="display:none" -> style={{display: 'none'}} or className).
   - Maintain breadcrumb navigation, section titles (`h1`, `h2`, `h3`), captions, and layout structure consistent with existing site design.
   - Ensure external links have `rel="noopener noreferrer"`.
   - Ensure components are properly defined and default exported.

4. Run build verification:
   Execute build (`npm run build` or `npx vite build`) via `run_command` in `/Volumes/Stockage/Siteweb-samia2` to verify clean syntax and compilation without JSX or missing asset errors.

5. Write a detailed report at `/Volumes/Stockage/Siteweb-samia2/.agents/implementer_m1/worker_report.md` detailing all files created/modified, image relocation results, build output logs, and any findings/verification. Then send a completion message back to parent.
