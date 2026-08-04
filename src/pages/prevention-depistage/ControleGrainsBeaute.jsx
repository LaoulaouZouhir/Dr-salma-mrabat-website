import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

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
