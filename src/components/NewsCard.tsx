'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NewsArticle } from '@/types';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { FiExternalLink, FiShare2 } from 'react-icons/fi';
import { useState } from 'react';
import { 
  TwitterShareButton, 
  WeiboShareButton,
  FacebookShareButton,
} from 'react-share';
import { RiWechatFill, RiWeiboFill } from 'react-icons/ri';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard = ({ article }: NewsCardProps) => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const {
    id,
    title,
    summary,
    publishDate,
    imageUrl,
    url,
    tags,
    source,
  } = article;

  // 格式化日期
  let formattedDate;
  try {
    formattedDate = format(new Date(publishDate), 'yyyy年MM月dd日', {
      locale: zhCN,
    });
  } catch (error) {
    formattedDate = publishDate;
  }

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <div className="card overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:flex-shrink-0 relative">
          <div className="h-48 md:h-full md:w-48 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover object-center"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-2xl font-bold text-gray-400 dark:text-gray-600">
                AI
              </div>
            )}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-2">
                {source}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {formattedDate}
              </span>
            </div>
            <div className="relative">
              <button
                onClick={toggleShareOptions}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
              >
                <FiShare2 className="h-4 w-4" />
              </button>

              {showShareOptions && (
                <div className="absolute right-0 top-6 bg-white dark:bg-slate-800 shadow-lg rounded-md p-2 z-10 flex space-x-2">
                  <WeiboShareButton url={url} title={title}>
                    <RiWeiboFill className="h-6 w-6 text-red-500 hover:opacity-80" />
                  </WeiboShareButton>
                  <TwitterShareButton url={url} title={title}>
                    <FaTwitter className="h-5 w-5 text-blue-400 hover:opacity-80" />
                  </TwitterShareButton>
                  <FacebookShareButton url={url} quote={title}>
                    <FaFacebook className="h-5 w-5 text-blue-600 hover:opacity-80" />
                  </FacebookShareButton>
                </div>
              )}
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3 flex-grow">
            {summary}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="badge-primary text-xs px-2 py-1"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="badge-primary text-xs px-2 py-1">
                  +{tags.length - 3}
                </span>
              )}
            </div>

            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
            >
              阅读全文 <FiExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard; 