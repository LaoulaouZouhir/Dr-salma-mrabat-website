import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function PreventionSolaire() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Prévention solaire à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, vous conseille sur les bonnes pratiques de protection solaire afin de préserver votre peau et de limiter les effets des rayons UV.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Prévention solaire et conseils à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, vous conseille sur les bonnes pratiques de protection solaire afin de préserver votre peau et de limiter les effets des rayons UV."
        keywords="Prévention solaire Meknès, Protection UV Meknès, Phototype peau Meknès, Crème solaire Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/prevention-solaire"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Prévention solaire" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Prévention solaire à Meknès</h1>
          <div className="subpage-subtitle">
            <p>L'exposition au soleil est indispensable à certains mécanismes naturels de l'organisme, mais une exposition excessive aux rayons ultraviolets (UV) peut favoriser le vieillissement prématuré de la peau, l'apparition de taches pigmentaires et augmenter le risque de cancers cutanés.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne dans la prévention solaire en vous apportant des conseils adaptés à votre peau, à votre âge et à votre mode de vie.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <div className="diagram-block hero-diagram">
                  <LightboxImage
                    src="/images/pdf_extracted/page_138_img_1.jpeg"
                    alt="Infographie : Les effets des rayons UVA et UVB sur la peau"
                    caption="Impact des ultraviolets sur le vieillissement prématuré et l'ADN cellulaire."
                  />
                </div>

                <h2>Pourquoi protéger sa peau du soleil ?</h2>
                <p>Les rayons UV agissent progressivement sur la peau, même lorsque les effets ne sont pas immédiatement visibles.</p>
                <p>Une protection solaire adaptée permet notamment de :</p>
                <ul className="check-list">
                  <li>Limiter les coups de soleil</li>
                  <li>Réduire le risque de vieillissement cutané prématuré</li>
                  <li>Diminuer l'apparition de certaines taches pigmentaires</li>
                  <li>Contribuer à la prévention de certains cancers de la peau</li>
                  <li>Préserver la qualité et la santé de la peau</li>
                </ul>

                <h2>Quels sont les effets des rayons UV sur la peau ?</h2>
                <p>Une exposition répétée au soleil peut entraîner :</p>
                <ul className="check-list">
                  <li>Des coups de soleil</li>
                  <li>Un vieillissement prématuré de la peau</li>
                  <li>Une perte d'élasticité</li>
                  <li>L'apparition de rides</li>
                  <li>Des taches pigmentaires</li>
                  <li>Des lésions précancéreuses ou cancéreuses chez certaines personnes</li>
                </ul>
                <p>Les effets des UV s'accumulent progressivement au fil des années.</p>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_139_img_1.jpeg"
                    alt="Infographie : Les bonnes pratiques de protection solaire"
                    caption="Règles d'exposition et réapplication des écrans solaires à haut indice."
                  />
                </div>

                <h2>Les bons réflexes à adopter</h2>
                <p>Pour protéger efficacement votre peau, il est recommandé de :</p>
                <ul className="check-list">
                  <li>Appliquer une protection solaire adaptée à votre phototype</li>
                  <li>Renouveler l'application régulièrement, notamment après la baignade ou une transpiration importante</li>
                  <li>Porter un chapeau, des lunettes de soleil et des vêtements couvrants lorsque cela est possible</li>
                  <li>Éviter une exposition prolongée pendant les heures où les UV sont les plus intenses</li>
                  <li>Protéger particulièrement les enfants et les peaux sensibles</li>
                </ul>

                <h2>Les idées reçues sur la protection solaire</h2>
                <p>Certaines croyances sont fausses. Par exemple :</p>
                <ul className="check-list">
                  <li>Une peau bronzée reste sensible aux rayons UV</li>
                  <li>Les nuages ne bloquent pas tous les UV</li>
                  <li>Une protection solaire ne permet pas de s'exposer sans limite</li>
                  <li>Les UV sont présents toute l'année, même en dehors de l'été</li>
                </ul>
                <p>Adopter les bons réflexes reste essentiel tout au long de l'année.</p>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Le dermatologue peut évaluer votre niveau de risque, examiner votre peau et vous conseiller sur les mesures de prévention les plus adaptées.</p>
                <p>En cas de lésions suspectes ou de facteurs de risque particuliers, un suivi dermatologique peut être recommandé.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour des conseils personnalisés sur la protection solaire.</p>
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
