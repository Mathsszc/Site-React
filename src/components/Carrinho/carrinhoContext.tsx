import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
interface Produto {
  carId: number;
  nome: string;
  img: string;
  price: number;
  addCount: number;
}

interface CarrinhoContextProps {
  carrinho: Produto[];
  setCarrinho: React.Dispatch<React.SetStateAction<Produto[]>>;
  adicionarProduto: (produto: Produto) => void;
  incrementarItem: (id: number) => void;
  decrementarItem: (id: number) => void;
  excluirItem: (id: number) => void;
}

const CarrinhoContext = createContext<CarrinhoContextProps | undefined>(
  undefined
);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  function incrementarItem(id: number) {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item) =>
        item.carId === id ? { ...item, addCount: item.addCount + 1 } : item
      )
    );
  }

  function decrementarItem(id: number) {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item) =>
        item.carId === id
          ? { ...item, addCount: Math.max(1, item.addCount - 1) }
          : item
      )
    );
  }

  const adicionarProduto = (produto: Produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const excluirItem = (id: number) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((item) => item.carId !== id)
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        adicionarProduto,
        incrementarItem,
        decrementarItem,
        excluirItem,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de CarrinhoProvider");
  }
  return context;
}
