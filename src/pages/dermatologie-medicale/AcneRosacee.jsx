import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function AcneRosacee() {

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Acné et rosacée : diagnostic et traitement à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge l'acné et la rosacée chez l'adolescent et l'adulte grâce à un diagnostic précis et des traitements personnalisés.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Acné et rosacée à Meknès | Dermatologue Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge l'acné et la rosacée chez l'adolescent et l'adulte grâce à un diagnostic précis et des traitements personnalisés."
        keywords="Acné Meknès, Rosacée Meknès, Dermatologue Meknès, Dr Samia Mrabat, Traitement acné Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/acne-rosacee"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Acné et rosacée" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Acné et rosacée : diagnostic et traitement à Meknès</h1>
          <div className="subpage-subtitle">
            <p>L'acné et la rosacée sont deux maladies de peau fréquentes qui peuvent avoir un impact important sur le confort quotidien et la confiance en soi. Bien qu'elles puissent présenter certains symptômes similaires, elles nécessitent une prise en charge différente.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un diagnostic précis afin d'identifier la cause de vos symptômes et de vous proposer un traitement adapté à votre peau, à votre âge et à l'évolution de votre maladie.</p>
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
