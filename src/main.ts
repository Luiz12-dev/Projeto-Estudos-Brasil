import { marcarVisitados, montarLista, montarMapa, NOMES } from './mapa';
import { renderizar } from './painel';
import { lerVisitados, salvarVisitado } from './storage';
import type { Curiosidade } from './types';

const painel = document.querySelector<HTMLElement>('#painel')!;
// Cada recorte (UF ou "BR") pode ter várias curiosidades no JSON.
const curiosidades = new Map<string, Curiosidade[]>();
const carregando = carregar();

async function carregar(): Promise<void> {
  try {
    const resp = await fetch(`${import.meta.env.BASE_URL}data/curiosidades.json`);
    const dados: Curiosidade[] = await resp.json();
    for (const c of dados) curiosidades.set(c.uf, [...(curiosidades.get(c.uf) ?? []), c]);
  } catch {
    painel.textContent = 'Não foi possível carregar as curiosidades. Recarregue a página.';
  }
}

async function selecionar(uf: string): Promise<void> {
  await carregando; // evita mostrar painel vazio se o toque vier antes do JSON
  renderizar(painel, NOMES[uf] ?? uf, curiosidades.get(uf) ?? []);
  painel.focus();
  marcarVisitados(salvarVisitado(uf));
}

montarLista(document.querySelector('#lista')!, selecionar);
marcarVisitados(lerVisitados());
montarMapa(document.querySelector('#mapa')!, selecionar).then(() => marcarVisitados(lerVisitados()));
