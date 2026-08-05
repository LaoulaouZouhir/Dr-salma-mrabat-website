# Original User Request

## Initial Request — 2026-08-04T17:12:35Z

# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

Migrate 20 HTML articles and their associated images from a source directory into an existing React website, ensuring content and image placement are correctly maintained while keeping each article's images separated.

Working directory: /Volumes/Stockage/Siteweb-samia2
Integrity mode: development

## Requirements

### R1. Implement 20 articles as React components
Source: `/Users/bigmac/Downloads/all_articles/` (contains folders `article1` to `article20`, each with an `index.html` and an `images` folder).
Convert the HTML content of each article into a React component (JSX) and integrate these components into the React app's routing system so they can be navigated to.

### R2. Maintain correct image placement and separation
Move the images for each article into the website's `public` directory, ensuring they remain separated by article (e.g., `public/articles/article1/images/`). Ensure the newly created React components correctly reference their respective images from these public paths.

## Acceptance Criteria

### Content Implementation
- [ ] All 20 articles are accessible via routes within the React application.
- [ ] Text content is preserved accurately from the original HTML files in the new React components.

### Image Handling
- [ ] The `public/articles/` directory contains 20 subfolders (one for each article), each containing their respective `images`.
- [ ] All images render correctly in their respective articles without broken links.

### Verification
- [ ] A verification script is written and passes, automatically checking that:
      a) All 20 component files exist in the `src` directory.
      b) The routing configuration (e.g., in `App.jsx` or similar) includes entries for all 20 articles.
      c) The `public/articles/` directory correctly contains all 20 image folders.
