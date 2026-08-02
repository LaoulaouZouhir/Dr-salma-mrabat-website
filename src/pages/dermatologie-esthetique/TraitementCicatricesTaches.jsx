import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function TraitementCicatricesTaches() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Traitement des Cicatrices et des Taches Pigmentaires',
    description: 'Prise en charge personnalisée du mélasma, des cicatrices d’acné et des taches solaires à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper aesthetic-subpage">
      <SEO
        title="Traitement des cicatrices et des taches pigmentaires à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, propose une prise en charge personnalisée des cicatrices d'acné, du mélasma et des taches pigmentaires selon votre phototype."
        keywords="Traitement taches pigmentaires Meknès, Mélasma Meknès, Cicatrices acné Meknès, Taches solaires Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires"
        jsonLd={schemaData}
      />

      <section className="subpage-hero aesthetic-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: 'Cicatrices & Taches Pigmentaires' },
            ]}
          />
          <span className="subpage-badge gold-badge">HOMOGÉNÉITÉ DU TEINT</span>
          <h1 className="subpage-title">Traitement des cicatrices et des taches pigmentaires à Meknès</h1>
          <p className="subpage-subtitle">
            Les cicatrices d'acné et les taches pigmentaires (mélasma, lentigos) nécessitent une évaluation médicale précise afin de sélectionner le protocole le plus adapté sans risquer de rebond pigmentaire.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              
              <article className="medical-article aesthetic-article">
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_86_img_1.jpeg"
                    alt="Infographie : Cicatrices et Taches Pigmentaires (Cicatrices d'acné, Teint irrégulier, Taches pigmentaires, Texture cutanée)"
                    caption="Principales irrégularités pigmentaires et cicatricielles traitées au cabinet."
                  />
                </div>

                <h2>Pourquoi les taches pigmentaires apparaissent-elles ?</h2>
                <p>
                  Les taches brunes s'expliquent par une accumulation excessive de mélanine dermo-épidermique déclenchée par les UV solaires, les poussées d'inflammation cutanée (hyperpigmentation post-inflammatoire), la grossesse ou la contraception orale (mélasma) et le vieillissement cutané.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_87_img_1.jpeg"
                    alt="Schéma 3D explicatif : Pourquoi des taches pigmentaires apparaissent ? (Peau uniforme vs Hyperpigmentation)"
                    caption="Mécanisme de l'hyperpigmentation : accumulation de mélanine dans l'épiderme."
                  />
                </div>

                <h2>Processus de renouvellement progressif de la peau</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_89_img_1.jpeg"
                    alt="Infographie 3 étapes : Le renouvellement progressif de la peau (1. État initial, 2. Renouvellement stimulé, 3. Peau améliorée)"
                    caption="Évolution progressive de la qualité de la peau et atténuation des taches."
                  />
                </div>

                <h2>Traitements proposés</h2>
                <ul className="bullet-list">
                  <li><strong>Peelings dépigmentants ciblés :</strong> exfoliation douce pour éliminer les pigments de surface.</li>
                  <li><strong>Microneedling &amp; principes actifs dépigmentants :</strong> pénétration ciblée d'actifs inhibiteurs de tyrosinase.</li>
                  <li><strong>Traitements topiques prescrits &amp; photoprotection :</strong> routine quotidienne rigoureuse pour bloquer les récidives.</li>
                </ul>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card aesthetic-sidebar-card">
                <h3>Rendez-vous Dépigmentation</h3>
                <p>Consultez le Dr Samia Mrabat à Meknès pour faire évaluer vos taches.</p>
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
