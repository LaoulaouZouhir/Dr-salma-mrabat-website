import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function InjectionsBotoxHyaluronique() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Injections de Botox® et d’Acide Hyaluronique',
    description: 'Traitement des rides, restauration des volumes et rajeunissement du visage à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper aesthetic-subpage">
      <SEO
        title="Botox® et acide hyaluronique à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise les injections de Botox® et d'acide hyaluronique pour le traitement des rides, la prévention du vieillissement cutané et l'harmonisation du visage."
        keywords="Botox Meknès, Acide hyaluronique Meknès, Injections rides Meknès, Prix injection botox Meknès, Dermatologue esthétique Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique/injections-botox-acide-hyaluronique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero aesthetic-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Esthétique', url: '/dermatologie-esthetique' },
              { label: 'Injections (Botox & Hyaluronique)' },
            ]}
          />
          <span className="subpage-badge gold-badge">MÉDECINE ESTHÉTIQUE</span>
          <h1 className="subpage-title">Injections de Botox® et d'acide hyaluronique à Meknès</h1>
          <p className="subpage-subtitle">
            Les injections de Botox® et d'acide hyaluronique font partie des traitements les plus utilisés en médecine esthétique pour prévenir ou corriger les signes du vieillissement du visage tout en préservant un résultat naturel.
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
                    src="/images/pdf_extracted/page_67_img_1.jpeg"
                    alt="Visuel des zones d'injection sur le visage : rides du front, ride du lion, patte d'oie, sillons nasogéniens, lèvres"
                    caption="Zones d'intervention fréquentes pour l’acide hyaluronique et la toxine botulique."
                  />
                </div>

                <h2>Quelle est la différence entre le Botox® et l'acide hyaluronique ?</h2>
                <p>
                  Bien qu'ils soient souvent associés, ces deux traitements ont des mécanismes d'action et des indications totalement complémentaires :
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_68_img_1.jpeg"
                    alt="Schéma explicatif : Deux traitements, deux actions différentes (Botox agit sur muscles, Acide hyaluronique agit sur volumes)"
                    caption="Action musculaire du Botox® vs Action de comblement et d'hydratation de l'Acide Hyaluronique."
                  />
                </div>

                <ul className="bullet-list">
                  <li><strong>Toxine botulique (Botox®) :</strong> agit en diminuant temporairement la contraction des muscles responsables des rides d'expression (front, ride du lion, pattes d'oie) pour lisser les traits sans figer le visage.</li>
                  <li><strong>Acide hyaluronique :</strong> molécule naturellement présente dans la peau, injectée sous forme de gel pour combler les rides profondes, restaurer les volumes perdus (pommettes, temps, menton) et hydrater intensément la pulpe des lèvres.</li>
                </ul>

                <h2>Dans quels cas ces injections sont-elles indiquées ?</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_69_img_1.jpeg"
                    alt="Infographie : Les principales indications sur le visage (Front, Lion, Patte d'oie, Cernes, Tempes, Pommettes, Sillons, Lèvres, Plis d'amertume, Menton)"
                    caption="Principales indications d'harmonisation et de comblement du visage."
                  />
                </div>

                <ul className="check-list">
                  <li>Rides d'expression du front, du intersourcil (lion) et des yeux (patte d'oie)</li>
                  <li>Sillons nasogéniens marqués et plis d'amertume autour de la bouche</li>
                  <li>Perte de volume au niveau des pommettes, des tempes ou des cernes</li>
                  <li>Hydratation profonde ou redéfinition des contours des lèvres</li>
                  <li>Harmonisation du menton et correction d’asymétries faciales</li>
                </ul>

                <h2>Comment se déroule une séance ?</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_70_img_1.jpeg"
                    alt="Infographie 4 étapes : Comment se déroule une séance (1. Analyse du visage, 2. Discussion, 3. Injections ciblées, 4. Conseils après séance)"
                    caption="Déroulement sécurisé d'une séance d'injection au cabinet du Dr Samia Mrabat."
                  />
                </div>

                <h2>Précautions à prendre après la séance</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_71_img_1.jpeg"
                    alt="Infographie 6 recommandations après injections : Éviter le sport intense, la chaleur excessive, ne pas masser la zone, éviter le maquillage 12h, protéger sa peau, contacter le cabinet"
                    caption="Consignes post-injection recommandées pour optimiser la tenue et le confort."
                  />
                </div>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card aesthetic-sidebar-card">
                <h3>Rendez-vous Esthétique</h3>
                <p>Bénéficiez d'une évaluation personnalisée de votre visage à Meknès.</p>
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
