# Detailed Analysis & Findings Report — Milestone 4 (Articles 16 to 20)

**Working Directory:** `/Volumes/Stockage/Siteweb-samia2/.agents/explorer_m4`  
**Date:** 2026-08-04  
**Category:** Prévention et Dépistage (`src/pages/prevention-depistage/`)

---

## 1. Executive Summary

Milestone 4 covers the conversion of 5 HTML articles (Articles 16 through 20) into React subpages under the `/prevention-depistage/` route. 

All 5 target JSX components exist in `src/pages/prevention-depistage/` with complete page headers, SEO metadata, breadcrumbs, and sidebar layouts. Their `<article className="medical-article">` containers are currently empty skeletons ready for content insertion.

---

## 2. Article Inventory & Content Mapping

### Article 16: Dépistage des cancers de la peau à Meknès
- **Source HTML Path:** `/Users/bigmac/Downloads/all_articles/article16/index.html`
- **Target File:** `src/pages/prevention-depistage/DepistageCancersPeau.jsx`
- **Route:** `/prevention-depistage/depistage-cancers-peau`
- **Config Article ID:** `depistage-cancers-peau`
- **Kicker:** `PRÉVENTION ET DÉPISTAGE`
- **SEO Title:** `Dépistage des cancers de la peau à Meknès | Dr Samia Mrabat`
- **Meta Description:** `Le Dr Samia Mrabat, dermatologue à Meknès, réalise le dépistage des cancers de la peau grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué.`
- **Images:**
  - `imageIndex 0` (Hero): `Examen clinique et dermoscopie pour dépistage des cancers de la peau` — Caption: *Dépistage des cancers de la peau — examen clinique et dermoscopie par le Dr Samia Mrabat.*
  - `imageIndex 1` (Infographic 1): `Signes cliniques nécessitant une consultation dermatologique` — Caption: *Signes cliniques qui doivent amener à consulter un dermatologue.*
  - `imageIndex 2` (Infographic 2): `Règle ABCDE pour l'évaluation des lésions pigmentées` — Caption: *Règle ABCDE : repères pour identifier les lésions suspectes.*
- **Sections & Headings:**
  1. Hero Subtitle: Intro text (Le dépistage des cancers de la peau permet...)
  2. `<h2>Pourquoi réaliser un dépistage ?</h2>` + `<h3>Qui est le plus concerné ?</h3>` + `<ul>` (6 bullet points)
  3. `<h2>Comment se déroule le dépistage ?</h2>` (3 paragraphs)
  4. `<h2>Quels signes doivent vous amener à consulter ?</h2>` + `<ul>` (6 bullet points) + `ArticleImageBlock index 1`
  5. `<h2>La règle ABCDE</h2>` + `<ul>` (5 bullet points: A, B, C, D, E) + `ArticleImageBlock index 2`
  6. `<h2>Pourquoi consulter un dermatologue ?</h2>` (1 paragraph)

---

### Article 17: Contrôle des grains de beauté à Meknès
- **Source HTML Path:** `/Users/bigmac/Downloads/all_articles/article17/index.html`
- **Target File:** `src/pages/prevention-depistage/ControleGrainsBeaute.jsx`
- **Route:** `/prevention-depistage/controle-grains-beaute`
- **Config Article ID:** `controle-grains-beaute`
- **Kicker:** `PRÉVENTION ET DÉPISTAGE`
- **SEO Title:** `Contrôle des grains de beauté à Meknès | Dr Samia Mrabat`
- **Meta Description:** `Le Dr Samia Mrabat, dermatologue à Meknès, réalise le contrôle des grains de beauté grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué.`
- **Images:**
  - `imageIndex 0` (Hero): `Contrôle des grains de beauté - Dr Samia Mrabat` — Caption: *Contrôle des grains de beauté réalisé par le Dr Samia Mrabat, dermatologue à Meknès.*
  - `imageIndex 1` (Infographic 1): `Examen clinique et dermoscopie pour le contrôle des grains de beauté` — Caption: *Examen clinique et dermoscopie : outils utilisés pour analyser les lésions cutanées.*
  - `imageIndex 2` (Infographic 2): `Signes d'alerte pour les grains de beauté` — Caption: *Signes d'alerte à surveiller : modification de taille, forme, couleur, bords irréguliers, saignement, démangeaison ou douleur, évolution rapide.*
