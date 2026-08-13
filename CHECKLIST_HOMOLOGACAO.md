# Checklist de homologação — Painel Institucional da Política Estadual da RUE

Este checklist deve ser preenchido pela unidade responsável da SES-GO antes
da publicação do painel em ambiente institucional. Nenhum item abaixo foi
marcado como concluído automaticamente: cada verificação deve ser executada
e confirmada por um responsável humano.

## 1. Conteúdo e fidelidade normativa

- [ ] Todo o conteúdo exibido foi conferido item a item contra o texto
      integral da Portaria SES/GO nº 792, de 12 de abril de 2024.
- [ ] Artigo, parágrafo, inciso e alínea de cada informação foram validados.
- [ ] As seções marcadas como "conteúdo pendente" (ver README, seção 8)
      foram preenchidas com o texto integral da Portaria ou mantidas
      pendentes de forma consciente.
- [ ] Nenhum município, dado populacional, valor financeiro ou situação de
      implantação foi adicionado sem fonte específica validada.
- [ ] O rótulo "Não se aplica" para indicadores/periodicidade permanece
      correto para o escopo atual do painel.

## 2. Identidade visual e brasão

- [ ] O arquivo oficial do Brasão do Estado de Goiás foi validado (origem,
      integridade, qualidade, autorização de uso) e incluído em
      `public/images/brasao-goias.png`.
- [ ] A constante `ARQUIVO_DISPONIVEL` em `src/components/Header.tsx` foi
      atualizada para `true` após a inclusão do brasão.
- [ ] As cores institucionais (verde, amarelo, azul, branco) foram
      conferidas visualmente no painel publicado.

## 3. Funcionalidade

- [ ] Busca por palavra retorna resultados esperados e a mensagem "Nenhuma
      informação correspondente foi localizada na Portaria" aparece quando
      apropriado.
- [ ] Todos os filtros (Componente, Assunto, Unidade ou serviço,
      Responsável) foram testados isoladamente e em combinação.
- [ ] O botão "Limpar filtros" restaura a busca e os filtros ao estado
      inicial.
- [ ] A navegação por âncoras (cartões de informações gerais e sumário)
      leva à seção correta.
- [ ] Os cartões expansíveis abrem e fecham corretamente.
- [ ] O menu/gaveta móvel abre pelo botão "Consultar conteúdo", fecha pelo
      botão de fechar e pela tecla Esc, e devolve o foco corretamente.
- [ ] Os fluxogramas (Monitoramento e Complexo Regulador) foram revisados
      quanto à ordem e à redação das etapas.

## 4. Acessibilidade

- [ ] Navegação completa por teclado testada manualmente (Tab, Shift+Tab,
      Enter, Esc).
- [ ] Foco visível em todos os elementos interativos.
- [ ] Teste com leitor de tela (NVDA, JAWS ou VoiceOver) realizado em ao
      menos um fluxo completo (busca, filtro, abertura de cartão).
- [ ] Auditoria automatizada (axe-core, Lighthouse ou equivalente) executada
      e pendências corrigidas.
- [ ] Contraste de cores verificado com ferramenta dedicada.
- [ ] Zoom de página até 200% testado sem perda de funcionalidade.

## 5. Responsividade

- [ ] Testado em computador (desktop).
- [ ] Testado em tablet.
- [ ] Testado em celular.

## 6. Segurança e privacidade

- [ ] Confirmada a ausência de credenciais, senhas, chaves, tokens ou dados
      pessoais no código e no repositório.
- [ ] Dependências atualizadas e sem vulnerabilidades conhecidas
      (`npm audit`).
- [ ] Nenhum dado simulado, fictício ou não previsto na Portaria foi
      identificado.

## 7. Build e publicação

- [ ] `npm run lint`, `npm run typecheck`, `npm run test` e `npm run build`
      executados com sucesso no ambiente de homologação.
- [ ] Build reproduzido localmente e comparado ao build gerado pela Vercel.
- [ ] Repositório GitHub criado mediante autorização expressa.
- [ ] Projeto Vercel criado e importado mediante autorização expressa.
- [ ] URL pública validada e testada após a implantação.
- [ ] Licença institucional definida (ver `LICENSE.txt`).

## 8. Governança

- [ ] Unidade interna da SES-GO responsável pela homologação confirmada.
- [ ] Responsável pela autorização de publicação identificado e ciente.
- [ ] Processo de atualização futura do conteúdo (se a Portaria for
      alterada) definido, ainda que o painel permaneça estático.
