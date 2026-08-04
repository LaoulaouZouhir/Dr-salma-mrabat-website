import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function DermatologiePediatrique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Dermatologie pédiatrique : prise en charge des maladies de la peau chez l'enfant à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les maladies de la peau du nourrisson, de l'enfant et de l'adolescent : eczéma, verrues, molluscum contagiosum, infections cutanées, acné et bien d'autres.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Dermatologie pédiatrique à Meknès | Dermatologue enfant | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les maladies de la peau du nourrisson, de l'enfant et de l'adolescent : eczéma, verrues, molluscum contagiosum, infections cutanées, acné et bien d'autres."
        keywords="Dermatologue pédiatrique Meknès, Eczéma bébé Meknès, Verrues enfant Meknès, Peau enfant Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/dermatologie-pediatrique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Dermatologie pédiatrique" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Dermatologie pédiatrique : prise en charge des maladies de la peau chez l'enfant à Meknès</h1>
          <div className="subpage-subtitle">
            <p>La peau des nourrissons et des enfants est plus fragile que celle des adultes et peut être touchée par de nombreuses affections dermatologiques. Certaines sont bénignes et transitoires, tandis que d'autres nécessitent une prise en charge médicale afin d'éviter les complications ou d'améliorer le confort de l'enfant.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, reçoit les nourrissons, les enfants et les adolescents pour le diagnostic, le traitement et le suivi des maladies de la peau, des cheveux et des ongles.</p>
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
