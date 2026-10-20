import { montarLista, montarMapa, NOMES } from './mapa';

const painel = document.querySelector<HTMLElement>('#painel')!;

function selecionar(uf: string): void {
  painel.textContent = NOMES[uf] ?? uf;
}

montarLista(document.querySelector('#lista')!, selecionar);
montarMapa(document.querySelector('#mapa')!, selecionar);
