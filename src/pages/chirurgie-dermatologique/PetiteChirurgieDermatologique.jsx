import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

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
