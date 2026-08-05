import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import LightboxImage from '../components/Lightbox';

const equipmentData = [
  {
    num: '01',
    title: 'Dermoscope',
    subtitle: 'Un examen précis des lésions cutanées',
    img: '/images/equipement/dermoscope.png',
    alt: 'Dermoscope utilisé par le Dr Samia Mrabat pour l\'examen des lésions cutanées et le dépistage des cancers de la peau à Meknès.',
    desc: 'Le dermoscope permet d\'observer les structures de la peau invisibles à l\'œil nu. Cet examen non invasif aide au diagnostic de nombreuses maladies inflammatoires de la peau, des cheveux et des ongles. Il constitue également un outil essentiel pour l\'analyse des tumeurs cutanées bénignes et la détection précoce des cancers de la peau.',
  },
  {
    num: '02',
    title: 'Bistouri Électrique',
    subtitle: 'Une chirurgie dermatologique précise',
    img: '/images/equipement/bistouri-electrique.png',
    alt: 'Bistouri électrique utilisé par le Dr Samia Mrabat pour les actes de chirurgie dermatologique à Meknès.',
    desc: 'Le bistouri électrique est utilisé lors de certains actes de chirurgie dermatologique afin de réaliser des gestes précis tout en limitant les saignements. Il participe à une prise en charge efficace et sécurisée lors des interventions ambulatoires.',
  },
  {
    num: '03',
    title: 'Autoclave',
    subtitle: 'Une stérilisation conforme aux normes européennes',
    img: '/images/equipement/autoclave.png',
    alt: 'Autoclave utilisé au cabinet du Dr Samia Mrabat pour la stérilisation du matériel chirurgical selon les normes européennes.',
    desc: 'L\'ensemble du matériel chirurgical réutilisable est stérilisé à l\'aide d\'un autoclave répondant aux normes européennes les plus strictes. Cette procédure garantit un haut niveau de sécurité et d\'hygiène pour chaque patient.',
  },
  {
    num: '04',
    title: 'Centrifugeuse RegenLab®',
    subtitle: 'La technologie PRP au service de la régénération',
    img: '/images/equipement/centrifugeuse-regenlab.png',
    alt: 'Centrifugeuse RegenLab® utilisée au cabinet du Dr Samia Mrabat pour la préparation du Plasma Riche en Plaquettes (PRP) destiné au traitement de la chute de cheveux et au rajeunissement cutané.',
    desc: 'Le cabinet est équipé d\'une centrifugeuse RegenLab®, marque suisse pionnière pour les systèmes de préparation du Plasma Riche en Plaquettes (PRP). Cette technologie permet d\'obtenir un plasma concentré utilisé dans le traitement de l\'alopécie, l\'amélioration des cicatrices et le rajeunissement cutané.',
  },
  {
    num: '05',
    title: 'HydraFacial®',
    subtitle: 'Un nettoyage profond et une hydratation de la peau',
    img: '/images/equipement/hydrafacial.png',
    alt: 'Machine HydraFacial® utilisée au cabinet du Dr Samia Mrabat pour le nettoyage profond de la peau et l\'amélioration de l\'éclat du teint à Meknès.',
    desc: 'Le système HydraFacial® réalise un nettoyage en profondeur de la peau, exfolie les cellules mortes, extrait les impuretés et pénètre des sérums hautement hydratants pour raviver immédiatement l\'éclat du teint.',
  },
  {
    num: '06',
    title: 'Laser Dermatologique',
    subtitle: 'Des traitements ciblés grâce au laser',
    img: '/images/equipement/laser-dermatologique.jpg',
    alt: 'Équipement laser médical au cabinet du Dr Samia Mrabat à Meknès.',
    desc: 'Le cabinet est équipé d\'un laser médical permettant la réalisation de traitements dermatologiques et esthétiques ciblés selon les indications cliniques validées lors de la consultation.',
  },
];

