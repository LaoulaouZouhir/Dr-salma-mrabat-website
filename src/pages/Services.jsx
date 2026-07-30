import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* Helper component to set page title and meta description */
function MetaUpdater({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.name = 'keywords';
      document.head.appendChild(metaKw);
    }
    metaKw.content = keywords;
  }, [title, description, keywords]);

  return null;
}

const serviceCategories = [
  {
    id: 'dermatologie-medicale',
    title: 'Dermatologie Médicale',
    badge: 'Santé de la peau',
    subtitle: 'Diagnostic et prise en charge globale des affections de la peau, des cheveux et des ongles.',
    img: '/images/medical-dermatology.jpg',
    subServices: [
      {
        name: 'Acné et rosacée',
        desc: 'Évaluation des causes et traitements personnalisés (médicamenteux, soins topiques, peelings adaptés) pour apaiser les inflammations et prévenir les cicatrices.',
        indications: ['Acné juvénile ou de l’adulte', 'Rosacée et couperose', 'Imperfections et rougeurs récurrentes'],
      },
      {
        name: 'Eczéma, psoriasis et vitiligo',
        desc: 'Prise en charge spécialisée des dermatoses chroniques et inflammatoires afin de réduire les crises et améliorer durablement la qualité de vie.',
        indications: ['Eczéma atopique et de contact', 'Plaques de psoriasis', 'Dépigmentation cutanée (vitiligo)'],
      },
      {
        name: 'Chute de cheveux et maladies du cuir chevelu',
        desc: 'Bilan alopécie approfondi pour identifier l’origine de la perte de cheveux (hormonale, carentielle, stress) et proposer un protocole ciblé (mésothérapie, PRP, lotions médicales).',
        indications: ['Alopécie androgénétique', 'Effluvium télogène (chute réactionnelle)', 'Pellicules sévères et démangeaisons'],
      },
      {
        name: 'Allergies, infections et maladies de la peau',
        desc: 'Diagnostic précis des urticaires, mycoses, zona, herpès, verrues et infections bactériennes ou fongiques cutanées.',
        indications: ['Mycoses des ongles et de la peau', 'Verrues et molluscum', 'Urticaire et réactivité allergique'],
      },
      {
        name: 'Dermatologie pédiatrique',
        desc: 'Consultations douces et rassurantes adaptées aux bébés, enfants et adolescents pour toutes les affections cutanées de l’enfance.',
        indications: ['Dermatite atopique du nourrisson', 'Verrues et molluscum contagiosum', 'Éruptions et croûtes de lait'],
      },
    ],
  },
  {
    id: 'dermatologie-esthetique',
    title: 'Dermatologie Esthétique',
    badge: 'Éclat & Jeunesse',
    subtitle: 'Des soins médico-esthétiques subtils et naturels pour révéler la jeunesse et l’éclat de votre visage.',
    img: '/images/aesthetic-dermatology.jpg',
    subServices: [
      {
        name: 'Injections (Botox et acide hyaluronique)',
        desc: 'Atténuation des rides d’expression (front, ride du lion, patte d’oie) et restauration harmonieuse des volumes (pommettes, lèvres, sillon nasogénien).',
        indications: ['Rides d’expression dynamiques', 'Perte de volume du visage', 'Hydratation profonde des lèvres'],
      },
      {
        name: 'Peelings et soins de la peau',
        desc: 'Renouvellement cellulaire ciblé (doux, moyen ou profond) pour raviver l’éclat du teint, resserrer les pores et lisser le grain de peau.',
        indications: ['Teint terne et fatigué', 'Taches pigmentaires', 'Grain de peau irrégulier'],
      },
      {
        name: 'Microneedling et mésothérapie',
        desc: 'Stimulation naturelle de la production de collagène et injection de cocktails poly-vitaminés pour une peau repulpée, hydratée et ferme.',
        indications: ['Perte de fermeté', 'Déhydratation intense', 'Fines rides et pores dilatés'],
      },
      {
        name: 'Traitement des cicatrices et des taches pigmentaires',
        desc: 'Protocoles sur-mesure pour atténuer les séquelles d’acné, le masque de grossesse (mélasma) et les taches solaires.',
        indications: ['Cicatrices d’acné', 'Mélasma et chloasma', 'Taches de vieillesse et récurrentes'],
      },
      {
        name: 'Rajeunissement cutané',
        desc: 'Approche globale anti-âge combinant plusieurs techniques médicales non invasives pour prévenir et corriger le relâchement cutané.',
        indications: ['Relâchement de l’ovale du visage', 'Rides du cou et décolleté', 'Prévention globale du vieillissement'],
      },
    ],
  },
  {
    id: 'chirurgie-dermatologique',
    title: 'Chirurgie Dermatologique',
    badge: 'Actes chirurgicaux',
    subtitle: 'Interventions réalisées au cabinet sous anesthésie locale dans le respect strict de l’asepsie et de l’esthétique.',
    img: '/images/surgery-dermatology.jpg',
    subServices: [
      {
        name: 'Exérèse des kystes et lipomes',
        desc: 'Retrait chirurgical propre des nodules sous-cutanés gêants ou douloureux avec sutures esthétiques pour une cicatrisation optimale.',
        indications: ['Kystes sébacés ou épidermiques', 'Lipomes de taille variable', 'Nodules cutanés persistants'],
      },
      {
        name: 'Ablation des grains de beauté et lésions cutanées',
        desc: 'Ablation préventive ou esthétique des nevi (grains de beauté), kératoses, fibromes ou hyperplasies sébacées.',
        indications: ['Grains de beauté atypiques ou frottants', 'Fibromes et tétines de chair', 'Kératoses séborrhéiques'],
      },
      {
        name: 'Biopsies cutanées',
        desc: 'Prélèvement d’un petit échantillon de peau pour analyse anatomo-pathologique afin de poser un diagnostic certifié.',
        indications: ['Lésions indéterminées', 'Dermatoses chroniques atypiques', 'Suspicion de lésion précancéreuse'],
      },
      {
        name: 'Chirurgie de l’ongle incarné',
        desc: 'Prise en charge chirurgicale définitive des ongles incarnés douloureux ou récidivants pour un soulagement rapide.',
        indications: ['Ongle incarné infecté ou douloureux', 'Bourgeon charnu péri-unguéal', 'Récidives fréquentes'],
      },
      {
        name: 'Petite chirurgie dermatologique',
        desc: 'Actes dermatologiques légers réalisés en toute sécurité sous anesthésie locale (cryothérapie, curetage, électrocoagulation).',
        indications: ['Lésions superficielles', 'Verrues et molluscums volumineux', 'Petites tumeurs cutanées bénignes'],
      },
    ],
  },
  {
    id: 'prevention-depistage',
    title: 'Prévention & Dépistage',
    badge: 'Prévention & Santé',
    subtitle: 'Surveillance attentive et dépistage précoce des lésions cutanées pour préserver la santé de votre peau.',
    img: '/images/prevention-screening.jpg',
    subServices: [
      {
        name: 'Dépistage des cancers de la peau',
        desc: 'Examen minutieux de l’ensemble du tégument pour la détection précoce du mélanome et des carcinomes basocellulaires ou spinocellulaires.',
        indications: ['Bilan annuel de la peau', 'Antécédents familiaux de mélanome', 'Exposition solaire fréquente'],
      },
      {
        name: 'Contrôle des grains de beauté',
        desc: 'Examen par dermoscopie numérique haute précision permettant d’analyser les caractéristiques pigmentaires et de suivre l’évolution des nevi.',
        indications: ['Règle ABCDE (Asymétrie, Bords, Couleur, Diamètre, Évolution)', 'Nombreux grains de beauté (>50)', 'Grain de beauté modifiant sa forme'],
      },
      {
        name: 'Prévention solaire',
        desc: 'Conseils personnalisés selon votre phototype et votre mode de vie pour vous protéger efficacement contre les méfaits des UV.',
        indications: ['Peaux claires et sensibles', 'Protection des enfants et sportifs', 'Prévention du photovieillissement'],
      },
      {
        name: 'Lésions cutanées suspectes',
        desc: 'Évaluation en urgence de tout bouton, croûte ou tache apparaissant soudainement ou ne guérissant pas au bout de quelques semaines.',
        indications: ['Plaie qui ne cicatrise pas', 'Tache noire ou brune nouvelle', 'Saignement spontaneous d’un grain de beauté'],
      },
      {
        name: 'Conseils de prévention',
        desc: 'Recommandations sur les rituels de soin, l’hygiène de vie et la routine cosmétique adaptée à la sensibilité de votre peau.',
        indications: ['Routine quotidienne personnalisée', 'Prévention des rechutes d’acné ou d’eczéma', 'Maintien du capital santé de la peau'],
      },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('dermatologie-medicale');
  const [selectedSubService, setSelectedSubService] = useState(null);

  const currentCat = serviceCategories.find(c => c.id === activeCategory);

  return (
    <div className="services-page">
      <MetaUpdater
        title="Nos Services | Dr Samia Mrabat – Dermatologue à Meknès"
        description="Découvrez l'ensemble des soins de dermatologie médicale, dermatologie esthétique, chirurgie dermatologique et prévention assurés par le Dr Samia Mrabat à Meknès."
        keywords="Dermatologie médicale Meknès, Dermatologie esthétique Meknès, Injections botox Meknès, Peelings Meknès, Chirurgie dermatologique Meknès, Dépistage grains de beauté Meknès"
      />

      {/* ── HERO BANNER ── */}
      <section className="services-hero animate-section">
        <div className="container">
          <span className="services-badge">NOS SPÉCIALITÉS</span>
          <h1 className="services-hero-title">
            Des soins dermatologiques complets &amp; personnalisés à Meknès
          </h1>
          <p className="services-hero-text">
            De la dermatologie médicale aux actes esthétiques et chirurgicaux, le cabinet du Dr Samia Mrabat
            vous offre une prise en charge d’excellence adaptée à chaque besoin.
          </p>
        </div>
      </section>

      {/* ── CATEGORY NAV TABS ── */}
      <section className="services-tabs-section">
        <div className="container">
          <div className="services-tabs-bar">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                className={`services-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedSubService(null);
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVE CATEGORY DISPLAY ── */}
      {currentCat && (
        <section className="services-content-section animate-section">
          <div className="container">
            {/* Category Header Card */}
            <div className="cat-hero-card">
              <div className="cat-hero-img-wrap">
                <img src={currentCat.img} alt={currentCat.title} />
              </div>
              <div className="cat-hero-info">
                <span className="cat-pill">{currentCat.badge}</span>
                <h2 className="cat-title">{currentCat.title}</h2>
                <p className="cat-subtitle">{currentCat.subtitle}</p>
                <a
                  href="https://wa.me/212689270924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cat-cta-btn"
                >
                  Prendre rendez-vous pour ce soin ↗
                </a>
              </div>
            </div>

            {/* Sub-services Grid */}
            <div className="subservices-header">
              <h3 className="subservices-title">Actes et consultations disponibles</h3>
              <p className="subservices-desc">
                Cliquez sur une prestation pour découvrir les indications et détails de la prise en charge.
              </p>
            </div>

            <div className="subservices-grid stagger-children">
              {currentCat.subServices.map((sub, idx) => {
                const isSelected = selectedSubService?.name === sub.name;
                return (
                  <div
                    key={idx}
                    className={`subservice-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedSubService(isSelected ? null : sub)}
                  >
                    <div className="subcard-header">
                      <span className="subcard-num">0{idx + 1}</span>
                      <h4 className="subcard-title">{sub.name}</h4>
                    </div>
                    <p className="subcard-desc">{sub.desc}</p>

                    <div className="subcard-indications">
                      <span className="ind-label">Indications principales :</span>
                      <ul>
                        {sub.indications.map((ind, i) => (
                          <li key={i}>✓ {ind}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="subcard-footer">
                      <Link to="/rendez-vous" className="subcard-btn">
                        Réserver une consultation
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── GENERAL CTA BANNER ── */}
      <section className="services-bottom-cta animate-section">
        <div className="container">
          <div className="cta-box">
            <h2>Besoin d'un avis médical personnalisé ?</h2>
            <p>
              Notre équipe vous accompagne pour définir le protocole le plus adapté à votre peau.
            </p>
            <div className="cta-buttons">
              <Link to="/rendez-vous" className="cta-btn-primary">
                Prendre rendez-vous en ligne
              </Link>
              <a
                href="https://wa.me/212689270924"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-whatsapp"
              >
                Contacter via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
