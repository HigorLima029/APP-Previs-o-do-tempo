import { Droplets, Wind, Eye, Sunrise, Sunset, Gauge, Clock, Sun } from "lucide-react";
import type { WeatherData } from "../types/weather";
import IconeClima from "./IconeClima";
import { horarioLocal } from "../utils/horario";
import { classificarUV } from "../utils/uv";
import "./CartaoClima.css";

function formatarHora(timestampSegundos: number) {
  return new Date(timestampSegundos * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

interface CartaoClimaProps {
  clima: WeatherData;
  indiceUV?: number | null;
}

export default function CartaoClima({ clima, indiceUV }: CartaoClimaProps) {
  const uv = indiceUV != null ? classificarUV(indiceUV) : null;

  return (
    <div className="cartao" key={clima.cidade}>
      <div className="cartao__cabecalho">
        <h2 className="cartao__cidade">
          {clima.cidade}
          <span className="cartao__pais">{clima.pais}</span>
        </h2>
        <p className="cartao__descricao">{clima.descricao}</p>
        <p className="cartao__local">
          {clima.paisCompleto} · {clima.latitude.toFixed(2)}, {clima.longitude.toFixed(2)}
        </p>
      </div>

      <div className="cartao__principal">
        <IconeClima tema={clima.tema} tamanho={72} />
        <span className="cartao__temperatura">{clima.temperatura}°</span>
      </div>

      <p className="cartao__sensacao">Sensação: {clima.sensacao}°</p>

      <div className="cartao__grade">
        <div className="cartao__item">
          <Droplets size={18} />
          <div>
            <span className="cartao__item-label">Umidade</span>
            <span className="cartao__item-valor">{clima.umidade}%</span>
          </div>
        </div>

        <div className="cartao__item">
          <Wind size={18} style={{ transform: `rotate(${clima.direcaoVento}deg)` }} />
          <div>
            <span className="cartao__item-label">Vento</span>
            <span className="cartao__item-valor">
              {clima.vento} km/h {clima.direcaoVentoLabel}
            </span>
          </div>
        </div>

        <div className="cartao__item">
          <Eye size={18} />
          <div>
            <span className="cartao__item-label">Visibilidade</span>
            <span className="cartao__item-valor">{clima.visibilidade} km</span>
          </div>
        </div>

        <div className="cartao__item">
          <Gauge size={18} />
          <div>
            <span className="cartao__item-label">Pressão</span>
            <span className="cartao__item-valor">{clima.pressao} hPa</span>
          </div>
        </div>

        <div className="cartao__item">
          <Sunrise size={18} />
          <div>
            <span className="cartao__item-label">Nascer do sol</span>
            <span className="cartao__item-valor">{formatarHora(clima.nascerDoSol)}</span>
          </div>
        </div>

        <div className="cartao__item">
          <Sunset size={18} />
          <div>
            <span className="cartao__item-label">Pôr do sol</span>
            <span className="cartao__item-valor">{formatarHora(clima.porDoSol)}</span>
          </div>
        </div>

        <div className="cartao__item">
          <Clock size={18} />
          <div>
            <span className="cartao__item-label">Horário local</span>
            <span className="cartao__item-valor">{horarioLocal(clima.timezone)}</span>
          </div>
        </div>

        {uv && (
          <div className="cartao__item">
            <Sun size={18} style={{ color: uv.cor }} />
            <div>
              <span className="cartao__item-label">Índice UV</span>
              <span className="cartao__item-valor" style={{ color: uv.cor }}>
                {indiceUV} · {uv.nivel}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
