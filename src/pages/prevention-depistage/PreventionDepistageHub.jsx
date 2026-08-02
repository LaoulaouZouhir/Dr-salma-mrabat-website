import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function PreventionDepistageHub() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    name: 'Prévention et Dépistage Dermatologique',
    description: 'Dépistage précoce des cancers cutanés, dermoscopie et contrôle des grains de beauté à Meknès par le Dr Samia Mrabat.',
    medicalSpecialty: 'Dermatology',
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Prévention et Dépistage Dermatologique à Meknès | Dr Samia Mrabat"
        description="Surveillance des grains de beauté, dépistage précoce des cancers de la peau (mélanome, carcinome), conseils de prévention solaire et dermoscopie numérique à Meknès."
        keywords="Dépistage cancer peau Meknès, Contrôle grains de beauté Meknès, Dermoscopie Meknès, Prévention solaire Meknès"
        url="https://drsamiamrabatdermatologue.com/prevention-depistage"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Prévention & Dépistage' }]} />
          <span className="subpage-badge">PRÉVENTION &amp; DÉPISTAGE PRÉCOCE</span>
          <h1 className="subpage-title">Prévention &amp; Dépistage Dermatologique à Meknès</h1>
          <p className="subpage-subtitle">
            Le dépistage précoce est l'outil le plus efficace contre les cancers de la peau. Le Dr Samia Mrabat examine minutieusement votre peau et vos grains de beauté grâce à la dermoscopie.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subservices-cards-grid">
            
            {/* 1. Dépistage Cancers de la Peau */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">01</span>
              <h3>Dépistage des Cancers de la Peau</h3>
              <p>Bilan cutané complet pour détecter précocement mélanomes et carcinomes basocellulaires ou spinocellulaires avant toute complication.</p>
              <Link to="/prevention-depistage/depistage-cancers-peau" className="hub-card-link">
                Découvrir le dépistage des cancers →
              </Link>
            </div>

            {/* 2. Contrôle Grains de Beauté */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">02</span>
              <h3>Contrôle des Grains de Beauté</h3>
              <p>Examen par dermoscopie des nevi selon la règle ABCDE pour surveiller l'évolution des lésions pigmentées et prévenir les risques.</p>
              <Link to="/prevention-depistage/controle-grains-beaute" className="hub-card-link">
                Découvrir le contrôle des grains de beauté →
              </Link>
            </div>

            {/* 3. Prévention Solaire */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">03</span>
              <h3>Prévention Solaire</h3>
              <p>Conseils dermatologiques personnalisés selon votre phototype pour vous protéger des rayons UV, coups de soleil et photovieillissement.</p>
              <Link to="/prevention-depistage/prevention-solaire" className="hub-card-link">
                Découvrir la prévention solaire →
              </Link>
            </div>

            {/* 4. Lésions Cutanées Suspectes */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">04</span>
              <h3>Lésions Cutanées Suspectes</h3>
              <p>Évaluation des boutons, taches ou plaies nouvelles ou qui ne cicatrisent pas pour déterminer la prise en charge adaptée.</p>
              <Link to="/prevention-depistage/lesions-cutanees-suspectes" className="hub-card-link">
                Découvrir l'évaluation des lésions →
              </Link>
            </div>

            {/* 5. Conseils de Prévention */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">05</span>
              <h3>Conseils de Prévention Dermatologique</h3>
              <p>Recommandations au quotidien sur l'auto-surveillance, les habitudes de soin et la protection du capital santé de votre peau.</p>
              <Link to="/prevention-depistage/conseils-prevention-dermatologique" className="hub-card-link">
                Découvrir les conseils de prévention →
              </Link>
            </div>

          </div>

          <div className="subpage-cta-banner">
            <h2>Vous souhaitez réaliser un bilan ou contrôler un grain de beauté ?</h2>
            <p>Prenez rendez-vous avec le Dr Samia Mrabat à Meknès.</p>
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
