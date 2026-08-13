'use client';

import { INFO_CARDS } from '@/data/portaria792';

/**
 * Cartões/balões de informações gerais (seção 8 do prompt).
 * Permanecem visíveis independentemente da busca e dos filtros.
 */
export default function InfoCards() {
  return (
    <section aria-labelledby="info-gerais-titulo" className="mb-6">
      <h2 id="info-gerais-titulo" className="sr-only">
        Informações gerais da Política Estadual da RUE
      </h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
        {INFO_CARDS.map((card) => (
          <li key={card.id}>
            <a
              href={`#${card.ancora}`}
              className="group flex h-full flex-col rounded-card border border-ses-neutro-200 bg-white p-4 shadow-sm transition hover:border-ses-verde hover:shadow-md"
              title={card.tooltip}
            >
              <span className="text-xs font-medium uppercase tracking-wide text-ses-neutro-600">
                {card.rotulo}
              </span>
              <span className="mt-1 text-xl font-bold text-ses-azul group-hover:text-ses-verde-dark">
                {card.valor}
              </span>
              <span className="mt-2 text-[11px] text-ses-neutro-600">Fonte: {card.fonte}</span>
              <span className="sr-only"> — {card.tooltip}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
