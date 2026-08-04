import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ChirurgieOngleIncarne() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Chirurgie de l'ongle incarné à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les ongles incarnés lorsque leur traitement chirurgical est indiqué afin de soulager durablement la douleur et prévenir les récidives.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Chirurgie ongle incarné à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les ongles incarnés lorsque leur traitement chirurgical est indiqué afin de soulager durablement la douleur et prévenir les récidives."
        keywords="Chirurgie ongle incarné Meknès, Ongle incarné douloureux Meknès, Matricectomie Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/chirurgie-ongle-incarne"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: "Chirurgie de l'ongle incarné" },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Chirurgie de l'ongle incarné à Meknès</h1>
          <div className="subpage-subtitle">
            <p>L'ongle incarné est une affection fréquente qui survient lorsqu'un bord de l'ongle pénètre dans la peau voisine. Cette situation peut entraîner une douleur importante, une rougeur, un gonflement et parfois une infection.</p>
            <p>Lorsque les traitements conservateurs ne suffisent pas ou que les récidives sont fréquentes, une intervention chirurgicale peut être proposée. Le Dr Samia Mrabat, dermatologue à Meknès, réalise une évaluation clinique afin de déterminer le traitement le plus adapté à votre situation.</p>
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
