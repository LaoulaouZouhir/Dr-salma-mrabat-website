import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function ChuteCheveux() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Prise en charge de la chute de cheveux et maladies du cuir chevelu',
    description: 'Bilan alopécie et traitements du cuir chevelu à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Chute de cheveux et maladies du cuir chevelu à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge la chute de cheveux, les maladies du cuir chevelu et les différentes formes d'alopécie chez l'adulte et l'enfant."
        keywords="Chute de cheveux Meknès, Alopécie Meknès, Traitement pelade Meknès, Dermatite séborrhéique cuir chevelu Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: 'Chute de Cheveux' },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Chute de cheveux et maladies du cuir chevelu à Meknès</h1>
          <p className="subpage-subtitle">
            Une chute de cheveux importante, des démangeaisons persistantes ou l'apparition de plaques nécessitent un diagnostic dermatologique précis afin d'identifier leur cause et de proposer un protocole adapté.
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
                    src="/images/pdf_extracted/page_47_img_1.jpeg"
                    alt="Infographie médicale : Comprendre les principales causes de la chute de cheveux (Alopécie androgénétique, Pelade, Dermatite séborrhéique)"
                    caption="Principales origines de la perte de cheveux chez l'homme et la femme."
                  />
                </div>

                <h2>Le cycle de vie du cheveu</h2>
                <p>
                  Chaque cheveu évolue selon un cycle naturel comprenant 3 phases successives : la phase anagène (croissance active 2 à 6 ans), la phase catagène (transition 2 à 3 semaines) et la phase télogène (chute et renouvellement 3 à 4 mois). La perte quotidienne de 50 à 100 cheveux est considérée comme normale.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_48_img_1.jpeg"
                    alt="Infographie 3D : Le cycle de vie du cheveu en 3 phases naturelles et successives"
                    caption="Les 3 phases du cycle folliculaire : Anagène, Catagène et Télogène."
                  />
                </div>

                <h2>Les principales causes de la chute de cheveux</h2>
                <ul className="bullet-list">
                  <li><strong>Alopécie androgénétique :</strong> affinement progressif d'origine hormonale et héréditaire.</li>
                  <li><strong>Effluvium télogène :</strong> chute réactionnelle abondante après un stress, une grossesse ou une maladie.</li>
                  <li><strong>Pelade (Alopecia areata) :</strong> maladie auto-immune provoquant des plaques circulaires sans cheveux.</li>
                  <li><strong>Carences nutritionnelles :</strong> manque de fer, zinc ou vitamines essentielles.</li>
                  <li><strong>Dermatite séborrhéique &amp; psoriasis du cuir chevelu :</strong> inflammation provoquant des pellicules épaisses et des démangeaisons.</li>
                </ul>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_49_img_1.jpeg"
                    alt="Infographie : Les 4 affections fréquentes du cuir chevelu (Dermatite séborrhéique, Psoriasis, Folliculite, Mycose)"
                    caption="Pathologies fréquentes touchant la santé du cuir chevelu."
                  />
                </div>

                <h2>Traitements proposés au cabinet</h2>
                <p>
                  Après examen trichologique approfondi par le Dr Samia Mrabat, le traitement personnalisé peut associer des traitements locaux ou oraux prescrits, des soins stimulants spécifiques, la mésothérapie capillaire ou la préparation PRP (Plasma Riche en Plaquettes).
                </p>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat pour un bilan capillaire à Meknès.</p>
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
