import defaultConfig from '../data/articleImagesConfig.json';

const STORAGE_KEY = 'article_images_config_v1';

/**
 * Get full config for all articles (checking localStorage first, fallback to JSON)
 */
export function getAllArticlesConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error reading article images from localStorage', e);
  }
  return defaultConfig;
}

/**
 * Save updated config to localStorage
 */
export function saveArticlesConfig(newConfig) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    // Dispatch custom event so open tabs/components re-render immediately
    window.dispatchEvent(new Event('article_config_updated'));
  } catch (e) {
    console.error('Error saving article images to localStorage', e);
  }
}

/**
 * Reset config back to default JSON file
 */
export function resetArticlesConfig() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('article_config_updated'));
  } catch (e) {
    console.error('Error resetting article images config', e);
  }
}

/**
 * Get images for a specific article ID
 */
export function getArticleConfig(articleId) {
  const all = getAllArticlesConfig();
  return all.find(a => a.id === articleId) || defaultConfig.find(a => a.id === articleId);
}

/**
 * Helper hook to get live article images (re-renders if config changes)
 */
import { useState, useEffect } from 'react';

export function useArticleImages(articleId) {
  const [article, setArticle] = useState(() => getArticleConfig(articleId));

  useEffect(() => {
    const handleUpdate = () => {
      setArticle(getArticleConfig(articleId));
    };

    window.addEventListener('article_config_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('article_config_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [articleId]);

  return article?.images || [];
}
