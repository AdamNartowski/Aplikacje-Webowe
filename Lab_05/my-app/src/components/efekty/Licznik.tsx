import { useState, useEffect } from "react";

function Licznik() {
  const [licznik, ustawLicznik] = useState<number>(0);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  useEffect(() => {
    console.log("Licznik zwiększył się do " + licznik);
  }, [licznik]);

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
