import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function EczemaPsoriasisVitiligo() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Eczéma, psoriasis et vitiligo : diagnostic et prise en charge à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, assure le diagnostic et la prise en charge de l'eczéma, du psoriasis et du vitiligo chez l'adulte et l'enfant.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Eczéma, psoriasis et vitiligo à Meknès | Dermatologue Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, assure le diagnostic et la prise en charge de l'eczéma, du psoriasis et du vitiligo chez l'adulte et l'enfant."
        keywords="Eczéma Meknès, Psoriasis Meknès, Vitiligo Meknès, Dermatologue Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/eczema-psoriasis-vitiligo"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Eczéma, psoriasis et vitiligo" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Eczéma, psoriasis et vitiligo : diagnostic et prise en charge à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les maladies inflammatoires et pigmentaires de la peau, comme l'eczéma, le psoriasis et le vitiligo, peuvent provoquer un inconfort important au quotidien et avoir un impact sur la qualité de vie. Bien que leurs symptômes soient différents, elles nécessitent toutes un diagnostic précis afin de proposer une prise en charge adaptée.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne dans le diagnostic, le traitement et le suivi de ces affections cutanées afin d'améliorer durablement la santé de votre peau.</p>
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
