import { Droplets, Wind, Eye, Sunrise } from "lucide-react";
import type { WeatherData } from "../types/weather";
import IconeClima from "./IconeClima";
import "./CartaoClima.css";

function formatarHora(timestampSegundos: number) {
  return new Date(timestampSegundos * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function CartaoClima({ clima }: { clima: WeatherData }) {
  return (
    <div className="cartao" key={clima.cidade}>
      <div className="cartao__cabecalho">
        <h2 className="cartao__cidade">
          {clima.cidade}
          <span className="cartao__pais">{clima.pais}</span>
        </h2>
        <p className="cartao__descricao">{clima.descricao}</p>
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
          <Wind size={18} />
          <div>
            <span className="cartao__item-label">Vento</span>
            <span className="cartao__item-valor">{clima.vento} km/h</span>
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
          <Sunrise size={18} />
          <div>
            <span className="cartao__item-label">Nascer do sol</span>
            <span className="cartao__item-valor">{formatarHora(clima.nascerDoSol)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
