import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function MicroneedlingMesotherapie() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Microneedling et Mésothérapie',
    description: 'Soins de mésothérapie et microneedling pour la qualité et la fermeté de la peau à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper aesthetic-subpage">
      <SEO
        title="Microneedling et mésothérapie à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise des séances de microneedling et de mésothérapie adaptées pour améliorer la qualité de la peau, la texture cutanée et réhydrater le visage."
        keywords="Microneedling Meknès, Mésothérapie Meknès, Hydratation peau Meknès, Stimulation collagène Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/microneedling-mesotherapie"
        jsonLd={schemaData}
      />

      <section className="subpage-hero aesthetic-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: 'Microneedling & Mésothérapie' },
            ]}
          />
          <span className="subpage-badge gold-badge">RÉGÉNÉRATION CUTANÉE</span>
          <h1 className="subpage-title">Microneedling et mésothérapie à Meknès</h1>
          <p className="subpage-subtitle">
            Le microneedling et la mésothérapie sont deux techniques médico-esthétiques complémentaires visant à stimuler les mécanismes naturels de régénération cutanée et réhydrater la peau en profondeur.
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
                    src="/images/pdf_extracted/page_81_img_1.jpeg"
                    alt="Infographie : Microneedling et Mésothérapie (Éclat du teint, Grain de peau, Hydratation, Ridules, Pores dilatés, Cicatrices d'acné)"
                    caption="Bénéfices ciblés du microneedling et de la mésothérapie sur la qualité cutanée."
                  />
                </div>

                <h2>Qu'est-ce que le microneedling et la mésothérapie ?</h2>
                <p>
                  <strong>Le microneedling</strong> consiste à réaliser de très fines micro-perforations contrôlées à la surface de la peau à l'aide d'un dispositif médical stérile à micro-aiguilles. Ce processus stimule les fibroblastes et relance la production de collagène et d'élastine.
                </p>
                <p>
                  <strong>La mésothérapie</strong> (Mésolift) consiste à administrer de faibles quantités d'un cocktail nutritif (acide hyaluronique non réticulé, vitamines, minéraux, antioxydants) directement dans les couches superficielles du derme.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_83_img_1.jpeg"
                    alt="Infographie 4 étapes : Comment se déroule votre séance (1. Analyse, 2. Préparation, 3. Réalisation, 4. Conseils après séance)"
                    caption="Déroulement d'une séance de mésothérapie ou microneedling au cabinet."
                  />
                </div>

                <h2>Indications principales</h2>
                <ul className="check-list">
                  <li>Amélioration globale de la fermeté et de la texture de la peau</li>
                  <li>Resserrement des pores dilatés et lissage du grain de peau</li>
                  <li>Atténuation des cicatrices d'acné superficielles</li>
                  <li>Hydratation intense des peaux sèches, ternes ou déshydratées</li>
                  <li>Atténuation des ridules du visage, du cou et du décolleté</li>
                </ul>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card aesthetic-sidebar-card">
                <h3>Rendez-vous Mésothérapie</h3>
                <p>Prenez rendez-vous avec le Dr Samia Mrabat à Meknès.</p>
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
