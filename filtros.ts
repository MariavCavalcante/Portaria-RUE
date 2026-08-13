import type { AssuntoRUE, ComponenteRUE, ResponsavelRUE, UnidadeServico } from '@/types';

/** Regra: os filtros apenas exibem ou ocultam conteúdos estáticos já existentes. */

export const OPCOES_COMPONENTE: ComponenteRUE[] = [
  'Promoção, Prevenção e Vigilância',
  'Atenção Primária',
  'SAMU 192',
  'UPA 24h',
  'Componente Hospitalar',
  'Atenção Domiciliar',
  'Complexo Regulador',
  'Comitê Gestor',
];

export const OPCOES_ASSUNTO: AssuntoRUE[] = [
  'Diretrizes',
  'Classificação de risco',
  'Organização assistencial',
  'Tempo-resposta',
  'Equipes',
  'Recursos tecnológicos',
  'Linhas de cuidado',
  'Financiamento',
  'Monitoramento',
  'Competências',
  'Referências normativas',
];

export const OPCOES_UNIDADE: UnidadeServico[] = [
  'Central de Regulação',
  'Base descentralizada',
  'USB',
  'USA',
  'Motolância',
  'VIR',
  'Transporte aeromédico',
  'UPA 24h',
  'Sala de Estabilização',
  'Hospital Geral',
  'Hospitais Especializados',
];

export const OPCOES_RESPONSAVEL: ResponsavelRUE[] = [
  'SES-GO',
  'Secretarias Municipais',
  'Comitê Gestor',
  'CIM',
  'Complexo Regulador',
  'Consórcio Público Intermunicipal',
];
