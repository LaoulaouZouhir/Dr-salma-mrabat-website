import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function DermatologieEsthetiqueHub() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    name: 'Dermatologie Esthétique',
    description: 'Traitements esthétiques haut de gamme à Meknès par le Dr Samia Mrabat : Botox, Acide hyaluronique, Peelings, Microneedling, Mésothérapie, Rajeunissement cutané.',
    medicalSpecialty: 'Dermatology',
  };

  return (
    <div className="subpage-wrapper aesthetic-hub-wrapper">
      <SEO
        title="Dermatologie Esthétique à Meknès | Dr Samia Mrabat"
        description="Soins esthétiques médicaux d'excellence à Meknès par le Dr Samia Mrabat : injections Botox et acide hyaluronique, peelings, microneedling, rajeunissement cutané et éclat du teint."
        keywords="Dermatologie esthétique Meknès, Injections botox Meknès, Acide hyaluronique Meknès, Peeling médical Meknès, Microneedling Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-esthetique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero aesthetic-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Dermatologie Esthétique' }]} />
          <span className="subpage-badge gold-badge">MÉDECINE ESTHÉTIQUE HAUT DE GAMME</span>
          <h1 className="subpage-title">Révélez l'éclat et la jeunesse naturelle de votre peau</h1>
          <p className="subpage-subtitle">
            Le Dr Samia Mrabat propose des soins médico-esthétiques subtils et personnalisés, respectueux de l'anatomie de votre visage et conformes à la déontologie médicale.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subservices-cards-grid">
            
            {/* 1. Injections */}
            <div className="subservice-hub-card aesthetic-card">
              <span className="hub-card-num gold-num">01</span>
              <h3>Injections (Botox® &amp; Acide Hyaluronique)</h3>
              <p>Atténuation naturelle des rides d'expression (front, ride du lion, patte d'oie) et restauration harmonieuse des volumes (pommettes, lèvres, sillon nasogénien).</p>
              <Link to="/dermatologie-esthetique/injections-botox-acide-hyaluronique" className="hub-card-link gold-link">
                Découvrir les injections →
              </Link>
            </div>

            {/* 2. Peelings & Soins */}
            <div className="subservice-hub-card aesthetic-card">
              <span className="hub-card-num gold-num">02</span>
              <h3>Peelings &amp; Soins de la Peau</h3>
              <p>Renouvellement cellulaire contrôlé pour éliminer le teint terne, lisser le grain de peau, resserrer les pores et atténuer les ridules superficielles.</p>
              <Link to="/dermatologie-esthetique/peelings-soins-peau" className="hub-card-link gold-link">
                Découvrir les peelings →
              </Link>
            </div>

            {/* 3. Microneedling & Mésothérapie */}
            <div className="subservice-hub-card aesthetic-card">
              <span className="hub-card-num gold-num">03</span>
              <h3>Microneedling &amp; Mésothérapie</h3>
              <p>Stimulation naturelle du collagène et micro-injections poly-vitaminées pour repulper la peau, réhydrater en profondeur et raviver la fermeté cutanée.</p>
              <Link to="/dermatologie-esthetique/microneedling-mesotherapie" className="hub-card-link gold-link">
                Découvrir la mésothérapie →
              </Link>
            </div>

            {/* 4. Cicatrices & Taches */}
            <div className="subservice-hub-card aesthetic-card">
              <span className="hub-card-num gold-num">04</span>
              <h3>Traitement Cicatrices &amp; Taches Pigmentaires</h3>
              <p>Protocoles ciblés pour atténuer les cicatrices d'acné, le mélasma (masque de grossesse) et les taches solaires pour un teint unifié.</p>
              <Link to="/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires" className="hub-card-link gold-link">
                Découvrir le traitement des taches →
              </Link>
            </div>

            {/* 5. Rajeunissement Cutané */}
            <div className="subservice-hub-card aesthetic-card">
              <span className="hub-card-num gold-num">05</span>
              <h3>Rajeunissement Cutané</h3>
              <p>Approche globale anti-âge combinant plusieurs techniques médicales non invasives pour préserver la fermeté et contrer le relâchement cutané.</p>
              <Link to="/dermatologie-esthetique/rajeunissement-cutane" className="hub-card-link gold-link">
                Découvrir le rajeunissement →
              </Link>
            </div>

          </div>

          <div className="subpage-cta-banner aesthetic-banner">
            <h2>Envie d'une évaluation esthétique personnalisée ?</h2>
            <p>Le Dr Samia Mrabat analyse votre visage au repos et en mouvement pour définir le soin le plus adapté.</p>
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
