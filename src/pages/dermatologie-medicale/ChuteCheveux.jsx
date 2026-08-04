import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ChuteCheveux() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Chute de cheveux et maladies du cuir chevelu : diagnostic et prise en charge à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge la chute de cheveux, les maladies du cuir chevelu et les différentes formes d'alopécie chez l'adulte et l'enfant.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Chute de cheveux et maladies du cuir chevelu à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge la chute de cheveux, les maladies du cuir chevelu et les différentes formes d'alopécie chez l'adulte et l'enfant."
        keywords="Chute de cheveux Meknès, Alopécie Meknès, Cuir chevelu Meknès, Traitement calvitie Meknès, Dermatologue Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Chute de cheveux et maladies du cuir chevelu" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Chute de cheveux et maladies du cuir chevelu : diagnostic et prise en charge à Meknès</h1>
          <div className="subpage-subtitle">
            <p>La perte de cheveux ou les problèmes du cuir chevelu peuvent avoir de nombreuses origines. Une chute de cheveux importante, des démangeaisons persistantes, des pellicules abondantes ou l'apparition de plaques sans cheveux nécessitent un diagnostic précis afin d'identifier leur cause et de mettre en place un traitement adapté.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les différentes maladies du cuir chevelu chez l'adulte et l'enfant. Chaque consultation comprend un examen clinique approfondi afin de proposer une prise en charge personnalisée selon l'origine du problème.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
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
