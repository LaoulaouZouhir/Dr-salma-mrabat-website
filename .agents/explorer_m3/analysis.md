# Milestone 3 Detailed Conversion Analysis Report

## Executive Summary
This report provides a comprehensive analysis for **Milestone 3: Convert Articles 11-15 & Relocate Images**. 
Milestone 3 covers articles 11 through 15 located in the `Chirurgie Dermatologique` category:
- Article 11: `ExereseKystesLipomes.jsx` (`exerese-kystes-lipomes`)
- Article 12: `AblationGrainsBeaute.jsx` (`ablation-grains-beaute-lesions-cutanees`)
- Article 13: `BiopsiesCutanees.jsx` (`biopsies-cutanees`)
- Article 14: `ChirurgieOngleIncarne.jsx` (`chirurgie-ongle-incarne`)
- Article 15: `PetiteChirurgieDermatologique.jsx` (`petite-chirurgie-dermatologique`)

Currently, all 5 target JSX files exist in `/Volumes/Stockage/Siteweb-samia2/src/pages/chirurgie-dermatologique/` with valid outer layout, SEO Helmet tags, and breadcrumbs, but their inner `<article className="medical-article">` elements are empty placeholders. 

---

## 1. Source Article Inspection (Articles 11-15)

### Article 11: Exérèse des kystes et des lipomes à Meknès
- **HTML Path**: `/Users/bigmac/Downloads/all_articles/article11/index.html`
- **JSX Component Path**: `src/pages/chirurgie-dermatologique/ExereseKystesLipomes.jsx`
- **URL Route**: `/chirurgie-dermatologique/exerese-kystes-lipomes`
- **Category**: Chirurgie Dermatologique
- **SEO Title**: `Exérèse des kystes et lipomes à Meknès | Dr Samia Mrabat`
- **Structure Breakdown**:
  - Kicker: `CHIRURGIE DERMATOLOGIQUE`
  - H1: `Exérèse des kystes et des lipomes à Meknès`
  - Hero Image: `images/img-000.png` | Caption: *Chirurgie dermatologique — Exérèse des kystes et des lipomes.*
  - Intro: benign nature, enlargement, pain, infection risks, dermatological evaluation.
  - Section: `<h2>Qu'est-ce qu'un kyste ou un lipome ?</h2>` + Body Image (`images/img-001.png`) + 3 explanatory paragraphs (kystes vs lipomes).
  - Section: `<h2>Dans quels cas une exérèse peut-elle être proposée ?</h2>` + list of 6 criteria (increase in volume, pain, recurrent infection, functional/clothing friction, aesthetic discomfort, histopathology requirement).
  - Section: `<h2>Comment se déroule l'intervention ?</h2>` + procedure details (local anesthesia, incision, complete excision, sutures).
  - Section: `<h2>Après l'intervention</h2>` + post-op advice (dressings, hygiene, activity restrictions, follow-up).
  - Section: `<h2>Pourquoi consulter un dermatologue ?</h2>` + differential diagnosis explanation.
  - Section: `<h2>Prendre rendez-vous</h2>` + call-to-action details (`tel:0535524067`).

### Article 12: Ablation des grains de beauté et des lésions cutanées à Meknès
- **HTML Path**: `/Users/bigmac/Downloads/all_articles/article12/index.html`
- **JSX Component Path**: `src/pages/chirurgie-dermatologique/AblationGrainsBeaute.jsx`
- **URL Route**: `/chirurgie-dermatologique/ablation-grains-beaute-lesions-cutanees`
- **Category**: Chirurgie Dermatologique
- **SEO Title**: `Ablation des grains de beauté à Meknès | Dr Samia Mrabat`
- **Structure Breakdown**:
  - Kicker: `CHIRURGIE DERMATOLOGIQUE`
  - H1: `Ablation des grains de beauté et des lésions cutanées à Meknès`
  - Hero Image: `images/img-000.png` | Caption: *Dr Samia Mrabat, dermatologue à Meknès — évaluation et ablation des grains de beauté et de certaines lésions cutanées.*
  - Intro: naevus overview, benign nature vs suspicious changes.
  - Section: `<h2>Quand l'ablation d'un grain de beauté peut-elle être indiquée ?</h2>`
    - `<h3>Les signes à surveiller</h3>` + 6 warning signs (size/color change, asymmetry, irregular borders, bleeding/pain, friction, analysis requirement).
  - Section: `<h2>Comment se déroule la consultation ?</h2>` + 4 options (surveillance, photos, dermoscopy, excision).
  - Section: `<h2>Comment se déroule l'intervention ?</h2>` + 2 paragraphs + Body Image (`images/img-001.png`).
  - Section: `<h2>Après l'intervention</h2>` + list of 4 post-op recommendations.
  - Section: `<h2>Pourquoi consulter un dermatologue ?</h2>` + expert diagnosis.
  - Section: `<h2>Prendre rendez-vous</h2>` + CTA block.

