import type { Metadata, Viewport } from 'next';
import '@fontsource/instrument-serif/latin.css';
import '@fontsource/instrument-serif/latin-italic.css';
import '@fontsource/instrument-sans/latin-400.css';
import '@fontsource/instrument-sans/latin-500.css';
import '@fontsource/instrument-sans/latin-600.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Starrylight — 星光',
  description: 'UI 设计师、像素画爱好者。Figma 插件与前端小项目。',
};

export const viewport: Viewport = {
  themeColor: '#0c0b0a',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
