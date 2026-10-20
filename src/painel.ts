import type { Curiosidade } from './types';

function el<K extends keyof HTMLElementTagNameMap>(tag: K, texto = '', classe = '') {
  const e = document.createElement(tag);
  if (texto) e.textContent = texto;
  if (classe) e.className = classe;
  return e;
}

// Em produção, entradas não verificadas nunca são exibidas (CLAUDE.md, seção 6).
export function renderizar(painel: HTMLElement, nome: string, c?: Curiosidade): void {
  painel.replaceChildren();
  painel.append(el('p', nome, 'recorte'));

  if (!c || (!c.verificado && import.meta.env.PROD)) {
    painel.append(el('h2', 'Conteúdo em curadoria'));
    painel.append(el('p', 'A curiosidade deste recorte ainda está sendo verificada.'));
    return;
  }

  if (!c.verificado) painel.append(el('p', '⚠ Não verificado — visível só em desenvolvimento', 'alerta'));
  painel.append(el('h2', c.titulo));
  if (c.periodo) painel.append(el('p', c.periodo, 'periodo'));
  painel.append(el('p', c.texto, 'texto'));

  const pergunta = el('div', '', 'pergunta');
  pergunta.append(el('h3', 'Para discutir'), el('p', c.pergunta));
  painel.append(pergunta);

  const fonte = el('p', 'Fonte: ', 'fonte');
  const { nome: org, ano, url } = c.fonte;
  if (url.startsWith('https://') || url.startsWith('http://')) {
    const a = el('a', `${org} (${ano})`);
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    fonte.append(a);
  } else {
    fonte.append(`${org} (${ano})`);
  }
  painel.append(fonte);

  const status = el('span', '', 'status');
  status.setAttribute('role', 'status');
  const copiar = el('button', 'Copiar texto', 'copiar');
  copiar.type = 'button';
  copiar.addEventListener('click', async () => {
    const conteudo = `${c.titulo}\n\n${c.texto}\n\nPara discutir: ${c.pergunta}\n\nFonte: ${org} (${ano}) — ${url}`;
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
}
