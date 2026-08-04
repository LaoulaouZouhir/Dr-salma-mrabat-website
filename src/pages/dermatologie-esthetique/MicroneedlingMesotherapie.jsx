import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function MicroneedlingMesotherapie() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Microneedling et mésothérapie à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise des séances de microneedling et de mésothérapie adaptées pour améliorer la qualité de la peau, la texture cutanée et certaines imperfections.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Microneedling et mésothérapie à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise des séances de microneedling et de mésothérapie adaptées pour améliorer la qualité de la peau, la texture cutanée et certaines imperfections."
        keywords="Microneedling Meknès, Mésothérapie Meknès, Mesolift Meknès, Collagène peau Meknès, Dermatologue esthétique Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/microneedling-mesotherapie"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: "Microneedling et mésothérapie" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE ESTHÉTIQUE</span>
          <h1 className="subpage-title">Microneedling et mésothérapie à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Le microneedling et la mésothérapie sont deux techniques de médecine esthétique qui permettent d'améliorer progressivement la qualité de la peau. Réalisés seuls ou de manière complémentaire selon les indications, ces traitements visent à stimuler les mécanismes naturels de régénération cutanée et à apporter à la peau les éléments nécessaires à son équilibre.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise une évaluation personnalisée afin de déterminer le traitement le plus adapté à votre peau, à vos attentes et à votre indication médicale.</p>
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
                    src="/images/pdf_extracted/page_81_img_1.jpeg"
                    alt="Infographie : Principes du Microneedling et de la Mésothérapie"
                    caption="Stimulation mécanique du collagène et apport de nutriments essentiels."
                  />
                </div>

                <h2>Qu'est-ce que le microneedling et la mésothérapie ?</h2>
                <p>Le microneedling consiste à réaliser de très fines micro-perforations contrôlées à la surface de la peau à l'aide d'un dispositif médical spécifique. Ce processus stimule naturellement les mécanismes de réparation cutanée et favorise le renouvellement de la peau.</p>
                <p>La mésothérapie consiste à administrer de faibles quantités de substances adaptées directement dans les couches superficielles de la peau afin d'améliorer son hydratation, son éclat et sa qualité.</p>
                <p>Selon votre situation, ces deux traitements peuvent être proposés séparément ou associés.</p>

                <h2>Dans quels cas ces traitements peuvent-ils être indiqués ?</h2>
                <p>Le microneedling et la mésothérapie peuvent être proposés notamment pour :</p>
                <ul className="check-list">
                  <li>Améliorer la qualité de la peau</li>
                  <li>Affiner le grain de peau</li>
                  <li>Améliorer l'éclat du teint</li>
                  <li>Atténuer certaines cicatrices d'acné superficielles</li>
                  <li>Réduire l'apparence des pores dilatés</li>
                  <li>Améliorer certaines ridules superficielles</li>
                  <li>Favoriser une meilleure hydratation cutanée</li>
                </ul>
                <p>Chaque indication est évaluée individuellement lors de la consultation.</p>

                <h2>Comment se déroule une séance ?</h2>
                <p>La consultation débute par une analyse de votre peau afin d'évaluer vos besoins et de définir le protocole le plus adapté.</p>
                <p>La peau est ensuite préparée avant la réalisation du traitement. Une fois la séance terminée, des recommandations personnalisées vous sont remises afin d'optimiser la récupération cutanée.</p>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_83_img_1.jpeg"
                    alt="Infographie : Résultats attendus et protocole de soin"
                    caption="Évolution progressive de la qualité cutanée sur plusieurs séances."
                  />
                </div>

                <h2>Quels résultats peut-on attendre ?</h2>
                <p>Les résultats apparaissent progressivement au fil du renouvellement naturel de la peau.</p>
                <p>Selon les indications, ces traitements peuvent contribuer à améliorer la texture cutanée, l'éclat du teint, l'hydratation de la peau et certaines imperfections superficielles.</p>
                <p>Le nombre de séances recommandé dépend de votre peau et de vos objectifs.</p>

                <h2>Les précautions après la séance</h2>
                <p>Après le traitement, une légère rougeur peut être observée pendant une courte période.</p>
                <p>Il est recommandé de suivre les conseils donnés par le dermatologue concernant l'hydratation, la protection solaire, les soins à appliquer et les activités à éviter temporairement afin de favoriser une bonne récupération de la peau.</p>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Le choix du protocole dépend de nombreux critères, notamment du type de peau, du phototype, des indications médicales et des attentes du patient.</p>
                <p>Une consultation dermatologique permet de proposer une prise en charge personnalisée et adaptée à chaque situation.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour une évaluation personnalisée de votre peau.</p>
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
