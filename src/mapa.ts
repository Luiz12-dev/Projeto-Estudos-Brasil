export const NOMES: Record<string, string> = {
  BR: 'Brasil',
  AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia',
  CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás',
  MA: 'Maranhão', MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais',
  PA: 'Pará', PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí',
  RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul',
  RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo',
  SE: 'Sergipe', TO: 'Tocantins',
};

// Regiões do IBGE. As cores ficam no CSS (tokens --reg-*), para valer nos dois temas.
const REGIOES: Record<string, string> = {
  N: 'AC AM AP PA RO RR TO', NE: 'AL BA CE MA PB PE PI RN SE',
  CO: 'DF GO MS MT', SE: 'ES MG RJ SP', S: 'PR RS SC',
};
export const NOME_REGIAO: Record<string, string> = {
  N: 'Norte', NE: 'Nordeste', CO: 'Centro-Oeste', SE: 'Sudeste', S: 'Sul',
};
export const REGIAO_DE: Record<string, string> = {};
for (const [r, ufs] of Object.entries(REGIOES)) for (const uf of ufs.split(' ')) REGIAO_DE[uf] = r;

type AoSelecionar = (uf: string) => void;
const NS = 'http://www.w3.org/2000/svg';
const ESCALA = 0.0001; // a malha do IBGE usa scale(0.0001, -0.0001)
const reduzMovimento = matchMedia('(prefers-reduced-motion: reduce)');

let svg: SVGSVGElement | null = null;
let camadaVisitados: SVGGElement;
let camadaRealce: SVGGElement;
let botaoBrasil: HTMLButtonElement;
let vbInicial: number[] = [];
let vbAtual: number[] = [];
let ativo: string | null = null;
let apontado: string | null = null;
let visitados = new Set<string>();

const caminho = (uf: string) => svg?.querySelector<SVGPathElement>(`path.uf[data-uf="${uf}"]`) ?? null;
const rotulo = (uf: string) =>
  `${NOMES[uf] ?? uf}, região ${NOME_REGIAO[REGIAO_DE[uf]] ?? ''}${visitados.has(uf) ? ', visitado' : ''}`;

// Cópia decorativa de um estado (sem foco, sem identificação), para destaque e hachura.
function copia(uf: string, classe: string): SVGPathElement | null {
  const p = caminho(uf);
  if (!p) return null;
  const c = document.createElementNS(NS, 'path');
  c.setAttribute('d', p.getAttribute('d') ?? '');
  c.setAttribute('class', classe);
  return c;
}

// Carrega o SVG inline para que cada UF (elemento com data-uf) seja interativa.
export async function montarMapa(el: HTMLElement, aoSelecionar: AoSelecionar): Promise<void> {
  try {
    const resp = await fetch(`${import.meta.env.BASE_URL}brasil.svg`);
    const texto = resp.ok ? await resp.text() : '';
    if (!texto.includes('data-uf=')) throw new Error('SVG ausente');
    el.innerHTML = texto;
  } catch {
    el.innerHTML = '<p class="aviso">Mapa indisponível. Use a lista de estados abaixo.</p>';
    return;
  }
  svg = el.querySelector('svg');
  if (!svg) return;
  svg.setAttribute('role', 'group');
  svg.setAttribute('aria-label', 'Mapa do Brasil por estado');
  vbInicial = (svg.getAttribute('viewBox') ?? '').split(/\s+/).map(Number);
  vbAtual = vbInicial.slice();

  // Hachura dos visitados, desenhada no mesmo sistema de coordenadas da malha.
  const defs = document.createElementNS(NS, 'defs');
  defs.innerHTML =
    '<pattern id="hachura" patternUnits="userSpaceOnUse" width="5000" height="5000" patternTransform="rotate(45)">' +
    '<rect class="hachura-linha" width="1500" height="5000"/></pattern>';
  svg.prepend(defs);
  const grupo = svg.querySelector('g');
  camadaVisitados = document.createElementNS(NS, 'g');
  camadaRealce = document.createElementNS(NS, 'g');
  camadaRealce.setAttribute('class', 'realce');
  for (const c of [camadaVisitados, camadaRealce]) c.setAttribute('aria-hidden', 'true');
  grupo?.append(camadaVisitados, camadaRealce);

  botaoBrasil = document.createElement('button');
  botaoBrasil.type = 'button';
  botaoBrasil.className = 'ver-brasil';
  botaoBrasil.textContent = 'Ver o Brasil inteiro';
  botaoBrasil.hidden = true;
  botaoBrasil.addEventListener('click', () => aproximar(null));
  el.prepend(botaoBrasil);

  // Legenda: o nome de cada região acompanha a cor; a hachura indica visitados.
  const legenda = document.createElement('ul');
  legenda.className = 'legenda';
  legenda.setAttribute('aria-label', 'Legenda do mapa');
  for (const [r, nome] of Object.entries(NOME_REGIAO)) {
    const li = document.createElement('li');
    li.dataset.regiao = r;
    li.textContent = nome;
    legenda.append(li);
  }
  const vis = document.createElement('li');
  vis.className = 'visitado';
  vis.textContent = 'Visitado';
  legenda.append(vis);
  el.append(legenda);

  svg.querySelectorAll<SVGPathElement>('path[data-uf]').forEach((p) => {
    const uf = p.dataset.uf ?? '';
    p.classList.add('uf');
    p.dataset.regiao = REGIAO_DE[uf] ?? '';
    p.setAttribute('role', 'button');
    p.setAttribute('tabindex', '0');
    p.setAttribute('aria-label', rotulo(uf));
    p.addEventListener('pointerenter', () => destacar(uf));
    p.addEventListener('pointerleave', () => destacar(null));
    p.addEventListener('focus', () => destacar(uf));
    p.addEventListener('blur', () => destacar(null));
    p.addEventListener('click', () => aoSelecionar(uf));
    p.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        aoSelecionar(uf);
      }
    });
  });
  desenharVisitados();
}

