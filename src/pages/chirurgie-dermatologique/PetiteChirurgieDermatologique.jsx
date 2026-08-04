import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function PetiteChirurgieDermatologique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Petite chirurgie dermatologique à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise différents actes de petite chirurgie dermatologique sous anesthésie locale, dans des conditions de sécurité et de confort adaptées.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Petite chirurgie dermatologique à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise différents actes de petite chirurgie dermatologique sous anesthésie locale, dans des conditions de sécurité et de confort adaptées."
        keywords="Petite chirurgie Meknès, Acrochordon Meknès, Verrues Meknès, Kératose séborrhéique Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/petite-chirurgie-dermatologique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: "Petite chirurgie dermatologique" },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Petite chirurgie dermatologique à Meknès</h1>
          <div className="subpage-subtitle">
            <p>La petite chirurgie dermatologique regroupe différents actes réalisés directement au cabinet sous anesthésie locale. Ces interventions permettent de traiter ou de prélever certaines lésions cutanées lorsqu'une prise en charge chirurgicale est médicalement indiquée.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise ces interventions dans un environnement adapté, après une évaluation clinique complète et une explication personnalisée de la prise en charge.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="petite-chirurgie-dermatologique" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Qu'est-ce que la petite chirurgie dermatologique ?</h2>
                <p>La petite chirurgie dermatologique correspond à des interventions de courte durée réalisées sous anesthésie locale, sans hospitalisation.</p>
                <p>Elle permet notamment de retirer certaines lésions cutanées bénignes, de réaliser un prélèvement diagnostique ou de traiter certaines pathologies de la peau et des ongles lorsque cela est indiqué.</p>
                <p>Chaque intervention est adaptée à la nature de la lésion et aux besoins du patient.</p>

                
                <ArticleImageBlock articleId="petite-chirurgie-dermatologique" imageIndex={1} />
<h2>Quels actes peuvent être réalisés ?</h2>
                <p>Selon votre situation, différents actes peuvent être proposés, notamment :</p>
                <ul className="check-list">
                  <li>Exérèse de kystes</li>
                  <li>Exérèse de lipomes</li>
                  <li>Ablation de certains grains de beauté lorsque cela est indiqué</li>
                  <li>Biopsies cutanées</li>
                  <li>Chirurgie de l'ongle incarné</li>
                  <li>Exérèse de certaines lésions cutanées bénignes</li>
                </ul>
                <p>Chaque indication est évaluée individuellement lors de la consultation.</p>
                

                <h2>Comment se déroule une intervention ?</h2>
                <p>Avant toute intervention, un examen clinique permet de confirmer le diagnostic et de vérifier que le geste est adapté.</p>
                <p>La plupart des interventions sont réalisées sous anesthésie locale. Après désinfection de la peau, le geste est réalisé avec des instruments adaptés afin d'assurer une prise en charge précise et de favoriser une bonne cicatrisation. Selon le type d'intervention, des points de suture peuvent être nécessaires.</p>

                <h2>Après l'intervention</h2>
                <p>Après l'acte chirurgical, des soins locaux simples sont généralement suffisants.</p>
                <p>Le Dr Samia Mrabat vous remet des recommandations personnalisées concernant :</p>
                <ul className="check-list">
                  <li>Les soins de la plaie</li>
                  <li>Les pansements</li>
                  <li>La reprise des activités</li>
                  <li>Les rendez-vous de contrôle</li>
                  <li>Le retrait des fils lorsque cela est nécessaire</li>
                </ul>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Toutes les lésions cutanées ne nécessitent pas une intervention.</p>
                <p>Une consultation dermatologique permet d'établir un diagnostic précis, de déterminer si une petite chirurgie est indiquée et de proposer la prise en charge la plus adaptée à votre situation.</p>
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
