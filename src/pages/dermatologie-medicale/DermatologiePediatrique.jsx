import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function DermatologiePediatrique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Consultation en Dermatologie Pédiatrique',
    description: 'Soins de la peau chez le nourrisson, l’enfant et l’adolescent à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Dermatologie pédiatrique à Meknès | Dermatologue enfant | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les maladies de la peau du nourrisson, de l'enfant et de l'adolescent : eczéma atopique, verrues, molluscum."
        keywords="Dermatologue enfant Meknès, Eczéma bébé Meknès, Dermatologie pédiatrique Meknès, Verrues enfant Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/dermatologie-pediatrique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: 'Dermatologie Pédiatrique' },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE PÉDIATRIQUE</span>
          <h1 className="subpage-title">Dermatologie pédiatrique : soins de la peau chez l'enfant à Meknès</h1>
          <p className="subpage-subtitle">
            La peau des nourrissons et des enfants est plus fragile que celle des adultes. Le Dr Samia Mrabat accueille les jeunes patients avec une approche douce et adaptée.
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
                    src="/images/pdf_extracted/page_61_img_1.jpeg"
                    alt="Photo médicale pédiatrique : Mère et enfants présentant des affections courantes (Eczéma atopique, Verrue, Molluscum)"
                    caption="Principales pathologies dermatologiques observées chez l'enfant."
                  />
                </div>

                <h2>Quelles maladies de peau peuvent toucher les enfants ?</h2>
                <ul className="bullet-list">
                  <li><strong>Eczéma atopique (Dermatite atopique) :</strong> se sécheresse extrême et plaques rouges démangeantes.</li>
                  <li><strong>Molluscum contagiosum :</strong> petites perles indolores d'origine virale très fréquentes en collectivité.</li>
                  <li><strong>Verrues vulgaires et plantaires :</strong> excroissances cutanées contagieuses chez le jeune enfant.</li>
                  <li><strong>Impétigo :</strong> infection bactérienne superficielle produisant des croûtes jaunâtres.</li>
                  <li><strong>Mycoses cutanées &amp; croûtes de lait :</strong> éruptions bénignes du nourrisson.</li>
                  <li><strong>Acné de l'adolescent :</strong> accompagnement adapté à la puberté.</li>
                </ul>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_63_img_1.jpeg"
                    alt="Infographie : Les symptômes qui doivent amener à consulter chez l'enfant (Boutons, Démangeaisons, Plaques, Verrues)"
                    caption="Symptômes devant amener les parents à consulter un dermatologue pédiatrique."
                  />
                </div>

                <h2>Déroulement d'une consultation pédiatrique</h2>
                <p>
                  La consultation débute par un dialogue rassurant avec l'enfant et ses parents pour comprendre ses habitudes. L'examen clinique est réalisé en douceur. Les explications et le protocole de soin sont expliqués clairement aux parents avec des recommandations sur l'hygiène et les produits adaptés.
                </p>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Prenez rendez-vous pour votre enfant avec le Dr Samia Mrabat à Meknès.</p>
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
