import { ShoppingCart, CrownSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import "./header.css";
import { useCarrinho } from "../Carrinho/carrinhoContext";

function Header() {
  const { carrinho } = useCarrinho();
  const totalItens = carrinho.reduce((acc, item) => acc + item.addCount, 0);

  return (
    <header className="p-4 flex flex-col justify-center items-center">
      <h1 className="tituloHeader">
        <CrownSimple></CrownSimple> King Store
      </h1>
      <nav>
        <ul className="flex justify-end font-semibold buttonAlign">
          <li>
            <Link to="/">
              <button className="navButton rounded-l-lg">Início</button>
            </Link>
          </li>
          <li>
            <Link to="/loja">
              <button className="navButton">Loja</button>
            </Link>
          </li>
          <li>
            <Link to="/carrinho">
              <button className="navButton rounded-r-lg flex justify-center items-center gap-3">
                <ShoppingCart size={30} />
                {totalItens > 0 ? totalItens : ""}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