- **Sections & Headings:**
  1. Hero Subtitle: Intro text (Les grains de beauté (naevus) sont très fréquents...)
  2. `<h2>Pourquoi faire contrôler ses grains de beauté ?</h2>` + `<ul>` (4 bullet points)
  3. `<h2>Qui devrait réaliser un contrôle dermatologique ?</h2>` + `<h3>Les personnes les plus concernées</h3>` + `<ul>` (6 bullet points)
  4. `<h2>Comment se déroule le contrôle ?</h2>` + `ArticleImageBlock index 1` + `<ul>` (4 options)
  5. `<h2>Les signes qui doivent vous alerter</h2>` + `<h3>Quand consulter ?</h3>` + `ArticleImageBlock index 2` + `<ul>` (7 bullet points)
  6. `<h2>Pourquoi consulter un dermatologue ?</h2>` (1 paragraph)
  7. `<h2>Prendre rendez-vous</h2>` (1 paragraph)

---

### Article 18: Prévention solaire à Meknès
- **Source HTML Path:** `/Users/bigmac/Downloads/all_articles/article18/index.html`
- **Target File:** `src/pages/prevention-depistage/PreventionSolaire.jsx`
- **Route:** `/prevention-depistage/prevention-solaire`
- **Config Article ID:** `prevention-solaire`
- **Kicker:** `PRÉVENTION ET PROTECTION SOLAIRE`
- **SEO Title:** `Prévention solaire et conseils à Meknès | Dr Samia Mrabat`
- **Meta Description:** `Le Dr Samia Mrabat, dermatologue à Meknès, vous conseille sur les bonnes pratiques de protection solaire afin de préserver votre peau et de limiter les effets des rayons UV.`
- **Images:**
  - `imageIndex 0` (Hero): `Protection solaire - Dr Samia Mrabat` — Caption: *Conseils de protection solaire pour préserver la peau et limiter les effets des rayons UV.*
  - `imageIndex 1` (Infographic 1): `Infographie : Effets des rayons UV` — Caption: *Infographie : principaux effets des rayons UV sur la peau.*
  - `imageIndex 2` (Infographic 2): `Infographie : Idées reçues sur la protection solaire` — Caption: *Infographie : idées reçues courantes sur la protection solaire.*
