import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function AcneRosacee() {

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Acné et rosacée : diagnostic et traitement à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge l'acné et la rosacée chez l'adolescent et l'adulte grâce à un diagnostic précis et des traitements personnalisés.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Acné et rosacée à Meknès | Dermatologue Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge l'acné et la rosacée chez l'adolescent et l'adulte grâce à un diagnostic précis et des traitements personnalisés."
        keywords="Acné Meknès, Rosacée Meknès, Dermatologue Meknès, Dr Samia Mrabat, Traitement acné Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/acne-rosacee"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Acné et rosacée" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Acné et rosacée : diagnostic et traitement à Meknès</h1>
          <div className="subpage-subtitle">
<p>L'acné et la rosacée sont deux maladies de peau fréquentes qui peuvent avoir un impact important sur le confort quotidien et la confiance en soi. Bien qu'elles puissent présenter certains symptômes similaires, elles nécessitent une prise en charge différente. Le Dr Samia Mrabat, dermatologue à Meknès, réalise un diagnostic précis afin d'identifier la cause de vos symptômes et de vous proposer un traitement adapté à votre peau, à votre âge et à l'évolution de votre maladie.</p>
</div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
<img src="/articles/article1/images/img-000.png" alt="Acn\u00e9 et rosac\u00e9e - image principale" className="hero-image" />
<p className="caption">L'acné et la rosacée sont deux maladies de peau fréquentes qui peuvent affecter le confort quotidien et la confiance en soi.</p>
<h2>Qu'est-ce que l'acné ?</h2>

<img src="/articles/article1/images/img-001.png" alt="Illustration médicale 3D d'une coupe de peau montrant le follicule et la formation d'un bouton" className="infographic" />
<p className="caption">Illustration médicale 3D d'une coupe de peau montrant le follicule pileux, le sébum, le pore bouché, la bactérie responsable de l'inflammation et la formation d'un bouton.</p>

<p>L'acné est une maladie inflammatoire chronique des follicules pilo-sébacés. Elle apparaît lorsque les pores de la peau s'obstruent sous l'effet d'un excès de sébum, de cellules mortes et de bactéries naturellement présentes sur la peau.</p>

<p>Contrairement aux idées reçues, l'acné ne concerne pas uniquement les adolescents. Elle peut également toucher les adultes, en particulier les femmes, et persister pendant plusieurs années sans traitement adapté. Les zones les plus fréquemment atteintes sont le visage, le dos, les épaules et le thorax.</p>

<h2>Qu'est-ce que la rosacée ?</h2>

<img src="/articles/article1/images/img-002.png" alt="Visage d'une femme présentant une rosacée légère à modérée" className="infographic" />
<p className="caption">Visage d'une femme présentant une rosacée légère à modérée, avec rougeurs au niveau des joues, du nez et du menton.</p>

<p>La rosacée est une maladie inflammatoire chronique qui touche principalement le centre du visage. Elle se manifeste par des rougeurs persistantes, des petits vaisseaux visibles et parfois des boutons inflammatoires.</p>

<p>Cette affection évolue généralement par poussées. Certains facteurs comme le soleil, la chaleur, le stress, les boissons chaudes ou les aliments épicés peuvent favoriser son apparition ou accentuer les symptômes. Un diagnostic réalisé par un dermatologue est indispensable afin de différencier la rosacée d'autres maladies cutanées et de mettre en place un traitement approprié.</p>

<h2>Quels sont les symptômes de l'acné et de la rosacée ?</h2>

<h3>Symptômes de l'acné</h3>
<ul>
  <li>Points noirs (comédons ouverts)</li>
  <li>Points blancs (comédons fermés)</li>
  <li>Boutons rouges inflammatoires</li>
  <li>Pustules</li>
  <li>Nodules</li>
  <li>Kystes</li>
  <li>Excès de sébum</li>
  <li>Cicatrices</li>
</ul>

<h3>Symptômes de la rosacée</h3>
<ul>
  <li>Rougeurs persistantes</li>
  <li>Bouffées de chaleur du visage</li>
  <li>Petits vaisseaux sanguins visibles</li>
  <li>Sensation de brûlure</li>
  <li>Peau très sensible</li>
  <li>Boutons inflammatoires sans points noirs</li>
</ul>

<h2>Quelles sont les causes de l'acné et de la rosacée ?</h2>

<h3>Les causes de l'acné</h3>
<p>Plusieurs facteurs peuvent favoriser l'apparition de l'acné :</p>
<ul>
  <li>Variations hormonales</li>
  <li>Prédisposition génétique</li>
  <li>Production excessive de sébum</li>
  <li>Obstruction des pores</li>
  <li>Prolifération bactérienne</li>
  <li>Certains médicaments</li>
  <li>Stress</li>
</ul>

<h3>Les facteurs déclenchants de la rosacée</h3>
<p>Les poussées de rosacée peuvent être favorisées par :</p>
<ul>
  <li>Exposition au soleil</li>
  <li>Fortes chaleurs</li>
  <li>Changements de température</li>
  <li>Boissons très chaudes</li>
  <li>Aliments épicés</li>
  <li>Alcool</li>
  <li>Stress</li>
  <li>Prédisposition familiale</li>
</ul>

<h2>Quand consulter un dermatologue ?</h2>

<p>Il est recommandé de consulter si :</p>
<ul>
  <li>Les boutons deviennent douloureux ou nombreux</li>
  <li>Les rougeurs persistent malgré les soins habituels</li>
  <li>Des cicatrices apparaissent</li>
  <li>Les traitements achetés en pharmacie restent inefficaces</li>
  <li>Votre peau devient particulièrement sensible</li>
  <li>Votre maladie a un impact sur votre qualité de vie ou votre confiance en vous</li>
</ul>

<p>Une consultation précoce permet souvent d'obtenir un meilleur contrôle de la maladie et de limiter les complications.</p>

<h2>Comment se déroule la consultation ?</h2>

<img src="/articles/article1/images/img-004.png" alt="Cabinet du dermatologue" className="infographic" />
<p className="caption">Image du cabinet.</p>

<p>Lors de votre rendez-vous, le Dr Samia Mrabat commence par un entretien afin de mieux comprendre vos symptômes, vos antécédents et les traitements déjà utilisés. Un examen clinique de votre peau est ensuite réalisé afin de déterminer précisément le type d'acné ou de rosacée, son stade d'évolution et les éventuels facteurs aggravants.</p>

<p>À l'issue de cette consultation, un plan de traitement personnalisé vous est proposé afin d'obtenir les meilleurs résultats possibles.</p>

<h2>Les traitements proposés</h2>
<p>Chaque patient bénéficie d'une prise en charge individualisée en fonction du diagnostic établi lors de la consultation. Selon votre situation, le Dr Samia Mrabat peut proposer :</p>
<ul>
  <li>Des traitements locaux</li>
  <li>Des traitements par voie orale lorsque cela est indiqué</li>
  <li>Des conseils dermocosmétiques personnalisés</li>
  <li>Des peelings dermatologiques adaptés à certains patients</li>
  <li>Une prise en charge des cicatrices d'acné</li>
  <li>Un suivi dermatologique régulier afin d'adapter le traitement à l'évolution de votre peau</li>
</ul>

<h2>Nos conseils pour prendre soin de votre peau</h2>
<p>Quelques gestes simples permettent de préserver votre peau au quotidien :</p>
<ul>
  <li>Nettoyer son visage avec un soin doux adapté</li>
  <li>Éviter de manipuler les boutons</li>
  <li>Appliquer quotidiennement une protection solaire</li>
  <li>Utiliser des cosmétiques non comédogènes</li>
  <li>Suivre rigoureusement le traitement prescrit</li>
  <li>Éviter l'automédication prolongée</li>
</ul>

<h2>Pourquoi consulter rapidement ?</h2>
<p>Sans prise en charge adaptée, l'acné et la rosacée peuvent évoluer progressivement et devenir plus difficiles à traiter. Une consultation précoce permet notamment de limiter :</p>
<ul>
  <li>L'apparition de cicatrices permanentes</li>
  <li>Les taches pigmentaires après les poussées inflammatoires</li>
  <li>L'aggravation des lésions</li>
  <li>Les répercussions psychologiques liées à ces maladies</li>
</ul>

<h2>Pourquoi choisir le Dr Samia Mrabat ?</h2>
<p>Le Dr Samia Mrabat assure une prise en charge personnalisée des maladies de la peau chez l'adulte et l'enfant. Chaque consultation comprend un examen clinique complet, des explications claires sur votre maladie et la mise en place d'un traitement adapté à votre situation. L'objectif est de traiter efficacement les symptômes tout en préservant durablement la santé de votre peau.</p>
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
