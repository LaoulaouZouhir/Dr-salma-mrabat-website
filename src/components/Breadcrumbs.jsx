import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="breadcrumbs-nav">
      <ol className="breadcrumbs-list">
        <li className="breadcrumb-item">
          <Link to="/">Accueil</Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="breadcrumb-item">
              <span className="breadcrumb-separator">/</span>
              {isLast || !item.url ? (
                <span className="breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.url}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
