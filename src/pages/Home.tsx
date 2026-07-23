import { useCidade } from "../context/CidadeContext";
import { useWeather } from "../hooks/useWeather";
import { useForecast } from "../hooks/useForecast";
import { useUVIndex } from "../hooks/useUVIndex";
import { CidadeNaoEncontradaError } from "../types/weather";
import Cena from "../components/Cena";
import BarraDeBusca from "../components/BarraDeBusca";
import CartaoClima from "../components/CartaoClima";
import Previsao5Dias from "../components/Previsao5Dias";
import Carregando from "../components/Carregando";
import MensagemErro from "../components/MensagemErro";
import "./Home.css";

export default function Home() {
  const { cidade, buscarCidade } = useCidade();
  const { data: clima, isLoading, isError, error } = useWeather(cidade);
  const { data: previsao } = useForecast(cidade);
  const { data: indiceUV } = useUVIndex(clima?.latitude, clima?.longitude);

  const mensagemDeErro =
    error instanceof CidadeNaoEncontradaError
      ? `Não encontramos "${cidade}". Confira o nome e tente de novo.`
      : "Não foi possível buscar a previsão agora. Tente novamente em instantes.";

  return (
    <div data-tema={clima?.tema ?? "clear-day"} className="pagina">
      <Cena tema={clima?.tema ?? "clear-day"} />

      <main className="caixa-principal">
        <BarraDeBusca onBuscar={buscarCidade} />

        {isLoading && <Carregando />}
        {isError && !isLoading && <MensagemErro mensagem={mensagemDeErro} />}
        {clima && !isLoading && !isError && <CartaoClima clima={clima} indiceUV={indiceUV} />}
        {previsao && !isLoading && !isError && <Previsao5Dias dias={previsao} />}
      </main>
    </div>
  );
}
