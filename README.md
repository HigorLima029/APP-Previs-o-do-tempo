# 🌤️ Dev Previsão

Uma aplicação moderna de previsão do tempo desenvolvida com **React + Vite + TypeScript**, consumindo a API do **OpenWeather**. O projeto nasceu a partir de uma versão em **HTML, CSS e JavaScript puro** e foi totalmente reestruturado utilizando as principais ferramentas do ecossistema React.

Além das informações meteorológicas em tempo real, o aplicativo oferece uma interface dinâmica que muda conforme as condições climáticas, animações, previsão para cinco dias e uma arquitetura escalável.

---

## 📷 Preview

> Adicione aqui uma imagem ou GIF do projeto.

```md
![Preview do projeto](C:\app previsão do tempo/Video Project 1.gif)
```

---

## 🚀 Tecnologias

* ⚛️ React 19
* ⚡ Vite
* 🔷 TypeScript
* 🛣️ React Router
* 📦 TanStack Query (React Query)
* 🌐 Context API
* 🎨 CSS3
* 🎯 Lucide React
* ☁️ OpenWeather API

---

## ✨ Funcionalidades

### 🌍 Clima em tempo real

* Pesquisa de cidades
* Temperatura atual
* Sensação térmica
* Umidade
* Velocidade do vento
* Direção do vento (N, NE, L, SO...)
* Pressão atmosférica
* Visibilidade
* Nascer do sol
* Pôr do sol
* Latitude e longitude
* Nome completo do país
* Horário local da cidade

---

### 🌤️ Interface dinâmica

O aplicativo altera automaticamente toda sua aparência conforme o clima da cidade pesquisada.

Temas disponíveis:

* ☀️ Céu limpo (Dia)
* 🌙 Céu limpo (Noite)
* ☁️ Nublado
* 🌧️ Chuva
* ⛈️ Tempestade
* ❄️ Neve
* 🌫️ Neblina

Cada tema possui sua própria paleta de cores e animações.

---

### ✨ Animações

* Sol pulsando
* Lua e estrelas piscando
* Nuvens em movimento
* Chuva animada
* Raios durante tempestades
* Neve caindo
* Neblina flutuando
* Transição suave entre cidades

---

### 📅 Previsão para 5 dias

O projeto utiliza o endpoint `/forecast` da OpenWeather para gerar uma previsão resumida de cinco dias.

Cada card apresenta:

* Temperatura mínima
* Temperatura máxima
* Ícone representativo
* Dia da semana

---

### 🟢 Índice UV

Caso a **One Call API 3.0** esteja habilitada na conta OpenWeather, o aplicativo exibe:

* Valor do índice UV
* Classificação:

  * Baixo
  * Moderado
  * Alto
  * Muito Alto
  * Extremo

Caso a API não esteja disponível, o restante do sistema continua funcionando normalmente.

---

## 🏗️ Arquitetura

O projeto foi organizado para facilitar manutenção e escalabilidade.

```
src/
│
├── api/
│   └── weather.ts
│
├── components/
│   ├── BarraDeBusca.tsx
│   ├── CartaoClima.tsx
│   ├── Carregando.tsx
│   ├── Cena.tsx
│   ├── IconeClima.tsx
│   ├── MensagemErro.tsx
│   └── Previsao5Dias.tsx
│
├── context/
│   └── CidadeContext.tsx
│
├── hooks/
│   ├── useForecast.ts
│   ├── useUVIndex.ts
│   └── useWeather.ts
│
├── pages/
│   ├── Home.tsx
│   └── NaoEncontrado.tsx
│
├── types/
│   └── weather.ts
│
└── utils/
    ├── agruparPrevisao.ts
    ├── horario.ts
    ├── pais.ts
    ├── uv.ts
    ├── vento.ts
    └── weatherTheme.ts
```

---

## ⚙️ Como executar

Clone o projeto:

```bash
git clone https://github.com/SEU-USUARIO/dev-previsao.git
```

Entre na pasta:

```bash
cd dev-previsao
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env`:

```bash
cp .env.example .env
```

Adicione sua chave da OpenWeather:

```env
VITE_OPENWEATHER_API_KEY=SUA_CHAVE
```

Execute o projeto:

```bash
npm run dev
```

---

## 🔑 Configuração da API

Este projeto utiliza a API da OpenWeather.

Crie uma conta gratuitamente e obtenha sua chave em:

https://openweathermap.org/api

> **Importante**
>
> A chave utilizada durante o desenvolvimento da versão original foi removida do repositório. Sempre utilize uma chave própria.

---

## 📌 OpenWeather One Call API

O card de **Índice UV** depende da **One Call API 3.0**.

Essa API precisa estar habilitada na conta da OpenWeather e, em alguns casos, pode solicitar um cartão de crédito para ativação do plano gratuito.

Caso ela não esteja disponível:

* ✅ Todo o restante da aplicação continua funcionando normalmente.
* ❌ Apenas o card do Índice UV deixa de ser exibido.

---

## 📈 Roadmap

Próximas funcionalidades planejadas:

* [ ] Geolocalização automática
* [ ] Tema Claro/Escuro
* [ ] Histórico de pesquisas
* [ ] Favoritos
* [ ] Última cidade pesquisada
* [ ] Bandeira do país
* [ ] Mapa com Leaflet
* [ ] Gráfico de temperatura
* [ ] Qualidade do ar
* [ ] Radar meteorológico
* [ ] Alertas climáticos
* [ ] Compartilhar clima
* [ ] Progressive Web App (PWA)
* [ ] Autocomplete na pesquisa
* [ ] Multi-idiomas
* [ ] Sons ambientes
* [ ] Estatísticas de uso

---

## 📚 Conceitos aplicados

Este projeto utiliza diversas boas práticas do ecossistema React:

* Componentização
* Reutilização de componentes
* Context API
* Custom Hooks
* React Router
* TanStack Query
* Cache automático
* Loading States
* Error States
* TypeScript
* Organização por responsabilidades
* Variáveis CSS
* Responsividade
* Consumo de APIs REST

---

## 👨‍💻 Autor

Desenvolvido por **Higor Lima**.

* 💼 Analista de Suporte IoT
* 💻 Desenvolvedor Front-end
* ⚛️ React • TypeScript • JavaScript • C# • .NET

Se este projeto foi útil para você, deixe uma ⭐ no repositório.
