import React, { useState, useEffect } from 'react';

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

const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Cabinet+de+Dermatologie+Dr.+Samia+MRABAT+Bureaux+Reda+Rue+Benzerte+Mekn%C3%A8s&t=&z=16&ie=UTF8&iwloc=&output=embed';

const MAPS_SEARCH_URL =
  'https://www.google.com/maps/search/?api=1&query=Cabinet+de+Dermatologie+Dr.+Samia+MRABAT+Bureaux+Reda+Rue+Benzerte+Mekn%C3%A8s';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    sujet: 'Consultation générale',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate contact form submission
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <MetaUpdater
        title="Contact & Accès | Cabinet Dr Samia Mrabat – Dermatologue Meknès"
        description="Contactez le cabinet du Dr Samia Mrabat à Meknès. Formulaire de contact, téléphone, WhatsApp, adresse exacte à Hamria et carte Google Maps."
        keywords="Contact Dr Samia Mrabat, Adresse dermatologue Meknès, Téléphone cabinet dermatologie Meknès, Rendez-vous dermatologue Hamria"
      />

      {/* ── HERO BANNER ── */}
      <section className="contact-hero animate-section">
        <div className="container">
          <span className="contact-badge">CONTACT &amp; LOCALISATION</span>
          <h1 className="contact-hero-title">
            Nous sommes à votre écoute à Meknès
          </h1>
          <p className="contact-hero-text">
            Une question sur une consultation, un soin esthétique ou un rendez-vous ?
            N'hésitez pas à nous contacter par téléphone, WhatsApp ou via le formulaire ci-dessous.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="contact-main-section animate-section">
        <div className="container">
          <div className="contact-grid">

            {/* Left: Contact Details Cards */}
            <div className="contact-info-col">
              <h2 className="col-title">Coordonnées du Cabinet</h2>
              <p className="col-desc">
                Le cabinet est situé en plein cœur de Meknès (Ville Nouvelle / Hamria), dans un immeuble professionnel accessible avec ascenseur.
              </p>

              <div className="contact-cards-stack">
                <div className="info-card">
                  <div className="info-card-icon">📍</div>
                  <div className="info-card-body">
                    <h3>Adresse</h3>
                    <p>
                      N°5, 2ème étage, Bureaux Reda, Rue Benzerte,<br />
                      Bd Allal Ben Abdallah, Hamria, Meknès 50000<br />
                      <em className="addr-landmark">(Derrière le siège de la Banque Populaire)</em>
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">📞</div>
                  <div className="info-card-body">
                    <h3>Téléphone Fixe</h3>
                    <p>
                      <a href="tel:+212535524067">+212 5 35 52 40 67</a>
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">💬</div>
                  <div className="info-card-body">
                    <h3>WhatsApp &amp; Mobile</h3>
                    <p>
                      <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer">
                        +212 6 89 27 09 24
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">✉️</div>
                  <div className="info-card-body">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:contact@drsamiamrabat.ma">contact@drsamiamrabat.ma</a>
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">🕐</div>
                  <div className="info-card-body">
                    <h3>Horaires d'ouverture</h3>
                    <p>
                      Lundi – Vendredi : 09:00 – 18:00<br />
                      Samedi : 09:00 – 13:00<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-col">
              <div className="form-card">
                <h2 className="form-title">Envoyez-nous un message</h2>
                <p className="form-subtitle">
                  Remplissez ce formulaire et notre équipe vous recontactera dans les plus brefs délais.
                </p>

                {submitted ? (
                  <div className="form-success-box">
                    <span className="success-icon">✓</span>
                    <h3>Message envoyé avec succès !</h3>
                    <p>
                      Merci {formData.prenom} {formData.nom}. Notre secrétariat prendra contact avec vous rapidement au {formData.telephone}.
                    </p>
                    <button
                      className="reset-form-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ nom: '', prenom: '', telephone: '', email: '', sujet: 'Consultation générale', message: '' });
                      }}
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="nom">Nom *</label>
                        <input
                          type="text"
                          id="nom"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                          placeholder="Votre nom"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="prenom">Prénom *</label>
                        <input
                          type="text"
                          id="prenom"
                          required
                          value={formData.prenom}
                          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="telephone">Téléphone *</label>
                        <input
                          type="tel"
                          id="telephone"
                          required
                          value={formData.telephone}
                          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                          placeholder="06 XX XX XX XX"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="exemple@email.com"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="sujet">Sujet de votre demande</label>
                      <select
                        id="sujet"
                        value={formData.sujet}
                        onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                      >
                        <option value="Consultation générale">Consultation générale</option>
                        <option value="Dermatologie médicale">Dermatologie médicale (acné, eczéma...)</option>
                        <option value="Dermatologie esthétique">Dermatologie esthétique (injections, peeling...)</option>
                        <option value="Chirurgie dermatologique">Chirurgie dermatologique</option>
                        <option value="Dépistage & Grains de beauté">Dépistage &amp; Grains de beauté</option>
                        <option value="Renseignement sur les tarifs">Renseignement sur les tarifs</option>
                        <option value="Autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Précisez votre demande ou vos disponibilités..."
                      />
                    </div>

                    <button type="submit" className="submit-btn">
                      Envoyer mon message ↗
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GOOGLE MAPS SECTION ── */}
      <section className="contact-map-section animate-section">
        <div className="container">
          <div className="map-header">
            <h2>Plan d'accès Google Maps</h2>
            <p>Le cabinet est situé à proximité immédiate des transports et commodités de Meknès.</p>
          </div>

          <div className="map-frame-wrap">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="480"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte d'accès au Cabinet Dr Samia Mrabat"
            />
          </div>

          <div className="map-action">
            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              Ouvrir l'itinéraire sur Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
