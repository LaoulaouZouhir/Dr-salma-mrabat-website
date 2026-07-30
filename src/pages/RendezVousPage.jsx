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

export default function RendezVousPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    motif: 'Dermatologie médicale',
    date: '',
    heure: 'Matin (09h - 12h)',
    remarques: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Pre-filled WhatsApp link based on form fields
  const waText = encodeURIComponent(
    `Bonjour Dr Samia Mrabat, je souhaite demander un rendez-vous pour : ${formData.motif}. Patient : ${formData.prenom} ${formData.nom} (${formData.telephone}).`
  );
  const waUrl = `https://wa.me/212689270924?text=${waText}`;

  return (
    <div className="rdv-page">
      <MetaUpdater
        title="Prendre Rendez-vous | Cabinet Dr Samia Mrabat – Dermatologue Meknès"
        description="Prenez rendez-vous en ligne, par téléphone ou via WhatsApp au cabinet du Dr Samia Mrabat à Meknès. Consultation en dermatologie médicale, esthétique et chirurgicale."
        keywords="Prendre RDV dermatologue Meknès, Rendez-vous Dr Samia Mrabat, Consultation dermatologie Meknès, RDV WhatsApp dermatologue"
      />

      {/* ── GRAND HERO CALL TO ACTION ── */}
      <section className="rdv-hero animate-section">
        <div className="container">
          <span className="rdv-badge">PRISE DE RENDEZ-VOUS</span>
          <h1 className="rdv-hero-title">
            Prenez soin de votre peau dès aujourd'hui
          </h1>
          <p className="rdv-hero-text">
            Réservez facilement votre consultation en dermatologie médicale, esthétique ou chirurgicale.
            Choisissez l'option qui vous convient le mieux : formulaire en ligne, téléphone ou WhatsApp.
          </p>

          {/* Quick Direct Buttons */}
          <div className="rdv-hero-actions">
            <a
              href="tel:+212535524067"
              className="rdv-hero-btn btn-call"
            >
              📞 Appeler le cabinet (05 35 52 40 67)
            </a>
            <a
              href="https://wa.me/212689270924"
              target="_blank"
              rel="noopener noreferrer"
              className="rdv-hero-btn btn-wa"
            >
              💬 Réserver via WhatsApp (+212 6 89 27 09 24)
            </a>
          </div>
        </div>
      </section>

      {/* ── MAIN APPOINTMENT FORM & INFO ── */}
      <section className="rdv-form-section animate-section">
        <div className="container">
          <div className="rdv-grid">

            {/* Left: Form */}
            <div className="rdv-form-col">
              <div className="rdv-card">
                <h2 className="card-title">Formulaire de demande de rendez-vous</h2>
                <p className="card-subtitle">
                  Complétez le formulaire ci-dessous. Notre secrétariat vous recontactera rapidement pour vous confirmer la date exacte de votre consultation.
                </p>

                {submitted ? (
                  <div className="rdv-success-box">
                    <span className="success-icon">✓</span>
                    <h3>Demande enregistrée avec succès !</h3>
                    <p>
                      Merci <strong>{formData.prenom} {formData.nom}</strong>. Votre demande de rendez-vous pour <strong>{formData.motif}</strong> a bien été transmise.
                    </p>
                    <p className="success-sub">
                      Notre secrétariat vous rappellera très rapidement au <strong>{formData.telephone}</strong> pour valider l'horaire.
                    </p>

                    <div className="success-wa-prompt">
                      <p>Pour une confirmation encore plus rapide, vous pouvez aussi nous envoyer directement votre demande sur WhatsApp :</p>
                      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="wa-direct-link">
                        Envoyer ma demande sur WhatsApp 💬
                      </a>
                    </div>

                    <button
                      className="reset-form-btn"
                      onClick={() => setSubmitted(false)}
                    >
                      Faire une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rdv-form">
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="nom">Nom du patient *</label>
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
                        <label htmlFor="prenom">Prénom du patient *</label>
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
                        <label htmlFor="telephone">Téléphone (WhatsApp de préférence) *</label>
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
                        <label htmlFor="email">Email (optionnel)</label>
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
                      <label htmlFor="motif">Motif de la consultation *</label>
                      <select
                        id="motif"
                        value={formData.motif}
                        onChange={(e) => setFormData({ ...formData, motif: e.target.value })}
                      >
                        <option value="Dermatologie médicale">Dermatologie médicale (Acné, eczéma, psoriasis, alopécie...)</option>
                        <option value="Dermatologie esthétique">Dermatologie esthétique (Injections, Botox, Peelings, Microneedling...)</option>
                        <option value="Chirurgie dermatologique">Chirurgie dermatologique (Kystes, lipomes, grains de beauté...)</option>
                        <option value="Dermatologie pédiatrique">Dermatologie pédiatrique (Enfants &amp; Bébés)</option>
                        <option value="Dépistage & Grains de beauté">Dépistage &amp; Contrôle des grains de beauté</option>
                        <option value="Consultation de suivi">Consultation de suivi</option>
                      </select>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="date">Date souhaitée (indicatif)</label>
                        <input
                          type="date"
                          id="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="heure">Créneau préféré</label>
                        <select
                          id="heure"
                          value={formData.heure}
                          onChange={(e) => setFormData({ ...formData, heure: e.target.value })}
                        >
                          <option value="Matin (09h - 12h)">Matin (09h00 – 12h00)</option>
                          <option value="Après-midi (14h - 18h)">Après-midi (14h00 – 18h00)</option>
                          <option value="Indifférent">Premier créneau disponible</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="remarques">Précisions ou remarques utiles</label>
                      <textarea
                        id="remarques"
                        rows="4"
                        value={formData.remarques}
                        onChange={(e) => setFormData({ ...formData, remarques: e.target.value })}
                        placeholder="Décrivez brièvement vos symptômes ou vos disponibilités..."
                      />
                    </div>

                    <button type="submit" className="rdv-submit-btn">
                      Envoyer ma demande de rendez-vous ↗
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Cabinet Info Sidebar */}
            <div className="rdv-sidebar-col">
              <div className="sidebar-card">
                <h3>Informations Pratiques</h3>

                <div className="side-item">
                  <span className="side-icon">📍</span>
                  <div>
                    <strong>Adresse du Cabinet :</strong>
                    <p>
                      N°5, 2ème étage, Bureaux Reda,<br />
                      Rue Benzerte, Bd Allal Ben Abdallah,<br />
                      Hamria, Meknès 50000<br />
                      <em className="addr-landmark">(Derrière Banque Populaire)</em>
                    </p>
                  </div>
                </div>

                <div className="side-item">
                  <span className="side-icon">📞</span>
                  <div>
                    <strong>Téléphone Fixe :</strong>
                    <p><a href="tel:+212535524067">+212 5 35 52 40 67</a></p>
                  </div>
                </div>

                <div className="side-item">
                  <span className="side-icon">💬</span>
                  <div>
                    <strong>WhatsApp Direct :</strong>
                    <p>
                      <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer">
                        +212 6 89 27 09 24
                      </a>
                    </p>
                  </div>
                </div>

                <div className="side-item">
                  <span className="side-icon">🕐</span>
                  <div>
                    <strong>Horaires des Consultations :</strong>
                    <p>
                      Lundi – Vendredi : 09:00 – 18:00<br />
                      Samedi : 09:00 – 13:00
                    </p>
                  </div>
                </div>

                <div className="side-note">
                  <p>💡 <em>Les rendez-vous sont confirmés rapidement par notre secrétariat médical. En cas d'urgence, préférez le téléphone ou WhatsApp.</em></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAPS SECTION ── */}
      <section className="rdv-map-section animate-section">
        <div className="container">
          <div className="map-card-wrap">
            <h2>Venir au cabinet à Meknès</h2>
            <div className="map-frame">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="420"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte d'accès au Cabinet Dr Samia Mrabat"
              />
            </div>
            <div className="map-link-wrap">
              <a
                href={MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link-btn"
              >
                Ouvrir dans l'application Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
