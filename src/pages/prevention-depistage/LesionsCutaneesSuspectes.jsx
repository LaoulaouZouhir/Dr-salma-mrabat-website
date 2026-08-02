import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function LesionsCutaneesSuspectes() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Évaluation des Lésions Cutanées Suspectes',
    description: 'Examen et diagnostic des lésions cutanées inhabituelles à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Lésions cutanées suspectes à Meknès | Quand consulter ? | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, évalue les lésions cutanées suspectes afin d'établir un diagnostic précis et de proposer une prise en charge adaptée."
        keywords="Lésion cutanée suspecte Meknès, Tache nouvelle peau Meknès, Examen bouton qui saigne Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/lesions-cutanees-suspectes"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: 'Lésions Cutanées Suspectes' },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Lésions cutanées suspectes : quand consulter un dermatologue ?</h1>
          <p className="subpage-subtitle">
            Certaines lésions de la peau peuvent évoluer au fil du temps. Dans la majorité des cas, elles sont bénignes, mais un examen clinique et dermoscopique permet d'écarter toute suspicion.
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
                    src="/images/pdf_extracted/page_144_img_1.jpeg"
                    alt="Infographie : Reconnaître les 7 signes à ne pas négliger (Augmentation de taille, Changement de couleur, Bords irréguliers, Saignement, Plaie persistante, Démangeaisons, Douleur)"
                    caption="Les 7 signes cliniques justifiant une consultation dermatologique."
                  />
                </div>

                <h2>Quels signes doivent attirer votre attention ?</h2>
                <ul className="check-list">
                  <li>Une nouvelle tache pigmentée qui apparaît à l'âge adulte</li>
                  <li>Une lésion cutanée qui augmente progressivement de taille</li>
                  <li>Une plaie ou une croûte qui ne cicatrise pas au bout de 3 semaines</li>
                  <li>Une lésion qui saigne spontanément au frottement léger</li>
                  <li>Une modification de couleur, de contours ou de relief d'un grain de beauté</li>
                  <li>Une douleur ou des démangeaisons persistantes localisées</li>
                </ul>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_145_img_1.jpeg"
                    alt="Infographie 4 étapes : Les étapes de votre prise en charge (1. Consultation, 2. Examen clinique & Dermoscopie, 3. Surveillance/Biopsie/Exérèse, 4. Explication)"
                    caption="Protocole d'évaluation des lésions cutanées au cabinet du Dr Samia Mrabat."
                  />
                </div>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat à Meknès pour un examen clinique.</p>
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
