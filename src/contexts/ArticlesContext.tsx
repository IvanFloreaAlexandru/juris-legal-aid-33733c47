import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  author: string;
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

interface ArticlesContextType {
  articles: Article[];
  loading: boolean;
  fetchArticles: (filters?: { category?: string; tag?: string; status?: string; search?: string }) => Promise<void>;
  getArticle: (id: string) => Article | undefined;
  createArticle: (article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => Promise<Article>;
  updateArticle: (id: string, article: Partial<Article>) => Promise<void>;
  deleteArticle: (id: string) => Promise<void>;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

const API_BASE_URL = '/api'; // TODO: Replace with your Python API URL

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (filters?: { category?: string; tag?: string; status?: string; search?: string }) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters?.category) params.append('category', filters.category);
      if (filters?.tag) params.append('tag', filters.tag);
      if (filters?.status) params.append('status', filters.status);
      if (filters?.search) params.append('search', filters.search);

      const response = await fetch(`${API_BASE_URL}/articles?${params.toString()}`);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const getArticle = (id: string) => {
    return articles.find(article => article.id === id);
  };

  const createArticle = async (article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<Article> => {
    const response = await fetch(`${API_BASE_URL}/articles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    const newArticle = await response.json();
    setArticles(prev => [...prev, newArticle]);
    return newArticle;
  };

  const updateArticle = async (id: string, article: Partial<Article>) => {
    await fetch(`${API_BASE_URL}/articles/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    setArticles(prev => prev.map(a => a.id === id ? { ...a, ...article } : a));
  };

  const deleteArticle = async (id: string) => {
    await fetch(`${API_BASE_URL}/articles/${id}`, {
      method: 'DELETE',
    });
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{
      articles,
      loading,
      fetchArticles,
      getArticle,
      createArticle,
      updateArticle,
      deleteArticle,
    }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider');
  }
  return context;
};
