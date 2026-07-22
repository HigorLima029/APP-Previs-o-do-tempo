import { Sun, Moon, Cloud, CloudRain, CloudLightning, CloudSnow, CloudFog } from "lucide-react";
import type { WeatherTheme } from "../types/weather";

const mapa: Record<WeatherTheme, typeof Sun> = {
  "clear-day": Sun,
  "clear-night": Moon,
  clouds: Cloud,
  rain: CloudRain,
  thunder: CloudLightning,
  snow: CloudSnow,
  mist: CloudFog,
};

export default function IconeClima({ tema, tamanho = 64 }: { tema: WeatherTheme; tamanho?: number }) {
  const Icone = mapa[tema];
  return <Icone size={tamanho} strokeWidth={1.5} />;
}
