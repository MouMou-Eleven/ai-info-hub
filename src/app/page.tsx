'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ModelCard from '@/components/ModelCard';
import NewsCard from '@/components/NewsCard';
import { aiModels } from '@/data/models';
import { newsArticles } from '@/data/news';
import { AIModel, NewsArticle } from '@/types';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Home() {
  const [latestModels, setLatestModels] = useState<AIModel[]>([]);
  const [latestNews, setLatestNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // 按更新时间排序，获取最新的5个模型
    const sortedModels = [...aiModels].sort(
      (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    );
    setLatestModels(sortedModels.slice(0, 4));

    // 按发布时间排序，获取最新的3条资讯
    const sortedNews = [...newsArticles].sort(
      (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
    setLatestNews(sortedNews.slice(0, 3));
  }, []);

  return (
    <Layout>
      {/* 英雄区域 */}
      <section className="py-16 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            探索AI领域最新动态
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            为AI初学者和爱好者提供全面的人工智能模型信息和前沿资讯，助力你了解和应用最新AI技术。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/models" 
              className="btn py-3 px-8 text-base"
            >
              浏览模型库
            </Link>
            <Link 
              href="/news" 
              className="btn-secondary py-3 px-8 text-base"
            >
              查看最新资讯
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 最新模型展示 */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            最新AI模型
          </h2>
          <Link 
            href="/models" 
            className="inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            查看全部 <FiArrowRight className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      {/* 最新资讯 */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            最新AI资讯
          </h2>
          <Link 
            href="/news" 
            className="inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            查看全部 <FiArrowRight className="ml-1" />
          </Link>
        </div>
        <div className="space-y-6">
          {latestNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* 帮助区域 */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-8 mt-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            新手入门AI领域？
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            不知道从哪里开始？我们精心整理了各类AI模型，包括大型语言模型、图像生成、音乐创作等多种类型，帮助你快速了解AI领域的最新发展。
          </p>
          <Link 
            href="/models?category=LLM" 
            className="btn py-3 px-8 text-base"
          >
            从LLM模型开始了解
          </Link>
        </div>
      </section>
    </Layout>
  );
} 