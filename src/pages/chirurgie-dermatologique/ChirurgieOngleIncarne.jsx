import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function ChirurgieOngleIncarne() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Chirurgie de l’Ongle Incarné',
    description: 'Traitement chirurgical de l’ongle incarné sous anesthésie locale à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Chirurgie de l'ongle incarné à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge les ongles incarnés lorsque leur traitement chirurgical est indiqué afin de soulager durablement la douleur et prévenir les récidives."
        keywords="Chirurgie ongle incarné Meknès, Traitement ongle incarné douloureux Meknès, Bourgeon charnu orteil Meknès"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/chirurgie-ongle-incarne"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: 'Chirurgie de l\'Ongle Incarné' },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Chirurgie de l'ongle incarné à Meknès</h1>
          <p className="subpage-subtitle">
            L'ongle incarné survient lorsqu'un bord de l'ongle pénètre dans la chair voisine, provoquant une douleur vive, une rougeur et parfois un bourgeon charnu infecté.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              
              <article className="medical-article">
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_115_img_1.jpeg"
                    alt="Schéma médical comparatif : Ongle Normal vs Ongle Incarné avec inflammation du repli"
                    caption="Mécanisme d'incarnation de l'ongle dans le repli latéral."
                  />
                </div>

                <h2>Pourquoi un ongle devient-il incarné ?</h2>
                <p>
                  Une coupe d'ongles trop courte ou arrondie, des chaussures trop étables, des traumatismes répétés ou une forme d'ongle très courbée favorisent l'incarcération du bord unguéal dans le sillon latéral.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_117_img_1.jpeg"
                    alt="Infographie 4 étapes : Comment se déroule la chirurgie de l'ongle incarné (1. Examen, 2. Anesthésie locale, 3. Retrait de la partie incarnée, 4. Pansement)"
                    caption="Étapes de la résection partielle de l'ongle sous anesthésie locale."
                  />
                </div>

                <h2>Comment se déroule la chirurgie ?</h2>
                <p>
                  L'intervention se déroule sous anesthésie locale indolore à la base de l'orteil. Le dermatologue retire uniquement la languette d'ongle responsable de l'incarnation ainsi que la matrice correspondante afin d’éviter définitivement toute récidive, en préservant l'esthétique générale de l'orteil.
                </p>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat pour soulager un ongle incarné à Meknès.</p>
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
