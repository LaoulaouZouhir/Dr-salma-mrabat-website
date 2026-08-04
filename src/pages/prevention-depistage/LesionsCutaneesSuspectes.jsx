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
                <ArticleImageBlock articleId="lesions-cutanees-suspectes" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Quels signes doivent attirer votre attention ?</h2>
                <p>Une consultation dermatologique est recommandée si vous observez :</p>
                <ul className="check-list">
                  <li>Une nouvelle tache qui apparaît</li>
                  <li>Une lésion qui augmente progressivement de taille</li>
                  <li>Une plaie qui ne cicatrise pas</li>
                  <li>Une croûte persistante</li>
                  <li>Une lésion qui saigne spontanément</li>
                  <li>Une modification de la couleur ou de la forme d'une lésion existante</li>
                  <li>Une douleur, des démangeaisons ou un inconfort persistant</li>
                </ul>
                <p>Ces signes ne permettent pas d'établir un diagnostic, mais justifient un examen dermatologique.</p>

                
                <ArticleImageBlock articleId="lesions-cutanees-suspectes" imageIndex={1} />
<h2>Comment se déroule l'évaluation ?</h2>
                <p>Lors de la consultation, le dermatologue examine la peau et analyse les caractéristiques de la lésion.</p>
                <p>Lorsque cela est indiqué, une dermoscopie peut être réalisée afin d'observer les structures invisibles à l'œil nu.</p>
                <p>Selon les résultats de l'examen, plusieurs options peuvent être proposées :</p>
                <ul className="check-list">
                  <li>Simple surveillance</li>
                  <li>Contrôle dermatologique régulier</li>
                  <li>Biopsie cutanée</li>
                  <li>Exérèse de la lésion lorsque cela est médicalement indiqué</li>
                </ul>
                

                
                <ArticleImageBlock articleId="lesions-cutanees-suspectes" imageIndex={2} />
<h2>Toutes les lésions sont-elles inquiétantes ?</h2>
                <p>Non. De nombreuses lésions cutanées sont bénignes et ne nécessitent aucun traitement particulier.</p>
                <p>L'objectif de la consultation est de distinguer les lésions bénignes de celles qui nécessitent une surveillance ou une prise en charge spécifique.</p>
                <p>Un diagnostic précoce permet d'adapter rapidement la conduite à tenir lorsque cela est nécessaire.</p>

                <h2>Pourquoi consulter rapidement ?</h2>
                <p>Consulter un dermatologue dès l'apparition d'une lésion inhabituelle permet :</p>
                <ul className="check-list">
                  <li>D'obtenir un diagnostic précis</li>
                  <li>De limiter les inquiétudes inutiles</li>
                  <li>De mettre en place une surveillance adaptée si besoin</li>
                  <li>De proposer un traitement précoce lorsqu'il est indiqué</li>
                </ul>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Le Dr Samia Mrabat dispose de l'expertise nécessaire pour évaluer les lésions cutanées grâce à un examen clinique rigoureux et à la dermoscopie lorsque cela est indiqué.</p>
                <p>Chaque patient bénéficie d'une prise en charge personnalisée adaptée à son âge, son type de peau et son histoire médicale.</p>
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
