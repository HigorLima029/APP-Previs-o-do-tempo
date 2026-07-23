import type { PrevisaoDia } from "../types/weather";
import IconeClima from "./IconeClima";
import "./Previsao5Dias.css";

export default function Previsao5Dias({ dias }: { dias: PrevisaoDia[] }) {
  return (
    <div className="previsao">
      <h3 className="previsao__titulo">Próximos dias</h3>
      <div className="previsao__lista">
        {dias.map((dia) => (
          <div className="previsao__card" key={dia.data}>
            <span className="previsao__dia">{dia.diaSemana}</span>
            <IconeClima tema={dia.tema} tamanho={28} />
            <div className="previsao__temperaturas">
              <span className="previsao__maxima">{dia.maxima}°</span>
              <span className="previsao__minima">{dia.minima}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
