import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CidadeProvider } from "./context/CidadeContext";
import Home from "./pages/Home";
import NaoEncontrado from "./pages/NaoEncontrado";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CidadeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </BrowserRouter>
      </CidadeProvider>
    </QueryClientProvider>
  );
}

export default App;
