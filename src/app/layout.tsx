import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// 使用Inter字体
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'AI信息中心 - 人工智能资讯和模型库',
  description: '为AI初学者提供最新的人工智能资讯和全面的AI模型信息，包括LLM、AI编程、AI视频、音乐生成等多种类型',
  keywords: 'AI资讯, 人工智能, LLM, GPT, Claude, Gemini, AI编程, AI视频, AI音乐, AI小白',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
} 