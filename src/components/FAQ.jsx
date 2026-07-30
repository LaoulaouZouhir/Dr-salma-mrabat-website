import React, { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: "Quand consulter un dermatologue ?",
      a: "Il est recommandé de consulter un dermatologue en cas de problèmes de peau persistants, de modifications suspectes de grains de beauté, de chute de cheveux, de problèmes d'ongles, ou pour un bilan cutané de prévention. Une consultation est également conseillée pour tout soin esthétique de la peau."
    },
    {
      q: "Comment se déroule une première consultation ?",
      a: "La première consultation comprend un entretien approfondi sur vos antécédents médicaux et vos préoccupations, suivi d'un examen clinique complet de la peau. Le Dr Mrabat établit ensuite un diagnostic et propose un plan de traitement personnalisé."
    },
    {
      q: "Les enfants peuvent-ils consulter ?",
      a: "Oui, le cabinet accueille les enfants et les adolescents pour toutes les consultations de dermatologie pédiatrique, incluant l'eczéma, les verrues, les infections cutanées et autres affections de la peau."
    },
    {
      q: "Quels traitements propose le cabinet ?",
      a: "Le cabinet propose des traitements en dermatologie médicale (acné, eczéma, psoriasis, mycoses...), dermatologie esthétique (peelings, mésothérapie, soins anti-âge...) et chirurgie dermatologique (exérèse de lésions, biopsies...)."
    },
    {
      q: "Comment prendre rendez-vous ?",
      a: "Vous pouvez prendre rendez-vous par téléphone au cabinet, via WhatsApp au +212 689 270 924, ou directement sur place. Les consultations sont accessibles avec ou sans rendez-vous, mais la prise de rendez-vous est recommandée pour un accueil plus rapide."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section animate-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title">Vous avez une question ?</h2>
          <p className="section-subtitle">
            Retrouvez les réponses aux questions les plus fréquemment posées avant une consultation dermatologique.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item${openIndex === index ? ' open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-wrapper">
                <h3 className="faq-question">{faq.q}</h3>
                <span className="faq-toggle" aria-hidden="true">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-action">
          <button className="faq-btn">Voir toutes les questions</button>
        </div>
      </div>
    </section>
  );
}
