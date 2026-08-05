# Comprehensive Pattern Analysis: Article Components in Dermatologie Esthétique

**Target Directory**: `/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-esthetique/`  
**Analyzed Files**:
- `InjectionsBotoxHyaluronique.jsx`
- `PeelingsSoinsPeau.jsx`
- `MicroneedlingMesotherapie.jsx`
- `TraitementCicatricesTaches.jsx`
- `RajeunissementCutane.jsx`
- `DermatologieEsthetiqueHub.jsx`

---

## 1. Standard Imports & Dependency Ecosystem

### Observed Imports in Article Components
In all 5 article components (`InjectionsBotoxHyaluronique.jsx`, `PeelingsSoinsPeau.jsx`, `MicroneedlingMesotherapie.jsx`, `TraitementCicatricesTaches.jsx`, `RajeunissementCutane.jsx`):
```javascript
import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
```

### Observed Imports in Hub Page
In `DermatologieEsthetiqueHub.jsx`:
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
```

### Absence of Framer Motion & Lucide React
- **Dependencies Analysis**: Inspection of `package.json` reveals:
  ```json
  "dependencies": {
    "gsap": "^3.15.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.2"
  }
  ```
- **Animation System**: `framer-motion` is **not installed**. Page animations are orchestrated via **GSAP** (`ScrollTrigger` plugin) attached to elements with the `.animate-section` CSS class in `App.jsx`:
  ```javascript
  gsap.fromTo(section,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 88%' }
    }
  );
  ```
- **Iconography**: `lucide-react` is **not installed**. Icons are handled using native Unicode emojis (e.g. `📞 05 35 52 40 67`, `💬 WhatsApp direct`, `📍 Bureaux Reda...`) or custom CSS pseudo-elements (`::before` bullet indicators and green checkmarks `✓`).

### Image Component Architecture
Articles utilize a dynamic image system backed by `src/data/articleImagesConfig.json` and rendered through:
- `ArticleImageBlock.jsx` (`src/components/ArticleImageBlock.jsx`)
- Custom hook `useArticleImages(articleId)` (`src/utils/articleImageHelper.js`)
- `LightboxImage` component (`src/components/Lightbox.jsx`)

---

## 2. Page Layout Structure

Every subpage article follows a unified, rigid page layout template:

```
+-------------------------------------------------------------------+
| SEO Component (document title, meta tags, OpenGraph, JSON-LD)    |
+-------------------------------------------------------------------+
| subpage-hero (<section className="subpage-hero">)                 |
|   ├── Breadcrumbs ({ label: 'Category', url }, { label: 'Page' }) |
|   ├── subpage-badge ("DERMATOLOGIE ESTHÉTIQUE" / "gold-badge")   |
|   ├── subpage-title (h1)                                         |
|   └── subpage-subtitle (<p> paragraph intro </p>)                 |
+-------------------------------------------------------------------+
| subpage-content-section (<section className="subpage-content-sec">)|
|   └── container                                                   |
|       └── subpage-grid-layout (2-column CSS Grid: 1fr 340px)      |
|           ├── subpage-main-body (1fr)                             |
|           │   └── medical-article (<article>)                    |
|           │       ├── Headings (h2, h3)                          |
|           │       ├── Content (<p>)                              |
|           │       ├── symptoms-dual-grid / two-column-list       |
|           │       ├── check-list / bullet-list / advice-box      |
|           │       └── ArticleImageBlock                          |
|           └── subpage-sidebar (340px)                             |
|               └── sidebar-booking-card (sticky top: 110px)       |
|                   ├── h3 ("Prendre Rendez-vous")                 |
|                   ├── p (Call to action summary)                 |
|                   ├── side-btn-call (Phone link)                 |
|                   ├── side-btn-wa (WhatsApp link)                |
|                   └── side-location-mini (Address footer)        |
+-------------------------------------------------------------------+
```

### Standard Structural Elements Overview

1. **Breadcrumbs Nav**:
   ```jsx
   <Breadcrumbs
     items={[
       { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
       { label: "Title of the Article" },
     ]}
   />
   ```
2. **Hero Header**:
   ```jsx
   <span className="subpage-badge">DERMATOLOGIE ESTHÉTIQUE</span>
   <h1 className="subpage-title">Injections de Botox® et d'acide hyaluronique à Meknès</h1>
   <div className="subpage-subtitle">
     <p>Introductory paragraph 1...</p>
     <p>Introductory paragraph 2...</p>
   </div>
   ```
3. **Card Grid Layouts**:
   - `symptoms-dual-grid`: 2-column grid (`grid-template-columns: 1fr 1fr; gap: 24px;`) containing `.symptom-card` blocks.
   - `subservices-cards-grid` (Hub pages): 2-column grid (`grid-template-columns: repeat(2, 1fr); gap: 28px;`) containing `.subservice-hub-card` elements with step counters `.hub-card-num` (`01`, `02`, etc.).
4. **Callout Box (`.advice-box`)**:
   - Soft background (`#F4F0EA`), 4px left accent border (`var(--color-beige)`), rounded right corners (`0 16px 16px 0`).
5. **Checklists & Bullet Lists**:
   - `.check-list`: List with green checkmarks (`::before { content: "✓"; color: #10B981; }`).
   - `.bullet-list` / `.symptom-card li`: Bulleted list with teal dots (`::before { content: "•"; color: var(--color-beige); }`).
6. **FAQ Accordion Structure (`src/components/FAQ.jsx`)**:
   - State-driven accordion toggle (`useState(0)`).
   - Card items `.faq-item` with conditional class `.open` and `+` / `−` indicators.
7. **CTA Banner (`.subpage-cta-banner` / `.aesthetic-banner`)**:
   - Dark gradient background (`linear-gradient(135deg, #1C1C1C 0%, #2A2621 100%)`).
   - Action buttons: `.cta-btn-primary` (Teal/Dark) and `.cta-btn-whatsapp` (Green).

---

## 3. Styling Patterns & Tokens

### Palette & CSS Variables (`src/index.css`)
```css
:root {
  --color-black: #111;
  --color-white: #fff;
  --color-cream: #F0F6F7;         /* Soft teal-tinted cream */
  --color-beige: #1B7A8A;         /* Primary brand teal CTA */
  --color-beige-light: #3A9BAC;   /* Hover highlight teal */
  --color-beige-dark: #146070;    /* Dark teal hover/active */
  --color-gold: #E8A820;          /* Logo gold accent */
  --color-gold-dark: #C98C10;     /* Dark gold accent */
  --color-gray-light: #F4F8F9;    /* Light gray section bg */
  --color-gray: #888;
  --color-gray-dark: #555;        /* Body paragraph text color */
  --color-accent: #1B7A8A;

  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Inter', sans-serif;

  --transition-fast: 0.2s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
}
```

### Typography Hierarchy
- **Serif Font (`Playfair Display`)**: Used for all major headings (`h1`, `h2`, `h3`, `.subpage-title`, `.section-title`). Weight: 500/600.
- **Sans-Serif Font (`Inter`)**: Used for body copy (`p`), badges (`.subpage-badge`), breadcrumbs, buttons, and navigation links.

### Container & Grid Layout Rules
- **Global Container**: `.container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }`
- **Subpage Grid**: `.subpage-grid-layout { display: grid; grid-template-columns: 1fr 340px; gap: 56px; align-items: start; }`
- **Sidebar Sticky Rules**: `.sidebar-booking-card { position: sticky; top: 110px; border-radius: 20px; padding: 32px; }`

### Responsive Breakpoints
- **Desktop / Tablet Boundary (`@media (max-width: 1024px)`)**:
  - `subpage-grid-layout` converts to single-column (`grid-template-columns: 1fr`).
  - `sidebar-booking-card` releases sticky positioning (`position: static`).
- **Mobile Boundary (`@media (max-width: 768px)`)**:
  - `subservices-cards-grid`, `symptoms-dual-grid`, `two-column-list` convert to 1-column layout.

---

## 4. Code Structure Conventions & Static Content Handling

1. **Export Format**:
   - Named default functional components: `export default function InjectionsBotoxHyaluronique() { ... }`.
2. **Schema.org Structured Data**:
   - Formatted directly inside the component body as `schemaData` before returning JSX:
   ```javascript
   const schemaData = {
     '@context': 'https://schema.org',
     '@type': 'MedicalWebPage',
     name: "Injections de Botox® et d'acide hyaluronique à Meknès",
     description: "...",
     provider: {
       '@type': 'MedicalClinic',
       name: 'Cabinet du Dr Samia Mrabat',
       address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
     },
   };
   ```
3. **SEO Integration**:
   - Top-level call to `<SEO title="..." description="..." keywords="..." url="..." jsonLd={schemaData} />`.
4. **Prop Types & Static Content**:
   - Components receive no props and render static structured HTML for maximum SEO performance.
   - Dynamic elements (like `ArticleImageBlock`) accept fallback prop defaults (`imageIndex = 0`, `className = "diagram-block"`).

---

## 5-Component Handoff Report

### 1. Observation
- Verified 5 article components in `src/pages/dermatologie-esthetique/`: `InjectionsBotoxHyaluronique.jsx`, `PeelingsSoinsPeau.jsx`, `MicroneedlingMesotherapie.jsx`, `TraitementCicatricesTaches.jsx`, `RajeunissementCutane.jsx`, alongside `DermatologieEsthetiqueHub.jsx`.
- Verified `package.json` line 15-20: dependencies are `gsap`, `react`, `react-dom`, `react-router-dom`. No `framer-motion` or `lucide-react` exist in the project.
- Inspected global styling rules in `src/index.css` (lines 3535-3890): custom CSS layout classes `.subpage-wrapper`, `.subpage-hero`, `.subpage-grid-layout`, `.medical-article`, `.sidebar-booking-card`, `.symptoms-dual-grid`, `.subservices-cards-grid`, `.subpage-cta-banner`.

### 2. Logic Chain
1. Analysis of `package.json` confirms project relies on vanilla CSS with custom CSS variables and GSAP for animations, rather than external UI component libraries like Lucide or Framer Motion.
2. Examination of `src/pages/dermatologie-esthetique/` files proves all sub-articles share the exact same structural shell (SEO + Hero + 2-Column Grid with Main Body & Sticky Booking Sidebar).
3. Inspection of `src/utils/articleImageHelper.js` and `src/data/articleImagesConfig.json` reveals a centralized dynamic image architecture that injects images into `<article className="medical-article">` via `ArticleImageBlock`.

### 3. Caveats
- The user prompt mentioned example names such as `EpilationLaser.jsx`, `LaserPigmentaire.jsx`, `TraitementCicatricesLaser.jsx`, `LaserVasculaire.jsx`, `DetatouageLaser.jsx` as potential laser article files. In the current codebase, the 5 existing aesthetic articles are `InjectionsBotoxHyaluronique.jsx`, `PeelingsSoinsPeau.jsx`, `MicroneedlingMesotherapie.jsx`, `TraitementCicatricesTaches.jsx`, and `RajeunissementCutane.jsx`. The pattern analysis covers these existing files and applies identically to any newly created laser sub-articles.

### 4. Conclusion
The article components in `dermatologie-esthetique` adhere to a clean, highly standardized pattern:
- Dedicated SEO component with inline Schema.org JSON-LD payload.
- Hero header with category breadcrumbs and badging.
- Two-column responsive layout (main medical article + sticky sidebar booking card).
- Clean CSS-driven typography and design tokens (`Playfair Display` + `Inter`, primary teal `#1B7A8A`, gold accents).
- GSAP scroll animations and static emoji iconography.

### 5. Verification Method
- **File Inspection**: Run `cat /Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-esthetique/InjectionsBotoxHyaluronique.jsx` to verify the import structure and layout markup.
- **Dependency Check**: Inspect `/Volumes/Stockage/Siteweb-samia2/package.json` to verify dependencies.
- **CSS Rule Trace**: Inspect `/Volumes/Stockage/Siteweb-samia2/src/index.css` starting at line 3537 to confirm subpage grid and card styling.
