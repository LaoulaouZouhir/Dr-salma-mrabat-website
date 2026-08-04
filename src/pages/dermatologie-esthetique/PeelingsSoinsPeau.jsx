import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function PeelingsSoinsPeau() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Peelings dermatologiques et soins de la peau à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, propose des peelings dermatologiques et des soins de la peau adaptés pour améliorer l'éclat du teint, la texture cutanée et certaines imperfections.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Peeling dermatologique à Meknès | Soins de la peau | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, propose des peelings dermatologiques et des soins de la peau adaptés pour améliorer l'éclat du teint, la texture cutanée et certaines imperfections."
        keywords="Peeling Meknès, Peeling moyen Meknès, Éclat du teint Meknès, Traitement taches Meknès, Dermatologue esthétique Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/peelings-soins-peau"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: "Peelings dermatologiques et soins de la peau" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE ESTHÉTIQUE</span>
          <h1 className="subpage-title">Peelings dermatologiques et soins de la peau à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les peelings dermatologiques sont des traitements réalisés par un dermatologue afin d'améliorer la qualité de la peau. Selon leur indication, ils peuvent contribuer à atténuer certaines imperfections superficielles, améliorer l'éclat du teint, uniformiser la texture de la peau et accompagner la prise en charge de certaines lésions pigmentaires ou cicatricielles.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise une évaluation personnalisée afin de déterminer le traitement le plus adapté à votre peau, à vos attentes et à votre indication médicale.</p>
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
