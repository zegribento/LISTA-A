import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LISTA A · AEUGS',
  description:
    'A tua voz merece uma representação presente. Candidatura à Associação de Estudantes da Universidade Gregório Semedo (AEUGS).',
  openGraph: {
    title: 'LISTA A · AEUGS',
    description:
      'A tua voz merece uma representação presente. Candidatura à Associação de Estudantes da Universidade Gregório Semedo (AEUGS).',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LISTA A · AEUGS',
    description:
      'A tua voz merece uma representação presente. Candidatura à Associação de Estudantes da Universidade Gregório Semedo (AEUGS).',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" className={`${manrope.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className={`${manrope.className} bg-white text-[#102B60] antialiased selection:bg-[#EF791B]/15 selection:text-[#102B60]`}
      >
        {children}
      </body>
    </html>
  );
}
