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
