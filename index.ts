/**
 * Tipos do conteúdo estático do Painel Institucional da Política Estadual
 * da Rede de Urgência e Emergência (RUE) — SES-GO.
 *
 * Todo o conteúdo é literal, baseado na Portaria SES/GO nº 792/2024.
 * Nenhum dado é calculado, agregado ou obtido de fonte externa.
 */

/** Componentes da RUE usados como opções do filtro "Componente". */
export type ComponenteRUE =
  | 'Promoção, Prevenção e Vigilância'
  | 'Atenção Primária'
  | 'SAMU 192'
  | 'UPA 24h'
  | 'Componente Hospitalar'
  | 'Atenção Domiciliar'
  | 'Complexo Regulador'
  | 'Comitê Gestor';

/** Assuntos usados como opções do filtro "Assunto". */
export type AssuntoRUE =
  | 'Diretrizes'
  | 'Classificação de risco'
  | 'Organização assistencial'
  | 'Tempo-resposta'
  | 'Equipes'
  | 'Recursos tecnológicos'
  | 'Linhas de cuidado'
  | 'Financiamento'
  | 'Monitoramento'
  | 'Competências'
  | 'Referências normativas';

/** Unidades/serviços usados como opções do filtro "Unidade ou serviço". */
export type UnidadeServico =
  | 'Central de Regulação'
  | 'Base descentralizada'
  | 'USB'
  | 'USA'
  | 'Motolância'
  | 'VIR'
  | 'Transporte aeromédico'
  | 'UPA 24h'
  | 'Sala de Estabilização'
  | 'Hospital Geral'
  | 'Hospitais Especializados';

/** Responsáveis usados como opções do filtro "Responsável". */
export type ResponsavelRUE =
  | 'SES-GO'
  | 'Secretarias Municipais'
  | 'Comitê Gestor'
  | 'CIM'
  | 'Complexo Regulador'
  | 'Consórcio Público Intermunicipal';

/** Metadados usados exclusivamente para busca e filtragem local (exibir/ocultar). */
export interface TagsFiltro {
  componente?: ComponenteRUE[];
  assunto?: AssuntoRUE[];
  unidade?: UnidadeServico[];
  responsavel?: ResponsavelRUE[];
}

/** Cartão de informação geral exibido no topo do painel (seção 8 do prompt). */
export interface InfoCard {
  id: string;
  rotulo: string;
  valor: string;
  fonte: string;
  tooltip: string;
  ancora: string; // id da seção correspondente para o atalho
}

/** Subseção com lista de itens (usada dentro de seções de conteúdo). */
export interface Subsecao {
  titulo: string;
  itens?: string[];
  paragrafos?: string[];
}

/** Linha genérica de tabela comparativa. */
export interface LinhaTabela {
  [coluna: string]: string;
}

/** Tabela comparativa com cabeçalho e linhas. */
export interface TabelaConteudo {
  colunas: string[];
  linhas: LinhaTabela[];
}

/** Cartão expansível de conteúdo normativo (componentes, tipologias etc.). */
export interface CartaoExpansivel {
  titulo: string;
  objetivo?: string;
  caracteristicas?: string[];
  atribuicoes?: string[];
  fonte: string;
}

/** Etapa de fluxograma institucional (monitoramento, complexo regulador etc.). */
export interface EtapaFluxo {
  ordem: number;
  titulo: string;
  descricao?: string;
}

/** Seção principal de conteúdo do painel (item do sumário — seção 11 do prompt). */
export interface SecaoConteudo {
  id: string;
  ordem: number;
  titulo: string;
  resumo?: string;
  paragrafos?: string[];
  itens?: string[];
  subsecoes?: Subsecao[];
  cartoes?: CartaoExpansivel[];
  tabela?: TabelaConteudo;
  fluxo?: EtapaFluxo[];
  alertaRestricao?: string;
  fonte?: string;
  tags: TagsFiltro;
  /** true quando o texto integral da Portaria ainda não foi fornecido para esta seção. */
  conteudoPendente?: boolean;
}
