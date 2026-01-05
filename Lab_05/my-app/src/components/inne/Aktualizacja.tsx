import { useState } from "react";

function Aktualizacja() {
  const [produkt, ustawProdukt] = useState({ nazwa: "Pomidor", cena: 50 });

  function zmienCene() {
    ustawProdukt((poprzedniStan) => ({
      ...poprzedniStan,
      cena: 100,
    }));
  }

  return (
    <div>
      <div>
        Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
      </div>
      <button onClick={zmienCene}>Zmień cenę</button>
    </div>
  );
}

export default Aktualizacja;
