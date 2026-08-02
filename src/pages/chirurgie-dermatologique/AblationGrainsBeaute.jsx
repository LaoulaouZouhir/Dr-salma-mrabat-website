import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function AblationGrainsBeaute() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ablation des Grains de Beauté et Lésions Cutanées',
    description: 'Ablation médicale et chirurgicale des grains de beauté et lésions atypiques à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Ablation des grains de beauté à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise l'évaluation et l'ablation des grains de beauté et de certaines lésions cutanées lorsque cela est médicalement indiqué."
        keywords="Ablation grain de beauté Meknès, Naevus atypique Meknès, Chirurgie grain de beauté Meknès, Exérèse lésion cutanée Meknès"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/ablation-grains-beaute-lesions-cutanees"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: 'Ablation Grains de Beauté' },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Ablation des grains de beauté et des lésions cutanées à Meknès</h1>
          <p className="subpage-subtitle">
            Les grains de beauté (naevus) et certaines lésions cutanées sont très fréquents. La plupart sont bénins, mais certaines lésions nécessitent une surveillance par dermoscopie ou une ablation préventive.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              
              <article className="medical-article">
                <h2>Quand l'ablation d'un grain de beauté est-elle indiquée ?</h2>
                <p>
                  Pour repérer les lésions suspectes nécessitant un examen ou une ablation, les dermatologues s'appuient sur la **règle ABCDE du mélanome** :
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_105_img_1.jpeg"
                    alt="Infographie : Les signes à surveiller - Règle ABCDE du Mélanome (Asymétrie, Bords, Couleurs, Diamètre, Évolution)"
                    caption="La règle ABCDE pour repérer les grains de beauté atypiques nécessitant un contrôle dermatologique."
                  />
                </div>

                <ul className="check-list">
                  <li><strong>A - Asymétrie :</strong> la moitié de la lésion ne correspond pas à l'autre.</li>
                  <li><strong>B - Bords irréguliers :</strong> contours découpés, dentelés ou mal définis.</li>
                  <li><strong>C - Couleurs multiples :</strong> présence de plusieurs teintes (brun, noir, rouge, bleu).</li>
                  <li><strong>D - Diamètre :</strong> taille supérieure à 6 mm.</li>
                  <li><strong>E - Évolution :</strong> tout changement rapide de taille, forme, couleur ou relief.</li>
                  <li>Grain de beauté qui saigne, démange ou devient douloureux.</li>
                </ul>

                <h2>Déroulement de l'intervention et analyse</h2>
                <p>
                  L'ablation est réalisée sous anesthésie locale au cabinet. La lésion est retirée proprement avec une marge de sécurité. Selon sa nature, la pièce opératoire est envoyée au laboratoire d'anatomopathologie pour un examen histologique complet certifiant la bénignité.
                </p>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Faites examiner un grain de beauté suspect par le Dr Samia Mrabat à Meknès.</p>
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
