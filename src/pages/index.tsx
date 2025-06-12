import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Products from "../components/MainProducts/mainProducts";

export default function Inicial() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <Products></Products>
      <Footer />
    </div>
  );
}
