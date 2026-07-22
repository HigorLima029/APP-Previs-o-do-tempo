import { useState } from "react";
import { Search } from "lucide-react";
import "./BarraDeBusca.css";

interface BarraDeBuscaProps {
  onBuscar: (cidade: string) => void;
}

export default function BarraDeBusca({ onBuscar }: BarraDeBuscaProps) {
  const [valor, setValor] = useState("");

  function enviar() {
    onBuscar(valor);
  }

  return (
    <div className="barra-busca">
      <input
        className="barra-busca__input"
        placeholder="Digite o nome da cidade"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") enviar();
        }}
      />
      <button
        className="barra-busca__botao"
        onClick={enviar}
        aria-label="Buscar cidade"
      >
        <Search size={20} />
      </button>
    </div>
  );
}
