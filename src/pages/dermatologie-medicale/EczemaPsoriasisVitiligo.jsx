import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import LightboxImage from '../../components/Lightbox';

export default function EczemaPsoriasisVitiligo() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Prise en charge de l’Eczéma, du Psoriasis et du Vitiligo',
    description: 'Diagnostic et traitement de l’eczéma, du psoriasis et du vitiligo chez l’adulte et l’enfant à Meknès par le Dr Samia Mrabat.',
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
        keywords="Eczéma Meknès, Psoriasis Meknès, Vitiligo Meknès, Traitement plaques rouges Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale/eczema-psoriasis-vitiligo"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dermatologie Médicale', url: '/dermatologie-medicale' },
              { label: 'Eczéma, Psoriasis et Vitiligo' },
            ]}
          />
          <span className="subpage-badge">DERMATOLOGIE MÉDICALE</span>
          <h1 className="subpage-title">Eczéma, psoriasis et vitiligo : diagnostic et prise en charge à Meknès</h1>
          <p className="subpage-subtitle">
            Les maladies inflammatoires et pigmentaires de la peau, comme l'eczéma, le psoriasis et le vitiligo, peuvent provoquer un inconfort important au quotidien et avoir un impact sur la qualité de vie.
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
                    src="/images/pdf_extracted/page_38_img_1.jpeg"
                    alt="Schéma médical comparatif : Eczéma, Psoriasis et Vitiligo sur un modèle"
                    caption="Présentation comparée des affections cutanées inflammatoires et pigmentaires : Eczéma, Psoriasis et Vitiligo."
                  />
                </div>

                <h2>Qu'est-ce que l'eczéma ?</h2>
                <p>
                  L'eczéma est une maladie inflammatoire chronique de la peau caractérisée par une altération de la barrière cutanée. Il provoque des plaques rouges, des démangeaisons parfois très intenses et une peau sèche. Il existe plusieurs formes d'eczéma, notamment l'eczéma atopique et l'eczéma de contact.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_39_img_1.jpeg"
                    alt="Coupe 3D d'une peau saine vs une peau avec eczéma montrant l'altération de la barrière cutanée"
                    caption="Différence structurelle entre une peau saine et une peau atteinte d'eczéma (altération de la barrière épidermique)."
                  />
                </div>

                <h2>Qu'est-ce que le psoriasis ?</h2>
                <p>
                  Le psoriasis est une maladie inflammatoire chronique liée à un renouvellement accéléré des cellules de la peau. Il se manifeste par des plaques épaisses, rouges, recouvertes de squames blanchâtres au niveau des coudes, des genoux, du cuir chevelu ou du bas du dos.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_40_img_1.jpeg"
                    alt="Coupe 3D d'une peau normale vs peau avec psoriasis montrant l'accumulation de cellules mortes"
                    caption="Mécanisme du psoriasis : accélération du renouvellement cellulaire (3 à 7 jours au lieu de 28 jours)."
                  />
                </div>

                <h2>Qu'est-ce que le vitiligo ?</h2>
                <p>
                  Le vitiligo est une maladie chronique caractérisée par la disparition progressive des cellules responsables de la pigmentation de la peau (les mélanocytes). Il se traduit par l'apparition de taches blanches bien délimitées sur le visage, les mains, les coudes ou les pieds. Le vitiligo n'est ni contagieux ni douloureux.
                </p>

                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_41_img_1.jpeg"
                    alt="Coupe 3D montrant l'absence de mélanocytes dans le vitiligo"
                    caption="Processus de dépigmentation cutanée dans le vitiligo (disparition progressive des mélanocytes)."
                  />
                </div>

                <h2>Quand consulter un dermatologue ?</h2>
                <div className="diagram-block">
                  <LightboxImage
                    src="/images/pdf_extracted/page_43_img_1.jpeg"
                    alt="Infographie des signes qui doivent vous amener à consulter : plaques qui s'étendent, démangeaisons, nouvelles taches blanches"
                    caption="Signes d'alerte nécessitant un examen dermatologique au cabinet du Dr Samia Mrabat."
                  />
                </div>

                <ul className="check-list">
                  <li>Les plaques persistent ou s'étendent progressivement</li>
                  <li>Les démangeaisons deviennent intenses et perturbent le sommeil</li>
                  <li>Les traitements habituels ne sont plus efficaces</li>
                  <li>De nouvelles taches blanches apparaissent sur la peau</li>
                  <li>Les éruptions ont un impact sur votre bien-être au quotidien</li>
                </ul>

                <h2>Les traitements proposés</h2>
                <p>
                  Selon le diagnostic certifié par le Dr Samia Mrabat, la prise en charge peut inclure des traitements locaux apaisants, des soins dermocosmétiques spécifiques, une corticothérapie ciblée et un suivi régulier pour prévenir les poussées.
                </p>

                <h2>Conseils pour protéger votre peau</h2>
                <ul className="advice-box">
                  <li>Hydrater quotidiennement la peau avec des émollients adaptés.</li>
                  <li>Éviter les savons irritants et privilégier des lavants surgras.</li>
                  <li>Protéger la peau des températures extrêmes et du soleil intense.</li>
                  <li>Suivre méticuleusement les conseils du médecin traitant.</li>
                </ul>
              </article>

            </div>

            <aside className="subpage-sidebar">
              <div className="sidebar-booking-card">
                <h3>Prendre Rendez-vous</h3>
                <p>Besoin d'un diagnostic d'eczéma, psoriasis ou vitiligo à Meknès ?</p>
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
