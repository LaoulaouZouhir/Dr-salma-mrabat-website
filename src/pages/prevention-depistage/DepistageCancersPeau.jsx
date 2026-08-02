import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function DepistageCancersPeau() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Dépistage des Cancers de la Peau',
    description: 'Bilan de dépistage précoce du mélanome et des carcinomes à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Dépistage des cancers de la peau à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise le dépistage des cancers de la peau grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué."
        keywords="Dépistage cancer peau Meknès, Mélanome Meknès, Carcinome basocellulaire Meknès, Examen grains de beauté Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/depistage-cancers-peau"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: 'Dépistage Cancers de la Peau' },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Dépistage des cancers de la peau à Meknès</h1>
          <p className="subpage-subtitle">
            Le dépistage des cancers de la peau permet d'identifier précocement certaines lésions suspectes avant qu'elles n'évoluent. Un diagnostic précoce garantit une prise en charge rapide et efficace.
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
                    src="/images/pdf_extracted/page_126_img_1.jpeg"
                    alt="Infographie : Qui est le plus concerné par le dépistage des cancers de la peau ? (Peau claire, Nombreux grains de beauté, Antécédents familiaux, Coups de soleil)"
                    caption="Facteurs de risque nécessitant un dépistage cutané régulier."
                  />
                </div>

                <h2>Pourquoi réaliser un dépistage ?</h2>
                <p>
                  Les cancers de la peau (mélanomes, carcinomes basocellulaires et spinocellulaires) figurent parmi les cancers les plus fréquents mais aussi les plus guérissables lorsqu'ils sont détectés à un stade débutant.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_128_img_1.jpeg"
                    alt="Infographie : La règle ABCDE du Mélanome (Asymétrie, Bords, Couleurs, Diamètre, Évolution)"
                    caption="La règle ABCDE pour repérer les lésions pigmentées suspectes."
                  />
                </div>

                <h2>Profils particulièrement concernés</h2>
                <ul className="check-list">
                  <li>Personnes ayant de nombreux grains de beauté (&gt;50 nevi)</li>
                  <li>Peaux claires, yeux clairs et cheveux blonds ou roux (phototypes I et II)</li>
                  <li>Antécédents personnels ou familiaux de mélanome ou carcinome</li>
                  <li>Exposition solaire fréquente ou antécédents de coups de soleil sévères dans l'enfance</li>
                </ul>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Réservez votre bilan de dépistage avec le Dr Samia Mrabat à Meknès.</p>
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
