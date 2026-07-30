import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const YT_ID = 'L8KuRbzpFr4';

/* ── gallery images (real photos from /images/cabinet/) ── */
const galleryImages = [
  { src: '/images/cabinet/cabinet-01.jpg', alt: 'Façade du cabinet de dermatologie du Dr Samia Mrabat à Meknès' },
  { src: '/images/cabinet/cabinet-02.jpg', alt: 'Accueil du cabinet de dermatologie du Dr Samia Mrabat à Meknès' },
  { src: '/images/cabinet/cabinet-03.jpg', alt: 'Salle d\'attente du cabinet de dermatologie du Dr Samia Mrabat à Meknès' },
  { src: '/images/cabinet/cabinet-04.jpg', alt: 'Salle de consultation du cabinet de dermatologie du Dr Samia Mrabat à Meknès' },
  { src: '/images/cabinet/cabinet-05.jpg', alt: 'Équipements du cabinet de dermatologie du Dr Samia Mrabat à Meknès' },
  { src: '/images/cabinet/cabinet-06.jpg', alt: 'Espace de soin du cabinet de dermatologie du Dr Samia Mrabat à Meknès' },
  { src: '/images/cabinet/cabinet-07.jpg', alt: 'Cabinet de dermatologie Dr Samia Mrabat Meknès' },
];

/* ── equipment placeholders ── */
const equipments = [
  { icon: '🔬', label: 'Équipement 1' },
  { icon: '💡', label: 'Équipement 2' },
  { icon: '🩺', label: 'Équipement 3' },
  { icon: '⚗️', label: 'Équipement 4' },
  { icon: '🖥️', label: 'Équipement 5' },
  { icon: '✂️', label: 'Équipement 6' },
];

/* ── patient experience cards ── */
const experienceCards = [
  {
    icon: '👋',
    title: 'Un accueil personnalisé',
    text: 'Notre équipe vous accueille et vous accompagne tout au long de votre visite.',
  },
  {
    icon: '📅',
    title: 'Des consultations sur rendez-vous',
    text: 'Une organisation permettant de limiter le temps d\'attente et d\'assurer une meilleure qualité de prise en charge.',
  },
  {
    icon: '🔒',
    title: 'Respect de la confidentialité',
    text: 'Toutes les consultations sont réalisées dans un environnement garantissant le respect de votre vie privée.',
  },
  {
    icon: '✨',
    title: 'Un cadre moderne',
    text: 'Des espaces lumineux, confortables et adaptés aux consultations dermatologiques.',
  },
];

/* ── FAQ ── */
const faqs = [
  {
    q: 'Le cabinet reçoit-il les enfants ?',
    a: 'Oui, le cabinet accueille les enfants pour différentes consultations de dermatologie pédiatrique.',
  },
  {
    q: 'Faut-il prendre rendez-vous avant de venir ?',
    a: 'Les consultations sont accessibles avec ou sans rendez-vous. Toutefois, les patients ayant pris rendez-vous sont reçus en priorité afin d\'assurer une meilleure organisation et de réduire leur temps d\'attente. Pour un accueil plus rapide, il est recommandé de prendre rendez-vous avant votre venue.',
  },
  {
    q: 'Où se situe le cabinet ?',
    a: 'Le cabinet est situé à Meknès. L\'adresse complète est disponible dans la rubrique Contact ainsi que sur la carte interactive présente sur cette page.',
  },
  {
    q: 'Peut-on contacter le cabinet par WhatsApp ?',
    a: 'Oui. Les patients peuvent contacter le cabinet via WhatsApp pour obtenir des informations ou prendre rendez-vous.',
  },
  {
    q: 'Existe-t-il un parking à proximité ?',
    a: 'Oui. Un parking est disponible devant l\'immeuble où se trouve le cabinet du Dr Samia Mrabat. Les patients venant en voiture peuvent ainsi stationner facilement à proximité avant leur consultation.',
  },
];

