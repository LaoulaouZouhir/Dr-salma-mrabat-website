# Exploration Report — Milestone 1: Convert Articles 1–5 & Relocate Images

## Executive Summary
This report provides a comprehensive analysis and precise technical blueprint for converting Articles 1 through 5 from raw HTML sources into React JSX components within the `Siteweb-samia2` project, as well as relocating associated media assets.

- **Workspace Path:** `/Volumes/Stockage/Siteweb-samia2`
- **Source HTML Directory:** `/Users/bigmac/Downloads/all_articles/`
- **Target Pages Directory:** `/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/`
- **Target Media Directory:** `/Volumes/Stockage/Siteweb-samia2/public/articles/article<N>/images/`

---

## 1. Image Inventory & Relocation Mapping

Each article's source images must be copied from `/Users/bigmac/Downloads/all_articles/article<N>/images/` to `/Volumes/Stockage/Siteweb-samia2/public/articles/article<N>/images/`.

| Article ID & Name | Source Folder | File Count | Source File Names | Expected Target Location | Image HTML References |
|---|---|---|---|---|---|
| **Article 1**<br>Acné et rosacée | `article1/images/` | 0 *(Empty)* | *None on disk* | `/public/articles/article1/images/` | `img-000.png`<br>`img-001.png`<br>`img-002.png`<br>`img-003.png`<br>`img-004.png` |
| **Article 2**<br>Eczéma, psoriasis, vitiligo | `article2/images/` | 5 | `img-000.png` (1.76MB)<br>`img-001.png` (1.81MB)<br>`img-002.png` (1.73MB)<br>`img-003.png` (1.63MB)<br>`img-004.png` (1.61MB) | `/public/articles/article2/images/` | `/articles/article2/images/img-000.png` to `img-004.png` |
| **Article 3**<br>Chute de cheveux | `article3/images/` | 3 | `img-000.png` (1.76MB)<br>`img-001.png` (1.39MB)<br>`img-002.png` (2.04MB) | `/public/articles/article3/images/` | `/articles/article3/images/img-000.png` to `img-002.png` |
| **Article 4**<br>Allergies & infections | `article4/images/` | 3 | `img-000.png` (1.55MB)<br>`img-001.png` (1.61MB)<br>`img-002.png` (1.52MB) | `/public/articles/article4/images/` | `/articles/article4/images/img-000.png` to `img-002.png` |
| **Article 5**<br>Dermatologie pédiatrique | `article5/images/` | 2 | `img-000.png` (1.82MB)<br>`img-001.png` (2.04MB) | `/public/articles/article5/images/` | `/articles/article5/images/img-000.png` to `img-001.png` |

**Total Files to Copy:** 13 image files across Articles 2, 3, 4, 5.

---

## 2. Target Component Analysis & Layout Architecture

All target JSX components are located in `/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/`:
- `AcneRosacee.jsx`
- `EczemaPsoriasisVitiligo.jsx`
- `ChuteCheveux.jsx`
- `AllergiesInfections.jsx`
- `DermatologiePediatrique.jsx`

### Shared Page Layout Structure
Each file is currently structured with the standard subpage wrapper layout:

```jsx
import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ComponentName() {
  const schemaData = { ... };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="..."
        description="..."
        keywords="..."
        url="..."
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs items={[...]} />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">...</h1>
          <div className="subpage-subtitle">
            <p>...</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                {/* ARTICLE CONTENT TO BE CONVERTED & PLACED HERE */}
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour un bilan et une prise en charge adaptée.</p>
                <a href="tel:0535524067" className="side-btn-call">📞 05 35 52 40 67</a>
                <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="side-btn-wa">💬 WhatsApp direct</a>
                <div className="side-location-mini">
                  📍 Bureaux Reda, Rue Benzerte, Hamria, Meknès
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## 3. General HTML to JSX Conversion Guidance

When converting HTML fragments into the `<article className="medical-article">` block, implement the following strict rules:

1. **Tag Self-Closing:**
   - `<img src="...">` must be converted to `<img src="..." />`.
   - `<br>` to `<br />`.
   - `<hr>` to `<hr />`.
2. **Attribute Name Changes:**
   - `class="..."` to `className="..."`.
3. **External & Action Link Formatting:**
   - Any external link (e.g. `https://wa.me/...`) with `target="_blank"` must include `rel="noopener noreferrer"`.
   - Update telephone hrefs to `tel:0535524067` or `tel:+212535524067`.
4. **Image Source Path Transformation:**
   - Convert relative `images/img-00X.png` references to absolute web paths: `/articles/article<N>/images/img-00X.png`.
