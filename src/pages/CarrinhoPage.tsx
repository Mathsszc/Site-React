import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import CarrinhoMain from "../components/Carrinho/carrinho";

export default function Carrinho() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <CarrinhoMain></CarrinhoMain>
      <Footer />
    </div>
  );
}
