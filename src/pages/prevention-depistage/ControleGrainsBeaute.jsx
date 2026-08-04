import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function ControleGrainsBeaute() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Contrôle des grains de beauté à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise le contrôle des grains de beauté grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Contrôle des grains de beauté à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise le contrôle des grains de beauté grâce à un examen clinique complet et à la dermoscopie lorsque cela est indiqué."
        keywords="Contrôle grain de beauté Meknès, Naevus atypique Meknès, Dermoscopie Meknès, Surveillance grains de beauté Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/controle-grains-beaute"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Contrôle des grains de beauté" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Contrôle des grains de beauté à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les grains de beauté (naevus) sont très fréquents et, dans la majorité des cas, bénins. Toutefois, certains peuvent évoluer au fil du temps ou présenter des caractéristiques qui nécessitent une surveillance dermatologique.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise un examen clinique de vos grains de beauté afin d'évaluer leur aspect, de rechercher d'éventuelles anomalies et de déterminer si une simple surveillance ou une prise en charge complémentaire est nécessaire.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="controle-grains-beaute" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Pourquoi faire contrôler ses grains de beauté ?</h2>
                <p>Un contrôle dermatologique permet :</p>
                <ul className="check-list">
                  <li>De surveiller l'évolution de certains grains de beauté</li>
                  <li>D'identifier précocement des lésions inhabituelles</li>
                  <li>De distinguer les lésions bénignes des lésions nécessitant une surveillance particulière</li>
                  <li>De bénéficier d'un suivi personnalisé selon votre profil</li>
                </ul>
                <p>La plupart des grains de beauté sont bénins, mais leur surveillance peut être recommandée dans certaines situations.</p>

                
                <ArticleImageBlock articleId="controle-grains-beaute" imageIndex={1} />
<h2>Qui devrait réaliser un contrôle dermatologique ?</h2>
                <p>Un contrôle est particulièrement recommandé si vous :</p>
                <ul className="check-list">
                  <li>Avez un grand nombre de grains de beauté</li>
                  <li>Présentez une peau claire</li>
                  <li>Avez des antécédents personnels ou familiaux de cancer de la peau</li>
                  <li>Avez subi de nombreux coups de soleil, notamment durant l'enfance</li>
                  <li>Observez l'apparition d'un nouveau grain de beauté à l'âge adulte</li>
                  <li>Remarquez une modification d'une lésion existante</li>
                </ul>

                
                <ArticleImageBlock articleId="controle-grains-beaute" imageIndex={2} />
<h2>Comment se déroule le contrôle ?</h2>
                <p>Lors de la consultation, le dermatologue examine l'ensemble des grains de beauté visibles.</p>
                <p>Lorsque cela est nécessaire, une dermoscopie est réalisée afin d'observer les structures de la peau invisibles à l'œil nu.</p>
                <p>Selon les résultats de l'examen, plusieurs options peuvent être proposées :</p>
                <ul className="check-list">
                  <li>Simple surveillance</li>
                  <li>Contrôle régulier</li>
                  <li>Photographie de suivi</li>
                  <li>Biopsie ou exérèse lorsqu'elles sont médicalement indiquées</li>
                </ul>
                

                <h2>Les signes qui doivent vous alerter</h2>
                <p>Il est recommandé de consulter rapidement si un grain de beauté :</p>
                <ul className="check-list">
                  <li>Change de taille</li>
                  <li>Change de forme</li>
                  <li>Change de couleur</li>
                  <li>Présente des bords irréguliers</li>
                  <li>Saigne spontanément</li>
                  <li>Démange ou devient douloureux</li>
                  <li>Évolue rapidement</li>
                </ul>
                <p>Ces signes ne permettent pas à eux seuls de poser un diagnostic, mais justifient un avis dermatologique.</p>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>L'examen d'un grain de beauté nécessite une évaluation médicale précise.</p>
                <p>Le dermatologue dispose des connaissances et des outils nécessaires, notamment la dermoscopie, pour analyser les lésions cutanées et déterminer la conduite à tenir la plus adaptée.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour un contrôle personnalisé de vos grains de beauté.</p>
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
