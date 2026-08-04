import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';
import { useArticleImages } from '../../utils/articleImageHelper';

export default function EczemaPsoriasisVitiligo() {
  const images = useArticleImages('eczema-psoriasis-vitiligo');
  const img1 = images[0] || { src: '/images/pdf_extracted/page_38_img_1.jpeg', alt: '', caption: '' };
  const img2 = images[1] || { src: '/images/pdf_extracted/page_40_img_1.jpeg', alt: '', caption: '' };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Eczéma, psoriasis et vitiligo : diagnostic et prise en charge à Meknès",
    description: "Le Dr Samia Mrabat, dermatologue à Meknès, assure le diagnostic et la prise en charge de l'eczéma, du psoriasis et du vitiligo chez l'adulte et l'enfant.",
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Eczéma, psoriasis et vitiligo à Meknès | Dermatologue Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, assure le diagnostic et la prise en charge de l'eczéma, du psoriasis et du vitiligo chez l'adulte et l'enfant."
        keywords="Eczéma Meknès, Psoriasis Meknès, Vitiligo Meknès, Dermatologue Meknès, Dr Samia Mrabat"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/eczema-psoriasis-vitiligo"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: "Eczéma, psoriasis et vitiligo" },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Eczéma, psoriasis et vitiligo : diagnostic et prise en charge à Meknès</h1>
          <div className="subpage-subtitle">
            <p>Les maladies inflammatoires et pigmentaires de la peau, comme l'eczéma, le psoriasis et le vitiligo, peuvent provoquer un inconfort important au quotidien et avoir un impact sur la qualité de vie. Bien que leurs symptômes soient différents, elles nécessitent toutes un diagnostic précis afin de proposer une prise en charge adaptée.</p>
            <p>Le Dr Samia Mrabat, dermatologue à Meknès, vous accompagne dans le diagnostic, le traitement et le suivi de ces affections cutanées afin d'améliorer durablement la santé de votre peau.</p>
          </div>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              <article className="medical-article">
                {img1 && img1.src && (
                  <div className="diagram-block hero-diagram">
                    <LightboxImage
                      src={img1.src}
                      alt={img1.alt || "Eczéma, psoriasis et vitiligo"}
                      caption={img1.caption}
                    />
                  </div>
                )}

                <h2>Qu'est-ce que l'eczéma ?</h2>
                <p>L'eczéma est une maladie inflammatoire chronique de la peau caractérisée par une altération de la barrière cutanée. Il provoque des plaques rouges, des démangeaisons parfois très intenses et une peau sèche.</p>
                <p>Il existe plusieurs formes d'eczéma, notamment l'eczéma atopique et l'eczéma de contact. Les poussées peuvent être déclenchées par différents facteurs comme certains allergènes, les irritants, le stress ou les variations climatiques.</p>
                <p>Une prise en charge adaptée permet généralement de soulager les symptômes et de réduire la fréquence des poussées.</p>

                <h2>Qu'est-ce que le psoriasis ?</h2>
                <p>Le psoriasis est une maladie inflammatoire chronique liée à un renouvellement accéléré des cellules de la peau. Il se manifeste par des plaques épaisses, rouges, recouvertes de squames blanchâtres.</p>
                <p>Les lésions apparaissent le plus souvent au niveau des coudes, des genoux, du cuir chevelu ou du bas du dos, mais peuvent toucher d'autres parties du corps.</p>
                <p>Le psoriasis évolue par périodes de poussées et de rémission. Une prise en charge dermatologique permet d'adapter le traitement selon la sévérité de la maladie et son impact sur la vie quotidienne.</p>

                <h2>Qu'est-ce que le vitiligo ?</h2>
                <p>Le vitiligo est une maladie chronique caractérisée par la disparition progressive des cellules responsables de la pigmentation de la peau, appelées mélanocytes.</p>
                <p>Il se traduit par l'apparition de taches blanches bien délimitées pouvant toucher différentes zones du corps.</p>
                <p>Le vitiligo n'est ni contagieux ni douloureux, mais son retentissement esthétique et psychologique peut être important. Une consultation dermatologique permet de confirmer le diagnostic et de discuter des différentes options thérapeutiques.</p>
                {img2 && img2.src && (
                  <div className="diagram-block">
                    <LightboxImage
                      src={img2.src}
                      alt={img2.alt || "Vitiligo et maladies pigmentaires"}
                      caption={img2.caption}
                    />
                  </div>
                )}

                <h2>Quels sont les symptômes ?</h2>
                <h3>Symptômes de l'eczéma</h3>
                <ul className="check-list">
                  <li>Démangeaisons importantes</li>
                  <li>Rougeurs</li>
                  <li>Peau sèche</li>
                  <li>Plaques inflammatoires</li>
                  <li>Suintement dans certaines formes</li>
                  <li>Épaississement de la peau lors des formes chroniques</li>
                </ul>
                <h3>Symptômes du psoriasis</h3>
                <ul className="check-list">
                  <li>Plaques rouges épaisses</li>
                  <li>Squames blanchâtres</li>
                  <li>Démangeaisons</li>
                  <li>Sensation de tiraillement</li>
                  <li>Atteinte possible des ongles</li>
                  <li>Atteinte possible du cuir chevelu</li>
                </ul>
                <h3>Symptômes du vitiligo</h3>
                <ul className="check-list">
                  <li>Taches blanches bien limitées</li>
                  <li>Dépigmentation progressive</li>
                  <li>Atteinte du visage, des mains, des coudes ou d'autres zones du corps</li>
                  <li>Parfois blanchiment précoce des poils sur les zones concernées</li>
                </ul>

                <h2>Quand consulter un dermatologue ?</h2>
                <p>Il est recommandé de consulter lorsque :</p>
                <ul className="check-list">
                  <li>Les plaques persistent ou s'étendent</li>
                  <li>Les démangeaisons deviennent importantes</li>
                  <li>Les traitements habituels ne sont plus efficaces</li>
                  <li>De nouvelles taches blanches apparaissent</li>
                  <li>Les lésions reviennent fréquemment</li>
                  <li>Les symptômes ont un impact sur votre qualité de vie</li>
                </ul>
                <p>Un diagnostic précoce permet d'adapter rapidement le traitement et d'améliorer le confort au quotidien.</p>

                <h2>Comment se déroule la consultation ?</h2>
                <p>Lors de la consultation, le Dr Samia Mrabat réalise un examen clinique complet de votre peau et vous interroge sur vos symptômes, leur évolution, vos antécédents médicaux et les traitements déjà utilisés.</p>
                <p>Cette évaluation permet d'établir un diagnostic précis et de proposer une prise en charge adaptée à votre situation.</p>

                <h2>Les traitements proposés</h2>
                <p>Selon le diagnostic et la sévérité de la maladie, le Dr Samia Mrabat peut proposer :</p>
                <ul className="check-list">
                  <li>Des traitements locaux adaptés</li>
                  <li>Des traitements par voie générale lorsque cela est indiqué</li>
                  <li>Des conseils personnalisés pour protéger la peau au quotidien</li>
                  <li>Un suivi dermatologique régulier afin d'évaluer l'évolution de la maladie et d'adapter le traitement</li>
                </ul>
                <p>Chaque prise en charge est individualisée en fonction des besoins du patient.</p>

                <h2>Conseils pour protéger votre peau</h2>
                <p>En complément du traitement, quelques gestes simples permettent de préserver votre peau :</p>
                <ul className="check-list">
                  <li>Hydrater la peau quotidiennement avec des soins adaptés</li>
                  <li>Éviter les produits irritants</li>
                  <li>Protéger la peau du soleil lorsque cela est recommandé</li>
                  <li>Respecter les traitements prescrits</li>
                  <li>Consulter dès l'apparition d'une aggravation des symptômes</li>
                </ul>

                <h2>Pourquoi consulter rapidement ?</h2>
                <p>Une prise en charge précoce permet souvent de mieux contrôler l'évolution de ces maladies, de limiter les poussées et d'améliorer durablement le confort et la qualité de vie.</p>
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