### Article 13: Biopsies cutanées à Meknès
- **HTML Path**: `/Users/bigmac/Downloads/all_articles/article13/index.html`
- **JSX Component Path**: `src/pages/chirurgie-dermatologique/BiopsiesCutanees.jsx`
- **URL Route**: `/chirurgie-dermatologique/biopsies-cutanees`
- **Category**: Chirurgie Dermatologique
- **SEO Title**: `Biopsies cutanées à Meknès | Diagnostic dermatologique | Dr Samia Mrabat`
- **Structure Breakdown**:
  - Hero Image: `images/img-000.png` | Caption: *Biopsies cutanées réalisées par le Dr Samia Mrabat à Meknès.*
  - H1: `Biopsies cutanées à Meknès`
  - Intro: definition of skin biopsy, laboratory analysis, diagnostic precision.
  - Section: `<h2>Qu'est-ce qu'une biopsie cutanée ?</h2>` + Body Image 1 (`images/img-001.png`) + 1 explanatory paragraph.
    - `<h3>Dans quels cas une biopsie peut-elle être proposée ?</h3>` + list of 6 indications.
  - Section: `<h2>Comment se déroule une biopsie ?</h2>` + Body Image 2 (`images/img-002.png`) + 1 paragraph on procedure.
    - `<h3>Après la biopsie</h3>` + list of 5 post-biopsy care guidelines + result communication.
  - Section: `<h2>Pourquoi consulter un dermatologue ?</h2>` + diagnostic necessity.
  - Section: `<h2>Prendre rendez-vous</h2>` + CTA block.

### Article 14: Chirurgie de l'ongle incarné à Meknès
- **HTML Path**: `/Users/bigmac/Downloads/all_articles/article14/index.html`
- **JSX Component Path**: `src/pages/chirurgie-dermatologique/ChirurgieOngleIncarne.jsx`
- **URL Route**: `/chirurgie-dermatologique/chirurgie-ongle-incarne`
- **Category**: Chirurgie Dermatologique
- **SEO Title**: `Chirurgie ongle incarné à Meknès | Dr Samia Mrabat`
- **Structure Breakdown**:
  - Kicker: `CHIRURGIE DERMATOLOGIQUE`
  - H1: `Chirurgie de l'ongle incarné à Meknès`
  - Hero Image: `images/img-000.png` | Caption: *Chirurgie de l'ongle incarné — Dr Samia Mrabat, dermatologue à Meknès.*
  - Intro: ingrown nail causes, symptoms, when conservative care fails.
  - Section: `<h2>Qu'est-ce qu'un ongle incarné ?</h2>` + definition.
    - `<h3>Pourquoi un ongle devient-il incarné ?</h3>` + list of 5 symptoms (pain, redness, swelling, discharge, infection).
    - `<h3>Quand une intervention peut-elle être indiquée ?</h3>` + list of 5 indication criteria.
  - Section: `<h2>Comment se déroule l'intervention ?</h2>` + Body Image 1 (`images/img-001.png`) + procedure explanation.
  - Section: `<h2>Après l'intervention</h2>` + Body Image 2 (`images/img-002.png`) + list of 5 post-op care guidelines (dressings, foot hygiene, activity, footwear, follow-up).
  - Section: `<h2>Pourquoi consulter un dermatologue ?</h2>` + differential diagnosis.
  - Section: `<h2>Prendre rendez-vous</h2>` + CTA block.

### Article 15: Petite chirurgie dermatologique à Meknès
- **HTML Path**: `/Users/bigmac/Downloads/all_articles/article15/index.html`
- **JSX Component Path**: `src/pages/chirurgie-dermatologique/PetiteChirurgieDermatologique.jsx`
- **URL Route**: `/chirurgie-dermatologique/petite-chirurgie-dermatologique`
- **Category**: Chirurgie Dermatologique
- **SEO Title**: `Petite chirurgie dermatologique à Meknès | Dr Samia Mrabat`
- **Structure Breakdown**:
  - Kicker: `CHIRURGIE DERMATOLOGIQUE`
  - H1: `Petite chirurgie dermatologique à Meknès`
  - Hero Image: `images/img-000.png` | Caption: *Le Dr Samia Mrabat réalise des actes de petite chirurgie dermatologique sous anesthésie locale à Meknès...*
  - Intro: definition of minor skin surgery in office under local anesthesia.
  - Section: `<h2>Qu'est-ce que la petite chirurgie dermatologique ?</h2>` + definition.
  - Section: `<h2>Quels actes peuvent être réalisés ?</h2>` + list of 6 procedures (kystes, lipomes, naevus, biopsies, ongle incarné, lésions bénignes) + Body Image (`images/img-001.png`).
  - Section: `<h2>Comment se déroule une intervention ?</h2>` + `<h3>Les principales étapes de votre prise en charge</h3>` + procedure explanation.
  - Section: `<h2>Après l'intervention</h2>` + list of 5 post-op recommendations.
  - Section: `<h2>Pourquoi consulter un dermatologue ?</h2>` + expert clinical evaluation.
  - Section: `<h2>Prendre rendez-vous</h2>` + CTA block.

---

## 2. Image Asset Inventory & Relocation Specification

### Image Inventory
Total images to relocate for Milestone 3: **12 PNG images**.

