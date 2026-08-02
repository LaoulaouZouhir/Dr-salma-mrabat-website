import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand Col */}
        <div className="footer-brand">
          <h2 className="footer-logo">Dr Samia Mrabat</h2>
          <p className="footer-subtitle">
            Dermatologue • Vénérologue • Médecine Esthétique
          </p>
          <p className="footer-desc">
            Expertise médicale, esthétique et chirurgicale pour la santé et la beauté de votre peau à Meknès.
          </p>
          <div className="footer-contact-fast">
            <p>📍 Bureaux Reda, Rue Benzerte, Hamria, Meknès</p>
            <p>📞 Fixe : <a href="tel:0535524067">05 35 52 40 67</a></p>
            <p>💬 WhatsApp : <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer">+212 6 89 27 09 24</a></p>
          </div>
        </div>

        {/* Column 1: Dermatologie Médicale & Esthétique */}
        <div className="footer-links-group">
          <h3 className="footer-title">Dermatologie Médicale</h3>
          <ul className="footer-links">
            <li><Link to="/dermatologie-medicale/acne-rosacee">Acné &amp; Rosacée</Link></li>
            <li><Link to="/dermatologie-medicale/eczema-psoriasis-vitiligo">Eczéma, Psoriasis &amp; Vitiligo</Link></li>
            <li><Link to="/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu">Chute de Cheveux</Link></li>
            <li><Link to="/dermatologie-medicale/allergies-infections-maladies-peau">Allergies &amp; Infections</Link></li>
            <li><Link to="/dermatologie-medicale/dermatologie-pediatrique">Dermatologie Pédiatrique</Link></li>
          </ul>

          <h3 className="footer-title footer-title-sub">Dermatologie Esthétique</h3>
          <ul className="footer-links">
            <li><Link to="/dermatologie-esthetique/injections-botox-acide-hyaluronique">Injections (Botox® &amp; Hyaluronique)</Link></li>
            <li><Link to="/dermatologie-esthetique/peelings-soins-peau">Peelings &amp; Soins de Peau</Link></li>
            <li><Link to="/dermatologie-esthetique/microneedling-mesotherapie">Microneedling &amp; Mésothérapie</Link></li>
            <li><Link to="/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires">Cicatrices &amp; Taches</Link></li>
            <li><Link to="/dermatologie-esthetique/rajeunissement-cutane">Rajeunissement Cutané</Link></li>
          </ul>
        </div>

        {/* Column 2: Chirurgie & Prévention */}
        <div className="footer-links-group">
          <h3 className="footer-title">Chirurgie Dermatologique</h3>
          <ul className="footer-links">
            <li><Link to="/chirurgie-dermatologique/exerese-kystes-lipomes">Exérèse Kystes &amp; Lipomes</Link></li>
            <li><Link to="/chirurgie-dermatologique/ablation-grains-beaute-lesions-cutanees">Ablation Grains de Beauté</Link></li>
            <li><Link to="/chirurgie-dermatologique/biopsies-cutanees">Biopsies Cutanées</Link></li>
            <li><Link to="/chirurgie-dermatologique/chirurgie-ongle-incarne">Chirurgie de l'Ongle Incarné</Link></li>
            <li><Link to="/chirurgie-dermatologique/petite-chirurgie-dermatologique">Petite Chirurgie</Link></li>
          </ul>

          <h3 className="footer-title footer-title-sub">Prévention &amp; Dépistage</h3>
          <ul className="footer-links">
            <li><Link to="/prevention-depistage/depistage-cancers-peau">Dépistage Cancers de la Peau</Link></li>
            <li><Link to="/prevention-depistage/controle-grains-beaute">Contrôle Grains de Beauté</Link></li>
            <li><Link to="/prevention-depistage/prevention-solaire">Prévention Solaire</Link></li>
            <li><Link to="/prevention-depistage/lesions-cutanees-suspectes">Lésions Suspectes</Link></li>
            <li><Link to="/prevention-depistage/conseils-prevention-dermatologique">Conseils de Prévention</Link></li>
          </ul>
        </div>

        {/* Column 3: Navigation & Horaires */}
        <div className="footer-contact">
          <h3 className="footer-title">Pages &amp; Accès</h3>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">À propos du Dr Samia</Link></li>
            <li><Link to="/notre-cabinet">Notre Cabinet</Link></li>
            <li><Link to="/faq">Questions Fréquentes (FAQ)</Link></li>
            <li><Link to="/contact">Contact &amp; Localisation</Link></li>
            <li><Link to="/rendez-vous">Prendre Rendez-vous</Link></li>
          </ul>
          <div className="footer-hours-box">
            <strong>Horaires des consultations :</strong>
            <p>Lun – Ven : 09h00 – 18h00</p>
            <p>Samedi : 09h00 – 13h00</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dr Samia Mrabat. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
