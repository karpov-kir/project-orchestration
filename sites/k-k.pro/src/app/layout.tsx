import 'react-notion-x/src/styles.css';
import './globals.css';
import './notionThemeOverrides.css';

import type { Metadata } from 'next';

import { config } from '@/config';

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={config.lang}>
      <body>{children}</body>
    </html>
  );
}
