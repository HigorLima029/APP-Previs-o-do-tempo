import { Link } from "react-router-dom";

export default function NaoEncontrado() {
  return (
    <div
      data-tema="clear-day"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        fontFamily: "var(--fonte-corpo)",
        color: "var(--cor-texto)",
        background: "linear-gradient(160deg, var(--ceu-1), var(--ceu-2))",
      }}
    >
      <h1 style={{ fontFamily: "var(--fonte-display)" }}>Página não encontrada</h1>
      <Link to="/" style={{ color: "var(--cor-texto)" }}>
        Voltar para a previsão do tempo
      </Link>
    </div>
  );
}
