import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '@/contexts/ArticlesContext';
import { RichTextEditor } from './RichTextEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Save, Eye } from 'lucide-react';

interface ArticleFormProps {
  article?: Article;
  onSubmit: (article: Partial<Article>) => Promise<void>;
}

const categories = [
  'Noutăți Legislative',
  'Comentarii Juridice',
  'Jurisprudență',
  'Doctrină',
  'Practică',
];

export const ArticleForm: React.FC<ArticleFormProps> = ({ article, onSubmit }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: article?.title || '',
    slug: article?.slug || '',
    content: article?.content || '',
    excerpt: article?.excerpt || '',
    category: article?.category || '',
    tags: article?.tags?.join(', ') || '',
    coverImage: article?.coverImage || '',
    status: article?.status || 'draft' as const,
  });

  useEffect(() => {
    if (!formData.slug && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title]);

  const handleSubmit = async (status: 'draft' | 'published') => {
    if (!formData.title || !formData.content || !formData.category) {
      toast({
        title: 'Eroare',
        description: 'Completează toate câmpurile obligatorii',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      await onSubmit({
        ...formData,
        status,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
        author: 'Admin', // TODO: Replace with actual user
      });
      
      toast({
        title: 'Success',
        description: status === 'published' ? 'Articol publicat' : 'Draft salvat',
      });
      navigate('/admin/articles');
    } catch (error) {
      toast({
        title: 'Eroare',
        description: 'Nu s-a putut salva articolul',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div>
          <Label htmlFor="title">Titlu *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Titlul articolului"
          />
        </div>

        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            placeholder="slug-articol"
          />
        </div>

        <div>
          <Label htmlFor="category">Categorie *</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selectează categoria" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="tags">Tag-uri (separate prin virgulă)</Label>
          <Input
            id="tags"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            placeholder="drept civil, contract, lege"
          />
        </div>

        <div>
          <Label htmlFor="excerpt">Extras (scurt)</Label>
          <Textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="Descriere scurtă pentru preview"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="coverImage">Imagine copertă (URL)</Label>
          <Input
            id="coverImage"
            value={formData.coverImage}
            onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
            placeholder="https://..."
          />
        </div>

        <div>
          <Label>Conținut *</Label>
          <RichTextEditor
            content={formData.content}
            onChange={(content) => setFormData({ ...formData, content })}
          />
        </div>
      </div>

      <div className="flex gap-3 justify-end border-t pt-4">
        <Button variant="outline" onClick={() => navigate('/admin/articles')}>
          Anulează
        </Button>
        <Button
          variant="outline"
          onClick={() => handleSubmit('draft')}
          disabled={loading}
        >
          <Save className="mr-2 h-4 w-4" />
          Salvează Draft
        </Button>
        <Button onClick={() => handleSubmit('published')} disabled={loading}>
          <Eye className="mr-2 h-4 w-4" />
          Publică
        </Button>
      </div>
    </div>
  );
};