function destacar(uf: string | null): void {
  apontado = uf;
  desenharRealce();
}

// Estado em destaque: o apontado (mouse, dedo ou foco) ou, na falta dele, o selecionado.
function desenharRealce(): void {
  if (!svg) return;
  const uf = apontado ?? ativo;
  const temEstado = !!uf && uf !== 'BR';
  svg.classList.toggle('com-destaque', temEstado);
  svg.querySelectorAll<SVGPathElement>('path.uf').forEach((p) => p.classList.toggle('ativo', p.dataset.uf === uf));
  camadaRealce.replaceChildren();
  if (!temEstado) return;
  const halo = copia(uf, 'contorno-halo');
  const frente = copia(uf, 'contorno');
  if (!halo || !frente) return;
  frente.dataset.regiao = REGIAO_DE[uf] ?? '';
  camadaRealce.classList.toggle('anima', !reduzMovimento.matches);
  camadaRealce.append(halo, frente);
  if (visitados.has(uf)) {
    const h = copia(uf, 'hachura');
    if (h) camadaRealce.append(h);
  }
}

function desenharVisitados(): void {
  if (!svg) return;
  camadaVisitados.replaceChildren();
  for (const uf of visitados) {
    const h = copia(uf, 'hachura');
    if (h) camadaVisitados.append(h);
  }
}

// Caixa de visão quadrada em volta do estado (y invertido pela escala negativa da malha).
function caixaDe(uf: string): number[] | null {
  const b = caminho(uf)?.getBBox();
  if (!b) return null;
  const x0 = b.x * ESCALA, x1 = (b.x + b.width) * ESCALA;
  const y0 = -(b.y + b.height) * ESCALA, y1 = -b.y * ESCALA;
  // Margem generosa: o estado fica no centro, mas os vizinhos continuam visíveis.
  const lado = Math.min(Math.max(x1 - x0, y1 - y0) * 2.2 + 9, vbInicial[2]);
  return [(x0 + x1) / 2 - lado / 2, (y0 + y1) / 2 - lado / 2, lado, lado];
}

let animacao = 0;
// Aproxima o mapa do estado (ou volta ao Brasil inteiro com null).
export function aproximar(uf: string | null): void {
  if (!svg) return;
  ativo = uf;
  desenharRealce();
  const alvo = (uf && uf !== 'BR' && caixaDe(uf)) || vbInicial;
  botaoBrasil.hidden = alvo === vbInicial;
  const de = vbAtual.slice();
  const id = ++animacao;
  if (reduzMovimento.matches) {
    vbAtual = alvo;
    svg.setAttribute('viewBox', alvo.join(' '));
    return;
  }
  const inicio = performance.now();
  const passo = (t: number) => {
    if (id !== animacao || !svg) return;
    const q = Math.min(1, (t - inicio) / 650);
    const e = 1 - Math.pow(1 - q, 3);
    vbAtual = de.map((v, i) => v + (alvo[i] - v) * e);
    svg.setAttribute('viewBox', vbAtual.join(' '));
    if (q < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}

export function montarLista(ul: HTMLElement, aoSelecionar: AoSelecionar): void {
  for (const [sigla, nome] of Object.entries(NOMES)) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.uf = sigla;
    btn.textContent = nome;
    btn.addEventListener('click', () => aoSelecionar(sigla));
    const li = document.createElement('li');
    li.append(btn);
    ul.append(li);
  }
}

// Visitado é indicado por hachura no mapa, texto "visitado" no aria-label
// e ícone ✓ na lista: nunca só por cor.
export function marcarVisitados(lista: Set<string>): void {
  visitados = new Set(lista);
  document.querySelectorAll<HTMLButtonElement>('#lista button[data-uf]').forEach((b) => {
    const uf = b.dataset.uf ?? '';
    const nome = NOMES[uf] ?? uf;
    const v = visitados.has(uf);
    b.classList.toggle('visitado', v);
    b.textContent = v ? `✓ ${nome}` : nome;
    b.setAttribute('aria-label', v ? `${nome}, visitado` : nome);
  });
  svg?.querySelectorAll<SVGPathElement>('path.uf').forEach((p) => p.setAttribute('aria-label', rotulo(p.dataset.uf ?? '')));
  desenharVisitados();
  desenharRealce();
}
