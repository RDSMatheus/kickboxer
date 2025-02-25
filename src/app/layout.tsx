import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import { font_body, font_title } from '@/functions/fonts';
import { Footer } from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Kickboxer',
  description: 'App para treinos de kickboxing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font_body.variable} ${font_title.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
