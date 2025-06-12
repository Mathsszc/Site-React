import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Loja from "./pages/Loja";
import Carrinho from "./pages/CarrinhoPage";
import "./App.css";
import ProductView from "./pages/ProductView";
import { CarrinhoProvider } from "./components/Carrinho/carrinhoContext";

function App() {
  return (
    <Router>
      <CarrinhoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/produto" element={<ProductView />} />
        </Routes>
      </CarrinhoProvider>
    </Router>
  );
}

export default App;
