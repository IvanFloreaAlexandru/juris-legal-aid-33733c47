import { useLanguage } from '@/contexts/LanguageContext';
import { useArticles } from '@/contexts/ArticlesContext';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function News() {
  const { t, language } = useLanguage();
  const { articles, loading } = useArticles();

  const newsArticles = [
    {
      title: t('Modificări importante în Codul Civil', 'Important Changes in the Civil Code'),
      excerpt: t(
        'Noi reglementări privind contractele și obligațiile civile intră în vigoare...',
        'New regulations regarding contracts and civil obligations come into force...'
      ),
      date: '15 ianuarie 2025',
      author: 'Dr. Ion Popescu',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    },
    {
      title: t('Drepturile angajaților în 2025', 'Employee Rights in 2025'),
      excerpt: t(
        'Ce trebuie să știți despre noile prevederi privind dreptul muncii...',
        'What you need to know about the new labor law provisions...'
      ),
      date: '10 ianuarie 2025',
      author: 'Av. Elena Constantinescu',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    },
    {
      title: t('Procedura de divorț simplificată', 'Simplified Divorce Procedure'),
      excerpt: t(
        'Ghid complet pentru divorțul prin acord mutual în 2025...',
        'Complete guide to mutual consent divorce in 2025...'
      ),
      date: '5 ianuarie 2025',
      author: 'Av. Alexandru Dumitrescu',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    },
    {
      title: t('Protecția datelor personale - GDPR', 'Personal Data Protection - GDPR'),
      excerpt: t(
        'Obligațiile companiilor în ceea ce privește protecția datelor...',
        'Company obligations regarding data protection...'
      ),
      date: '28 decembrie 2024',
      author: 'Av. Maria Ionescu',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    },
    {
      title: t('Investiții imobiliare: Aspecte juridice', 'Real Estate Investments: Legal Aspects'),
      excerpt: t(
        'Ce trebuie să verificați înainte de a cumpăra o proprietate...',
        'What to check before buying a property...'
      ),
      date: '20 decembrie 2024',
      author: 'Dr. Ion Popescu',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    },
    {
      title: t('Recuperarea debitelor - Proceduri eficiente', 'Debt Recovery - Efficient Procedures'),
      excerpt: t(
        'Metodele legale pentru recuperarea creanțelor în instanță...',
        'Legal methods for debt recovery in court...'
      ),
      date: '15 decembrie 2024',
      author: 'Av. Maria Ionescu',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            {t('Noutăți și articole', 'News and Articles')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Rămâneți la curent cu ultimele schimbări legislative și sfaturi juridice',
              'Stay up to date with the latest legislative changes and legal advice'
            )}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-16">Se încarcă...</div>
          ) : articles.filter(a => a.status === 'published').length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Nu există articole publicate</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.filter(a => a.status === 'published').map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {article.coverImage && (
                    <img src={article.coverImage} alt={article.title} className="w-full h-48 object-cover" />
                  )}
                  <CardHeader>
                    <Badge className="mb-2 w-fit">{article.category}</Badge>
                    <CardTitle className="font-serif">{article.title}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(article.publishedAt || article.createdAt).toLocaleDateString('ro-RO')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`${language === 'ro' ? '/noutati' : '/news'}/${article.slug}`}>
                        {t('Citește mai mult', 'Read More')}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
