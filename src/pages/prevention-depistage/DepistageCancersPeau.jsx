import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function DepistageCancersPeau() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Dépistage des cancers de la peau à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise le dépistage des cancers de la peau grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Dépistage des cancers de la peau à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise le dépistage des cancers de la peau grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué."
        keywords="Dépistage cancer de la peau Meknès, Mélanome Meknès, Carcinome Meknès, Dermoscopie Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/depistage-cancers-peau"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Dépistage des cancers de la peau" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Dépistage des cancers de la peau à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Le dépistage des cancers de la peau permet d'identifier précocement certaines lésions suspectes avant qu'elles n'évoluent. Un diagnostic réalisé à un stade précoce favorise une prise en charge adaptée.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un examen clinique complet de la peau et utilise la dermoscopie lorsque cela est indiqué afin d'évaluer les grains de beauté et les autres lésions cutanées.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="depistage-cancers-peau" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Pourquoi réaliser un dépistage ?</h2>
                <p>Les cancers de la peau figurent parmi les cancers les plus fréquents. Lorsqu'ils sont détectés précocement, ils peuvent être pris en charge plus rapidement.</p>
                <p>Un dépistage est particulièrement recommandé chez les personnes présentant :</p>
                <ul className="check-list">
                  <li>De nombreux grains de beauté</li>
                  <li>Une peau claire</li>
                  <li>Des antécédents personnels ou familiaux de cancer cutané</li>
                  <li>Une exposition importante au soleil au cours de la vie</li>
                  <li>Des coups de soleil répétés, notamment pendant l'enfance</li>
                  <li>Une apparition récente ou une modification d'une lésion cutanée</li>
                </ul>

                
                <ArticleImageBlock articleId="depistage-cancers-peau" imageIndex={1} />
<h2>Comment se déroule le dépistage ?</h2>
                <p>Lors de la consultation, le dermatologue examine l'ensemble de la peau, du cuir chevelu jusqu'aux pieds.</p>
                <p>Lorsque cela est nécessaire, une dermoscopie est réalisée. Cet examen utilise un dermatoscope permettant d'observer les structures de la peau invisibles à l'œil nu et d'évaluer plus précisément certaines lésions.</p>
                <p>Si une anomalie est identifiée, une surveillance, une biopsie ou une exérèse peut être proposée selon les indications médicales.</p>

                
                <ArticleImageBlock articleId="depistage-cancers-peau" imageIndex={2} />
<h2>Quels signes doivent vous amener à consulter ?</h2>
                <p>Une consultation dermatologique est recommandée si vous observez :</p>
                <ul className="check-list">
                  <li>Un grain de beauté qui change de taille, de forme ou de couleur</li>
                  <li>Une nouvelle lésion pigmentée</li>
                  <li>Une plaie qui ne cicatrise pas</li>
                  <li>Une lésion qui saigne spontanément</li>
                  <li>Une croûte persistante</li>
                  <li>Une lésion qui démange ou devient douloureuse</li>
                </ul>
                <p>Ces signes ne signifient pas nécessairement qu'il s'agit d'un cancer de la peau, mais ils justifient un avis spécialisé.</p>
                

                <h2>La règle ABCDE</h2>
                <p>Pour repérer certaines lésions suspectes, les dermatologues utilisent notamment la règle ABCDE :</p>
                <ul className="check-list">
                  <li><strong>A</strong> : Asymétrie</li>
                  <li><strong>B</strong> : Bords irréguliers</li>
                  <li><strong>C</strong> : Couleurs multiples</li>
                  <li><strong>D</strong> : Diamètre supérieur à 6 mm</li>
                  <li><strong>E</strong> : Évolution de la lésion</li>
                </ul>
                <p>Cette règle constitue un outil d'alerte, mais seul un examen dermatologique permet d'établir un diagnostic.</p>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Toutes les lésions pigmentées ne sont pas cancéreuses.</p>
                <p>Une consultation dermatologique permet d'établir un diagnostic précis, d'éviter des inquiétudes inutiles et de mettre en place une surveillance ou une prise en charge adaptée lorsque cela est nécessaire.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour un dépistage personnalisé.</p>
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
