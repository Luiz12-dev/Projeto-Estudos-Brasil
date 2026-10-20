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

type AoSelecionar = (uf: string) => void;

// Carrega o SVG inline para que cada UF (elemento com data-uf) seja interativa.
export async function montarMapa(el: HTMLElement, aoSelecionar: AoSelecionar): Promise<void> {
  try {
    const resp = await fetch(`${import.meta.env.BASE_URL}brasil.svg`);
    const svg = resp.ok ? await resp.text() : '';
    if (!svg.includes('data-uf=')) throw new Error('SVG ausente');
    el.innerHTML = svg;
  } catch {
    el.innerHTML = '<p class="aviso">Mapa indisponível. Use a lista de estados abaixo.</p>';
    return;
  }
  el.querySelector('svg')?.setAttribute('role', 'group');
  el.querySelectorAll<SVGElement>('[data-uf]').forEach((uf) => {
    const sigla = uf.dataset.uf ?? '';
    uf.setAttribute('role', 'button');
    uf.setAttribute('tabindex', '0');
    uf.setAttribute('aria-label', NOMES[sigla] ?? sigla);
    uf.addEventListener('click', () => aoSelecionar(sigla));
    uf.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        aoSelecionar(sigla);
      }
    });
  });
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
