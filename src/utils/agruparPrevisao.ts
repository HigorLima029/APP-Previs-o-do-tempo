import type { OpenWeatherForecastResponse, PrevisaoDia } from "../types/weather";
import { definirTema } from "./weatherTheme";

function nomeDoDia(indice: number, timestampSegundos: number) {
  if (indice === 0) return "Hoje";
  if (indice === 1) return "Amanhã";

  const data = new Date(timestampSegundos * 1000);
  const nome = data.toLocaleDateString("pt-BR", { weekday: "short" });
  // "seg." -> "Seg"
  return nome.replace(".", "").replace(/^\w/, (c) => c.toUpperCase());
}

export function agruparPorDia(previsao: OpenWeatherForecastResponse): PrevisaoDia[] {
  const porData = new Map<string, OpenWeatherForecastResponse["list"]>();

  for (const item of previsao.list) {
    const chaveData = item.dt_txt.split(" ")[0]; // "YYYY-MM-DD"
    const grupo = porData.get(chaveData) ?? [];
    grupo.push(item);
    porData.set(chaveData, grupo);
  }

  const dias = Array.from(porData.entries()).slice(0, 5);

  return dias.map(([, itensDoDia], indice) => {
    const minima = Math.round(Math.min(...itensDoDia.map((i) => i.main.temp_min)));
    const maxima = Math.round(Math.max(...itensDoDia.map((i) => i.main.temp_max)));

    // Usa o horário mais próximo do meio-dia como representante do dia (ícone/descrição)
    const representante = itensDoDia.reduce((maisProximo, atual) => {
      const horaAtual = new Date(atual.dt * 1000).getHours();
      const horaMaisProxima = new Date(maisProximo.dt * 1000).getHours();
      return Math.abs(horaAtual - 12) < Math.abs(horaMaisProxima - 12) ? atual : maisProximo;
    });

    const clima = representante.weather[0];

    return {
      data: representante.dt,
      diaSemana: nomeDoDia(indice, representante.dt),
      minima,
      maxima,
      tema: definirTema(clima.id, false),
      descricao: clima.description,
    };
  });
}
