import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function BiopsiesCutanees() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Biopsies cutanées à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise des biopsies cutanées lorsque cela est indiqué afin de confirmer un diagnostic et d'orienter la prise en charge adaptée.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Biopsies cutanées à Meknès | Diagnostic dermatologique | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise des biopsies cutanées lorsque cela est indiqué afin de confirmer un diagnostic et d'orienter la prise en charge adaptée."
        keywords="Biopsie cutanée Meknès, Analyse peau Meknès, Diagnostic dermatologique Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/biopsies-cutanees"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: "Biopsies cutanées" },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Biopsies cutanées à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Une biopsie cutanée est un examen médical permettant de prélever un petit fragment de peau afin de l'analyser en laboratoire. Cet examen aide le dermatologue à confirmer ou à préciser le diagnostic de certaines maladies de la peau lorsque l'examen clinique seul ne suffit pas.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise les biopsies cutanées lorsque cet examen est médicalement indiqué, dans des conditions garantissant confort, sécurité et précision diagnostique.</p>
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
