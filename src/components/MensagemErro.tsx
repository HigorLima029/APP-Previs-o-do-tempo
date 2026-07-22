import { CloudOff } from "lucide-react";
import "./MensagemErro.css";

export default function MensagemErro({ mensagem }: { mensagem: string }) {
  return (
    <div className="mensagem-erro">
      <CloudOff size={40} strokeWidth={1.5} />
      <p>{mensagem}</p>
    </div>
  );
}
