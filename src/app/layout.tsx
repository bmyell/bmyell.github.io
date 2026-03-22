import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '大磊子的博客 | Hi，终于等到你',
  description: 'Hi，终于等到你 - 大磊子的个人博客，分享技术、生活与思考',
  keywords: ['大磊子', '博客', '技术', '摄影', 'DIY', '云南'],
  authors: [{ name: '大磊子', url: 'https://github.com/bmyell' }],
  openGraph: {
    title: '大磊子的博客 | Hi，终于等到你',
    description: 'Hi，终于等到你 - 大磊子的个人博客',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
