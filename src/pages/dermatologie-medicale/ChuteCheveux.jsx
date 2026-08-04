import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function ChuteCheveux() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Chute de cheveux et maladies du cuir chevelu : diagnostic et prise en charge à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge la chute de cheveux, les maladies du cuir chevelu et les différentes formes d'alopécie chez l'adulte et l'enfant.",
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
        keywords="Chute de cheveux Meknès, Alopécie Meknès, Cuir chevelu Meknès, Traitement calvitie Meknès, Dermatologue Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Chute de cheveux et maladies du cuir chevelu" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Chute de cheveux et maladies du cuir chevelu : diagnostic et prise en charge à Meknès</h1>
          <div className="subpage-subtitle">
            <p>La perte de cheveux ou les problèmes du cuir chevelu peuvent avoir de nombreuses origines. Une chute de cheveux importante, des démangeaisons persistantes, des pellicules abondantes ou l'apparition de plaques sans cheveux nécessitent un diagnostic précis afin d'identifier leur cause et de mettre en place un traitement adapté.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les différentes maladies du cuir chevelu chez l'adulte et l'enfant. Chaque consultation comprend un examen clinique approfondi afin de proposer une prise en charge personnalisée selon l'origine du problème.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                {/* Image 1: Hero Banner (Article_3_Chute_Cheveux_Cuir_Chevelu_p2_img1.png) */}
                <ArticleImageBlock articleId="chute-cheveux" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Qu'est-ce que la chute de cheveux ?</h2>
                {/* Image 2: Le cycle de vie du cheveu (Article_3_Chute_Cheveux_Cuir_Chevelu_p2_img2.png) */}
                <ArticleImageBlock articleId="chute-cheveux" imageIndex={1} />
                <p>La chute de cheveux est un phénomène naturel lorsqu'elle reste modérée. En revanche, une perte importante, prolongée ou localisée peut révéler une affection nécessitant une évaluation dermatologique.</p>
                <p>Selon les cas, la chute de cheveux peut être temporaire ou chronique et toucher l'ensemble du cuir chevelu ou certaines zones uniquement.</p>

                <h2>Les principales causes de la chute de cheveux</h2>
                <p>La perte de cheveux peut avoir différentes origines :</p>
                <ul className="check-list">
                  <li>Alopécie androgénétique</li>
                  <li>Chute de cheveux saisonnière</li>
                  <li>Effluvium télogène après un stress ou une maladie</li>
                  <li>Carences nutritionnelles</li>
                  <li>Déséquilibres hormonaux</li>
                  <li>Maladies auto-immunes</li>
                  <li>Certains traitements médicamenteux</li>
                  <li>Infections du cuir chevelu</li>
                </ul>
                <p>Identifier la cause est essentiel afin de proposer le traitement le plus adapté.</p>

                <h2>Les maladies du cuir chevelu</h2>
                {/* Image 3: Les principales maladies du cuir chevelu (Article_3_Chute_Cheveux_Cuir_Chevelu_p3_img1.png) */}
                <ArticleImageBlock articleId="chute-cheveux" imageIndex={2} />
                <p>Le cuir chevelu peut être touché par différentes affections dermatologiques, notamment :</p>
                <ul className="check-list">
                  <li>Dermatite séborrhéique</li>
                  <li>Psoriasis du cuir chevelu</li>
                  <li>Eczéma</li>
                  <li>Infections fongiques</li>
                  <li>Folliculites</li>
                  <li>Pellicules persistantes</li>
                  <li>Démangeaisons chroniques</li>
                </ul>
                <p>Ces maladies peuvent entraîner une gêne importante et parfois favoriser une perte de cheveux si elles ne sont pas prises en charge.</p>

                <h2>Les symptômes qui doivent vous alerter</h2>
                <p>Il est conseillé de consulter si vous observez :</p>
                <ul className="check-list">
                  <li>Une chute importante de cheveux</li>
                  <li>Des cheveux qui deviennent progressivement plus fins</li>
                  <li>Des plaques sans cheveux</li>
                  <li>Des démangeaisons persistantes</li>
                  <li>Des rougeurs du cuir chevelu</li>
                  <li>Des pellicules abondantes</li>
                  <li>Des douleurs ou une sensibilité du cuir chevelu</li>
                  <li>Une perte de cheveux après une maladie ou un accouchement</li>
                </ul>

                <h2>Comment se déroule la consultation ?</h2>
                <p>Lors de la consultation, le Dr Samia Mrabat réalise un examen du cuir chevelu et de la chevelure afin d'identifier l'origine de la chute de cheveux ou des symptômes.</p>
                <p>Selon votre situation, des examens complémentaires peuvent être proposés afin d'orienter le diagnostic.</p>
                <p>Une fois la cause identifiée, un traitement personnalisé vous est expliqué ainsi que les conseils à suivre pour préserver la santé du cuir chevelu.</p>

                <h2>Les traitements proposés</h2>
                <p>La prise en charge dépend toujours du diagnostic. Selon votre situation, le Dr Samia Mrabat peut proposer :</p>
                <ul className="check-list">
                  <li>Des traitements locaux</li>
                  <li>Des traitements par voie orale lorsque cela est indiqué</li>
                  <li>Des soins dermatologiques adaptés au cuir chevelu</li>
                  <li>Des conseils personnalisés concernant l'hygiène capillaire</li>
                  <li>Un suivi régulier afin d'évaluer l'évolution de la repousse</li>
                </ul>

                <h2>Conseils pour préserver la santé de vos cheveux</h2>
                <p>Quelques habitudes simples permettent de protéger durablement vos cheveux :</p>
                <ul className="check-list">
                  <li>Utiliser un shampoing adapté à votre cuir chevelu</li>
                  <li>Éviter les traitements capillaires agressifs</li>
                  <li>Adopter une alimentation équilibrée</li>
                  <li>Limiter les sources de stress lorsque cela est possible</li>
                  <li>Consulter rapidement en cas de chute inhabituelle</li>
                </ul>

                <h2>Pourquoi consulter rapidement ?</h2>
                <p>Une prise en charge précoce permet souvent de ralentir l'évolution de certaines formes de chute de cheveux et d'améliorer les chances de repousse lorsqu'un traitement est indiqué.</p>
                <p>Plus le diagnostic est posé tôt, plus les solutions thérapeutiques peuvent être efficaces.</p>
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
