import React from 'react';

export default function Hero() {
  return (
    <section id="accueil" className="hero">

      {/* ── Native video background (zero YouTube UI/titles) ── */}
      <div className="hero-video-wrapper" aria-hidden="true">
        <video
          className="hero-video"
          src="/videos/hero-cabinet.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* ── Dark overlay ── */}
      <div className="hero-overlay" />

      {/* ── Main content ── */}
      <div className="hero-content animate-section">
        <span className="hero-badge">
          DERMATOLOGIE MÉDICALE • DERMATOLOGIE ESTHÉTIQUE • CHIRURGIE DERMATOLOGIQUE
        </span>
        <h1 className="hero-title">
          Une expertise dermatologique au service de votre peau.
        </h1>
        <p className="hero-text">
          Le cabinet du Dr Samia Mrabat vous accueille à Meknès dans un environnement moderne,
          chaleureux et rassurant pour la prise en charge des maladies de la peau, des cheveux
          et des ongles, ainsi que pour des soins de dermatologie esthétique et de chirurgie
          dermatologique.
        </p>
        <a
          href="https://wa.me/212689270924"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Prendre rendez-vous
        </a>

        {/* ── Reassurance bar ── */}
        <div className="hero-reassurance">
          <div className="reassurance-item">
            <span className="reassurance-icon">✓</span>
            <span>Consultation personnalisée</span>
          </div>
          <div className="reassurance-item">
            <span className="reassurance-icon">✓</span>
            <span>Équipements modernes</span>
          </div>
          <div className="reassurance-item">
            <span className="reassurance-icon">✓</span>
            <span>Adultes &amp; enfants</span>
          </div>
          <div className="reassurance-item">
            <span className="reassurance-icon">✓</span>
            <span>Cabinet situé à Meknès</span>
          </div>
        </div>
      </div>
    </section>
  );
}
