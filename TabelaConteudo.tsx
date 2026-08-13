import type { TabelaConteudo as TTabelaConteudo } from '@/types';

interface TabelaConteudoProps {
  tabela: TTabelaConteudo;
  legenda: string;
}

export default function TabelaConteudo({ tabela, legenda }: TabelaConteudoProps) {
  return (
    <div className="my-3 overflow-x-auto rounded-card border border-ses-neutro-200">
      <table className="w-full min-w-[420px] border-collapse text-left text-sm">
        <caption className="sr-only">{legenda}</caption>
        <thead>
          <tr className="bg-ses-azul-light">
            {tabela.colunas.map((coluna) => (
              <th key={coluna} scope="col" className="px-3 py-2 font-semibold text-ses-azul-dark">
                {coluna}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabela.linhas.map((linha, indice) => (
            <tr key={indice} className={indice % 2 === 0 ? 'bg-white' : 'bg-ses-neutro-50'}>
              {tabela.colunas.map((coluna) => (
                <td key={coluna} className="border-t border-ses-neutro-200 px-3 py-2">
                  {linha[coluna]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
