import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import NotreCabinetPage from './pages/NotreCabinetPage';

// Dermatologie Médicale
import DermatologieMedicaleHub from './pages/dermatologie-medicale/DermatologieMedicaleHub';
import AcneRosacee from './pages/dermatologie-medicale/AcneRosacee';
import EczemaPsoriasisVitiligo from './pages/dermatologie-medicale/EczemaPsoriasisVitiligo';
import ChuteCheveux from './pages/dermatologie-medicale/ChuteCheveux';
import AllergiesInfections from './pages/dermatologie-medicale/AllergiesInfections';
import DermatologiePediatrique from './pages/dermatologie-medicale/DermatologiePediatrique';

// Dermatologie Esthétique
import DermatologieEsthetiqueHub from './pages/dermatologie-esthetique/DermatologieEsthetiqueHub';
import InjectionsBotoxHyaluronique from './pages/dermatologie-esthetique/InjectionsBotoxHyaluronique';
import PeelingsSoinsPeau from './pages/dermatologie-esthetique/PeelingsSoinsPeau';
import MicroneedlingMesotherapie from './pages/dermatologie-esthetique/MicroneedlingMesotherapie';
import TraitementCicatricesTaches from './pages/dermatologie-esthetique/TraitementCicatricesTaches';
import RajeunissementCutane from './pages/dermatologie-esthetique/RajeunissementCutane';

// Chirurgie Dermatologique
import ChirurgieDermatologiqueHub from './pages/chirurgie-dermatologique/ChirurgieDermatologiqueHub';
import ExereseKystesLipomes from './pages/chirurgie-dermatologique/ExereseKystesLipomes';
import AblationGrainsBeaute from './pages/chirurgie-dermatologique/AblationGrainsBeaute';
import BiopsiesCutanees from './pages/chirurgie-dermatologique/BiopsiesCutanees';
import ChirurgieOngleIncarne from './pages/chirurgie-dermatologique/ChirurgieOngleIncarne';
import PetiteChirurgieDermatologique from './pages/chirurgie-dermatologique/PetiteChirurgieDermatologique';

// Prévention & Dépistage
import PreventionDepistageHub from './pages/prevention-depistage/PreventionDepistageHub';
import DepistageCancersPeau from './pages/prevention-depistage/DepistageCancersPeau';
import ControleGrainsBeaute from './pages/prevention-depistage/ControleGrainsBeaute';
import PreventionSolaire from './pages/prevention-depistage/PreventionSolaire';
import LesionsCutaneesSuspectes from './pages/prevention-depistage/LesionsCutaneesSuspectes';
import ConseilsPreventionDermatologique from './pages/prevention-depistage/ConseilsPreventionDermatologique';

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
    ScrollTrigger.getAll().forEach(t => t.kill());

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
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
        {/* Home */}
        <Route path="/" element={<Home />} />
        
        {/* À Propos / Cabinet */}
        <Route path="/a-propos" element={<NotreCabinetPage />} />
        <Route path="/notre-cabinet" element={<NotreCabinetPage />} />

        {/* Dermatologie Médicale */}
        <Route path="/dermatologie-medicale" element={<DermatologieMedicaleHub />} />
        <Route path="/dermatologie-medicale/acne-rosacee" element={<AcneRosacee />} />
        <Route path="/dermatologie-medicale/eczema-psoriasis-vitiligo" element={<EczemaPsoriasisVitiligo />} />
        <Route path="/dermatologie-medicale/chute-cheveux-maladies-cuir-chevelu" element={<ChuteCheveux />} />
        <Route path="/dermatologie-medicale/allergies-infections-maladies-peau" element={<AllergiesInfections />} />
        <Route path="/dermatologie-medicale/dermatologie-pediatrique" element={<DermatologiePediatrique />} />

        {/* Dermatologie Esthétique */}
        <Route path="/dermatologie-esthetique" element={<DermatologieEsthetiqueHub />} />
        <Route path="/dermatologie-esthetique/injections-botox-acide-hyaluronique" element={<InjectionsBotoxHyaluronique />} />
        <Route path="/dermatologie-esthetique/peelings-soins-peau" element={<PeelingsSoinsPeau />} />
        <Route path="/dermatologie-esthetique/microneedling-mesotherapie" element={<MicroneedlingMesotherapie />} />
        <Route path="/dermatologie-esthetique/traitement-cicatrices-taches-pigmentaires" element={<TraitementCicatricesTaches />} />
        <Route path="/dermatologie-esthetique/rajeunissement-cutane" element={<RajeunissementCutane />} />

        {/* Chirurgie Dermatologique */}
        <Route path="/chirurgie-dermatologique" element={<ChirurgieDermatologiqueHub />} />
        <Route path="/chirurgie-dermatologique/exerese-kystes-lipomes" element={<ExereseKystesLipomes />} />
        <Route path="/chirurgie-dermatologique/ablation-grains-beaute-lesions-cutanees" element={<AblationGrainsBeaute />} />
        <Route path="/chirurgie-dermatologique/biopsies-cutanees" element={<BiopsiesCutanees />} />
        <Route path="/chirurgie-dermatologique/chirurgie-ongle-incarne" element={<ChirurgieOngleIncarne />} />
        <Route path="/chirurgie-dermatologique/petite-chirurgie-dermatologique" element={<PetiteChirurgieDermatologique />} />

        {/* Prévention & Dépistage */}
        <Route path="/prevention-depistage" element={<PreventionDepistageHub />} />
        <Route path="/prevention-depistage/depistage-cancers-peau" element={<DepistageCancersPeau />} />
        <Route path="/prevention-depistage/controle-grains-beaute" element={<ControleGrainsBeaute />} />
        <Route path="/prevention-depistage/prevention-solaire" element={<PreventionSolaire />} />
        <Route path="/prevention-depistage/lesions-cutanees-suspectes" element={<LesionsCutaneesSuspectes />} />
        <Route path="/prevention-depistage/conseils-prevention-dermatologique" element={<ConseilsPreventionDermatologique />} />

        {/* General Pages */}
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
