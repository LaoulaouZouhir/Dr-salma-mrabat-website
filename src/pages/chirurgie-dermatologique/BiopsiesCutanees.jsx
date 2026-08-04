import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function BiopsiesCutanees() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Biopsies cutanées à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise des biopsies cutanées lorsque cela est indiqué afin de confirmer un diagnostic et d'orienter la prise en charge adaptée.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Biopsies cutanées à Meknès | Diagnostic dermatologique | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise des biopsies cutanées lorsque cela est indiqué afin de confirmer un diagnostic et d'orienter la prise en charge adaptée."
        keywords="Biopsie cutanée Meknès, Analyse peau Meknès, Diagnostic dermatologique Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/biopsies-cutanees"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: "Biopsies cutanées" },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Biopsies cutanées à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Une biopsie cutanée est un examen médical permettant de prélever un petit fragment de peau afin de l'analyser en laboratoire. Cet examen aide le dermatologue à confirmer ou à préciser le diagnostic de certaines maladies de la peau lorsque l'examen clinique seul ne suffit pas.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise les biopsies cutanées lorsque cet examen est médicalement indiqué, dans des conditions garantissant confort, sécurité et précision diagnostique.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="biopsies-cutanees" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Qu'est-ce qu'une biopsie cutanée ?</h2>
                <p>Une biopsie cutanée consiste à prélever un très petit échantillon de peau sous anesthésie locale. Ce prélèvement est ensuite envoyé dans un laboratoire spécialisé où il est examiné au microscope par un médecin anatomopathologiste.</p>
                <p>Cet examen permet d'obtenir des informations précieuses sur la nature de certaines lésions ou maladies cutanées et d'orienter le traitement le plus adapté.</p>

                
                <ArticleImageBlock articleId="biopsies-cutanees" imageIndex={1} />
<h2>Dans quels cas une biopsie peut-elle être proposée ?</h2>
                <p>Une biopsie cutanée peut être indiquée dans différentes situations, notamment pour :</p>
                <ul className="check-list">
                  <li>Confirmer le diagnostic d'une maladie de la peau</li>
                  <li>Analyser une lésion cutanée inhabituelle</li>
                  <li>Explorer une lésion persistante malgré un traitement</li>
                  <li>Évaluer certaines maladies inflammatoires de la peau</li>
                  <li>Rechercher certaines maladies auto-immunes</li>
                  <li>Préciser la nature d'une tumeur cutanée</li>
                </ul>
                <p>Chaque indication est évaluée individuellement lors de la consultation.</p>

                
                <ArticleImageBlock articleId="biopsies-cutanees" imageIndex={2} />
<h2>Comment se déroule une biopsie ?</h2>
                <p>Après un examen clinique, le dermatologue détermine la zone la plus pertinente à prélever.</p>
                <p>L'intervention est réalisée sous anesthésie locale. Un très petit fragment de peau est prélevé à l'aide d'un instrument adapté. Selon la taille du prélèvement, un ou plusieurs points de suture peuvent être nécessaires.</p>
                <p>Le prélèvement est ensuite adressé à un laboratoire d'anatomopathologie pour être analysé.</p>
                

                <h2>Après la biopsie</h2>
                <p>Après le prélèvement, quelques soins locaux sont généralement suffisants pour assurer une bonne cicatrisation.</p>
                <p>Le Dr Samia Mrabat vous remet des recommandations personnalisées concernant :</p>
                <ul className="check-list">
                  <li>Les soins de la plaie</li>
                  <li>Les pansements</li>
                  <li>L'hygiène locale</li>
                  <li>Les activités à éviter temporairement</li>
                  <li>La date éventuelle de retrait des fils</li>
                </ul>
                <p>Les résultats de l'analyse sont communiqués et expliqués lors du suivi.</p>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Toutes les lésions cutanées ne nécessitent pas une biopsie.</p>
                <p>Une consultation dermatologique permet de déterminer si cet examen est utile et de choisir la technique de prélèvement la plus adaptée afin d'obtenir un diagnostic fiable.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour une évaluation personnalisée.</p>
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
