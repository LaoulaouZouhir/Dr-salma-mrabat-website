import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

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
<img src="/articles/article19/images/img-000.png" alt="Consultation dermatologique pour l\u00e9sions cutan\u00e9es" className="hero-image" />
<p className="caption"><em>Consultation dermatologique pour évaluer une lésion cutanée suspecte.</em></p>
<h2>Quels signes doivent attirer votre attention ?</h2>

<img className="infographic" src="/articles/article19/images/img-001.png" alt="Signes d'alerte des lésions cutanées" />
<p className="caption"><em>Principaux signes d'alerte à surveiller sur une lésion cutanée.</em></p>

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

<img className="infographic" src="/articles/article19/images/img-002.png" alt="Dermoscopy et options de prise en charge" />
<p className="caption"><em>Dermoscopy et options possibles selon l'examen clinique.</em></p>

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
                <div className="cta-container">
                  <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="cta-button">Je prends mon rendez-vous</a>
                  <span className="cta-subtext">Contactez le cabinet via WhatsApp pour fixer votre consultation</span>
                </div>
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
