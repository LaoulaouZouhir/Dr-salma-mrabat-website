import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function PreventionSolaire() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Prévention solaire à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, vous conseille sur les bonnes pratiques de protection solaire afin de préserver votre peau et de limiter les effets des rayons UV.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Prévention solaire et conseils à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, vous conseille sur les bonnes pratiques de protection solaire afin de préserver votre peau et de limiter les effets des rayons UV."
        keywords="Prévention solaire Meknès, Protection UV Meknès, Phototype peau Meknès, Crème solaire Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/prevention-solaire"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Prévention solaire" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Prévention solaire à Meknès</h1>
          <div className="subpage-subtitle">
            <p>L'exposition au soleil est indispensable à certains mécanismes naturels de l'organisme, mais une exposition excessive aux rayons ultraviolets (UV) peut favoriser le vieillissement prématuré de la peau, l'apparition de taches pigmentaires et augmenter le risque de cancers cutanés.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne dans la prévention solaire en vous apportant des conseils adaptés à votre peau, à votre âge et à votre mode de vie.</p>
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
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour des conseils personnalisés sur la protection solaire.</p>
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
