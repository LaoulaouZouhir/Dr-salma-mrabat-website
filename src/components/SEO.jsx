import React, { useEffect } from 'react';

export default function SEO({
  title = 'Dr Samia Mrabat — Dermatologue à Meknès',
  description = 'Cabinet de dermatologie du Dr Samia Mrabat à Meknès : dermatologie médicale, pédiatrique, esthétique et chirurgie dermatologique.',
  keywords = 'Dermatologue Meknès, Cabinet dermatologie Meknès, Dr Samia Mrabat',
  url = 'https://drsamiamrabatdermatologue.com',
  jsonLd = null,
}) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Meta Keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.name = 'keywords';
      document.head.appendChild(metaKw);
    }
    metaKw.content = keywords;

    // Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = url;

    // OpenGraph
    const setOg = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    };

    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:url', url);
    setOg('og:type', 'website');
    setOg('og:locale', 'fr_MA');

    // Schema.org JSON-LD
    let scriptJsonLd = document.querySelector('#schema-jsonld');
    if (jsonLd) {
      if (!scriptJsonLd) {
        scriptJsonLd = document.createElement('script');
        scriptJsonLd.id = 'schema-jsonld';
        scriptJsonLd.type = 'application/ld+json';
        document.head.appendChild(scriptJsonLd);
      }
      scriptJsonLd.textContent = JSON.stringify(jsonLd);
    } else if (scriptJsonLd) {
      scriptJsonLd.remove();
    }
  }, [title, description, keywords, url, jsonLd]);

  return null;
}
