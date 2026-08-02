import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function ConseilsPreventionDermatologique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Conseils de Prévention Dermatologique',
    description: 'Guide et recommandations de prévention au quotidien pour la santé de la peau par le Dr Samia Mrabat à Meknès.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Conseils de prévention dermatologique à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne avec des conseils de prévention pour préserver la santé de votre peau et détecter précocement certaines maladies cutanées."
        keywords="Conseils dermatologique Meknès, Prévention santé peau Meknès, Routine soin dermatologue Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/conseils-prevention-dermatologique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: 'Conseils de Prévention' },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION AU QUOTIDIEN</span>
          <h1 className="subpage-title">Conseils de prévention dermatologique à Meknès</h1>
          <p className="subpage-subtitle">
            Préserver la santé de sa peau repose sur des gestes simples réalisés au quotidien. Une bonne prévention permet de limiter certains facteurs de risque et de protéger le capital santé cutané.
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
                    src="/images/pdf_extracted/page_150_img_1.jpeg"
                    alt="Infographie : Les bons réflexes pour une peau saine au quotidien (1. Protection solaire, 2. Hydratation quotidienne, 3. Soins adaptés, 4. Auto-surveillance, 5. Consultation si changement, 6. Suivi)"
                    caption="6 gestes essentiels pour préserver durablement la santé de la peau."
                  />
                </div>

                <h2>Les gestes essentiels pour prendre soin de sa peau</h2>
                <ul className="bullet-list">
                  <li>Protéger quotidiennement sa peau contre les rayons ultraviolets.</li>
                  <li>Hydrater régulièrement l'épiderme avec des soins hypoallergéniques.</li>
                  <li>Utiliser des produits cosmétiques doux et adaptés à son phototype.</li>
                  <li>Éviter de manipuler ou gratter les boutons et lésions cutanées.</li>
                  <li>Effectuer une auto-surveillance visuelle de ses grains de beauté deux fois par an.</li>
                </ul>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_152_img_1.jpeg"
                    alt="Infographie 4 étapes : Les étapes de votre prévention (Observation, Consultation, Examen & Dermoscopie, Conseils personnalisés)"
                    caption="Parcours de prévention et suivi personnalisé au cabinet."
                  />
                </div>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat pour des conseils de soin sur-mesure à Meknès.</p>
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
