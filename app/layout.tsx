import type { Metadata, Viewport } from 'next';
import '@fontsource/instrument-serif/latin.css';
import '@fontsource/instrument-serif/latin-italic.css';
import '@fontsource/instrument-sans/latin-400.css';
import '@fontsource/instrument-sans/latin-500.css';
import '@fontsource/instrument-sans/latin-600.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Starrylight — Independent design practice',
  description: 'The personal site of Starrylight: selected work, experiments, and notes.',
};

export const viewport: Viewport = {
  themeColor: '#0c0b0a',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
