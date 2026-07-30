import React from 'react';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?kgmid=/g/11pvhqn6zn&q=Cabinet+de+Dermatologie+V%C3%A9n%C3%A9rologie+M%C3%A9decine+esth%C3%A9tique+et+Laser+Dr.+Samia+MRABAT+Mekn%C3%A8s';

export default function Reviews() {
  const reviews = [
    {
      name: 'Khadija M.',
      stars: 5,
      date: 'Récemment',
      text: "Un médecin très accueillante, à l'écoute et d'un grand professionnalisme. Dr. Mrabat a pris tout le temps nécessaire pour analyser mon problème de peau et me proposer le traitement parfaitement adapté. Je la recommande vivement à Meknès !",
    },
    {
      name: 'Amine B.',
      stars: 5,
      date: 'Récemment',
      text: "Cabinet très moderne, propre et bien équipé à Hamria. Le Dr. Samia Mrabat est très pédagogue et explique clairement le diagnostic et le suivi. Les résultats sont très satisfaisants.",
    },
    {
      name: 'Meryem T.',
      stars: 5,
      date: 'Récemment',
      text: "Consultation excellente. Dr. Samia est d'une grande douceur avec une écoute attentive. Ses conseils en dermatologie esthétique et soins de peau sont précieux et très efficaces.",
    },
    {
      name: 'Hassan L.',
      stars: 5,
      date: 'Récemment',
      text: "Très bonne expérience au cabinet. L'accueil est chaleureux et le Dr. Mrabat fait preuve d'un grand savoir-faire médical. Suivi rigoureux et diagnostic d'une grande précision.",
    },
    {
      name: 'Sanaa E.',
      stars: 5,
      date: 'Récemment',
      text: "J'ai emmené ma fille pour une consultation dermatologique. Le Dr. Mrabat a été d'une patience et gentillesse exemplaires. Le traitement prescrit a donné d'excellents résultats très rapidement.",
    },
    {
      name: 'Youssef K.',
      stars: 5,
      date: 'Récemment',
      text: "Professionnelle, compétente et toujours souriante. Le Dr. Samia Mrabat prend le temps d'expliquer chaque détail de la prise en charge. Cabinet recommandé sans hésitation.",
    },
  ];

  return (
    <section className="reviews-section animate-section">
      <div className="container">

        <div className="reviews-header">
          <h2 className="section-title">La satisfaction de nos patients est notre plus belle récompense</h2>
          <p className="section-subtitle">
            Chaque avis reflète la confiance que nos patients nous accordent sur Google.
            Découvrez quelques témoignages sur leur expérience au sein de notre cabinet à Meknès.
          </p>
        </div>

        <div className="reviews-grid stagger-children">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <span className="review-name">{review.name}</span>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-stars">
                {'⭐'.repeat(review.stars)}
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="reviews-action">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-btn"
          >
            Voir tous les avis Google ↗
          </a>
        </div>

      </div>
    </section>
  );
}
