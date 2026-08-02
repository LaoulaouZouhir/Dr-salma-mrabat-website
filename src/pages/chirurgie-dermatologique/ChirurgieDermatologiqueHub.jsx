import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ChirurgieDermatologiqueHub() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    name: 'Chirurgie Dermatologique',
    description: 'Actes de chirurgie dermatologique réalisés sous anesthésie locale au cabinet à Meknès par le Dr Samia Mrabat.',
    medicalSpecialty: 'Dermatology',
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Chirurgie Dermatologique à Meknès | Dr Samia Mrabat"
        description="Interventions de chirurgie dermatologique ambulatoire réalisées sous anesthésie locale au cabinet à Meknès : exérèse de kystes, lipomes, ablation de grains de beauté, biopsies et chirurgie de l'ongle incarné."
        keywords="Chirurgie dermatologique Meknès, Ablation kyste lipome Meknès, Chirurgie grain de beauté Meknès, Biopsie peau Meknès, Ongle incarné Meknès"
        url="https://drsamiamrabatdermatologue.com/chirurgie-dermatologique"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Chirurgie Dermatologique' }]} />
          <span className="subpage-badge">ACTES CHIRURGICAUX EN AMBULATOIRE</span>
          <h1 className="subpage-title">Chirurgie Dermatologique à Meknès</h1>
          <p className="subpage-subtitle">
            Le Dr Samia Mrabat réalise les gestes de petite chirurgie dermatologique sous anesthésie locale dans un bloc technique stérile répondant aux normes de sécurité et de confort.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subservices-cards-grid">
            
            {/* 1. Kystes & Lipomes */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">01</span>
              <h3>Exérèse des Kystes et Lipomes</h3>
              <p>Retrait chirurgical complet sous anesthésie locale des kystes sébacés, épidermiques et lipomes douloureux ou gênants avec sutures esthétiques.</p>
              <Link to="/chirurgie-dermatologique/exerese-kystes-lipomes" className="hub-card-link">
                Découvrir la chirurgie des kystes →
              </Link>
            </div>

            {/* 2. Ablation Grains de Beauté */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">02</span>
              <h3>Ablation des Grains de Beauté &amp; Lésions</h3>
              <p>Ablation préventive ou esthétique des nevi suspectes, kératoses ou fibromes avec analyse anatomopathologique systématique si nécessaire.</p>
              <Link to="/chirurgie-dermatologique/ablation-grains-beaute-lesions-cutanees" className="hub-card-link">
                Découvrir l'ablation des grains de beauté →
              </Link>
            </div>

            {/* 3. Biopsies Cutanées */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">03</span>
              <h3>Biopsies Cutanées</h3>
              <p>Prélèvement d'un fragment de peau sous anesthésie locale envoyé au laboratoire d'anatomopathologie pour certifier un diagnostic.</p>
              <Link to="/chirurgie-dermatologique/biopsies-cutanees" className="hub-card-link">
                Découvrir la biopsie cutanée →
              </Link>
            </div>

            {/* 4. Ongle Incarné */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">04</span>
              <h3>Chirurgie de l'Ongle Incarné</h3>
              <p>Intervention rapide sous anesthésie locale pour soulager la douleur et traiter définitivement la récidive de l'ongle incarné.</p>
              <Link to="/chirurgie-dermatologique/chirurgie-ongle-incarne" className="hub-card-link">
                Découvrir la chirurgie de l'ongle →
              </Link>
            </div>

            {/* 5. Petite Chirurgie */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">05</span>
              <h3>Petite Chirurgie Dermatologique</h3>
              <p>Exérèse en ambulatoire de petites tumeurs cutanées bénignes, molluscums volumineux, kératoses et verrues rebelles.</p>
              <Link to="/chirurgie-dermatologique/petite-chirurgie-dermatologique" className="hub-card-link">
                Découvrir la petite chirurgie →
              </Link>
            </div>

          </div>

          <div className="subpage-cta-banner">
            <h2>Vous présentez une lésion nécessitant un avis chirurgical ?</h2>
            <p>Prenez rendez-vous avec le Dr Samia Mrabat pour un examen clinique préalable.</p>
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
