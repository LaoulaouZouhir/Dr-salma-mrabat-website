import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function ExereseKystesLipomes() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Exérèse des kystes et des lipomes à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, réalise l'exérèse des kystes et des lipomes lorsque leur prise en charge est indiquée, après une évaluation clinique personnalisée.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Exérèse kyste et lipome à Meknès | Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, réalise l'exérèse des kystes et des lipomes lorsque leur prise en charge est indiquée, après une évaluation clinique personnalisée."
        keywords="Exérèse kyste Meknès, Ablation lipome Meknès, Chirurgie kyste Meknès, Boule sous la peau Meknès"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique/exerese-kystes-lipomes"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Chirurgie Dermatologique', url: '/chirurgie-dermatologique' },
              { label: "Exérèse des kystes et des lipomes" },
            ]}
          />
          <span className="subpage-badge">CHIRURGIE DERMATOLOGIQUE</span>
          <h1 className="subpage-title">Exérèse des kystes et des lipomes à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les kystes et les lipomes sont des lésions bénignes fréquentes de la peau et des tissus sous-cutanés. Bien qu'ils soient généralement sans gravité, ils peuvent augmenter de volume, devenir douloureux, s'infecter ou entraîner une gêne fonctionnelle ou esthétique.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, réalise une évaluation clinique afin de confirmer le diagnostic et de déterminer si une exérèse chirurgicale est indiquée.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                <div className="diagram-block hero-diagram">
                  <LightboxImage
                    src="/images/pdf_extracted/page_99_img_1.jpeg"
                    alt="Infographie : Différence entre Kyste épidermoïde et Lipome"
                    caption="Caractéristiques cliniques des kystes et lipomes cutanés."
                  />
                </div>

                <h2>Qu'est-ce qu'un kyste ou un lipome ?</h2>
                <p>Un kyste est une poche située sous la peau contenant le plus souvent du sébum ou d'autres substances produites naturellement par l'organisme. Il se présente généralement sous la forme d'une petite boule mobile sous la peau.</p>
                <p>Un lipome est une tumeur bénigne constituée de cellules graisseuses. Il est le plus souvent souple, mobile et indolore.</p>
                <p>Bien que ces deux lésions soient différentes, elles nécessitent parfois une prise en charge lorsqu'elles deviennent gênantes ou évoluent.</p>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_100_img_1.jpeg"
                    alt="Infographie : Méthode d'exérèse chirurgicale sous anesthésie locale"
                    caption="Caractéristiques cliniques et méthode d'exérèse chirurgicale sous anesthésie locale."
                  />
                </div>

                <h2>Dans quels cas une exérèse peut-elle être proposée ?</h2>
                <p>Une intervention peut être envisagée notamment lorsque :</p>
                <ul className="check-list">
                  <li>Le kyste ou le lipome augmente de volume</li>
                  <li>Il devient douloureux ou inflammatoire</li>
                  <li>Des épisodes d'infection se répètent</li>
                  <li>Il provoque une gêne dans les mouvements ou le port de vêtements</li>
                  <li>Son emplacement entraîne une gêne esthétique importante</li>
                  <li>Un examen complémentaire est nécessaire pour confirmer le diagnostic</li>
                </ul>
                <p>Chaque indication est évaluée individuellement lors de la consultation.</p>

                <h2>Comment se déroule l'intervention ?</h2>
                <p>Après un examen clinique, le dermatologue vérifie que l'exérèse est indiquée.</p>
                <p>L'intervention est réalisée sous anesthésie locale. Une petite incision est effectuée afin de retirer complètement le kyste ou le lipome lorsque cela est possible.</p>
                <p>Une fois la lésion retirée, la peau est refermée avec des points de suture adaptés à la zone traitée. La durée de l'intervention varie selon la taille et la localisation de la lésion.</p>

                <h2>Après l'intervention</h2>
                <p>Après l'exérèse, des soins locaux simples sont généralement recommandés afin de favoriser une bonne cicatrisation.</p>
                <p>Le Dr Samia Mrabat vous remet des consignes personnalisées concernant les pansements, l'hygiène de la zone opérée, les activités à éviter temporairement et la date du contrôle si celui-ci est nécessaire.</p>

                <h2>Pourquoi consulter un dermatologue ?</h2>
                <p>Toutes les boules sous la peau ne correspondent pas à un kyste ou à un lipome.</p>
                <p>Une consultation dermatologique permet d'établir un diagnostic précis, d'écarter d'autres lésions cutanées et de déterminer si une exérèse est réellement indiquée.</p>
              </article>
            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Consultez le Dr Samia Mrabat, dermatologue à Meknès, pour une évaluation personnalisée.</p>
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
