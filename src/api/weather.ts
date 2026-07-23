import {
  CidadeNaoEncontradaError,
  type OpenWeatherForecastResponse,
  type OpenWeatherResponse,
  type PrevisaoDia,
  type WeatherData,
} from "../types/weather";
import { definirTema } from "../utils/weatherTheme";
import { agruparPorDia } from "../utils/agruparPrevisao";

const CHAVE_API = import.meta.env.VITE_OPENWEATHER_API_KEY;
const URL_BASE = "https://api.openweathermap.org/data/2.5/weather";
const URL_PREVISAO = "https://api.openweathermap.org/data/2.5/forecast";

function normalizarDados(dados: OpenWeatherResponse): WeatherData {
  const clima = dados.weather[0];
  const ehNoite = clima.icon.endsWith("n");

  return {
    cidade: dados.name,
    pais: dados.sys.country,
    temperatura: Math.round(dados.main.temp),
    sensacao: Math.round(dados.main.feels_like),
    descricao: clima.description,
    umidade: dados.main.humidity,
    vento: Math.round(dados.wind.speed * 3.6), // m/s -> km/h
    visibilidade: Math.round(dados.visibility / 1000), // metros -> km
    nascerDoSol: dados.sys.sunrise,
    porDoSol: dados.sys.sunset,
    tema: definirTema(clima.id, ehNoite),
    ehNoite,
    atualizadoEm: dados.dt,
  };
}

export async function buscarClimaPorCidade(cidade: string): Promise<WeatherData> {
  const params = new URLSearchParams({
    q: cidade,
    appid: CHAVE_API,
    lang: "pt_br",
    units: "metric",
  });

  const resposta = await fetch(`${URL_BASE}?${params.toString()}`);

  if (resposta.status === 404) {
    throw new CidadeNaoEncontradaError(cidade);
  }

  if (!resposta.ok) {
    throw new Error("Não foi possível buscar a previsão do tempo agora.");
  }

  const dados: OpenWeatherResponse = await resposta.json();
  return normalizarDados(dados);
}

export async function buscarPrevisao5Dias(cidade: string): Promise<PrevisaoDia[]> {
  const params = new URLSearchParams({
    q: cidade,
    appid: CHAVE_API,
    lang: "pt_br",
    units: "metric",
  });

  const resposta = await fetch(`${URL_PREVISAO}?${params.toString()}`);

  if (resposta.status === 404) {
    throw new CidadeNaoEncontradaError(cidade);
  }

  if (!resposta.ok) {
    throw new Error("Não foi possível buscar a previsão estendida agora.");
  }

  const dados: OpenWeatherForecastResponse = await resposta.json();
  return agruparPorDia(dados);
}
