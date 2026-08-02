import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function DermatologieMedicaleHub() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    name: 'Dermatologie Médicale',
    description: 'Diagnostic et traitement des maladies de la peau, des cheveux et des ongles à Meknès par le Dr Samia Mrabat.',
    medicalSpecialty: 'Dermatology',
  };

  return (
    <div className="subpage-wrapper">
      <SEO
        title="Dermatologie Médicale à Meknès | Dr Samia Mrabat"
        description="Prise en charge complète des maladies de la peau, acné, rosacée, eczéma, psoriasis, alopécie, infections et dermatologie pédiatrique à Meknès."
        keywords="Dermatologie médicale Meknès, Traitement acné Meknès, Eczéma psoriasis Meknès, Dermatologue enfant Meknès"
        url="https://drsamiamrabatdermatologue.com/dermatologie-medicale"
        jsonLd={schemaData}
      />

      <section className="subpage-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Dermatologie Médicale' }]} />
          <span className="subpage-badge">SANTÉ DE LA PEAU</span>
          <h1 className="subpage-title">Dermatologie Médicale à Meknès</h1>
          <p className="subpage-subtitle">
            Le Dr Samia Mrabat assure le diagnostic précis et le traitement personnalisé des maladies de la peau,
            des cheveux et des ongles chez le nourrisson, l'enfant, l'adolescent et l'adulte.
          </p>
        </div>
      </section>

      <section className="subpage-content-section">
        <div className="container">
          <div className="subservices-cards-grid">
            
            {/* 1. Acné & Rosacée */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">01</span>
              <h3>Acné et Rosacée</h3>
              <p>Diagnostic approfondi et protocoles sur-mesure (locaux, oraux, soins dermatologiques) pour calmer l'inflammation, prévenir les rechutes et atténuer les cicatrices.</p>
              <Link to="/dermatologie-medicale/acne-rosacee" className="hub-card-link">
                Découvrir la prise en charge →
              </Link>
            </div>

            {/* 2. Eczéma, Psoriasis & Vitiligo */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">02</span>
              <h3>Eczéma, Psoriasis et Vitiligo</h3>
              <p>Traitements ciblés des dermatoses inflammatoires et des troubles de la pigmentation chez l'adulte et l'enfant pour restaurer le confort de la peau.</p>
              <Link to="/dermatologie-medicale/eczema-psoriasis-vitiligo" className="hub-card-link">
                Découvrir la prise en charge →
              </Link>
            </div>

            {/* 3. Chute de Cheveux */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">03</span>
              <h3>Chute de Cheveux &amp; Maladies du Cuir Chevelu</h3>
              <p>Bilan trichologique complet pour alopécie, pelade, pellicules sévères et dermatite séborrhéique du cuir chevelu.</p>
              <Link to="/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu" className="hub-card-link">
                Découvrir la prise en charge →
              </Link>
            </div>

            {/* 4. Allergies & Infections */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">04</span>
              <h3>Allergies, Infections &amp; Maladies de la Peau</h3>
              <p>Prise en charge des urticaires, mycoses, zona, herpès, verrues et réactions allergiques cutanées avec conseils d'éviction.</p>
              <Link to="/dermatologie-medicale/allergies-infections-maladies-peau" className="hub-card-link">
                Découvrir la prise en charge →
              </Link>
            </div>

            {/* 5. Dermatologie Pédiatrique */}
            <div className="subservice-hub-card">
              <span className="hub-card-num">05</span>
              <h3>Dermatologie Pédiatrique</h3>
              <p>Consultations bienveillantes adaptées aux bébés, enfants et adolescents pour toutes les affections dermatologiques de l'enfance.</p>
              <Link to="/dermatologie-medicale/dermatologie-pediatrique" className="hub-card-link">
                Découvrir la prise en charge →
              </Link>
            </div>

          </div>

          <div className="subpage-cta-banner">
            <h2>Besoin d'une consultation en dermatologie médicale ?</h2>
            <p>Le Dr Samia Mrabat vous accueille sur rendez-vous au cabinet à Meknès.</p>
            <div className="cta-buttons">
              <a href="tel:0535524067" className="cta-btn-primary">Appeler le cabinet (05 35 52 40 67)</a>
              <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="cta-btn-whatsapp">Contacter sur WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
