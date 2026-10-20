# Mapa Histórico do Brasil

Site estático com um mapa clicável do Brasil. Ao tocar em um estado (ou em "Brasil"), a pessoa lê curiosidades históricas (de 2 a 3 por recorte, 80 no total), com a fonte visível e uma pergunta para discussão em sala.

Site: https://luiz12-dev.github.io/Projeto-Estudos-Brasil/

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
  data/curiosidades.json   conteúdo (80 entradas; várias por recorte)
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

Enquanto a conferência não termina, entradas com `verificado: false` aparecem no site com o aviso **"Em conferência — fonte ainda não revisada pelo curador"** (decisão de 2026-10-20). Para escondê-las, troque `MOSTRAR_EM_CONFERENCIA` para `false` em `src/painel.ts`: elas passam a aparecer como "Conteúdo em curadoria".

As 80 entradas foram pesquisadas conforme a seção 7.1 do `CLAUDE.md`. O link e o trecho de cada fonte estão em [`docs/EVIDENCIAS.md`](docs/EVIDENCIAS.md), que tem uma lista de conferência no topo.

Regras completas: seção 7 do [`CLAUDE.md`](CLAUDE.md).

## Visual

Paleta "Terra Brasilis", inspirada nos pigmentos do urucum e do jenipapo sobre argila clara, com modo escuro automático ("Noite"). As cinco regiões do IBGE têm cores próprias, com legenda. Ao apontar ou focar um estado, ele ganha contorno duplo e os outros esmaecem. Ao selecionar, o mapa aproxima do estado (botão "Ver o Brasil inteiro" para voltar). Os estados visitados ganham hachura. Todas as animações respeitam a preferência "reduzir movimento" do aparelho. Tokens de cor e contrastes medidos estão no topo de `src/style.css`.

## Mapa

`public/brasil.svg` vem da API de Malhas do IBGE (divisão por UF). A origem está registrada em um comentário no topo do arquivo. Cada estado é um `<path>` com `data-uf="SIGLA"`.

## Privacidade

Nenhum dado sai do dispositivo. O `localStorage` guarda apenas a lista de siglas das UFs já visitadas.
