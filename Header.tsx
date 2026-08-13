'use client';

import Image from 'next/image';
import { NOME_PAINEL, REFERENCIA_NORMATIVA, SUBTITULO_PAINEL } from '@/data/portaria792';

interface HeaderProps {
  onAbrirMenuMovel: () => void;
}

export default function Header({ onAbrirMenuMovel }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-ses-azul text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brasão do Estado de Goiás — seção 6 do prompt.
            Caso o arquivo oficial não esteja disponível no repositório,
            exibe-se o espaço reservado, sem redesenhar ou substituir por imagem não oficial. */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
          <BrasaoGoias />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-semibold leading-tight sm:text-lg md:text-xl">
            {NOME_PAINEL}
          </p>
          <p className="truncate text-xs text-ses-azul-light/90 sm:text-sm">{SUBTITULO_PAINEL}</p>
          <p className="mt-0.5 text-[11px] text-white/80 sm:text-xs">{REFERENCIA_NORMATIVA}</p>
        </div>

        <button
          type="button"
          onClick={onAbrirMenuMovel}
          className="alvo-toque flex items-center justify-center rounded-md border border-white/30 bg-ses-azul-dark px-3 py-2 text-sm font-medium md:hidden"
          aria-haspopup="dialog"
        >
          <span aria-hidden="true" className="mr-2">
            ☰
          </span>
          Consultar conteúdo
        </button>
      </div>
    </header>
  );
}

/**
 * Componente do brasão oficial.
 * Arquivo esperado em /public/images/brasao-goias.png (fundo transparente).
 * Caso o arquivo oficial ainda não tenha sido validado e incluído no repositório,
 * exibe-se apenas o espaço reservado textual, conforme instrução do prompt.
 */
function BrasaoGoias() {
  const ARQUIVO_DISPONIVEL = false; // alterar para true após validar e incluir o arquivo oficial

  if (!ARQUIVO_DISPONIVEL) {
    return (
      <div
        role="img"
        aria-label="Brasão do Estado de Goiás"
        className="flex h-full w-full items-center justify-center rounded border border-dashed border-white/50 bg-white/10 p-1 text-center text-[7px] leading-tight text-white/80"
      >
        INSERIR ARQUIVO OFICIAL DO BRASÃO DO ESTADO DE GOIÁS
      </div>
    );
  }

  return (
    <Image
      src="/images/brasao-goias.png"
      alt="Brasão do Estado de Goiás"
      width={56}
      height={56}
      className="h-full w-full object-contain"
      priority
    />
  );
}
