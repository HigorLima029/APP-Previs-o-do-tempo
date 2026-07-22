import type { WeatherTheme } from "../types/weather";

// Baseado nos grupos de código da própria API do OpenWeather:
// https://openweathermap.org/weather-conditions
export function definirTema(codigoClima: number, ehNoite: boolean): WeatherTheme {
  if (codigoClima >= 200 && codigoClima < 300) return "thunder";
  if (codigoClima >= 300 && codigoClima < 600) return "rain";
  if (codigoClima >= 600 && codigoClima < 700) return "snow";
  if (codigoClima >= 700 && codigoClima < 800) return "mist";
  if (codigoClima === 800) return ehNoite ? "clear-night" : "clear-day";
  return "clouds";
}

export const temaLabel: Record<WeatherTheme, string> = {
  "clear-day": "Céu limpo",
  "clear-night": "Noite limpa",
  clouds: "Nublado",
  rain: "Chuva",
  thunder: "Tempestade",
  snow: "Neve",
  mist: "Neblina",
};
