import { montarLista, montarMapa, NOMES } from './mapa';
import { renderizar } from './painel';
import type { Curiosidade } from './types';

const painel = document.querySelector<HTMLElement>('#painel')!;
const curiosidades = new Map<string, Curiosidade>();

function selecionar(uf: string): void {
  renderizar(painel, NOMES[uf] ?? uf, curiosidades.get(uf));
  painel.focus();
}

async function iniciar(): Promise<void> {
  montarLista(document.querySelector('#lista')!, selecionar);
  montarMapa(document.querySelector('#mapa')!, selecionar);
  try {
    const resp = await fetch(`${import.meta.env.BASE_URL}data/curiosidades.json`);
    const dados: Curiosidade[] = await resp.json();
    for (const c of dados) curiosidades.set(c.uf, c);
  } catch {
    painel.textContent = 'Não foi possível carregar as curiosidades. Recarregue a página.';
  }
}

iniciar();
