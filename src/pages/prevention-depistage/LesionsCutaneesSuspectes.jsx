import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function LesionsCutaneesSuspectes() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Lésions cutanées suspectes : quand consulter un dermatologue ?",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, évalue les lésions cutanées suspectes afin d'établir un diagnostic précis et de proposer une prise en charge adaptée lorsque cela est nécessaire.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Lésions cutanées suspectes à Meknès | Quand consulter ? | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, évalue les lésions cutanées suspectes afin d'établir un diagnostic précis et de proposer une prise en charge adaptée lorsque cela est nécessaire."
        keywords="Lésion suspecte Meknès, Bouton qui ne guérit pas Meknès, Tache croûteuse Meknès, Dermatologue Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/lesions-cutanees-suspectes"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Lésions cutanées suspectes" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Lésions cutanées suspectes : quand consulter un dermatologue ?</h1>
          <div className="subpage-subtitle">
            <p>Certaines lésions de la peau peuvent évoluer au fil du temps ou présenter des caractéristiques nécessitant un avis médical. Dans la majorité des cas, elles sont bénignes, mais certaines doivent être examinées afin d'écarter une maladie cutanée ou un cancer de la peau.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un examen clinique complet de votre peau afin d'identifier la nature de la lésion et de déterminer si une surveillance, des examens complémentaires ou un traitement sont nécessaires.</p>
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
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour une évaluation de vos lésions cutanées.</p>
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
