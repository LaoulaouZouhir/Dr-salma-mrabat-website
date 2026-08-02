import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function AcneRosacee() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Diagnostic et Traitement de l’Acné et de la Rosacée',
    description: 'Prise en charge personnalisée de l’acné et de la rosacée à Meknès par le Dr Samia Mrabat.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Cabinet du Dr Samia Mrabat',
      address: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Meknès 50000, Maroc',
    },
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Acné et rosacée à Meknès | Dermatologue Dr Samia Mrabat"
        description="Le Dr Samia Mrabat, dermatologue à Meknès, prend en charge l'acné et la rosacée chez l'adolescent et l'adulte grâce à un diagnostic précis et des traitements personnalisés."
        keywords="Acné Meknès, Rosacée Meknès, Traitement acné adulte Meknès, Dermatologue acné Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/acne-rosacee"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: 'Acné et Rosacée' },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Acné et rosacée : diagnostic et traitement à Meknès</h1>
          <p className="subpage-subtitle">
            L'acné et la rosacée sont deux maladies de peau fréquentes qui peuvent avoir un impact important sur le confort quotidien et la confiance en soi. Bien qu'elles puissent présenter certains symptômes similaires, elles nécessitent une prise en charge différente.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-grid-layout">
            <div className="subpage-main-body">
              
              <article className="medical-article">
                <h2>Qu'est-ce que l'acné ?</h2>
                <p>
                  L'acné est une maladie inflammatoire chronique des follicules pilo-sébacés. Elle apparaît lorsque les pores de la peau s'obstruent sous l'effet d'un excès de sébum, de cellules mortes et de bactéries naturellement présentes sur la peau.
                </p>
                <p>
                  Contrairement aux idées reçues, l'acné ne concerne pas uniquement les adolescents. Elle peut également toucher les adultes, en particulier les femmes, et persister pendant plusieurs années sans traitement adapté. Les zones les plus fréquemment atteintes sont le visage, le dos, les épaules et le thorax.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_39_img_1.jpeg"
                    alt="Illustration médicale 3D d'une coupe de peau montrant l'acné, le follicule pileux et le sébum"
                    caption="Mécanisme d'apparition de l'acné : obstruction du follicule pilo-sébacé et réaction inflammatoire cutanée."
                  />
                </div>

                <h2>Qu'est-ce que la rosacée ?</h2>
                <p>
                  La rosacée est une maladie inflammatoire chronique qui touche principalement le centre du visage. Elle se manifeste par des rougeurs persistantes, des petits vaisseaux visibles et parfois des boutons inflammatoires.
                </p>
                <p>
                  Cette affection évolue généralement par poussées. Certains facteurs comme le soleil, la chaleur, le stress, les boissons chaudes ou les aliments épicés peuvent favoriser son apparition ou accentuer les symptômes. Un diagnostic réalisé par un dermatologue est indispensable afin de différencier la rosacée d'autres maladies cutanées.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_40_img_1.jpeg"
                    alt="Illustration médicale d'un visage présentant de la rosacée avec rougeurs localisées"
                    caption="Symptômes caractéristiques de la rosacée sur les joues, le nez et le menton."
                  />
                </div>

                <h2>Quels sont les symptômes de l'acné et de la rosacée ?</h2>
                <div className="symptoms-dual-grid">
                  <div className="symptom-card">
                    <h3>Symptômes de l'acné</h3>
                    <ul>
                      <li>Points noirs (comédons ouverts)</li>
                      <li>Points blancs (comédons fermés)</li>
                      <li>Boutons rouges inflammatoires &amp; pustules</li>
                      <li>Nodules et kystes douloureux</li>
                      <li>Excès de sébum et cicatrices récurrentes</li>
                    </ul>
                  </div>
                  <div className="symptom-card">
                    <h3>Symptômes de la rosacée</h3>
                    <ul>
                      <li>Rougeurs persistantes et érythrose</li>
                      <li>Bouffées de chaleur du visage (flushes)</li>
                      <li>Petits vaisseaux sanguins visibles (couperose)</li>
                      <li>Sensation de brûlure et peau hyper-réactive</li>
                      <li>Boutons inflammatoires sans comédons</li>
                    </ul>
                  </div>
                </div>

                <h2>Quelles sont les causes et facteurs déclenchants ?</h2>
                <div className="two-column-list">
                  <div>
                    <h4>Causes de l'acné</h4>
                    <ul>
                      <li>Variations hormonales (puberté, cycle menstruel)</li>
                      <li>Prédisposition génétique et type de peau</li>
                      <li>Production excessive de sébum &amp; prolifération bactérienne</li>
                      <li>Stress et facteurs environnementaux</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Facteurs déclenchants de la rosacée</h4>
                    <ul>
                      <li>Exposition directe au soleil et Rayons UV</li>
                      <li>Fortes chaleurs et variations de température</li>
                      <li>Boissons très chaudes, alcool et aliments épicés</li>
                      <li>Stress et prédisposition familiale</li>
                    </ul>
                  </div>
                </div>

                <h2>Quand consulter un dermatologue ?</h2>
                <p>Il est recommandé de consulter au cabinet du Dr Samia Mrabat si :</p>
                <ul className="check-list">
                  <li>Les boutons deviennent douloureux ou nombreux</li>
                  <li>Les rougeurs persistent malgré les soins dermo-cosmétiques habituels</li>
                  <li>Des cicatrices d'acné apparaissent sur la peau</li>
                  <li>Les traitements achetés en pharmacie restent inefficaces</li>
                  <li>Votre maladie cutanée a un impact sur votre qualité de vie</li>
                </ul>

                <h2>Les traitements proposés au cabinet</h2>
                <p>
                  Chaque patient bénéficie d'une prise en charge individualisée en fonction du diagnostic établi lors de la consultation par le Dr Samia Mrabat :
                </p>
                <ul className="bullet-list">
                  <li><strong>Traitements locaux sur-mesure</strong> (crèmes, gels prescrits)</li>
                  <li><strong>Traitements par voie orale</strong> lorsque cela est médicalement indiqué</li>
                  <li><strong>Conseils dermo-cosmétiques adaptés</strong> (nettoyants doux, crèmes non comédogènes)</li>
                  <li><strong>Peelings dermatologiques</strong> adaptés pour lisser la peau et resserrer les pores</li>
                  <li><strong>Prise en charge des cicatrices d'acné</strong> (microneedling, peelings ciblés)</li>
                  <li><strong>Suivi dermatologique régulier</strong> pour adapter le traitement à l'évolution de la peau</li>
                </ul>

                <h2>Conseils pour prendre soin de votre peau au quotidien</h2>
                <ul className="advice-box">
                  <li>Nettoyer son visage deux fois par jour avec un soin doux sans savon.</li>
                  <li>Éviter impérativement de percer ou manipuler les boutons pour prévenir l'infection.</li>
                  <li>Appliquer quotidiennement une protection solaire SPF50+ fluide non comédogène.</li>
                  <li>Suivre rigoureusement l'ordonnance et éviter l'automédication prolongée.</li>
                </ul>
              </article>

            </div>

            {/* Sidebar info */}
            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Vous présentez des boutons persistants ou des rougeurs du visage ?</p>
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
