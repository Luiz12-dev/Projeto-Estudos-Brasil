import { marcarVisitados, montarLista, montarMapa, NOMES } from './mapa';
import { renderizar } from './painel';
import { lerVisitados, salvarVisitado } from './storage';
import type { Curiosidade } from './types';

const painel = document.querySelector<HTMLElement>('#painel')!;
const curiosidades = new Map<string, Curiosidade>();

function selecionar(uf: string): void {
  renderizar(painel, NOMES[uf] ?? uf, curiosidades.get(uf));
  painel.focus();
  marcarVisitados(salvarVisitado(uf));
}

async function iniciar(): Promise<void> {
  montarLista(document.querySelector('#lista')!, selecionar);
  marcarVisitados(lerVisitados());
  montarMapa(document.querySelector('#mapa')!, selecionar).then(() => marcarVisitados(lerVisitados()));
  try {
    const resp = await fetch(`${import.meta.env.BASE_URL}data/curiosidades.json`);
    const dados: Curiosidade[] = await resp.json();
    for (const c of dados) curiosidades.set(c.uf, c);
  } catch {
    painel.textContent = 'Não foi possível carregar as curiosidades. Recarregue a página.';
  }
}

iniciar();
