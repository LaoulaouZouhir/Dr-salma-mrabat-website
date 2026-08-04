import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

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
