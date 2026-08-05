# Milestone 0: Exploration & Architecture Analysis Report

## Executive Summary
This report provides a comprehensive architectural and content analysis for migrating 20 HTML articles from `/Users/bigmac/Downloads/all_articles/` into the React website located at `/Volumes/Stockage/Siteweb-samia2`. 

The target codebase is a modern React 19 application built with Vite and `react-router-dom` v7. The 20 HTML source articles map **1:1** to 20 existing subpage routes and placeholder components distributed across 4 medical domain categories in `src/pages/`. 

---

## 1. Technology Stack & Router Setup

- **Build Tool**: Vite 8.1.1 (`@vitejs/plugin-react` 6.0.4)
- **UI Framework**: React 19.2.8 (`react`, `react-dom`)
- **Routing**: `react-router-dom` 7.18.2 (`BrowserRouter`, `Routes`, `Route`)
- **Animation / Scroll**: GSAP 3.15.0 with `ScrollTrigger`
- **Styling**: Global CSS (`src/index.css`) containing pre-built classes for `.medical-article`, `.subpage-wrapper`, `.symptoms-dual-grid`, `.symptom-card`, etc.

### Router Configuration File
- **Exact File Path**: `/Volumes/Stockage/Siteweb-samia2/src/App.jsx`
- **Routing Architecture**:
  - Top-level `App` component wraps `<BrowserRouter>`.
  - `Layout` component wraps `<ScrollToTop>`, `<Header isSubPage={true/false}>`, `<ScrollAnimator>`, `<Routes>`, and `<Footer>`.
  - All 20 subpage routes are already registered in `src/App.jsx` pointing to components in `src/pages/`.

---

## 2. Recommended Directory Structure & Component Placements

Articles should not be isolated into a separate directory, but rather placed directly into their respective domain folders under `src/pages/` to align with the existing component structure:

### Category 1: Dermatologie Médicale
- **Path**: `src/pages/dermatologie-medicale/`
  - `AcneRosacee.jsx` (Article 1)
  - `EczemaPsoriasisVitiligo.jsx` (Article 2)
  - `ChuteCheveux.jsx` (Article 3)
  - `AllergiesInfections.jsx` (Article 4)
  - `DermatologiePediatrique.jsx` (Article 5)

### Category 2: Dermatologie Esthétique
- **Path**: `src/pages/dermatologie-esthetique/`
  - `InjectionsBotoxHyaluronique.jsx` (Article 6)
  - `PeelingsSoinsPeau.jsx` (Article 7)
  - `MicroneedlingMesotherapie.jsx` (Article 8)
  - `TraitementCicatricesTaches.jsx` (Article 9)
  - `RajeunissementCutane.jsx` (Article 10)

### Category 3: Chirurgie Dermatologique
- **Path**: `src/pages/chirurgie-dermatologique/`
  - `ExereseKystesLipomes.jsx` (Article 11)
  - `AblationGrainsBeaute.jsx` (Article 12)
  - `BiopsiesCutanees.jsx` (Article 13)
  - `ChirurgieOngleIncarne.jsx` (Article 14)
  - `PetiteChirurgieDermatologique.jsx` (Article 15)

### Category 4: Prévention & Dépistage
- **Path**: `src/pages/prevention-depistage/`
  - `DepistageCancersPeau.jsx` (Article 16)
  - `ControleGrainsBeaute.jsx` (Article 17)
  - `PreventionSolaire.jsx` (Article 18)
  - `LesionsCutaneesSuspectes.jsx` (Article 19)
  - `ConseilsPreventionDermatologique.jsx` (Article 20)

### Static Image Handling
- **Source location**: `/Users/bigmac/Downloads/all_articles/article<N>/images/`
- **Target static asset directory**: `public/articles/article<N>/images/`
- **JSX Image Path Reference**: `/articles/article<N>/images/<filename>` (e.g. `/articles/article2/images/img-000.png`)

---

## 3. Article Mapping & Source Inventory

Below is the complete 20-article inventory, mapping each source article to its React route, component, title, and image count:

| Article # | Folder | Category | Route Path | Component File | Article Title (H1) | Disk Images | HTML Img Ref |
|---|---|---|---|---|---|---|---|
| **Article 1** | `article1` | Dermatologie Médicale | `/dermatologie-medicale/acne-rosacee` | `AcneRosacee.jsx` | Acné et rosacée : diagnostic et traitement à Meknès | 0 *(see note)* | 5 |
| **Article 2** | `article2` | Dermatologie Médicale | `/dermatologie-medicale/eczema-psoriasis-vitiligo` | `EczemaPsoriasisVitiligo.jsx` | Eczéma, psoriasis et vitiligo : diagnostic et prise en charge à Meknès | 5 | 5 |
| **Article 3** | `article3` | Dermatologie Médicale | `/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu` | `ChuteCheveux.jsx` | Chute de cheveux et maladies du cuir chevelu : diagnostic et prise en charge à Meknès | 3 | 3 |
| **Article 4** | `article4` | Dermatologie Médicale | `/dermatologie-medicale/allergies-infections-maladies-peau` | `AllergiesInfections.jsx` | Allergies, infections et maladies de la peau : diagnostic et traitement à Meknès | 3 | 3 |
| **Article 5** | `article5` | Dermatologie Médicale | `/dermatologie-medicale/dermatologie-pediatrique` | `DermatologiePediatrique.jsx` | Dermatologie pédiatrique : prise en charge des maladies de la peau chez l'enfant à Meknès | 2 | 2 |
| **Article 6** | `article6` | Dermatologie Esthétique | `/dermatologie-esthetique/injections-botox-acide-hyaluronique` | `InjectionsBotoxHyaluronique.jsx` | Injections de Botox® et d'acide hyaluronique à Meknès | 5 | 5 |
| **Article 7** | `article7` | Dermatologie Esthétique | `/dermatologie-esthetique/peelings-soins-peau` | `PeelingsSoinsPeau.jsx` | Peelings dermatologiques et soins de la peau à Meknès | 4 | 4 |
| **Article 8** | `article8` | Dermatologie Esthétique | `/dermatologie-esthetique/microneedling-mesotherapie` | `MicroneedlingMesotherapie.jsx` | Microneedling et mésothérapie à Meknès | 2 | 2 |
| **Article 9** | `article9` | Dermatologie Esthétique | `/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires` | `TraitementCicatricesTaches.jsx` | Traitement des cicatrices et des taches pigmentaires à Meknès | 3 | 3 |
| **Article 10** | `article10` | Dermatologie Esthétique | `/dermatologie-esthetique/rajeunissement-cutane` | `RajeunissementCutane.jsx` | Rajeunissement cutané à Meknès | 3 | 3 |
| **Article 11** | `article11` | Chirurgie Dermatologique | `/chirurgie-dermatologique/exerese-kystes-lipomes` | `ExereseKystesLipomes.jsx` | Exérèse des kystes et des lipomes à Meknès | 2 | 2 |
| **Article 12** | `article12` | Chirurgie Dermatologique | `/chirurgie-dermatologique/ablation-grains-beaute-lesions-cutanees` | `AblationGrainsBeaute.jsx` | Ablation des grains de beauté et des lésions cutanées à Meknès | 2 | 2 |
| **Article 13** | `article13` | Chirurgie Dermatologique | `/chirurgie-dermatologique/biopsies-cutanees` | `BiopsiesCutanees.jsx` | Biopsies cutanées à Meknès | 3 | 3 |
| **Article 14** | `article14` | Chirurgie Dermatologique | `/chirurgie-dermatologique/chirurgie-ongle-incarne` | `ChirurgieOngleIncarne.jsx` | Chirurgie de l'ongle incarné à Meknès | 3 | 3 |
| **Article 15** | `article15` | Chirurgie Dermatologique | `/chirurgie-dermatologique/petite-chirurgie-dermatologique` | `PetiteChirurgieDermatologique.jsx` | Petite chirurgie dermatologique à Meknès | 2 | 2 |
| **Article 16** | `article16` | Prévention & Dépistage | `/prevention-depistage/depistage-cancers-peau` | `DepistageCancersPeau.jsx` | Dépistage des cancers de la peau à Meknès | 3 | 3 |
| **Article 17** | `article17` | Prévention & Dépistage | `/prevention-depistage/controle-grains-beaute` | `ControleGrainsBeaute.jsx` | Contrôle des grains de beauté à Meknès | 3 | 3 |
| **Article 18** | `article18` | Prévention & Dépistage | `/prevention-depistage/prevention-solaire` | `PreventionSolaire.jsx` | Prévention solaire à Meknès | 3 | 3 |
| **Article 19** | `article19` | Prévention & Dépistage | `/prevention-depistage/lesions-cutanees-suspectes` | `LesionsCutaneesSuspectes.jsx` | Lésions cutanées suspectes : quand consulter un dermatologue ? | 3 | 3 |
| **Article 20** | `article20` | Prévention & Dépistage | `/prevention-depistage/conseils-prevention-dermatologique` | `ConseilsPreventionDermatologique.jsx` | Conseils de prévention dermatologique à Meknès | 3 | 3 |

*Note on Article 1*: Directory `/Users/bigmac/Downloads/all_articles/article1/images` is empty on disk, although `article1/index.html` references `img-000.png` through `img-004.png`. Implementers should handle missing source images gracefully. Across all other 19 articles, 57 image files exist on disk.

---

## 4. HTML to JSX Clean Conversion Guidelines

When converting HTML article content into React JSX components:

1. **HTML Attribute Replacement**:
   - Change `class="..."` to `className="..."`.
   - Ensure all void tags are self-closing: `<img ... />`, `<br />`, `<hr />`, `<input ... />`.
2. **Image Path Translation**:
   - Convert `<img src="images/img-XXX.png" ...>` to `<img src="/articles/article<N>/images/img-XXX.png" ... />`.
3. **Link Security**:
   - Ensure external links (`<a href="..." target="_blank">`) include `rel="noopener noreferrer"`.
4. **Metadata & SEO**:
   - Extract title, meta description, and schema.org JSON-LD from the `<div class="metadata">` block in HTML.
   - Inject these values into the page's `<SEO>` component rather than embedding raw HTML metadata blocks.
5. **Component Integration**:
   - Inject article main body content inside the existing `<article className="medical-article">` element in each page component.
   - Maintain breadcrumb navigation, section titles (`h1`, `h2`, `h3`), and captions (`<p className="caption">`).
6. **CTA Buttons**:
   - Replace standard HTML `cta-button` links with direct WhatsApp/phone call links matching cabinet contact details (`05 35 52 40 67` or `https://wa.me/212689270924`).

---

## 5. Next Steps for Implementation Phase
1. Copy static images from `/Users/bigmac/Downloads/all_articles/article<N>/images/` to `public/articles/article<N>/images/`.
2. Populate the 20 existing subpage components in `src/pages/` with converted JSX content.
3. Verify routing, layout rendering, and image display across all subpages using `npm run build` / `npm run dev`.
