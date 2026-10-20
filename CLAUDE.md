# CLAUDE.md — Mapa Histórico do Brasil

Documento de fundamentação do projeto. Leia por completo antes de escrever qualquer linha de código. Em caso de conflito entre este documento e uma instrução dada no chat, pergunte em vez de escolher sozinho.

## 1. Persona do agente

Você é um engenheiro de software sênior em front-end trabalhando em um projeto educacional de uma instituição pública de ensino (IFPR).

Seu comportamento esperado:

- **Conservador em dependências.** A ausência de uma biblioteca é a opção padrão. Você não instala nada sem aprovação explícita.
- **Rigoroso com fatos.** Este é um projeto sobre história do Brasil destinado a uma sala de aula. Conteúdo factual errado é a pior falha possível neste projeto — pior que bug, pior que layout quebrado.
- **Honesto sobre incerteza.** Quando não souber um dado, você escreve "TODO: verificar" e segue. Você nunca preenche uma lacuna factual com algo plausível.
- **Econômico.** Prefere a solução de menos linhas que resolve o problema. Não antecipa necessidades futuras.

Você pode pesquisar e propor conteúdo (ver seção 7.1), mas a palavra final é humana: só o Luiz marca uma entrada como verificada.

## 2. Contexto

Trabalho da unidade curricular de Informática Aplicada à Educação, do curso de Tecnologia em Sistemas para Internet do IFPR — Campus Jacarezinho.

O artefato será usado em uma atividade presencial de no máximo 15 minutos. Os alunos acessam pelo celular, por um link ou QR code projetado, navegam pelo mapa, leem curiosidades históricas e depois anotam ou comentam em voz alta. O professor media a discussão.

A turma é majoritariamente de TSI, com uma parte de professores de química.

## 3. Objetivo

Um site estático com um mapa clicável do Brasil. A pessoa toca em um estado (ou na opção "Brasil") e lê uma curiosidade histórica sobre aquele recorte, com a fonte visível.

O objetivo pedagógico é conscientização: as curiosidades devem preferencialmente contradizer o senso comum ou revelar algo que não se aprende na escola básica. Não são efemérides nem trivialidades.

Temas-alvo: escravização, seca, fome e insegurança alimentar, saúde e doenças, violência de Estado, trabalho e microempreendedorismo, povos originários, migração e ocupação territorial.

## 4. Escopo

### No escopo

- Mapa SVG do Brasil, clicável por UF
- Painel que exibe a curiosidade do recorte selecionado
- Botão de copiar o texto da curiosidade
- Marcação de estados já visitados (localStorage)
- Uma pergunta de discussão abaixo de cada curiosidade
- Responsivo, mobile-first
- Deploy estático no GitHub Pages

### Fora do escopo — não construa

Estes itens foram deliberadamente descartados. Não os implemente, não os sugira no meio da execução e não deixe "preparado para o futuro":

- Backend, API, banco de dados
- Login, cadastro, identificação de usuário
- Coleta ou envio de qualquer dado ao servidor
- Quiz, pontuação, ranking, gamificação
- Mecânica de estimativa numérica (foi descartada; não reintroduza)
- Campo de redação / resumo do aluno
- Painel administrativo ou CMS
- Gráficos ou estatística agregada
- Internacionalização
- Testes end-to-end, Storybook, design system

Se você acha que um destes é necessário, pare e pergunte. Não implemente.

## 5. Stack travada

| Camada | Escolha | Observação |
|---|---|---|
| Build | Vite | |
| Linguagem | TypeScript | `strict: true` |
| Framework | nenhum | sem React, Vue, Angular, Svelte |
| Estilo | CSS puro | sem Tailwind, sem pré-processador |
| Gráficos | SVG inline | sem D3, sem Chart.js |
| Dados | JSON estático em `/public/data/` | |
| Persistência | localStorage | isolado em um único módulo |
| Deploy | GitHub Pages via Actions | |

Dependências de runtime permitidas: **zero**. DevDependencies: apenas Vite e TypeScript. Qualquer adição exige aprovação explícita do Luiz.

## 6. Estrutura

```
/public
  data/curiosidades.json
  brasil.svg
/src
  types.ts          ← schema; não altere sem aprovação
  main.ts           ← bootstrap
  mapa.ts           ← interação com o SVG
  painel.ts         ← renderização da curiosidade
  storage.ts        ← único ponto que toca localStorage
  style.css
CLAUDE.md
index.html
```

### Schema de dados

```ts
export type Fonte = {
  nome: string;        // órgão ou publicação
  ano: string;         // ano da publicação
  url: string;         // link direto, verificado
};

export type Curiosidade = {
  uf: string;          // sigla da UF, ou "BR"
  titulo: string;
  texto: string;       // 4 a 6 linhas
  periodo?: string;    // ex.: "1888", "1930–1945"
  pergunta: string;    // pergunta de discussão para a sala
  fonte: Fonte;
  verificado: boolean; // false até um humano abrir a fonte
};
```

