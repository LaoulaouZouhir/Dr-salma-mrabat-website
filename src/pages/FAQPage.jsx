import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MetaUpdater({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.name = 'keywords';
      document.head.appendChild(metaKw);
    }
    metaKw.content = keywords;
  }, [title, description, keywords]);

  return null;
}

const faqData = [
  {
    category: 'Consultations',
    items: [
      {
        q: 'Quand faut-il consulter un dermatologue ?',
        a: 'Il est recommandé de consulter dès l’apparition d’une lésion cutanée persistante, d’un changement d’aspect d’un grain de beauté (taille, couleur, forme), d’éruptions ou démangeaisons inexpliquées, de chute de cheveux importante ou pour un bilan de dépistage annuel.',
      },
      {
        q: 'Comment se déroule la première consultation au cabinet ?',
        a: 'La consultation débute par un entretien médical approfondi (antécédents, habitudes de soin), suivi d’un examen clinique minutieux de la peau ou du cuir chevelu. Le Dr Samia Mrabat pose le diagnostic et établit un plan de traitement clair et personnalisé.',
      },
      {
        q: 'Faut-il préparer des documents particuliers avant la visite ?',
        a: 'Il est conseillé d’apporter vos ordonnances récentes, vos derniers bilans sanguins ou examens médicaux, ainsi que la liste des produits cosmétiques ou traitements topiques que vous utilisez actuellement.',
      },
    ],
  },
  {
    category: 'Traitements',
    items: [
      {
        q: 'Combien de temps faut-il pour voir des résultats pour l’acné ou la rosacée ?',
        a: 'Les premiers progrès apparaissent généralement au bout de 3 à 6 semaines de traitement régulier. Un suivi périodique permet d’ajuster les soins jusqu’à rémission complète.',
      },
      {
        q: 'Les traitements dermatologiques conviennent-ils aux peaux très sensibles ?',
        a: 'Oui, chaque traitement est scrupuleusement adapté à votre phototype et au niveau de sensibilité de votre peau. Des formulations apaisantes et progressives sont privilégiées.',
      },
    ],
  },
  {
    category: 'Actes Esthétiques',
    items: [
      {
        q: 'Les injections de Botox ou d’acide hyaluronique sont-elles douloureuses ?',
        a: 'Les injections sont réalisées avec des aiguilles ultra-fines et sont très peu douloureuses. Une crème esthésique ou anesthésiante locale peut être appliquée avant le geste pour un confort optimal.',
      },
      {
        q: 'Quelle est la durée d’efficacité des soins esthétiques ?',
        a: 'L’acide hyaluronique offre des résultats visibles pendant 9 à 18 mois selon la zone injectée. La toxine botulique (Botox) agit pendant 4 à 6 mois. Les peelings et le microneedling améliorent la qualité cutanée sur le long terme avec des séances d’entretien.',
      },
      {
        q: 'Y a-t-il des rougeurs après un peeling ou une séance de microneedling ?',
        a: 'Une légère rougeur comparable à un coup de soleil peut persister entre 24h et 72h. Des consignes précises d’hydratation et de protection solaire vous seront remises.',
      },
    ],
  },
  {
    category: 'Enfants (Pédiatrie)',
    items: [
      {
        q: 'À partir de quel âge un enfant peut-il être examiné par le Dr Mrabat ?',
        a: 'Le Dr Samia Mrabat accueille les enfants dès la naissance (nourrissons, bébés, jeunes enfants et adolescents) pour tous les soucis pédiatriques de la peau.',
      },
      {
        q: 'Comment traiter l’eczéma atopique chez le jeune enfant ?',
        a: 'Le traitement associe des soins émollients quotidiens et des dermocorticoïdes adaptés lors des poussées, accompagnés de conseils personnalisés sur le bain et le textile.',
      },
    ],
  },
  {
    category: 'Rendez-vous',
    items: [
      {
        q: 'Comment prendre rendez-vous au cabinet ?',
        a: 'Vous pouvez réserver directement en ligne sur la page dédiée "Prendre Rendez-vous", contacter le cabinet par téléphone au 05 35 52 40 67 ou via WhatsApp au +212 6 89 27 09 24.',
      },
      {
        q: 'Est-il possible d’annuler ou reporter un rendez-vous ?',
        a: 'Oui, merci de nous prévenir au moins 24h à l’avance par téléphone ou WhatsApp afin de libérer le créneau pour un autre patient.',
      },
    ],
  },
  {
    category: 'Moyens de Paiement',
    items: [
      {
        q: 'Quels sont les modes de paiement acceptés au cabinet ?',
        a: 'Le cabinet accepte les règlements en espèces et par chèque bancaire. Pour tout renseignement complémentaire, notre secrétariat est à votre disposition.',
      },
      {
        q: 'Délivrez-vous une feuille de soin / facture pour la mutuelle ?',
        a: 'Oui, une quittance et des ordonnances conformes vous sont remises à l’issue de la consultation pour la prise en charge par votre assurance maladie ou mutuelle.',
      },
    ],
  },
  {
    category: 'Suites des Interventions',
    items: [
      {
        q: 'Que faut-il faire après la résection d’un grain de beauté ou un acte chirurgical ?',
        a: 'Il convient de garder le pansement propre et sec, d’éviter la baignade jusqu’à l’ablation des fils (le cas échéant) et de protéger la cicatrice du soleil pendant plusieurs mois.',
      },
      {
        q: 'Quelles sont les précautions solaires indispensables après un soin ?',
        a: 'Après tout acte médical ou esthétique (peeling, laser, chirurgie), l’application d’une protection solaire SPF50+ toutes les 2 heures en cas d’exposition est impérative.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({ '0-0': true }); // First item open by default

  const toggleAccordion = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter items based on selected category & search query
  const filteredData = faqData.map(cat => {
    if (activeCategory !== 'Tous' && cat.category !== activeCategory) return null;

    const matchedItems = cat.items.filter(item =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedItems.length === 0) return null;

    return { ...cat, items: matchedItems };
  }).filter(Boolean);

  return (
    <div className="faq-page">
      <MetaUpdater
        title="Questions Fréquentes (FAQ) | Dr Samia Mrabat – Dermatologue Meknès"
        description="Retrouvez toutes les réponses aux questions fréquemment posées concernant les consultations, traitements, soins esthétiques, dermatologie pédiatrique, rendez-vous et paiements au cabinet du Dr Samia Mrabat à Meknès."
        keywords="FAQ Dermatologue Meknès, Questions consultations dermatologie, Avis soin esthétique Meknès, Prix consultation dermatologue Meknès"
      />

      {/* ── HERO BANNER ── */}
      <section className="faq-hero animate-section">
        <div className="container">
          <span className="faq-badge">CENTRE D'AIDE &amp; FAQ</span>
          <h1 className="faq-hero-title">
            Vos questions, nos réponses explicites
          </h1>
          <p className="faq-hero-text">
            Retrouvez ici toutes les informations pratiques sur les consultations, les actes esthétiques,
            la chirurgie dermatologique et la gestion de vos rendez-vous.
          </p>

          {/* Search bar */}
          <div className="faq-search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Rechercher une question (ex: Botox, acné, rendez-vous, paiement...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER TABS ── */}
      <section className="faq-tabs-section">
        <div className="container">
          <div className="faq-tabs-bar">
            <button
              className={`faq-tab-btn ${activeCategory === 'Tous' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Tous')}
            >
              Toutes les questions
            </button>
            {faqData.map(cat => (
              <button
                key={cat.category}
                className={`faq-tab-btn ${activeCategory === cat.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.category)}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCORDION LIST ── */}
      <section className="faq-list-section animate-section">
        <div className="container">
          {filteredData.length === 0 ? (
            <div className="faq-no-results">
              <p>Aucune question ne correspond à votre recherche "{searchQuery}".</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('Tous'); }} className="faq-reset-btn">
                Réinitialiser la recherche
              </button>
            </div>
          ) : (
            filteredData.map((cat, catIdx) => (
              <div key={catIdx} className="faq-group-block">
                <h2 className="faq-group-title">
                  <span className="group-bullet">•</span> {cat.category}
                </h2>

                <div className="faq-group-accordion">
                  {cat.items.map((item, itemIdx) => {
                    const itemId = `${catIdx}-${itemIdx}`;
                    const isOpen = openItems[itemId];
                    return (
                      <div key={itemIdx} className={`faq-acc-item ${isOpen ? 'open' : ''}`}>
                        <button
                          className="faq-acc-question"
                          onClick={() => toggleAccordion(itemId)}
                          aria-expanded={isOpen}
                        >
                          <span className="question-text">{item.q}</span>
                          <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                        </button>

                        {isOpen && (
                          <div className="faq-acc-answer">
                            <p>{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── BOTTOM CONTACT PROMPT ── */}
      <section className="faq-bottom-prompt animate-section">
        <div className="container">
          <div className="prompt-card">
            <h3>Vous ne trouvez pas la réponse à votre question ?</h3>
            <p>Notre secrétariat médical se tient à votre entière disposition pour vous renseigner.</p>
            <div className="prompt-actions">
              <Link to="/contact" className="prompt-btn-primary">
                Nous envoyer un message
              </Link>
              <a
                href="https://wa.me/212689270924"
                target="_blank"
                rel="noopener noreferrer"
                className="prompt-btn-wa"
              >
                Poser votre question sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
