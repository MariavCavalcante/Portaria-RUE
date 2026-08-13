/**
 * Conteúdo estático do Painel Institucional da Política Estadual da Rede de
 * Urgência e Emergência (RUE) — SES-GO.
 *
 * Fonte normativa: Portaria SES/GO nº 792, de 12 de abril de 2024.
 *
 * IMPORTANTE — fidelidade normativa:
 * Todo o conteúdo abaixo reproduz, de forma organizada, apenas as informações
 * fornecidas na especificação do painel. Nenhum município, valor financeiro,
 * indicador de desempenho, dado de execução ou informação não prevista na
 * Portaria foi adicionado. Seções cujo texto integral da Portaria ainda não
 * foi disponibilizado estão marcadas com `conteudoPendente: true` e exibem um
 * aviso explícito, em vez de conteúdo presumido ou inventado.
 */

import type { InfoCard, SecaoConteudo } from '@/types';

export const NOME_PAINEL =
  'Painel Institucional da Política Estadual da Rede de Urgência e Emergência — RUE';

export const SUBTITULO_PAINEL =
  'Organização da Rede de Urgência e Emergência do Estado de Goiás';

export const REFERENCIA_NORMATIVA = 'Portaria SES/GO nº 792, de 12 de abril de 2024';

export const AVISO_INSTITUCIONAL =
  'Este painel possui caráter exclusivamente informativo e utiliza como base a Portaria SES/GO nº 792, de 12 de abril de 2024. Não apresenta dados de execução, resultados assistenciais ou situação atual de implantação da Política Estadual da RUE.';

/** Cartões de informações gerais (seção 8 do prompt). Permanecem visíveis mesmo com busca ativa. */
export const INFO_CARDS: InfoCard[] = [
  {
    id: 'macrorregioes',
    rotulo: 'Macrorregiões previstas',
    valor: '5',
    fonte: 'Art. 1º, § 1º',
    tooltip: 'Número de macrorregiões de saúde previstas na Portaria para organização da RUE.',
    ancora: 'macrorregioes',
  },
  {
    id: 'componentes',
    rotulo: 'Componentes da RUE',
    valor: '8',
    fonte: 'Art. 4º',
    tooltip: 'Número de componentes que integram a Rede de Urgência e Emergência.',
    ancora: 'componentes-rue',
  },
  {
    id: 'samu-funcionamento',
    rotulo: 'Funcionamento do SAMU 192',
    valor: '24 horas',
    fonte: 'Art. 4º, inciso III',
    tooltip: 'Regime de funcionamento do Serviço de Atendimento Móvel de Urgência.',
    ancora: 'samu-192',
  },
  {
    id: 'samu-numero',
    rotulo: 'Número de acesso',
    valor: '192',
    fonte: 'Art. 4º, inciso III',
    tooltip: 'Número telefônico de acesso ao SAMU 192.',
    ancora: 'samu-192',
  },
  {
    id: 'ponto-fixo',
    rotulo: 'Parâmetro para ponto fixo',
    valor: 'Até 60 minutos',
    fonte: 'Art. 5º, § 3º',
    tooltip: 'Tempo-resposta de referência para pontos fixos de atendimento do SAMU 192.',
    ancora: 'parametros-samu',
  },
  {
    id: 'ponto-movel',
    rotulo: 'Parâmetro para ponto móvel',
    valor: 'Até 25 minutos',
    fonte: 'Art. 5º, § 3º',
    tooltip: 'Tempo-resposta de referência para pontos móveis de atendimento do SAMU 192.',
    ancora: 'parametros-samu',
  },
  {
    id: 'linhas-prioritarias',
    rotulo: 'Linhas prioritárias',
    valor: '4: IAM, AVC, trauma e sepse',
    fonte: 'Arts. 2º e 4º',
    tooltip: 'Linhas de cuidado consideradas prioritárias pela Política Estadual da RUE.',
    ancora: 'diretrizes',
  },
];

