import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: '🏗️ 自拍亭项目',
      description: '手搓便携折叠自拍亭，婚礼拍照神器',
      tags: ['DIY', '硬件', '婚礼'],
      link: '/projects/selfie-booth',
    },
    {
      title: '📚 知识管理系统',
      description: '基于飞书 + OpenClaw 的自动化知识管理',
      tags: ['效率', '自动化', '飞书'],
      link: '/projects/knowledge-system',
    },
    {
      title: '🔐 网络安全加固',
      description: '服务器 SSH 加固、防火墙配置、自动防护',
      tags: ['安全', '运维', 'Linux'],
      link: '/projects/security-hardening',
    },
    {
      title: '🤖 毛球 AI 助手',
      description: 'OpenClaw 自动化助手配置与优化',
      tags: ['AI', '自动化', 'OpenClaw'],
      link: '/projects/maoqiu-agent',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          项目展示
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          这里记录我动手创造的各种项目 🎾
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                查看详情 →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
