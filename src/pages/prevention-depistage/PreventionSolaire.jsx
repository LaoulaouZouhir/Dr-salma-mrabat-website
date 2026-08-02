import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function PreventionSolaire() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Prévention et Protection Solaire',
    description: 'Conseils dermatologiques de protection solaire à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Prévention solaire à Meknès | Conseils dermatologiques | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, vous conseille sur les bonnes pratiques de protection solaire afin de préserver votre peau et de limiter les effets des rayons UV."
        keywords="Prévention solaire Meknès, Protection UV Meknès, Crème solaire SPF50 Meknès, Éviter vieillissement solaire Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/prevention-solaire"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: 'Prévention Solaire' },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Prévention solaire à Meknès</h1>
          <p className="subpage-subtitle">
            L'exposition excessive aux rayons ultraviolets (UV) est le premier facteur de risque du vieillissement cutané prématuré, de l'apparition de taches et des cancers de la peau.
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
                    src="/images/pdf_extracted/page_138_img_1.jpeg"
                    alt="Schéma 3D comparatif : L'impact des rayons UV sur la peau (Peau protégée barrière forte vs Peau exposée dommages UVA/UVB)"
                    caption="Pénétration des UVA (vieillissement cutané) et UVB (coups de soleil &amp; dommages cellulaires) dans le derme."
                  />
                </div>

                <h2>Quels sont les effets des rayons UV sur la peau ?</h2>
                <ul className="bullet-list">
                  <li><strong>UVA (Ondes longues) :</strong> pénètrent profondément, dégradent le collagène et provoquent le vieillissement prématuré et les rides.</li>
                  <li><strong>UVB (Ondes moyennes) :</strong> responsables des coups de soleil, des brûlures et des mutations de l'ADN cellulaire.</li>
                  <li>Apparition de taches pigmentaires solaires (lentigos) et perte d'élasticité.</li>
                </ul>

                <h2>Les bons réflexes à adopter au quotidien</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_139_img_1.jpeg"
                    alt="Infographie : Les bons réflexes à adopter (1. Appliquer crème SPF50+, 2. Porter un chapeau, 3. Lunettes de soleil, 4. Rechercher l'ombre, 5. Éviter 11h-16h, 6. Protéger les enfants)"
                    caption="6 règles d'or pour une protection solaire efficace."
                  />
                </div>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat pour des conseils solaires personnalisés.</p>
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
