import { useQuery } from "@tanstack/react-query";
import { buscarIndiceUV } from "../api/weather";

export function useUVIndex(latitude?: number, longitude?: number) {
  return useQuery({
    queryKey: ["indiceUV", latitude, longitude],
    queryFn: () => buscarIndiceUV(latitude as number, longitude as number),
    enabled: latitude !== undefined && longitude !== undefined,
    staleTime: 30 * 60 * 1000, // o índice UV muda pouco em 30 min
    retry: false, // se o One Call não estiver habilitado na conta, não insiste
  });
}
