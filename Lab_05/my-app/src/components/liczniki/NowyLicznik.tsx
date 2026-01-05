import { useState } from "react";
import Przycisk from "./Przycisk";

function NowyLicznik() {
  const [licznik, ustawLicznik] = useState<number>(0);

  function dodaj() {
    ustawLicznik(licznik + 1);
  }

  return (
    <div>
      <div>Nowy licznik: {licznik}</div>
      <Przycisk onClickHandler={dodaj} />
    </div>
  );
}

export default NowyLicznik;
