import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutDoctor() {
  return (
    <section id="a-propos" className="about-section animate-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            src="/images/doctor-portrait.jpg"
            alt="Dr Samia Mrabat, Dermatologue à Meknès"
            className="about-image"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">Une dermatologue à votre écoute</h2>
          <p className="about-text">
            Le Dr Samia Mrabat accompagne ses patients avec une approche fondée sur l'écoute,
            le diagnostic précis et la personnalisation des traitements. Chaque consultation est
            pensée pour répondre aux besoins spécifiques de chaque patient, dans un environnement
            professionnel où la qualité des soins et le bien-être occupent une place essentielle.
          </p>
          <Link to="/notre-cabinet" className="about-btn">
            Découvrir le Dr Samia →
          </Link>
        </div>
      </div>
    </section>
  );
}
