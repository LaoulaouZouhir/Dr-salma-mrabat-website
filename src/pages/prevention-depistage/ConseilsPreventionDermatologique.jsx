import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ConseilsPreventionDermatologique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Conseils de prévention dermatologique à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne avec des conseils de prévention pour préserver la santé de votre peau et détecter précocement certaines maladies cutanées.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Conseils de prévention dermatologique à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne avec des conseils de prévention pour préserver la santé de votre peau et détecter précocement certaines maladies cutanées."
        keywords="Prévention dermatologique Meknès, Santé de la peau Meknès, Conseils dermatologiques Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/conseils-prevention-dermatologique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Conseils de prévention dermatologique" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Conseils de prévention dermatologique à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Préserver la santé de sa peau repose sur des gestes simples réalisés au quotidien. Une bonne prévention permet de limiter certains facteurs de risque, de protéger la peau contre les agressions extérieures et de favoriser la détection précoce de certaines maladies cutanées.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne grâce à des conseils personnalisés adaptés à votre type de peau, votre âge et vos facteurs de risque.</p>
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
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour des conseils personnalisés.</p>
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
