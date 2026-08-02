import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function ControleGrainsBeaute() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Contrôle des Grains de Beauté',
    description: 'Dermoscopie et examen complet des grains de beauté à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Contrôle des grains de beauté à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise le contrôle des grains de beauté grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué."
        keywords="Contrôle grains de beauté Meknès, Surveillance nevi Meknès, Dermoscopie Meknès, Examen dermatologue Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/controle-grains-beaute"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: 'Contrôle des Grains de Beauté' },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Contrôle des grains de beauté à Meknès</h1>
          <p className="subpage-subtitle">
            Les grains de beauté (naevus) sont très fréquents et généralement bénins. Toutefois, une surveillance dermatologique annuelle permet de contrôler leur évolution et de détecter toute atypie.
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
                    src="/images/pdf_extracted/page_131_img_1.jpeg"
                    alt="Photo médicale : Examen au dermatoscope d'un grain de beauté sur le bras par le dermatologue"
                    caption="Dermoscopie numérique : analyse détaillée des structures pigmentaires invisibles à l'œil nu."
                  />
                </div>

                <h2>Pourquoi faire contrôler ses grains de beauté ?</h2>
                <ul className="bullet-list">
                  <li>Surveiller l'évolution des nevi au fil des années.</li>
                  <li>Identifier précocement des lésions atypiques ou suspectes.</li>
                  <li>Distinguer les taches bénignes des lésions nécessitant une exérèse préventive.</li>
                  <li>Bénéficier d’un suivi personnalisé selon votre phototype.</li>
                </ul>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_132_img_1.jpeg"
                    alt="Infographie : Les personnes les plus concernées par le contrôle dermatologique des nevi"
                    caption="Publics prioritaires pour un contrôle dermatologique annuel des grains de beauté."
                  />
                </div>

                <h2>Quand consulter rapidement ?</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_134_img_1.jpeg"
                    alt="Infographie : Quand consulter ? Les signes qui doivent vous alerter (Changement taille, couleur, asymétrie, saignement, démangeaison)"
                    caption="Signes d'alerte sur un grain de beauté."
                  />
                </div>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Prenez rendez-vous pour faire contrôler vos grains de beauté à Meknès.</p>
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
