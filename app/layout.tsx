import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Castro | Recuperação de Fachadas e Pinturas',
  description: 'Recuperação de fachadas, pintura residencial e comercial com acabamento profissional e cuidado em cada detalhe.',
  openGraph: { title: 'Castro | Recuperação de Fachadas e Pinturas', description: 'Seu imóvel renovado, do jeito certo.', images: ['/og.png'], locale: 'pt_BR', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Castro | Recuperação de Fachadas e Pinturas', description: 'Seu imóvel renovado, do jeito certo.', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
