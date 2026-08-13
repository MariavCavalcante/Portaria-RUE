import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { NOME_PAINEL, SUBTITULO_PAINEL } from '@/data/portaria792';

export const metadata: Metadata = {
  title: `${NOME_PAINEL} | SES-GO`,
  description: `${SUBTITULO_PAINEL}. Conteúdo baseado na Portaria SES/GO nº 792, de 12 de abril de 2024. Painel institucional, estático e exclusivamente informativo.`,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
