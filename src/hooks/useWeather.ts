import { useQuery } from "@tanstack/react-query";
import { buscarClimaPorCidade } from "../api/weather";

export function useWeather(cidade: string) {
  return useQuery({
    queryKey: ["clima", cidade.toLowerCase()],
    queryFn: () => buscarClimaPorCidade(cidade),
    enabled: cidade.trim().length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutos: evita refetch ao voltar pra mesma cidade
    retry: 1,
  });
}
