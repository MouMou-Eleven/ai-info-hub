'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AIModel } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';

interface ModelCardProps {
  model: AIModel;
}

const ModelCard = ({ model }: ModelCardProps) => {
  const {
    id,
    name,
    company,
    category,
    capabilities,
    releaseDate,
    description,
    imageUrl,
    websiteUrl,
    lastUpdated,
  } = model;

  // 计算距离更新的时间
  let updatedTimeAgo;
  try {
    updatedTimeAgo = formatDistanceToNow(new Date(lastUpdated), {
      addSuffix: true,
      locale: zhCN,
    });
  } catch (error) {
    updatedTimeAgo = '未知时间';
  }

  return (
    <div className="card group hover:translate-y-[-5px] transition-transform duration-300">
      <div className="relative overflow-hidden h-40 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-2xl font-bold text-gray-400 dark:text-gray-600">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {name}
          </h3>
          <span className="badge-primary text-xs">
            {category}
          </span>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {company}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {capabilities.slice(0, 3).map((capability) => (
            <span
              key={capability}
              className="badge-secondary text-xs px-2 py-1"
            >
              {capability}
            </span>
          ))}
          {capabilities.length > 3 && (
            <span className="badge-secondary text-xs px-2 py-1">
              +{capabilities.length - 3}
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500 dark:text-gray-500">
            更新于 {updatedTimeAgo}
          </div>
          <Link
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm px-3 py-1 text-xs"
          >
            访问官网
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard; 