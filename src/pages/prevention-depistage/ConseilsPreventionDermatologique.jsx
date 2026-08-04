import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleImageBlock from '../../components/ArticleImageBlock';

export default function ConseilsPreventionDermatologique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Conseils de prévention dermatologique à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne avec des conseils de prévention pour préserver la santé de votre peau et détecter précocement certaines maladies cutanées.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Conseils de prévention dermatologique à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne avec des conseils de prévention pour préserver la santé de votre peau et détecter précocement certaines maladies cutanées."
        keywords="Prévention dermatologique Meknès, Santé de la peau Meknès, Conseils dermatologiques Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage/conseils-prevention-dermatologique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Prévention & Dépistage', url: '/prevention-depistage' },
              { label: "Conseils de prévention dermatologique" },
            ]}
          />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE</span>
          <h1 className="subpage-title">Conseils de prévention dermatologique à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Préserver la santé de sa peau repose sur des gestes simples réalisés au quotidien. Une bonne prévention permet de limiter certains facteurs de risque, de protéger la peau contre les agressions extérieures et de favoriser la détection précoce de certaines maladies cutanées.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne grâce à des conseils personnalisés adaptés à votre type de peau, votre âge et vos facteurs de risque.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <ArticleImageBlock articleId="conseils-prevention-dermatologique" imageIndex={0} className="diagram-block hero-diagram" />

                <h2>Les gestes essentiels pour prendre soin de sa peau</h2>
                <p>Adopter quelques habitudes simples contribue à préserver durablement la santé de la peau. Il est notamment recommandé de :</p>
                <ul className="check-list">
                  <li>Protéger sa peau du soleil</li>
                  <li>Hydrater régulièrement la peau</li>
                  <li>Utiliser des produits adaptés à son type de peau</li>
                  <li>Éviter les produits irritants lorsqu'ils ne sont pas nécessaires</li>
                  <li>Surveiller l'apparition ou l'évolution de nouvelles lésions</li>
                </ul>
                <p>Ces gestes participent au maintien d'une peau en bonne santé.</p>

                
                <ArticleImageBlock articleId="conseils-prevention-dermatologique" imageIndex={1} />
<h2>Pourquoi surveiller régulièrement sa peau ?</h2>
                <p>Observer sa peau permet de repérer plus facilement certaines modifications.</p>
                <p>Il est conseillé de consulter un dermatologue en cas :</p>
                <ul className="check-list">
                  <li>D'apparition d'une nouvelle lésion</li>
                  <li>De modification d'un grain de beauté</li>
                  <li>De plaie qui ne cicatrise pas</li>
                  <li>De démangeaisons persistantes</li>
                  <li>De changement de couleur ou de forme d'une lésion</li>
                </ul>
                <p>Un diagnostic précoce permet d'orienter rapidement la prise en charge lorsque cela est nécessaire.</p>
                

                
                <ArticleImageBlock articleId="conseils-prevention-dermatologique" imageIndex={2} />
<h2>Les bonnes habitudes au quotidien</h2>
                <p>Quelques habitudes simples peuvent contribuer à préserver votre peau :</p>
                <ul className="check-list">
                  <li>Éviter les expositions solaires excessives</li>
                  <li>Adopter une protection solaire adaptée</li>
                  <li>Maintenir une bonne hydratation de la peau</li>
                  <li>Ne pas manipuler les lésions cutanées</li>
                  <li>Consulter rapidement en cas d'anomalie</li>
                </ul>

                <h2>Quand consulter un dermatologue ?</h2>
                <p>Une consultation est recommandée :</p>
                <ul className="check-list">
                  <li>Si une lésion apparaît ou évolue</li>
                  <li>Si un traitement prescrit ne donne pas les résultats attendus</li>
                  <li>En cas de symptômes persistants</li>
                  <li>Pour un contrôle dermatologique lorsque vous présentez des facteurs de risque</li>
                </ul>
                <p>Le dermatologue pourra établir un diagnostic précis et vous proposer une prise en charge adaptée.</p>

                <h2>Pourquoi consulter le Dr Samia Mrabat ?</h2>
                <p>Le Dr Samia Mrabat vous accompagne dans la prévention des maladies de la peau grâce à une approche personnalisée.</p>
                <p>Chaque consultation permet d'évaluer votre peau, de répondre à vos questions et de vous conseiller sur les mesures les plus adaptées à votre situation.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour des conseils personnalisés.</p>
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
