import React from 'react';
import LightboxImage from './Lightbox';
import { useArticleImages } from '../utils/articleImageHelper';

/**
 * Dynamic Article Image Block component.
 * Renders the image configured at `imageIndex` for `articleId`.
 * Updates live when edited in /admin/image-verifier!
 */
export default function ArticleImageBlock({ articleId, imageIndex = 0, className = "diagram-block" }) {
  const images = useArticleImages(articleId);
  const imgData = images[imageIndex];

  if (!imgData || !imgData.src) return null;

  return (
    <div className={className}>
      <LightboxImage
        src={imgData.src}
        alt={imgData.alt || `Illustration ${imageIndex + 1}`}
        caption={imgData.caption}
      />
    </div>
  );
}
