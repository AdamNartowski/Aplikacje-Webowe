import { useState, useEffect } from "react";

function Licznik() {
  const [licznik, ustawLicznik] = useState<number>(() => {
    const zapisanaWartosc = localStorage.getItem("licznikWartosc");
    if (zapisanaWartosc !== null) {
      return parseInt(zapisanaWartosc, 10);
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("licznikWartosc", licznik.toString());
  }, [licznik]);

  return (
    <div>
      <h3>Licznik</h3>
      <div>Stan licznika: {licznik}</div>
      <button onClick={() => ustawLicznik(licznik + 1)}>Dodaj</button>
    </div>
  );
}

export default Licznik;
