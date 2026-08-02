import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function PetiteChirurgieDermatologique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Petite Chirurgie Dermatologique',
    description: 'Actes de petite chirurgie cutanée en ambulatoire sous anesthésie locale à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Petite chirurgie dermatologique à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise différents actes de petite chirurgie dermatologique sous anesthésie locale, dans des conditions de sécurité et de confort adaptées."
        keywords="Petite chirurgie dermatologique Meknès, Ablation tumeur bénigne Meknès, Exérèse lésion cutanée Meknès"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/petite-chirurgie-dermatologique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: 'Petite Chirurgie Dermatologique' },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Petite chirurgie dermatologique à Meknès</h1>
          <p className="subpage-subtitle">
            La petite chirurgie dermatologique regroupe différents actes réalisés directement au cabinet sous anesthésie locale pour traiter ou prélever des lésions cutanées gênantes ou suspectes.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              
              <article className="medical-article">
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_121_img_1.jpeg"
                    alt="Photo médicale : Plateau chirurgical stérile pour petite chirurgie dermatologique au cabinet"
                    caption="Plateau opératoire stérile pour interventions ambulatoires sous anesthésie locale."
                  />
                </div>

                <h2>Quels actes peuvent être réalisés ?</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_122_img_1.jpeg"
                    alt="Infographie : Les interventions les plus fréquentes en petite chirurgie (Kyste, Lipome, Grain de beauté, Biopsie, Ongle incarné, Lésion bénigne)"
                    caption="6 actes fréquents de petite chirurgie dermatologique pratiqués au cabinet."
                  />
                </div>

                <ul className="check-list">
                  <li>Exérèse de kystes sébacés et lipomes sous-cutanés</li>
                  <li>Ablation de grains de beauté atypiques ou irrités</li>
                  <li>Biopsies cutanées à visée diagnostique</li>
                  <li>Chirurgie de l'ongle incarné récidivant</li>
                  <li>Exérèse de fibromes, kératoses séborrhéiques et verrues volumineuses</li>
                </ul>

                <h2>Après l'intervention</h2>
                <p>
                  Soins locaux simples avec pansement stérile remis au cabinet. Le Dr Samia Mrabat vous remet des consignes claires concernant la réfection des pansements, l'hygiène et la date de retrait des fils le cas échéant.
                </p>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat pour faire évaluer une lésion cutanée à Meknès.</p>
                <a href="tel:0535524067" className="side-btn-call">📞 05 35 52 40 67</a>
                <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="side-btn-wa">💬 WhatsApp direct</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
