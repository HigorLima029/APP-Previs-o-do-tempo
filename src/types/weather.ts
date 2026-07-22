// Formato bruto que a API do OpenWeather retorna
export interface OpenWeatherResponse {
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  dt: number;
  timezone: number;
  coord: {
    lat: number;
    lon: number;
  };
}

// Grupos de clima que definem o tema visual (fundo + animação)
export type WeatherTheme =
  | "clear-day"
  | "clear-night"
  | "clouds"
  | "rain"
  | "thunder"
  | "snow"
  | "mist";

// Formato já tratado, pronto para os componentes consumirem
export interface WeatherData {
  cidade: string;
  pais: string;
  temperatura: number;
  sensacao: number;
  descricao: string;
  umidade: number;
  vento: number;
  visibilidade: number;
  nascerDoSol: number;
  porDoSol: number;
  tema: WeatherTheme;
  ehNoite: boolean;
  atualizadoEm: number;
}

export class CidadeNaoEncontradaError extends Error {
  constructor(cidade: string) {
    super(`Cidade "${cidade}" não encontrada`);
    this.name = "CidadeNaoEncontradaError";
  }
}
