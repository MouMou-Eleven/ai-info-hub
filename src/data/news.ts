import { NewsArticle } from '@/types';

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'OpenAI发布GPT-4o，融合多模态能力与更快速度',
    summary: 'OpenAI发布全新多模态模型GPT-4o，相比前代模型速度提升2倍，价格降低50%，并具备更强的视觉和推理能力。',
    content: `
      OpenAI今日正式发布了新一代多模态大型语言模型GPT-4o，其中"o"代表"omni"（全能）。该模型相比GPT-4在速度、性能和价格方面都有显著提升。

      GPT-4o的主要特点包括：
      - 在保持性能的同时，推理速度提升2倍
      - 价格降低50%
      - 增强的视觉理解能力
      - 实时语音对话能力
      - 更自然的交互方式

      GPT-4o将在未来几周内逐步向ChatGPT Plus和企业客户推出，API访问将在未来几个月内开放。这一更新代表了OpenAI向构建更通用AI系统迈出的重要一步。
    `,
    source: 'OpenAI官方博客',
    author: 'OpenAI团队',
    publishDate: '2024-05-13',
    imageUrl: '/images/news/gpt-4o-release.jpg',
    url: 'https://openai.com/blog/gpt-4o',
    tags: ['GPT-4o', 'OpenAI', '多模态', 'LLM'],
    relatedModels: ['gpt-4o']
  },
  {
    id: 'news-2',
    title: '智谱AI推出Auto-GLM沉思，提升AI自主思考能力',
    summary: '智谱AI发布全新大模型Auto-GLM沉思，通过强化自主思考能力，大幅减少AI幻觉和推理错误问题。',
    content: `
      近日，智谱AI正式推出了Auto-GLM沉思大模型，旨在解决当前AI系统面临的认知和推理限制。该模型特别强化了"思考力"，能够在回答用户问题前进行更深入的自主思考和验证。

      Auto-GLM沉思的主要特点包括：
      - 增强的自主思考能力，可显著减少幻觉问题
      - 多步骤推理能力，能够处理复杂逻辑问题
      - 知识融合能力，对专业领域知识有更准确理解
      - 自我验证机制，能够校正错误答案

      智谱AI表示，Auto-GLM沉思模型在科学计算、数学推理和专业知识问答等方面表现优异，代表了AI认知能力的重要突破。
    `,
    source: '智谱AI官方网站',
    publishDate: '2024-05-16',
    imageUrl: '/images/news/auto-glm.jpg',
    url: 'https://www.zhipuai.cn/news/auto-glm-release',
    tags: ['智谱AI', 'Auto-GLM', '自主思考', 'LLM'],
    relatedModels: ['auto-glm']
  },
  {
    id: 'news-3',
    title: '腾讯发布通用Agent大模型Manus，提供强大工具使用能力',
    summary: '腾讯云正式发布通用Agent大模型Manus，具备丰富工具使用能力，可处理复杂任务和多轮交互。',
    content: `
      腾讯云近日发布了其自研的通用Agent大模型Manus，该模型是腾讯在AI领域的重要布局。Manus具备强大的工具使用能力，可以根据用户需求调用各类API和工具来完成复杂任务。

      Manus的主要特点包括：
      - 强大的工具调用能力，支持多种API和外部工具
      - 多轮对话规划能力，能够记住上下文并根据用户意图调整计划
      - 高效的任务分解能力，可将复杂任务拆解为可执行步骤
      - 跨模态理解能力，支持图文混合输入和理解

      腾讯表示，Manus将率先在腾讯云混元平台和内部业务场景中应用，未来将逐步对外开放API接口。
    `,
    source: '腾讯云官方公告',
    publishDate: '2024-05-16',
    imageUrl: '/images/news/manus-release.jpg',
    url: 'https://cloud.tencent.com/news/manus-agent',
    tags: ['腾讯', 'Manus', 'Agent', '工具调用'],
    relatedModels: ['manus']
  },
  {
    id: 'news-4',
    title: 'Google推出Gemini 1.5 Flash，平衡速度与能力的新选择',
    summary: 'Google发布Gemini系列新成员Gemini 1.5 Flash，提供更快响应速度和更低成本，适合需要快速迭代的应用场景。',
    content: `
      Google近日正式发布了Gemini 1.5 Flash模型，这是Gemini系列的最新成员，定位为高效、低成本的AI解决方案。该模型在保持Gemini系列核心能力的同时，大幅提升了响应速度并降低了使用成本。

      Gemini 1.5 Flash的主要特点包括：
      - 响应速度比Gemini 1.5 Pro提升3倍
      - 维持较高的准确性和理解能力
      - 支持多达100万token的长上下文窗口
      - 更低的API调用成本，适合大规模部署

      Google表示，Gemini 1.5 Flash特别适合需要快速响应的应用场景，如客户服务、内容创作辅助和信息检索等。该模型已通过Google AI Studio和Vertex AI向开发者开放。
    `,
    source: 'Google DeepMind博客',
    publishDate: '2024-05-10',
    imageUrl: '/images/news/gemini-flash.jpg',
    url: 'https://blog.google/technology/ai/gemini-1-5-flash/',
    tags: ['Google', 'Gemini', 'LLM', '高效AI'],
    relatedModels: ['gemini-1.5-pro']
  },
  {
    id: 'news-5',
    title: 'Suno AI推出新一代音乐生成模型，支持更复杂的音乐创作',
    summary: 'Suno AI发布最新音乐生成技术，支持更长时间、更复杂的音乐结构和风格创作，引发音乐创作领域关注。',
    content: `
      音乐生成AI领域的领导者Suno AI近日推出了其新一代音乐生成模型，大幅提升了AI音乐创作的可能性和质量。新模型能够创作出结构更复杂、时长更长、风格更多样的音乐作品。

      新一代Suno模型的主要特点包括：
      - 支持创作最长3分钟的完整歌曲
      - 增强的音乐结构控制，包括前奏、副歌、桥段等
      - 多样化的音乐风格和流派支持
      - 改进的人声合成技术，更自然的歌唱表现
      - 高级混音和编曲能力

      Suno AI表示，新模型旨在为音乐创作者提供更强大的创作辅助工具，而非取代音乐人。该技术已在Suno平台上对所有用户开放使用。
    `,
    source: 'Suno AI官方博客',
    publishDate: '2024-04-28',
    imageUrl: '/images/news/suno-new-model.jpg',
    url: 'https://suno.ai/blog/new-generation',
    tags: ['Suno', 'AI音乐', '内容生成'],
    relatedModels: ['suno']
  }
]; 