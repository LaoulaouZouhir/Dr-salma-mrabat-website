import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function BiopsiesCutanees() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Biopsie Cutanée',
    description: 'Prélèvement cutané à visée diagnostique réalisé sous anesthésie locale à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Biopsies cutanées à Meknès | Diagnostic dermatologique | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise des biopsies cutanées lorsque cela est indiqué afin de confirmer un diagnostic et d'orienter la prise en charge adaptée."
        keywords="Biopsie cutanée Meknès, Analyse peau laboratoire Meknès, Prélèvement dermatologique Meknès"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/biopsies-cutanees"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: 'Biopsies Cutanées' },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Biopsies cutanées à Meknès</h1>
          <p className="subpage-subtitle">
            Une biopsie cutanée est un examen médical consistant à prélever un petit fragment de peau afin de l'analyser en laboratoire pour obtenir un diagnostic certifié.
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
                    src="/images/pdf_extracted/page_110_img_1.jpeg"
                    alt="Schéma explicatif 3D : Comprendre le prélèvement cutané (1. Identification lésion, 2. Prélèvement sous anesthésie, 3. Analyse au laboratoire)"
                    caption="Étapes de réalisation d'une biopsie cutanée."
                  />
                </div>

                <h2>Qu'est-ce qu'une biopsie cutanée ?</h2>
                <p>
                  Lorsque l'examen visuel et la dermoscopie ne suffisent pas à déterminer la nature exacte d'une lésion ou d'une maladie inflammatoire, le prélèvement d'un échantillon millimétrique permet au médecin anatomopathologiste d'examiner les cellules au microscope.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_111_img_1.jpeg"
                    alt="Infographie 4 étapes : Du prélèvement au diagnostic (Consultation, Biopsie, Analyse, Explication des résultats)"
                    caption="Parcours sécurisé du prélèvement jusqu'aux résultats."
                  />
                </div>

                <h2>Dans quels cas une biopsie est-elle proposée ?</h2>
                <ul className="check-list">
                  <li>Confirmer le diagnostic d'une maladie dermatologique atypique</li>
                  <li>Analyser une lésion cutanée suspecte ou inhabituelle</li>
                  <li>Explorer une dermatose résistante aux traitements habituels</li>
                  <li>Évaluer certaines maladies auto-immunes de la peau</li>
                  <li>Préciser la nature d'une tumeur cutanée avant décision thérapeutique</li>
                </ul>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat à Meknès pour un examen dermatologique.</p>
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
