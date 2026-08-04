import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function DermatologiePediatrique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Dermatologie pédiatrique : prise en charge des maladies de la peau chez l'enfant à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les maladies de la peau du nourrisson, de l'enfant et de l'adolescent : eczéma, verrues, molluscum contagiosum, infections cutanées, acné et bien d'autres.",
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
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les maladies de la peau du nourrisson, de l'enfant et de l'adolescent : eczéma, verrues, molluscum contagiosum, infections cutanées, acné et bien d'autres."
        keywords="Dermatologue pédiatrique Meknès, Eczéma bébé Meknès, Verrues enfant Meknès, Peau enfant Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/dermatologie-pediatrique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Dermatologie pédiatrique" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Dermatologie pédiatrique : prise en charge des maladies de la peau chez l'enfant à Meknès</h1>
          <div className="subpage-subtitle">
            <p>La peau des nourrissons et des enfants est plus fragile que celle des adultes et peut être touchée par de nombreuses affections dermatologiques. Certaines sont bénignes et transitoires, tandis que d'autres nécessitent une prise en charge médicale afin d'éviter les complications ou d'améliorer le confort de l'enfant.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, reçoit les nourrissons, les enfants et les adolescents pour le diagnostic, le traitement et le suivi des maladies de la peau, des cheveux et des ongles.</p>
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
                    src="/images/pdf_extracted/page_61_img_1.jpeg"
                    alt="Infographie : Les maladies dermatologiques fréquentes chez l'enfant"
                    caption="Principales affections pédiatriques de la peau du bébé à l'adolescent."
                  />
                </div>

                <h2>Quelles maladies de la peau peuvent toucher les enfants ?</h2>
                <p>Les enfants peuvent présenter différentes maladies dermatologiques dès les premiers mois de vie ou au cours de leur croissance. Parmi les affections les plus fréquentes :</p>
                <ul className="check-list">
                  <li>Eczéma atopique</li>
                  <li>Molluscum contagiosum</li>
                  <li>Verrues</li>
                  <li>Impétigo</li>
                  <li>Mycoses cutanées</li>
                  <li>Urticaire</li>
                  <li>Psoriasis de l'enfant</li>
                  <li>Vitiligo</li>
                  <li>Acné de l'adolescent</li>
                  <li>Angiomes et autres lésions vasculaires</li>
                </ul>
                <p>Chaque maladie nécessite une évaluation médicale afin d'établir un diagnostic précis.</p>

                <h2>Les symptômes qui doivent amener à consulter</h2>
                <p>Une consultation dermatologique est recommandée si votre enfant présente :</p>
                <ul className="check-list">
                  <li>Des plaques rouges persistantes</li>
                  <li>Des démangeaisons importantes</li>
                  <li>Des boutons inhabituels</li>
                  <li>Des verrues qui se multiplient</li>
                  <li>Des lésions qui ne guérissent pas</li>
                  <li>Une perte de cheveux localisée</li>
                  <li>Des taches blanches sur la peau</li>
                  <li>Une éruption cutanée accompagnée de fièvre</li>
                </ul>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_63_img_1.jpeg"
                    alt="Infographie : Déroulement et conseils pour la consultation pédiatrique"
                    caption="Une approche douce et adaptée aux jeunes patients."
                  />
                </div>

                <h2>Comment se déroule la consultation ?</h2>
                <p>La consultation débute par un échange avec les parents afin de recueillir les antécédents médicaux, l'évolution des symptômes et les traitements déjà utilisés.</p>
                <p>Le Dr Samia Mrabat réalise ensuite un examen clinique complet de la peau de l'enfant afin d'établir un diagnostic précis.</p>
                <p>Chaque traitement est expliqué aux parents avec des conseils adaptés à l'âge de l'enfant et à sa maladie.</p>

                <h2>Les traitements proposés</h2>
                <p>Selon la maladie diagnostiquée, le Dr Samia Mrabat peut proposer :</p>
                <ul className="check-list">
                  <li>Des traitements locaux</li>
                  <li>Des traitements médicamenteux lorsque cela est indiqué</li>
                  <li>Des conseils d'hygiène et de soins de la peau</li>
                  <li>Un suivi dermatologique régulier</li>
                  <li>Une prise en charge personnalisée selon l'âge de l'enfant et l'évolution de la maladie</li>
                </ul>

                <h2>Conseils pour protéger la peau des enfants</h2>
                <p>Quelques gestes simples permettent de préserver la peau des plus jeunes :</p>
                <ul className="check-list">
                  <li>Hydrater régulièrement la peau</li>
                  <li>Utiliser des produits adaptés aux peaux sensibles</li>
                  <li>Protéger les enfants du soleil</li>
                  <li>Éviter les produits irritants</li>
                  <li>Consulter rapidement en cas de lésion persistante</li>
                </ul>

                <h2>Pourquoi consulter rapidement ?</h2>
                <p>Chez l'enfant, certaines maladies de la peau peuvent évoluer rapidement ou devenir inconfortables au quotidien.</p>
                <p>Une prise en charge précoce permet souvent de soulager les symptômes, de limiter les complications et d'accompagner les parents dans le suivi du traitement.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour un bilan et une prise en charge adaptée.</p>
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
