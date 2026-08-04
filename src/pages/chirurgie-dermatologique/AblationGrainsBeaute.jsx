import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function AblationGrainsBeaute() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Ablation des grains de beauté et des lésions cutanées à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise l'évaluation et l'ablation des grains de beauté et de certaines lésions cutanées lorsque cela est médicalement indiqué.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Ablation des grains de beauté à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise l'évaluation et l'ablation des grains de beauté et de certaines lésions cutanées lorsque cela est médicalement indiqué."
        keywords="Ablation grain de beauté Meknès, Exérèse naevus Meknès, Lésion cutanée Meknès, Chirurgie peau Meknès"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/ablation-grains-beaute-lesions-cutanees"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: "Ablation des grains de beauté et des lésions cutanées" },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Ablation des grains de beauté et des lésions cutanées à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les grains de beauté (naevus) et certaines lésions cutanées sont très fréquents. La plupart sont bénins, mais certaines lésions peuvent évoluer, devenir gênantes ou nécessiter une évaluation dermatologique plus approfondie.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un examen clinique complet afin d'identifier la nature de la lésion et de déterminer si une surveillance, une exérèse ou un examen complémentaire est indiqué.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="ablation-grains-beaute-lesions-cutanees" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Quand l'ablation d'un grain de beauté peut-elle être indiquée ?</h2>
                <p>Une exérèse peut être proposée dans différentes situations, notamment lorsque :</p>
                <ul className="check-list">
                  <li>Un grain de beauté change de taille, de forme ou de couleur</li>
                  <li>Une lésion devient asymétrique</li>
                  <li>Les contours deviennent irréguliers</li>
                  <li>Un grain de beauté saigne, démange ou devient douloureux</li>
                  <li>Une lésion est régulièrement irritée par les vêtements ou le rasage</li>
                  <li>Une analyse anatomopathologique est nécessaire</li>
                </ul>
                <p>Toutes les lésions ne nécessitent pas une ablation. Une consultation permet de déterminer la conduite à tenir.</p>

                
                <ArticleImageBlock articleId="ablation-grains-beaute-lesions-cutanees" imageIndex={1} />
<h2>Comment se déroule la consultation ?</h2>
                <p>Le dermatologue examine la lésion et recherche les signes nécessitant une surveillance ou une prise en charge.</p>
                <p>Selon les caractéristiques observées, plusieurs options peuvent être proposées :</p>
                <ul className="check-list">
                  <li>Simple surveillance</li>
                  <li>Photographie de suivi</li>
                  <li>Dermoscopie</li>
                  <li>Exérèse lorsque celle-ci est indiquée</li>
                </ul>
                <p>Chaque décision est prise en fonction de votre situation clinique.</p>
                

                <h2>Comment se déroule l'intervention ?</h2>
                <p>Lorsque l'ablation est indiquée, elle est réalisée sous anesthésie locale.</p>
                <p>Après désinfection de la zone, le dermatologue retire la lésion dans les meilleures conditions afin de préserver une cicatrisation de qualité.</p>
                <p>Des points de suture peuvent être nécessaires selon la taille et la localisation de la lésion. Dans certaines situations, la pièce retirée est adressée à un laboratoire d'anatomopathologie pour être analysée.</p>

                <h2>Après l'intervention</h2>
                <p>Après l'ablation, quelques soins locaux sont généralement suffisants pour favoriser une bonne cicatrisation.</p>
                <p>Le Dr Samia Mrabat vous remet des recommandations personnalisées concernant :</p>
                <ul className="check-list">
                  <li>Les pansements</li>
                  <li>L'hygiène de la zone opérée</li>
                  <li>La reprise des activités</li>
                  <li>Le retrait des fils si nécessaire</li>
                  <li>Le suivi postopératoire</li>
                </ul>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>L'aspect d'un grain de beauté ne permet pas toujours de déterminer s'il est bénin ou nécessite une surveillance.</p>
                <p>Une consultation dermatologique permet d'établir un diagnostic précis, d'évaluer le risque éventuel et de proposer la prise en charge la plus adaptée.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour une évaluation personnalisée.</p>
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
