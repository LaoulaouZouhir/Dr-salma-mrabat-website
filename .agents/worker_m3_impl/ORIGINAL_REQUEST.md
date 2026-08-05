# Original User Request

## 2026-08-04T17:19:16Z

You are executing Milestone 3 Implementation: Convert Articles 11-15 & Relocate Images.

Working directory: /Volumes/Stockage/Siteweb-samia2/.agents/worker_m3_impl
Project directory: /Volumes/Stockage/Siteweb-samia2

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work.

Your task instructions:

1. Directory Creation & Image Relocation:
   - Create directories in `/Volumes/Stockage/Siteweb-samia2`:
     * `public/articles/article11/images/`
     * `public/articles/article12/images/`
     * `public/articles/article13/images/`
     * `public/articles/article14/images/`
     * `public/articles/article15/images/`
   - Copy all image files from `/Users/bigmac/Downloads/all_articles/article<N>/images/` to `public/articles/article<N>/images/` for N=11..15.
   - Verify that all 12 image files across these 5 articles exist in their target public folders. List every copied image file name.

2. JSX Conversion & Component Updates:
   - Source HTML files: `/Users/bigmac/Downloads/all_articles/article<N>/index.html` for N=11..15.
   - Target JSX components in `src/pages/chirurgie-dermatologique/`:
     * Article 11 -> `ExereseKystesLipomes.jsx`
     * Article 12 -> `AblationGrainsBeaute.jsx`
     * Article 13 -> `BiopsiesCutanees.jsx`
     * Article 14 -> `ChirurgieOngleIncarne.jsx`
     * Article 15 -> `PetiteChirurgieDermatologique.jsx`
   - Read each source HTML and existing target JSX file.
   - Populate the `<article className="medical-article">` element inside each component with the converted JSX from the respective source HTML.
   - Rules for JSX conversion:
     * Preserve text content accurately from original HTML.
     * Replace `class=` with `className=`.
     * Ensure all void tags are self-closing (`<img ... />`, `<br />`, `<hr />`).
     * Translate image src: `<img src="images/XXX"...>` -> `<img src="/articles/article<N>/images/XXX"... />`.
     * Ensure external links have `rel="noopener noreferrer"`.
     * Maintain section titles (`h1`, `h2`, `h3`), captions (`<figure>`, `<figcaption>`), bullet lists (`<ul className="...">`), and layout structure consistent with existing site design and standard React JSX syntax.
   - Check `src/data/articleImagesConfig.json`. If entries exist for articles 11-15, update image paths to reflect `/articles/article<N>/images/XXX`.

3. Build Verification:
   - Run `npm run build` or `npx vite build` in `/Volumes/Stockage/Siteweb-samia2`.
   - Confirm the build succeeds with 0 errors.

4. Documentation & Reporting:
   - Create execution report file at `/Volumes/Stockage/Siteweb-samia2/.agents/worker_m3/handoff.md`.
   - Also create or update `/Volumes/Stockage/Siteweb-samia2/.agents/worker_m3_impl/handoff.md`.
   - Include:
     * Exact files copied / verified (all 12 images listed by name)
     * List of updated JSX files and brief description of content populated
     * Status of `src/data/articleImagesConfig.json` updates
     * Build command executed and exact build output / success confirmation
   - Send message back to parent with summary, build status, and report file path.
