import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function TraitementCicatricesTaches() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Traitement des cicatrices et des taches pigmentaires à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, propose une prise en charge personnalisée des cicatrices et des taches pigmentaires selon votre type de peau et votre indication médicale.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Traitement des cicatrices et des taches pigmentaires à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, propose une prise en charge personnalisée des cicatrices et des taches pigmentaires selon votre type de peau et votre indication médicale."
        keywords="Traitement cicatrices d'acné Meknès, Mélasma Meknès, Taches solaires Meknès, Dépigmentation Meknès, Dermatologue esthétique Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: "Traitement des cicatrices et des taches pigmentaires" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE ESTHÉTIQUE</span>
          <h1 className="subpage-title">Traitement des cicatrices et des taches pigmentaires à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les cicatrices et les taches pigmentaires peuvent apparaître après une acné, une inflammation cutanée, une exposition au soleil ou avec le vieillissement naturel de la peau. Leur aspect, leur profondeur et leur origine varient d'une personne à l'autre, ce qui nécessite une évaluation dermatologique avant toute prise en charge.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un examen personnalisé afin d'identifier l'origine des lésions et de proposer un protocole adapté à votre peau et à vos besoins.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="traitement-cicatrices-taches-pigmentaires" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Quelles sont les principales causes des cicatrices et des taches pigmentaires ?</h2>
                <p>Les cicatrices et les taches peuvent avoir différentes origines. Les causes les plus fréquentes sont :</p>
                <ul className="check-list">
                  <li>Les cicatrices d'acné</li>
                  <li>L'hyperpigmentation post-inflammatoire</li>
                  <li>Le mélasma</li>
                  <li>Les lentigos solaires (taches liées au soleil)</li>
                  <li>Certaines cicatrices après une blessure ou une intervention</li>
                  <li>Le vieillissement cutané</li>
                </ul>
                <p>Identifier la cause est une étape essentielle pour choisir la prise en charge la plus adaptée.</p>

                
                <ArticleImageBlock articleId="traitement-cicatrices-taches-pigmentaires" imageIndex={1} />
<h2>Comment se déroule le diagnostic ?</h2>
                <p>Lors de la consultation, le Dr Samia Mrabat examine votre peau afin d'évaluer :</p>
                <ul className="check-list">
                  <li>Le type de cicatrice ou de tache</li>
                  <li>Sa profondeur</li>
                  <li>Son ancienneté</li>
                  <li>Votre phototype</li>
                  <li>Vos antécédents médicaux</li>
                  <li>Vos attentes</li>
                </ul>
                <p>Cette évaluation permet de définir un protocole personnalisé.</p>

                
                <ArticleImageBlock articleId="traitement-cicatrices-taches-pigmentaires" imageIndex={2} />
<h2>Quels traitements peuvent être proposés ?</h2>
                <p>Selon votre situation, différents traitements peuvent être envisagés, seuls ou associés. Ils peuvent inclure :</p>
                <ul className="check-list">
                  <li>Peelings dermatologiques</li>
                  <li>Microneedling</li>
                  <li>Mésothérapie</li>
                  <li>Traitements topiques</li>
                  <li>Conseils de photoprotection</li>
                  <li>Autres traitements adaptés à votre indication</li>
                </ul>
                <p>Le choix du traitement dépend toujours de votre peau et de l'avis du dermatologue.</p>
                

                <h2>Quels résultats peut-on attendre ?</h2>
                <p>Les résultats apparaissent progressivement et varient selon le type de cicatrice ou de tache, sa profondeur et la réponse individuelle de la peau.</p>
                <p>L'objectif est d'obtenir une amélioration progressive de la qualité de la peau et une diminution visible des imperfections, dans le respect de votre peau et de son fonctionnement naturel.</p>

                <h2>Les précautions après le traitement</h2>
                <p>Après certaines procédures, la peau peut être plus sensible pendant quelques jours. Il est recommandé de :</p>
                <ul className="check-list">
                  <li>Appliquer une protection solaire adaptée</li>
                  <li>Hydrater régulièrement la peau</li>
                  <li>Éviter les produits irritants</li>
                  <li>Respecter les recommandations données par le dermatologue</li>
                </ul>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Toutes les taches pigmentaires ou cicatrices ne nécessitent pas le même traitement.</p>
                <p>Une consultation dermatologique permet d'établir un diagnostic précis, d'écarter certaines lésions nécessitant une surveillance particulière et de proposer une prise en charge personnalisée.</p>
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
