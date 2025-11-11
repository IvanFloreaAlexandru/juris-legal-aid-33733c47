import React from 'react';
import { useParams } from 'react-router-dom';
import { useArticles } from '@/contexts/ArticlesContext';
import { ArticleForm } from '@/components/admin/ArticleForm';

export const AdminArticleEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getArticle, updateArticle } = useArticles();
  
  const article = id ? getArticle(id) : undefined;

  if (!article) {
    return <div>Articol negăsit</div>;
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Editează Articol</h2>
        <p className="text-muted-foreground">Modifică conținutul articolului</p>
      </div>
      <ArticleForm
        article={article}
        onSubmit={(data) => updateArticle(article.id, data)}
      />
    </div>
  );
};
