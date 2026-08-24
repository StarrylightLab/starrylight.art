import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Starrylight — Independent design practice',
  description: 'The personal site of Starrylight: selected work, experiments, and notes.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
