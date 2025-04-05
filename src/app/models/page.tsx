'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ModelCard from '@/components/ModelCard';
import ModelFilter from '@/components/ModelFilter';
import { aiModels } from '@/data/models';
import { AIModel, ModelCategory, ModelCapability } from '@/types';

export default function ModelsPage() {
  const [models, setModels] = useState<AIModel[]>([]);
  const [filteredModels, setFilteredModels] = useState<AIModel[]>([]);
  const [categories, setCategories] = useState<ModelCategory[]>([]);
  const [capabilities, setCapabilities] = useState<ModelCapability[]>([]);

  useEffect(() => {
    // 初始化模型数据
    setModels(aiModels);
    setFilteredModels(aiModels);

    // 提取所有的类别和能力
    const uniqueCategories = Array.from(
      new Set(aiModels.map((model) => model.category))
    );
    setCategories(uniqueCategories);

    const allCapabilities = aiModels.flatMap((model) => model.capabilities);
    const uniqueCapabilities = Array.from(new Set(allCapabilities));
    setCapabilities(uniqueCapabilities);
  }, []);

  const handleFilterChange = (filters: {
    categories: ModelCategory[];
    capabilities: ModelCapability[];
    search: string;
  }) => {
    let result = [...models];

    // 应用类别筛选
    if (filters.categories.length > 0) {
      result = result.filter((model) =>
        filters.categories.includes(model.category)
      );
    }

    // 应用能力筛选
    if (filters.capabilities.length > 0) {
      result = result.filter((model) =>
        filters.capabilities.some((cap) => model.capabilities.includes(cap))
      );
    }

    // 应用搜索筛选
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (model) =>
          model.name.toLowerCase().includes(searchLower) ||
          model.company.toLowerCase().includes(searchLower) ||
          model.description.toLowerCase().includes(searchLower)
      );
    }

    setFilteredModels(result);
  };

  return (
    <Layout>
      <div className="pb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI模型库
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            探索各类AI模型，从大语言模型到视频生成、编程助手等，全面了解AI领域的前沿技术。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 筛选侧边栏 */}
          <div className="lg:col-span-1">
            <ModelFilter
              categories={categories}
              capabilities={capabilities}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* 模型卡片展示区 */}
          <div className="lg:col-span-3">
            {filteredModels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredModels.map((model) => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  未找到符合条件的模型，请尝试调整筛选条件。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 