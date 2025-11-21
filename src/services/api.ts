/**
 * API Service for fetching articles from backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001/api';

export interface Article {
  id: number;
  title: string | null;
  excerpt: string | null;
  tags: string[];
  publishedAt: string;
}

export interface ArticleDetail extends Article {
  content: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Fetch all articles (card view)
 */
export async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/articles`);

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error('API returned unsuccessful response');
    }

    return data.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}

/**
 * Fetch single article by ID (full content)
 */
export async function fetchArticleById(id: number): Promise<ArticleDetail> {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Article not found');
      }
      throw new Error(`Failed to fetch article: ${response.status}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error('API returned unsuccessful response');
    }

    return data.data;
  } catch (error) {
    console.error(`Error fetching article ${id}:`, error);
    throw error;
  }
}

/**
 * Calculate read time based on content length
 * Average reading speed: 200 words per minute
 */
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}
