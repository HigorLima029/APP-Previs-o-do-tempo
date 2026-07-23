export function horarioLocal(timezoneOffsetSegundos: number): string {
  const agoraUtc = Date.now() + new Date().getTimezoneOffset() * 60 * 1000;
  const dataLocal = new Date(agoraUtc + timezoneOffsetSegundos * 1000);

  return dataLocal.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
