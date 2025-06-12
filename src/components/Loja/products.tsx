import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";

import CamisetaAzul from "./../../assets/productImg/CamisetaAzul.png";
import CalçaJeans from "./../../assets/productImg/CalçaJeans.png";
import TenisBranco from "./../../assets/productImg/TenisBranco.png";
import JaquetaCouro from "./../../assets/productImg/JaquetaCouro.png";
import BonePreto from "./../../assets/productImg/Boné Preto.png";
import RelogioDigital from "./../../assets/productImg/RelogioDigital.png";
import OculosDeSol from "./../../assets/productImg/OculosDeSol.png";
import CintoDeCouro from "./../../assets/productImg/CintoDeCouro.png";
import MeiasEsportivas from "./../../assets/productImg/MeiasEsporticas.png";
import MochilaEscolar from "./../../assets/productImg/MochilaEscolar.png";

export default function Products() {
  const AllProducts = [
    {
      id: 1,
      nome: "Camiseta Azul",
      desc: "Camiseta básica de algodão azul",
      price: 10.0,
      categoria: "camiseta",
      img: CamisetaAzul,
    },
    {
      id: 2,
      nome: "Calça Jeans",
      desc: "Calça jeans skinny",
      price: 35.0,
      categoria: "calça",
      img: CalçaJeans,
    },
    {
      id: 3,
      nome: "Tênis Branco",
      desc: "Tênis esportivo branco",
      price: 50.0,
      categoria: "sapato",
      img: TenisBranco,
    },
    {
      id: 4,
      nome: "Jaqueta de Couro",
      desc: "Jaqueta de couro sintético",
      price: 120.0,
      categoria: "jaqueta",
      img: JaquetaCouro,
    },
    {
      id: 5,
      nome: "Boné Preto",
      desc: "Boné ajustável preto",
      price: 15.0,
      categoria: "acessório",
      img: BonePreto,
    },
    {
      id: 6,
      nome: "Relógio Digital",
      desc: "Relógio com pulseira de silicone",
      price: 80.0,
      categoria: "acessório",
      img: RelogioDigital,
    },
    {
      id: 7,
      nome: "Óculos de Sol",
      desc: "Óculos com proteção UV",
      price: 45.0,
      categoria: "acessório",
      img: OculosDeSol,
    },
    {
      id: 8,
      nome: "Cinto de Couro",
      desc: "Cinto marrom de couro legítimo",
      price: 25.0,
      categoria: "acessório",
      img: CintoDeCouro,
    },
    {
      id: 9,
      nome: "Meias Esportivas",
      desc: "Pacote com 3 pares de meias",
      price: 12.0,
      categoria: "meia",
      img: MeiasEsportivas,
    },
    {
      id: 10,
      nome: "Mochila Escolar",
      desc: "Mochila resistente e confortável",
      price: 60.0,
      categoria: "acessório",
      img: MochilaEscolar,
    },
  ];

  const [busca, setBusca] = useState("");
  const [Categ, setCateg] = useState("");

  const produtosFiltrados = AllProducts.filter((produto) => {
    const nomeCorresponde = produto.nome
      .toLowerCase()
      .includes(busca.toLowerCase());
    const categoriaCorresponde = Categ === "" || produto.categoria === Categ;
    return nomeCorresponde && categoriaCorresponde;
  });

  interface Produto {
    id: number;
    nome: string;
    desc: string;
    price: number;
    categoria: string;
    img: string;
  }

  const navigate = useNavigate();

  function onSeeDetailsClick(produto: Produto) {
    const query = new URLSearchParams();

    query.set("id", produto.id.toString());
    query.set("nome", produto.nome);
    query.set("desc", produto.desc);
    query.set("categoria", produto.categoria);
    query.set("price", produto.price.toString());
    query.set("img", produto.img);

    navigate(`/produto?${query.toString()}`);
  }
  return (
    <div className="bg-gray-100 h-screen w-full p-8 flex flex-col gap-y-3">
      <h1 className="text-3xl font-bold mb-6 text-center text-black ">
        PRODUTOS
      </h1>
      <div className="filtro">
        <input
          onChange={(e) => setBusca(e.target.value)}
          value={busca}
          type="text"
          placeholder="Pesquisar..."
          className="pesquisa"
        />

        <select
          onChange={(e) => setCateg(e.target.value)}
          value={Categ}
          className="h-10 px-3 rounded-md border text-gray-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Todas as categorias</option>
          <option value="camiseta">Camisetas</option>
          <option value="calça">Calças</option>
          <option value="meia">Meias</option>
          <option value="sapato">Sapatos</option>
          <option value="acessório">Acessórios</option>
        </select>
      </div>
      <div
        className="sfProdutcs"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {produtosFiltrados.map((produto) => (
            <div
              onClick={() => onSeeDetailsClick(produto)}
              key={produto.id}
              className="cursor-pointer p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-black hover:text-white hover:bg-black"
            >
              <img
                src={produto.img}
                alt={produto.nome}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain mb-2"
              />
              <h2 className="text-base sm:text-lg font-semibold text-center mb-1">
                {produto.nome}
              </h2>
              <p className="text-green-600 font-bold text-sm sm:text-base">
                R${produto.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
