import { Lato, Oswald } from 'next/font/google';

export const font_title = Oswald({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-title',
  display: 'swap',
});

export const font_body = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
