import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ isSubPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="/images/logo.png"
            alt="Dr Samia Mrabat – Dermatologue à Meknès"
            className="logo-img"
          />
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

            {/* 1. Dermatologie Médicale Dropdown */}
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveMega('medicale')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link
                to="/dermatologie-medicale"
                className={location.pathname.startsWith('/dermatologie-medicale') ? 'active-link' : ''}
              >
                Dermatologie Médicale <span className="dropdown-caret">▾</span>
              </Link>
              <div className={`mega-menu ${activeMega === 'medicale' ? 'show' : ''}`}>
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <span className="mega-category-title">Soins Médicaux</span>
                    <ul className="mega-links">
                      <li><Link to="/dermatologie-medicale/acne-rosacee">Acné &amp; Rosacée</Link></li>
                      <li><Link to="/dermatologie-medicale/eczema-psoriasis-vitiligo">Eczéma, Psoriasis &amp; Vitiligo</Link></li>
                      <li><Link to="/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu">Chute de Cheveux &amp; Cuir Chevelu</Link></li>
                      <li><Link to="/dermatologie-medicale/allergies-infections-maladies-peau">Allergies &amp; Infections Cutanées</Link></li>
                      <li><Link to="/dermatologie-medicale/dermatologie-pediatrique">Dermatologie Pédiatrique</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* 2. Dermatologie Esthétique Dropdown */}
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveMega('esthetique')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link
                to="/dermatologie-esthetique"
                className={location.pathname.startsWith('/dermatologie-esthetique') ? 'active-link' : ''}
              >
                Dermatologie Esthétique <span className="dropdown-caret">▾</span>
              </Link>
              <div className={`mega-menu ${activeMega === 'esthetique' ? 'show' : ''}`}>
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <span className="mega-category-title">Médecine Esthétique</span>
                    <ul className="mega-links">
                      <li><Link to="/dermatologie-esthetique/injections-botox-acide-hyaluronique">Injections (Botox® &amp; Acide Hyaluronique)</Link></li>
                      <li><Link to="/dermatologie-esthetique/peelings-soins-peau">Peelings &amp; Soins de la Peau</Link></li>
                      <li><Link to="/dermatologie-esthetique/microneedling-mesotherapie">Microneedling &amp; Mésothérapie</Link></li>
                      <li><Link to="/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires">Traitement Cicatrices &amp; Taches</Link></li>
                      <li><Link to="/dermatologie-esthetique/rajeunissement-cutane">Rajeunissement Cutané</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* 3. Chirurgie Dermatologique Dropdown */}
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveMega('chirurgie')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link
                to="/chirurgie-dermatologique"
                className={location.pathname.startsWith('/chirurgie-dermatologique') ? 'active-link' : ''}
              >
                Chirurgie Dermatologique <span className="dropdown-caret">▾</span>
              </Link>
              <div className={`mega-menu ${activeMega === 'chirurgie' ? 'show' : ''}`}>
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <span className="mega-category-title">Actes Chirurgicaux</span>
                    <ul className="mega-links">
                      <li><Link to="/chirurgie-dermatologique/exerese-kystes-lipomes">Exérèse Kystes &amp; Lipomes</Link></li>
                      <li><Link to="/chirurgie-dermatologique/ablation-grains-beaute-lesions-cutanees">Ablation Grains de Beauté</Link></li>
                      <li><Link to="/chirurgie-dermatologique/biopsies-cutanees">Biopsies Cutanées</Link></li>
                      <li><Link to="/chirurgie-dermatologique/chirurgie-ongle-incarne">Chirurgie de l'Ongle Incarné</Link></li>
                      <li><Link to="/chirurgie-dermatologique/petite-chirurgie-dermatologique">Petite Chirurgie Dermatologique</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* 4. Prévention & Dépistage Dropdown */}
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveMega('prevention')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link
                to="/prevention-depistage"
                className={location.pathname.startsWith('/prevention-depistage') ? 'active-link' : ''}
              >
                Prévention &amp; Dépistage <span className="dropdown-caret">▾</span>
              </Link>
              <div className={`mega-menu ${activeMega === 'prevention' ? 'show' : ''}`}>
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <span className="mega-category-title">Dépistage &amp; Prévention</span>
                    <ul className="mega-links">
                      <li><Link to="/prevention-depistage/depistage-cancers-peau">Dépistage des Cancers de la Peau</Link></li>
                      <li><Link to="/prevention-depistage/controle-grains-beaute">Contrôle des Grains de Beauté</Link></li>
                      <li><Link to="/prevention-depistage/prevention-solaire">Prévention Solaire</Link></li>
                      <li><Link to="/prevention-depistage/lesions-cutanees-suspectes">Lésions Cutanées Suspectes</Link></li>
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
      </div>
    </header>
  );
}