/** Índice/sumário do painel (seção 11 do prompt), na ordem apresentada. */
export const SECOES: SecaoConteudo[] = [
  {
    id: 'apresentacao',
    ordem: 1,
    titulo: 'Apresentação',
    resumo:
      'Apresentação institucional da Política Estadual da Rede de Urgência e Emergência do Estado de Goiás.',
    tags: { assunto: ['Diretrizes'] },
    conteudoPendente: true,
  },
  {
    id: 'macrorregioes',
    ordem: 2,
    titulo: 'Macrorregiões',
    resumo:
      'A Portaria organiza a RUE em cinco macrorregiões de saúde no Estado de Goiás.',
    itens: ['Centro-Oeste', 'Centro-Sudeste', 'Centro-Norte', 'Sudoeste', 'Nordeste'],
    alertaRestricao:
      'Não são relacionados municípios, dados populacionais ou situação atual de implantação, por ausência de fonte específica fornecida e validada.',
    fonte: 'Art. 1º, § 1º',
    tags: { assunto: ['Organização assistencial'] },
  },
  {
    id: 'diretrizes',
    ordem: 3,
    titulo: 'Diretrizes',
    resumo:
      'A Portaria considera urgência a situação aguda ou a agudização de condição crônica com início há menos de 24 horas.',
    itens: [
      'Universalidade, equidade e integralidade.',
      'Ampliação do acesso.',
      'Classificação de risco com linguagem única.',
      'Caracterização da urgência.',
      'Regionalização.',
      'Regulação articulada.',
      'Linhas de cuidado prioritárias.',
      'Gerenciamento unificado do SAMU 192.',
      'Articulação interfederativa.',
      'Educação permanente.',
    ],
    fonte: 'Art. 2º',
    tags: { assunto: ['Diretrizes', 'Classificação de risco'] },
  },
  {
    id: 'modelo-atencao',
    ordem: 4,
    titulo: 'Modelo de atenção',
    resumo: 'Modelo de atenção adotado pela Política Estadual da RUE.',
    tags: { assunto: ['Organização assistencial'] },
    conteudoPendente: true,
  },
  {
    id: 'componentes-rue',
    ordem: 5,
    titulo: 'Componentes da RUE',
    resumo:
      'A Rede de Urgência e Emergência é composta por oito componentes, cada um com objetivo, características, atribuições e referência normativa próprios.',
    cartoes: [
      {
        titulo: 'Promoção, Prevenção e Vigilância à Saúde',
        fonte: 'Art. 4º',
      },
      {
        titulo: 'Atenção Primária à Saúde',
        fonte: 'Art. 4º',
      },
      {
        titulo: 'SAMU 192',
        fonte: 'Art. 4º',
      },
      {
        titulo: 'UPA 24h',
        fonte: 'Art. 4º',
      },
      {
        titulo: 'Componente Hospitalar',
        fonte: 'Art. 4º',
      },
      {
        titulo: 'Atenção Domiciliar',
        fonte: 'Art. 4º',
      },
      {
        titulo: 'Complexo Regulador',
        fonte: 'Art. 4º',
      },
      {
        titulo: 'Comitê Gestor Macrorregional',
        fonte: 'Art. 4º',
      },
    ],
    fonte: 'Art. 4º',
    tags: {
      assunto: ['Organização assistencial'],
      componente: [
        'Promoção, Prevenção e Vigilância',
        'Atenção Primária',
        'SAMU 192',
        'UPA 24h',
        'Componente Hospitalar',
        'Atenção Domiciliar',
        'Complexo Regulador',
        'Comitê Gestor',
      ],
    },
  },
  {
    id: 'promocao-prevencao-vigilancia',
    ordem: 6,
    titulo: 'Promoção, Prevenção e Vigilância',
    resumo: 'Componente de promoção, prevenção e vigilância à saúde da RUE.',
    fonte: 'Art. 4º',
    tags: { componente: ['Promoção, Prevenção e Vigilância'], assunto: ['Organização assistencial'] },
    conteudoPendente: true,
  },
  {
    id: 'atencao-primaria',
    ordem: 7,
    titulo: 'Atenção Primária',
    resumo: 'Componente de Atenção Primária à Saúde da RUE.',
    fonte: 'Art. 4º',
    tags: { componente: ['Atenção Primária'], assunto: ['Organização assistencial'] },
    conteudoPendente: true,
  },
  {
    id: 'samu-192',
    ordem: 8,
    titulo: 'SAMU 192',
    resumo:
      'Serviço de Atendimento Móvel de Urgência, com escuta permanente e funcionamento durante 24 horas.',
    itens: [
      'Escuta permanente e funcionamento durante 24 horas.',
      'Acesso pelo número 192.',
      'Orientação telefônica médica e envio de unidade móvel.',
      'Atendimento de urgência e transferência inter-hospitalar de pacientes graves.',
      'Composição por Central de Regulação, bases descentralizadas e unidades móveis.',
      'Categorias: USB, USA, unidade fluvial, motolância, VIR e transporte aeromédico.',
    ],
    fonte: 'Art. 4º, inciso III',
    tags: {
      componente: ['SAMU 192'],
      assunto: ['Organização assistencial', 'Tempo-resposta', 'Equipes'],
      unidade: ['Central de Regulação', 'Base descentralizada', 'USB', 'USA', 'Motolância', 'VIR', 'Transporte aeromédico'],
      responsavel: ['Complexo Regulador'],
    },
  },
  {
    id: 'parametros-samu',
    ordem: 9,
    titulo: 'Parâmetros do SAMU 192',
    resumo: 'Parâmetros normativos de tempo-resposta, dimensionamento e velocidade média do SAMU 192.',
    itens: [
      'Até 60 minutos para ponto fixo.',
      'Até 25 minutos para ponto móvel.',
      'Velocidade média de 60 km/h em áreas não urbanas.',
      'Velocidade média de 30 km/h em áreas urbanas.',
      'Pelo menos uma USA e uma USB no polo da macrorregião.',
      'Pelo menos uma USB no polo da região e em cada base.',
      'Base com USA também deverá possuir USB.',
      'Localização considerando população, abrangência e tempo-resposta.',
      'Gerenciamento por consórcio público intermunicipal macrorregional.',
    ],
    alertaRestricao:
      'Os parâmetros são apresentados como regras normativas, sem cálculo de seu cumprimento.',
    fonte: 'Art. 5º, § 3º',
    tags: {
      componente: ['SAMU 192'],
      assunto: ['Tempo-resposta', 'Equipes'],
      unidade: ['USA', 'USB'],
      responsavel: ['Consórcio Público Intermunicipal'],
    },
  },
  {
    id: 'upa-24h',
    ordem: 10,
    titulo: 'UPA 24h',
    resumo: 'Definição, finalidade e opções de funcionamento das Unidades de Pronto Atendimento.',
    itens: [
      'Definição e finalidade.',
      'UPA Nova e UPA Ampliada.',
      'Permanência ideal de até 12 horas.',
      'Opções de funcionamento de I a VIII.',
      'Quantidade de médicos prevista em cada opção.',
    ],
    fonte: 'Art. 4º, inciso IV, e art. 5º, § 4º',
    tags: {
      componente: ['UPA 24h'],
      assunto: ['Organização assistencial', 'Equipes'],
      unidade: ['UPA 24h'],
    },
  },
  {
    id: 'componente-hospitalar',
    ordem: 11,
    titulo: 'Componente Hospitalar',
    resumo:
      'Estrutura hospitalar da RUE, composta por portas hospitalares, enfermarias de retaguarda, cuidados prolongados, leitos de terapia intensiva, serviços de diagnóstico e laboratório e linhas de cuidado.',
    itens: [
      'Portas hospitalares.',
      'Enfermarias de retaguarda.',
      'Cuidados prolongados.',
      'Leitos de terapia intensiva.',
      'Serviços de diagnóstico e laboratório.',
      'Linhas de cuidado.',
    ],
    subsecoes: [
      {
        titulo: 'Tipologias',
        itens: [
          'Hospital de Primeiro Atendimento com Sala de Estabilização.',
          'Hospital Geral.',
          'Hospital Especializado Tipo I.',
          'Hospital de Referência ao Trauma Nível I.',
          'Hospital de Referência às Doenças Cardiovasculares Nível I.',
          'Hospital de Referência ao AVC Nível I.',
          'Hospital Especializado Tipo II — Polivalente.',
        ],
        paragrafos: [
          'Para cada tipologia, são apresentados somente cobertura populacional, finalidade, plantões presenciais, especialidades alcançáveis, recursos tecnológicos e linhas de cuidado previstos na Portaria.',
        ],
      },
    ],
    alertaRestricao: 'Não são relacionados nem classificados estabelecimentos reais.',
    fonte: 'Art. 5º, § 5º',
    tags: {
      componente: ['Componente Hospitalar'],
      assunto: ['Organização assistencial', 'Linhas de cuidado'],
      unidade: ['Sala de Estabilização', 'Hospital Geral', 'Hospitais Especializados'],
    },
  },
  {
    id: 'linhas-cuidado',
    ordem: 12,
    titulo: 'Linhas de Cuidado',
    resumo: 'Linhas de cuidado prioritárias da Política Estadual da RUE.',
    fonte: 'Arts. 2º e 4º',
    tags: { assunto: ['Linhas de cuidado'] },
    conteudoPendente: true,
  },
  {
    id: 'atencao-domiciliar',
    ordem: 13,
    titulo: 'Atenção Domiciliar',
    resumo: 'Componente de Atenção Domiciliar da RUE.',
    fonte: 'Art. 4º',
    tags: { componente: ['Atenção Domiciliar'], assunto: ['Organização assistencial'] },
    conteudoPendente: true,
  },
  {
    id: 'complexo-regulador',
    ordem: 14,
    titulo: 'Complexo Regulador',
    resumo:
      'Diagrama institucional do Complexo Regulador, composto por Central de Regulação das Urgências, Central de Regulação de Leitos, unidades móveis, Núcleo de Educação Permanente, administração do consórcio e outras centrais conveniadas.',
    fluxo: [
      { ordem: 1, titulo: 'Central de Regulação das Urgências' },
      { ordem: 2, titulo: 'Central de Regulação de Leitos' },
      { ordem: 3, titulo: 'Unidades móveis' },
      { ordem: 4, titulo: 'Núcleo de Educação Permanente' },
      { ordem: 5, titulo: 'Administração do consórcio' },
      { ordem: 6, titulo: 'Outras centrais conveniadas' },
    ],
    fonte: 'Art. 4º, inciso VII',
    tags: {
      componente: ['Complexo Regulador'],
      assunto: ['Organização assistencial'],
      unidade: ['Central de Regulação'],
      responsavel: ['Complexo Regulador', 'Consórcio Público Intermunicipal'],
    },
  },
  {
    id: 'comite-gestor',
    ordem: 15,
    titulo: 'Comitê Gestor',
    resumo: 'Finalidade, composição e atribuições do Comitê Gestor Macrorregional.',
    itens: [
      'Finalidade e composição geral.',
      'Monitoramento e análise de relatórios.',
      'Visitas técnicas.',
      'Emissão de pareceres.',
      'Acompanhamento de contratos.',
      'Apoio às decisões da CIM.',
      'Possibilidade de câmaras temáticas.',
    ],
    fonte: 'Art. 4º, inciso VIII, e arts. 11 e 15',
    tags: {
      componente: ['Comitê Gestor'],
      assunto: ['Monitoramento', 'Competências'],
      responsavel: ['Comitê Gestor', 'CIM'],
    },
  },
  {
    id: 'financiamento',
    ordem: 16,
    titulo: 'Financiamento',
    resumo: 'Estrutura tripartite de financiamento do SAMU 192.',
    itens: [
      'Financiamento tripartite do SAMU 192.',
      'Participação federal.',
      'Participação estadual variável.',
      'Participação municipal de 25% do custeio mensal.',
      'Distribuição per capita.',
      'Necessidade de pactuação.',
      'Condicionamento dos repasses ao cumprimento das exigências.',
    ],
    alertaRestricao: 'Não são apresentados valores financeiros.',
    fonte: 'Art. 5º, § 3º, art. 8º e art. 9º',
    tags: {
      assunto: ['Financiamento'],
      responsavel: ['SES-GO', 'Secretarias Municipais', 'Consórcio Público Intermunicipal'],
    },
  },
  {
    id: 'monitoramento',
    ordem: 17,
    titulo: 'Monitoramento',
    resumo:
      'Fluxograma institucional de monitoramento, análise de relatórios e homologação, e tratamento de não conformidades.',
    fluxo: [
      { ordem: 1, titulo: 'Instituição apresenta relatório mensal.' },
      { ordem: 2, titulo: 'Comitê Gestor analisa e valida.' },
      { ordem: 3, titulo: 'Comitê Gestor emite relatório ou parecer.' },
      { ordem: 4, titulo: 'CIM aprecia e homologa.' },
      { ordem: 5, titulo: 'CIM encaminha o atesto à SES-GO.' },
      { ordem: 6, titulo: 'SES-GO mantém ou suspende o repasse.' },
    ],
    subsecoes: [
      {
        titulo: 'Tratamento das não conformidades',
        itens: [
          'Identificação da não conformidade.',
          'Suspensão do pagamento.',
          'Saneamento.',
          'Novo relatório.',
          'Aprovação pela CIM.',
          'Restabelecimento do pagamento.',
        ],
      },
    ],
    fonte: 'Arts. 8º, 10, 11 e 12',
    tags: {
      assunto: ['Monitoramento'],
      responsavel: ['SES-GO', 'Comitê Gestor', 'CIM'],
    },
  },
  {
    id: 'competencias',
    ordem: 18,
    titulo: 'Competências',
    resumo: 'Competências normativas atribuídas a cada instituição.',
    tabela: {
      colunas: ['Instituição', 'Dispositivo'],
      linhas: [
        { Instituição: 'Secretarias Municipais de Saúde', Dispositivo: 'Art. 13' },
        { Instituição: 'Nível central da SES-GO', Dispositivo: 'Art. 14' },
        { Instituição: 'Comitê Gestor Macrorregional', Dispositivo: 'Art. 15' },
      ],
    },
    fonte: 'Arts. 13, 14 e 15',
    tags: {
      assunto: ['Competências'],
      responsavel: ['SES-GO', 'Secretarias Municipais', 'Comitê Gestor'],
    },
  },
  {
    id: 'referencias-normativas',
    ordem: 19,
    titulo: 'Referências Normativas',
    resumo: 'Referência normativa integral que fundamenta o painel.',
    itens: [REFERENCIA_NORMATIVA],
    fonte: REFERENCIA_NORMATIVA,
    tags: { assunto: ['Referências normativas'] },
  },
];
