import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function AllergiesInfections() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Allergies, infections et maladies de la peau : diagnostic et traitement à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, diagnostique et traite les allergies cutanées, les infections de la peau et de nombreuses maladies dermatologiques chez l'adulte et l'enfant.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Allergies, infections et maladies de la peau à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, diagnostique et traite les allergies cutanées, les infections de la peau et de nombreuses maladies dermatologiques chez l'adulte et l'enfant."
        keywords="Allergie cutanée Meknès, Infection peau Meknès, Urticaire Meknès, Mycose Meknès, Dermatologue Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/allergies-infections-maladies-peau"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Allergies, infections et maladies de la peau" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Allergies, infections et maladies de la peau : diagnostic et traitement à Meknès</h1>
          <div className="subpage-subtitle">
<p>La peau constitue la première barrière de protection de l'organisme. Lorsqu'elle est agressée par des allergènes, des bactéries, des virus, des champignons ou certaines maladies inflammatoires, différents symptômes peuvent apparaître : rougeurs, démangeaisons, boutons, cloques, douleurs ou encore lésions cutanées. Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les différentes maladies de la peau chez l'adulte et l'enfant afin d'établir un diagnostic précis et de proposer un traitement adapté à chaque situation.</p>
</div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
<img src="/articles/article4/images/img-000.png" alt="Dermatologie - Dr Samia Mrabat" className="hero-image" />
<p className="caption"><em>Allergies, infections et maladies de la peau — Dr Samia Mrabat, dermatologue à Meknès.</em></p>
<h2>Qu'est-ce qu'une allergie cutanée ?</h2>
<div>
  <h3>Comment une allergie apparaît-elle ?</h3>
  <p>Une allergie cutanée est une réaction excessive du système immunitaire face à une substance normalement inoffensive. Elle peut être déclenchée par des cosmétiques, des produits ménagers, certains métaux, des médicaments ou encore des plantes. Les manifestations varient selon les patients et peuvent apparaître rapidement après le contact avec l'allergène.</p>
</div>

<h2>Les principales infections de la peau</h2>
<p>La peau peut être touchée par différents types d'infections :</p>
<ul>
  <li>Infections bactériennes</li>
  <li>Infections virales</li>
  <li>Infections fongiques (mycoses)</li>
  <li>Infections parasitaires</li>
</ul>
<p>Chaque type d'infection nécessite une prise en charge spécifique afin d'éviter sa propagation ou ses complications.</p>

<img src="/articles/article4/images/img-001.png" alt="Types d'infections cutanées" className="infographic" />
<p className="caption"><em>Types d'infections cutanées : bactériennes, virales, fongiques et parasitaires.</em></p>

<h2>Les maladies dermatologiques fréquentes</h2>
<p>Certaines maladies de la peau ne sont ni allergiques ni infectieuses, mais nécessitent également une prise en charge dermatologique. Parmi les plus fréquentes :</p>
<ul>
  <li>Urticaire</li>
  <li>Rosacée</li>
  <li>Dermatite séborrhéique</li>
  <li>Kératose pilaire</li>
  <li>Maladies bulleuses</li>
  <li>Troubles de la pigmentation</li>
</ul>

<h2>Les symptômes qui doivent vous amener à consulter</h2>
<h3>Reconnaître les signes d'alerte</h3>
<p>Une consultation est recommandée en cas de :</p>
<ul>
  <li>Rougeurs persistantes</li>
  <li>Démangeaisons importantes</li>
  <li>Boutons ou éruptions cutanées</li>
  <li>Cloques</li>
  <li>Lésions douloureuses</li>
  <li>Écoulement ou suintement</li>
  <li>Plaques qui s'étendent</li>
  <li>Fièvre associée à une éruption cutanée</li>
  <li>Absence d'amélioration malgré les traitements habituels</li>
</ul>

<img src="/articles/article4/images/img-002.png" alt="Signes d'alerte dermatologiques" className="infographic" />
<p className="caption"><em>Signes d'alerte dermatologiques : consultez rapidement si vous notez des rougeurs, démangeaisons ou lésions persistantes.</em></p>

<h2>Comment se déroule la consultation ?</h2>
<p>Le Dr Samia Mrabat réalise un examen clinique complet de votre peau afin d'identifier l'origine des lésions. Selon votre situation, le diagnostic peut être orienté par l'aspect des lésions, leur localisation, leur ancienneté et leur évolution. Lorsque cela est nécessaire, des examens complémentaires peuvent être proposés afin de confirmer le diagnostic.</p>

<h2>Les traitements proposés</h2>
<p>Le traitement dépend toujours de la cause identifiée. Selon le diagnostic, le Dr Samia Mrabat peut proposer :</p>
<ul>
  <li>Des traitements locaux</li>
  <li>Des traitements par voie orale lorsque cela est indiqué</li>
  <li>Des conseils d'éviction des allergènes</li>
  <li>Des recommandations d'hygiène cutanée</li>
  <li>Un suivi dermatologique personnalisé</li>
</ul>

<h2>Conseils pour protéger votre peau</h2>
<p>Quelques habitudes permettent de préserver la santé de votre peau :</p>
<ul>
  <li>Utiliser des produits adaptés aux peaux sensibles</li>
  <li>Hydrater régulièrement la peau</li>
  <li>Éviter les produits irritants</li>
  <li>Protéger la peau du soleil</li>
  <li>Consulter rapidement en cas d'apparition d'une nouvelle lésion</li>
</ul>

<h2>Pourquoi consulter rapidement ?</h2>
<p>Une prise en charge précoce permet souvent de limiter l'aggravation des lésions, d'éviter certaines complications et d'améliorer le confort du patient. Un diagnostic précis est indispensable afin de mettre en place le traitement le plus adapté.</p>
                <div className="cta-container">
                  <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="cta-button">Je prends mon rendez-vous</a>
                  <span className="cta-subtext">Contactez le cabinet via WhatsApp pour fixer votre consultation</span>
                </div>
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
