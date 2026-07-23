# Dev Previsão

App de previsão do tempo migrado de HTML/CSS/JS puro para **React + Vite + TypeScript**.

## Stack

- **Vite + React + TypeScript**
- **React Router** — rotas (`/` e página 404)
- **Context API** (`CidadeContext`) — guarda a cidade pesquisada atualmente
- **TanStack Query** (`useWeather`) — busca, cache (5 min) e estados de loading/erro
- **lucide-react** — ícones
- CSS puro com variáveis (`--ceu-1`, `--ceu-2`, `--acento`) trocadas por tema de clima

## Como rodar

```bash
npm install
cp .env.example .env
# edite o .env e coloque sua chave da API do OpenWeather
npm run dev
```

⚠️ **Importante**: a chave antiga do projeto original ficou exposta no código (`scripts.js`).
Gere uma chave nova em https://openweathermap.org/api e revogue a antiga antes de usar este projeto.

## Estrutura

```
src/
  api/weather.ts          # chamada à API do OpenWeather
  types/weather.ts         # tipos + normalização dos dados da API
  utils/weatherTheme.ts     # mapeia código de clima -> tema visual
  context/CidadeContext.tsx # Context API (cidade atual)
  hooks/useWeather.ts        # hook do TanStack Query (clima atual)
  hooks/useForecast.ts        # hook do TanStack Query (previsão de 5 dias)
  components/
    Cena.tsx               # fundo animado (sol, chuva, neve, nuvens...)
    BarraDeBusca.tsx
    CartaoClima.tsx
    Previsao5Dias.tsx       # cards horizontais com a previsão de 5 dias
    IconeClima.tsx
    Carregando.tsx          # skeleton de loading
    MensagemErro.tsx
  pages/
    Home.tsx
    NaoEncontrado.tsx
```

## O que já está pronto (Nível 1 — melhorias visuais)

- [x] Fundo muda conforme o clima (7 temas: dia limpo, noite limpa, nublado, chuva,
      tempestade, neve, neblina), cada um com paleta e animação próprias
- [x] Animações: sol pulsando, lua + estrelas piscando, nuvens derivando, chuva caindo,
      raio piscando, neve caindo, neblina flutuando
- [x] Fade suave ao trocar de cidade
- [x] Loading com skeleton no formato do card
- [x] Cards modernos: temperatura, sensação térmica, umidade, vento, visibilidade,
      nascer do sol
- [x] Ícones da lucide-react no lugar dos PNGs do OpenWeather
- [x] Tratamento de erro (cidade não encontrada / falha na API) — ganho "de graça"
      com os estados do TanStack Query
- [x] Busca por Enter, além do clique

## O que já está pronto (Nível 3 — previsão estendida)

- [x] Previsão de 5 dias em cards horizontais (endpoint `/forecast`, agrupando os
      dados de 3 em 3 horas por dia — mínima, máxima e ícone do horário mais
      próximo do meio-dia)

## Roadmap (próximos passos, ainda não implementados)

**Nível 2 — mais dados**
- [ ] Direção do vento, pressão atmosférica, pôr do sol, latitude/longitude, país
      completo, horário local, índice UV

**Outras melhorias da lista**
- [ ] Geolocalização automática ao abrir o site
- [ ] Tema claro/escuro com preferência salva
- [ ] Histórico de pesquisas e favoritos (localStorage)
- [ ] Última cidade pesquisada salva
- [ ] Bandeira do país
- [ ] Mapa (Leaflet), gráfico de temperatura (Chart.js)
- [ ] Qualidade do ar, radar de chuva, alertas climáticos
- [ ] Compartilhar clima, PWA, busca com autocomplete, multi-idiomas, sons ambiente,
      estatísticas de uso
