# Painel Institucional da Política Estadual da Rede de Urgência e Emergência — RUE

Secretaria de Estado da Saúde de Goiás — SES-GO

## 1. Finalidade

Painel institucional, público e **exclusivamente informativo**, que apresenta de forma
organizada, visual e acessível o conteúdo da **Portaria SES/GO nº 792, de 12 de abril de
2024**, que institui a Política Estadual da Rede de Urgência e Emergência (RUE) no
Estado de Goiás.

> **Aviso obrigatório:** Este painel possui caráter exclusivamente informativo e utiliza
> como base a Portaria SES/GO nº 792, de 12 de abril de 2024. Não apresenta dados de
> execução, resultados assistenciais ou situação atual de implantação da Política
> Estadual da RUE.

## 2. Caráter estático do painel

- Não há banco de dados, API, planilha externa ou arquivo CSV.
- Não há login, autenticação, cadastro ou área administrativa.
- Não há indicadores de desempenho, produção, valores financeiros atualizados ou dados
  pessoais/assistenciais.
- Todo o conteúdo normativo está em `src/data/portaria792.ts`, versionado junto ao
  código-fonte.
- As interações do usuário (busca, filtros, expandir/recolher cartões, navegação por
  âncoras) ocorrem inteiramente no navegador, sem chamadas de rede a serviços externos.

## 3. Tecnologias e arquitetura

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router), saída estática (`output: 'export'`) |
| Linguagem | TypeScript (modo estrito) |
| UI | React 18 |
| Estilo | Tailwind CSS |
| Qualidade | ESLint (`next/core-web-vitals`), Prettier |
| Testes | Vitest + Testing Library (jsdom) |
| CI | GitHub Actions |
| Hospedagem prevista | Vercel |

## 4. Estrutura de arquivos

```
painel-politica-estadual-rue-goias/
├── public/images/            # brasao-goias.png (arquivo oficial pendente) + LEIA-ME.txt
├── src/app/                  # layout, página principal, estilos globais
├── src/components/           # Header, Footer, InfoCards, SidebarFiltros, SecaoCard,
│                              # FluxoDiagrama, TabelaConteudo, PainelClient
├── src/data/                 # portaria792.ts (conteúdo normativo) e filtros.ts (opções)
├── src/types/                # tipagem estrita do conteúdo do painel
├── src/utils/                # filter.ts (busca e filtragem local, sem cálculo de dados)
├── tests/                    # testes automatizados (Vitest)
├── .github/workflows/ci.yml  # lint, typecheck, testes e build em PRs e na main
├── .eslintrc.json, .prettierrc, tailwind.config.ts, tsconfig.json, next.config.js
└── README.md
```

## 5. Instalação e execução local

