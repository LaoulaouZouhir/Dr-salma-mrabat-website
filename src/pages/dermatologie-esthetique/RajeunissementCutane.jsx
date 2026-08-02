import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function RajeunissementCutane() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Prise en charge du Rajeunissement Cutané',
    description: 'Protocoles anti-âge globaux et rajeunissement du visage à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper aesthetic-subpage">
      <SEO
        title="Rajeunissement cutané à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, propose une prise en charge personnalisée du vieillissement cutané afin d'améliorer la qualité de la peau, sa fermeté et son éclat."
        keywords="Rajeunissement cutané Meknès, Anti-âge Meknès, Relâchement visage Meknès, Fermeté peau Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/rajeunissement-cutane"
        jsonLd={schemaData}
      />

      <section className="subpage-hero aesthetic-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: 'Rajeunissement Cutané' },
            ]}
          />
          <span className="subpage-badge gold-badge">PREVENTION &amp; ANTI-ÂGE GLOBAL</span>
          <h1 className="subpage-title">Rajeunissement cutané à Meknès</h1>
          <p className="subpage-subtitle">
            Le vieillissement cutané est un phénomène naturel qui évolue progressivement avec l'âge. Une prise en charge globale permet d'agir sur les signes du temps tout en préservant l'harmonie naturelle du visage.
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
                    src="/images/pdf_extracted/page_92_img_1.jpeg"
                    alt="Infographie : Rajeunissement cutané - Agir sur les signes du temps (Rides, Fermeté, Élasticté, Éclat, Hydratation)"
                    caption="Objectifs du rajeunissement médical : préserver le capital jeunesse de la peau."
                  />
                </div>

                <h2>Pourquoi la peau vieillit-elle ?</h2>
                <p>
                  Au fil des années, la production de collagène diminue, les fibres d'élastine s'altèrent, l'hydratation naturelle baisse et le renouvellement cellulaire ralentit. Le soleil, le tabac et le stress accélèrent ce phénomène.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_94_img_1.jpeg"
                    alt="Schéma 3D explicatif : Pourquoi la peau vieillit-elle ? (Peau jeune ferme vs Peau mature relâchée)"
                    caption="Différence biologique entre une peau jeune et une peau mature."
                  />
                </div>

                <h2>Le processus naturel du rajeunissement cutané</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_95_img_1.jpeg"
                    alt="Infographie 3 étapes : Le processus naturel du rajeunissement cutané (Stimulation progressive -> Renouvellement cellulaire -> Peau plus ferme et éclatante)"
                    caption="Étapes de régénération cellulaire pour un aspect reposé et rajeuni."
                  />
                </div>

                <h2>Protocoles combinés proposés</h2>
                <ul className="bullet-list">
                  <li><strong>Injections combinées (Botox® + Acide Hyaluronique) :</strong> lissage des rides d'expression et réhydratation des volumes.</li>
                  <li><strong>Mésolift &amp; Microneedling :</strong> relance de la synthèse de collagène.</li>
                  <li><strong>Peelings régénérants :</strong> renouvellement épidermique et éclat du teint.</li>
                </ul>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card aesthetic-sidebar-card">
                <h3>Rendez-vous Anti-Âge</h3>
                <p>Consultez le Dr Samia Mrabat à Meknès pour un protocole personnalisé.</p>
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
