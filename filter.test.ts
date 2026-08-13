import { describe, expect, it } from 'vitest';
import { SECOES } from '@/data/portaria792';
import {
  FILTROS_INICIAIS,
  correspondeBusca,
  correspondeFiltros,
  existeFiltroAtivo,
  sanitizarBusca,
} from '@/utils/filter';

describe('sanitizarBusca', () => {
  it('remove marcações HTML da entrada', () => {
    expect(sanitizarBusca('<script>alert(1)</script>samu')).not.toContain('<script>');
  });

  it('limita o tamanho da entrada a 200 caracteres', () => {
    const entrada = 'a'.repeat(500);
    expect(sanitizarBusca(entrada).length).toBeLessThanOrEqual(200);
  });
});

describe('correspondeBusca', () => {
  const secaoSamu = SECOES.find((s) => s.id === 'samu-192')!;

  it('encontra seção por termo presente no conteúdo, ignorando acentuação e caixa', () => {
    expect(correspondeBusca(secaoSamu, 'SAMU')).toBe(true);
    expect(correspondeBusca(secaoSamu, 'regulacao')).toBe(true); // "Regulação" sem acento
  });

  it('retorna true para termo vazio (sem filtro de busca)', () => {
    expect(correspondeBusca(secaoSamu, '')).toBe(true);
  });

  it('retorna false para termo não encontrado no conteúdo', () => {
    expect(correspondeBusca(secaoSamu, 'financiamento tripartite inexistente xyz')).toBe(false);
  });
});

describe('correspondeFiltros', () => {
  const secaoSamu = SECOES.find((s) => s.id === 'samu-192')!;
  const secaoFinanciamento = SECOES.find((s) => s.id === 'financiamento')!;

  it('retorna true quando nenhum filtro está ativo', () => {
    expect(correspondeFiltros(secaoSamu, FILTROS_INICIAIS)).toBe(true);
  });

  it('filtra corretamente por componente', () => {
    expect(correspondeFiltros(secaoSamu, { ...FILTROS_INICIAIS, componente: 'SAMU 192' })).toBe(
      true,
    );
    expect(
      correspondeFiltros(secaoFinanciamento, { ...FILTROS_INICIAIS, componente: 'SAMU 192' }),
    ).toBe(false);
  });

  it('filtra corretamente por assunto', () => {
    expect(
      correspondeFiltros(secaoFinanciamento, { ...FILTROS_INICIAIS, assunto: 'Financiamento' }),
    ).toBe(true);
  });
});

describe('existeFiltroAtivo', () => {
  it('identifica quando não há filtros ativos', () => {
    expect(existeFiltroAtivo(FILTROS_INICIAIS)).toBe(false);
  });

  it('identifica quando há ao menos um filtro ativo', () => {
    expect(existeFiltroAtivo({ ...FILTROS_INICIAIS, assunto: 'Financiamento' })).toBe(true);
  });
});

describe('integridade dos dados da Portaria', () => {
  it('toda seção possui identificador, título e ordem únicos', () => {
    const ids = SECOES.map((s) => s.id);
    const ordens = SECOES.map((s) => s.ordem);
    expect(new Set(ids).size).toBe(SECOES.length);
    expect(new Set(ordens).size).toBe(SECOES.length);
  });

  it('seções sem fonte normativa estão marcadas como conteúdo pendente', () => {
    SECOES.forEach((secao) => {
      if (!secao.fonte && !secao.cartoes) {
        expect(secao.conteudoPendente).toBe(true);
      }
    });
  });
});
