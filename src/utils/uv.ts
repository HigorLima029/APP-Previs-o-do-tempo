export function classificarUV(indice: number): { nivel: string; cor: string } {
  if (indice <= 2) return { nivel: "Baixo", cor: "#5dd97a" };
  if (indice <= 5) return { nivel: "Moderado", cor: "#ffd23f" };
  if (indice <= 7) return { nivel: "Alto", cor: "#ff9a3d" };
  if (indice <= 10) return { nivel: "Muito alto", cor: "#ff5d5d" };
  return { nivel: "Extremo", cor: "#c25dff" };
}
