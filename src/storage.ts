// Único módulo que acessa o localStorage. Guarda apenas as siglas visitadas.
const CHAVE = 'mapa-historico:visitados';

export function lerVisitados(): Set<string> {
  try {
    const salvo: unknown = JSON.parse(localStorage.getItem(CHAVE) ?? '[]');
    return new Set(Array.isArray(salvo) ? salvo.filter((x) => typeof x === 'string') : []);
  } catch {
    return new Set();
  }
}

export function salvarVisitado(uf: string): Set<string> {
  const visitados = lerVisitados().add(uf);
  try {
    localStorage.setItem(CHAVE, JSON.stringify([...visitados]));
  } catch {
    // Sem armazenamento (ex.: navegação privada): segue sem persistir.
  }
  return visitados;
}
