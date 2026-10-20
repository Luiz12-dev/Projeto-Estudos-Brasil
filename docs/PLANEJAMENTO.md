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

## Fases

| Fase | Entrega | Status |
|---|---|---|
| 0. Base | Vite + TypeScript strict, sem framework; README, CLAUDE.md, planejamento | concluída |
| 1. Dados | `types.ts` conforme o schema; `curiosidades.json` com 28 entradas TODO (26 estados, DF e BR) | concluída |
| 2. Mapa | SVG inline com `aria-label` e teclado em cada UF; lista de estados como alternativa | código pronto; **SVG pendente** (ver Pendências) |
| 3. Painel | Título, período, texto, pergunta, fonte visível, botão Copiar | concluída |
| 4. Visitados | `storage.ts` como único acesso ao localStorage; marcação com ícone e texto, não só cor | concluída |
| 5. Visual | CSS puro, mobile-first, 360 px, contraste AA | concluída — testado em 360 px |
| 6. Deploy | GitHub Actions → GitHub Pages | workflow pronto; ativar Pages no repositório |
| 7. Curadoria | Preencher as 28 entradas com fonte e `verificado: true` | **humana — Luiz** |

## Pendências

- [ ] **SVG do mapa:** o ambiente de desenvolvimento não alcança `servicodados.ibge.gov.br`. Obter o SVG e normalizá-lo (ver `public/brasil.svg` e o README).
- [ ] **Curadoria:** 28 entradas em `public/data/curiosidades.json`.
- [ ] **GitHub Pages:** em *Settings → Pages*, escolher *Source: GitHub Actions*.

## Checklist "Pronto quando" (seção 9)

- [ ] Carrega em menos de 3 s em 4G
- [ ] Funciona em tela de 360 px de largura
- [ ] Todas as 28 entradas com `verificado: true`
- [ ] Toda URL de fonte abre e corresponde ao fato afirmado
- [ ] Navegável por teclado, com lista alternativa ao mapa
- [ ] `npm run build` sem erro e sem warning de TypeScript
- [ ] Zero dependências de runtime
