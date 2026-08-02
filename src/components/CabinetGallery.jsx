import React from 'react';

const images = [
  {
    src: '/images/cabinet/Entree.jpg',
    alt: 'Entrée du cabinet de dermatologie Dr Samia Mrabat à Meknès',
    label: 'Entrée du cabinet',
  },
  {
    src: '/images/cabinet/Reception.jpg',
    alt: 'Réception et accueil du cabinet Dr Samia Mrabat',
    label: 'Réception',
  },
  {
    src: '/images/cabinet/espace%20consultation.jpg',
    alt: 'Espace de consultation du Dr Samia Mrabat à Meknès',
    label: 'Espace de consultation',
  },
  {
    src: '/images/cabinet/Salle%20attente.jpg',
    alt: 'Salle d\'attente du cabinet de dermatologie Dr Samia Mrabat',
    label: 'Salle d\'attente',
  },
  {
    src: '/images/cabinet/Salle%20attente2.jpg',
    alt: 'Espace d\'attente du cabinet de dermatologie Dr Samia Mrabat',
    label: 'Salle d\'attente',
  },
  {
    src: '/images/cabinet/espace%20de%20soins.jpg',
    alt: 'Espace de soins dermatologiques et esthétiques à Meknès',
    label: 'Espace de soins',
  },
  {
    src: '/images/cabinet/Equipement.jpg',
    alt: 'Équipements médicaux et laser dermatologique de pointe',
    label: 'Équipements médicaux',
  },
];

export default function CabinetGallery() {
  return (
    <section id="cabinet" className="gallery-section animate-section">
      <div className="container">

        <div className="gallery-header">
          <h2 className="section-title">Un environnement pensé pour votre confort</h2>
          <p className="section-subtitle">
            Parce que votre expérience commence dès votre arrivée, notre cabinet a été conçu pour
            offrir un cadre accueillant, moderne et apaisant. Chaque espace a été pensé afin de
            garantir votre confort, votre confidentialité et une prise en charge dans les meilleures
            conditions.
          </p>
        </div>

        {/* 3-column masonry — width:100% + height:auto = perfect ratio on every image */}
        <div className="gallery-masonry">
          {images.map((img, i) => (
            <div key={i} className="gallery-masonry-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="bento-overlay">
                <span className="bento-label">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <a
            href="https://wa.me/212689270924"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-cta"
          >
            Prendre rendez-vous
          </a>
        </div>

      </div>
    </section>
  );
}
