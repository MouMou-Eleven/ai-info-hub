# AI信息中心

一个专注于提供AI领域最新资讯和模型信息的网站，为AI初学者提供全面、直观的信息梳理。

## 项目介绍

该项目旨在帮助AI初学者快速了解AI领域的最新发展，包括：

- AI模型库：收录各类AI模型，包括LLM、图像生成、音频处理等
- AI资讯中心：提供AI领域的最新新闻和突破性研究
- AI发展时间线：展示AI技术的发展历程和重要里程碑

## 使用方法

本项目有两个版本：

1. **静态HTML版本**：直接打开`index.html`文件即可使用
2. **完整版**：使用`start.bat`启动，提供更丰富的功能

## 部署到GitHub Pages

本项目已配置为可直接部署到GitHub Pages，访问地址：https://[您的用户名].github.io/ai-info-hub/

## 数据更新

项目数据定期更新，确保提供最新的AI信息。

## 贡献指南

欢迎贡献新的AI模型信息或行业新闻，请通过Pull Request提交更新。

## 项目特点

- **最新AI资讯**: 实时更新AI领域的最新动态、技术突破和行业趋势
- **全面AI模型库**: 收录国内外各类AI模型，包括详细的分类和能力标注
- **用户友好界面**: 响应式设计，适配各种设备浏览
- **灵活过滤系统**: 可根据类别、能力、关键词等多维度筛选AI模型
- **社交分享功能**: 支持分享内容到微信、微博等社交平台

## 技术栈

- **前端框架**: Next.js (React)
- **样式解决方案**: Tailwind CSS
- **状态管理**: React Hooks
- **动画效果**: Framer Motion
- **图标库**: React Icons
- **社交分享**: react-share

## 开始使用

### 前提条件

- Node.js 14.0.0 或更高版本
- npm 或 yarn

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/yourusername/ai-info-hub.git
cd ai-info-hub
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器，访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
ai-info-hub/
├── src/
│   ├── app/                    # 应用页面
│   │   ├── models/             # 模型库页面
│   │   ├── news/               # 资讯页面
│   │   ├── layout.tsx          # 根布局
│   │   └── page.tsx            # 首页
│   ├── components/             # 共享组件
│   │   ├── Header.tsx          # 页头导航
│   │   ├── Footer.tsx          # 页脚
│   │   ├── Layout.tsx          # 布局组件
│   │   ├── ModelCard.tsx       # 模型卡片
│   │   ├── ModelFilter.tsx     # 模型过滤器
│   │   └── NewsCard.tsx        # 新闻卡片
│   ├── data/                   # 数据文件
│   │   ├── models.ts           # 模型数据
│   │   └── news.ts             # 新闻数据
│   ├── styles/                 # 样式文件
│   │   └── globals.css         # 全局样式
│   └── types/                  # 类型定义
│       └── index.ts            # 类型声明
├── public/                     # 静态资源
│   └── images/                 # 图片资源
├── tailwind.config.js          # Tailwind配置
├── tsconfig.json               # TypeScript配置
├── package.json                # 项目依赖
└── README.md                   # 项目说明
```

## 功能列表

- 首页展示最新AI模型和资讯
- AI模型库页面，支持多维度筛选
- AI资讯页面，支持标签和关键词搜索
- 响应式设计，适配移动设备
- 社交分享功能
- 深色/浅色模式自适应

## 贡献指南

1. Fork 项目
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的改动 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 许可证

[MIT](LICENSE) © [Your Name]

## 联系方式

- 邮箱: contact@aiinfohub.com
- 网站: https://aiinfohub.com

---

欢迎使用和贡献AI信息中心，一起探索AI的无限可能！ 