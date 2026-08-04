import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function InjectionsBotoxHyaluronique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Injections de Botox® et d'acide hyaluronique à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise les injections de Botox® et d'acide hyaluronique pour le traitement des rides, la prévention du vieillissement cutané et l'harmonisation du visage.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Botox® et acide hyaluronique à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise les injections de Botox® et d'acide hyaluronique pour le traitement des rides, la prévention du vieillissement cutané et l'harmonisation du visage."
        keywords="Botox Meknès, Acide hyaluronique Meknès, Injections visage Meknès, Traitement rides Meknès, Médecine esthétique Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/injections-botox-acide-hyaluronique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: "Injections de Botox® et d'acide hyaluronique" },
            ]}
          />
          <span className="subpage-badge">MÉDECINE ESTHÉTIQUE</span>
          <h1 className="subpage-title">Injections de Botox® et d'acide hyaluronique à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les injections de Botox® et d'acide hyaluronique font partie des traitements les plus utilisés en médecine esthétique pour prévenir ou corriger certains signes du vieillissement du visage. Bien qu'ils soient souvent associés, ces deux traitements ont des indications différentes et peuvent être réalisés séparément ou de manière complémentaire.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise une évaluation personnalisée afin de proposer un traitement adapté à la morphologie du visage, aux attentes du patient et au résultat recherché.</p>
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
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour une évaluation personnalisée en médecine esthétique.</p>
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
