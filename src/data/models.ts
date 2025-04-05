import { AIModel } from '@/types';

export const aiModels: AIModel[] = [
  // LLM模型
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    company: 'OpenAI',
    category: 'LLM',
    capabilities: ['文本生成', '代码生成', '多模态理解', '推理能力'],
    releaseDate: '2024-05-13',
    description: 'GPT-4o是OpenAI最新的多模态大模型，相比GPT-4更快、更便宜、在视觉和推理能力上有显著提升。',
    imageUrl: '/images/models/gpt-4o.png',
    websiteUrl: 'https://openai.com/gpt-4o',
    apiDocUrl: 'https://platform.openai.com/docs/models/gpt-4o',
    isOpenSource: false,
    lastUpdated: '2024-05-13'
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    company: 'Anthropic',
    category: 'LLM',
    capabilities: ['文本生成', '代码生成', '多模态理解', '推理能力'],
    releaseDate: '2024-03-04',
    description: 'Claude 3 Opus是Anthropic公司的最新旗舰模型，在理解、推理和遵循复杂指令方面表现卓越。',
    imageUrl: '/images/models/claude-3-opus.png',
    websiteUrl: 'https://www.anthropic.com/claude',
    apiDocUrl: 'https://docs.anthropic.com/claude/reference/getting-started-with-the-api',
    isOpenSource: false,
    lastUpdated: '2024-03-04'
  },
  {
    id: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    company: 'Google',
    category: 'LLM',
    capabilities: ['文本生成', '代码生成', '多模态理解', '推理能力'],
    releaseDate: '2024-02-15',
    description: 'Gemini 1.5 Pro是Google最新的多模态模型，具有出色的长上下文理解能力，支持高达100万token的输入。',
    imageUrl: '/images/models/gemini-1.5-pro.png',
    websiteUrl: 'https://deepmind.google/technologies/gemini/',
    apiDocUrl: 'https://ai.google.dev/docs',
    isOpenSource: false,
    lastUpdated: '2024-02-15'
  },
  {
    id: 'glm-4',
    name: 'GLM-4',
    company: '智谱AI',
    category: 'LLM',
    capabilities: ['文本生成', '代码生成', '多模态理解'],
    releaseDate: '2024-04-25',
    description: 'GLM-4是智谱AI推出的最新大模型，在多语言理解、逻辑推理和专业知识等方面有显著提升。',
    imageUrl: '/images/models/glm-4.png',
    websiteUrl: 'https://www.zhipuai.cn/product/glm4',
    apiDocUrl: 'https://open.bigmodel.cn/dev/api',
    isOpenSource: false,
    lastUpdated: '2024-04-25'
  },
  {
    id: 'auto-glm',
    name: 'Auto-GLM沉思',
    company: '智谱AI',
    category: 'LLM',
    capabilities: ['文本生成', '推理能力', '知识整合'],
    releaseDate: '2024-05-16',
    description: 'Auto-GLM沉思是智谱AI推出的自主思考大模型，通过"思考力"提升AI的认知水平，减少推理谬误、幻觉等问题。',
    imageUrl: '/images/models/auto-glm.png',
    websiteUrl: 'https://www.zhipuai.cn/product/auto-glm',
    apiDocUrl: 'https://open.bigmodel.cn/dev/api',
    isOpenSource: false,
    lastUpdated: '2024-05-16'
  },
  
  // AI编程
  {
    id: 'cursor',
    name: 'Cursor',
    company: 'Cursor',
    category: 'AI编程',
    capabilities: ['代码生成', '文本生成'],
    releaseDate: '2023-02-07',
    description: 'Cursor是一款基于AI的代码编辑器，集成了GPT-4等大模型，可以进行代码生成、编辑、调试和解释。',
    imageUrl: '/images/models/cursor.png',
    websiteUrl: 'https://cursor.sh',
    isOpenSource: false,
    lastUpdated: '2024-05-01'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    company: 'GitHub/Microsoft',
    category: 'AI编程',
    capabilities: ['代码生成'],
    releaseDate: '2021-06-29',
    description: 'GitHub Copilot是由GitHub与OpenAI合作开发的AI编程助手，可以在各种编辑器中提供代码补全和生成功能。',
    imageUrl: '/images/models/github-copilot.png',
    websiteUrl: 'https://github.com/features/copilot',
    apiDocUrl: 'https://docs.github.com/en/copilot',
    isOpenSource: false,
    lastUpdated: '2024-04-18'
  },
  
  // AI视频
  {
    id: 'runway-gen2',
    name: 'Runway Gen-2',
    company: 'Runway',
    category: 'AI视频',
    capabilities: ['视频生成', '图像生成'],
    releaseDate: '2023-03-20',
    description: 'Runway Gen-2是一款先进的AI视频生成模型，可以从文本描述或图像生成高质量的视频内容。',
    imageUrl: '/images/models/runway-gen2.png',
    websiteUrl: 'https://research.runwayml.com/gen2',
    apiDocUrl: 'https://docs.runwayml.com/docs/api-reference',
    isOpenSource: false,
    lastUpdated: '2023-09-12'
  },
  {
    id: 'sora',
    name: 'Sora',
    company: 'OpenAI',
    category: 'AI视频',
    capabilities: ['视频生成'],
    releaseDate: '2024-02-15',
    description: 'Sora是OpenAI的文本生成视频模型，可以生成长达一分钟的高质量、物理合理的视频，遵循用户的文本提示。',
    imageUrl: '/images/models/sora.png',
    websiteUrl: 'https://openai.com/sora',
    isOpenSource: false,
    lastUpdated: '2024-02-15'
  },
  
  // AI音乐
  {
    id: 'suno',
    name: 'Suno',
    company: 'Suno',
    category: 'AI音乐',
    capabilities: ['音乐生成'],
    releaseDate: '2023-05-15',
    description: 'Suno是一个AI音乐生成平台，允许用户通过文本描述创作原创音乐作品，包括歌词和人声。',
    imageUrl: '/images/models/suno.png',
    websiteUrl: 'https://suno.ai',
    isOpenSource: false,
    lastUpdated: '2024-03-14'
  },
  
  // Agent
  {
    id: 'manus',
    name: 'Manus',
    company: '腾讯',
    category: 'Agent',
    capabilities: ['Agent能力', '推理能力', '多模态理解'],
    releaseDate: '2024-05-16',
    description: 'Manus是腾讯推出的通用Agent大模型，具备强大的工具使用能力，可以处理复杂任务和多轮对话。',
    imageUrl: '/images/models/manus.png',
    websiteUrl: 'https://cloud.tencent.com/product/hunyuan',
    isOpenSource: false,
    lastUpdated: '2024-05-16'
  }
]; 