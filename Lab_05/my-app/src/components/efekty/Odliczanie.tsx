import { useState, useEffect } from "react";

function Odliczanie() {
  const [czas, ustawCzas] = useState<number>(15.0);
  const [odlicza, ustawOdlicza] = useState<boolean>(false);
  const [zakonczone, ustawZakonczone] = useState<boolean>(false);

  useEffect(() => {
    if (!odlicza) return;

    const interval = setInterval(() => {
      ustawCzas((poprzedniCzas) => {
        if (poprzedniCzas <= 0.1) return 0;
        return poprzedniCzas - 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [odlicza]);

  useEffect(() => {
    if (czas <= 0) {
      ustawZakonczone(true);
      ustawOdlicza(false);
      ustawCzas(0);
    }
  }, [czas]);

  function przelaczStoper() {
    ustawOdlicza(!odlicza);
  }

  let napisPrzycisku = "START";
  if (zakonczone) napisPrzycisku = "Odliczanie zakończone";
  else if (odlicza) napisPrzycisku = "STOP";

  return (
    <div>
      <h2>{czas.toFixed(1)} sek</h2>
      <button onClick={przelaczStoper} disabled={zakonczone}>
        {napisPrzycisku}
      </button>
    </div>
  );
}

export default Odliczanie;
