import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { useSearchParams } from "react-router-dom";
import "../components/Loja/ProductView.css";

import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

import { useCarrinho } from "../components/Carrinho/carrinhoContext";

export default function ProductView() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const nome = searchParams.get("nome") ?? "Sem nome";
  const desc = searchParams.get("desc") ?? "Sem descrição";
  const categoria = searchParams.get("categoria") ?? "Indefinido";
  const stringPrice = searchParams.get("price") ?? "0";
  const img = searchParams.get("img") ?? "";

  const [countState, setCountState] = useState({ count: 0 });

  const { adicionarProduto } = useCarrinho();

  function Increment() {
    setCountState((prev) => ({ count: prev.count + 1 }));
  }

  function Decrement() {
    setCountState((prev) => ({ count: Math.max(0, prev.count - 1) }));
  }

  function Clear() {
    setCountState({ count: 0 });
  }

  function adicionarAoCarrinho() {
    const price = Number(stringPrice);
    const addCount = countState.count;
    const carId = Number(id);
    if (countState.count === 0 || price <= 0) return;

    for (let i = 0; i < countState.count; i++) {
      adicionarProduto({
        carId,
        nome,
        price,
        addCount,
        img,
      });
    }

    Clear();
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="mainview">
          <div className="frame imageButton">
            <div className=" imageProduct">
              <img
                src={img}
                alt={nome}
                className="w-2/3 h-2/3 object-cover rounded-md mb-2"
              />
            </div>
            <div className="buttons">
              <label className="text-green-600 font-bold text-lg px-2">
                Total: R${(countState.count * Number(stringPrice)).toFixed(2)}
              </label>
              <div className="flex flex-row text-black">
                <button
                  onClick={Decrement}
                  className="buttonCountL buttonCount"
                >
                  <Minus />
                </button>
                <label className="w-20 h-10 border-t-3 border-b-3 border-black flex items-center justify-center">
                  {countState.count}
                </label>
                <button
                  onClick={Increment}
                  className="buttonCountR buttonCount"
                >
                  <Plus />
                </button>
              </div>

              <button onClick={Clear} className="clear">
                Limpar
              </button>

              <button onClick={adicionarAoCarrinho} className="addCart">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
          <div className="infosProduct">
            <label className="text-gray-500 font-bold px-2 py-5">
              {categoria.toUpperCase()}
            </label>
            <h1 className="text-black font-bold text-4xl px-2">{nome}</h1>
            <label className="text-gray-500 px-2">{desc}</label>
            <label className="text-green-600 font-bold text-lg px-2">
              R$ {Number(stringPrice).toFixed(2)}
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
