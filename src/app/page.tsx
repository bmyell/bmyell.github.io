import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* 标题 */}
          <h1 className="text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            大磊子的博客
          </h1>
          <p className="text-2xl text-gray-600 mb-12 animate-fade-in-delay">
            Hi，终于等到你 👋
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-3 mb-16">
            <span className="px-4 py-2 bg-white rounded-full shadow-md text-indigo-600 font-medium">
              🤹‍♂️ 斜杠青年
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md text-indigo-600 font-medium">
              💻 CS 学生
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md text-indigo-600 font-medium">
              🛠️ 工具控
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md text-indigo-600 font-medium">
              📸 摄影爱好者
            </span>
          </div>

          {/* 简介卡片 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              是个平平无奇但又热爱学习的斜杠青年。现居云南，体制内工作，热爱技术，喜欢折腾各种工具。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">👨‍💻 技术</h3>
                <p className="text-sm text-blue-600">React, Next.js, Node.js, Python</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">📸 爱好</h3>
                <p className="text-sm text-green-600">摄影、书法、网文创作</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">🏗️ DIY</h3>
                <p className="text-sm text-purple-600">手搓自拍亭、各种工具</p>
              </div>
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="flex gap-4">
            <Link
              href="/about"
              className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition shadow-lg"
            >
              关于我 →
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-50 transition shadow-lg border-2 border-indigo-600"
            >
              博客文章
            </Link>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>© 2026 大磊子 · Built with Next.js & Tailwind CSS</p>
        <p className="text-sm mt-2">
          <a href="https://github.com/bmyell" className="text-indigo-600 hover:underline" target="_blank">
            GitHub
          </a>
          {' '}·{' '}
          <a href="mailto:1812630796@qq.com" className="text-indigo-600 hover:underline">
            邮箱
          </a>
        </p>
      </footer>
    </main>
  );
}
