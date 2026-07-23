import {
  CidadeNaoEncontradaError,
  type OpenWeatherForecastResponse,
  type OpenWeatherOneCallResponse,
  type OpenWeatherResponse,
  type PrevisaoDia,
  type WeatherData,
} from "../types/weather";
import { definirTema } from "../utils/weatherTheme";
import { agruparPorDia } from "../utils/agruparPrevisao";
import { direcaoVentoParaLabel } from "../utils/vento";
import { nomeCompletoDoPais } from "../utils/pais";

const CHAVE_API = import.meta.env.VITE_OPENWEATHER_API_KEY;
const URL_BASE = "https://api.openweathermap.org/data/2.5/weather";
const URL_PREVISAO = "https://api.openweathermap.org/data/2.5/forecast";
const URL_ONECALL = "https://api.openweathermap.org/data/3.0/onecall";

function normalizarDados(dados: OpenWeatherResponse): WeatherData {
  const clima = dados.weather[0];
  const ehNoite = clima.icon.endsWith("n");

  return {
    cidade: dados.name,
    pais: dados.sys.country,
    paisCompleto: nomeCompletoDoPais(dados.sys.country),
    temperatura: Math.round(dados.main.temp),
    sensacao: Math.round(dados.main.feels_like),
    descricao: clima.description,
    umidade: dados.main.humidity,
    vento: Math.round(dados.wind.speed * 3.6), // m/s -> km/h
    direcaoVento: dados.wind.deg,
    direcaoVentoLabel: direcaoVentoParaLabel(dados.wind.deg),
    pressao: dados.main.pressure,
    visibilidade: Math.round(dados.visibility / 1000), // metros -> km
    nascerDoSol: dados.sys.sunrise,
    porDoSol: dados.sys.sunset,
    latitude: dados.coord.lat,
    longitude: dados.coord.lon,
    timezone: dados.timezone,
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

// O índice UV depende do One Call API 3.0, que exige assinatura própria
// (gratuita, mas separada) na conta do OpenWeather. Por isso, em caso de
// falha, retornamos null em vez de quebrar o app inteiro.
export async function buscarIndiceUV(latitude: number, longitude: number): Promise<number | null> {
  const params = new URLSearchParams({
    lat: String(latitude),
    lon: String(longitude),
    appid: CHAVE_API,
    exclude: "minutely,hourly,daily,alerts",
    units: "metric",
  });

  try {
    const resposta = await fetch(`${URL_ONECALL}?${params.toString()}`);
    if (!resposta.ok) return null;

    const dados: OpenWeatherOneCallResponse = await resposta.json();
    return Math.round(dados.current.uvi);
  } catch {
    return null;
  }
}
