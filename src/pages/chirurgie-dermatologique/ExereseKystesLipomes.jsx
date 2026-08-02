import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function ExereseKystesLipomes() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Exérèse des Kystes et des Lipomes',
    description: 'Chirurgie ambulatoire d’exérèse de kystes sébacés et lipomes sous anesthésie locale à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Exérèse des kystes et lipomes à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise l'exérèse des kystes et des lipomes lorsque leur prise en charge est indiquée, après une évaluation clinique personnalisée."
        keywords="Exérèse kyste Meknès, Ablation lipome Meknès, Chirurgie kyste sébacé Meknès, Boule sous la peau Meknès"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/exerese-kystes-lipomes"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: 'Exérèse des Kystes et Lipomes' },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Exérèse des kystes et des lipomes à Meknès</h1>
          <p className="subpage-subtitle">
            Les kystes et les lipomes sont des lésions bénignes fréquentes de la peau et des tissus sous-cutanés. Lorsqu'ils deviennent volumineux, inflammatoires ou douloureux, une ablation chirurgicale sous anesthésie locale est préconisée.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              
              <article className="medical-article">
                <h2>Qu'est-ce qu'un kyste ou un lipome ?</h2>
                <p>
                  <strong>Un kyste sébacé ou épidermique</strong> est une poche fermée située sous la peau contenant du sébum et de la kératine. Il se présente comme une boule sous-cutanée parfois surmontée d'un point central.
                </p>
                <p>
                  <strong>Un lipome</strong> est une masse bénigne constituée de cellules graisseuses. Il est généralement souple, mobile et indolore sous les doigts.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_100_img_1.jpeg"
                    alt="Schéma comparatif 3D : Comprendre les différences (Kyste Sébacé vs Lipome)"
                    caption="Différences anatomiques entre un kyste sébacé (poche reliée au follicule) et un lipome (amas de graisse sous-cutané)."
                  />
                </div>

                <h2>Quand une intervention est-elle indiquée ?</h2>
                <ul className="check-list">
                  <li>Le kyste ou le lipome augmente progressivement de volume</li>
                  <li>La boule devient douloureuse, rouge ou récurremment infectée</li>
                  <li>La masse entraîne une gêne esthétique ou fonctionnelle au niveau des vêtements</li>
                  <li>Une analyse anatomopathologique de confirmation est recommandée</li>
                </ul>

                <h2>Comment se déroule l'intervention ?</h2>
                <p>
                  L'intervention est réalisée au cabinet sous anesthésie locale strict. Le Dr Samia Mrabat incise délicatement la peau, dissèque la coque du kyste ou la capsule du lipome pour éviter les récidives, puis referme la plaie avec des sutures esthétiques précises. Des consignes de pansement et de soins locaux vous sont remises.
                </p>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Faites évaluer une boule sous la peau par le Dr Samia Mrabat à Meknès.</p>
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
