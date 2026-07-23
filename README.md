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

⚠️ **Índice UV**: esse dado vem do **One Call API 3.0**, que exige uma assinatura separada
na sua conta OpenWeather (tem um plano gratuito, mas precisa ser habilitado — e pode pedir
cartão de crédito). Se não estiver habilitado, o card do índice UV simplesmente não aparece;
o resto do app continua funcionando normal, sem quebrar.

## Estrutura

```
src/
  api/weather.ts            # chamadas às APIs do OpenWeather (clima, previsão, UV)
  types/weather.ts           # tipos + normalização dos dados da API
  utils/weatherTheme.ts       # mapeia código de clima -> tema visual
  utils/agruparPrevisao.ts     # agrupa a previsão de 3/3h em resumo diário
  utils/vento.ts                # graus -> ponto cardeal (N, NE, L...)
  utils/pais.ts                  # código do país -> nome completo em pt-BR
  utils/horario.ts                # horário local da cidade a partir do timezone
  utils/uv.ts                      # classifica o índice UV (nível + cor)
  context/CidadeContext.tsx  # Context API (cidade atual)
  hooks/useWeather.ts         # hook do TanStack Query (clima atual)
  hooks/useForecast.ts         # hook do TanStack Query (previsão de 5 dias)
  hooks/useUVIndex.ts            # hook do TanStack Query (índice UV, opcional)
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

## O que já está pronto (Nível 2 — mais dados)

- [x] Direção do vento (ponto cardeal + ícone rotacionado)
- [x] Pressão atmosférica
- [x] Pôr do sol (além do nascer do sol)
- [x] Latitude/longitude e nome completo do país
- [x] Horário local da cidade (calculado a partir do offset de timezone da API)
- [x] Índice UV, com nível (baixo/moderado/alto/muito alto/extremo) e cor — via
      One Call API 3.0 (ver aviso acima; opcional/gracioso se não configurado)

## O que já está pronto (Nível 3 — previsão estendida)

- [x] Previsão de 5 dias em cards horizontais (endpoint `/forecast`, agrupando os
      dados de 3 em 3 horas por dia — mínima, máxima e ícone do horário mais
      próximo do meio-dia)

## Roadmap (próximos passos, ainda não implementados)

- [ ] Geolocalização automática ao abrir o site
- [ ] Tema claro/escuro com preferência salva
- [ ] Histórico de pesquisas e favoritos (localStorage)
- [ ] Última cidade pesquisada salva
- [ ] Bandeira do país
- [ ] Mapa (Leaflet), gráfico de temperatura (Chart.js)
- [ ] Qualidade do ar, radar de chuva, alertas climáticos
- [ ] Compartilhar clima, PWA, busca com autocomplete, multi-idiomas, sons ambiente,
      estatísticas de uso
