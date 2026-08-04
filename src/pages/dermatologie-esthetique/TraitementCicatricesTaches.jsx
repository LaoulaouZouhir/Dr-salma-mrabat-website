import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function TraitementCicatricesTaches() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Traitement des cicatrices et des taches pigmentaires à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, propose une prise en charge personnalisée des cicatrices et des taches pigmentaires selon votre type de peau et votre indication médicale.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Traitement des cicatrices et des taches pigmentaires à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, propose une prise en charge personnalisée des cicatrices et des taches pigmentaires selon votre type de peau et votre indication médicale."
        keywords="Traitement cicatrices d'acné Meknès, Mélasma Meknès, Taches solaires Meknès, Dépigmentation Meknès, Dermatologue esthétique Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: "Traitement des cicatrices et des taches pigmentaires" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE ESTHÉTIQUE</span>
          <h1 className="subpage-title">Traitement des cicatrices et des taches pigmentaires à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les cicatrices et les taches pigmentaires peuvent apparaître après une acné, une inflammation cutanée, une exposition au soleil ou avec le vieillissement naturel de la peau. Leur aspect, leur profondeur et leur origine varient d'une personne à l'autre, ce qui nécessite une évaluation dermatologique avant toute prise en charge.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un examen personnalisé afin d'identifier l'origine des lésions et de proposer un protocole adapté à votre peau et à vos besoins.</p>
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
