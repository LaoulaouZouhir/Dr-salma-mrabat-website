# Orchestrator Execution Plan

## Milestones Overview

### Milestone 0: Exploration & Architecture Analysis
- Objective: Examine existing React project structure (`src/`, router setup, components layout) and source articles in `/Users/bigmac/Downloads/all_articles/` (article1 through article20).
- Outputs: `exploration_report.md` with React component target locations, routing file location, existing router structure, and HTML structure analysis.

### Milestone 1: Batch 1 Article Conversion & Image Relocation (Articles 1-5)
- Objective: Convert HTML articles 1 to 5 into JSX React components in `src/pages/articles/` (or designated directory), move `images` to `public/articles/article<N>/images/`, update image paths.
- Acceptance: 5 components exist, images present, components pass unit review.

### Milestone 2: Batch 2 Article Conversion & Image Relocation (Articles 6-10)
- Objective: Convert HTML articles 6 to 10 into JSX React components, move images to `public/articles/article<N>/images/`, update image paths.
- Acceptance: 5 components exist, images present, components pass unit review.

### Milestone 3: Batch 3 Article Conversion & Image Relocation (Articles 11-15)
- Objective: Convert HTML articles 11 to 15 into JSX React components, move images to `public/articles/article<N>/images/`, update image paths.
- Acceptance: 5 components exist, images present, components pass unit review.

### Milestone 4: Batch 4 Article Conversion & Image Relocation (Articles 16-20)
- Objective: Convert HTML articles 16 to 20 into JSX React components, move images to `public/articles/article<N>/images/`, update image paths.
- Acceptance: 5 components exist, images present, components pass unit review.

### Milestone 5: Routing & Navigation Integration
- Objective: Register routes for all 20 articles in the project's React Router configuration (e.g. `App.jsx` or router file).
- Acceptance: Router file imports and configures 20 article routes (e.g., `/articles/article-1` or `/article1`).

### Milestone 6: Verification & Automated Check
- Objective: Create and run verification script (`scripts/verify_articles.js` or `python` script) to verify:
  1. All 20 component files exist in `src/`.
  2. Routing configuration includes entries for all 20 articles.
  3. `public/articles/` contains all 20 image directories.
  4. Project builds cleanly with no errors.
- Acceptance: Verification script outputs 100% pass, build/test passes cleanly.
