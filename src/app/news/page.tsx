'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import NewsCard from '@/components/NewsCard';
import { newsArticles } from '@/data/news';
import { NewsArticle } from '@/types';
import { FiSearch, FiX } from 'react-icons/fi';

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    // 按发布时间排序
    const sortedArticles = [...newsArticles].sort(
      (a, b) => 
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
    
    setArticles(sortedArticles);
    setFilteredArticles(sortedArticles);
  }, []);

  // 获取所有标签
  const getAllTags = () => {
    const allTags = articles.flatMap((article) => article.tags);
    return Array.from(new Set(allTags));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters(searchQuery, selectedTag);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value === '') {
      applyFilters('', selectedTag);
    }
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag('');
      applyFilters(searchQuery, '');
    } else {
      setSelectedTag(tag);
      applyFilters(searchQuery, tag);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag('');
    setFilteredArticles(articles);
  };

  const applyFilters = (query: string, tag: string) => {
    let result = [...articles];

    if (query) {
      const searchLower = query.toLowerCase();
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(searchLower) ||
          article.summary.toLowerCase().includes(searchLower) ||
          article.content.toLowerCase().includes(searchLower) ||
          article.source.toLowerCase().includes(searchLower) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    if (tag) {
      result = result.filter((article) => article.tags.includes(tag));
    }

    setFilteredArticles(result);
  };

  return (
    <Layout>
      <div className="pb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI领域最新资讯
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            了解人工智能领域的最新动态、技术突破和行业趋势，保持对AI发展前沿的把握。
          </p>
        </div>

        {/* 搜索和标签筛选 */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white"
                placeholder="搜索AI资讯..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
              {searchQuery && (
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  onClick={() => {
                    setSearchQuery('');
                    applyFilters('', selectedTag);
                  }}
                >
                  <FiX />
                </button>
              )}
            </div>
          </form>

          <div className="flex flex-wrap gap-2 mb-4">
            {getAllTags().map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedTag === tag
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
            
            {(searchQuery || selectedTag) && (
              <button
                className="px-3 py-1 text-sm rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                onClick={clearFilters}
              >
                清除筛选
              </button>
            )}
          </div>
        </div>

        {/* 文章列表 */}
        <div className="space-y-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))
          ) : (
            <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                未找到符合条件的资讯，请尝试调整搜索条件。
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 