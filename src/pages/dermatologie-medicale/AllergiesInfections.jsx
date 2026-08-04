import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function AllergiesInfections() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Allergies, infections et maladies de la peau : diagnostic et traitement à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, diagnostique et traite les allergies cutanées, les infections de la peau et de nombreuses maladies dermatologiques chez l'adulte et l'enfant.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Allergies, infections et maladies de la peau à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, diagnostique et traite les allergies cutanées, les infections de la peau et de nombreuses maladies dermatologiques chez l'adulte et l'enfant."
        keywords="Allergie cutanée Meknès, Infection peau Meknès, Urticaire Meknès, Mycose Meknès, Dermatologue Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/allergies-infections-maladies-peau"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Allergies, infections et maladies de la peau" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Allergies, infections et maladies de la peau : diagnostic et traitement à Meknès</h1>
          <div className="subpage-subtitle">
            <p>La peau constitue la première barrière de protection de l'organisme. Lorsqu'elle est agressée par des allergènes, des bactéries, des virus, des champignons ou certaines maladies inflammatoires, différents symptômes peuvent apparaître : rougeurs, démangeaisons, boutons, cloques, douleurs ou encore lésions cutanées.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les différentes maladies de la peau chez l'adulte et l'enfant afin d'établir un diagnostic précis et de proposer un traitement adapté à chaque situation.</p>
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
