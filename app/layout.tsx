import type { Metadata, Viewport } from 'next';
import '@fontsource/space-grotesk/latin-500.css';
import '@fontsource/space-grotesk/latin-600.css';
import '@fontsource/space-grotesk/latin-700.css';
import '@fontsource/outfit/latin-400.css';
import '@fontsource/outfit/latin-500.css';
import '@fontsource/outfit/latin-600.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Starrylight — 星光',
  description:
    'Thoughtful interfaces, playful tools, and pixels with a little light. / 做用心的界面、有趣的小工具，和带一点光的像素。',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#0c0b0a',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var s=localStorage.getItem("starrylight-lang");var l=s==="en"||s==="zh"?s:(navigator.language||"").toLowerCase().indexOf("zh")===0?"zh":"en";document.documentElement.lang=l==="zh"?"zh-CN":"en";document.documentElement.setAttribute("data-lang",l);}catch(e){}})();',
          }}
        />
        {children}
      </body>
    </html>
  );
}
