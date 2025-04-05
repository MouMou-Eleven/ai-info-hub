// AI模型的类型定义
export type ModelCategory = 
  | 'LLM' 
  | 'AI编程' 
  | 'AI视频' 
  | 'AI音乐'
  | 'AI语音'
  | '数字人'
  | 'AI绘画'
  | '多模态'
  | '3D生成'
  | 'Agent'
  | '其他';

export type ModelCapability = 
  | '文本生成' 
  | '代码生成' 
  | '图像生成' 
  | '视频生成' 
  | '音乐生成'
  | '语音合成'
  | '图像识别'
  | '3D建模'
  | '多模态理解'
  | '推理能力'
  | '知识整合'
  | 'Agent能力'
  | '其他';

export interface AIModel {
  id: string;
  name: string;
  company: string;
  category: ModelCategory;
  capabilities: ModelCapability[];
  releaseDate: string;
  description: string;
  imageUrl?: string;
  websiteUrl: string;
  apiDocUrl?: string;
  isOpenSource: boolean;
  lastUpdated: string;
}

// AI资讯的类型定义
export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  author?: string;
  publishDate: string;
  imageUrl?: string;
  url: string;
  tags: string[];
  relatedModels?: string[]; // 相关AI模型的ID
}

// 分享链接的类型定义
export interface ShareLink {
  platform: 'wechat' | 'weibo' | 'twitter' | 'facebook' | 'linkedin';
  url: string;
  title?: string;
} 