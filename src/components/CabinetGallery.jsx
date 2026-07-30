import React from 'react';

const images = [
  { src: '/images/cabinet/cabinet-01.jpg', alt: 'Façade du cabinet de dermatologie Dr Samia Mrabat à Meknès', label: 'Façade' },
  { src: '/images/cabinet/cabinet-02.jpg', alt: 'Accueil du cabinet de dermatologie Dr Samia Mrabat', label: 'Accueil' },
  { src: '/images/cabinet/cabinet-03.jpg', alt: 'Salle d\'attente du cabinet Dr Samia Mrabat Meknès', label: 'Salle d\'attente' },
  { src: '/images/cabinet/cabinet-04.jpg', alt: 'Salle de consultation du cabinet Dr Samia Mrabat', label: 'Consultation' },
  { src: '/images/cabinet/cabinet-05.jpg', alt: 'Équipements médicaux du cabinet dermatologique Meknès', label: 'Équipements' },
  { src: '/images/cabinet/cabinet-06.jpg', alt: 'Espace de soins du cabinet Dr Samia Mrabat Meknès', label: 'Espace soins' },
  { src: '/images/cabinet/cabinet-07.jpg', alt: 'Cabinet dermatologique Dr Samia Mrabat Meknès', label: 'Le cabinet' },
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
