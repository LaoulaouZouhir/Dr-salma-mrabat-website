import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function RajeunissementCutane() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Rajeunissement cutané à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, propose une prise en charge personnalisée du vieillissement cutané afin d'améliorer la qualité de la peau, sa fermeté et son éclat selon votre indication médicale.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Rajeunissement cutané à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, propose une prise en charge personnalisée du vieillissement cutané afin d'améliorer la qualité de la peau, sa fermeté et son éclat selon votre indication médicale."
        keywords="Rajeunissement visage Meknès, Anti-âge Meknès, Fermeté peau Meknès, Dermatologue esthétique Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/rajeunissement-cutane"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: "Rajeunissement cutané" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE ESTHÉTIQUE</span>
          <h1 className="subpage-title">Rajeunissement cutané à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Le vieillissement cutané est un phénomène naturel qui évolue progressivement avec l'âge. Il se traduit notamment par l'apparition de rides, une perte de fermeté, une diminution de l'élasticité de la peau, un teint moins lumineux et parfois une modification des volumes du visage.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise une évaluation personnalisée afin d'identifier les changements liés au vieillissement cutané et de proposer une prise en charge adaptée à votre peau, à votre âge et à vos objectifs.</p>
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
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour une évaluation personnalisée de votre peau.</p>
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
