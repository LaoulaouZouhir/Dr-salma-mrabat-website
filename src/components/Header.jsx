import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ isSubPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // On subpages OR when scrolled on home page, apply light header styling
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
              <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/notre-cabinet" className={location.pathname === '/notre-cabinet' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
                Notre Cabinet
              </Link>
            </li>
            <li>
              <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/faq" className={location.pathname === '/faq' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <Link
            to="/rendez-vous"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Prendre rendez-vous
          </Link>
        </nav>
      </div>
    </header>
  );
}