| Article | Source Directory | Source Filename | Target Directory | Target Filename |
|---|---|---|---|---|
| **Article 11** | `/Users/bigmac/Downloads/all_articles/article11/images/` | `img-000.png` | `public/articles/article11/images/` | `img-000.png` |
| **Article 11** | `/Users/bigmac/Downloads/all_articles/article11/images/` | `img-001.png` | `public/articles/article11/images/` | `img-001.png` |
| **Article 12** | `/Users/bigmac/Downloads/all_articles/article12/images/` | `img-000.png` | `public/articles/article12/images/` | `img-000.png` |
| **Article 12** | `/Users/bigmac/Downloads/all_articles/article12/images/` | `img-001.png` | `public/articles/article12/images/` | `img-001.png` |
| **Article 13** | `/Users/bigmac/Downloads/all_articles/article13/images/` | `img-000.png` | `public/articles/article13/images/` | `img-000.png` |
| **Article 13** | `/Users/bigmac/Downloads/all_articles/article13/images/` | `img-001.png` | `public/articles/article13/images/` | `img-001.png` |
| **Article 13** | `/Users/bigmac/Downloads/all_articles/article13/images/` | `img-002.png` | `public/articles/article13/images/` | `img-002.png` |
| **Article 14** | `/Users/bigmac/Downloads/all_articles/article14/images/` | `img-000.png` | `public/articles/article14/images/` | `img-000.png` |
| **Article 14** | `/Users/bigmac/Downloads/all_articles/article14/images/` | `img-001.png` | `public/articles/article14/images/` | `img-001.png` |
| **Article 14** | `/Users/bigmac/Downloads/all_articles/article14/images/` | `img-002.png` | `public/articles/article14/images/` | `img-002.png` |
| **Article 15** | `/Users/bigmac/Downloads/all_articles/article15/images/` | `img-000.png` | `public/articles/article15/images/` | `img-000.png` |
| **Article 15** | `/Users/bigmac/Downloads/all_articles/article15/images/` | `img-001.png` | `public/articles/article15/images/` | `img-001.png` |

### Target Path Status
Currently, `/Volumes/Stockage/Siteweb-samia2/public/articles/` does not exist.
The Implementer will create target directories:
- `public/articles/article11/images/`
- `public/articles/article12/images/`
- `public/articles/article13/images/`
- `public/articles/article14/images/`
- `public/articles/article15/images/`

---

## 3. Existing JSX Structure & Component Conventions

All 5 target JSX components follow the standardized subpage template:
1. **Imports**: `React`, `SEO` (`components/SEO`), `Breadcrumbs` (`components/Breadcrumbs`).
2. **SEO Metadata & JSON-LD**: Structured `MedicalWebPage` schema with provider clinic info.
3. **Hero Section**: `<section className="subpage-hero">` with badge `CHIRURGIE DERMATOLOGIQUE`, H1 title, and introductory subtitle text.
4. **Layout Grid**: `<section className="subpage-content-section">` with two-column layout:
   - Left / Main Body: `<div className="subpage-main-body"><article className="medical-article">` (to be populated).
   - Right Sidebar: `<aside className="subpage-sidebar">` with `<div className="sidebar-booking-card">` containing direct phone and WhatsApp CTA buttons.

### JSX Conversion Rules for `<article className="medical-article">`:
- Replace raw HTML tags with JSX (e.g. `class` -> `className`, self-closing `<img>` with `alt` attributes).
- Wrap images in `<figure className="diagram-block">` with `<figcaption className="caption">` (or `<p className="caption">`).
- Use public image URLs: `/articles/article<N>/images/<filename>`.
- Use styled list containers (`<ul className="bullet-list">`, `<ul className="check-list">`).
- Retain semantic medical headings (`<h2>`, `<h3>`).
- Preserve CTA phone & appointment links.

---

## 4. Implementation Guidelines for Implementer Agent

1. **Directory Creation & Image Copying**:
   - Run commands to `mkdir -p public/articles/article11/images` ... `public/articles/article15/images`.
   - Copy images from `/Users/bigmac/Downloads/all_articles/article<N>/images/*` to `public/articles/article<N>/images/`.
2. **JSX File Population**:
   - Update `src/pages/chirurgie-dermatologique/ExereseKystesLipomes.jsx`
   - Update `src/pages/chirurgie-dermatologique/AblationGrainsBeaute.jsx`
   - Update `src/pages/chirurgie-dermatologique/BiopsiesCutanees.jsx`
   - Update `src/pages/chirurgie-dermatologique/ChirurgieOngleIncarne.jsx`
   - Update `src/pages/chirurgie-dermatologique/PetiteChirurgieDermatologique.jsx`
3. **Configuration Verification**:
   - Verify `src/data/articleImagesConfig.json` entries for `exerese-kystes-lipomes`, `ablation-grains-beaute-lesions-cutanees`, `biopsies-cutanees`, `chirurgie-ongle-incarne`, and `petite-chirurgie-dermatologique`. If necessary, update image source paths to match relocated public paths `/articles/article<N>/images/<filename>`.
4. **Verification Step**:
   - Verify files exist and component syntax is clean.
   - Run project build or check for build errors.
