'use client';

import { ModelCategory, ModelCapability } from '@/types';
import { useState } from 'react';

interface ModelFilterProps {
  categories: ModelCategory[];
  capabilities: ModelCapability[];
  onFilterChange: (filters: {
    categories: ModelCategory[];
    capabilities: ModelCapability[];
    search: string;
  }) => void;
}

const ModelFilter = ({
  categories,
  capabilities,
  onFilterChange,
}: ModelFilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<ModelCategory[]>(
    []
  );
  const [selectedCapabilities, setSelectedCapabilities] = useState<
    ModelCapability[]
  >([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryToggle = (category: ModelCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleCapabilityToggle = (capability: ModelCapability) => {
    setSelectedCapabilities((prev) =>
      prev.includes(capability)
        ? prev.filter((c) => c !== capability)
        : [...prev, capability]
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const applyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
      capabilities: selectedCapabilities,
      search: searchQuery,
    });
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedCapabilities([]);
    setSearchQuery('');
    onFilterChange({
      categories: [],
      capabilities: [],
      search: '',
    });
  };

  return (
    <div className="p-5 bg-white dark:bg-slate-800 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        筛选AI模型
      </h2>

      {/* 搜索框 */}
      <div className="mb-5">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          搜索
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
            placeholder="输入模型名称或公司..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* 类别筛选 */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          模型类别
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-2 py-1 text-xs rounded-full transition-colors ${
                selectedCategories.includes(category)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => handleCategoryToggle(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 能力筛选 */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          模型能力
        </h3>
        <div className="flex flex-wrap gap-2">
          {capabilities.map((capability) => (
            <button
              key={capability}
              className={`px-2 py-1 text-xs rounded-full transition-colors ${
                selectedCapabilities.includes(capability)
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => handleCapabilityToggle(capability)}
            >
              {capability}
            </button>
          ))}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-2 mt-4">
        <button
          className="btn flex-1 bg-blue-500 hover:bg-blue-600"
          onClick={applyFilters}
        >
          应用筛选
        </button>
        <button
          className="btn-ghost px-4 py-2 rounded-md text-sm"
          onClick={resetFilters}
        >
          重置
        </button>
      </div>
    </div>
  );
};

export default ModelFilter; 