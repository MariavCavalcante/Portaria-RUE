import type { SecaoConteudo } from '@/types';
import FluxoDiagrama from './FluxoDiagrama';
import TabelaConteudo from './TabelaConteudo';

interface SecaoCardProps {
  secao: SecaoConteudo;
}

/**
 * Renderiza uma seção do sumário (item 11 do prompt) como cartão expansível,
 * usando <details>/<summary> nativos para acessibilidade e navegação por teclado.
 */
export default function SecaoCard({ secao }: SecaoCardProps) {
  return (
    <section
      id={secao.id}
      aria-labelledby={`${secao.id}-titulo`}
      className="scroll-mt-24 rounded-card border border-ses-neutro-200 bg-white shadow-sm"
    >
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-card px-4 py-3 marker:content-none">
          <h2 id={`${secao.id}-titulo`} className="text-lg font-semibold text-ses-azul-dark">
            {secao.titulo}
          </h2>
          <span
            aria-hidden="true"
            className="shrink-0 rounded-full border border-ses-neutro-300 px-2 py-0.5 text-sm text-ses-neutro-600 transition group-open:rotate-180"
          >
            ▾
          </span>
        </summary>

        <div className="border-t border-ses-neutro-100 px-4 pb-4 pt-3">
          {secao.conteudoPendente ? (
            <ConteudoPendenteAviso />
          ) : (
            <>
              {secao.resumo && <p className="text-sm text-ses-neutro-800">{secao.resumo}</p>}

              {secao.paragrafos?.map((paragrafo, indice) => (
                <p key={indice} className="mt-2 text-sm text-ses-neutro-800">
                  {paragrafo}
                </p>
              ))}

              {secao.itens && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ses-neutro-800">
                  {secao.itens.map((item, indice) => (
                    <li key={indice}>{item}</li>
                  ))}
                </ul>
              )}

              {secao.subsecoes?.map((sub, indice) => (
                <div key={indice} className="mt-4">
                  <h3 className="text-sm font-semibold text-ses-neutro-800">{sub.titulo}</h3>
                  {sub.paragrafos?.map((p, i) => (
                    <p key={i} className="mt-1 text-sm text-ses-neutro-800">
                      {p}
                    </p>
                  ))}
                  {sub.itens && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ses-neutro-800">
                      {sub.itens.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {secao.cartoes && (
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
                  {secao.cartoes.map((cartao, indice) => (
                    <li
                      key={indice}
                      className="rounded-card border border-ses-neutro-200 bg-ses-neutro-50 p-3"
                    >
                      <p className="text-sm font-semibold text-ses-verde-dark">{cartao.titulo}</p>
                      {cartao.objetivo && (
                        <p className="mt-1 text-xs text-ses-neutro-700">{cartao.objetivo}</p>
                      )}
                      {cartao.caracteristicas && (
                        <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-ses-neutro-700">
                          {cartao.caracteristicas.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      )}
                      {cartao.atribuicoes && (
                        <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-ses-neutro-700">
                          {cartao.atribuicoes.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      )}
                      <p className="mt-2 text-[11px] text-ses-neutro-500">Fonte: {cartao.fonte}</p>
                    </li>
                  ))}
                </ul>
              )}

              {secao.tabela && (
                <TabelaConteudo tabela={secao.tabela} legenda={`Tabela — ${secao.titulo}`} />
              )}

              {secao.fluxo && <FluxoDiagrama titulo={`Fluxo — ${secao.titulo}`} etapas={secao.fluxo} />}

              {secao.alertaRestricao && (
                <p className="mt-3 rounded-md border border-ses-amarelo-dark/40 bg-ses-amarelo/15 px-3 py-2 text-xs text-ses-neutro-800">
                  <strong>Restrição normativa: </strong>
                  {secao.alertaRestricao}
                </p>
              )}

              {secao.fonte && (
                <p className="mt-3 text-xs text-ses-neutro-500">Fonte: {secao.fonte}</p>
              )}
            </>
          )}
        </div>
      </details>
    </section>
  );
}

function ConteudoPendenteAviso() {
  return (
    <p
      className="rounded-md border border-dashed border-ses-neutro-300 bg-ses-neutro-50 px-3 py-3 text-sm text-ses-neutro-700"
      role="note"
    >
      Conteúdo pendente. Esta seção será preenchida com o texto integral da Portaria SES/GO nº
      792/2024 após validação pela unidade responsável da SES-GO. Nenhuma informação foi
      presumida ou inventada.
    </p>
  );
}
