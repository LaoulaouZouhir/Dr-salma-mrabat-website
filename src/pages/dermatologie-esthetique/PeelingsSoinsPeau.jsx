import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function PeelingsSoinsPeau() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Peelings dermatologiques et soins de la peau à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, propose des peelings dermatologiques et des soins de la peau adaptés pour améliorer l'éclat du teint, la texture cutanée et certaines imperfections.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Peeling dermatologique à Meknès | Soins de la peau | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, propose des peelings dermatologiques et des soins de la peau adaptés pour améliorer l'éclat du teint, la texture cutanée et certaines imperfections."
        keywords="Peeling Meknès, Peeling moyen Meknès, Éclat du teint Meknès, Traitement taches Meknès, Dermatologue esthétique Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/peelings-soins-peau"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: "Peelings dermatologiques et soins de la peau" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE ESTHÉTIQUE</span>
          <h1 className="subpage-title">Peelings dermatologiques et soins de la peau à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les peelings dermatologiques sont des traitements réalisés par un dermatologue afin d'améliorer la qualité de la peau. Selon leur indication, ils peuvent contribuer à atténuer certaines imperfections superficielles, améliorer l'éclat du teint, uniformiser la texture de la peau et accompagner la prise en charge de certaines lésions pigmentaires ou cicatricielles.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise une évaluation personnalisée afin de déterminer le traitement le plus adapté à votre peau, à vos attentes et à votre indication médicale.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                {/* Image 1: Hero */}
                <ArticleImageBlock articleId="peelings-soins-peau" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Qu'est-ce qu'un peeling dermatologique ?</h2>
                <p>Un peeling dermatologique consiste à appliquer sur la peau une solution spécifique provoquant un renouvellement contrôlé des couches superficielles de l'épiderme.</p>
                <p>Ce renouvellement stimule progressivement l'apparition d'une peau plus uniforme, plus lumineuse et plus lisse.</p>
                <p>Le type de peeling est choisi en fonction de votre type de peau, de la zone à traiter et de l'objectif recherché.</p>
                {/* Image 2: Fonctionnement */}
                <ArticleImageBlock articleId="peelings-soins-peau" imageIndex={1} />

                <h2>Dans quels cas un peeling peut-il être indiqué ?</h2>
                <p>Un peeling dermatologique peut être proposé dans différentes situations, notamment pour :</p>
                <ul className="check-list">
                  <li>Améliorer l'éclat du teint</li>
                  <li>Affiner le grain de peau</li>
                  <li>Atténuer certaines taches pigmentaires</li>
                  <li>Accompagner la prise en charge de certaines cicatrices d'acné superficielles</li>
                  <li>Réduire l'aspect des pores dilatés</li>
                  <li>Améliorer certaines ridules superficielles</li>
                </ul>
                <p>Chaque indication est évaluée individuellement lors de la consultation.</p>

                <h2>Comment se déroule une séance ?</h2>
                <p>La consultation débute par une analyse de votre peau afin d'évaluer son état, son phototype et vos attentes.</p>
                <p>Le peeling est ensuite appliqué pendant une durée adaptée au traitement choisi. Une fois la séance terminée, des conseils personnalisés vous sont remis afin de favoriser une bonne récupération cutanée.</p>
                {/* Image 3: Résultats */}
                <ArticleImageBlock articleId="peelings-soins-peau" imageIndex={2} />

                <h2>Quels résultats peut-on attendre ?</h2>
                <p>Les résultats apparaissent progressivement au fil du renouvellement de la peau.</p>
                <p>Selon l'indication, le peeling peut contribuer à améliorer la luminosité du teint, la qualité de la peau et certaines imperfections superficielles.</p>
                <p>Le nombre de séances recommandé dépend de chaque patient et de l'objectif recherché.</p>
                {/* Image 4: Soins post-peeling */}
                <ArticleImageBlock articleId="peelings-soins-peau" imageIndex={3} />

                <h2>Les précautions après un peeling</h2>
                <p>Après un peeling, la peau peut être plus sensible pendant quelques jours.</p>
                <p>Il est important de suivre les recommandations données par le dermatologue, notamment concernant l'hydratation de la peau, la protection solaire et les soins à utiliser après la séance.</p>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Le choix du type de peeling dépend de nombreux critères, notamment du phototype, du type de peau et de l'indication médicale.</p>
                <p>Une consultation dermatologique permet d'établir un diagnostic précis et de sélectionner le traitement le plus adapté tout en limitant les risques de complications.</p>
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