- **Sections & Headings:**
  1. Hero Subtitle: Intro text (L'exposition au soleil est indispensable...)
  2. `<h2>Pourquoi protéger sa peau du soleil ?</h2>` + `<ul>` (5 bullet points) + `ArticleImageBlock index 1`
  3. `<h2>Quels sont les effets des rayons UV sur la peau ?</h2>` + `<h3>Comprendre l'impact des rayons UV</h3>` + `<ul>` (6 bullet points)
  4. `<h2>Les bons réflexes à adopter</h2>` + `<h3>Les gestes essentiels au quotidien</h3>` + `<ul>` (5 bullet points) + `ArticleImageBlock index 2`
  5. `<h2>Les idées reçues sur la protection solaire</h2>` + `<ul>` (4 bullet points)
  6. `<h2>Pourquoi consulter un dermatologue ?</h2>` (1 paragraph)
  7. `<h2>Prendre rendez-vous</h2>` (1 paragraph)

---

### Article 19: Lésions cutanées suspectes : quand consulter un dermatologue ?
- **Source HTML Path:** `/Users/bigmac/Downloads/all_articles/article19/index.html`
- **Target File:** `src/pages/prevention-depistage/LesionsCutaneesSuspectes.jsx`
- **Route:** `/prevention-depistage/lesions-cutanees-suspectes`
- **Config Article ID:** `lesions-cutanees-suspectes`
- **Kicker:** `PRÉVENTION ET DÉPISTAGE`
- **SEO Title:** `Lésions cutanées suspectes à Meknès | Quand consulter ? | Dr Samia Mrabat`
- **Meta Description:** `Le Dr Samia Mrabat, dermatologue à Meknès, évalue les lésions cutanées suspectes afin d'établir un diagnostic précis et de proposer une prise en charge adaptée lorsque cela est nécessaire.`
- **Images:**
  - `imageIndex 0` (Hero): `Consultation dermatologique pour lésions cutanées` — Caption: *Consultation dermatologique pour évaluer une lésion cutanée suspecte.*
  - `imageIndex 1` (Infographic 1): `Signes d'alerte des lésions cutanées` — Caption: *Principaux signes d'alerte à surveiller sur une lésion cutanée.*
  - `imageIndex 2` (Infographic 2): `Dermoscopy et options de prise en charge` — Caption: *Dermoscopy et options possibles selon l'examen clinique.*
- **Sections & Headings:**
  1. Hero Subtitle: Intro text (Certaines lésions de la peau peuvent évoluer...)
  2. `<h2>Quels signes doivent attirer votre attention ?</h2>` + `ArticleImageBlock index 1` + `<ul>` (7 bullet points)
  3. `<h2>Comment se déroule l'évaluation ?</h2>` + `<h3>Les étapes de votre prise en charge</h3>` + `ArticleImageBlock index 2` + `<ul>` (4 options)
  4. `<h3>Toutes les lésions sont-elles inquiétantes ?</h3>` (1 paragraph)
  5. `<h3>Pourquoi consulter rapidement ?</h3>` + `<ul>` (4 bullet points)
  6. `<h2>Pourquoi consulter le Dr Samia Mrabat ?</h2>` (1 paragraph)

---

### Article 20: Conseils de prévention dermatologique à Meknès
- **Source HTML Path:** `/Users/bigmac/Downloads/all_articles/article20/index.html`
- **Target File:** `src/pages/prevention-depistage/ConseilsPreventionDermatologique.jsx`
- **Route:** `/prevention-depistage/conseils-prevention-dermatologique`
- **Config Article ID:** `conseils-prevention-dermatologique`
- **Kicker:** `PRÉVENTION AU QUOTIDIEN`
- **SEO Title:** `Conseils de prévention dermatologique à Meknès | Dr Samia Mrabat`
- **Meta Description:** `Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne avec des conseils de prévention pour préserver la santé de votre peau et détecter précocement certaines maladies cutanées.`
- **Images:**
  - `imageIndex 0` (Hero): `Prévention dermatologique — peau en bonne santé` — Caption: *Les bons réflexes pour une peau en bonne santé.*
  - `imageIndex 1` (Infographic 1): `Gestes essentiels pour la peau` — Caption: *Adopter quelques habitudes simples contribue à préserver durablement la santé de la peau.*
  - `imageIndex 2` (Infographic 2): `Surveillance de la peau` — Caption: *Observer sa peau permet de repérer plus facilement certaines modifications.*
- **Sections & Headings:**
  1. Hero Subtitle: Intro text (Préserver la santé de sa peau repose sur des gestes simples...)
  2. `<h2>Les gestes essentiels pour prendre soin de sa peau</h2>` + `ArticleImageBlock index 1` + `<ul>` (5 bullet points)
  3. `<h2>Pourquoi surveiller régulièrement sa peau ?</h2>` + `ArticleImageBlock index 2` + `<ul>` (5 bullet points)
  4. `<h2>Les bonnes habitudes au quotidien</h2>` + `<ul>` (5 bullet points)
  5. `<h2>Quand consulter un dermatologue ?</h2>` + `<ul>` (4 bullet points)
  6. `<h2>Pourquoi consulter le Dr Samia Mrabat ?</h2>` (1 paragraph)

---

## 3. Structural & Styling Conventions

1. **Imports:**
   ```jsx
   import React from 'react';
   import SEO from '../../components/SEO';
   import Breadcrumbs from '../../components/Breadcrumbs';
   import ArticleImageBlock from '../../components/ArticleImageBlock';
   ```

2. **Article Layout Structure:**
   Every subpage follows this exact DOM hierarchy:
   ```jsx
   <div className="subpage-wrapper">
     <SEO ... />
     <section className="subpage-hero">
       <div className="container">
         <Breadcrumbs items={[...]} />
         <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
         <h1 className="subpage-title">...</h1>
         <div className="subpage-subtitle">...</div>
       </div>
     </section>
     <section className="subpage-content-section">
       <div className="container">
         <div className="subpage-grid-layout">
           <div className="subpage-main-body">
             <article className="medical-article">
               <ArticleImageBlock articleId="..." imageIndex={0} className="article-hero-image-block" />
               {/* Body elements: h2, h3, p, ul, ArticleImageBlock */}
             </article>
           </div>
           <aside className="subpage-sidebar">
             {/* Sidebar booking card */}
           </aside>
         </div>
       </div>
     </section>
   </div>
   ```

3. **Image Handling via `ArticleImageBlock`:**
   - Hero image is placed inside `<article className="medical-article">` at the top with `imageIndex={0}` and `className="article-hero-image-block"`.
   - Subsequent infographics use `ArticleImageBlock` with `imageIndex={1}` and `imageIndex={2}`.
   - Dynamic configuration is powered by `src/data/articleImagesConfig.json` which already has entries for `depistage-cancers-peau`, `controle-grains-beaute`, `prevention-solaire`, `lesions-cutanees-suspectes`, and `conseils-prevention-dermatologique`.

4. **Asset Synchronization Notice:**
   - The image assets referenced in `articleImagesConfig.json` reside at `/images/pdf_extracted/Article_<N>_...`.
   - Existing extracted files exist in `dist/images/pdf_extracted/`.
   - The implementer must ensure that `public/images/pdf_extracted/` is populated if running Vite build or static asset serving.

---

## 4. Proposed Implementation Code Snippets

Below is the complete implementation code for each of the 5 files for the implementer:

### 4.1 `DepistageCancersPeau.jsx`
```jsx
import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function DepistageCancersPeau() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Dépistage des cancers de la peau à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise le dépistage des cancers de la peau grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Dépistage des cancers de la peau à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise le dépistage des cancers de la peau grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué."
        keywords="Dépistage cancer de la peau Meknès, Mélanome Meknès, Carcinome Meknès, Dermoscopie Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/depistage-cancers-peau"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Dépistage des cancers de la peau" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Dépistage des cancers de la peau à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Le dépistage des cancers de la peau permet d'identifier précocement certaines lésions suspectes avant qu'elles n'évoluent. Un diagnostic réalisé à un stade précoce favorise une prise en charge adaptée.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un examen clinique complet de la peau et utilise la dermoscopie lorsque cela est indiqué afin d'évaluer les grains de beauté et les autres lésions cutanées.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="depistage-cancers-peau" imageIndex={0} className="article-hero-image-block" />

                <h2>Pourquoi réaliser un dépistage ?</h2>
                <h3>Qui est le plus concerné ?</h3>
                <p>Les cancers de la peau figurent parmi les cancers les plus fréquents. Lorsqu'ils sont détectés précocement, ils peuvent être pris en charge plus rapidement. Un dépistage est particulièrement recommandé chez les personnes présentant :</p>
                <ul>
                  <li>De nombreux grains de beauté</li>
                  <li>Une peau claire</li>
                  <li>Des antécédents personnels ou familiaux de cancer cutané</li>
                  <li>Une exposition importante au soleil au cours de la vie</li>
                  <li>Des coups de soleil répétés, notamment pendant l'enfance</li>
                  <li>Une apparition récente ou une modification d'une lésion cutanée</li>
                </ul>

                <h2>Comment se déroule le dépistage ?</h2>
                <p>Lors de la consultation, le dermatologue examine l'ensemble de la peau, du cuir chevelu jusqu'aux pieds.</p>
                <p>Lorsque cela est nécessaire, une dermoscopie est réalisée. Cet examen utilise un dermatoscope permettant d'observer les structures de la peau invisibles à l'œil nu et d'évaluer plus précisément certaines lésions.</p>
                <p>Si une anomalie est identifiée, une surveillance, une biopsie ou une exérèse peut être proposée selon les indications médicales.</p>

                <h2>Quels signes doivent vous amener à consulter ?</h2>
                <p>Une consultation dermatologique est recommandée si vous observez :</p>
                <ul>
                  <li>Un grain de beauté qui change de taille, de forme ou de couleur</li>
                  <li>Une nouvelle lésion pigmentée</li>
                  <li>Une plaie qui ne cicatrise pas</li>
                  <li>Une lésion qui saigne spontanément</li>
                  <li>Une croûte persistante</li>
                  <li>Une lésion qui démange ou devient douloureuse</li>
                </ul>
                <p>Ces signes ne signifient pas nécessairement qu'il s'agit d'un cancer de la peau, mais ils justifient un avis spécialisé.</p>

                <ArticleImageBlock articleId="depistage-cancers-peau" imageIndex={1} />

                <h2>La règle ABCDE</h2>
                <p>Les signes à surveiller. Pour repérer certaines lésions suspectes, les dermatologues utilisent notamment la règle ABCDE :</p>
                <ul>
                  <li>A : Asymétrie</li>
                  <li>B : Bords irréguliers</li>
                  <li>C : Couleurs multiples</li>
                  <li>D : Diamètre supérieur à 6 mm</li>
                  <li>E : Évolution de la lésion</li>
                </ul>
                <p>Cette règle constitue un outil d'alerte, mais seul un examen dermatologique permet d'établir un diagnostic.</p>

                <ArticleImageBlock articleId="depistage-cancers-peau" imageIndex={2} />

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Toutes les lésions pigmentées ne sont pas cancéreuses. Une consultation dermatologique permet d'établir un diagnostic précis, d'éviter des inquiétudes inutiles et de mettre en place une surveillance ou une prise en charge adaptée lorsque cela est nécessaire.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour un dépistage personnalisé.</p>
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

### 4.2 `ControleGrainsBeaute.jsx`
```jsx
import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function ControleGrainsBeaute() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Contrôle des grains de beauté à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise le contrôle des grains de beauté grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Contrôle des grains de beauté à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise le contrôle des grains de beauté grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué."
        keywords="Contrôle grain de beauté Meknès, Naevus atypique Meknès, Dermoscopie Meknès, Surveillance grains de beauté Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/controle-grains-beaute"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Contrôle des grains de beauté" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Contrôle des grains de beauté à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les grains de beauté (naevus) sont très fréquents et, dans la majorité des cas, bénins. Toutefois, certains peuvent évoluer au fil du temps ou présenter des caractéristiques qui nécessitent une surveillance dermatologique.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un examen clinique de vos grains de beauté afin d'évaluer leur aspect, de rechercher d'éventuelles anomalies et de déterminer si une simple surveillance ou une prise en charge complémentaire est nécessaire.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="controle-grains-beaute" imageIndex={0} className="article-hero-image-block" />

                <h2>Pourquoi faire contrôler ses grains de beauté ?</h2>
                <p>Un contrôle dermatologique permet :</p>
                <ul>
                  <li>De surveiller l'évolution de certains grains de beauté</li>
                  <li>D'identifier précocement des lésions inhabituelles</li>
                  <li>De distinguer les lésions bénignes des lésions nécessitant une surveillance particulière</li>
                  <li>De bénéficier d'un suivi personnalisé selon votre profil</li>
                </ul>
                <p>La plupart des grains de beauté sont bénins, mais leur surveillance peut être recommandée dans certaines situations.</p>

                <h2>Qui devrait réaliser un contrôle dermatologique ?</h2>
                <h3>Les personnes les plus concernées</h3>
                <p>Un contrôle est particulièrement recommandé si vous :</p>
                <ul>
                  <li>Avez un grand nombre de grains de beauté</li>
                  <li>Présentez une peau claire</li>
                  <li>Avez des antécédents personnels ou familiaux de cancer de la peau</li>
                  <li>Avez subi de nombreux coups de soleil, notamment durant l'enfance</li>
                  <li>Observez l'apparition d'un nouveau grain de beauté à l'âge adulte</li>
                  <li>Remarquez une modification d'une lésion existante</li>
                </ul>

                <h2>Comment se déroule le contrôle ?</h2>
                <p>Lors de la consultation, le dermatologue examine l'ensemble des grains de beauté visibles. Lorsque cela est nécessaire, une dermoscopie est réalisée afin d'observer les structures de la peau invisibles à l'œil nu.</p>
                <ArticleImageBlock articleId="controle-grains-beaute" imageIndex={1} />
                <p>Selon les résultats de l'examen, plusieurs options peuvent être proposées :</p>
                <ul>
                  <li>Simple surveillance</li>
                  <li>Contrôle régulier</li>
                  <li>Photographie de suivi</li>
                  <li>Biopsie ou exérèse lorsqu'elles sont médicalement indiquées</li>
                </ul>

                <h2>Les signes qui doivent vous alerter</h2>
                <h3>Quand consulter ?</h3>
                <p>Il est recommandé de consulter rapidement si un grain de beauté :</p>
                <ArticleImageBlock articleId="controle-grains-beaute" imageIndex={2} />
                <ul>
                  <li>Change de taille</li>
                  <li>Change de forme</li>
                  <li>Change de couleur</li>
                  <li>Présente des bords irréguliers</li>
                  <li>Saigne spontanément</li>
                  <li>Démange ou devient douloureux</li>
                  <li>Évolue rapidement</li>
                </ul>
                <p>Ces signes ne permettent pas à eux seuls de poser un diagnostic, mais justifient un avis dermatologique.</p>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>L'examen d'un grain de beauté nécessite une évaluation médicale précise. Le dermatologue dispose des connaissances et des outils nécessaires, notamment la dermoscopie, pour analyser les lésions cutanées et déterminer la conduite à tenir la plus adaptée.</p>

                <h2>Prendre rendez-vous</h2>
                <p>Vous souhaitez faire contrôler vos grains de beauté ou obtenir un avis dermatologique ? Le Dr Samia Mrabat, dermatologue à Meknès, vous accueille en consultation afin d'examiner votre peau et de vous proposer un suivi personnalisé.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour un contrôle personnalisé de vos grains de beauté.</p>
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

### 4.3 `PreventionSolaire.jsx`
```jsx
import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function PreventionSolaire() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Prévention solaire à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, vous conseille sur les bonnes pratiques de protection solaire afin de préserver votre peau et de limiter les effets des rayons UV.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Prévention solaire et conseils à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, vous conseille sur les bonnes pratiques de protection solaire afin de préserver votre peau et de limiter les effets des rayons UV."
        keywords="Prévention solaire Meknès, Protection UV Meknès, Phototype peau Meknès, Crème solaire Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/prevention-solaire"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Prévention solaire" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Prévention solaire à Meknès</h1>
          <div className="subpage-subtitle">
            <p>L'exposition au soleil est indispensable à certains mécanismes naturels de l'organisme, mais une exposition excessive aux rayons ultraviolets (UV) peut favoriser le vieillissement prématuré de la peau, l'apparition de taches pigmentaires et augmenter le risque de cancers cutanés.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne dans la prévention solaire en vous apportant des conseils adaptés à votre peau, à votre âge et à votre mode de vie.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="prevention-solaire" imageIndex={0} className="article-hero-image-block" />

                <h2>Pourquoi protéger sa peau du soleil ?</h2>
                <p>Les rayons UV agissent progressivement sur la peau, même lorsque les effets ne sont pas immédiatement visibles. Une protection solaire adaptée permet notamment de :</p>
                <ul>
                  <li>Limiter les coups de soleil</li>
                  <li>Réduire le risque de vieillissement cutané prématuré</li>
                  <li>Diminuer l'apparition de certaines taches pigmentaires</li>
                  <li>Contribuer à la prévention de certains cancers de la peau</li>
                  <li>Préserver la qualité et la santé de la peau</li>
                </ul>

                <ArticleImageBlock articleId="prevention-solaire" imageIndex={1} />

                <h2>Quels sont les effets des rayons UV sur la peau ?</h2>
                <h3>Comprendre l'impact des rayons UV</h3>
                <p>Une exposition répétée au soleil peut entraîner :</p>
                <ul>
                  <li>Des coups de soleil</li>
                  <li>Un vieillissement prématuré de la peau</li>
                  <li>Une perte d'élasticité</li>
                  <li>L'apparition de rides</li>
                  <li>Des taches pigmentaires</li>
                  <li>Des lésions précancéreuses ou cancéreuses chez certaines personnes</li>
                </ul>
                <p>Les effets des UV s'accumulent progressivement au fil des années.</p>

                <h2>Les bons réflexes à adopter</h2>
                <h3>Les gestes essentiels au quotidien</h3>
                <p>Pour protéger efficacement votre peau, il est recommandé de :</p>
                <ul>
                  <li>Appliquer une protection solaire adaptée à votre phototype</li>
                  <li>Renouveler l'application régulièrement, notamment après la baignade ou une transpiration importante</li>
                  <li>Porter un chapeau, des lunettes de soleil et des vêtements couvrants lorsque cela est possible</li>
                  <li>Éviter une exposition prolongée pendant les heures où les UV sont les plus intenses</li>
                  <li>Protéger particulièrement les enfants et les peaux sensibles</li>
                </ul>

                <ArticleImageBlock articleId="prevention-solaire" imageIndex={2} />

                <h2>Les idées reçues sur la protection solaire</h2>
                <p>Certaines croyances sont fausses. Par exemple :</p>
                <ul>
                  <li>Une peau bronzée reste sensible aux rayons UV</li>
                  <li>Les nuages ne bloquent pas tous les UV</li>
                  <li>Une protection solaire ne permet pas de s'exposer sans limite</li>
                  <li>Les UV sont présents toute l'année, même en dehors de l'été</li>
                </ul>
                <p>Adopter les bons réflexes reste essentiel tout au long de l'année.</p>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Le dermatologue peut évaluer votre niveau de risque, examiner votre peau et vous conseiller sur les mesures de prévention les plus adaptées. En cas de lésions suspectes ou de facteurs de risque particuliers, un suivi dermatologique peut être recommandé.</p>

                <h2>Prendre rendez-vous</h2>
                <p>Vous souhaitez bénéficier de conseils personnalisés concernant la protection solaire ou faire examiner votre peau ? Le Dr Samia Mrabat, dermatologue à Meknès, vous accueille en consultation afin de vous accompagner dans la prévention des effets des rayons UV. Prenez rendez-vous pour bénéficier de conseils dermatologiques adaptés à votre peau.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour des conseils personnalisés sur la protection solaire.</p>
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

### 4.4 `LesionsCutaneesSuspectes.jsx`
```jsx
import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function LesionsCutaneesSuspectes() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Lésions cutanées suspectes : quand consulter un dermatologue ?",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, évalue les lésions cutanées suspectes afin d'établir un diagnostic précis et de proposer une prise en charge adaptée lorsque cela est nécessaire.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Lésions cutanées suspectes à Meknès | Quand consulter ? | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, évalue les lésions cutanées suspectes afin d'établir un diagnostic précis et de proposer une prise en charge adaptée lorsque cela est nécessaire."
        keywords="Lésion suspecte Meknès, Bouton qui ne guérit pas Meknès, Tache croûteuse Meknès, Dermatologue Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/lesions-cutanees-suspectes"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Lésions cutanées suspectes" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Lésions cutanées suspectes : quand consulter un dermatologue ?</h1>
          <div className="subpage-subtitle">
            <p>Certaines lésions de la peau peuvent évoluer au fil du temps ou présenter des caractéristiques nécessitant un avis médical. Dans la majorité des cas, elles sont bénignes, mais certaines doivent être examinées afin d'écarter une maladie cutanée ou un cancer de la peau.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un examen clinique complet de votre peau afin d'identifier la nature de la lésion et de déterminer si une surveillance, des examens complémentaires ou un traitement sont nécessaires.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="lesions-cutanees-suspectes" imageIndex={0} className="article-hero-image-block" />

                <h2>Quels signes doivent attirer votre attention ?</h2>
                <ArticleImageBlock articleId="lesions-cutanees-suspectes" imageIndex={1} />
                <p>Une consultation dermatologique est recommandée si vous observez l'un des signes suivants :</p>
                <ul>
                  <li>Une nouvelle tache qui apparaît</li>
                  <li>Une lésion qui augmente progressivement de taille</li>
                  <li>Une plaie qui ne cicatrise pas</li>
                  <li>Une croûte persistante</li>
                  <li>Une lésion qui saigne spontanément</li>
                  <li>Une modification de la couleur ou de la forme d'une lésion existante</li>
                  <li>Une douleur, des démangeaisons ou un inconfort persistant</li>
                </ul>
                <p>Ces signes ne permettent pas d'établir un diagnostic, mais justifient un examen dermatologique.</p>

                <h2>Comment se déroule l'évaluation ?</h2>
                <h3>Les étapes de votre prise en charge</h3>
                <p>Lors de la consultation, le dermatologue examine la peau et analyse les caractéristiques de la lésion. Lorsque cela est indiqué, une dermoscopie peut être réalisée afin d'observer les structures invisibles à l'œil nu.</p>
                <ArticleImageBlock articleId="lesions-cutanees-suspectes" imageIndex={2} />
                <p>Selon les résultats de l'examen, plusieurs options peuvent être proposées :</p>
                <ul>
                  <li>Simple surveillance</li>
                  <li>Contrôle dermatologique régulier</li>
                  <li>Biopsie cutanée</li>
                  <li>Exérèse de la lésion lorsque cela est médicalement indiqué</li>
                </ul>

                <h3>Toutes les lésions sont-elles inquiétantes ?</h3>
                <p>Non. De nombreuses lésions cutanées sont bénignes et ne nécessitent aucun traitement particulier. L'objectif de la consultation est de distinguer les lésions bénignes de celles qui nécessitent une surveillance ou une prise en charge spécifique. Un diagnostic précoce permet d'adapter rapidement la conduite à tenir lorsque cela est nécessaire.</p>

                <h3>Pourquoi consulter rapidement ?</h3>
                <p>Consulter un dermatologue dès l'apparition d'une lésion inhabituelle permet :</p>
                <ul>
                  <li>D'obtenir un diagnostic précis</li>
                  <li>De limiter les inquiétudes inutiles</li>
                  <li>De mettre en place une surveillance adaptée si besoin</li>
                  <li>De proposer un traitement précoce lorsqu'il est indiqué</li>
                </ul>

                <h2>Pourquoi consulter le Dr Samia Mrabat ?</h2>
                <p>Le Dr Samia Mrabat dispose de l'expertise nécessaire pour évaluer les lésions cutanées grâce à un examen clinique rigoureux et à la dermoscopie lorsque cela est indiqué. Chaque patient bénéficie d'une prise en charge personnalisée adaptée à son âge, son type de peau et son histoire médicale.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour une évaluation de vos lésions cutanées.</p>
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

### 4.5 `ConseilsPreventionDermatologique.jsx`
```jsx
import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function ConseilsPreventionDermatologique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Conseils de prévention dermatologique à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne avec des conseils de prévention pour préserver la santé de votre peau et détecter précocement certaines maladies cutanées.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Conseils de prévention dermatologique à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne avec des conseils de prévention pour préserver la santé de votre peau et détecter précocement certaines maladies cutanées."
        keywords="Prévention dermatologique Meknès, Santé de la peau Meknès, Conseils dermatologiques Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/conseils-prevention-dermatologique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Conseils de prévention dermatologique" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Conseils de prévention dermatologique à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Préserver la santé de sa peau repose sur des gestes simples réalisés au quotidien. Une bonne prévention permet de limiter certains facteurs de risque, de protéger la peau contre les agressions extérieures et de favoriser la détection précoce de certaines maladies cutanées.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne grâce à des conseils personnalisés adaptés à votre type de peau, votre âge et vos facteurs de risque.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="conseils-prevention-dermatologique" imageIndex={0} className="article-hero-image-block" />

                <h2>Les gestes essentiels pour prendre soin de sa peau</h2>
                <ArticleImageBlock articleId="conseils-prevention-dermatologique" imageIndex={1} />
                <ul>
                  <li>Protéger sa peau du soleil</li>
                  <li>Hydrater régulièrement la peau</li>
                  <li>Utiliser des produits adaptés à son type de peau</li>
                  <li>Éviter les produits irritants lorsqu'ils ne sont pas nécessaires</li>
                  <li>Surveiller l'apparition ou l'évolution de nouvelles lésions</li>
                </ul>
                <p>Ces gestes participent au maintien d'une peau en bonne santé.</p>

                <h2>Pourquoi surveiller régulièrement sa peau ?</h2>
                <p>Observer sa peau permet de repérer plus facilement certaines modifications. Un diagnostic précoce permet d'orienter rapidement la prise en charge lorsque cela est nécessaire.</p>
                <ArticleImageBlock articleId="conseils-prevention-dermatologique" imageIndex={2} />
                <p>Il est recommandé d'être attentif en cas :</p>
                <ul>
                  <li>D'apparition d'une nouvelle lésion</li>
                  <li>De modification d'un grain de beauté</li>
                  <li>De plaie qui ne cicatrise pas</li>
                  <li>De démangeaisons persistantes</li>
                  <li>De changement de couleur ou de forme d'une lésion</li>
                </ul>

                <h2>Les bonnes habitudes au quotidien</h2>
                <p>Quelques habitudes simples peuvent contribuer à préserver votre peau :</p>
                <ul>
                  <li>Éviter les expositions solaires excessives</li>
                  <li>Adopter une protection solaire adaptée</li>
                  <li>Maintenir une bonne hydratation de la peau</li>
                  <li>Ne pas manipuler les lésions cutanées</li>
                  <li>Consulter rapidement en cas d'anomalie</li>
                </ul>

                <h2>Quand consulter un dermatologue ?</h2>
                <p>Les situations qui justifient une consultation :</p>
                <ul>
                  <li>Si une lésion apparaît ou évolue</li>
                  <li>Si un traitement prescrit ne donne pas les résultats attendus</li>
                  <li>En cas de symptômes persistants</li>
                  <li>Pour un contrôle dermatologique lorsque vous présentez des facteurs de risque</li>
                </ul>
                <p>Le dermatologue pourra établir un diagnostic précis et vous proposer une prise en charge adaptée.</p>

                <h2>Pourquoi consulter le Dr Samia Mrabat ?</h2>
                <p>Le Dr Samia Mrabat vous accompagne dans la prévention des maladies de la peau grâce à une approche personnalisée. Chaque consultation permet d'évaluer votre peau, de répondre à vos questions et de vous conseiller sur les mesures les plus adaptées à votre situation.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour des conseils personnalisés.</p>
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
