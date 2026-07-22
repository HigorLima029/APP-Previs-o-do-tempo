import { useMemo } from "react";
import type { WeatherTheme } from "../types/weather";
import "./Cena.css";

interface CenaProps {
  tema: WeatherTheme;
}

function gerarParticulas(quantidade: number) {
  return Array.from({ length: quantidade }, (_, i) => ({
    id: i,
    esquerda: Math.random() * 100,
    atraso: Math.random() * 6,
    duracao: 3 + Math.random() * 4,
    escala: 0.6 + Math.random() * 0.8,
  }));
}

export default function Cena({ tema }: CenaProps) {
  const chuva = useMemo(() => gerarParticulas(70), [tema === "rain" || tema === "thunder"]);
  const neve = useMemo(() => gerarParticulas(45), [tema === "snow"]);
  const estrelas = useMemo(() => gerarParticulas(50), [tema === "clear-night"]);

  return (
    <div className="cena" aria-hidden="true">
      <div className="cena__ceu" />

      {tema === "clear-day" && (
        <div className="cena__sol">
          <div className="cena__sol-nucleo" />
          <div className="cena__sol-raios" />
        </div>
      )}

      {tema === "clear-night" && (
        <>
          <div className="cena__lua" />
          <div className="cena__campo-estrelas">
            {estrelas.map((e) => (
              <span
                key={e.id}
                className="cena__estrela"
                style={{
                  left: `${e.esquerda}%`,
                  top: `${(e.id * 37) % 70}%`,
                  animationDelay: `${e.atraso}s`,
                  animationDuration: `${e.duracao}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {(tema === "clouds" || tema === "clear-day") && (
        <div className="cena__nuvens">
          <div className="cena__nuvem cena__nuvem--1" />
          <div className="cena__nuvem cena__nuvem--2" />
          <div className="cena__nuvem cena__nuvem--3" />
        </div>
      )}

      {tema === "mist" && (
        <div className="cena__neblina">
          <div className="cena__banco-neblina cena__banco-neblina--1" />
          <div className="cena__banco-neblina cena__banco-neblina--2" />
          <div className="cena__banco-neblina cena__banco-neblina--3" />
        </div>
      )}

      {(tema === "rain" || tema === "thunder") && (
        <div className="cena__chuva">
          {chuva.map((p) => (
            <span
              key={p.id}
              className="cena__gota"
              style={{
                left: `${p.esquerda}%`,
                animationDelay: `${p.atraso * 0.3}s`,
                animationDuration: `${0.6 + p.duracao * 0.15}s`,
              }}
            />
          ))}
        </div>
      )}

      {tema === "thunder" && <div className="cena__relampago" />}

      {tema === "snow" && (
        <div className="cena__neve">
          {neve.map((p) => (
            <span
              key={p.id}
              className="cena__floco"
              style={{
                left: `${p.esquerda}%`,
                animationDelay: `${p.atraso}s`,
                animationDuration: `${p.duracao + 4}s`,
                transform: `scale(${p.escala})`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