Pré-requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev       # ambiente de desenvolvimento em http://localhost:3000
```

## 6. Qualidade, testes e build

```bash
npm run lint       # ESLint
npm run typecheck  # verificação de tipos (tsc --noEmit)
npm run test        # testes automatizados (Vitest)
npm run build       # build de produção — gera exportação estática em /out
```

Os quatro comandos acima foram executados neste ambiente de desenvolvimento com
resultado bem-sucedido (ver seção "Testes realizados" na entrega). O comando `build`
gera uma pasta `/out` com HTML, CSS e JS estáticos, prontos para publicação em qualquer
hospedagem de arquivos estáticos.

## 7. Substituição do brasão oficial

O arquivo oficial do Brasão do Estado de Goiás **não foi fornecido** nesta entrega. Um
espaço reservado textual ("INSERIR ARQUIVO OFICIAL DO BRASÃO DO ESTADO DE GOIÁS") é
exibido no lugar da imagem, conforme instrução do prompt de desenvolvimento.

Para incluir o arquivo oficial, após validar origem, integridade, qualidade e
autorização de uso:

1. Salve o arquivo (PNG, fundo transparente) em `public/images/brasao-goias.png`.
2. Em `src/components/Header.tsx`, altere `const ARQUIVO_DISPONIVEL = false;` para
   `true`.
3. Não redesenhe, distorça, recolora, recorte, incline ou aplique efeitos ao brasão.

## 8. Conteúdo pendente

O texto integral da Portaria SES/GO nº 792/2024 não foi fornecido para todas as seções
do sumário. As seções abaixo estão implementadas como âncora navegável, mas exibem um
aviso explícito de "conteúdo pendente", em vez de conteúdo presumido:

- Apresentação
- Modelo de atenção
- Promoção, Prevenção e Vigilância (conteúdo específico do componente)
- Atenção Primária (conteúdo específico do componente)
- Linhas de Cuidado (conteúdo específico da seção própria)
- Atenção Domiciliar (conteúdo específico do componente)

Para completar essas seções, adicione os campos correspondentes (`paragrafos`, `itens`,
`fonte` etc.) ao objeto da seção em `src/data/portaria792.ts` e remova a propriedade
`conteudoPendente: true`.

## 9. Versionamento no GitHub

Este código-fonte **não foi enviado a nenhum repositório remoto**. Nenhum repositório
foi criado e nenhum comando `git push` foi executado, conforme restrição do prompt
("Não criar repositório remoto, fazer push ou alterar recursos externos sem autorização
expressa").

Para versionar manualmente:

```bash
git init
git add .
git commit -m "feat: cria estrutura inicial do painel"
git branch -M main
git remote add origin <URL-do-repositorio-autorizado>
git push -u origin main
```

Nome de repositório sugerido: `painel-politica-estadual-rue-goias`.

Mensagens de commit sugeridas (semânticas):

- `feat: cria estrutura inicial do painel`
- `feat: adiciona conteúdo da Portaria nº 792/2024`
- `feat: adiciona busca e filtros`
- `test: adiciona testes de interface`
- `docs: adiciona instruções de publicação`
- `fix: corrige acessibilidade e responsividade`

## 10. Integração contínua

O fluxo `.github/workflows/ci.yml` executa, em pull requests e na branch `main`:
instalação de dependências, lint, verificação de tipos, testes automatizados e build.
Nenhum token ou credencial é incluído no arquivo de configuração.

## 11. Publicação na Vercel

**Nenhuma publicação foi realizada.** Nenhuma conta ou projeto Vercel foi criado ou
alterado, conforme restrição do prompt.

Para publicar, após autorização expressa do responsável pelo projeto:

1. Crie (ou autorize a criação d)o repositório no GitHub e envie o código.
2. Acesse a Vercel.
3. Selecione **Add New Project**.
4. Importe o repositório `painel-politica-estadual-rue-goias`.
5. Confirme o framework detectado (Next.js) e o comando de build (`next build`).
6. Realize a implantação.
7. Valide a URL pública gerada.
8. Teste o painel publicado (busca, filtros, navegação, acessibilidade).

A Vercel oferece automaticamente: preview para pull requests, produção pela branch
`main`, histórico de implantações com rollback, e possibilidade de domínio próprio.

Nome de projeto Vercel sugerido: `painel-politica-estadual-rue-goias`.

## 12. Acessibilidade

Desenvolvido visando WCAG 2.2 nível AA:

- HTML semântico (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<details>`).
- Navegação completa por teclado, com foco visível customizado.
- Link de pular para o conteúdo principal ("skip link").
- Gaveta de filtros em mobile com controle de foco e fechamento por Esc.
- Rótulos (`label`, `aria-label`, `aria-describedby`) em todos os campos.
- Texto alternativo no brasão e alternativa textual nos fluxogramas (listas ordenadas
  semânticas, não apenas imagem).
- Contraste de cores compatível com AA na paleta institucional.
- `prefers-reduced-motion` respeitado (redução de animações).
- Alvos de toque com no mínimo 44×44px nos controles interativos principais.
- Camada de anúncio (`aria-live`) para o número de seções encontradas na busca.

**Limitação conhecida:** a auditoria de acessibilidade foi feita por revisão de código e
boas práticas (não foi executada uma auditoria automatizada com ferramenta como axe-core
ou Lighthouse neste ambiente). Recomenda-se essa auditoria complementar antes da
homologação final.

## 13. Segurança e privacidade

- Nenhuma credencial, senha, chave, token ou dado pessoal está presente no código.
- A entrada do campo de busca é sanitizada (remoção de marcações HTML e caracteres de
  controle) antes de ser usada para comparação de texto.
- Não há renderização de HTML não confiável (`dangerouslySetInnerHTML` não é utilizado).
- Não há dependência de banco de dados, API externa ou arquivo de segredos.
- `.gitignore` exclui `.env`, `node_modules`, build e arquivos de IDE.

## 14. Limitações desta entrega

- Seções sem texto normativo fornecido estão marcadas como pendentes (ver seção 8 deste
  README).
- O arquivo oficial do brasão do Estado de Goiás não foi incluído (ver seção 7).
- Homologação pela unidade responsável da SES-GO ainda não realizada.
- Nenhum repositório remoto, publicação ou conta foi criado nesta entrega.
- Auditoria automatizada de acessibilidade (axe/Lighthouse) não executada neste
  ambiente — recomendada antes da publicação.

## 15. Licença institucional

Uso interno da Secretaria de Estado da Saúde de Goiás — SES-GO. Definir formalmente a
licença de distribuição do código (por exemplo, licença institucional do Governo de
Goiás) antes da publicação do repositório.
