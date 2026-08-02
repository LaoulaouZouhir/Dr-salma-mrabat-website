import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function AllergiesInfections() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Diagnostic des Allergies et Infections Cutanées',
    description: 'Traitement des allergies, mycoses, verrues et infections cutanées à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Allergies et infections de la peau à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, diagnostique et traite les allergies cutanées, les infections de la peau (mycoses, verrues, zona) chez l'adulte et l'enfant."
        keywords="Allergie cutanée Meknès, Traitement mycose Meknès, Verrues zona Meknès, Urticaire Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/allergies-infections-maladies-peau"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: 'Allergies & Infections' },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Allergies, infections et maladies de la peau à Meknès</h1>
          <p className="subpage-subtitle">
            La peau constitue la première barrière de protection. Lorsqu'elle est agressée par des allergènes, bactéries, virus ou champignons, un diagnostic dermatologique rigoureux permet de soulager rapidement les symptômes.
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
                    src="/images/pdf_extracted/page_54_img_1.jpeg"
                    alt="Infographie médicale : Comprendre les principales affections dermatologiques (Allergie cutanée, Mycose, Infection bactérienne, Lésion virale)"
                    caption="Vue d'ensemble des réactions allergiques et infectieuses cutanées."
                  />
                </div>

                <h2>Qu'est-ce qu'une allergie cutanée ?</h2>
                <p>
                  Une allergie cutanée est une réaction excessive du système immunitaire face à une substance normalement inoffensive (cosmétiques, détergents, métaux, médicaments, plantes). Elle se manifeste par des urticaires, des plaques rouges et d'intenses démangeaisons.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_55_img_1.jpeg"
                    alt="Infographie 3D : Mécanisme de la réaction allergique cutanée (Peau saine vs Réaction allergique)"
                    caption="Étapes de la réaction allergique : pénétration de l'allergène, libération d'histamine et inflammation."
                  />
                </div>

                <h2>Les principales infections de la peau</h2>
                <ul className="bullet-list">
                  <li><strong>Infections fongiques (Mycoses) :</strong> champignons touchant la peau, les plis ou les ongles.</li>
                  <li><strong>Infections virales :</strong> verrues vulgaires ou plantaires, herpes simplex, zona, molluscum contagiosum.</li>
                  <li><strong>Infections bactériennes :</strong> impétigo, folliculite, érysipèle nécessitant une antibiothérapie ciblée.</li>
                </ul>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_57_img_1.jpeg"
                    alt="Infographie : Reconnaître les signes d'alerte (Douleur, Suintement, Changement d'aspect, Cloques)"
                    caption="Signes cliniques nécessitant une consultation rapide."
                  />
                </div>

                <h2>Quand consulter rapidement ?</h2>
                <ul className="check-list">
                  <li>Rougeurs ou éruptions cutanées d'apparition soudaine</li>
                  <li>Démangeaisons intenses ou sensations de brûlure</li>
                  <li>Lésions avec suintement, croûtes ou pu</li>
                  <li>Plaques qui s'étendent ou présence de fièvre</li>
                </ul>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat à Meknès pour un examen cutané.</p>
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
