# 部署指南

## 🚀 部署到 Vercel

### 准备工作

1. 注册 Vercel 账号：https://vercel.com/signup
2. 安装 Vercel CLI（可选）：`npm install -g vercel`

### 方式 1：一键部署（推荐）

```bash
# 1. 在项目根目录执行
vercel

# 2. 按提示操作
- Set up and deploy? Y
- Which scope? (选择你的账号)
- Link to existing project? N
- Project name? bmyell-blog
- Directory? ./
- Override settings? N

# 3. 部署完成后会获得一个域名
# 例如：bmyell-blog.vercel.app
```

### 方式 2：GitHub 自动部署

```bash
# 1. 推送到 GitHub
git init
git add .
git commit -m "Initial commit - 大磊子的博客"
git branch -M main
git remote add origin https://github.com/bmyell/bmyell-blog.git
git push -u origin main

# 2. 在 Vercel 导入
# 访问 https://vercel.com/new
# 选择 GitHub 仓库 bmyell/bmyell-blog
# 点击 Deploy

# 3. 自动部署
# 之后每次 push 到 main 分支都会自动部署
```

## 🌐 绑定自定义域名

### 购买域名

推荐平台：
- 阿里云（aliyun.com）
- 腾讯云（cloud.tencent.com）
- Godaddy

### 配置 DNS

在域名 DNS 设置中添加：

```
类型    名称              值
A       @               76.76.21.21
CNAME   www             cname.vercel-dns.com
```

### 在 Vercel 绑定

1. 访问 Vercel Dashboard
2. 选择项目 → Settings → Domains
3. 添加 `bmyell.io` 和 `www.bmyell.io`
4. 等待 DNS 生效（几分钟到几小时）

## 🔄 持续部署

每次 push 到 main 分支都会自动部署：

```bash
git add .
git commit -m "更新博客内容"
git push
```

Vercel 会自动构建并部署，通常 1-2 分钟完成。

## 📊 查看部署日志

- Vercel Dashboard → 项目 → Deployments
- 点击任意部署查看构建日志

## 🎯 环境变量（如需要）

在 Vercel 项目设置中添加：
- Settings → Environment Variables
- 添加需要的环境变量

---

**部署完成后记得告诉毛球！** 🎾
