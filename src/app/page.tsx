import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* 顶部时间 */}
      <div className="top-time gray">
        2026 年 3 月 22 日
      </div>

      {/* 主标题 */}
      <div className="intro-section">
        <h1>大磊子的博客</h1>
        <p className="subtitle">Hi，终于等到你 👋</p>
      </div>

      {/* 个人介绍 */}
      <div className="card">
        <h3><span className="emoji">🤹‍♂️</span>关于我</h3>
        <p className="gray" style={{ marginTop: '10px' }}>
          Stay foolish, Stay hungry.
        </p>
        <div className="tags">
          <span className="tag">/斜杠青年</span>
          <span className="tag">CS 学生</span>
          <span className="tag">工具控</span>
          <span className="tag">摄影爱好者</span>
        </div>
      </div>

      {/* 技术方向 */}
      <div className="card">
        <h3><span className="emoji">👨‍💻</span>Web 前端</h3>
        <p>喜欢折腾各种技术工具，从前端到后端，从代码到硬件。</p>
        <p style={{ marginTop: '10px', color: '#666' }}>
          技术栈：React, Next.js, Node.js, Python
        </p>
      </div>

      {/* 兴趣爱好 */}
      <div className="card">
        <h3><span className="emoji">🎨</span>喜欢美学</h3>
        <p>热爱一切美学，喜欢用各种设计工具造图。</p>
        <p style={{ marginTop: '10px', color: '#666' }}>
          爱好：摄影（索尼 A7M3）、书法、DIY
        </p>
      </div>

      {/* 斜杠青年 */}
      <div className="card">
        <h3><span className="emoji">🧩</span>斜杆青年</h3>
        <p>是个平平无奇但是又很热爱学习的斜杆青年。</p>
        <p style={{ marginTop: '10px', color: '#666' }}>
          网文作者 | 番茄小说《我的丹田住着九个老怪物》
        </p>
      </div>

      {/* 导航链接 */}
      <div style={{ margin: '30px 0' }}>
        <h3>导航</h3>
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
          <a href="https://github.com/bmyell" target="_blank" style={{ marginLeft: '8px' }}>
            GitHub
          </a>
          <a href="mailto:1812630796@qq.com" style={{ marginLeft: '8px' }}>
            邮箱
          </a>
        </p>
      </footer>
    </main>
  );
}
