import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ isSubPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and mega-menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveMega(null);
  }, [location]);

  const isLightHeader = isSubPage || scrolled;

  return (
    <header className={`header ${isLightHeader ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        {/* Brand Logo - flex-shrink: 0 ensuring it NEVER disappears */}
        <Link to="/" className="logo" aria-label="Dr Samia Mrabat - Accueil">
          <img
            src="/images/logo.png"
            alt="Dr Samia Mrabat Logo"
            className="logo-img"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = 'none';
            }}
          />
          <span className="logo-text">Dr Samia Mrabat</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav */}
        <nav className="nav-menu" aria-label="Navigation principale">
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
                Accueil
              </Link>
            </li>

            <li>
              <Link to="/notre-cabinet" className={location.pathname === '/notre-cabinet' ? 'active-link' : ''}>
                Notre Cabinet
              </Link>
            </li>

            {/* Master Services Mega-Menu Dropdown */}
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveMega('services')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <button
                className={`nav-dropdown-btn ${location.pathname.includes('/dermatologie') || location.pathname.includes('/chirurgie') || location.pathname.includes('/prevention') ? 'active-link' : ''}`}
                onClick={() => setActiveMega(activeMega === 'services' ? null : 'services')}
              >
                Nos Services <span className="dropdown-caret">▾</span>
              </button>

              <div className={`mega-menu master-mega-menu ${activeMega === 'services' ? 'show' : ''}`}>
                <div className="mega-menu-inner">
                  
                  {/* Col 1: Dermatologie Médicale */}
                  <div className="mega-col">
                    <Link to="/dermatologie-medicale" className="mega-category-title">
                      🩺 Dermatologie Médicale →
                    </Link>
                    <ul className="mega-links">
                      <li><Link to="/dermatologie-medicale/acne-rosacee">Acné &amp; Rosacée</Link></li>
                      <li><Link to="/dermatologie-medicale/eczema-psoriasis-vitiligo">Eczéma, Psoriasis &amp; Vitiligo</Link></li>
                      <li><Link to="/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu">Chute de Cheveux &amp; Cuir Chevelu</Link></li>
                      <li><Link to="/dermatologie-medicale/allergies-infections-maladies-peau">Allergies &amp; Infections</Link></li>
                      <li><Link to="/dermatologie-medicale/dermatologie-pediatrique">Dermatologie Pédiatrique</Link></li>
                    </ul>
                  </div>

                  {/* Col 2: Dermatologie Esthétique */}
                  <div className="mega-col">
                    <Link to="/dermatologie-esthetique" className="mega-category-title">
                      ✨ Dermatologie Esthétique →
                    </Link>
                    <ul className="mega-links">
                      <li><Link to="/dermatologie-esthetique/injections-botox-acide-hyaluronique">Injections (Botox® &amp; Hyaluronique)</Link></li>
                      <li><Link to="/dermatologie-esthetique/peelings-soins-peau">Peelings &amp; Soins de Peau</Link></li>
                      <li><Link to="/dermatologie-esthetique/microneedling-mesotherapie">Microneedling &amp; Mésothérapie</Link></li>
                      <li><Link to="/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires">Cicatrices &amp; Taches</Link></li>
                      <li><Link to="/dermatologie-esthetique/rajeunissement-cutane">Rajeunissement Cutané</Link></li>
                    </ul>
                  </div>

                  {/* Col 3: Chirurgie Dermatologique */}
                  <div className="mega-col">
                    <Link to="/chirurgie-dermatologique" className="mega-category-title">
                      🔪 Chirurgie Dermatologique →
                    </Link>
                    <ul className="mega-links">
                      <li><Link to="/chirurgie-dermatologique/exerese-kystes-lipomes">Exérèse Kystes &amp; Lipomes</Link></li>
                      <li><Link to="/chirurgie-dermatologique/ablation-grains-beaute-lesions-cutanees">Ablation Grains de Beauté</Link></li>
                      <li><Link to="/chirurgie-dermatologique/biopsies-cutanees">Biopsies Cutanées</Link></li>
                      <li><Link to="/chirurgie-dermatologique/chirurgie-ongle-incarne">Chirurgie Ongle Incarné</Link></li>
                      <li><Link to="/chirurgie-dermatologique/petite-chirurgie-dermatologique">Petite Chirurgie</Link></li>
                    </ul>
                  </div>

                  {/* Col 4: Prévention & Dépistage */}
                  <div className="mega-col">
                    <Link to="/prevention-depistage" className="mega-category-title">
                      🛡️ Prévention &amp; Dépistage →
                    </Link>
                    <ul className="mega-links">
                      <li><Link to="/prevention-depistage/depistage-cancers-peau">Dépistage Cancers de la Peau</Link></li>
                      <li><Link to="/prevention-depistage/controle-grains-beaute">Contrôle Grains de Beauté</Link></li>
                      <li><Link to="/prevention-depistage/prevention-solaire">Prévention Solaire</Link></li>
                      <li><Link to="/prevention-depistage/lesions-cutanees-suspectes">Lésions Suspectes</Link></li>
                      <li><Link to="/prevention-depistage/conseils-prevention-dermatologique">Conseils de Prévention</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </li>

            <li>
              <Link to="/faq" className={location.pathname === '/faq' ? 'active-link' : ''}>
                FAQ
              </Link>
            </li>

            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/rendez-vous" className="nav-cta">
            Prendre rendez-vous
          </Link>
        </nav>

        {/* Mobile Fullscreen Drawer */}
        {menuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-inner">
              <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
              <Link to="/notre-cabinet" onClick={() => setMenuOpen(false)}>Notre Cabinet</Link>
              
              <div className="mobile-section-header">NOS SERVICES</div>
              <Link to="/dermatologie-medicale" onClick={() => setMenuOpen(false)}>🩺 Dermatologie Médicale</Link>
              <Link to="/dermatologie-esthetique" onClick={() => setMenuOpen(false)}>✨ Dermatologie Esthétique</Link>
              <Link to="/chirurgie-dermatologique" onClick={() => setMenuOpen(false)}>🔪 Chirurgie Dermatologique</Link>
              <Link to="/prevention-depistage" onClick={() => setMenuOpen(false)}>🛡️ Prévention &amp; Dépistage</Link>

              <div className="mobile-divider" />
              <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link to="/rendez-vous" className="mobile-cta-btn" onClick={() => setMenuOpen(false)}>Prendre Rendez-vous</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