5. **Class & Style Standards:**
   - Infographics must maintain `className="infographic"`.
   - Captions must maintain `className="caption"`.
   - Hero images inside articles (if applicable) use `className="hero-image"`.
   - Unordered lists keep standard HTML `<ul>` / `<li>` structure styled via `.medical-article ul` in `index.css`.

---

## 4. Article-by-Article Conversion Blueprints

### Article 1: Acné et rosacée
- **Source HTML:** `/Users/bigmac/Downloads/all_articles/article1/index.html`
- **Target Component:** `/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/AcneRosacee.jsx`
- **Export Name:** `default function AcneRosacee()`
- **Breadcrumbs:**
  ```jsx
  items={[
    { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
    { label: 'Acné et rosacée' },
  ]}
  ```
- **Article Body Content Breakdown:**
  - `<h2>Qu'est-ce que l'acné ?</h2>`
  - `<img src="/articles/article1/images/img-001.png" alt="Illustration médicale 3D d'une coupe de peau montrant le follicule et la formation d'un bouton" className="infographic" />`
  - `<p className="caption">Illustration médicale 3D d'une coupe de peau montrant le follicule pileux, le sébum, le pore bouché, la bactérie responsable de l'inflammation et la formation d'un bouton.</p>`
  - Paragraphs on Acne pathogenesis
  - `<h2>Qu'est-ce que la rosacée ?</h2>`
  - `<img src="/articles/article1/images/img-002.png" alt="Visage d'une femme présentant une rosacée légère à modérée" className="infographic" />`
  - `<p className="caption">Visage d'une femme présentant une rosacée légère à modérée, avec rougeurs au niveau des joues, du nez et du menton.</p>`
  - Paragraphs on Rosacea manifestations
  - `<h2>Quels sont les symptômes de l'acné et de la rosacée ?</h2>`
  - `<h3>Symptômes de l'acné</h3>` + `<ul>` (Points noirs, points blancs, boutons rouges, etc.)
  - `<h3>Symptômes de la rosacée</h3>` + `<ul>` (Rougeurs persistantes, bouffées de chaleur, etc.)
  - `<h2>Quelles sont les causes de l'acné et de la rosacée ?</h2>`
  - `<h3>Les causes de l'acné</h3>` + `<ul>` (Hormones, génétique, sébum, etc.)
  - `<h3>Les facteurs déclenchants de la rosacée</h3>` + `<ul>` (Soleil, chaleur, stress, épices, etc.)
  - `<h2>Quand consulter un dermatologue ?</h2>`
  - `<img src="/articles/article1/images/img-003.png" alt="Jeune femme observant des boutons au miroir" className="infographic" />`
  - `<p className="caption">Photo d'une jeune femme devant un miroir, observant des boutons sur son visage avec une expression d'inquiétude.</p>`
  - Bullet list of consultation reasons
  - `<h2>Comment se déroule la consultation ?</h2>`
  - `<img src="/articles/article1/images/img-004.png" alt="Cabinet du dermatologue" className="infographic" />`
  - `<p className="caption">Image du cabinet.</p>`
  - Paragraphs on medical consultation process
  - `<h2>Les traitements proposés</h2>` + `<ul>` (Traitements locaux, voie orale, peelings, etc.)
  - `<h2>Nos conseils pour prendre soin de votre peau</h2>` + `<ul>`
  - `<h2>Pourquoi consulter rapidement ?</h2>` + `<ul>`
  - `<h2>Pourquoi choisir le Dr Samia Mrabat ?</h2>` + `<p>`
  - `<div className="cta-container">` with WhatsApp appointment link `<a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="cta-button">Je prends mon rendez-vous</a>`

---

### Article 2: Eczéma, psoriasis et vitiligo
- **Source HTML:** `/Users/bigmac/Downloads/all_articles/article2/index.html`
- **Target Component:** `/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/EczemaPsoriasisVitiligo.jsx`
- **Export Name:** `default function EczemaPsoriasisVitiligo()`
- **Breadcrumbs:**
  ```jsx
  items={[
    { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
    { label: 'Eczéma, psoriasis et vitiligo' },
  ]}
  ```
