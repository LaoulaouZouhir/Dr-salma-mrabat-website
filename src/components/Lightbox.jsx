import React, { useState } from 'react';

export default function LightboxImage({ src, alt, caption, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`lightbox-wrapper ${className}`}>
      <div className="lightbox-img-box" onClick={() => setIsOpen(true)} title="Cliquer pour agrandir le schéma médical">
        <img src={src} alt={alt || 'Schéma médical'} className="lightbox-thumbnail" />
        <div className="lightbox-overlay-hint">
          <span>🔍 Cliquer pour agrandir l'infographie</span>
        </div>
      </div>
      {caption && <p className="lightbox-caption">{caption}</p>}

      {isOpen && (
        <div className="lightbox-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setIsOpen(false)} aria-label="Fermer">
              ✕
            </button>
            <img src={src} alt={alt || 'Schéma médical agrandi'} className="lightbox-full-img" />
            {caption && <div className="lightbox-modal-caption">{caption}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
