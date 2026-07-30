import React from 'react';

const MAPS_SEARCH_URL =
  'https://www.google.com/maps/search/?api=1&query=Cabinet+de+Dermatologie+Dr.+Samia+MRABAT+Bureaux+Reda+Rue+Benzerte+Mekn%C3%A8s';

const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Cabinet+de+Dermatologie+Dr.+Samia+MRABAT+Bureaux+Reda+Rue+Benzerte+Mekn%C3%A8s&t=&z=16&ie=UTF8&iwloc=&output=embed';

export default function Location() {
  return (
    <section id="contact" className="location-section animate-section">
      <div className="container">

        <div className="location-header">
          <h2 className="section-title">Un cabinet facilement accessible</h2>
          <p className="section-subtitle">
            Situé au cœur de Meknès à Hamria, le cabinet du Dr Samia Mrabat accueille les patients dans
            un environnement moderne, facilement accessible avec parking à proximité.
          </p>
        </div>

        <div className="location-inner">
          <div className="location-map">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="480"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du Cabinet Dr Samia Mrabat à Meknès"
            />
          </div>

          <div className="location-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>
                <strong>Adresse :</strong><br />
                N°5, 2ème étage, Bureaux Reda, Rue Benzerte,<br />
                Bd Allal Ben Abdallah, Hamria, Meknès 50000<br />
                <em style={{ fontSize: '0.82rem', color: '#666' }}>
                  (Derrière le siège de la Banque Populaire)
                </em>
              </p>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <p>
                <strong>Téléphone cabinet :</strong><br />
                <a href="tel:+212535524067">+212 5 35 52 40 67</a>
              </p>
            </div>

            <div className="info-item">
              <span className="info-icon">💬</span>
              <p>
                <strong>WhatsApp & Mobile :</strong><br />
                <a href="https://wa.me/212689270924" target="_blank" rel="noopener noreferrer">
                  +212 6 89 27 09 24
                </a>
              </p>
            </div>

            <div className="info-item">
              <span className="info-icon">🕐</span>
              <p>
                <strong>Horaires d'ouverture :</strong><br />
                Lundi – Vendredi : 09:00 – 18:00<br />
                Samedi : 09:00 – 13:00
              </p>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <p>
                <strong>Email :</strong><br />
                <a href="mailto:contact@drsamiamrabat.ma">contact@drsamiamrabat.ma</a>
              </p>
            </div>

            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn"
            >
              Obtenir un itinéraire Google Maps ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