- **Article Body Content Breakdown:**
  - `<img src="/articles/article2/images/img-000.png" alt="Eczéma, psoriasis et vitiligo - Dr Samia Mrabat" className="hero-image" />`
  - `<p className="caption"><em>Le Dr Samia Mrabat, dermatologue à Meknès — prise en charge de l'eczéma, du psoriasis et du vitiligo.</em></p>`
  - `<h2>Qu'est-ce que l'eczéma ?</h2>`
  - `<img src="/articles/article2/images/img-001.png" alt="Eczéma expliqué" className="infographic" />`
  - `<p className="caption"><em>L'eczéma expliqué simplement.</em></p>`
  - Paragraphs explaining eczema
  - `<h2>Qu'est-ce que le psoriasis ?</h2>`
  - `<img src="/articles/article2/images/img-002.png" alt="Psoriasis et apparition des plaques" className="infographic" />`
  - `<p className="caption"><em>Pourquoi les plaques apparaissent-elles ?</em></p>`
  - Paragraphs explaining psoriasis
  - `<h2>Qu'est-ce que le vitiligo ?</h2>`
  - `<img src="/articles/article2/images/img-003.png" alt="Vitiligo et perte de pigmentation" className="infographic" />`
  - `<p className="caption"><em>Comprendre la perte de pigmentation.</em></p>`
  - Paragraphs explaining vitiligo
  - `<h2>Quels sont les symptômes ?</h2>`
  - `<h3>Symptômes de l'eczéma</h3>` + `<ul>`
  - `<h3>Symptômes du psoriasis</h3>` + `<ul>`
  - `<h3>Symptômes du vitiligo</h3>` + `<ul>`
  - `<img src="/articles/article2/images/img-004.png" alt="Signes à surveiller et prévention" className="infographic" />`
  - `<p className="caption"><em>Signes à surveiller et conseils pour protéger votre peau.</em></p>`
  - `<h2>Quand consulter un dermatologue ?</h2>` + `<ul>`
  - `<h2>Comment se déroule la consultation ?</h2>` + `<p>`
  - `<h2>Les traitements proposés</h2>` + `<ul>`
  - `<h2>Conseils pour protéger votre peau</h2>` + `<ul>`
  - `<h2>Pourquoi consulter rapidement ?</h2>` + `<p>`
  - `<h2>Prendre rendez-vous</h2>` + `<p>`
  - `<div className="cta-container">` with phone link `<a href="tel:0535524067" className="cta-button">Je prends mon rendez-vous</a>`

---

### Article 3: Chute de cheveux et maladies du cuir chevelu
- **Source HTML:** `/Users/bigmac/Downloads/all_articles/article3/index.html`
- **Target Component:** `/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/ChuteCheveux.jsx`
- **Export Name:** `default function ChuteCheveux()`
- **Breadcrumbs:**
  ```jsx
  items={[
    { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
    { label: 'Chute de cheveux et maladies du cuir chevelu' },
  ]}
  ```
- **Article Body Content Breakdown:**
  - `<img src="/articles/article3/images/img-000.png" alt="Consultation dermatologique - cuir chevelu" className="hero-image" />`
  - `<p className="caption"><em>Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge la chute de cheveux et les maladies du cuir chevelu.</em></p>`
  - `<h2>Qu'est-ce que la chute de cheveux ?</h2>` + `<p>`
  - `<h3>Le cycle de vie du cheveu</h3>`
  - `<img src="/articles/article3/images/img-001.png" alt="Cycle de vie du cheveu" className="infographic" />`
  - `<p className="caption"><em>Cycle de vie du cheveu : phases et renouvellement naturel.</em></p>`
  - `<h2>Les principales causes de la chute de cheveux</h2>` + `<ul>` (Androgénétique, saisonnière, effluvium télogène, carences, etc.)
  - `<h2>Les maladies du cuir chevelu</h2>` + `<ul>` (Dermatite séborrhéique, psoriasis, folliculites, etc.)
  - `<img src="/articles/article3/images/img-002.png" alt="Principales maladies du cuir chevelu" className="infographic" />`
  - `<p className="caption"><em>Principales maladies du cuir chevelu pouvant entraîner gêne et perte de cheveux.</em></p>`
  - `<h2>Les symptômes qui doivent vous alerter</h2>` + `<ul>`
  - `<h2>Comment se déroule la consultation ?</h2>` + `<p>`
  - `<h2>Les traitements proposés</h2>` + `<ul>`
  - `<h2>Conseils pour préserver la santé de vos cheveux</h2>` + `<ul>`
  - `<h2>Pourquoi consulter rapidement ?</h2>` + `<p>`
  - `<h2>Prendre rendez-vous</h2>` + `<p>`
  - `<div className="cta-container">` with phone link `<a href="tel:0535524067" className="cta-button">Prenez votre rendez-vous</a>`

---

### Article 4: Allergies, infections et maladies de la peau
- **Source HTML:** `/Users/bigmac/Downloads/all_articles/article4/index.html`
- **Target Component:** `/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/AllergiesInfections.jsx`
- **Export Name:** `default function AllergiesInfections()`
- **Breadcrumbs:**
  ```jsx
  items={[
    { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
    { label: 'Allergies, infections et maladies de la peau' },
  ]}
  ```
