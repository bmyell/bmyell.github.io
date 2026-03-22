import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Monday Lab 风格 */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          {/* 主标题 */}
          <h1 className="text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            大磊子的博客
          </h1>
          
          {/* 副标题 */}
          <p className="text-3xl text-gray-600 mb-16 font-light">
            Hi，终于等到你 👋
          </p>

          {/* 个人介绍卡片 - Monday Lab 风格 */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🤹‍♂️</span>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  周一同学
                </h2>
                <p className="text-gray-600">
                  Stay foolish, Stay hungry.
                </p>
              </div>
            </div>
            
            {/* 标签 */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                /斜杠青年
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                CS 学生
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                工具控
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                摄影爱好者
              </span>
            </div>

            {/* 详细介绍 */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">👨‍💻</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Web 前端
                </h3>
                <p className="text-sm text-gray-600">
                  大厂码农，国内某互联网厂搬砖。
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  喜欢美学
                </h3>
                <p className="text-sm text-gray-600">
                  热爱一切美学，喜欢用各种设计工具造图。
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">🧩</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  斜杆青年
                </h3>
                <p className="text-sm text-gray-600">
                  是个平平无奇但是又很热爱学习的斜杆青年。
                </p>
              </div>
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="flex gap-4">
            <Link
              href="/about"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              关于我 →
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              项目展示
            </Link>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 大磊子
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a 
              href="https://github.com/bmyell" 
              className="hover:text-gray-900 transition"
              target="_blank"
            >
              GitHub
            </a>
            <a 
              href="mailto:1812630796@qq.com" 
              className="hover:text-gray-900 transition"
            >
              邮箱
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
