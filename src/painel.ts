import { NOME_REGIAO, REGIAO_DE } from './mapa';
import type { Curiosidade } from './types';

// Decisão do Luiz em 2026-10-20: mostrar em produção as entradas ainda não
// conferidas, com aviso visível. Para voltar à regra original do CLAUDE.md
// (seção 6), troque para false: entradas com verificado: false somem do site.
const MOSTRAR_EM_CONFERENCIA = true;

function el<K extends keyof HTMLElementTagNameMap>(tag: K, texto = '', classe = '') {
  const e = document.createElement(tag);
  if (texto) e.textContent = texto;
  if (classe) e.className = classe;
  return e;
}

function botao(texto: string, classe: string, aoClicar: () => void): HTMLButtonElement {
  const b = el('button', texto, classe);
  b.type = 'button';
  b.addEventListener('click', aoClicar);
  return b;
}

export function visiveis(lista: Curiosidade[]): Curiosidade[] {
  if (MOSTRAR_EM_CONFERENCIA || !import.meta.env.PROD) return lista;
  return lista.filter((c) => c.verificado);
}

type ComTransicao = Document & { startViewTransition?: (atualizar: () => void) => unknown };
const reduzMovimento = matchMedia('(prefers-reduced-motion: reduce)');

// Troca o conteúdo do painel com uma transição curta (View Transitions quando houver;
// senão, um deslize em CSS). Sem animação para quem pede menos movimento.
function trocar(painel: HTMLElement, atualizar: () => void): void {
  const doc = document as ComTransicao;
  if (reduzMovimento.matches) return atualizar();
  if (doc.startViewTransition) {
    doc.startViewTransition(atualizar);
    return;
  }
  atualizar();
  painel.classList.remove('troca');
  void painel.offsetWidth;
  painel.classList.add('troca');
}

export function renderizar(painel: HTMLElement, nome: string, todas: Curiosidade[], indice = 0, uf = ''): void {
  trocar(painel, () => montar(painel, nome, todas, indice, uf));
}

function montar(painel: HTMLElement, nome: string, todas: Curiosidade[], indice: number, uf: string): void {
  const lista = visiveis(todas);
  painel.replaceChildren();
  const cabecalho = el('div', '', 'cabecalho');
  cabecalho.append(el('p', nome, 'recorte'));
  const regiao = REGIAO_DE[uf];
  if (regiao) {
    const chip = el('span', NOME_REGIAO[regiao], 'chip-regiao');
    chip.dataset.regiao = regiao;
    cabecalho.append(chip);
  }
  painel.append(cabecalho);

  const c = lista[indice];
  if (!c) {
    painel.append(el('h2', 'Conteúdo em curadoria'));
    painel.append(el('p', 'As curiosidades deste recorte ainda estão sendo verificadas.'));
    return;
  }

  if (lista.length > 1) painel.append(el('p', `Curiosidade ${indice + 1} de ${lista.length}`, 'contador'));
  if (!c.verificado) {
    const aviso = el('p', '', 'carimbo');
    aviso.append(el('strong', 'Em conferência'), ' Fonte ainda não revisada pelo curador. Confira o link abaixo.');
    painel.append(aviso);
  }
  painel.append(el('h2', c.titulo));
  if (c.periodo) painel.append(el('p', c.periodo, 'periodo'));
  painel.append(el('p', c.texto, 'texto'));

  const pergunta = el('div', '', 'pergunta');
  pergunta.append(el('h3', 'Para discutir'), el('p', c.pergunta));
  painel.append(pergunta);

  const fonte = el('p', 'Fonte: ', 'fonte');
  const { nome: org, ano, url } = c.fonte;
  const rotulo = ano.startsWith('TODO') ? org : `${org} (${ano})`;
  if (url.startsWith('https://') || url.startsWith('http://')) {
    const a = el('a', rotulo);
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    fonte.append(a);
  } else {
    fonte.append(rotulo);
  }
  painel.append(fonte);

  const status = el('span', '', 'status');
  status.setAttribute('role', 'status');
  const copiar = botao('Copiar texto', 'copiar', async () => {
    const conteudo = `${c.titulo}\n\n${c.texto}\n\nPara discutir: ${c.pergunta}\n\nFonte: ${rotulo} — ${url}`;
    try {
      await navigator.clipboard.writeText(conteudo);
      status.textContent = 'Copiado!';
    } catch {
      status.textContent = 'Não foi possível copiar.';
    }
  });
  const acoes = el('div', '', 'acoes');
  acoes.append(copiar, status);
  painel.append(acoes);

  if (lista.length > 1) {
    const ir = (i: number) => {
      renderizar(painel, nome, todas, (i + lista.length) % lista.length, uf);
      painel.focus({ preventScroll: true });
    };
    const nav = el('div', '', 'navegacao');
    nav.append(
      botao('← Anterior', 'anterior', () => ir(indice - 1)),
      botao('Próxima →', 'proxima', () => ir(indice + 1)),
    );
    painel.append(nav);
  }
}
