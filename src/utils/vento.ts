const PONTOS_CARDEAIS = ["N", "NE", "L", "SE", "S", "SO", "O", "NO"];

export function direcaoVentoParaLabel(graus: number): string {
  const indice = Math.round(graus / 45) % 8;
  return PONTOS_CARDEAIS[indice];
}