export default function NotreCabinet() {
  const [openFaq, setOpenFaq] = useState(0);

  /* ── GSAP scroll animations ── */
  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = document.querySelectorAll('.nc-animate');
    sections.forEach(el => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );
    });

    const grids = document.querySelectorAll('.nc-stagger');
    grids.forEach(grid => {
      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: grid, start: 'top 88%' },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      {/* ── SEO meta (injected into head via effect) ── */}
      <MetaUpdater
        title="Notre Cabinet | Dr Samia Mrabat – Dermatologue à Meknès"
        description="Découvrez le cabinet de dermatologie du Dr Samia Mrabat à Meknès : espaces modernes, équipements de qualité, dermatologie médicale, esthétique et chirurgie dermatologique."
        keywords="Cabinet dermatologique à Meknès, Cabinet de dermatologie à Meknès, Dermatologue Meknès, Consultation dermatologique Meknès, Dermatologie médicale Meknès, Dermatologie esthétique Meknès, Chirurgie dermatologique Meknès"
      />

      {/* ════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════ */}
      <section className="nc-hero">
        <div className="nc-hero-video-wrapper" aria-hidden="true">
          <video
            className="nc-hero-video"
            src="/videos/hero-cabinet.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="nc-hero-overlay" />
        <div className="nc-hero-content nc-animate">
          <span className="nc-badge">NOTRE CABINET</span>
          <h1 className="nc-hero-title">
            Découvrez le cabinet du Dr Samia Mrabat,<br />dermatologue à Meknès
          </h1>
          <p className="nc-hero-text">
            Le cabinet du Dr Samia Mrabat est situé à Meknès et accueille les adultes, les adolescents
            et les enfants pour des consultations en dermatologie médicale, dermatologie esthétique et
            chirurgie dermatologique. Conçu pour offrir un environnement moderne, confortable et
            confidentiel, le cabinet met tout en œuvre afin d'assurer une prise en charge de qualité
            dès votre arrivée.
          </p>
          <div className="nc-hero-btns">
            <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer" className="nc-btn-primary">
              Prendre rendez-vous
            </a>
            <Link to="/services" className="nc-btn-outline">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — PRÉSENTATION
      ════════════════════════════════════════ */}
      <section className="nc-section nc-cream nc-animate">
        <div className="container">
          <div className="nc-two-col">
            <div className="nc-text-col">
              <span className="nc-label">À propos du cabinet</span>
              <h2 className="nc-section-title">Un cabinet de dermatologie moderne à Meknès</h2>
              <p>
                Le cabinet du Dr Samia Mrabat est un cabinet de dermatologie situé à Meknès, dédié
                au diagnostic, au traitement et au suivi des maladies de la peau, des cheveux et des
                ongles. Les patients y sont accueillis dans un cadre moderne, calme et chaleureux,
                conçu pour favoriser leur confort et leur bien-être.
              </p>
              <p>
                Chaque consultation se déroule dans le respect de la confidentialité, avec une
                approche personnalisée adaptée aux besoins de chaque patient.
              </p>
              <p>
                Le cabinet reçoit aussi bien les adultes que les enfants pour différents motifs de
                consultation, notamment les maladies inflammatoires de la peau, les problèmes
                capillaires, les affections des ongles, les consultations de dermatologie esthétique
                et certaines interventions de chirurgie dermatologique.
              </p>
            </div>
            <div className="nc-img-col">
              <div className="nc-img-stack">
                <img src="/images/cabinet/cabinet-01.jpg" alt="Cabinet de dermatologie Dr Samia Mrabat Meknès" className="nc-img-main" />
                <img src="/images/cabinet/cabinet-02.jpg" alt="Accueil du cabinet de dermatologie Meknès" className="nc-img-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — GALERIE
      ════════════════════════════════════════ */}
      <section className="nc-section nc-white nc-animate">
        <div className="container">
          <div className="nc-section-header">
            <span className="nc-label">Galerie</span>
            <h2 className="nc-section-title">Découvrez les différents espaces du cabinet</h2>
            <p className="nc-section-sub">
              Avant votre consultation, découvrez les différents espaces du cabinet grâce à une
              galerie de photographies professionnelles. Ces images permettent de vous familiariser
              avec les lieux et de découvrir l'environnement dans lequel vous serez accueilli.
            </p>
          </div>
          <div className="nc-gallery nc-stagger">
            {galleryImages.map((img, i) => (
              <div key={i} className="nc-gallery-item">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — ÉQUIPEMENTS
      ════════════════════════════════════════ */}
      <section className="nc-section nc-cream nc-animate">
        <div className="container">
          <div className="nc-section-header">
            <span className="nc-label">Équipements</span>
            <h2 className="nc-section-title">Des équipements modernes pour une prise en charge dermatologique de qualité</h2>
            <p className="nc-section-sub">
              Le cabinet dispose d'équipements permettant d'assurer des consultations dermatologiques
              dans des conditions optimales. Ces équipements contribuent à la précision du diagnostic,
              au suivi des patients ainsi qu'à la réalisation de différents soins de dermatologie
              médicale, esthétique et de chirurgie dermatologique.
            </p>
          </div>
          <div className="nc-equip-grid nc-stagger">
            {equipments.map((eq, i) => (
              <div key={i} className="nc-equip-card">
                <div className="nc-equip-icon">{eq.icon}</div>
                <h3 className="nc-equip-label">{eq.label}</h3>
                <p className="nc-equip-desc">Description à compléter</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — EXPÉRIENCE PATIENT
      ════════════════════════════════════════ */}
      <section className="nc-section nc-white nc-animate">
        <div className="container">
          <div className="nc-section-header">
            <span className="nc-label">Expérience patient</span>
            <h2 className="nc-section-title">Une prise en charge centrée sur votre confort</h2>
            <p className="nc-section-sub">
              Au-delà des soins proposés, le cabinet accorde une attention particulière à l'expérience
              des patients. Chaque étape, depuis l'accueil jusqu'à la consultation, est pensée pour
              offrir un environnement rassurant, confortable et professionnel.
            </p>
          </div>
          <div className="nc-exp-grid nc-stagger">
            {experienceCards.map((card, i) => (
              <div key={i} className="nc-exp-card">
                <div className="nc-exp-icon">{card.icon}</div>
                <h3 className="nc-exp-title">{card.title}</h3>
                <p className="nc-exp-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 6 — INFOS PRATIQUES
      ════════════════════════════════════════ */}
      <section className="nc-section nc-cream nc-animate">
        <div className="container">
          <div className="nc-section-header">
            <span className="nc-label">Informations pratiques</span>
            <h2 className="nc-section-title">Préparer votre visite au cabinet</h2>
            <p className="nc-section-sub">
              Retrouvez toutes les informations utiles pour organiser votre consultation au cabinet
              du Dr Samia Mrabat.
            </p>
          </div>
          <div className="nc-info-grid nc-stagger">
            <div className="nc-info-card">
              <span className="nc-info-icon">📍</span>
              <h3>Adresse</h3>
              <p>Meknès, Maroc</p>
            </div>
            <div className="nc-info-card">
              <span className="nc-info-icon">📞</span>
              <h3>Téléphone</h3>
              <p><a href="tel:+212689270924">+212 689 270 924</a></p>
            </div>
            <div className="nc-info-card">
              <span className="nc-info-icon">💬</span>
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer">+212 689 270 924</a></p>
            </div>
            <div className="nc-info-card">
              <span className="nc-info-icon">✉️</span>
              <h3>Email</h3>
              <p><a href="mailto:contact@drsamiamrabat.ma">contact@drsamiamrabat.ma</a></p>
            </div>
            <div className="nc-info-card">
              <span className="nc-info-icon">🕐</span>
              <h3>Horaires</h3>
              <p>Lun – Ven : 9h00 – 18h00<br />Sam : 9h00 – 13h00</p>
            </div>
            <div className="nc-info-card">
              <span className="nc-info-icon">🅿️</span>
              <h3>Stationnement</h3>
              <p>Parking disponible devant l'immeuble du cabinet</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7 — CARTE / LOCALISATION
      ════════════════════════════════════════ */}
      <section className="nc-section nc-white nc-animate">
        <div className="container">
          <div className="nc-section-header">
            <span className="nc-label">Localisation</span>
            <h2 className="nc-section-title">Où se situe le cabinet du Dr Samia Mrabat ?</h2>
            <p className="nc-section-sub">
              Le cabinet est situé à Meknès et accueille les patients de la ville ainsi que des
              communes voisines. Grâce à son emplacement facilement accessible, vous pouvez rejoindre
              le cabinet en voiture ou par les transports disponibles selon votre lieu de résidence.
            </p>
          </div>
          <div className="nc-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106526.85820854081!2d-5.607456!3d33.8951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044c8f461d4b1%3A0x97ae7e7c76feab03!2sMekn%C3%A8s!5e0!3m2!1sfr!2sma!4v1700000000000"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet Dr Samia Mrabat Meknès"
            />
          </div>
          <div className="nc-map-cta">
            <a
              href="https://maps.google.com/?q=Meknes,Maroc"
              target="_blank"
              rel="noopener noreferrer"
              className="nc-btn-outline-dark"
            >
              Obtenir un itinéraire →
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 8 — FAQ
      ════════════════════════════════════════ */}
      <section className="nc-section nc-cream nc-animate">
        <div className="container">
          <div className="nc-section-header">
            <span className="nc-label">FAQ</span>
            <h2 className="nc-section-title">Questions fréquentes sur le cabinet</h2>
          </div>
          <div className="nc-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`nc-faq-item${openFaq === i ? ' open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <div className="nc-faq-q">
                  <span>{faq.q}</span>
                  <span className="nc-faq-toggle">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && (
                  <div className="nc-faq-a"><p>{faq.a}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 9 — CTA FINAL
      ════════════════════════════════════════ */}
      <section className="nc-cta nc-animate">
        <div className="container">
          <div className="nc-cta-inner">
            <h2 className="nc-cta-title">Prenez rendez-vous avec le Dr Samia Mrabat</h2>
            <p className="nc-cta-text">
              Vous souhaitez consulter un dermatologue à Meknès pour un problème de peau, de cheveux
              ou d'ongles, ou obtenir un avis en dermatologie esthétique ? Notre équipe est à votre
              disposition pour répondre à vos questions et organiser votre rendez-vous.
            </p>
            <a
              href="https://wa.me/212689270924"
              target="_blank"
              rel="noopener noreferrer"
              className="nc-btn-white"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Tiny helper: updates <head> meta tags ── */
function MetaUpdater({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    setMeta('description', description);
    setMeta('keywords', keywords);
    return () => { document.title = 'Dr Samia Mrabat – Dermatologue à Meknès'; };
  }, [title, description, keywords]);
  return null;
}
