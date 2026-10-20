# Mapa Histórico do Brasil

Site estático com um mapa clicável do Brasil. Ao tocar em um estado (ou em "Brasil"), a pessoa lê uma curiosidade histórica com a fonte visível e uma pergunta para discussão em sala.

Trabalho da unidade curricular **Informática Aplicada à Educação** — Tecnologia em Sistemas para Internet, **IFPR Campus Jacarezinho**.

## Tecnologias

- [Vite](https://vite.dev/) + TypeScript (`strict`)
- HTML, CSS e SVG puros — **zero dependências de runtime**
- Deploy automático no GitHub Pages via GitHub Actions

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # checagem de tipos + build de produção em dist/
npm run preview  # serve o build localmente
```

## Estrutura

```
public/
  data/curiosidades.json   conteúdo (28 entradas: 26 estados, DF e BR)
  brasil.svg               mapa (base IBGE)
src/
  types.ts     schema dos dados
  main.ts      inicialização
  mapa.ts      mapa SVG e lista de estados
  painel.ts    exibição da curiosidade
  storage.ts   único módulo que acessa o localStorage
  style.css
docs/PLANEJAMENTO.md       fases, decisões e pendências
CLAUDE.md                  documento de fundamentação do projeto
```

## Conteúdo e curadoria

Cada entrada de `public/data/curiosidades.json` segue o schema de `src/types.ts`. Toda entrada nova começa com `"verificado": false` e só deve ser marcada como `true` depois que uma pessoa abrir a fonte e confirmar o fato.

No site publicado, entradas não verificadas aparecem como **"Conteúdo em curadoria"**. No modo de desenvolvimento, elas aparecem com o aviso "não verificado" para revisão.

As 28 entradas foram pesquisadas conforme a seção 7.1 do `CLAUDE.md`. O link e o trecho de cada fonte estão em [`docs/EVIDENCIAS.md`](docs/EVIDENCIAS.md), que tem uma lista de conferência no topo.

Regras completas: seção 7 do [`CLAUDE.md`](CLAUDE.md).

## Mapa

`public/brasil.svg` vem da API de Malhas do IBGE (divisão por UF). A origem está registrada em um comentário no topo do arquivo. Cada estado é um `<path>` com `data-uf="SIGLA"`.

## Privacidade

Nenhum dado sai do dispositivo. O `localStorage` guarda apenas a lista de siglas das UFs já visitadas.
