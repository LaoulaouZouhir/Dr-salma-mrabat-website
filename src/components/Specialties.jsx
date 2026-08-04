import React from 'react';
import { Link } from 'react-router-dom';

const specialties = [
  {
    num: '01',
    category: 'Dermatologie médicale',
    title: 'Dermatologie médicale',
    desc: 'Diagnostic et traitement des maladies de la peau, des cheveux et des ongles.',
    img: '/images/medical-dermatology.jpg',
    code: '01',
    link: '/dermatologie-medicale',
  },
  {
    num: '02',
    category: 'Dermatologie esthétique',
    title: 'Dermatologie esthétique',
    desc: 'Des soins personnalisés pour préserver et révéler la qualité de votre peau.',
    img: '/images/aesthetic-dermatology.jpg',
    code: '02',
    link: '/dermatologie-esthetique',
  },
  {
    num: '03',
    category: 'Chirurgie dermatologique',
    title: 'Chirurgie dermatologique',
    desc: 'Prise en charge des lésions cutanées nécessitant une intervention.',
    img: '/images/surgery-dermatology.jpg',
    code: '03',
    link: '/chirurgie-dermatologique',
  },
  {
    num: '04',
    category: 'Prévention & dépistage',
    title: 'Prévention et dépistage',
    desc: 'Détecter précocement les lésions cutanées afin de préserver votre santé.',
    img: '/images/prevention-screening.jpg',
    code: '04',
    link: '/prevention-depistage',
  },
];

export default function Specialties() {
  return (
    <section id="services" className="specialties-section animate-section">
      <div className="container">

        {/* ── Top Header Row ── */}
        <div className="specialties-top-bar">
          <div className="specialties-title-wrap">
            <h2 className="section-title">Des solutions adaptées à chaque besoin dermatologique</h2>
          </div>
          <a
            href="https://wa.me/212689270924"
            target="_blank"
            rel="noopener noreferrer"
            className="specialties-header-btn"
          >
            Prendre rendez-vous <span className="btn-arrow">↗</span>
          </a>
        </div>

        {/* ── Editorial 4-Card Grid ── */}
        <div className="specialties-editorial-grid stagger-children">
          {specialties.map((item) => (
            <Link key={item.num} to={item.link} className="spec-editorial-card">
              <img src={item.img} alt={item.title} className="spec-card-bg" />
              <div className="spec-card-gradient" />

              {/* Top overlay badge & header */}
              <div className="spec-card-top">
                <span className="spec-card-category">{item.category}</span>
                <span className="spec-card-badge">{item.num}</span>
              </div>

              {/* Bottom glassmorphic overlay */}
              <div className="spec-card-bottom">
                <div className="spec-card-info">
                  <h3 className="spec-card-name">{item.title}</h3>
                  <p className="spec-card-desc">{item.desc}</p>
                </div>
                <div className="spec-card-code">{item.code}</div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