export default function NotreCabinetPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Cabinet de Dermatologie Dr Samia Mrabat',
    description: 'Découvrez le parcours du Dr Samia Mrabat, le cabinet, ses équipements modernes (Dermoscope, Autoclave, Centrifugeuse RegenLab PRP, HydraFacial) à Meknès.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah',
      addressLocality: 'Meknès',
      postalCode: '50000',
      addressCountry: 'MA',
    },
    telephone: '+212535524067',
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="À propos du Dr Samia Mrabat | Dermatologue à Meknès"
        description="Découvrez le parcours, la formation et l'expertise du Dr Samia Mrabat, dermatologue à Meknès, spécialisée en dermatologie médicale, pédiatrique, esthétique et chirurgie dermatologique."
        keywords="À propos Dr Samia Mrabat, Dermatologue Meknès parcours, Équipements cabinet dermatologie Meknès"
        url="https://drsamiamrabatdermatologue.com/a-propos"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'À propos / Notre Cabinet' }]} />
          <span className="subpage-badge">PARCOURS &amp; CABINET</span>
          <h1 className="subpage-title">À propos du Dr Samia Mrabat</h1>
          <p className="subpage-subtitle">
            Dermatologue diplômée de la Faculté de Médecine de Fès et formée dans des universités de renom en France (Nice, Montpellier), le Dr Samia Mrabat met son expertise au service de la santé et de la beauté de votre peau à Meknès.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          
          {/* Introduction with Office photo */}
          <div className="about-intro-grid">
            <div className="about-intro-img">
              <LightboxImage
                src="/images/cabinet/espace consultation.jpg"
                alt="Bureau de consultation du Dr Samia Mrabat au cabinet de dermatologie à Meknès"
                caption="Espace de consultation et d'écoute du cabinet du Dr Samia Mrabat à Meknès."
              />
            </div>
            <div className="about-intro-text">
              <h2>Une prise en charge médicale fondée sur la précision et l'écoute</h2>
              <p>
                Le Dr Samia Mrabat accompagne les nourrissons, les enfants, les adolescents et les adultes dans la prise en charge des maladies de la peau, des cheveux et des ongles, ainsi qu'en dermatologie esthétique et en chirurgie dermatologique.
              </p>
              <p>
                Grâce à un parcours universitaire enrichi par plusieurs formations spécialisées en France, elle privilégie une médecine fondée sur la précision du diagnostic, l'écoute du patient et une information claire à chaque étape de la prise en charge.
              </p>
            </div>
          </div>

          {/* Academic Timeline diagram */}
          <div className="academic-timeline-section">
            <h2 className="section-title text-center">Un parcours académique d'excellence</h2>
            <p className="section-subtitle text-center">
              Des formations spécialisées universitaires au Maroc et en France.
            </p>
            
            <div className="diagram-block text-center">
              <LightboxImage
                src="/images/doctor-portrait.jpg"
                alt="Infographie : Un parcours académique au service de votre peau (Fès, Nice, Montpellier)"
                caption="Formation universitaire du Dr Samia Mrabat : Faculté de Médecine de Fès, Université de Nice, Université de Montpellier."
              />
            </div>

            <div className="diplomas-list-grid">
              <div className="diploma-card">
                <span className="diploma-flag">🇲🇦</span>
                <h3>Diplôme en Dermatologie</h3>
                <p>Faculté de Médecine et de Pharmacie de Fès.</p>
              </div>
              <div className="diploma-card">
                <span className="diploma-flag">🇫🇷</span>
                <h3>Diplôme en Dermatologie Pédiatrique</h3>
                <p>Université de Nice (France).</p>
              </div>
              <div className="diploma-card">
                <span className="diploma-flag">🇫🇷</span>
                <h3>Diplôme en Dermatologie et Maladies de Système</h3>
                <p>Université de Montpellier (France).</p>
              </div>
            </div>
          </div>

          {/* Equipments Section with 6 real photos */}
          <div className="equipments-section">
            <h2 className="section-title text-center">Des équipements modernes au service de votre santé</h2>
            <p className="section-subtitle text-center">
              Le cabinet est équipé de dispositifs médicaux sélectionnés pour assurer des soins dans des conditions optimales de sécurité, de précision et de confort.
            </p>

            <div className="equipments-grid">
              {equipmentData.map((eq, idx) => (
                <div key={idx} className="equip-card">
                  <div className="equip-img-box">
                    <img src={eq.img} alt={eq.alt} />
                  </div>
                  <div className="equip-body">
                    <span className="equip-num">{eq.num}</span>
                    <h3>{eq.title}</h3>
                    <h4>{eq.subtitle}</h4>
                    <p>{eq.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Patient Comfort Experience Cards */}
          <div className="patient-experience-section">
            <h2 className="section-title text-center">Une expérience pensée pour le confort du patient</h2>
            <div className="experience-cards-grid">
              <div className="exp-card">
                <div className="exp-icon">🤝</div>
                <h3>Accueil Personnalisé</h3>
                <p>Notre équipe vous accueille avec bienveillance et vous accompagne tout au long de votre visite.</p>
              </div>
              <div className="exp-card">
                <div className="exp-icon">📅</div>
                <h3>Consultations sur Rendez-vous</h3>
                <p>Une organisation rigoureuse permettant de limiter l'attente et d'assurer un suivi de qualité.</p>
              </div>
              <div className="exp-card">
                <div className="exp-icon">🔒</div>
                <h3>Respect de la Confidentialité</h3>
                <p>Toutes les consultations et actes chirurgicaux garantissent le respect strict de votre vie privée.</p>
              </div>
              <div className="exp-card">
                <div className="exp-icon">🏥</div>
                <h3>Cadre Moderne &amp; Lumineux</h3>
                <p>Des espaces climatisés, apaisants et parfaitement équipés situés au cœur de Meknès (Hamria).</p>
              </div>
            </div>
          </div>

          {/* CTA Bottom */}
          <div className="subpage-cta-banner">
            <h2>Prenez rendez-vous avec le Dr Samia Mrabat</h2>
            <p>Une question ou une consultation à organiser à Meknès ?</p>
            <div className="cta-buttons">
              <a href="tel:0535524067" className="cta-btn-primary">Appeler le cabinet (05 35 52 40 67)</a>
              <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="cta-btn-whatsapp">WhatsApp Direct</a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
