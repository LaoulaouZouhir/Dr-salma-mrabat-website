import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

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
