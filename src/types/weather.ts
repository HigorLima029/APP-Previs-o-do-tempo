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

// Formato bruto do endpoint /forecast (previsão de 5 dias / 3 em 3 horas)
export interface OpenWeatherForecastResponse {
  city: {
    name: string;
    country: string;
  };
  list: {
    dt: number;
    dt_txt: string;
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: {
      id: number;
      icon: string;
      description: string;
    }[];
  }[];
}

// Um dia já resumido, pronto para o card horizontal
export interface PrevisaoDia {
  data: number; // timestamp (meio-dia daquele dia)
  diaSemana: string; // "Hoje", "Amanhã", "Qui", "Sex"...
  minima: number;
  maxima: number;
  tema: WeatherTheme;
  descricao: string;
}

export class CidadeNaoEncontradaError extends Error {
  constructor(cidade: string) {
    super(`Cidade "${cidade}" não encontrada`);
    this.name = "CidadeNaoEncontradaError";
  }
}
