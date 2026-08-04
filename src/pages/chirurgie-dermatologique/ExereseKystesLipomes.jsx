import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ExereseKystesLipomes() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Exérèse des kystes et des lipomes à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise l'exérèse des kystes et des lipomes lorsque leur prise en charge est indiquée, après une évaluation clinique personnalisée.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Exérèse kyste et lipome à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise l'exérèse des kystes et des lipomes lorsque leur prise en charge est indiquée, après une évaluation clinique personnalisée."
        keywords="Exérèse kyste Meknès, Ablation lipome Meknès, Chirurgie kyste Meknès, Boule sous la peau Meknès"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/exerese-kystes-lipomes"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: "Exérèse des kystes et des lipomes" },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Exérèse des kystes et des lipomes à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les kystes et les lipomes sont des lésions bénignes fréquentes de la peau et des tissus sous-cutanés. Bien qu'ils soient généralement sans gravité, ils peuvent augmenter de volume, devenir douloureux, s'infecter ou entraîner une gêne fonctionnelle ou esthétique.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise une évaluation clinique afin de confirmer le diagnostic et de déterminer si une exérèse chirurgicale est indiquée.</p>
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
