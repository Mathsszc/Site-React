import Camiseta from "../../assets/productImg/Camiseta.png";
import Calça from "../../assets/productImg/Calça.png";
import Meia from "../../assets/productImg/Meias.png";
import Sapato from "../../assets/productImg/Sapato.png";
import "./mainProducts.css";

import { Storefront } from "phosphor-react";
import { Link } from "react-router-dom";

function Products() {
  const oficialProducts = [
    {
      id: 1,
      name: "Camiseta",
      desc: "Produto novo",
      price: 10.99,
      image: Camiseta,
    },
    {
      id: 2,
      name: "Calça",
      desc: "Produto novo",
      price: 15.5,
      image: Calça,
    },
    {
      id: 3,
      name: "Meia",
      desc: "Produto novo",
      price: 20.0,
      image: Meia,
    },
    {
      id: 4,
      name: "Sapato",
      desc: "Produto novo",
      price: 20.0,
      image: Sapato,
    },
  ];

  return (
    <div className=" mainProducts">
      <p className="desc">
        A King Store é uma loja online que oferece produtos de qualidade com
        praticidade, segurança e preços justos. Com um site fácil de navegar e
        entrega para todo o Brasil, buscamos tornar sua experiência de compra
        rápida, simples e confiável. Atendemos com atenção e garantimos um
        ambiente 100% seguro para você comprar sem sair de casa.
      </p>
      <h1 className="text-5xl font-bold py-10 flex items-center gap-2 text-left">
        <Storefront size={48} />
        Principais Produtos
      </h1>

      <div className="products blackHover">
        {oficialProducts.map((produto) => (
          <Link to={"/loja"}>
            <div key={produto.id} className="produtoMain productHover">
              <label className="font-bold mb-2">{produto.name}</label>
              <img
                src={produto.image}
                alt={produto.name}
                className="w-2/3 h-2/3 object-cover rounded-md mb-2"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
