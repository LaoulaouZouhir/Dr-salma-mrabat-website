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
        </div>

        {/* Quick Links */}
        <div className="footer-links-group">
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/notre-cabinet">Notre Cabinet</Link></li>
            <li><a href="/#services">Nos Spécialités</a></li>
            <li><a href="/#why-choose">Pourquoi nous choisir</a></li>
            <li><a href="/#contact">Contact & Accès</a></li>
          </ul>
        </div>

        {/* Contact Info (Exact Google Profile Details) */}
        <div className="footer-contact">
          <h3 className="footer-title">Cabinet & Contact</h3>
          <ul className="contact-list">
            <li>
              📍 N°5, 2ème étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah, Hamria, Meknès 50000
            </li>
            <li>
              📞 Fixe : <a href="tel:+212535524067">+212 5 35 52 40 67</a>
            </li>
            <li>
              💬 WhatsApp & Mobile :{' '}
              <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer">
                +212 6 89 27 09 24
              </a>
            </li>
            <li>
              ✉️ Email :{' '}
              <a href="mailto:contact@drsamiamrabat.ma">contact@drsamiamrabat.ma</a>
            </li>
            <li>
              🕐 Lun – Ven : 09h00 – 18h00 | Sam : 09h00 – 13h00
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dr Samia Mrabat. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
