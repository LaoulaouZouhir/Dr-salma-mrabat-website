import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotreCabinet from './pages/NotreCabinet';
import Services from './pages/Services';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import RendezVousPage from './pages/RendezVousPage';

gsap.registerPlugin(ScrollTrigger);

/* ScrollToTop component: scrolls page to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* GSAP scroll animations — runs on every page change */
function ScrollAnimator() {
  const location = useLocation();

  useEffect(() => {
    // Kill old triggers before re-running
    ScrollTrigger.getAll().forEach(t => t.kill());

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    const grids = document.querySelectorAll('.stagger-children');
    grids.forEach(grid => {
      gsap.fromTo(grid.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: grid, start: 'top 88%' },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [location.pathname]);

  return null;
}

function Layout() {
  const location = useLocation();
  const isSubPage = location.pathname !== '/';

  return (
    <div className="app">
      <ScrollToTop />
      <Header isSubPage={isSubPage} />
      <ScrollAnimator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notre-cabinet" element={<NotreCabinet />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/rendez-vous" element={<RendezVousPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
