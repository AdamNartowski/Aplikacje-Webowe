import Produkt from "./Produkt";

function NowyKoszyk() {
  const nazwyProdoktow: string[] = [
    "Karp",
    "Barszcz",
    "Uszka",
    "Kompot z suszu",
    "Kluski z makiem",
  ];

  return (
    <div>
      <h2>Nowy Koszyk</h2>
      {nazwyProdoktow.map((nazwa, index) => (
        <Produkt key={index} nazwa={nazwa} />
      ))}
    </div>
  );
}

export default NowyKoszyk;
