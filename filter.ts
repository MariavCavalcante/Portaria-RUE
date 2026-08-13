import type { AssuntoRUE, ComponenteRUE, ResponsavelRUE, SecaoConteudo, UnidadeServico } from '@/types';

export interface FiltrosAtivos {
  componente: ComponenteRUE | 'Todos';
  assunto: AssuntoRUE | 'Todos';
  unidade: UnidadeServico | 'Todos';
  responsavel: ResponsavelRUE | 'Todos';
}

export const FILTROS_INICIAIS: FiltrosAtivos = {
  componente: 'Todos',
  assunto: 'Todos',
  unidade: 'Todos',
  responsavel: 'Todos',
};

/** Normaliza texto para comparação de busca (minúsculas, sem acentuação, sem tags HTML). */
function normalizar(valor: string): string {
  return valor
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/** Sanitiza a entrada de busca do usuário: remove marcações e caracteres de controle. */
export function sanitizarBusca(valor: string): string {
  const semTags = valor.replace(/<[^>]*>/g, '');
  // eslint-disable-next-line no-control-regex -- remoção intencional de caracteres de controle
  const semControle = semTags.replace(/[\u0000-\u001F\u007F]/g, '');
  return semControle.slice(0, 200);
}

/** Concatena todo o texto pesquisável de uma seção (título, resumo, itens, tabela, fonte). */
function textoBuscavel(secao: SecaoConteudo): string {
  const partes: string[] = [secao.titulo, secao.resumo ?? '', secao.fonte ?? ''];

  if (secao.paragrafos) partes.push(...secao.paragrafos);
  if (secao.itens) partes.push(...secao.itens);
  if (secao.alertaRestricao) partes.push(secao.alertaRestricao);

  secao.subsecoes?.forEach((sub) => {
    partes.push(sub.titulo);
    if (sub.itens) partes.push(...sub.itens);
    if (sub.paragrafos) partes.push(...sub.paragrafos);
  });

  secao.cartoes?.forEach((cartao) => {
    partes.push(cartao.titulo, cartao.fonte);
    if (cartao.objetivo) partes.push(cartao.objetivo);
    if (cartao.caracteristicas) partes.push(...cartao.caracteristicas);
    if (cartao.atribuicoes) partes.push(...cartao.atribuicoes);
  });

  secao.fluxo?.forEach((etapa) => {
    partes.push(etapa.titulo);
    if (etapa.descricao) partes.push(etapa.descricao);
  });

  if (secao.tabela) {
    partes.push(...secao.tabela.colunas);
    secao.tabela.linhas.forEach((linha) => partes.push(...Object.values(linha)));
  }

  return normalizar(partes.join(' '));
}

/** Verifica se a seção corresponde à palavra-chave pesquisada. */
export function correspondeBusca(secao: SecaoConteudo, termo: string): boolean {
  const termoLimpo = normalizar(sanitizarBusca(termo));
  if (!termoLimpo) return true;
  return textoBuscavel(secao).includes(termoLimpo);
}

/** Verifica se a seção corresponde aos filtros ativos (apenas exibição/ocultação). */
export function correspondeFiltros(secao: SecaoConteudo, filtros: FiltrosAtivos): boolean {
  if (filtros.componente !== 'Todos') {
    if (!secao.tags.componente?.includes(filtros.componente)) return false;
  }
  if (filtros.assunto !== 'Todos') {
    if (!secao.tags.assunto?.includes(filtros.assunto)) return false;
  }
  if (filtros.unidade !== 'Todos') {
    if (!secao.tags.unidade?.includes(filtros.unidade)) return false;
  }
  if (filtros.responsavel !== 'Todos') {
    if (!secao.tags.responsavel?.includes(filtros.responsavel)) return false;
  }
  return true;
}

export function existeFiltroAtivo(filtros: FiltrosAtivos): boolean {
  return Object.values(filtros).some((v) => v !== 'Todos');
}
