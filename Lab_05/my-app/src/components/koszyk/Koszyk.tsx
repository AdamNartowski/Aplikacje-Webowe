import Produkt from "./Produkt";

function Koszyk() {
  return (
    <div>
      <h2>Koszyk</h2>
      <Produkt nazwa="Karp" />
      <Produkt nazwa="Barszcz" />
      <Produkt nazwa="Uszka" />
      <Produkt nazwa="Kompot z suszu" />
      <Produkt nazwa="Kluski z makiem" />
    </div>
  );
}

export default Koszyk;
