import React, { useState, useEffect } from 'react';
import { getAllArticlesConfig, saveArticlesConfig, resetArticlesConfig } from '../../utils/articleImageHelper';

export default function ImageVerifierPage() {
  const [config, setConfig] = useState(getAllArticlesConfig());
  const [selectedArticleId, setSelectedArticleId] = useState(config[0]?.id || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    setConfig(getAllArticlesConfig());
  }, []);

  const selectedArticle = config.find(a => a.id === selectedArticleId) || config[0];

  const handleImageChange = (articleId, imageIndex, field, value) => {
    const updated = config.map(art => {
      if (art.id !== articleId) return art;
      const updatedImages = art.images.map((img, idx) => {
        if (idx !== imageIndex) return img;
        return { ...img, [field]: value };
      });
      return { ...art, images: updatedImages };
    });
    setConfig(updated);
    saveArticlesConfig(updated);
    
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm("Voulez-vous réinitialiser toutes les images aux valeurs par défaut du fichier JSON ?")) {
      resetArticlesConfig();
      setConfig(getAllArticlesConfig());
    }
  };

  const handleCopyJSON = () => {
    const jsonStr = JSON.stringify(config, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredArticles = config.filter(art =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.h1}>🔍 Système de Vérification &amp; Placement d'Images</h1>
          <p style={styles.sub}>
            Toute modification effectuée ici est <strong>enregistrée automatiquement en direct</strong> et mise à jour instantanément sur le site web.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {savedNotice && <span style={styles.savedBadge}>⚡ Enregistré en direct !</span>}
          <button style={styles.resetBtn} onClick={handleReset}>
            🔄 Réinitialiser tout
          </button>
          <button style={styles.copyBtn} onClick={handleCopyJSON}>
            {copied ? '✅ JSON Copié !' : '📋 Copier JSON'}
          </button>
        </div>
      </header>

      <div style={styles.layout}>
        {/* Sidebar list */}
        <aside style={styles.sidebar}>
          <input
            type="text"
            placeholder="🔍 Rechercher un article..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <div style={styles.articleList}>
            {filteredArticles.map(art => (
              <div
                key={art.id}
                onClick={() => setSelectedArticleId(art.id)}
                style={{
                  ...styles.articleCard,
                  borderColor: art.id === selectedArticleId ? '#0284c7' : '#e2e8f0',
                  backgroundColor: art.id === selectedArticleId ? '#f0f9ff' : '#ffffff',
                }}
              >
                <span style={styles.badge}>{art.category}</span>
                <h4 style={styles.artTitle}>{art.title}</h4>
                <div style={styles.imgCount}>🖼️ {art.images.length} image(s)</div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Detail Area */}
        <main style={styles.main}>
          {selectedArticle && (
            <div>
              <div style={styles.articleHeader}>
                <div>
                  <span style={styles.badgeLarge}>{selectedArticle.category}</span>
                  <h2 style={{ margin: '8px 0', color: '#0f172a' }}>{selectedArticle.title}</h2>
                  <code style={styles.urlCode}>{selectedArticle.url}</code>
                </div>
                <a
                  href={selectedArticle.url}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.liveBtn}
                >
                  🌐 Voir l'Article en Direct →
                </a>
              </div>

              <h3 style={{ marginTop: '24px', color: '#334155' }}>
                Images configurées ({selectedArticle.images.length})
              </h3>

              <div style={styles.imagesGrid}>
                {selectedArticle.images.map((img, idx) => (
                  <div key={img.id || idx} style={styles.imageEditCard}>
                    <div style={styles.imagePreviewBox}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        style={styles.previewImage}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div style={styles.imageErrorAlert}>
                        ⚠️ Image introuvable à l'emplacement :<br/><code>{img.src}</code>
                      </div>
                    </div>

                    <div style={styles.formBox}>
                      <label style={styles.label}>Emplacement / Section cible :</label>
                      <input
                        type="text"
                        value={img.section}
                        onChange={e => handleImageChange(selectedArticle.id, idx, 'section', e.target.value)}
                        style={styles.input}
                      />

                      <label style={styles.label}>Chemin d'accès de l'image (src) :</label>
                      <input
                        type="text"
                        value={img.src}
                        onChange={e => handleImageChange(selectedArticle.id, idx, 'src', e.target.value)}
                        style={styles.input}
                      />

                      <label style={styles.label}>Légende sous l'image (Caption) :</label>
                      <textarea
                        rows={2}
                        value={img.caption}
                        onChange={e => handleImageChange(selectedArticle.id, idx, 'caption', e.target.value)}
                        style={styles.textarea}
                      />

                      <label style={styles.label}>Texte de remplacement (Alt) :</label>
                      <input
                        type="text"
                        value={img.alt}
                        onChange={e => handleImageChange(selectedArticle.id, idx, 'alt', e.target.value)}
                        style={styles.input}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '32px',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '2px solid #e2e8f0',
  },
  h1: { fontSize: '24px', color: '#0f172a', margin: 0 },
  sub: { color: '#64748b', margin: '4px 0 0 0', fontSize: '14px' },
  savedBadge: { backgroundColor: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' },
  resetBtn: {
    backgroundColor: '#fff',
    color: '#64748b',
    border: '1px solid #cbd5e1',
    padding: '10px 16px',
    borderRadius: '8px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  copyBtn: {
    backgroundColor: '#0284c7',
    color: '#fff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  layout: { display: 'grid', gridTemplateColumns: '320px 1fr', gap: '24px' },
  sidebar: { backgroundColor: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' },
  searchInput: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '16px', boxSizing: 'border-box' },
  articleList: { display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: 'calc(100vh - 220px)', overflowY: 'auto' },
  articleCard: { padding: '12px', borderRadius: '8px', border: '1px solid', cursor: 'pointer', transition: 'all 0.2s' },
  badge: { fontSize: '11px', fontWeight: 'bold', color: '#0284c7', textTransform: 'uppercase' },
  badgeLarge: { fontSize: '12px', fontWeight: 'bold', color: '#0284c7', backgroundColor: '#e0f2fe', padding: '4px 8px', borderRadius: '4px' },
  artTitle: { fontSize: '14px', margin: '4px 0', color: '#1e293b' },
  imgCount: { fontSize: '12px', color: '#64748b' },
  main: { backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' },
  articleHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' },
  urlCode: { fontSize: '12px', color: '#475569', backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' },
  liveBtn: { backgroundColor: '#0f172a', color: '#fff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '13px', fontWeight: '500' },
  imagesGrid: { display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' },
  imageEditCard: { display: 'grid', gridTemplateColumns: '340px 1fr', gap: '20px', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0', backgroundColor: '#fafafa' },
  imagePreviewBox: { borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', backgroundColor: '#eee', minHeight: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  previewImage: { width: '100%', height: 'auto', display: 'block', objectFit: 'cover' },
  imageErrorAlert: { display: 'none', padding: '12px', color: '#b91c1c', fontSize: '12px', textAlign: 'center' },
  formBox: { display: 'flex', flexDirection: 'column', gap: '10px' },
  label: { fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '-4px' },
  input: { width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', fontFamily: 'inherit', boxSizing: 'border-box' },
};
