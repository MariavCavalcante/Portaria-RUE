'use client';

import { useMemo, useState } from 'react';
import { SECOES } from '@/data/portaria792';
import Header from './Header';
import Footer from './Footer';
import InfoCards from './InfoCards';
import SidebarFiltros from './SidebarFiltros';
import SecaoCard from './SecaoCard';
import { correspondeBusca, correspondeFiltros, FILTROS_INICIAIS, type FiltrosAtivos } from '@/utils/filter';

export default function PainelClient() {
  const [termoBusca, setTermoBusca] = useState('');
  const [filtros, setFiltros] = useState<FiltrosAtivos>(FILTROS_INICIAIS);
  const [gavetaAberta, setGavetaAberta] = useState(false);

  const secoesOrdenadas = useMemo(() => [...SECOES].sort((a, b) => a.ordem - b.ordem), []);

  const secoesFiltradas = useMemo(
    () =>
      secoesOrdenadas.filter(
        (secao) => correspondeBusca(secao, termoBusca) && correspondeFiltros(secao, filtros),
      ),
    [secoesOrdenadas, termoBusca, filtros],
  );

  function alterarFiltro<K extends keyof FiltrosAtivos>(campo: K, valor: FiltrosAtivos[K]) {
    setFiltros((atual) => ({ ...atual, [campo]: valor }));
  }

  function limparFiltros() {
    setTermoBusca('');
    setFiltros(FILTROS_INICIAIS);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header onAbrirMenuMovel={() => setGavetaAberta(true)} />

      <div className="mx-auto flex w-full max-w-7xl flex-1 md:items-start">
        <SidebarFiltros
          termoBusca={termoBusca}
          onTermoBuscaChange={setTermoBusca}
          filtros={filtros}
          onFiltroChange={alterarFiltro}
          onLimparFiltros={limparFiltros}
          aberta={gavetaAberta}
          onFechar={() => setGavetaAberta(false)}
        />

        <main id="conteudo-principal" className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <InfoCards />

          <SumarioNavegacao />

          <div aria-live="polite" className="sr-only">
            {secoesFiltradas.length} seções encontradas.
          </div>

          {secoesFiltradas.length === 0 ? (
            <p
              role="status"
              className="rounded-card border border-ses-neutro-200 bg-white px-4 py-6 text-center text-sm text-ses-neutro-700"
            >
              Nenhuma informação correspondente foi localizada na Portaria.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {secoesFiltradas.map((secao) => (
                <SecaoCard key={secao.id} secao={secao} />
              ))}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

function SumarioNavegacao() {
  const secoesOrdenadas = useMemo(() => [...SECOES].sort((a, b) => a.ordem - b.ordem), []);

  return (
    <nav aria-label="Sumário do painel" className="mb-6 rounded-card border border-ses-neutro-200 bg-white p-4">
      <h2 className="mb-2 text-sm font-semibold text-ses-azul-dark">Sumário</h2>
      <ol className="grid grid-cols-1 gap-x-4 gap-y-1 text-sm sm:grid-cols-2 lg:grid-cols-3">
        {secoesOrdenadas.map((secao) => (
          <li key={secao.id}>
            <a href={`#${secao.id}`} className="text-ses-azul underline-offset-2 hover:underline">
              {secao.ordem}. {secao.titulo}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