- **Article Body Content Breakdown:**
  - `<img src="/articles/article4/images/img-000.png" alt="Dermatologie - Dr Samia Mrabat" className="hero-image" />`
  - `<p className="caption"><em>Allergies, infections et maladies de la peau — Dr Samia Mrabat, dermatologue à Meknès.</em></p>`
  - `<h2>Qu'est-ce qu'une allergie cutanée ?</h2>`
  - `<h3>Comment une allergie apparaît-elle ?</h3>` + `<p>`
  - `<h2>Les principales infections de la peau</h2>` + `<ul>` (Bactériennes, virales, fongiques, parasitaires)
  - `<img src="/articles/article4/images/img-001.png" alt="Types d'infections cutanées" className="infographic" />`
  - `<p className="caption"><em>Types d'infections cutanées : bactériennes, virales, fongiques et parasitaires.</em></p>`
  - `<h2>Les maladies dermatologiques fréquentes</h2>` + `<ul>` (Urticaire, rosacée, dermatite séborrhéique, etc.)
  - `<h2>Les symptômes qui doivent vous amener à consulter</h2>`
  - `<h3>Reconnaître les signes d'alerte</h3>` + `<ul>`
  - `<img src="/articles/article4/images/img-002.png" alt="Signes d'alerte dermatologiques" className="infographic" />`
  - `<p className="caption"><em>Signes d'alerte dermatologiques : consultez rapidement si vous notez des rougeurs, démangeaisons ou lésions persistantes.</em></p>`
  - `<h2>Comment se déroule la consultation ?</h2>` + `<p>`
  - `<h2>Les traitements proposés</h2>` + `<ul>`
  - `<h2>Conseils pour protéger votre peau</h2>` + `<ul>`
  - `<h2>Pourquoi consulter rapidement ?</h2>` + `<p>`
  - `<div className="cta-container">` with phone link `<a href="tel:0535524067" className="cta-button">Je prends mon rendez-vous</a>`

---

### Article 5: Dermatologie pédiatrique
- **Source HTML:** `/Users/bigmac/Downloads/all_articles/article5/index.html`
- **Target Component:** `/Volumes/Stockage/Siteweb-samia2/src/pages/dermatologie-medicale/DermatologiePediatrique.jsx`
- **Export Name:** `default function DermatologiePediatrique()`
- **Breadcrumbs:**
  ```jsx
  items={[
    { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
    { label: 'Dermatologie pédiatrique' },
  ]}
  ```
- **Article Body Content Breakdown:**
  - `<img src="/articles/article5/images/img-000.png" alt="Dermatologie pédiatrique - consultation enfant" className="hero-image" />`
  - `<p className="caption">Illustration : consultation dermatologique pédiatrique pour nourrissons, enfants et adolescents.</p>`
  - `<h2>Dermatologie pédiatrique</h2>` + `<p>`
  - `<h3>Quelles maladies de la peau peuvent toucher les enfants ?</h3>` + `<ul>` (Eczéma atopique, molluscum, verrues, impétigo, mycoses, etc.)
  - `<h3>Les symptômes qui doivent amener à consulter</h3>` + `<ul>`
  - `<h3>Comment se déroule la consultation ?</h3>` + `<p>`
  - `<h3>Les traitements proposés</h3>` + `<ul>`
  - `<img src="/articles/article5/images/img-001.png" alt="Conseils de soins cutanés pour enfants" className="infographic" />`
  - `<p className="caption">Conseils pratiques : hydratation, protection solaire et produits adaptés pour la peau des enfants.</p>`
  - `<h3>Conseils pour protéger la peau des enfants</h3>` + `<ul>`
  - `<h3>Pourquoi consulter rapidement ?</h3>` + `<p>`
  - `<h2>Prendre rendez-vous</h2>` + `<p>`
  - `<div className="cta-container">` with phone link `<a href="tel:0535524067" className="cta-button">Je prends mon rendez-vous →</a>`

---

## 5. Verification Checklist for Implementation Team

Before completing Milestone 1 implementation, verify the following:
1. [ ] Target folders `/public/articles/article1/images/` through `/public/articles/article5/images/` exist.
2. [ ] All 13 image files are relocated to their respective public directories.
3. [ ] All 5 JSX components render without JSX parsing syntax errors.
4. [ ] All `<img>` tags are self-closing (`<img ... />`).
5. [ ] All `class` attributes are changed to `className`.
6. [ ] All dynamic route links, phone numbers, and WhatsApp links operate properly with `rel="noopener noreferrer"`.
7. [ ] Headings (`h2`, `h3`), lists (`ul`, `li`), and paragraphs are placed inside `<article className="medical-article">`.
