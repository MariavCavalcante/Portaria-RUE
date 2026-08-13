import type { EtapaFluxo } from '@/types';

interface FluxoDiagramaProps {
  titulo: string;
  etapas: EtapaFluxo[];
}

/**
 * Fluxograma institucional simples (organização visual semelhante a diagramas
 * de processo). Implementado como lista ordenada semântica para garantir
 * alternativa textual nativa para leitores de tela (WCAG 2.2 AA).
 */
export default function FluxoDiagrama({ titulo, etapas }: FluxoDiagramaProps) {
  return (
    <div className="my-3">
      <p className="mb-2 text-sm font-semibold text-ses-neutro-800">{titulo}</p>
      <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-stretch">
        {etapas.map((etapa, indice) => (
          <li key={etapa.ordem} className="flex items-stretch gap-2">
            <div className="flex min-w-[180px] flex-1 flex-col justify-center rounded-card border-2 border-ses-azul bg-ses-azul-light px-3 py-2">
              <span className="text-xs font-bold text-ses-azul-dark">Etapa {etapa.ordem}</span>
              <span className="text-sm text-ses-neutro-800">{etapa.titulo}</span>
              {etapa.descricao && (
                <span className="mt-1 text-xs text-ses-neutro-600">{etapa.descricao}</span>
              )}
            </div>
            {indice < etapas.length - 1 && (
              <span
                aria-hidden="true"
                className="hidden select-none items-center text-xl font-bold text-ses-verde md:flex"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
