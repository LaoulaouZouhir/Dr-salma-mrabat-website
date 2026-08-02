import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function PeelingsSoinsPeau() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Peelings Dermatologiques et Soins de la Peau',
    description: 'Peelings médicaux doux, moyens et profonds pour éclat du teint et renouvellement cutané à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper aesthetic-subpage">
      <SEO
        title="Peeling dermatologique à Meknès | Soins de la peau | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, propose des peelings dermatologiques et des soins de la peau adaptés pour améliorer l'éclat du teint, la texture cutanée et certaines imperfections."
        keywords="Peeling dermatologique Meknès, Peeling moyen Meknès, Traitement teint terne Meknès, Resserrement pores Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/peelings-soins-peau"
        jsonLd={schemaData}
      />

      <section className="subpage-hero aesthetic-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: 'Peelings & Soins de la Peau' },
            ]}
          />
          <span className="subpage-badge gold-badge">QUALITÉ &amp; ÉCLAT DE LA PEAU</span>
          <h1 className="subpage-title">Peelings dermatologiques et soins de la peau à Meknès</h1>
          <p className="subpage-subtitle">
            Les peelings dermatologiques sont des traitements réalisés par un dermatologue afin de régénérer l'épiderme, raviver l'éclat du teint et uniformiser la texture du visage.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              
              <article className="medical-article aesthetic-article">
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_74_img_1.jpeg"
                    alt="Infographie : Peelings dermatologiques - Améliorez la qualité de votre peau (Éclat, Grain de peau, Pores, Taches, Ridules)"
                    caption="Bénéfices ciblés du peeling médical sur la qualité du teint et le grain de peau."
                  />
                </div>

                <h2>Qu'est-ce qu'un peeling dermatologique ?</h2>
                <p>
                  Un peeling dermatologique consiste à appliquer sur la peau une solution spécifique provoquant une exfoliation contrôlée des couches superficielles ou moyennes de l'épiderme. Ce processus stimule le renouvellement cellulaire et la production de collagène.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_75_img_1.jpeg"
                    alt="Schéma 3D en 3 étapes : Le Peeling Dermatologique (1. Avant cellules mortes, 2. Pendant application, 3. Après peau renouvelée)"
                    caption="Mécanisme d'action du peeling : élimination des cellules mortes et régénération cutanée."
                  />
                </div>

                <h2>Dans quels cas un peeling est-il indiqué ?</h2>
                <ul className="check-list">
                  <li>Raviver un teint terne, asphyxié ou fatigué</li>
                  <li>Lisser le grain de peau et resserrer les pores dilatés</li>
                  <li>Atténuer les taches pigmentaires superficielles (masque de grossesse, lentigos)</li>
                  <li>Accompagner le traitement des cicatrices légères d'acné</li>
                  <li>Atténuer les ridules superficielles du visage</li>
                </ul>

                <h2>Comment se déroule une séance ?</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_77_img_1.jpeg"
                    alt="Infographie 4 étapes : Comment se déroule une séance de peeling (1. Analyse, 2. Préparation, 3. Application, 4. Conseils après séance)"
                    caption="Protocole médical d'une séance de peeling au cabinet."
                  />
                </div>

                <h2>Le processus de renouvellement cutané</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_78_img_1.jpeg"
                    alt="Infographie 3D : Renouvellement cutané (Élimination cellules mortes -> Stimulation renouvellement -> Peau renouvelée plus lisse)"
                    caption="Résultat progressif : peau plus lisse, uniforme et lumineuse."
                  />
                </div>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card aesthetic-sidebar-card">
                <h3>Rendez-vous Peeling</h3>
                <p>Consultez le Dr Samia Mrabat pour une évaluation de votre peau à Meknès.</p>
                <a href="tel:0535524067" className="side-btn-call">📞 05 35 52 40 67</a>
                <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="side-btn-wa">💬 WhatsApp direct</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
