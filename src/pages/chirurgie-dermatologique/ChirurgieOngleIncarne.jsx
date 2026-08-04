import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function ChirurgieOngleIncarne() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Chirurgie de l'ongle incarné à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les ongles incarnés lorsque leur traitement chirurgical est indiqué afin de soulager durablement la douleur et prévenir les récidives.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Chirurgie ongle incarné à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les ongles incarnés lorsque leur traitement chirurgical est indiqué afin de soulager durablement la douleur et prévenir les récidives."
        keywords="Chirurgie ongle incarné Meknès, Ongle incarné douloureux Meknès, Matricectomie Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/chirurgie-ongle-incarne"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: "Chirurgie de l'ongle incarné" },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Chirurgie de l'ongle incarné à Meknès</h1>
          <div className="subpage-subtitle">
            <p>L'ongle incarné est une affection fréquente qui survient lorsqu'un bord de l'ongle pénètre dans la peau voisine. Cette situation peut entraîner une douleur importante, une rougeur, un gonflement et parfois une infection.</p>
            <p>Lorsque les traitements conservateurs ne suffisent pas ou que les récidives sont fréquentes, une intervention chirurgicale peut être proposée. Le Dr Samia Mrabat, dermatologue à Meknès, réalise une évaluation clinique afin de déterminer le traitement le plus adapté à votre situation.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="chirurgie-ongle-incarne" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Qu'est-ce qu'un ongle incarné ?</h2>
                <p>Un ongle incarné apparaît lorsqu'un bord de l'ongle pousse dans la peau qui l'entoure au lieu de pousser normalement.</p>
                <p>Cette pénétration provoque une réaction inflammatoire pouvant entraîner :</p>
                <ul className="check-list">
                  <li>Une douleur au toucher ou à la marche</li>
                  <li>Une rougeur</li>
                  <li>Un gonflement</li>
                  <li>Un écoulement</li>
                  <li>Une infection locale</li>
                </ul>
                <p>Le gros orteil est le plus souvent concerné, mais d'autres ongles peuvent également être touchés.</p>

                
                <ArticleImageBlock articleId="chirurgie-ongle-incarne" imageIndex={1} />
<h2>Quand une intervention peut-elle être indiquée ?</h2>
                <p>Une chirurgie peut être proposée notamment lorsque :</p>
                <ul className="check-list">
                  <li>Les douleurs persistent malgré les soins</li>
                  <li>Les épisodes d'infection se répètent</li>
                  <li>L'ongle incarné récidive régulièrement</li>
                  <li>Un bourgeon inflammatoire apparaît</li>
                  <li>La gêne devient importante dans la vie quotidienne</li>
                </ul>
                <p>Chaque indication est évaluée individuellement lors de la consultation.</p>

                
                <ArticleImageBlock articleId="chirurgie-ongle-incarne" imageIndex={2} />
<h2>Comment se déroule l'intervention ?</h2>
                <p>L'intervention est réalisée sous anesthésie locale.</p>
                <p>Après désinfection de la zone, le dermatologue retire la partie de l'ongle responsable de l'incarnation. Selon les situations, un traitement de la matrice de l'ongle peut être réalisé afin de limiter le risque de récidive.</p>
                <p>L'intervention est généralement rapide et réalisée en ambulatoire.</p>
                

                <h2>Après l'intervention</h2>
                <p>Après la chirurgie, quelques soins locaux sont nécessaires pendant la période de cicatrisation.</p>
                <p>Le Dr Samia Mrabat vous remet des recommandations personnalisées concernant :</p>
                <ul className="check-list">
                  <li>Les pansements</li>
                  <li>L'hygiène du pied</li>
                  <li>La reprise des activités</li>
                  <li>Le choix des chaussures</li>
                  <li>Le suivi postopératoire</li>
                </ul>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Une douleur persistante au niveau d'un ongle n'est pas toujours liée à un ongle incarné.</p>
                <p>Une consultation dermatologique permet de confirmer le diagnostic, d'évaluer la gravité de la situation et de proposer le traitement le plus adapté.</p>
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
