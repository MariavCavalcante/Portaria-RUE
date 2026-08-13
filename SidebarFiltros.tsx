'use client';

import { useEffect, useRef } from 'react';
import { OPCOES_ASSUNTO, OPCOES_COMPONENTE, OPCOES_RESPONSAVEL, OPCOES_UNIDADE } from '@/data/filtros';
import type { FiltrosAtivos } from '@/utils/filter';
import { existeFiltroAtivo } from '@/utils/filter';

interface SidebarFiltrosProps {
  termoBusca: string;
  onTermoBuscaChange: (valor: string) => void;
  filtros: FiltrosAtivos;
  onFiltroChange: <K extends keyof FiltrosAtivos>(campo: K, valor: FiltrosAtivos[K]) => void;
  onLimparFiltros: () => void;
  aberta: boolean;
  onFechar: () => void;
}

export default function SidebarFiltros({
  termoBusca,
  onTermoBuscaChange,
  filtros,
  onFiltroChange,
  onLimparFiltros,
  aberta,
  onFechar,
}: SidebarFiltrosProps) {
  const gavetaRef = useRef<HTMLDivElement>(null);
  const primeiroFocoRef = useRef<HTMLInputElement>(null);

  // Controle de foco na gaveta móvel e fechamento pela tecla Esc.
  useEffect(() => {
    if (!aberta) return;

    primeiroFocoRef.current?.focus();

    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === 'Escape') {
        onFechar();
      }
    }

    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, [aberta, onFechar]);

  const filtroAtivo = existeFiltroAtivo(filtros);

  const conteudo = (
    <div className="flex h-full flex-col gap-5 overflow-y-auto p-4">
      <div className="flex items-center justify-between md:hidden">
        <h2 className="text-base font-semibold text-ses-azul">Consultar conteúdo</h2>
        <button
          type="button"
          onClick={onFechar}
          className="alvo-toque flex items-center justify-center rounded-md border border-ses-neutro-300 px-2 text-ses-neutro-700"
          aria-label="Fechar consulta de conteúdo"
        >
          ✕
        </button>
      </div>

      <div>
        <label htmlFor="campo-busca" className="mb-1 block text-sm font-medium text-ses-neutro-800">
          Buscar na Portaria
        </label>
        <input
          ref={primeiroFocoRef}
          id="campo-busca"
          type="search"
          value={termoBusca}
          onChange={(evento) => onTermoBuscaChange(evento.target.value)}
          placeholder="Digite uma palavra ou assunto"
          maxLength={200}
          className="w-full rounded-md border border-ses-neutro-300 px-3 py-2 text-sm shadow-sm focus:border-ses-azul"
          aria-describedby="ajuda-busca"
        />
        <p id="ajuda-busca" className="mt-1 text-xs text-ses-neutro-600">
          A busca localiza palavras no conteúdo já apresentado no painel.
        </p>
      </div>

      <FiltroSelect
        id="filtro-componente"
        rotulo="Componente"
        valor={filtros.componente}
        opcoes={OPCOES_COMPONENTE}
        onChange={(v) => onFiltroChange('componente', v)}
      />
      <FiltroSelect
        id="filtro-assunto"
        rotulo="Assunto"
        valor={filtros.assunto}
        opcoes={OPCOES_ASSUNTO}
        onChange={(v) => onFiltroChange('assunto', v)}
      />
      <FiltroSelect
        id="filtro-unidade"
        rotulo="Unidade ou serviço"
        valor={filtros.unidade}
        opcoes={OPCOES_UNIDADE}
        onChange={(v) => onFiltroChange('unidade', v)}
      />
      <FiltroSelect
        id="filtro-responsavel"
        rotulo="Responsável"
        valor={filtros.responsavel}
        opcoes={OPCOES_RESPONSAVEL}
        onChange={(v) => onFiltroChange('responsavel', v)}
      />

      {filtroAtivo && (
        <p className="rounded-md bg-ses-amarelo/20 px-3 py-2 text-xs text-ses-neutro-800" role="status">
          Há filtros ativos aplicados à listagem.
        </p>
      )}

      <button
        type="button"
        onClick={onLimparFiltros}
        disabled={!filtroAtivo && !termoBusca}
        className="alvo-toque rounded-md border border-ses-azul px-3 py-2 text-sm font-medium text-ses-azul transition hover:bg-ses-azul hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-ses-azul"
      >
        Limpar filtros
      </button>
    </div>
  );

  return (
    <>
      {/* Barra lateral fixa em telas amplas */}
      <nav
        aria-label="Busca e filtros de conteúdo"
        className="sticky top-[72px] hidden h-[calc(100vh-72px)] w-72 shrink-0 border-r border-ses-neutro-200 bg-white md:block"
      >
        {conteudo}
      </nav>

      {/* Gaveta acessível para tablets e celulares */}
      {aberta && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Consultar conteúdo">
          <div className="absolute inset-0 bg-black/40" onClick={onFechar} aria-hidden="true" />
          <div
            ref={gavetaRef}
            className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-white shadow-xl"
          >
            {conteudo}
          </div>
        </div>
      )}
    </>
  );
}

interface FiltroSelectProps<T extends string> {
  id: string;
  rotulo: string;
  valor: T | 'Todos';
  opcoes: T[];
  onChange: (valor: T | 'Todos') => void;
}

function FiltroSelect<T extends string>({ id, rotulo, valor, opcoes, onChange }: FiltroSelectProps<T>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-ses-neutro-800">
        {rotulo}
      </label>
      <select
        id={id}
        value={valor}
        onChange={(evento) => onChange(evento.target.value as T | 'Todos')}
        className="w-full rounded-md border border-ses-neutro-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-ses-azul"
      >
        <option value="Todos">Todos</option>
        {opcoes.map((opcao) => (
          <option key={opcao} value={opcao}>
            {opcao}
          </option>
        ))}
      </select>
    </div>
  );
}
