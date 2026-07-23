import { useQuery } from "@tanstack/react-query";
import { buscarPrevisao5Dias } from "../api/weather";

export function useForecast(cidade: string) {
  return useQuery({
    queryKey: ["previsao5dias", cidade.toLowerCase()],
    queryFn: () => buscarPrevisao5Dias(cidade),
    enabled: cidade.trim().length > 0,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}
