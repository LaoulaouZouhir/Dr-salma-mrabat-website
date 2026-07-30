import React from 'react';

export default function CTASection() {
  return (
    <section className="cta-section animate-section">
      <div className="cta-content">
        <h2 className="cta-title">
          Prenez soin de votre peau avec une prise en charge adaptée à vos besoins
        </h2>
        <p className="cta-text">
          Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner tout au long de votre parcours de soins. Contactez-nous dès aujourd'hui pour prendre rendez-vous.
        </p>
        <a
          href="https://wa.me/212689270924"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}
