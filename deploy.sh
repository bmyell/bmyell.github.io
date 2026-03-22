#!/bin/bash
# 快速部署脚本

echo "🚀 开始部署大磊子的博客..."

cd /root/.openclaw/workspace/bmyell-blog

# 1. 推送到 GitHub
echo "📦 推送到 GitHub..."
git remote set-url origin https://github.com/bmyell/bmyell-blog.git
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    echo ""
    echo "🌐 接下来："
    echo "1. 访问 https://vercel.com/new"
    echo "2. 导入 GitHub 仓库：bmyell/bmyell-blog"
    echo "3. 点击 Deploy"
    echo ""
    echo "🎉 部署完成后你的博客地址："
    echo "   https://bmyell-blog.vercel.app"
else
    echo "❌ 推送失败，请手动执行："
    echo ""
    echo "cd /root/.openclaw/workspace/bmyell-blog"
    echo "git remote set-url origin https://github.com/bmyell/bmyell-blog.git"
    echo "git push -u origin main"
fi
