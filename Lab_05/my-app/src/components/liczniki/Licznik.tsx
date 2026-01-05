import { useState } from "react";

function Licznik() {
  const [licznik, ustawLicznik] = useState<number>(0);

  function dodaj() {
    ustawLicznik(licznik + 1);
  }

  return (
    <div>
      <div>Stan licznika: {licznik}</div>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
}

export default Licznik;
