import "./carrinho.css";
import { useCarrinho } from "./carrinhoContext";
import { Minus, Plus, Trash } from "phosphor-react";

export default function CarrinhoMain() {
  const { carrinho, incrementarItem, decrementarItem, excluirItem } =
    useCarrinho();

  const produtosAgrupados = carrinho.reduce<
    Record<string, (typeof carrinho)[0]>
  >((acc, produto) => {
    const id = produto.carId.toString();
    if (acc[id]) {
      acc[id].addCount += produto.addCount;
    } else {
      acc[id] = { ...produto };
    }
    return acc;
  }, {});

  const listaFinal = Object.values(produtosAgrupados);

  const total = listaFinal.reduce(
    (acc, item) => acc + item.price * item.addCount,
    0
  );

  return (
    <div className="bg-white h-screen w-full flex justify-center">
      <div className="h-full w-2xl p-5">
        <h1 className="text-5xl text-black font-bold mb-4">Carrinho</h1>

        <div className="w-full h-full flex flex-col justify-start items-center">
          <div className="sfproduct scrollHidden flex flex-col justify-center">
            {listaFinal.length === 0 ? (
              <p className="text-black text-center">Seu carrinho está vazio.</p>
            ) : (
              listaFinal.map((produto) => (
                <div key={produto.carId} className="produto">
                  <div className="h-full w-full flex gap-2 items-center justify-between">
                    <div className="productImage">
                      <img
                        src={produto.img}
                        alt={produto.nome}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="infoProduct">
                      <div className="flex gap-3 p-3 justify-between">
                        <span className="text-black font-semibold">
                          {produto.nome}
                        </span>
                        <button
                          onClick={() => excluirItem(produto.carId)}
                          className="text-black hover:text-red-600 cursor-pointer"
                        >
                          <Trash size={30}></Trash>
                        </button>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="font-bold text-green-500">
                          R$ {(produto.addCount * produto.price).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex flex-row text-black justify-center">
                        <button
                          onClick={() => decrementarItem(produto.carId)}
                          className="buttonCountL buttonCount"
                        >
                          <Minus />
                        </button>
                        <label className="w-20 h-10 border-t-3 border-b-3 border-black flex items-center justify-center">
                          {produto.addCount}
                        </label>
                        <button
                          onClick={() => incrementarItem(produto.carId)}
                          className="buttonCountR buttonCount"
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="h-20 w-3/4 bg-amber-500 rounded-lg border-4 border-black flex justify-around items-center">
            <h1 className="font-bold">Total: R$ {total.toFixed(2)}</h1>
            <button className="finalizarCompra">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
}
