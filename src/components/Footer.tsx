'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi';
import { RiWechatFill, RiWeiboFill } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 mt-12 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI信息中心
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              提供最新AI资讯与全面的AI模型信息
            </p>
          </div>

          <div className="flex flex-col mb-4 md:mb-0">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              导航链接
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                首页
              </Link>
              <Link href="/models" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                AI模型库
              </Link>
              <Link href="/news" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                AI资讯
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              分享与关注
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition duration-150"
              >
                <RiWechatFill className="h-5 w-5" />
                <span className="sr-only">微信</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-red-500 transition duration-150"
              >
                <RiWeiboFill className="h-5 w-5" />
                <span className="sr-only">微博</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition duration-150"
              >
                <FiTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-150"
              >
                <FiGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:contact@aiinfohub.com"
                className="text-gray-500 hover:text-purple-500 transition duration-150"
              >
                <FiMail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            &copy; {currentYear} AI信息中心. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 