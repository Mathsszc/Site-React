import { useCarrinho } from "./carrinhoContext";

export default function CarrinhoMain() {
  const { carrinho } = useCarrinho();

  return (
    <div className="p-4 border mt-4">
      <h2 className="text-xl font-bold">Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        carrinho.map((item, i) => (
          <div key={i} className="p-2 border-b">
            {item.nome} - R$ {item.price.toFixed(2)}
          </div>
        ))
      )}
    </div>
  );
}
