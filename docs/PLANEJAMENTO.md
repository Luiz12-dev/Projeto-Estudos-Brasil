# Planejamento — Mapa Histórico do Brasil

Documento de referência: [`CLAUDE.md`](../CLAUDE.md).

## Decisões tomadas

| # | Decisão | Motivo |
|---|---|---|
| D1 | Mapa SVG obtido da API de malhas do IBGE, com origem registrada no topo do arquivo | Seção 8 exige base pública ou do IBGE |
| D2 | Em produção, entradas com `verificado: false` aparecem como "Conteúdo em curadoria", sem texto nem fonte | Seção 6: nada não verificado em produção, sem bloquear o deploy durante a curadoria |
| D3 | Em desenvolvimento (`npm run dev`), entradas não verificadas aparecem com o aviso "não verificado" | Permite ao curador revisar o conteúdo antes de marcar `verificado: true` |
| D4 | `main` sempre estável; cada fase em uma branch `feat/*`, `ci/*` ou `docs/*` integrada com merge | Histórico organizado e deploy sempre a partir de código revisado |
| D5 | Commits no padrão Conventional Commits | Histórico legível |
| D6 | Entradas em conferência aparecem no site com aviso visível (substitui D2) | Pedido do Luiz em 2026-10-20 para o site ficar utilizável antes do fim da conferência; reversível em `src/painel.ts` |
| D7 | Várias curiosidades por recorte: entradas repetidas com a mesma `uf`, navegação Anterior/Próxima | Pedido do Luiz em 2026-10-20; o schema de `types.ts` não muda |
| D8 | Identidade visual "Terra Brasilis" (urucum, jenipapo, argila) com modo escuro "Noite"; regiões do IBGE em tons de bioma; destaque com contorno duplo, esmaecer, zoom ao selecionar, hachura nos visitados, transição no painel | Proposta aprovada pelo Luiz em 2026-10-20 (https://claude.ai/artifact/1H39YACnGyUWFHYyWkMFXm); sem bibliotecas nem fontes externas, respeita "reduzir movimento" |
| D9 | Layout em cartões: faixa de cabeçalho, mapa e painel lado a lado no computador (painel fixo ao rolar), painel em blocos (cabeçalho, texto, pergunta, fonte e ações), lista de estados agrupada por região | Pedido do Luiz em 2026-10-26 por um visual mais organizado e sólido |

## Fases

| Fase | Entrega | Status |
|---|---|---|
| 0. Base | Vite + TypeScript strict, sem framework; README, CLAUDE.md, planejamento | concluída |
| 1. Dados | `types.ts` conforme o schema; `curiosidades.json` com 28 entradas TODO (26 estados, DF e BR) | concluída |
| 2. Mapa | SVG inline com `aria-label` e teclado em cada UF; lista de estados como alternativa | concluída — malha do IBGE, testada em 360 px |
| 3. Painel | Título, período, texto, pergunta, fonte visível, botão Copiar | concluída |
| 4. Visitados | `storage.ts` como único acesso ao localStorage; marcação com ícone e texto, não só cor | concluída |
| 5. Visual | CSS puro, mobile-first, 360 px, contraste AA | concluída — testado em 360 px |
| 6. Deploy | GitHub Actions → GitHub Pages | concluída — https://luiz12-dev.github.io/Projeto-Estudos-Brasil/ |
| 7. Curadoria | 28 entradas pesquisadas pelo agente (regra 7.1); conferência e `verificado: true` | pesquisa concluída; **conferência humana — Luiz** |
| 8. Várias curiosidades | Navegação Anterior/Próxima no painel; entradas em conferência visíveis com aviso (D6, D7) | concluída — 80 curiosidades: 3 em 24 recortes, 2 em AP, MT, PB e TO |
| 9. Visual | Paleta Terra Brasilis/Noite, cores por região com legenda, destaque, zoom, hachura, carimbo e transição (D8) | concluída — +3 KB gzip; testada em 360 px, nos dois temas e com "reduzir movimento" |
| 10. Layout | Cartões, boas-vindas com passos, painel em blocos, lista por região, cabeçalho e rodapé em faixa (D9) | concluída — testada em 360 px e 1280 px, nos dois temas |

## Pendências

- [x] **SVG do mapa:** malha de UFs da API do IBGE, origem registrada no topo de `public/brasil.svg`.
- [ ] **Conferência das 80 entradas:** abrir cada fonte, conferir o trecho em `docs/EVIDENCIAS.md` e marcar `verificado: true`.
- [ ] **Campos `ano` como TODO:** BA, MA (IBGE Educa), DF, MT e PR — as páginas não mostram a data de publicação.
- [ ] **Fontes fora da lista do CLAUDE.md ou sem revisão por pares:** ES (TCC), RN (e-book PIBID), RO (Observatório Fiocruz), MT (Ministério da Saúde/Fiocruz), PR (projeto de extensão UFPR). Decidir se são aceitáveis.
- [ ] **Tamanho dos textos:** têm de 260 a 510 caracteres, mais que as "4 a 6 linhas" do schema em tela de celular. Decidir se é preciso encurtar.
- [x] **GitHub Pages:** ativado com *Source: GitHub Actions*.

## Checklist "Pronto quando" (seção 9)

- [x] Carrega em menos de 3 s em 4G — site publicado medido com perfil "Slow 4G" (1,6 Mbps, 150 ms): mapa interativo em 2,2 s, 56 KB transferidos, já com o novo visual (2026-10-20)
- [x] Funciona em tela de 360 px de largura — testado sem rolagem horizontal
- [ ] Todas as entradas (80) com `verificado: true` — **depende da conferência humana**; enquanto isso, aparecem com aviso (D6)
- [ ] Toda URL de fonte abre e corresponde ao fato afirmado — as URLs das 80 entradas foram abertas na pesquisa; a correspondência é parte da conferência humana
- [x] Navegável por teclado, com lista alternativa ao mapa — Tab/Enter/Espaço no mapa e na lista
- [x] `npm run build` sem erro e sem warning de TypeScript
- [x] Zero dependências de runtime — só `vite` e `typescript` em devDependencies
