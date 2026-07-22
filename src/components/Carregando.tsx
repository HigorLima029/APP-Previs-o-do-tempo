import "./Carregando.css";

export default function Carregando() {
  return (
    <div className="carregando" role="status" aria-label="Carregando previsão do tempo">
      <div className="carregando__linha carregando__linha--titulo" />
      <div className="carregando__linha carregando__linha--sub" />
      <div className="carregando__circulo" />
      <div className="carregando__grade">
        <div className="carregando__bloco" />
        <div className="carregando__bloco" />
        <div className="carregando__bloco" />
        <div className="carregando__bloco" />
      </div>
    </div>
  );
}
