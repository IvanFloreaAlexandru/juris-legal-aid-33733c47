import { useState, useEffect } from 'react';

export interface SearchResult {
  id: string;
  title: string;
  type: 'article' | 'service' | 'lawyer';
  excerpt: string;
  url: string;
  highlight?: string;
}

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTimeout = setTimeout(async () => {
      setLoading(true);
      try {
        // TODO: Replace with your Python API endpoint
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const highlightText = (text: string, searchQuery: string): string => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.replace(regex, '<mark class="bg-primary/20">$1</mark>');
  };

  return { query, setQuery, results, loading, highlightText };
};
