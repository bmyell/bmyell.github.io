# 大磊子的博客

> Hi，终于等到你 👋

基于 Next.js 14 + Tailwind CSS 打造的现代化个人博客。

## 🎨 设计灵感

参考 [Monday Lab 博客](https://mondaylab.github.io/mondaylab-blog/) 的极简风格，打造个性化的技术博客。

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **内容**: MDX
- **部署**: Vercel (免费)
- **语言**: TypeScript

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 构建生产版本

```bash
npm run build
npm start
```

## 📦 部署到 Vercel

### 方式 1：Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel

# 生产环境部署
vercel --prod
```

### 方式 2：GitHub + Vercel

1. 推送到 GitHub：
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/bmyell/bmyell-blog.git
git push -u origin main
```

2. 在 Vercel 导入项目：
   - 访问 https://vercel.com/new
   - 选择 GitHub 仓库
   - 点击 Deploy

3. 绑定自定义域名（可选）：
   - 在 Vercel 设置中添加 `bmyell.io`
   - 配置 DNS 解析

## 📁 项目结构

```
bmyell-blog/
├── src/
│   └── app/
│       ├── about/       # 关于我页面
│       ├── blog/        # 博客列表（待添加）
│       ├── globals.css  # 全局样式
│       ├── layout.tsx   # 根布局
│       └── page.tsx     # 首页
├── public/              # 静态资源
└── package.json
```

## 🎯 功能规划

- [x] 首页（Hero Section + 个人介绍）
- [x] 关于我页面
- [ ] 博客列表页
- [ ] 博客文章页
- [ ] 项目展示页
- [ ] 标签系统
- [ ] 搜索功能
- [ ] 评论系统

## 📝 添加博客文章

在 `src/app/blog/` 目录下创建 MDX 文件：

```markdown
---
title: '文章标题'
date: '2026-03-22'
tags: ['技术', 'Next.js']
---

文章内容...
```

## 🎨 自定义配置

### 修改个人信息

编辑 `src/app/page.tsx` 和 `src/app/about/page.mdx`

### 修改配色

编辑 `tailwind.config.ts` 和 `src/app/globals.css`

## 📊 性能优化

- ✅ 静态生成 (SSG)
- ✅ 图片优化 (Next.js Image)
- ✅ 字体优化
- ✅ CSS 压缩

## 📄 License

MIT

---

**Built with ❤️ by 大磊子**

[GitHub](https://github.com/bmyell) · [关于我](/about)
