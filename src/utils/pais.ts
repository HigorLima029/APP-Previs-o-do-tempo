const nomesDePais = new Intl.DisplayNames(["pt-BR"], { type: "region" });

export function nomeCompletoDoPais(codigo: string): string {
  try {
    return nomesDePais.of(codigo) ?? codigo;
  } catch {
    return codigo;
  }
}
