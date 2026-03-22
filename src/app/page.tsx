import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* 顶部时间 */}
      <div className="top-time">
        2026 年 3 月 22 日
      </div>

      {/* 主标题 */}
      <h1>大磊子的博客</h1>
      <p className="subtitle">Hi，终于等到你 👋</p>

      {/* 个人介绍 - Monday Lab 风格 */}
      <div className="section">
        <div className="emoji-title">
          <span className="emoji">🤹‍♂️</span>
          大磊子
        </div>
        <p className="gray">Stay foolish, Stay hungry.</p>
        <div className="tags">
          <span className="tag">/斜杠青年</span>
          <span className="tag">/CS 学生</span>
          <span className="tag">/工具控</span>
          <span className="tag">/摄影爱好者</span>
        </div>
      </div>

      {/* Web 前端 */}
      <div className="section">
        <div className="emoji-title">
          <span className="emoji">👨‍💻</span>
          Web 前端
        </div>
        <p>喜欢折腾各种技术工具，从前端到后端，从代码到硬件。</p>
        <p className="gray">技术栈：React, Next.js, Node.js, Python</p>
      </div>

      {/* 喜欢美学 */}
      <div className="section">
        <div className="emoji-title">
          <span className="emoji">🎨</span>
          喜欢美学
        </div>
        <p>热爱一切美学，喜欢用各种设计工具造图。</p>
        <p className="gray">爱好：摄影（索尼 A7M3）、书法、DIY</p>
      </div>

      {/* 斜杆青年 */}
      <div className="section">
        <div className="emoji-title">
          <span className="emoji">🧩</span>
          斜杆青年
        </div>
        <p>是个平平无奇但是又很热爱学习的斜杆青年。</p>
        <p className="gray">网文作者 | 番茄小说《我的丹田住着九个老怪物》</p>
      </div>

      {/* 导航 */}
      <div className="section">
        <h1>导航</h1>
        <div className="article-list">
          <Link href="/about">关于我 →</Link>
          <Link href="/projects">项目展示 →</Link>
          <Link href="/blog">博客文章 →</Link>
        </div>
      </div>

      {/* 页脚 */}
      <footer>
        <p>
          © 2026 大磊子 · 
          <a href="https://github.com/bmyell" target="_blank" style={{ marginLeft: '10px' }}>
            GitHub
          </a>
          <a href="mailto:1812630796@qq.com" style={{ marginLeft: '10px' }}>
            邮箱
          </a>
        </p>
      </footer>
    </main>
  );
}