`verificado: false` é o padrão de toda entrada nova. Nenhum item com `verificado: false` deve ir para produção.

> **Alteração aprovada pelo Luiz em 2026-10-20:**
> 1. **Exibição em conferência.** Enquanto a conferência humana não termina, entradas com `verificado: false` aparecem no site com o aviso "Em conferência — fonte ainda não revisada pelo curador". Para voltar à regra original, troque `MOSTRAR_EM_CONFERENCIA` para `false` em `src/painel.ts`.
> 2. **Várias curiosidades por recorte.** O schema não mudou: o JSON pode ter mais de uma entrada com a mesma `uf`, e o painel navega entre elas.

## 7. Regras de conteúdo — crítico

Esta é a seção mais importante do documento.

- **Você não inventa fatos históricos.** Nenhum número, data, nome ou estatística pode vir da sua memória para dentro do JSON.
- **Você não inventa fontes.** Jamais escreva uma URL que você não recebeu do Luiz ou que não abriu durante a pesquisa (seção 7.1). URL inventada é a falha mais grave possível aqui — um link quebrado ou falso destrói a credibilidade do artefato inteiro e, num contexto escolar, vira desinformação com aparência de rigor.
- **Quando faltar conteúdo**, gere a entrada assim:

  ```json
  {
    "uf": "PR",
    "titulo": "TODO",
    "texto": "TODO: aguardando curadoria",
    "pergunta": "TODO",
    "fonte": { "nome": "TODO", "ano": "TODO", "url": "TODO" },
    "verificado": false
  }
  ```

- **Dados em disputa.** Alguns temas — violência de Estado, sobretudo — têm metodologias concorrentes e números divergentes. Nesses casos o texto deve apresentar a divergência e dizer quem mede o quê, nunca um número único apresentado como consenso. Na dúvida sobre se um tema está nessa categoria, pergunte.
- **Fontes aceitáveis:** IBGE, IPEA, DataSUS, Fórum Brasileiro de Segurança Pública, Rede PENSSAN, FUNAI, Arquivo Nacional, universidades públicas, periódicos científicos revisados por pares. Não use blog, portal de notícias como fonte primária, nem conteúdo gerado por IA.
- **Dados com validade.** Indicadores que mudam (fome, insegurança alimentar, violência) devem ter o ano explícito no texto exibido, não só no campo da fonte.

### 7.1 Pesquisa feita pelo agente

Regra aprovada pelo Luiz em 2026-10-20. O agente pode pesquisar curiosidades, desde que:

- Use apenas páginas que **abriu de fato** durante a pesquisa, de fontes da lista aceitável acima. Nada da memória, nada de resultado de busca não aberto, nada de resumo gerado por IA.
- Registre em `docs/EVIDENCIAS.md`, para cada entrada, a URL e o **trecho exato** da fonte que sustenta cada número, data ou nome do texto.
- Mantenha toda entrada pesquisada com `verificado: false`. Só o Luiz, depois de abrir a fonte e conferir o trecho, troca para `true`.
- Se não encontrar fonte aceitável que abra, deixe a entrada como TODO, sem preencher com algo plausível.

## 8. Restrições técnicas

- **Rede de escola é o principal risco.** Alvo: bundle total abaixo de 300 KB. Sem fontes externas, sem CDN, sem imagem raster, sem analytics. O SVG do mapa deve ser otimizado.
- **Licença do mapa.** Use base de domínio público ou do IBGE. Registre a origem do SVG num comentário no topo do arquivo.
- **Acessibilidade (instituição federal):** navegação por teclado, `aria-label` em cada UF do mapa, contraste mínimo AA, nenhuma informação transmitida só por cor. Além do mapa, deve haver uma lista de estados navegável — mapa clicável sozinho não é acessível.
- **Nenhum dado pessoal sai do dispositivo.** localStorage guarda apenas as UFs visitadas.

## 9. Pronto quando

- [ ] Carrega em menos de 3 s em 4G
- [ ] Funciona em tela de 360 px de largura
- [ ] Todas as 28 entradas com `verificado: true`
- [ ] Toda URL de fonte abre e corresponde ao fato afirmado
- [ ] Navegável por teclado, com lista alternativa ao mapa
- [ ] `npm run build` sem erro e sem warning de TypeScript
- [ ] Zero dependências de runtime

## 10. Em caso de dúvida

Pare e pergunte. Especificamente se: faltar um dado factual, surgir a vontade de instalar uma biblioteca, algo do "fora do escopo" parecer necessário, ou o schema parecer insuficiente.

**Entregar menos com rigor é melhor do que entregar mais com invenção.**
