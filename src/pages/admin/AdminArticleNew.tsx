import React from 'react';
import { useArticles, Article } from '@/contexts/ArticlesContext';
import { ArticleForm } from '@/components/admin/ArticleForm';

export const AdminArticleNew: React.FC = () => {
  const { createArticle } = useArticles();

  const handleSubmit = async (article: Partial<Article>) => {
    await createArticle(article as Omit<Article, 'id' | 'createdAt' | 'updatedAt'>);
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Articol Nou</h2>
        <p className="text-muted-foreground">Creează un articol sau o noutate legislativă</p>
      </div>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
};
