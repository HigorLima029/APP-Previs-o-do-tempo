import { createContext, useContext, useState, type ReactNode } from "react";

interface CidadeContextType {
  cidade: string;
  buscarCidade: (novaCidade: string) => void;
}

const CidadeContext = createContext<CidadeContextType | undefined>(undefined);

export function CidadeProvider({ children }: { children: ReactNode }) {
  const [cidade, setCidade] = useState("Rio de Janeiro");

  function buscarCidade(novaCidade: string) {
    const cidadeLimpa = novaCidade.trim();
    if (cidadeLimpa.length === 0) return;
    setCidade(cidadeLimpa);
  }

  return (
    <CidadeContext.Provider value={{ cidade, buscarCidade }}>
      {children}
    </CidadeContext.Provider>
  );
}

export function useCidade() {
  const contexto = useContext(CidadeContext);
  if (!contexto) {
    throw new Error("useCidade precisa ser usado dentro de um CidadeProvider");
  }
  return contexto;
}
